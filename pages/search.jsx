import React from 'react'
import { Heade } from './header.jsx'
const search = () => {
  return (
    <><Heade />
      <div className='main' style={{ height: '672px', width: '1222px', position: 'relative', left: '295px', top: '17px', borderRadius: '15px', backgroundColor: '#d8f2ff' }}>
        <div className="box" style={{ display: "flex", flexDirection: 'column', width: '1222px', height: '55px', alignItems: 'center', justifyContent: 'center' }}>
          <nav className="navbar navbar-light bg-light" style={{ borderRadius:'15px',width: '1222px', height: '50px', display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <div className="container-fluid" >
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </div>
          </nav>
        </div >
      </div>
    </>
  )
}

export default search