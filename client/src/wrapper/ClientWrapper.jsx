import { AuthProvider } from "@/context/useAuth";
import { MachineryProvider } from "@/context/useMachinery";

export default async function ClientWrapper({ children }) {

    return (
        <>
            <MachineryProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </MachineryProvider>
        </>
    )
}