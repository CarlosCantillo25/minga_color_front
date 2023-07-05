import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
//se importann los componentes que se repiten en todas las vistas

export default function Main() {
    //la propiedad children contiene el contenido que Main tiene como hijo
  return (
    <div className='bg-[url("/public/Background2.png")] max-sm:bg-[url("/Background1.png")] flex flex-col  items-center text-white w-full h-screen lg:h-[62vh] mx-auto   md:h-96   bg-center bg-cover'>
        <NavBar/> 
            <Outlet/>
        <Footer/>
    </div>
  )
}
