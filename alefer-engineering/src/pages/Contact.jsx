import React, {useEffect} from "react";
import { FaMapLocationDot,
    FaPhoneVolume } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import Logos from "../components/Logos";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Contact(){

    useEffect(()=>{
        Aos.init()
    }, [])

    return(
        <>
        <div id="contact" className="bg-sky-950 w-full h-full p-10 text-white bg-contact">
            <h1 className="contact-title flex justify-center pb-5 pt-2"  data-aos='fade-left' data-aos-duration='1500'>Contáctanos</h1>
            <div className="flex justify-center" data-aos='fade-right' data-aos-duration='2000'>
                <a href="https://maps.app.goo.gl/VyCJMAbitdaUJ5PTA"><FaMapLocationDot className="mx-5 logo-contact"/></a>
                <a href="tel:+582763564411"><FaPhoneVolume className="mx-5 logo-contact"/></a>
                <a href="mailto:aleferca17@gmail.com"><SiGmail className="mx-5 logo-contact"/></a>
                <a href="https://www.instagram.com/alefer_ing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram className="mx-5 logo-contact"/></a>
            </div>
            <div className="pt-8" data-aos='fade-up' data-aos-duration='1500'>
                <p className="text-center pb-3 sub-contact">Contáctanos personalmente.</p>
                <ul>
                    <a className="flex justify-center  text-base" href="mailto:yangulo@aleferingenieria.com"><li>yangulo@aleferingenieria.com</li></a>
                    <a className="flex justify-center  text-base" href="mailto:mdosramos@aleferingenieria.com"><li>mdosramos@aleferingenieria.com</li></a>
                    <a className="flex justify-center  text-base" href="tel:+584247355802"><li>+ 58 424 7355802</li></a>
                    <a className="flex justify-center  text-base" href="tel:+584247666349"><li>+ 58 424 7666349</li></a>
                </ul>
            </div>
        </div>
        <Logos/>
        </>
        
        
    )
}