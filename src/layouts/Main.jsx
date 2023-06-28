import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
//se importann los componentes que se repiten en todas las vistas

export default function Main({children}) {
    //la propiedad children contiene el contenido que Main tiene como hijo
  return (
    <div className='bg-[url("/public/Background2.png")] max-sm:bg-[url("/Background1.png")] bg-no-repeat bg-cover  lg:h-[85vh] lg:bg-contain h-[52vh] max-md:h-screen  '>
        <NavBar/>
        {/*aca dentro deberia tener el contenido dinamico de cada interfaz*/} 
        {children}
        <Footer/>
    </div>
  )
}
