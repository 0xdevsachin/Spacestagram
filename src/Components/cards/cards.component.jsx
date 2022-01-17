import React from 'react'
import './cards.style.css'
function Cards({ data }) {
    return (
        <div className='cards'>
            <img className='img' src={data.url} alt="CardImage" />
            <p className='text'>{data.title}</p>
            <p className='text'>Date : {data.date}</p>
            <div className='content text'>{data.explanation}</div>
            <a href={data.hdurl} rel="noreferrer" target="_blank"><button className='button'>Share <i className="fas fa-share-alt"></i></button></a>
        </div>
    )
}

export default Cards
