import React from 'react'
import {NavLink} from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="shadow-lg flex-column p-5 text-center mt-5 d-flex justify-content-between h-100">
            <h3>404</h3>
            <h4>we are sorry , page not found!</h4>
            <NavLink to="/">Go To Home</NavLink>
        </div>
    )
}

export default PageNotFound
