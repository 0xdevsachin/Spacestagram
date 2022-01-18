import { createContext, useState } from "react";

const likeStateContext = createContext(null);

export const UserState = (props) =>{
    const [like, setLike] = useState([]);
    return(
        <likeStateContext.Provider value={{like, setLike}}>
            {props.children}
        </likeStateContext.Provider>
    )
}

export default likeStateContext;