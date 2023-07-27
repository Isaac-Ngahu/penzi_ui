import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminLogin.css'

function AdminLogin() {
  const [data,setData] = useState({
    user_name:'',
    password:''
  })
  const navigate = useNavigate()
  function handleChange(e) {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  }
  function handleSubmit(e){
    e.preventDefault()
    if (data.user_name === null || data.password === null){
      alert("please enter details")
    }else{
    fetch('http://127.0.0.1:5000/admin',{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data =>{
      if(data.Error){
        alert(data.Error)
      }else{
        navigate('/users-list')
      }
    })
  }}
  return (
    <div className='admin-login'>
      <h2>Enter your Details for admin priviledges:</h2>
      <form className='verify-admin' onSubmit={handleSubmit}>
        <label htmlFor="user_name">Enter user name:</label>
        <input type="text" id="user_name" required value={data.user_name} onChange={handleChange} />
        <label htmlFor="password">Enter password</label>
        <input type="password" id='password' required value={data.password} onChange={handleChange}/>
        <button type='submit'> Verify</button>
      </form>
    </div>
  )
}

export default AdminLogin