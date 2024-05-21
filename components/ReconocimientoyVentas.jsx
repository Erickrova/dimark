import React from "react"

const ReconocimientoyVentas = () => {
  return (
    <div className="w-3/4 mx-auto my-20 pb-20 flex flex-col items-center">
      <h2 className="text-6xl font-bold text-secundary text-center">
        ¿Qué esperas para aumentar tu reconocimiento y ventas?
      </h2>
      <p className="text-3xl text-gray-400 ml-[5rem] mt-4">
        ¡Contáctanos ahora, somos tu mejor opción!
      </p>
      <button
        type="button"
        className="bg-secundary mx-auto py-4 px-8 hover:bg-primary transition-colors text-[24px] font-bold text-white mt-10"
      >
        Atención personalizada
      </button>
    </div>
  )
}

export default ReconocimientoyVentas
