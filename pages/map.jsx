import React from 'react'
import { Heade } from './header.jsx'
import Image from 'next/image'
import Link from 'next/link.js'
const map = () => {
  return (
    <>
      <Heade />
      <div className='main' style={{ height: '672px', width: '1222px', position: 'relative', left: '295px', top: '17px', borderRadius: '15px', backgroundColor: '#d8f2ff' }}>
        <div className="box" style={{ display: "flex", flexDirection: 'column', width: '1222px', height: '672px', alignItems: 'center', justifyContent: 'center' }}>

          <div className="container" style={{marginBottom:'0px',backgroundColor:'f5Cf6fa'}}>
            <div className='g_img'style={{marginBottom:'0px',backgroundColor:'f5Cf6fa'}} ></div>
            <Link href='/done/amreli'><button id="amreli" className="button">Amreli</button></Link>
            <Link href='/done/junagadh'><button id="junagadh" className="button">junagadh</button></Link>
            <Link href='/done/surat'><button id="surat" className="button">surat</button></Link>
            <Link href='/done/kutch'><button id="kutch" className="button">kutch</button></Link>
            <Link href='/done/morbi'><button id="morbi" className="button">morbi</button></Link>
            <Link href='/done/diu'><button id="diu" className="button">diu</button></Link>
            <Link href='/done/rajkot'><button id="rajkot" className="button">rajkot</button></Link>
            <Link href='/done/ahmedabad'><button id="ahmedabad" className="button">ahmedabad</button></Link>
            <Link href='/done/navasari'><button id="navasari" className="button">navasari</button></Link>
            <Link href='/done/dang'><button id="dang" className="button">dang</button></Link>
            <Link href='/done/surendranagar'><button id="surendranagar" className="button">surendranagar</button></Link>
          </div>
        </div >
      </div>

    </>
  )
}

export default map