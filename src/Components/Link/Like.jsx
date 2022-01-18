import React, { useContext } from 'react'
import likeStateContext from '../../context/context'
import Card from '../Card/card.component'
function Like() {
    const { like } = useContext(likeStateContext)
    var unique = like.filter((v, i, a) => a.indexOf(v) === i)
    return <Card data={unique} />
}
export default Like
