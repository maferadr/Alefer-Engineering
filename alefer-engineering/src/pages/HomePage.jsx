import React from "react";

export default function Home(){
    return(
        <div id="main" className="bg-sky-100/60 h-full">
            <div className="container-img relative">
                <div className="gradient-black">
                </div>
                <img className='w-full main-img object-cover block' src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
                <div className="absolute top-0">
                    <img src="/src/assets/alefer.png" className="object-cover alefer-logo"></img>
                </div>
                <div className="top-[65%] pl-10 absolute">
                    <h1 className="main-title">Tenemos un 
                    <br></br>
                    <span className="pl-5">PROPÓSITO.</span></h1>
                    <p className="paragraph">Atendemos y Solucionamos tus necesidades.</p>
                </div>
                <div className="btn-contact absolute top-[90%] right-3 bottom-0">
                    <button><a href="#contact">Contáctanos</a></button>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
                <div className="group relative">
                    <div className="text-black p-4 first-services">
                        <ul>
                            <li className="pl-3">Instalación y Configuración de Equipos.</li>
                            <li>Diseños Eléctricos.</li>
                            <li className="pl-3">Mantenimiento Preventivo y Correctivo de Plantas.</li>
                            <li>Consultorias y Estudios Especiales.</li>
                            <li className="pl-3">Obras y Preparaciones Menores - Civil y Eléctrica.</li>
                        </ul>
                    </div>
                </div>
                <div className="group relative">
                    <div className="rounded-shape p-4 bg-sky-950">
                        <h2 className="text-row text-white">Nuestros Servicios</h2>
                        <p className="services-paragraph text-white">
                        Basamos nuestra Experiencia, con soluciones innovadoras y eficientes adaptadas a las necesidades del cliente,  
                        que mejoren su productividad y optimicen sus procesos, garantizando seguridad, confiabilidad y cumplimiento de 
                        las normativas en la industria energética. Ser el socio de ingeniería de confianza para nuestros clientes, brindándoles 
                        el apoyo, acompañamiento y la experiencia necesarios para alcanzar sus objetivos estratégicos. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}