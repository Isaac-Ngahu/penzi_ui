import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './welcome.css'
import { Link } from 'react-router-dom'
function Welcome() {
    const [userNo,setUserNo] = useState ("")
    const navigate = useNavigate()
function handleChange(e){
     setUserNo(()=>e.target.value)
}
function handleSubmit(e){
    e.preventDefault()
    const numberPattern = /^(?:\+254|0)[17]\d{8}$/
    if(numberPattern.test(userNo)){
        sessionStorage.setItem('userNo',userNo)
        navigate('/home')   
    }else{    
    alert("please enter number in correct format")
}
}
  return (
    <div className='welcome-page'>
    <h2>Welcome to penzi dating app with 6000 potential dating partners</h2>
    <p>Click here if admin <Link to='/login'>Admin login</Link> </p>
    <form className='registration-form' onSubmit={handleSubmit}>
        <label>Enter your phone number to start:</label>
        <input type='phone' value={userNo} required onChange={handleChange}/>
        <button type='submit' >Submit</button>
    </form>
    </div>
  )
}

export default Welcome