import React, { useState, useEffect } from 'react'

export const Movie = (props) => {
    return(<>
        <img src={props.movie.poster} alt="nothing sry"/>
        <h2>{props.movie.title}</h2>
    </>)
}

export default Movie