import AuthNavBar from "@/components/authNavBar";


export default function Layout({children} : Readonly<{children : React.ReactNode}> ) {

    return <div>
        <AuthNavBar />
        {children}
    </div>
}