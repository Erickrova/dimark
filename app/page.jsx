import About from "@/components/About"
import BanneDesarrollosPropios from "@/components/BanneDesarrollosPropios"
import Banner from "@/components/Banner"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import HomeHistoriasExito from "@/components/HomeHistoriasExito"
import HomeSeo from "@/components/HomeSeo"
import Instagramer from "@/components/Instagramer"
import Instaplanner from "@/components/Instaplanner"
import PopUpMenu from "@/components/PopUpMenu"
import PresenciaMundial from "@/components/PresenciaMundial"
import ReconocimientoyVentas from "@/components/ReconocimientoyVentas"
import Image from "next/image"

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Header />
      <Banner />
      <About />
      <HomeHistoriasExito />
      <HomeSeo />
      <ReconocimientoyVentas />
      <BanneDesarrollosPropios />
      <Instaplanner />
      <Instagramer />
      <PresenciaMundial />
      <PopUpMenu />
      <Footer />
    </div>
  )
}
