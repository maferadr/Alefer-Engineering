import React, {useEffect} from "react";
//aos animation library
import Aos from "aos";
import 'aos/dist/aos.css';

export default function About(){

    useEffect(()=>{
        Aos.init();
    }, [])

    return(
        <div data-aos="fade-up" data-aos-easing='linear'data-aos-duration='1500'  id="about" className="bg-sky-950 w-full h-full about-container flex">

            <div className="about-text-container">
            <div>
             <div className="gradient-black about-grad"></div>
                <img src="/assets/about-img.jpg" className="object-cover object-center img-about"></img>
            </div>
                <h1 className="civil-title m-5 p-2 text-row" data-aos="zoom-in-left" data-aos-duration='2000'>Contamos con Personal <span className="ml-7 sub-about">Especializado</span></h1>
                <div className="relative">
                <p className="about-text text-white pl-5">Nuestro equipo de Ingeniería está conformado por ex trabajadores de empresas del sector eléctrico formados por más de 15 años en las áreas
                de Gerencia, Gestión de Proyectos,  Operaciones, Mantenimiento, evaluación y control de la calidad de energía  eléctrica a nivel de subestaciones e instalaciones eléctricas en 
                unidades industriales, comerciales, de uso hospitalario y residenciales.</p>
                <br></br>
                <p className="about-text text-white ml-12">Mas alla de ello, nuestro equipo técnico esta especializado en las áreas de automatización y control, instalaciones eléctricas internas 
                y externas para el sector Industrial, Comercial y Residencial, redes aereas en media y baja tensión, instalación de Sistemas de Puesta a Tierra. Contamos con alianzas estratégicas 
                para abordar conjuntamente trabajos de refacción en obras civiles,  instalación de equipos hidroneumáticos y sistemas contraincendio. 
                Contamos con profesionales en el área de Planificación Estratégica, Manuales de procedimientos / cargos y Estudio de mercado.
                </p>
                </div>
               <div className="right-0 pt-5">
                <p className="about-text about-tip p-3">Todos nuestros proyectos son basados en la Fondonorma 200-2009: Código Eléctrico Nacional y Normas afines.</p>
               </div>
               <img className="about-bg right-0 hidden" src="/assets/about-bg.png"></img>
            </div>
        </div>
    )
}