// import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Layout(): JSX.Element {
    // const history = useNavigate();

    return (
        <div className="flex flex-col h-screen">
            <header className="shadow-xl h-[90px] flex justify-between border-b-2 border-gray-300">
                {/* <img
                    src={Logo}
                    className="h-full pl-16 py-3 hover:cursor-pointer"
                    onClick={() => history('/home')}
                >
                </img> */}
            </header>

            <main className="h-full flex justify-center items-center bg-gray-200">
                <Outlet />
            </main>
        </div>
    )
}