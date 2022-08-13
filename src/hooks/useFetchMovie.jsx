import { useState, useEffect } from "react"
import {  fetchMovieById } from "components/Services/FetchAPI"
import { useParams } from 'react-router-dom';

export const useFetchMovie =() =>{
const {movieId}= useParams()
const [movie, setMovies] = useState(null)

useEffect(()=>{
    fetchMovieById(movieId).then(setMovies)
   
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [movieId])

   return movie
}