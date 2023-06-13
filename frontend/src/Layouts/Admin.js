import React, { useEffect, useState } from 'react'
import '../Css/Admin.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminData } from '../Actions/AdminActions'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Admin = () => {
    const dispatch = useDispatch()
    const { user = [], error } = useSelector((state) => state.adminDataState)
    console.log(user)

        const [sortOrder, setSortOrder] = useState({
          name: null,
          email: null,
        });
      
        const handleSort = (column) => {
          setSortOrder(prevSortOrder => ({
            ...prevSortOrder,
            [column]: prevSortOrder[column] === 'asc' ? 'desc' : 'asc',
          }));
        };
      
        const handleMouseEnter = (column) => {
          setHoveredColumn(column);
        };
      
        const handleMouseLeave = () => {
          setHoveredColumn(null);
        };
      
        const [hoveredColumn, setHoveredColumn] = useState(null);
      
        // Assuming you have an array of 'users' as the data
        const sortedUsers = [...user].sort((a, b) => {
          if (sortOrder.name === 'asc') {
            return a.name.localeCompare(b.name);
          } else if (sortOrder.name === 'desc') {
            return b.name.localeCompare(a.name);
          } else if (sortOrder.email === 'asc') {
            return a.email.localeCompare(b.email);
          } else if (sortOrder.email === 'desc') {
            return b.email.localeCompare(a.email);
          }
          return 0;
        });
    
        
        useEffect(() => {
            if(error){
                return toast.error(error,{
                    position: toast.POSITION.BOTTOM_CENTER
                })
            }
            dispatch(getAdminData)
        },[error, dispatch])
        
        return (
            <div className='admin'>
            <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">User Id</th>
                <th
                  scope="col"
                  onClick={() => handleSort('name')}
                  onMouseEnter={() => handleMouseEnter('name')}
                  onMouseLeave={handleMouseLeave}
                >
                  Name{' '}
                  {hoveredColumn === 'name' && sortOrder.name && (
                    sortOrder.name === 'asc' ? (
                      <FontAwesomeIcon icon={faArrowUp} className="locaIcon" />
                    ) : (
                      <FontAwesomeIcon icon={faArrowDown} className="locaIcon" />
                    )
                  )}
                </th>
                <th
                  scope="col"
                  onClick={() => handleSort('email')}
                  onMouseEnter={() => handleMouseEnter('email')}
                  onMouseLeave={handleMouseLeave}
                >
                  Email{' '}
                  {hoveredColumn === 'email' && sortOrder.email && (
                    sortOrder.email === 'asc' ? (
                      <FontAwesomeIcon icon={faArrowUp} className="locaIcon" />
                    ) : (
                      <FontAwesomeIcon icon={faArrowDown} className="locaIcon" />
                    )
                  )}
                </th>
                <th scope="col">Mobile No</th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobileNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        );
      };
    

export default Admin