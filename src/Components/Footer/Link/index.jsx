import React from "react";
import "./Link.css"

const Link = ({link, texto}) => {
    return(
        <a className="link-final" href={link}>{texto}</a>
    )
}

export default Link