import React, { useState, useEffect } from 'react'
import Movie from './Movie'

export const Home = (props) => {
    const [fetchedMovies, setFetchedMovies] = useState([])

    const fetchMovies = async () => {
        const apiCall = await fetch("http://localhost:3000/movies")
        const  movies = await apiCall.json()
        setFetchedMovies(movies)
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    

    return(<>
        {console.log(fetchedMovies)}
        {fetchedMovies.map(movie => <Movie movie={movie}/>)}
    </>)
}

export default Home