import React from 'react'
import "../styles/mainlockup.css";
export default function MainLockup() {
  return (
    <div className='main-lockup'>
    <div className='main-lockup-top'>
      <div className='lockup-div-1'>Access curated courses worth</div>
      <div className='lockup-div-2'>
        <div className='lockup-div-2-1' >
          ₹&nbsp;
          <span style={{ textDecoration: 'line-through' ,textDecorationColor: 'red' }}> 18,500 </span>&nbsp; 
        </div>
        <span style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '1px', backgroundColor: 'red' }}></span>
        <div className='lockup-div-2-2'>at just&nbsp; </div>
        <div className='lockup-div-2-1'>₹ 99&nbsp; </div>
        <div className='lockup-div-2-2'>per year!</div>
      </div>
    </div>

      <div className='lockup-div-3'>
      <img src='../img/book.png' alt="bookIcon" />

        <div >
        <div className='blue-div' >
        100+&nbsp;
        </div>
        Job relevant courses 
        </div>
      </div>
      <div className='lockup-div-3'>
      <img src='../img/clock.png' alt="clockIcon" />

        <div >
        <div className='blue-div' >
        20,000+ &nbsp;
        </div>
        Hours of content
        </div>
      </div>
      <div className='lockup-div-3'>
      <img src='../img/tv.png' alt="TVIcon" />
      <div className='lockup-div-3-1' style={{ display: 'flex', alignItems: 'center' , marginLeft: '-97px',marginTop: '10px' }}>live&nbsp;</div>
        <div >
        <div className='blue-div' >
        Exclusive &nbsp;
        </div>
        webinar access
        </div>
      </div>
      <div className='lockup-div-3'>
      <img src='../img/hat.png' alt="hatIcon" />

        <div >
        Scholarship worth
        <div className='blue-div' >
        &nbsp;₹94,500
        </div>
        </div>
      </div>
      <div className='lockup-div-3'>
      <img src='../img/cirkal.png' alt="ADEIcon" />
      <div className='lockup-div-3-1' style={{ display: 'flex', alignItems: 'center' , marginLeft: '-98px',marginTop: '0px', fontSize: '12px' }}>ADS &nbsp;</div>
      <div className='lockup-div-3-1' style={{ display: 'flex', alignItems: 'center' , marginLeft: '-90px',marginTop: '3px', fontSize: '39px' }}>/&nbsp;</div>

        <div >
        <div className='blue-div' >
        Ad Free &nbsp;
        </div>
        learning experience
        </div>
      </div>
    </div>
  )
}
