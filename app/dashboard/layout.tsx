import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className={` flex h-full flex-col md:flex-row md:overflow-hidden bg-black text-white`}>
            <div className="w-full md:h-screen flex-none md:w-56 md:fixed">
                <SideNav/>
            </div>
            <div className="flex-grow md:overflow-y-auto p-6 md:ml-56 md:h-screen">{children}</div>
        </div>
    );
}