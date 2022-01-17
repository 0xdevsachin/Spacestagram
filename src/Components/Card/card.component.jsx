import React from 'react'
import Cards from '../cards/cards.component'
import './card.style.css'
function Card({ data }) {
    return (
        <div className='card'>
            {
                data.map((data) =>{
                    return(
                        <Cards key={data.date} data={data} />
                    )
                })
            }
        </div>
    )
}

export default Card
