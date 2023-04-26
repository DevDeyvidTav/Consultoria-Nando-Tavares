import Image from "next/image";
import {GiHamburgerMenu} from "react-icons/gi"
export function Header(){
    return (
        <div className="w-full h-16 fixed bg-header z-30">
            <div className="px-5 flex items-center h-full justify-between">
                <Image src="/logo-reduzida.png" width={50} height={50} alt="logo"/>
                <GiHamburgerMenu className="text-white w-8 h-8"/>
            </div>
        </div>
    )
}