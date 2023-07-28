import React from 'react'
import Form from './Form'
function MovieDisplay(props) {

    const loaded = ()=>{
        return (
            <>
        <h1>{props.movie.Title}</h1>
        <h1>{props.movie.Year}</h1>
        <h1>Rated: {props.movie.Rated}</h1>
        <hr/>
        <img src={props.movie.Poster}/>
        <h3>Starring: {props.movie.Actors}</h3>
        <h2>Awards: {props.movie.Awards}</h2>
        <hr/>
        <h1>{props.movie.Plot}</h1>
            </>
            )
        }

        const loading =()=>{
            return <h1>No Movie To Display</h1>
        }

        return props.movie ? loaded() : loading();
    }

  


export default MovieDisplay