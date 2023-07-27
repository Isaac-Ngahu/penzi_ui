import React from 'react'
import { useState } from 'react'
function UserRequests() {
    const user_no = sessionStorage.getItem("clickedNumber")
    const [userMessages,setUserMessages]=useState([])
    function handleGetMessages(){
        fetch(`http://127.0.0.1:5000/admin/${user_no}`)
        .then(res=>res.json())
        .then(data =>{
            if (data.length === 0){
                setUserMessages(()=>["this user has no messages"])
            }else{
             setUserMessages(()=>data)}})
        const li = document.createElement('li')
        const ul = document.getElementById('append-messages')
        userMessages.map((message)=>{
           li.textContent=message[0]
           return ul.append(li)
        })
    }
  return (
    <div>
        <button onClick={handleGetMessages}>Get messages</button>
        <button>Delete user</button>
        <ul id='append-messages'></ul>
    </div>
  )
}

export default UserRequests