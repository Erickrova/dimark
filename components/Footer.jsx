import React from "react"
import Image from "next/image"
import { Facebook, Instagram, Tiktok } from "./icons"

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-1/2 min-h-[546px] flex flex-col justify-center  bg-darkprimary pl-[100px]">
          <Image
            src={"/logo5.png"}
            className="w-[325px] h-[80px] object-contain"
            height={600}
            width={600}
            alt="image"
          />
          <div className="w-full h-[1px] bg-white my-[40px] opacity-20"></div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-1">
              <h3 className="text-white opacity-50 text-sm uppercase mb-5">
                Contacto
              </h3>
              <p className="text-xl font-bold text-white">+57 300 485 85 35</p>
              <p className="text-xl font-bold text-white">WhatsApp</p>
              <p className="text-xl font-bold text-white">info@dimark.co</p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white opacity-50 text-sm uppercase mb-5">
                Sedes
              </h3>
              <p className="text-xl font-bold text-white">
                Medellín - Colombia
              </p>
              <p className="text-sm font-bold text-white">Calle 31 s 47 - 15</p>
              <p className="text-xl font-bold text-white">Miami - USA</p>
              <p className="text-sm font-bold text-white">
                5001 sw 173 ave. Miramar -Fl
              </p>
            </div>
          </div>
          <div className="flex gap-5 mt-10">
            <button
              type="button"
              className="h-[32px] w-[32px] bg-primary hover:bg-gray-200 transition-colors  flex items-center justify-center rounded-[7px]"
            >
              <Facebook style="fill-white" />
            </button>
            <button
              type="button"
              className="h-[32px] w-[32px] bg-primary hover:bg-gray-200 transition-colors flex items-center justify-center rounded-[7px]"
            >
              <Instagram style="stroke-white" />
            </button>
            <button
              type="button"
              className="h-[32px] w-[32px] bg-primary fill-white stroke-white hover:bg-gray-200 transition-colors flex items-center justify-center rounded-[7px]"
            >
              <Tiktok style="fill-white" />
            </button>
          </div>
        </div>
        <div className="w-1/2 min-h-[546px] bg-[#efefef] relative flex justify-start items-center  ">
          <div className="w-full h-full footer-right-overlay-bg opacity-50 absolute"></div>
          <div className="flex flex-col items-start z-10 px-[35px] pb-[85px] pl-[100px] gap-8">
            <div className="bg-secundary w-[100px] h-[5px] mt-[70px] mr-[-5px] mb-[-70px] ml-[-145px] "></div>
            <h2 className="text-5xl font-black text-primary text-center mb-2">
              ¿Tienes una idea?
            </h2>
            <p className="text-3xl font-light text-primary mb-8">
              Nosotros la hacemos realidad…
            </p>
            <button
              type="button"
              className=" text-secundary py-4 px-8 hover:bg-primary transition-colors text-[24px] font-bold bg-white"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-black h-[100px] flex justify-between items-center px-[100px]">
        <div className="flex gap-4 text-white opacity-50">
          <a href="#">Home</a>
          <a href="#">Quienes Somos</a>
          <a href="#">Servicios</a>
          <a href="#">Contáctenos</a>
        </div>
        <p className="text-white opacity-50">Dimark, © 2024</p>
      </div>
    </div>
  )
}

export default Footer
