import React from 'react'
import { useState } from "react";
import { Heade } from './header.jsx'
const login = () => {

  const [form, setdata] = useState("");

  const insertdata1 = (e) => {
    setdata({
      ...form,
      [e.target.name]: e.target.value
    })
  }


  const dn = () => {
    document.querySelector(".button").innerText='Done'
    document.querySelector(".button").style.background='green'
  }

  const submitdata = async () => {
    const response = await fetch("http://localhost:7700/", {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.text();
    console.log(data)
  }


  return (
    <><Heade />
      <div className='main' style={{ height: '672px', width: '1222px', position: 'relative', left: '295px', top: '17px', borderRadius: '15px', backgroundColor: '#d8f2ff' }}>
        <div className="box" style={{ display: "flex", flexDirection: 'column', width: '1222px', height: '672px', alignItems: 'center', justifyContent: 'center' }}>
          <div className="login-wrap">
            <div className="login-html">
              <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label className="tab">Login</label>
              <h1 name="tab" className="sign-up"></h1><label className="tab"></label>
              <div className="login-form">
                <div className="sign-in-htm">
                  <div className="group">
                    <label for="user" className="label">first name</label>
                    <input id="user" type="text" name='fname' onChange={insertdata1} className="input" />
                  </div>
                  <div className="group">
                    <label for="user" className="label">last name</label>
                    <input id="user" type="text" name='lname' onChange={insertdata1} className="input" />
                  </div>
                  <div className="group">
                    <label for="user" className="label">Email</label>
                    <input id="user" type="text" name='mname' onChange={insertdata1} className="input" />
                  </div>
                  <div className="group">
                    <label for="pass" className="label">Password</label>
                    <input id="pass" type="password" name='psd' onChange={insertdata1} className="input" data-type="password" />
                  </div>
                  <div className="group">
                    <button className="button" id='done' onClick={() => { submitdata(), dn() }} style={{width: '180px',position: 'relative', left: '90px'}} >lOGIN</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default login