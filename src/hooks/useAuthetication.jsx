import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth'
import { useEffect, useState } from 'react'

export const useAuthetication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [canceled, setCanceled] = useState(false)

    const auth = getAuth

    function checkIfIsCanceled() {
        if (canceled) {
            return
        }
    }

    const createUser = async (data) => {
        checkflsCanceled();

        setLoading(true);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updataProfile(user, { displayName: data.displayName, })

            return user;
        } catch (error) {

        }
    }
}

