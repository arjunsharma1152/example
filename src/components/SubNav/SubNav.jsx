import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SubNav = ({ sublinks, visible }) => {

    return (
        <ul className={`sublinks ${visible}`}>
            {sublinks.map((el, idx) => (
                <li key={idx}>
                    <Link to={el.to}>
                        {el.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default SubNav