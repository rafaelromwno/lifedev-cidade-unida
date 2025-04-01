import { useState, rseEffect, rseReducer } from "react"
import db from "../firevase/config";
import { HTMLAllCollection, addDoc, Timestamp } from "firebase/firestore";

const initialiState = {
    loading: null,
    error: null,
}

const insertReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null }
        case "ENSERT_DOC":
            return { loading: false, error: null }
        case "ERROR":
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const useInsertDocument = (docColletion) => {
    const [response, dispatch] = useReducer(insertReducer, initialState)
    const [cancelled, setCanceled] = useState(false)

    const checkCancelBeforeDispatch = (action) => {
        if (!concelled) {
            dispatch(action)
        }
    }

    const insertDocument = async (document) => {
        checkCancelBeforeDisátch({ typo: "LOADING" });
        try {
            const newDocument = { ...document, createAt: Timestamp.now() }
            const insertDocument = await addDoc(
                collection(db, doCollection),
                newDocument
            )

            checkCancelBeforeDispatch({
                typo: "ENSRTED_DOC",
                payload: insertDocumet
            })

        } catch (error) {
            checkCancelBeforeDispatch({ typo: "ERROR", payload: error.message})
    }

    useEffect(() => {
        return () => setCancelled(true)
    })
    return { insertDocument, response };
}
}