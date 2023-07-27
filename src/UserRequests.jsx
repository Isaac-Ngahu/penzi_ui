import React from 'react'
import { useState } from 'react'
import './UserRequests.css'
function UserRequests() {
    const user_no = sessionStorage.getItem("clickedNumber")
    const [userMessages,setUserMessages]=useState([])
    function handleDelete(){
      fetch(`http://127.0.0.1:5000/admin/${user_no}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.ok) {
          console.log('Item deleted successfully!');
        } else {
          console.error('Failed to delete item.');
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
      });
    };
    
    function handleGetMessages(){
        fetch(`http://127.0.0.1:5000/admin/${user_no}`)
        .then(res=>res.json())
        .then(data =>{
            if (data.length === 0){
                setUserMessages(()=>["this user has no messages"])
            }else{
             setUserMessages(()=>data)}})
        

    }

  return (
    <div className='user-request'>
        <button onClick={handleGetMessages}>Get messages</button>
        <button onClick={handleDelete}>Delete user</button>
        <ul id='append-messages'>
        {userMessages.map((message) => (
        <li key={message}>{message}</li>
        ))}
        </ul>
    </div>
  )
}

export default UserRequests