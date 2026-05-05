// 'use client'

// const { useContext, useState, useEffect, createContext } = require("react")
// import { getAllMachinery } from "@/api/machineryApis"

// const MachineryContext = createContext()

// export function MachineryProvider({ children }) {
//     const [machinery, setMachinery] = useState(null)
//     const [loading, setLoading] = useState(false)

//     const fetchMachineries = async () => {
//         try {
//             setLoading(true)
//             const response = await getAllMachinery()
//             setMachinery(response.data.machinery || null)
//         } catch (error) {
//             console.error(error)
//             setMachinery(null)
//         } finally {
//             setLoading(false)
//         }
//     }

//     useEffect(() => {
//         if (!machinery) {
//             fetchMachineries()
//         }
//     }, [])

//     return (
//         <MachineryContext.Provider value={{
//             machinery,
//             fetchMachineries,
//             machineryLoading: loading,
//         }}>
//             {children}
//         </MachineryContext.Provider>
//     )
// }

// export function useMachinery() {
//     return useContext(MachineryContext)
// }


'use client';

import { useContext, useState, useEffect, createContext } from 'react';
import { getAllMachinery } from '@/api/machineryApis';

const MachineryContext = createContext();

export function MachineryProvider({ children }) {
  const [machinery, setMachinery] = useState([]);
  const [loading, setLoading] = useState(true);
const fetchMachineries = async () => {
  try {
    setLoading(true);
    const response = await getAllMachinery();
    console.log('📡 Raw API response:', response);
    console.log('📡 response.data:', response.data);

    const machineryData = response?.data?.data?.machinery ||
                          response?.data?.machinery ||
                          response?.machinery ||
                          [];
    console.log('✅ Extracted machineryData:', machineryData);
    setMachinery(machineryData);
  } catch (error) {
    console.error('❌ Fetch error:', error);
    setMachinery([]);
  } finally {
    setLoading(false);
    console.log('🏁 Loading set to false');
  }
};

  useEffect(() => {
    fetchMachineries();
  }, []);

  return (
    <MachineryContext.Provider
      value={{
        machinery,
        fetchMachineries,
        machineryLoading: loading,
      }}
    >
      {children}
    </MachineryContext.Provider>
  );
}

export function useMachinery() {
  const context = useContext(MachineryContext);
  if (!context) {
    throw new Error('useMachinery must be used within a MachineryProvider');
  }
  return context;
}