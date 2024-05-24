import Logo from "@/components/Logo"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

export default function AuthLayout() {
    return (
        <>
            <div className="bg-gray-800 min-h-screen">
                <div className="py-5 lg:py-5 mx-auto w-[420px]">
                    <Logo />
                    <div className="mt-2">
                        <Outlet />
                    </div>
                </div>
            </div>
            <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
        </>
    )
}
