import React, { useEffect, useState } from 'react'
import { api, apiUrl, endpoints } from '../utils/api'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

 

const Mangas = ()=> {
    let [mangas, setMangas]= useState([])
    let [categories, setCategories]= useState([])
    let [categoriesSelected,setCategoriesSelected]= useState([])
    let [title, setTitle]= useState("")
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);

    const getMangas = async()=>{
        try {
            let {data}= await api.get(apiUrl+endpoints.read_mangas+`?title=${title}&category_id=${categoriesSelected}`)
            setMangas(data.mangas)
            setPrevPage(data.prev);
            setNextPage(data.next);
        } catch (error) {
            console.log(error);            
        }
    }
    const getCategories = async ( )=>{
        try {
            let {data}= await api.get(apiUrl+endpoints.read_categories)
            setCategories(data.response)
        } catch (error) {
            console.log(error);                
        }
    }
    const selectCategory = (value)=>{
        if(!categoriesSelected.includes(value)){
            setCategoriesSelected([value,...categoriesSelected])
        }else {
            setCategoriesSelected(categoriesSelected.filter(category=>category!==value))
        }
    }
    useEffect(()=>{
        getMangas()
        getCategories()
       
    },[title,categoriesSelected])
  return (
    <div >
        <NavBar />
        <div className='bg-[url("/bg-mangas.png")] h-[22rem] lg:h-[45rem] bg-no-repeat bg-cover bg-center '>
            <div className='w-full h-screen flex flex-col items-center gap-4  '>
                <h1 className='text-white font-bold text-2xl mt-28 lg:text-5xl lg:mt-72'> Mangas</h1>
                <input onKeyUp={(e)=>setTitle(e.target.value)} className='text-xl rounded-[20px] lg:px-28 py-2 mt-6 lg:mt-10 ' placeholder='🔎Find your manga here' type="text" />
                <div className='lg:w-[80%] w-[100%] rounded-[40px] lg:rounded-lg bg-[#EBEBEB] lg:bg-white mt-0 lg:mt-20 justify-center flex'>
                    <div className='lg:w-[80%] flex flex-col mt-10 '>
                        <div className='flex text-[10px]  lg:text-[15px] justify-center lg:w-fit lg:gap-4 gap-2 p- lg:p-4'>
                            {categories.map(category => <button key={category._id} onClick={()=>selectCategory(category._id)} className='py-1 px-4 rounded-full' style={{backgroundColor:categoriesSelected.includes(category._id) ?category.hover :category.color}}>{category.name}</button>)}
                        </div>
                        <div className='w-full min-h-fit flex flex-wrap gap-4 mt-5 lg:px-16 justify-center'>
                       
                            {mangas.length > 0 ? (mangas.map(manga => (<p className=' flex  gap-4 bg-white rounded-[10px] w-60 ' key={manga._id}>
                                <div className='font-bold flex items-center'>
                                {manga.title}
                                </div>
                                <img className='lg:h-56 lg:w-40 h-30 w-32  rounded-l-[50%]' src={manga.cover_photo} alt="" />
                                </p>))) : (<p>No hay mangas disponibles</p>)}
                        </div>
                        <div >
                            {prevPage && <button  onClick={() => console.log('Página anterior')}>Anterior</button>}
                            {nextPage && <button onClick={() => console.log('Página siguiente')}>Siguiente</button>}
                        </div>
                    </div>
                   
                </div>
               
            </div>
        </div>
        <div className='bg-[#EBEBEB] md:h-[80vh]'>

        </div>
       
    </div>
  )
}
 export default Mangas 