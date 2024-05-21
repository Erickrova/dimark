import React from "react"
import { hand, plus } from "./icons"

const Banner = () => {
  return (
    <div className="w-full flex bg-primary">
      <div className="w-1/4 h-screen banner1 relative flex justify-center items-end ">
        <div className="w-full h-full overlay-bg absolute"></div>
        <div className="flex flex-col items-center z-10 px-[35px] pb-[85px]">
          <div className="mb-4">{hand}</div>
          <h2 className="text-4xl font-black text-white text-center mb-2">
            Diseño <br /> Web
          </h2>
          <p className="text-[18px] font-light text-white mb-8">
            Más de 100 webs creadas.
          </p>
          <button
            type="button"
            className="text-white font-bold py-4 px-6 border-2 w-fit border-secundary flex gap-2"
          >
            {plus} Ver más
          </button>
        </div>
      </div>
      <div className="w-1/4 h-screen banner2 relative flex justify-center items-end">
        <div className="w-full h-full overlay-bg absolute"></div>
        <div className="flex flex-col items-center z-10 px-[35px] pb-[85px]">
          <div className="mb-4">{hand}</div>
          <h2 className="text-4xl font-black text-white text-center mb-2">
            SEO <br /> Avanzado
          </h2>
          <p className="text-[18px] font-light text-white mb-8">
            Más de 100 webs creadas.
          </p>
          <button
            type="button"
            className="text-white font-bold py-4 px-6 border-2 w-fit border-secundary flex gap-2"
          >
            {plus} Ver más
          </button>
        </div>
      </div>
      <div className="w-1/4 h-screen banner3 relative flex justify-center items-end">
        <div className="w-full h-full overlay-bg absolute"></div>
        <div className="flex flex-col items-center z-10 px-[35px] pb-[85px]">
          <div className="mb-4">{hand}</div>
          <h2 className="text-4xl font-black text-white text-center mb-2">
            Desarrollo <br /> de apps
          </h2>
          <p className="text-[18px] font-light text-white mb-8">
            Más de 100 webs creadas.
          </p>
          <button
            type="button"
            className="text-white font-bold py-4 px-6 border-2 w-fit border-secundary flex gap-2"
          >
            {plus} Ver más
          </button>
        </div>
      </div>
      <div className="w-1/4 h-screen banner4 relative flex justify-center items-end">
        <div className="w-full h-full overlay-bg absolute"></div>
        <div className="flex flex-col items-center z-10 px-[35px] pb-[85px]">
          <div className="mb-4">{hand}</div>
          <h2 className="text-4xl font-black text-white text-center mb-2">
            Pautas <br /> Publicitarias
          </h2>
          <p className="text-[18px] font-light text-white mb-8">
            Más de 100 webs creadas.
          </p>
          <button
            type="button"
            className="text-white font-bold py-4 px-6 border-2 w-fit border-secundary flex gap-2"
          >
            {plus} Ver más
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
