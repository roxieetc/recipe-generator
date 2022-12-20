import React, { useState, useEffect } from "react";

function Random () {

    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
    const [randomMeal, setRandomMeal] = useState([])

    const fetchRecipes = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setRandomMeal(data.meals)  
  }

  useEffect(() => {
    fetchRecipes()
  }, [])

  const refresh = () => {
    window.location.reload(false);
  }
        return (
            <div>
                <section className="recipeMeals bg-slate-100 pt-[4rem] h-full pb-[2rem]">
          
          {randomMeal.map((recipe) => {
     
              return (
                
                <div class="text-slate-700 p-5 max-w-2xl bg-white border border-slate-300 rounded-2xl shadow-md mx-2 sm:m-auto">
                        <img class="rounded-full h-[25rem] w-auto flex m-auto mt-4" src={recipe.strMealThumb} alt="" />
                    <div class="p-5">
                            <h5 class="mb-2 text-[3rem] font-bold tracking-tight text-gray-900 dark:text-white text-center">{recipe.strMeal}</h5>
                            <div className="ingredients mb-5 mt-5">
                                <h2 className='text-2xl font-bold'>Ingredients</h2><br />
                                <h4>{recipe.strMeasure1} {recipe.strIngredient1}</h4>
                                <h4>{recipe.strMeasure2} {recipe.strIngredient2}</h4>
                                <h4>{recipe.strMeasure3} {recipe.strIngredient3}</h4>
                                <h4>{recipe.strMeasure4} {recipe.strIngredient4}</h4>
                                <h4>{recipe.strMeasure5} {recipe.strIngredient5}</h4>
                                <h4>{recipe.strMeasure6} {recipe.strIngredient6}</h4>
                                <h4>{recipe.strMeasure7} {recipe.strIngredient7}</h4>
                                <h4>{recipe.strMeasure8} {recipe.strIngredient8}</h4>
                            </div>
                            <h2 className='text-2xl font-bold text-center'>Directions</h2><br />
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{recipe.strInstructions}</p>
                    </div>
                    <div className="refresh-button flex justify-center pb-5">
                        <button className="bg-green-600 text-white text-lg font-bold px-12 py-3 border-none rounded-full mt-5 hover:bg-green-700" onClick={refresh}>New Meal</button>
                    </div>
                </div>
    
              )
            })}
           </section>
            </div>
    
        )
    }

export default Random;