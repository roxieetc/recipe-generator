import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import AboutImg from '../Assets/about-image.jpg';
import AboutImg2 from '../Assets/about-image2.jpg';

function Recipes() {
    const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    const data = await response.json()
    setImages(data.categories)
  }

    return(
      <section className="home">
{/* HERO SECTION */}
        <div className="relative">
            <div className="absolute top-0 w-full h-full bg-cover bg-top bg-hero-image">
                <span id="whiteOverlay" className="w-full h-full absolute opacity-70 sm:opacity-40 bg-white"></span>
            </div>
            <div className="relative h-[80vh] flex items-center">
                <div className="md:ml-20 text-center md:text-left">
                    <h1 className="text-black text-6xl md:text-8xl font-serif drop-shadow-md">Sprinkle & Dash</h1>
                    <p className="text-slate-700 text-2xl mt-5 ml-2">Bringing dishes from around the world to your kitchen</p>
                </div>
            </div>
        </div>
{/* ABOUT US SECTION */}
<div id="About" className="relative py-24 text-slate-800">
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-full drop-shadow-md"
                src={AboutImg}
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12 mt-8">
                <h3 className="text-4xl uppercase font-bold text-green-600">About Our Services</h3>
                <p className="mt-4 text-xl leading-relaxed">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet a maiores et reprehenderit impedit consectetur neque vitae quam vel voluptates alias necessitatibus, molestias facere deleniti fugiat culpa error dignissimos dolor odio autem modi numquam blanditiis. Eum repellendus, accusantium ipsum dolores sed rem error hic, magnam magni consectetur omnis labore tempora! 
                  <br/><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim unde non numquam, expedita corporis repellendus sit inventore porro saepe laboriosam!
                </p>
                <button className="bg-green-600 text-white text-lg font-bold px-10 py-3 border-none rounded-full mt-5 hover:bg-green-700">Learn More</button>
              </div>
            </div>
          </div>
{/* SECOND SECTION */}
          <div className="items-center flex flex-wrap mt-20 bg-slate-100 py-10 rounded-2xl">
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12 mt-8">
                <h3 className="text-4xl uppercase font-bold text-green-600">Where We Come From</h3>
                <p className="mt-4 text-xl leading-relaxed">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti officia, nesciunt incidunt blanditiis eius alias ullam quam commodi vel animi, laudantium dicta culpa quibusdam tempora.
                  <br/><br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, veritatis eos. Molestias corporis facere a error vel, maxime dignissimos quidem nulla, in nesciunt maiores quae doloremque sed magnam cum. Ipsam.
                </p>
              </div>
            </div>
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-full drop-shadow-md mt-5"
                src={AboutImg2}
              />
            </div>
          </div>
        </div>
      </div>
{/* CHOOSE YOUR CATEGORY */}
        <div id="Categories" className="relative py-24 bg-slate-100">
          <div className="font-bold text-center text-4xl">
            <h1 className="uppercase text-green-600">Choose Your Category</h1>
          </div>
{/* Map through and return categories and images */}
        <div className="category-container flex justify-center flex-wrap">
            {images.map((recipe) => {
                const {strCategory, strCategoryThumb} = recipe

                return (
                    <div className="map-container flex inline-flex place-content-center mt-12">
                        <Link to={'/categories/' + strCategory}>
                          <div className="category-info space-x-4 text-slate-700 bg-white rounded-2xl p-5 mx-2 border border-slate-300 hover:scale-105 duration-300 hover:cursor-pointer">
                            <h2 className="text-2xl text-center font-bold mb-3">{strCategory}</h2>
                            <img src={strCategoryThumb} alt={strCategory} />
                          </div>
                        </Link>
                    </div>
                )
            })}
        </div>
      </div>
{/* FOOTER SECTION */}
        <div className="footer-container bg-green-600 text-white text-lg py-12 text-center">
            <p>All original content and design &copy; to Roxie Schnoor 2023</p>
            <p>API data from themealdb.com</p>
            <p>Images sourced from unsplash.com</p>
            <button className="bg-white text-green-600 font-bold tracking-[.05rem] px-10 py-3 rounded-full mr-5 mt-5 hover:cursor-pointer hover:bg-green-100"><a href="https://github.com/roxieetc/recipe-generator" target="_blank">Github</a></button>
            <button className="bg-white text-green-600 font-bold tracking-[.05rem] px-10 py-3 rounded-full mr-5 mt-5 hover:cursor-pointer hover:bg-green-100"><a href="https://www.linkedin.com/in/roxieschnoor/" target="_blank">LinkedIn</a></button> 
        </div>
      </section>
    )
}

export default Recipes;