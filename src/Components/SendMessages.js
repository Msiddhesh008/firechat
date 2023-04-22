import React, { useState } from 'react'
import { db, auth } from '../Firebase/firebase.js'
import firebase from 'firebase/compat/app'

const SendMessages = () => {
    const [ msg, setMsg ] = useState("")
    async function sendMessage(e){
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser
        await db.collection("fireChat").add({
            text: msg,
            photoURL,
            uid,
            sentAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg("")
    }

  return (
        <form 
        onSubmit={sendMessage}>

            <input 
            className=''
            value={msg} 
            placeholder='Text message' 
            onChange={(e) => setMsg(e.target.value)} ></input>

            <button 
            className='sendBtn btn'
            type='submit'>Send</button>
        </form>
  )
}

export default SendMessages