import { Button, Image } from "@nextui-org/react";
import Logo from '../assets/pictures//Rectangle 22.png'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar () {
    const { pathname } = useLocation();
    const [disable, setDisable] = useState(false)
   
    const paths = [
        '/signin',
        '/signup'
    ];
    useEffect(() => {
        paths.forEach(path => {
            if(pathname === path) {
                setDisable(true)
            }
        })
    }, [pathname])
    
    return disable ? "" : (
        <nav className="fixed top-0 right-0 left-0 bg-white z-50">
            <div className="flex justify-between mt-5 px-6">
                <div className="logo">
                    <Image 
                        src={Logo}
                        className="h-[4rem] z-20"
                    />
                </div>
                <div className="flex gap-5 mt-1">
                    <ul className="flex gap-5 mt-2">
                        <li>Home</li>
                        <li>Explore</li>
                        <li>Features</li>
                        <li>About</li>
                    </ul>
                    <div>
                        <Button className="bg-[#FF9F1C] text-white px-[30pt] rounded-full shadowed-btn">Sign in</Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}