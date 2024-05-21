import React from "react"
import Image from "next/image"

const Instaplanner = () => {
  return (
    <div className="flex mt-20">
      <div className="w-1/2 flex flex-col items-end relative">
        <div className="w-full h-2/3 left-instaplanner-container absolute"></div>
        <Image
          src={"/instaplanner.png"}
          className="w-[596px] h-[800px] object-contain mt-40 -mb-20 z-20"
          height={1000}
          width={1000}
          alt="image"
        />
      </div>
      <div className="w-1/2">
        <button
          type="button"
          className="bg-primary mr-10 py-2 px-4 font-bold text-white mt-10 ml-[5rem] rounded-full"
        >
          Destacado
        </button>
        <h2 className="ml-[5rem] text-5xl font-light mt-10">Instaplanner</h2>
        <p className="text-3xl font-bold text-secundary ml-[5rem] mt-4">
          Instaplanner.co
        </p>
        <p className="text-xl font-light text-gray-500 ml-[5rem] mt-16 w-4/6">
          Plataforma creada en el año 2018 para optimizar todas las funciones de
          Instagram.
        </p>
        <div className="flex gap-4 mt-16 ml-[5rem]">
          <div className="w-[64px] h-[64px] bg-primary rounded-full flex items-center justify-center text-white">
            icon
          </div>
          <div>
            <h4 className="text-2xl font-bold uppercase">Ahorra tiempo</h4>
            <p className=" font-light text-gray-500 w-4/6">
              Programa publicaciones, historias en nuestra plataforma.
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-16 ml-[5rem]">
          <div className="w-[64px] h-[64px] bg-primary rounded-full flex items-center justify-center text-white">
            icon
          </div>
          <div>
            <h4 className="text-2xl font-bold uppercase">
              DIRECTS AUTO - RESPUESTA
            </h4>
            <p className=" font-light text-gray-500 w-4/6">
              Automatiza tus mensajes de forma facil y simple en nuestra
              herramienta.
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-16 ml-[5rem]">
          <div className="w-[74px] h-[64px] bg-primary rounded-full flex items-center justify-center text-white">
            icon
          </div>
          <div className="w-full">
            <h4 className="text-2xl font-bold uppercase">
              INCREMENTA SEGUIDORES
            </h4>
            <p className=" font-light text-gray-500 w-4/6">
              Servicio para ganar seguidores segmentados mediante funciones de
              seguir y dar likes a usuarios de interés.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instaplanner
