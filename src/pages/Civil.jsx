import React, {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Civil(){
    const projects = [
        {
            id: 1,
            title: 'Revestimiento',
            subtitle: 'Diseño de Arquitectura e Innovación en Paredes y Piso.' 
        },
        {
            id: 2,
            title: 'Mantenimiento',
            subtitle: 'Adecuación, Refacción y Renovación de Infraestructura.' 
        },
        {
            id: 3,
            title: 'Diseño y Construcción',
            subtitle: 'Instalaciones Sanitarias, Sistema Hidroneumático y Climatización (VAC).' 
        },
    ]

    useEffect(()=>{
        Aos.init()
    }, [])

    return(
        <div id="civil" className="bg-sky-950 h-full py-10 sm:py-32 lg:py-10" data-aos='fade-up' data-aos-easing='linear' data-aos-duration='1000'>
            <h1 className="civil-title main-civil flex justify-center mb-8">Obras Civiles</h1>
            <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos='fade-right' data-aos-duration='1500'>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {projects.map((project) =>(
                        <div key={project.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-base leading-7 text-white/70">{project.subtitle}</dt>
                            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{project.title}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}