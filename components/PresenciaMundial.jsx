import Image from "next/image"
import React from "react"

const PresenciaMundial = () => {
  return (
    <div className="w-full flex">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <Image
          src={"/logo3.png"}
          className="w-[157px] h-[189px]"
          width={600}
          height={600}
          alt="imagen"
        />
        <p className="text-3xl font-bold text-center text-primary ml-[5rem] mt-4">
          Con presencia a nivel mundial...
        </p>
        <button
          type="button"
          className="bg-secundary mx-auto py-4 px-8 hover:bg-primary transition-colors text-[24px] font-bold text-white mt-20"
        >
          Contáctenos
        </button>
      </div>
      <div className="w-1/2 overflow-hidden relative h-[1200px]">
        <Image
          src={"/mapmundi.png"}
          className="w-[1000px] h-[1004px] object-contain scale-150 absolute left-[200px] inset-0"
          width={1000}
          height={1000}
          alt="imagen"
        />
      </div>
    </div>
  )
}

export default PresenciaMundial
