import Image from "next/image"
import React from "react"
import { hand } from "./icons"

const About = () => {
  return (
    <div className="w-4/5 mx-auto py-[50px] flex flex-col items-center">
      <Image
        src={"/logo1.png"}
        className="w-[510px] h-[128px] object-contain"
        width={1000}
        height={1000}
        alt="logo dimark"
      />
      <p className="text-2xl text-center text-gray-500 mt-[60px] w-4/5">
        Nos consideran unos obsesivos por el{" "}
        <span className="text-secundary">crecimiento,</span> diferentes
        resultados exitosos nos dan el respaldo para saber como crecer tu
        negocio...
      </p>
      <div className=" w-[1110px] px-4 flex justify-evenly items-center gap-8 mt-20">
        <div className="flex flex-col px-14 justify-center items-center about-creativo w-[328px] h-[363px] bg-primary rounded-[30px]">
          {hand}
          <h3 className="text-xl text-white font-light">Proceso</h3>
          <h2 className="text-4xl text-white font-black mb-5">Creativo</h2>
          <p className="text-sm text-white font-light text-center">
            Cada paso que se crea y se define en la empresa tiene que ser
            creativo, si no es imposible lograr el crecimiento que buscamos.
          </p>
        </div>
        <div className="flex flex-col px-14 justify-center items-center about-profesional w-[360px] h-[459px] bg-primary rounded-[30px]">
          {hand}
          <h3 className="text-xl text-white font-light">Desarrollo</h3>
          <h2 className="text-4xl text-white font-black mb-5">Profesional</h2>
          <p className="text-sm text-white font-light text-center">
            Obsesivos por estar actualizados en el mundo del desarrollo; Para
            poder tener resultados tenemos que estar al mismo ritmo del mundo
            tecnólogico.
          </p>
        </div>
        <div className="flex flex-col px-14 justify-center items-center about-global w-[328px] h-[363px] bg-primary rounded-[30px]">
          {hand}
          <h3 className="text-xl text-white font-light">Prensamiento</h3>
          <h2 className="text-4xl text-white font-black mb-5">Global</h2>
          <p className="text-sm text-white font-light text-center">
            Una empresa con visión y resultados en diferentes lugares, obtiene
            resultados que impactan de forma global.
          </p>
        </div>
      </div>
      <button
        type="button"
        className="bg-secundary py-4 px-8 hover:bg-primary transition-colors text-[24px] font-bold text-white mt-10"
      >
        Conoce nuestros servicios
      </button>
    </div>
  )
}

export default About
