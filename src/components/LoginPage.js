import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("");
  const [showAuth, setShowAuth] = useState(false);
  const userRef = useRef();
  const user = "nadeem";
  const pwd = "1234";
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== user) {
      userRef.current.style.border = "1px solid red";
      setAuth("wrong username");
      navigate("/");
      userRef.current.style.color = "red";
      setShowAuth(!showAuth);
    } else if (password !== pwd) {
      userRef.current.style.border = "1px solid red";
      navigate("/");
      setAuth("wrong password");
      setShowAuth(!showAuth);
      userRef.current.style.color = "red";
    } else {
      navigate("/StatesPage");
    }
  };
  return (
    <div className="flex justify-center items-center bg-stone-700 h-screen flex-col">
      <h1 className="font-bold text-4xl text-stone-700 mb-2 bg-green-100 px-24 py-2 rounded-t-3xl">
        Live Covid Tracker
      </h1>
      <form
        className="bg-green-200 py-20 px-28 flex flex-col justify-center space-y-8 rounded-md"
        onSubmit={handleSubmit}
      >
        <div
          ref={userRef}
          className={`bg-white -mt-20 px-6 rounded-md ${
            !showAuth ? "hidden" : "flex"
          }`}
        >
          {auth}
        </div>
         <input
            type="text"
            placeholder="username"
            className="py-2 px-4 rounded-md border-0 outline-none"
          onChange={(e) => setUsername(e.target.value)}
            required
          />
        <input
          type="password"
          placeholder="password"
          className="py-2 px-4 rounded-md border-0 outline-none"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="rounded-md bg-stone-700 text-white text-2xl py-1 px-10">
          CLICK
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
