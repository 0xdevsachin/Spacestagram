import React, {useContext, useState} from 'react'
import './cards.style.css'
import likeStateContext from "../../context/context";
function Cards({ data }) {
    const { like, setLike } = useContext(likeStateContext)
    const [color, setColor] = useState(false)
    const setLikes = (data) =>{
        setLike([...like, data])
    }
    return (
        <div className='cards'>
            <img className='img' src={data.url} alt="CardImage" />
            <p className='text'>{data.title}</p>
            <p className='text'>Date : {data.date}</p>
            <div className='content text'>{data.explanation}</div>
            <span style={{ display : window.location.pathname === '/like' ? 'none' : 'inline-block' }}  className='text'> <i style={{ color : color ? 'red' : 'white',fontSize : '25px'}} onClick={() =>{
                setColor(true)
                setLikes(data)
            }} className="fas fa-heart"></i> </span>
            <a href={data.hdurl} rel="noreferrer" target="_blank"><button className='button'>Share <i className="fas fa-share-alt"></i></button></a>
        </div>
    )
}

export default Cards
