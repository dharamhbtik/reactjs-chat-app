import React, { useState  } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({socket})=>{
const navigate  = useNavigate();
const [userName,setUserName] = useState('');

const handleSubmit= (e)=>{
    e.preventDefault();
    localStorage.setItem('userName',userName);
    socket.emit('newUser', { userName, socketID: socket.id });
    navigate('/chat');
}

return(
    <form className="home__container" onSubmit={handleSubmit}>
            <h2 className="home__header">Signin to open Chat</h2>
            <label htmlFor="userName">Username</label>
            <input
            type="text"
                minLength={6}
                name="userName"
                id="userName"
                className="username__input"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
            />
            <button className="bome__cta">SIGN IN</button>
    </form>
);
};
export default Home;