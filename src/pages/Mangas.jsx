
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api, apiUrl, endpoints } from "../utils/api";
import {setFilters,setCategories,setMangas,setPagination,} from "../store/actions/mangas.js";
import { Link } from "react-router-dom";

const Mangas = () => {
  const dispatch = useDispatch();
  const { filters, categories, mangas, pagination } = useSelector(
    (state) => state.mangas
  );

  const { title, categoriesSelected, page } = filters;
  const { prev, next } = pagination;

  const getMangas = async () => {
    try {
      const { data } = await api.get(apiUrl + endpoints.read_mangas, {
        params: {
          title: title.trim(),
          category: categoriesSelected.join(","),
          page: page,
        },
      });

      dispatch(setMangas(data.mangas));
      dispatch(setPagination(data.pagination));
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await api.get(apiUrl + endpoints.read_categories);
      dispatch(setCategories(data.response));
    } catch (error) {
      console.log(error);
    }
  };

  const selectCategory = (value) => {
    let updatedCategories = [];

    if (categoriesSelected.includes(value)) {
      updatedCategories = categoriesSelected.filter(
        (category) => category !== value
      );
    } else {
      updatedCategories = [...categoriesSelected, value];
    }

    const updatedFilters = {
      ...filters,
      categoriesSelected: updatedCategories,
      page: 1,
    };

    dispatch(setFilters(updatedFilters));
  };

  useEffect(() => {
    getMangas();
    getCategories();
  }, [title, categoriesSelected, page]);

  const handlePrevPage = () => {
    if (prev) {
      dispatch(setFilters({ ...filters, page: prev }));
    }
  };

  const handleNextPage = () => {
    if (next) {
      dispatch(setFilters({ ...filters, page: next }));
    }
  };

  const handleTextChange = (e) => {
    dispatch(setFilters({ ...filters, title: e.target.value, page: 1 }));
  };

  const borderColor = (index) => {
    const colors = ["border-red-500", "border-blue-500", "border-green-500", "border-yellow-500"];
    return colors[index % colors.length];
  };

  return (
    <div className="w-[100vw]">

      <div className="flex flex-col w-[100vw] h-[24rem] lg:h-[32rem]  lg:items-center justify-center bg-center bg-no-repeat bg-cover bg-[url('/mangas-bg.png')]">
        <div className="flex flex-col gap-4  h-screen items-center  w-[100%] ">
          <h1 className="text-white lg:text-6xl text-2xl font-semibold mt-80 lg:mt-72">Mangas</h1>
          <input onKeyUp={handleTextChange} className='lg:text-xl  text-black rounded-[20px] lg:px-28 py-2 mt-8 lg:mt-10 ' placeholder='🔎Find your manga here' type="text" />
          <div className="lg:w-[80%]  rounded-[60px] lg:rounded-lg  lg:bg-white bg-[#EBEBEB] w-[100vw] mt-10 lg:mt-20 justify-center flex">
              <div className='lg:w-[90%] flex flex-col mt-8 '>
                <div className='flex text-[20px] lg:text-[15px] justify-center lg:w-fit lg:gap-4 gap-4 p-2 lg:p-2'>
                  {categories.map(category => 
                  <button key={category._id} onClick={() => selectCategory(category._id)}
                  className={`md:p-4 rounded-full  ${categoriesSelected.includes(category._id) ? "selected" : ""}`} style={{backgroundColor: categoriesSelected.includes(category._id) ? category.hover: category.color}}>{category.name}</button>)}
                </div>
                <div className=" min-h-fit flex flex-wrap gap-28 mt-5 w-full justify-center ">
                  {mangas.length > 0 ? (mangas.map((manga, index) => (
                  
                    <div key={manga._id} className={`flex lg:w-80 w-72 lg:flex-wrap h-[8rem]  lg:h-[18rem] border-l-[7px] rounded-[10px]   ${borderColor(index)}`}>
                      <Link to={`/manga/:${manga._id}`} className="flex text-black items-center   w-full justify-between bg-white">
                        <p className="text-[15px] md:text-2xl pl-5  flex-wrap lg:w-[12rem] md:min-w-[17 rem] ">
                          {manga.title}
                        </p>
                        <img
                          className="lg:h-72 lg:w-52 md:h-32 md:w-48 h-32 w-40 rounded-l-[50%]"
                          src={manga.cover_photo}
                          alt=""
                        />
                      </Link> 
                    </div>
                  )) ) : (<p className="md:text-[40px] text-black flex-wrap text-center">
                  No se encontraron mangas que coincidan con los filtros seleccionados.</p>)}
                </div>
                <div className="flex flex-wrap justify-center mt-4">
                  <button
                    onClick={handlePrevPage}
                    disabled={!prev}
                    className={`px-4 py-2 mr-2 ${
                      !prev ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
                    }`}>Prev
                  </button>
                  <button
                    onClick={handleNextPage}
                    disabled={!next}
                    className={`px-4 py-2 ${
                      !next ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`}>Next
                  </button>  
                </div>  
              </div>
          </div>
        </div>
      
      </div>
      <div className=" bg-[#EBEBEB]  h-[100vh] lg:h-[100vh]">
        
      </div>  
    </div>
  );
};

export default Mangas;

