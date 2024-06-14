import React from "react";
import { FaMapLocationDot,
    FaPhoneVolume } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Contact(){
    return(
        <div className="bg-contact w-full h-full p-10">
            <h1 className="contact-title flex justify-center pb-5">Contáctanos</h1>
            <div className="flex justify-center">
                <FaMapLocationDot className="mx-5 logo-contact"/>
                <FaPhoneVolume className="mx-5 logo-contact"/>
                <SiGmail className="mx-5 logo-contact"/>
            </div>
            <div className="pt-8">
                <p className="text-center pb-3 sub-contact">Contáctanos personalmente.</p>
                <ul>
                    <a className="flex justify-center  text-base" href=""><li>yangulo@aleferingenieria.com</li></a>
                    <a className="flex justify-center  text-base" href=""><li>mdosramos@aleferingenieria.com</li></a>
                    <a className="flex justify-center  text-base" href=""><li>+ 58 424 7355802</li></a>
                    <a className="flex justify-center  text-base" href=""><li>+ 58 424 7666349</li></a>
                </ul>
            </div>
        </div>
    )
}