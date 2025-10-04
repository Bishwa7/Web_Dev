
export function Sidebar1(){

    return(
        <div className='flex h-screen'>
            <div className='bg-red-300 transition-all duration-300 w-4 md:w-64'>
                Sidebar
            </div>
            <div className='bg-blue-300 w-full'>
                Content
            </div>
        </div>
    )
}