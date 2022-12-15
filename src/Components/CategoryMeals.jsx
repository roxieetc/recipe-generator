import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

const CategoryMeals = () => {

    const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const catName = useParams()

  const getImages = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName.meals}`)
    const data = await response.json()
    setImages(data.meals)
  }

    return (
        <div className="relative py-24 bg-slate-100 h-screen">
          <div className="font-bold text-center text-4xl">
            <h1 className="uppercase text-green-600">Choose Your Recipe</h1>
          </div>

        <div className="category-container flex justify-center flex-wrap bg-slate-100 my-5">
            {images.map((recipe) => {
                const {strMeal, strMealThumb} = recipe
                return (
                    <div className="map-container flex inline-flex place-content-center mt-12">
                        <Link to={'/recipe/' + strMeal}>
                          <div className="category-info space-x-1 text-slate-700 bg-white rounded-2xl p-5 mx-2 border border-slate-300 hover:scale-105 duration-300 hover:cursor-pointer w-96 h-[29rem]">
                            <h2 className="text-2xl text-center break-normal font-bold mb-3">{strMeal}</h2>
                            <img src={strMealThumb} alt={strMeal} className="max-w-xs rounded-full"/>
                          </div>
                        </Link>
                    </div>
                )
            })}
       </div>
       </div>
    );
}

export default CategoryMeals;