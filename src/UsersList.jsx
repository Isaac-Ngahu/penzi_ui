import React from 'react'
import './UsersList.css'
import { useEffect,useState } from 'react'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
function UsersList() {
    const [userData,setUserData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        fetch('http://127.0.0.1:5000/admin/users')
        .then(response => response.json())
        .then(data => setUserData(()=>data))
    },[])
    function handleSearch(number){
        const searched = userData.filter((user)=> user[0] === number)
        setUserData(()=>searched)
    }
    function handleUserClick(user){
      sessionStorage.setItem("clickedNumber",user[0])
      navigate("/requests")
    }
  return (
    <div>
        <SearchBar onSearch={handleSearch}/>
        <table className='custom-table'>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>County</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user[0]} onClick={()=>handleUserClick(user)}>
              <td>{user[0]}</td>
              <td>{user[1]}</td>
              <td>{user[2]}</td>
              <td>{user[3]}</td>
              <td>{user[4]}</td>
              <td>{user[5]}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default UsersList