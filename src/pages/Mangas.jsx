import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api, apiUrl, endpoints } from "../utils/api";
import {
  setFilters,
  setCategories,
  setMangas,
  setPagination,
} from "../store/actions/mangas.js";
import { Link } from "react-router-dom";
import { LS } from '../utils/localStorageUtil';

let token = LS.get('token')

const Mangas = () => {
  const dispatch = useDispatch();
  const { filters, categories, mangas, pagination } = useSelector(
    (state) => state.mangas
  );

  const { title, categoriesSelected, page } = filters;
  const { prev, next } = pagination;

  const getMangas = async () => {
    try {
      const { data } = await api.get(apiUrl + endpoints.read_mangas+ `?title=${title}&category=${categoriesSelected}&page=${page}`, {
        headers: { Authorization: `Bearer ${token}` }},);

      dispatch(setMangas(data.mangas));
      dispatch(setPagination(data.pagination));
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await api.get(apiUrl + endpoints.read_categories,{
        headers: { Authorization: `Bearer ${token}` }});
      dispatch(setCategories(data.categories));
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
    <div className="flex  flex-col h-[400vh] w-screen items-center justify-center">
      <div className="flex flex-wrap gap-[70px] bg-[url('/mangas-bg.png')] bg-no-repeat bg-top bg-cover h-[40vh] justify-center items-center flex-col w-[100%]">
        <h1 className="text-white flex-wrap text-[30px] lg:text-[60px] font-semibold">Mangas</h1>
        <input
          value={title}
          onChange={handleTextChange}
          className="flex lg:w-[500px] w-30 h-10 rounded-3xl items-center text-black text-center "
          type="search"
          name="search-mangas"
          id="search"
          placeholder="🔎Search Mangas"
        />
      </div>
      <div className="flex flex-wrap h-[10vh] rounded-t-full items-center w-full justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => selectCategory(category._id)}
            className={`md:p-4 rounded-full p-1 ${
              categoriesSelected.includes(category._id) ? "selected" : ""
            }`}
            style={{
              backgroundColor: categoriesSelected.includes(category._id)
                ? category.hover
                : category.color,
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-5 md:w-[90%] justify-center ">
        {mangas.length > 0 ? (
          mangas.map((manga, index) => (
            <div
              key={manga._id}
              className={`flex flex-col flex-wrap h-[10rem] w-[80vw]  md:w-80 md:h-[12rem] lg:h-[15rem] lg:w-[40vw] border-l-[7px] rounded-[10px] justify-center  ${
                borderColor(index)
              }`}
            >
              <Link to={`/manga/${manga._id}`} className="flex justify-between">
                <p className="text-black font-semibold flex lg:text-[30px] items-center justify-">
                  {manga.title}
                </p>
                <img
                  className="  h-[10rem]  rounded-l-[50%] w-[8rem] md:h-[12rem] lg:h-[15rem] lg:w-[15rem] md:w-[12rem]"
                  src={manga.cover_photo}
                  alt=""
                />
              </Link>
            </div>
          ))
        ) : (
          <p className="md:text-[40px] flex-wrap text-black text-center">
            No se encontraron mangas que coincidan con los filtros seleccionados.
          </p>
        )}
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={!prev}
          className={`px-4 py-2 mr-2 ${
            !prev ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
          }`}
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={!next}
          className={`px-4 py-2 ${
            !next ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Mangas;