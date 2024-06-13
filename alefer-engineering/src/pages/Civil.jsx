import React from "react";

export default function Civil(){
    const projects = [
        {
            id: 1,
            title: 'Revestimiento',
            subtitle: 'De Paredes y Piso.' 
        },
        {
            id: 2,
            title: 'Mantenimiento',
            subtitle: 'y Refraccion de Infraestructura.' 
        },
        {
            id: 3,
            title: 'Instalaciones Sanitarias',
            subtitle: 'y de Sistema Hidroneumatico.' 
        },
    ]

    return(
        <div className="bg-black h-full py-10 sm:py-32 lg:py-10">
            <h1 className="civil-title flex justify-center mb-8">Obras Civiles</h1>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
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