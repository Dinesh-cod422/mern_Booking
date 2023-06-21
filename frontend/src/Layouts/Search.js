import React, { Fragment, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../Css/Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { getallData } from '../Actions/MainActions'


const Search = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const [keyword, setKeyword] = useState("")
    const {allDatas} = useSelector((state) => state.allDataState)

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
      
      dispatch(getallData)
    },[location, dispatch])
  return (
    <Fragment>
        <form className="d-flex justify-content-center flex-grow-1 mt-3" role="search" onSubmit={searchHandler}>
        <input class="form-control me-2 w-50" list="datalistOptions" id="exampleDataList" aria-label="Search" placeholder="Search..." onChange={(e) => { setKeyword(e.target.value) }} value={keyword}/>

        <div style={{ overflow: 'auto', maxHeight: '200px' }}>
          <datalist id="datalistOptions">
            {allDatas && allDatas.map(datass => (
              <option value={datass.name} />
            ))}
          </datalist>
        </div>

            <button className="btn btn-outline-primary" onClick={searchHandler} type="submit">Search</button>
          </form>
    </Fragment>
  )
}

export default Search