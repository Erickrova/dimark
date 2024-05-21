"use client"
import { Facebook, hamburger, Instagram, Tiktok } from "@/components/icons"
import Image from "next/image"
import React from "react"
// #242424
// #242424
// #c10018
// #960213
const Header = () => {
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
    <div className=" z-50 md:w-[1140px] h-[65px] bg-primary fixed left-1/2 -translate-x-1/2 flex items-center justify-between">
      <Image
        src={"/logoheader.png"}
        className="w-[120px] h-[60px] object-contain ml-10"
        height={600}
        width={600}
        alt="logo dimark"
      />
      <div className="h-full flex  items-center">
        <div className="flex gap-2 px-4">
          <button
            type="button"
            className="h-[32px] w-[32px] bg-white hover:bg-gray-200 transition-colors  flex items-center justify-center rounded-[7px]"
          >
            <Facebook style="fill-secundary" />
          </button>
          <button
            type="button"
            className="h-[32px] w-[32px] bg-white hover:bg-gray-200 transition-colors flex items-center justify-center rounded-[7px]"
          >
            <Instagram style="stroke-secundary" />
          </button>
          <button
            type="button"
            className="h-[32px] w-[32px] bg-white hover:bg-gray-200 transition-colors flex items-center justify-center rounded-[7px]"
          >
            <Tiktok style="fill-secundary" />
          </button>
        </div>
        <button
          type="button"
          onClick={handleModal}
          className="bg-secundary hover:bg-darksecundary transition-colors h-full w-[73px] flex items-center justify-center"
        >
          {hamburger}
        </button>
      </div>
    </div>
  )
}

export default Header
