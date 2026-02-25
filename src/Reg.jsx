import { useState } from "react"
import axios from "axios"

function Reg (){
  const[data,setData] = useState(
    {
      username:"",
      email:"",
      password:""
    }
  )
  const changeName = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submit = async () =>{
    try {
  const res = await axios.post("http://localhost:8080/reg", data);
  // Successfully received a 2xx response
  alert(res.data);
} catch (xyz) {
  // 1. Check if the server actually sent a response (e.g., 400 or 500 error)
  if (xyz.response) {
    alert("Server Error: " + xyz.response.data);
  } 
  
  else if (xyz.request) {
    alert("Network Error: No response from server. Is your backend running on port 8080?");
  } 
  
  else {
    alert("Error: " + xyz.message);
  }
}

  }
  return(
    <>
    <h1> Hello World </h1>
    <input onChange={changeName} name="username" placeholder="Enter your name" />
    <input onChange={changeName} name="email" placeholder="Enter email" /> 
    <input onChange={changeName} name="password" placeholder="Enter password" />
    <button onClick={submit}> register </button>


    </>
  )

}
export default Reg;