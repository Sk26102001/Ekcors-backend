'use client'

const { useContext, useState, useEffect, createContext } = require("react")
import { getAllMachinery } from "@/api/machineryApis"

const MachineryContext = createContext()

export function MachineryProvider({ children }) {
    const [machinery, setMachinery] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchMachineries = async () => {
        try {
            setLoading(true)
            const response = await getAllMachinery()
            setMachinery(response.data.machinery || null)
        } catch (error) {
            console.error(error)
            setMachinery(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!machinery) {
            fetchMachineries()
        }
    }, [])

    return (
        <MachineryContext.Provider value={{
            machinery,
            fetchMachineries,
            machineryLoading: loading,
        }}>
            {children}
        </MachineryContext.Provider>
    )
}

export function useMachinery() {
    return useContext(MachineryContext)
}