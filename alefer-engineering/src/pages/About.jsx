import React from "react";

export default function About(){
    return(
        <div className="bg-black w-full h-full about-container flex">
            <div className="p-10">
             <div className="gradient-black about-grad"></div>
                <img src="https://images.pexels.com/photos/8961695/pexels-photo-8961695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="object-cover img-about"></img>
                <img src="https://images.pexels.com/photos/9242893/pexels-photo-9242893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="object-cover img-about mt-3"></img>
            </div>

            <div className="about-text-container absolute right-0">
                <h1 className="civil-title m-5 p-2 text-row">Nos Especializamos para TI</h1>
                <div className="relative">
                <p className="about-text text-white">Nuestro equipo de Ingeniería está conformado por ex trabajadores de
                empresas del sector eléctrico formados por más de 15 años en las áreas de
                Gerencia, Gestión de Proyectos, Operaciones, Mantenimiento, evaluación y
                control de la calidad de energía eléctrica a nivel de subestaciones e
                instalaciones eléctricas en unidades industriales, comerciales, de especialidad
                médica y residenciales.</p>
                <br></br>
                <p className="about-text text-white ml-12">Más allá de ello, nuestro equipo técnico está especializado en las áreas de automatización 
                y control, instalaciones eléctricas Industriales, Comerciales y Residenciales, instalación de Sistemas de Puesta a Tierra. Alefer tiene
                adicionalmente, la capacidad operativa a través de alianzas
                estratégicas para abordar conjuntamente trabajos de reparaciones
                menores en obras civiles, sanitarias e instalación de equipos
                hidroneumáticos y sistemas contraincendio.
                </p>
                </div>
               <div className="right-0 pt-5">
                <p className="about-text about-tip p-3">Todos nuestros proyectos son basados en la Fondonorma
                200-2009: Código Eléctrico Nacional</p>
               </div>
               <img className="about-bg right-0 hidden" src="/src/assets/about-bg-test.png"></img>
            </div>
        </div>
    )
}