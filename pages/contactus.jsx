import React from 'react'
import { Heade } from './header.jsx'
import Image from 'next/image'
const contactus = () => {
  return (
    <>
      <Heade />
      <div className='main' style={{ height: '672px', width: '1222px', position: 'relative', left: '295px', top: '17px', borderRadius: '15px', backgroundColor: '#d8f2ff' }}>
        <div className="box" style={{ display: "flex", flexDirection: 'column', width: '1222px', height: '672px', alignItems: 'center', justifyContent: 'center' }}>
          <div className='info_container mx-auto mt-5 col-md-10 mt-100'>
            <div className="row justify-content-center pb-5">
              <div className="card col-md-3 mt-100">
                <div className="card-content">
                  <div className="card-body p-0">
                    <div className="profile"> <Image src="/Ritik.jpg" width='50'height='50' /></div>
                    <div className="card-title mt-4">  Frederi John y<br /> <small>Head of marketing at K mart</small> </div>
                    <div className="card-subtitle">
                      <p> <small className="text-muted"> I expected anything less than perfect for the team of experts. They are the best team ever! </small> </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-md-3 mt-100">
                <div className="card-content">
                  <div className="card-body p-0">
                    <div className="profile"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583319/AAA/3.jpg" /> </div>
                    <div className="card-title mt-4"> Noel Flantier<br /> <small>CEO of Redbull</small> </div>
                    <div className="card-subtitle">
                      <p> <small className="text-muted"> I really enjoyed working with them, they are Group of Professionals and they know what they're Doing </small> </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-md-3 mt-100">
                <div className="card-content">
                  <div className="card-body p-0">
                    <div className="profile"> <Image src="/Ritik.jpg" width='50'height='50' /></div>
                    <div className="card-title mt-4"> David Gregory<br /> <small>Resident Dj at ibdc</small> </div>
                    <div className="card-subtitle">
                      <p> <small className="text-muted"> I always wanted cool videos of my concerts never knew whom to talk to but they are amazing! </small> </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-md-3 mt-100">
                <div className="card-content">
                  <div className="card-body p-0">
                    <div className="profile"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg" /> </div>
                    <div className="card-title mt-4"> David Gregory<br /> <small>Resident Dj at ibdc</small> </div>
                    <div className="card-subtitle">
                      <p> <small className="text-muted"> I always wanted cool videos of my concerts never knew whom to talk to but they are amazing! </small> </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-md-3 mt-100">
                <div className="card-content">
                  <div className="card-body p-0">
                    <div className="profile"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg" /> </div>
                    <div className="card-title mt-4"> David Gregory<br /> <small>Resident Dj at ibdc</small> </div>
                    <div className="card-subtitle">
                      <p> <small className="text-muted"> I always wanted cool videos of my concerts never knew whom to talk to but they are amazing! </small> </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card col-md-3 mt-100">
                <div className="card-content">
                  <div className="card-body p-0">
                    <div className="profile"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1574583246/AAA/2.jpg" /> </div>
                    <div className="card-title mt-4"> David Gregory<br /> <small>Resident Dj at ibdc</small> </div>
                    <div className="card-subtitle">
                      <p> <small className="text-muted"> I always wanted cool videos of my concerts never knew whom to talk to but they are amazing! </small> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  )
}

export default contactus