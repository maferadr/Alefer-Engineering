import React, {useEffect, useState} from "react";
import {AiOutlineMenu,
AiOutlineHome,
} from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { IoConstructOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Navbar(){

    const [nav, setNav ] = useState(false)
    const handleNav = () =>{
        setNav(!nav);
    };

    useEffect(()=>{
        Aos.init()
    }, [])
    
    return(
        <div>
            <AiOutlineMenu onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden text-white'/>
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-gradient-to-r from-black/60 to-sky-100 flex flex-col justify-center items-center z-20'>
                        <a href="#main" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-gray-600 m-2 p-4 hover:scale-110 ease-in duration-200">
                            <AiOutlineHome size={20}/>
                            <span className="pl-4">Inicio</span>
                        </a>
                        <a href="#about" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-gray-600 m-2 p-4 hover:scale-110 ease-in duration-200">
                            <BsPeople size={20}/>
                            <span className="pl-4">Nosotros</span>
                        </a>
                        <a href="#services" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-gray-600 m-2 p-4 hover:scale-110 ease-in duration-200">
                            <GoLightBulb size={20}/>
                            <span className="pl-4">Servicios Eléctricos</span>
                        </a>
                        <a href="#civil" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-gray-600 m-2 p-4 hover:scale-110 ease-in duration-200">
                            <IoConstructOutline size={20}/>
                            <span className="pl-4">Obras Civiles</span>
                        </a>
                        <a href="#contact" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-brown-100 shadow-gray-600 m-2 p-4 hover:scale-110 ease-in duration-200">
                            <RiContactsLine size={20}/>
                            <span className="pl-4">Contacto</span>
                        </a>
                    </div>
                )
                : (
                    <div className="md:block hidden fixed z-10 bg-sky-950 w-full">
                       <div className="flex flex-row p-4">
                            <a className="nav-lg" href="#main">Inicio</a>
                            <a className="nav-lg" href="#about">Nosotros</a>
                            <a className="nav-lg"  href="#services">Servicios Eléctricos</a>
                            <a  className="nav-lg" href="#civil">Obras Civiles</a>
                            <a className="nav-lg"  href="#contact">Contacto</a>
                       </div>
                    </div>
                )
            }
        
        </div>
    )
}
