import React,{useState,useEffect} from 'react'
import './Home.css'

// import { useNavigate } from 'react-router-dom';
function Home() {
  // const apiUrl = 'http://127.0.0.1:5000/api/Whatsapp'
const [userMsg,setUserMsg] = useState("")
const [response,setResponse] = useState("")
const phoneNumber = sessionStorage.getItem('userNo')
useEffect(() => {
  // This function will be called after the response state has been updated
  const messagesContainer = document.getElementById('append-message');
  const li = document.createElement('li');
  li.className = 'message-text message sent';
  if (response === "" || response === 'null') {
    setResponse(<li>Loading....</li>);
  } else {
    li.textContent = response;
    messagesContainer.appendChild(li);
  }
}, [response]); 
function handleChange(e){
  const value = e.target.value
  setUserMsg(()=>value) 
}
function sendMessage(){
  const userData={
    user_no:phoneNumber,
    message:userMsg
  }
  fetch("http://127.0.0.1:5000/api/Messages", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(res =>  res.json())
  .then(data => {
    if (data.Message === null){
      return <li>Loading...</li>
    }else{
    return sendResponse(data.Message);
  }})
  .catch(error => {
    console.error(error);
  });
}
function sendResponse(data){
  setResponse(()=> data)
  
}
function handleClick(){
  const messagesContainer = document.getElementById('append-message')
  const inputField = document.getElementById('inputField')
  const li= document.createElement('li')
  li.className='message-text message received'
  if (inputField.value === ''){
    return;
  }else{
    li.textContent = userMsg
    messagesContainer.appendChild(li);
    inputField.value = '';
    setUserMsg("")
    sendMessage()
  }
}
  return (
    <div className="chat-box">
  <div className="messages">
    <div className="message received">
      <ul id='append-message'>
      </ul>
    </div>
    <div className="message sent">
    </div>

  </div>
  <div className="input-area">
    <input type="text" className="message-input" id='inputField' name='user-message' placeholder="Type your message..." onChange={handleChange} value={userMsg} />
    <button className="send-button" onClick={handleClick}>Send</button>
  </div>
</div>
  )
}

export default Home