import React, { useContext } from 'react'
import likeStateContext from '../../context/context'
import Card from '../Card/card.component'
function Like() {
    const { like } = useContext(likeStateContext)
    var unique = like.filter((v, i, a) => a.indexOf(v) === i)
    return (
        <div>
            <h1 style={{color : '#fff', textAlign : 'center', marginTop : '20px'}}>Post's You have Liked</h1>
            <Card data={unique} />
        </div>
    )
}
export default Like
