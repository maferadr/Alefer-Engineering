import React from "react";


export default function Services(){
    const services = [
        {
            id: 1,
            imgSrc: 'https://images.pexels.com/photos/4508748/pexels-photo-4508748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Instalacion y Configuracion de Equipos.'
        },
        {
            id: 2,
            imgSrc: 'https://images.pexels.com/photos/4705102/pexels-photo-4705102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Mantenimiento Preventivo y Correctivo de Plantas.'
        },
        {
            id: 3,
            imgSrc: 'https://images.pexels.com/photos/4263057/pexels-photo-4263057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            title: 'Estudios, Consultorias y Entrega de Planos.'
        }
    ]

    return(
        <div className="bg-sky-100/60 h-full">
            <h1 className="services-title text-sky-950 flex justify-center pt-5">¿En qué basamos Nuestros Servicios?</h1>
            <p className="about-text pl-3 pr-3 services-text">
                Basamos nuesta experiencia en la Complejidad de su Instalación y la Necesidad del Cliente, para cubrir la demanda que el 
                sector eléctrico significa. Partiendo de Instalación de sistemas solares fotovoltaicos, transformadores y bancos de condensadores 
                hasta Sistemas de iluminación y Plantas Eléctricas.
            </p>
            <div className="mx-auto max-w-2xl py-5 sm:py-24 lg:max-w-7xl lg:px-8" id="services-container">
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
        </div>
    )
}