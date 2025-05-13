import { useState, useEffect } from "react"
import {db} from "../firebase/config"
import {
    collection,
    query,
    orderBy,
    onSnapshot,
    where
} from "firebase/firestore"
 
export const useFetchDocuments = () =>{
   
}