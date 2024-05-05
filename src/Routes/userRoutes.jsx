import React from "react"
import {Routes,Route}from "react-router-dom"
import HomePage from "../Pages/HomePage"
import Juices_shakes from "../Pages/Juices_shakes"
import ListPage from "../Pages/ListPage"
import DetailPage from "../Pages/DetailPage"


const userRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/juice" element={<Juices_shakes/>}/>
            <Route path="/listPage" element={<ListPage/>}/>
            <Route path="/DetailPage" element={<DetailPage/>}/>

        </Routes>

    )
}
export default userRoutes