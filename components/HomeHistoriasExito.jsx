import Image from "next/image"
import React from "react"

const HomeHistoriasExito = () => {
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col items-end">
        <Image
          src={"/homehistoriaexitoft.jpg"}
          className="w-full h-[700px]"
          height={1000}
          width={1000}
          alt="image"
        />
        <button
          type="button"
          className="bg-secundary mr-10 py-4 px-8 hover:bg-primary transition-colors text-[24px] font-bold text-white mt-10"
        >
          Ver todos los casos de éxito
        </button>
      </div>
      <div className="w-1/2">
        <div className="bg-secundary w-[178px] h-[7px] mt-[35px] mr-[-5px] mb-[10px] ml-[-145px] "></div>
        <h2 className="ml-[5rem] text-5xl font-light mt-20">
          ¿Quieres un <span className="font-bold">Sitio Web</span> funcional?
        </h2>
        <p className="text-xl text-gray-400 ml-[5rem] mt-4">
          Conoce nuestras historias de éxito
        </p>
        <div className="flex gap-2 mt-16">
          <div className="w-1/2 h-[600px] overflow-hidden rounded-xl hover-web exito1"></div>
          <div className="w-1/2 h-[600px] overflow-hidden rounded-xl hover-web exito2"></div>
        </div>
      </div>
    </div>
  )
}

export default HomeHistoriasExito
