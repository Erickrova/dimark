"use client"
import Image from "next/image"
import React from "react"
import { Facebook, Instagram, Tiktok } from "./icons"

const PopUpMenu = () => {
  const handleModal = () => {
    const modal = document.querySelector("#menumodal")
    console.log(modal)
    if (modal?.classList.contains("fixed")) {
      modal?.classList.add("fade-up")
      modal?.classList.remove("fade-down")
      setTimeout(() => {
        modal?.classList.remove("fixed")
        modal?.classList.add("hidden")
        document.body.style.overflow = "auto"
      }, 450)
    } else {
      document.body.style.overflow = "hidden"
      modal?.classList.remove("fade-up")
      modal?.classList.add("fade-down")
      modal?.classList.add("fade-down")
      modal?.classList.remove("hidden")
      modal?.classList.add("fixed")
    }
  }
  return (
    <div
      id="menumodal"
      className=" hidden w-full min-h-screen bg-primary z-50 overflow-y-auto inset-0 transition-all "
    >
      <button
        onClick={handleModal}
        type="button"
        className="text-4xl text-secundary w-[50px] h-[50px] bg-white rounded-full fixed right-8 top-4"
      >
        X
      </button>
      <div className="flex w-full h-full">
        <div className="w-2/3 h-full flex flex-col justify-center pl-[100px]">
          <a
            href="#"
            className="text-xl text-white border-b border-white border-opacity-10 py-2 w-1/2"
          >
            Home
          </a>
          <a
            href="#"
            className="text-xl text-white border-b border-white border-opacity-10 py-2 w-1/2"
          >
            Servicios
          </a>
          <a
            href="#"
            className="text-xl text-white border-b border-white border-opacity-10 py-2 w-1/2"
          >
            Casos de éxito
          </a>
          <a
            href="#"
            className="text-xl text-white border-b border-white border-opacity-10 py-2 w-1/2"
          >
            Desarrollos propios
          </a>
          <a
            href="#"
            className="text-xl text-white border-b border-white border-opacity-10 py-2 w-1/2"
          >
            Somos Grupo Dimark
          </a>
          <a
            href="#"
            className="text-xl text-white border-b border-white border-opacity-10 py-2 w-1/2"
          >
            Contáctenos
          </a>
        </div>
        <div className="w-1/3 h-full flex items-center">
          <div className="w-full h-2/3 pl-10 border-l border-white border-opacity-10">
            <Image
              src="/logo3.png"
              width={600}
              height={600}
              className="h-[300px] w-[200px] object-contain"
              alt="imagen"
            />
            <h3 className="text-white opacity-50 text-sm uppercase mb-5">
              Teléfono
            </h3>
            <p className="text-xl font-bold text-white"> 300 485 85 35</p>
            <h3 className="text-white opacity-50 text-sm uppercase my-5">
              Email
            </h3>
            <p className="text-xl font-bold text-white">info@dimark.co</p>
            <div className="flex gap-5 mt-10 pb-20">
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
        </div>
      </div>
    </div>
  )
}

export default PopUpMenu
