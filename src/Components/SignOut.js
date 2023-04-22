
import { auth } from "../Firebase/firebase.js"


const SignOut = () => {

  return (
    <div>
      <button 
      className="signOutBtn btn"
      onClick={() => {auth.signOut()}}>Sign Out</button>


    </div>
  )
}

export default SignOut