import React from 'react'
import Link from 'next/link';
const header = () => {

    return (

        <>
            <div className='box' >
                <div id="nav-bar">
                    <input id="nav-toggle" type="checkbox" />
                    <div id="nav-header"><div id="nav-title" style={{ color: 'white' }}>ODOP</div>
                    </div>
                    <div id="nav-content">
                        <hr />
                        <div className="nav-button"><i className="fas fa-palette"></i><span style={{ color: 'white' }}><Link href='/'>Home</Link></span></div>
                        <div className="nav-button"><i className="fas fa-images"></i><span style={{ color: 'white' }}><Link href='/map'>Map</Link></span></div>
                        <div className="nav-button"><i className="fas fa-thumbtack"></i><span style={{ color: 'white' }}><Link href='/search'>Search</Link></span></div>
                        <div className="nav-button"><i className="fas fa-heart"></i><span style={{ color: 'white' }}><Link href='/aboutus'>About Us</Link></span></div>
                        <div className="nav-button"><i className="fas fa-fire"></i><span style={{ color: 'white' }}> <Link href='/contactus'>Contact Us</Link></span></div>
                        <div id="nav-content-highlight"></div>
                        <hr />
                    </div>
                    <div id="nav-footer">
                        <div id="nav-footer-heading">
                            <div id="nav-footer-avatar"><img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" /></div>
                            <div id="nav-footer-titlebox"><div id="nav-footer-title"  > <Link href='/login' style={{color:'black'}}>Login</Link></div><span id="nav-footer-subtitle" style={{color:'black'}}>Admin</span></div>
                            <label htmlFor="nav-footer-toggle"><i className="fas fa-caret-up"></i></label>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export const Heade = header;

export default header