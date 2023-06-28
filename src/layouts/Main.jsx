import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
//se importann los componentes que se repiten en todas las vistas

export default function Main({children}) {
    //la propiedad children contiene el contenido que Main tiene como hijo
  return (
    <div className='bg-[url("/public/Background2.png")] max-sm:bg-[url("/Background1.png")] flex flex-col  items-center text-white w-full h-screen lg:h-[62vh] mx-auto   md:h-96   bg-center bg-cover'>
        <NavBar/>
        {/*aca dentro deberia tener el contenido dinamico de cada interfaz*/} 
        {children}
        <Footer/>
    </div>
  )
}
