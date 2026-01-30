'use client'

const { useContext, useState, useEffect, createContext } = require("react")
import { getCurrentUser } from "@/api/userApis"

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchUser = async () => {
        try {
            setLoading(true)
            const response = await getCurrentUser()
            setUser(response.data.user || null)
            setLoading(false)
        } catch (error) {
            console.error(error)
            setUser(null)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!user) {
            fetchUser()
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            fetchUser,
            userLoading: loading,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}