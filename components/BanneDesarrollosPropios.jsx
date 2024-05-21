import Image from "next/image"
import React from "react"

const BanneDesarrollosPropios = () => {
  return (
    <div className="flex">
      <div className="w-1/2 flex items-center justify-center px-16">
        <Image src="/logo2.png" width={1000} height={1000} alt="image" />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center clipping bg-primary h-[550px]">
        <div className="bg-white w-2/3 h-[2px] "></div>
        <h2 className="w-4/5 text-5xl text-center text-white font-light mt-20">
          Conoce algunos de nuestros <br />
          <span className="font-black">Desarrollos propios</span>
        </h2>
      </div>
    </div>
  )
}

export default BanneDesarrollosPropios
