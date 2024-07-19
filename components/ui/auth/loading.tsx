import Image from "next/image";

export const Loading = () =>{
    return (
        <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center">
            <Image 
                src="/logo.svg"
                alt="Logo"
                height={120}
                width={120}
                className="animate-pulse duration-700"
            />
        </div>
    </div>
    
    )
}