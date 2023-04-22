import React, { useEffect, useState } from "react";
import { db, auth } from "../Firebase/firebase.js";
import SignOut from "./SignOut";
import SendMessages from "./SendMessages.js";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection("fireChat")
      .orderBy("sentAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    // <Fragment id="chat">
    <div className="container-fluid chatwrapper">
      <div className="row chatHeader pt-2 pb-2 ps-5 ps-lg-1 pe-1 pe-lg-5 position-fixed top-0 w-100">
        <div className="col-3  d-flex justify-content-start align-items-center">
          {/* <h3 className='text-white'>FIRECHAT</h3> */}
          <section className="logo col-12">
            <div className="top">FireChat</div>
            <div className="bottom" aria-hidden="true">
              FireChat
            </div>
          </section>
        </div>
        <div className="col-9 d-flex justify-content-end align-items-center">
          <SignOut />
        </div>
      </div>

      <div className="chatCenter">
        {messages.map(({ text, photoURL, uid }, i) => {
          return (
            <div
              className={`mt-3 ${
                uid === auth.currentUser.uid ? `sender` : `reciver`
              }`}
              key={i}
            >
              <img
                className="pro"
                src={photoURL}
                alt=""
              />

              <span className="msg">{text}</span>
            </div>
          );
        })}
      </div>

      <div className=" p-2 pt-3 pb-3 chatFooter position-fixed start-0 bottom-0 w-100">
        <SendMessages />
      </div>
      <div className="dummy">
      </div>
    </div>

    // </Fragment>
  );
};
export default Chat;
