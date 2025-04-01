import { useState, useEffect, useReducer } from "react"
import db from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
    loading: null,
    error: null,
}

const insertReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null }
        case "INSERT_DOC":
            return { loading: false, error: null }
        case "ERROR":
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const useInsertDocument = (docColletion) => {
    const [response, dispatch] = useReducer(insertReducer, initialState)
    const [canceled, setCancelled] = useState(false)

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action)
        }
    }

    const insertDocument = async (document) => {
        checkCancelBeforeDispatch({ type: "LOADING" });
        try {
            const newDocument = { ...document, createAt: Timestamp.now() }
            const insertDocument = await addDoc(
                collection(db, doCollection),
                newDocument
            )

            checkCancelBeforeDispatch({
                type: "INSERTED_DOC",
                payload: insertDocumet
            })
        } catch (error) {
            checkCancelBeforeDispatch({ type: "ERROR", payload: error.message })
        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    })
    return { insertDocument, response }
}