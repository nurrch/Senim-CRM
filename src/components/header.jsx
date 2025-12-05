import { useState } from "react"

export default function Header(){
    const [hovered, setHovered] = useState(false)
    return(
        <header className="flex justify-center w-screen mt-[1%] text-white " >
                 <img src="/src/assets/senim_logo.png" className="h-27 object-cover " onMouseEnter={() => {if(!hovered) setHovered(true)}} />
                 <div className="flex justify-center items-center  relative right-29">
                     <button className={`absolute  -z-1 border py-2 px-3 whitespace-nowrap rounded-2xl transition duration-200 ${hovered ? "translate-x-45" : "" }`}>
                    sign up
                    </button>
               
                    <button className={`absolute  -z-1 border py-2 px-3 whitespace-nowrap rounded-2xl transition duration-200 ${hovered ? "-translate-x-45" : "" }`}>
                        log in
                    </button>
                 </div>
        </header>
    )
}