import React, {useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Logos(){

  useEffect(()=>{
    Aos.init()
  }, [])

    return(
        <div className="bg-sky-100/60" data-aos='fade-up' data-aos-duration='1500'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center leading-8 p-2 top-0 bg-sky-950 text-white subtitle-logos">
                    La Experiencia importa, y la confianza construida con ella aun mas!
                </h2>
                <div className="mx-auto mt-10 pb-16 sm:pb-8 grid max-w-lg grid-cols-4 flex justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 sm:grid-cols-2" data-aos='fade-right' data-aos-duration='2000'>
                <img
            className="col-span-2 img-logo w-full object-contain object-cover lg:col-span-1"
            src="/assets/akron.png"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 img-logo w-full object-contain lg:col-span-1 hidden"
            src="/assets/fundicion.png"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 img-logo mx-2 w-full object-contain lg:col-span-1"
            src="/assets/hospital.png"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 img-logo w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/assets/caf.png"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 img-logo w-full object-contain object-cover lg:col-span-1"
            src="/assets/sambil.png"
            alt="SavvyCal"
            width={158}
            height={48}
          />
                </div>
            </div>
        </div>
    )
}