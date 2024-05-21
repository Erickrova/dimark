import React from "react"
import Image from "next/image"

const Instagramer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex mt-20">
        <div className="w-1/2 pl-16">
          <button
            type="button"
            className="bg-primary mr-10 py-2 px-4 font-bold text-white mt-10 ml-[5rem] rounded-full"
          >
            Destacado
          </button>
          <h2 className="ml-[5rem] text-5xl font-light mt-10">Instagramer</h2>
          <p className="text-3xl font-bold text-secundary ml-[5rem] mt-4">
            Instagramer.co
          </p>
          <p className="text-2xl font-medium text-gray-500 ml-[5rem] mt-10 w-4/6">
            Gana más de 1000 seguidores seguidores nuevos cada mes
          </p>
          <p className="text-xl font-light text-gray-500 ml-[5rem] mt-8 w-4/6">
            Plataforma creada en el año 2016 para aumentar los seguidores de las
            cuentas de Instagram de forma segmentada. Esta plataforma logró
            ayudar a crecer a más de 5.000 cuentas en Latino América.
          </p>
        </div>

        <div className="w-1/2 flex flex-col items-center relative">
          <div className="w-full h-[98%] right-instragramer-container absolute"></div>
          <Image
            src={"/instagramer.png"}
            className="w-[350px] h-[600px] object-contain mt-20 -mb-20 z-20"
            height={1000}
            width={1000}
            alt="image"
          />
        </div>
      </div>
      <button
        type="button"
        className="bg-secundary mx-auto py-4 px-8 hover:bg-primary transition-colors text-[24px] font-bold text-white mt-20"
      >
        Ver todos los proyectos
      </button>
    </div>
  )
}

export default Instagramer
