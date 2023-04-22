import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from "../Firebase/firebase"
import "./SignIn.css"

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <div
     id='signIn' className='logoCnt container-fluid'>

      <div className="row signInRow">

      <section class="wrapper col-12">
      <div class="top">FireChat</div>
      <div class="bottom" aria-hidden="true">FireChat</div>      
      </section>

      <div className="col-12 d-flex justify-content-center flex-column gap-5 align-items-center">
      <button 
      onClick={signInWithGoogle}
      className='button-42 p-3 fs-4 fw-bold'>Login with <i class="bi bi-google fw-normal">oogle</i></button>
      <p className='name fw-normal'>Made with love by <span style={{color:"#007aff"}}>S!ddhesh</span>.</p>
      </div>

      </div>



      <div className="container d-flex justify-content-center align-items-center">
      </div>
    </div>
  )
}

export default SignIn




