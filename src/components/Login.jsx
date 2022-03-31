import React, {useState, useContext} from "react";
import {UserContext} from '../App'

function Login() {
  const [input, setInput] = useState("")
  const {user, setUser} = useContext(UserContext)
  function clickHandler(e) {
    e.preventDefault()
    setUser(input)
    setInput("")
  }

  return (
    <div className="sub-page">
      <h1>Login</h1>
      <form>
        <input type="text" value={input} placeholder="Create a Username" onChange={(e) => setInput(e.target.value)}/>
        <button onClick={clickHandler}>Submit!</button>
      </form>
    </div>
  );
}

export default Login;
