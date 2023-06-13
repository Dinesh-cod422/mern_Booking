import React, { Fragment, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../Css/Navbar.css'


const Search = () => {


    const navigate = useNavigate()
    const location = useLocation()
    const [keyword, setKeyword] = useState("")

    const searchHandler = (e) => {
        e.preventDefault()
        navigate(`/search/${keyword}`)
    }

    const clearKeyword = () => {
      setKeyword("")
    }

    useEffect(()=> {
      if(location.pathname === "/"){
          clearKeyword()
      }
    },[location])
  return (
    <Fragment>
        <form className="d-flex justify-content-center flex-grow-1 mt-3" role="search" onSubmit={searchHandler}>
            <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" onChange={(e) => { setKeyword(e.target.value) }} value={keyword}/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
    </Fragment>
  )
}

export default Search