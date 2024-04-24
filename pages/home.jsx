import React from 'react'
import Image from 'next/image'
const home = () => {
    return (
        <>
            <div className='main' style={{ height: '672px', width: '1222px', position: 'relative', left: '295px', top: '17px', borderRadius: '15px', backgroundColor: '#d8f2ff' }}>
                <div className="box" style={{ display: "flex", flexDirection: 'column', width: '1222px', height: '672px', alignItems: 'center', justifyContent: 'center' }}>
                    {/* <div class="image"><Image className='ig' src='/bharat.png' width='200' height='200'></Image>
                                <div id="i"></div>
                                </div>
                                <div class="image"><Image className='ig' src='/steel5.png' width='200' height='200'></Image>
                                <div id="i"></div>
                                </div>
                                <div class="image"><Image className='ig' src='/design.png' width='200' height='320'></Image>
                                <div id="i"></div>
                                </div>
                                <div class="image"><Image className='ig' src='/pot2.png' width='200' height='320'></Image>
                                <div id="i"></div>
                            </div> */}
                    <div style={{width:'1050px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

                        <b>Introduction:</b>
                        <ul>
                            Our website is a vibrant and user-friendly online platform dedicated to celebrating the rich tapestry of locally crafted products from all corners of our diverse world. Our mission is to connect artisans, farmers, and small businesses with a global audience, offering a digital marketplace where local products shine. Whether you're a connoisseur of handmade goods, a supporter of sustainable agriculture, or simply an explorer of unique finds, Our website has something special in store for you.
                        </ul>
                    </div>
                    <div class="containor">
                        <div class="grid">
                            <div class="image"><Image className='ig' src='/paint.png' width='200' height='320'></Image>
                                <div id="i"></div>
                            </div>
                            <div class="image"><Image className='ig' src='/wear.png' width='200' height='320'></Image>
                                <div id="i"></div>
                            </div>
                            <div class="image"><Image className='ig' src='/wood2.png' width='200' height='320'></Image>
                                <div id="i"></div>
                            </div>
                            <div class="image"><Image className='ig' src='/stee3.png' width='200' height='320'></Image>
                                <div id="i"></div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}
const Home = home
export default Home