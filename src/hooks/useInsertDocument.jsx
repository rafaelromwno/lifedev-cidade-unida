import { usestate, useEffect, useReduzer } from "react"
import db from '../firebase/config'
import { collection, addDoc, Timestamp } from "firebase/firestore"

const initialState = {

    loading: null,
    error: null,

}

const insertReducer = (state, action) => {
    switch(action.type){
        case "LOADING":
            return { loading: true, erro: null }

            case "INSERT_DOC":
                return { loading: false, error: null } 

                case "ERROR":
                    return { loading: false, error: action.playload }

                    default:
                        return state

    }
}

export const useInsertDocument = ( docColletion ) => {
    const [reponse, dispatch] = useReducer(InsertReducer, initialState)
    const [cancelled, setCancelled] = useState(false)

    const checkCancelBeforeDispatcher = (action) => {
        if (!cancelled) {
            dispatch(action)
        }
    }

    const insertDocument = async (document) => {
        checkCancelBeforeDispatch ({ type: "LOADING"})
    }

    try{
        const newDocument = {...document, createAt:Timestamp.now()}
        const insertDocument = await addDoc(
            collection(db, doCollection),
            newDocument
        )

            checkCancelBeforeDispatch ({
                type: "INSERT_DOC",
                payload: insertDocument
            })

        }catch(error){
            checkCancelBeforeDispatcher({type: "ERROR", payload: error.message})
        }
    
        useEffect(() =>{
            return () => SetCancelled(true)
        })

        return { insertDocument, response};
    
    }

