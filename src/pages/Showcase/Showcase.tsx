
import { Header } from "../../components/Header/Header.tsx"
import { BottomNavBar } from "../../components/BottomNavBar/BottomNavBar.tsx"

export function Showcase() {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Header />
            <h1 className="text-4xl font-bold mb-4">Showcase Page</h1>
            <p className="text-lg text-gray-600">This is the showcase page content.</p>
            <BottomNavBar />
        </div>
    )
}