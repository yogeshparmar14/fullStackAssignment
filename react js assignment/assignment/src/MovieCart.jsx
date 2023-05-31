import React, { useEffect, useState } from 'react'
import './MovieCard.css'
const MovieCart = () => {
    const [dataFromApi,setDataFromApi]=useState([])
    const movieData = [
        {
            "Title": "The Lion King",
            "Year": "2019",
            "Runtime": "118 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
            "rating": 5,
        },
        {
            "Title": "Mowgli: Legend of the Jungle",
            "Year": "2018",
            "Runtime": "104 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
            "rating": 5,
        },
        {
            "Title": "Doctor Strange",
            "Year": "2016",
            "Runtime": "115 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
            "rating": 5,
        },
        {
            "Title": "John Wick",
            "Year": "2014",
            "Runtime": "101 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
            "rating": 5,
        },

    ]
    useEffect(()=>{
        getAllMovies()  
    },[])
    const getAllMovies = () => {
        fetch('http://localhost:8000/user/getAllMovies')           //api for the get request
            .then(response => response.json())
            .then(data => {
                console.log("data",data?.data?.movies)
                setDataFromApi(data?.data?.movies)
            });
    }
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className="hero-container">
                {
                    movieData?.map((item, index) => {
                        return (
                            <div className="main-container">
                                <div className="poster-container">
                                    <a href="#"><img src={item.Poster} className="poster" /></a>
                                </div>
                                <div className="ticket-container">
                                    <div className="ticket__content">
                                        <h4 className="ticket__movie-title">{item?.Title}</h4>
                                        <p className="ticket__movie-slogan">
                                            More human than human is our motto.
                                        </p>
                                        <span className='ticket__current-price'></span>
                                        <p className="ticket__current-price">{item.rating}</p>
                                        {/* <p class="ticket__old-price">$44.99</p> */}
                                        <p className="ticket__current-price">{item.Year}</p>
                                        <button className="ticket__buy-btn">Buy now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    dataFromApi?.map((item, index) => {
                        return (
                            <div className="main-container">
                                <div className="poster-container">
                                    <a href="#"><img src={item.poster} className="poster" /></a>
                                </div>
                                <div className="ticket-container">
                                    <div className="ticket__content">
                                        <h4 className="ticket__movie-title">{item?.title}</h4>
                                        <p className="ticket__movie-slogan">
                                            More human than human is our motto.
                                        </p>
                                        <span className='ticket__current-price'></span>
                                        <p className="ticket__current-price">{item.rating}</p>
                                        <p className="ticket__current-price">{item.year}</p>
                                        {/* <p class="ticket__old-price">$44.99</p> */}
                                        <button className="ticket__buy-btn">Buy now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default MovieCart
