import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  return (

<div
  style={{
    height: '100%',
    left: '0px',
    overflow: 'hidden',
    position: 'absolute',
    top: '0px',
    width: '100%'
  }}
>
  <div
    style={{
      background: 'rgb(0, 0, 0)',
      inset: '0px'
    }}
  >
    <div
      className="mbr-video-foreground"
      style={{
        height: '100%',
        left: '0px',
        overflow: 'hidden',
        pointerEvents: 'none',
        position: 'absolute',
        top: '0px',
        width: '100%'
      }}
    >
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="mbr-background-video"
        frameBorder="0"
        height="769"
        id="ytplayer-72dd47"
        referrerPolicy="strict-origin-when-cross-origin"
        src="https://www.youtube.com/embed/rUS0o3TisGc?autoplay=1&mute=1&controls=0&enablejsapi=1&iv_load_policy=3&modestbranding=1&origin=https%3A%2F%2Fa.mobirise.com&rel=0&mode=transparent&showinfo=0&html5=1&version=3&playerapiid=iframe_YTP_1624972482514&widget_referrer=https%3A%2F%2Fa.mobirise.com%2F&widgetid=1&loop=1&playlist=rUS0o3TisGc"
        style={{
          height: '100%',
          left: '0px',
          marginTop: '0px',
          maxWidth: 'initial',
          pointerEvents: 'none',
          position: 'absolute',
          top: '0px',
          transform: 'scale(1.2)',
          transitionDuration: '1000ms',
          transitionProperty: 'opacity',
          width: '100%'
        }}
        title="free video cyber security background"
        width="1366"
      />
    </div>
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
      }}
    >
      <h3
        style={{
          color: 'white',
          fontSize: '48px',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    
        }}
      >
        Unlock the Power of Encryption and Decryption in Cybersecurity
      </h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        <button
          style={{
            backgroundColor: 'rgba(128, 128, 128, 0.7)',
            border: 'none',
            color: 'white',
            padding: '10px 20px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '4px 2px',
            cursor: 'pointer',
            borderRadius: '5px'
          }}
          onClick={()=>navigate("/home2")}
        >
        Get Started
        </button>
        {/* <button
          style={{
            backgroundColor: 'rgba(128, 128, 128, 0.7)',
            border: 'none',
            color: 'white',
            padding: '10px 20px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '4px 2px',
            cursor: 'pointer',
            borderRadius: '5px'
          }}
        >
          Encrypt
        </button>
        <button
          style={{
            backgroundColor: 'rgba(128, 128, 128, 0.7)',
            border: 'none',
            color: 'white',
            padding: '10px 20px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '4px 2px',
            cursor: 'pointer',
            borderRadius: '5px'
          }}
        >
          Decrypt
        </button> */}
      </div>
    </div>
  </div>
</div>




  )
}

export default Home