import React from "react"
import {Routes,Route}from "react-router-dom"
import HomePage from "../Pages/HomePage"


const userRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>

    )
}
export default userRoutes