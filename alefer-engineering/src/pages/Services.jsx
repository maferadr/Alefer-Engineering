import React, {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Gallery from "../components/Gallery";

export default function Services(){
    const services = [
        {
            id: 1,
            imgSrc: '/assets/services-1.jpg',
            title: 'Instalacion y Configuracion de Equipos.'
        },
        {
            id: 2,
            imgSrc: '/assets/services-2.jpg',
            title: 'Mantenimiento Preventivo y Correctivo de Plantas.'
        },
        {
            id: 3,
            imgSrc: '/assets/services-3.jpg',
            title: 'Estudios, Consultorias y Entrega de Planos.'
        }
    ]

    useEffect(()=>{
        Aos.init();
    }, [])

    return(
        <div id="services" className="bg-sky-100/60 h-full">
            <h1 className="services-title text-sky-950 flex justify-center pt-5" data-aos="fade-left" data-aos-duration='1000'>¿En qué basamos Nuestros Servicios?</h1>
            <p className="about-text pl-3 pr-3 services-text">
                Basamos nuesta experiencia en la Complejidad de su Instalación y la Necesidad del Cliente, para cubrir la demanda que el 
                sector eléctrico significa. Partiendo de Instalación de sistemas solares fotovoltaicos, transformadores y bancos de condensadores 
                hasta Sistemas de iluminación y Plantas Eléctricas.
            </p>
            <div className="mx-auto max-w-2xl py-5 sm:py-24 lg:max-w-7xl lg:px-8" id="services-container" data-aos='fade-up' data-aos-duration='1500'>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {services.map((imgServices)=>(
                        <div key={imgServices.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <div className="gradient-black services-grad"></div>
                                <img src={imgServices.imgSrc} className="h-full w-full object-cover object-center lg:h-full lg:w-full" id="img-services"></img>
                            </div>
                            <div className="absolute right-0 bottom-0">
                                <p className="about-tip p-2 service-description">{imgServices.title}</p>
                            </div>
                    </div>
                    ))}
                </div>
            </div>
            <Gallery/>
        </div>
    )
}