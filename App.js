import './css/mainpage.css'
import {initializeApp} from "firebase/app"
import { useState } from 'react';
import {auth,firebase} from "./firebase";

function App() {
    async function login(){
        const provider = new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(provider).then(
            async (result) => {
                const token = await auth?.currentUser?.getIdToken(true)
                if (token){
                    localStorage.setItem("@token",token)
                    console.log(token)
                }
            }
        )
    }
  return (
    
    <div className="App">
        <div className="header">
            <h1>GB Lift</h1>
        </div>
           <div className="margin">
                <div className="banner">
            <img src="https://www.rjuhsd.us/cms/lib/CA01001478/Centricity/Domain/709/MB.jpg" className="center"
                 height="400px;" alt="gbhs"></img>
                </div>
            </div>
                <body>
            <div className="margin">
            <h2>
                Welcome to GB Lift, a place to share your experiences in the world of fitness!
            </h2>
        </div>
        <button onClick={() => {login()}} id="sign_in_button">Sign In</button>
            <div className='animation'></div>


            <div id="like_button_container">
            <a href="user.html"><h1><u>Take a look at accounts that have joined the site so far!</u></h1></a>
            <p>Ask questions to the community!</p>
            <form>
                <input name="question" type="text"></input>
                <input type="submit" value="add questions"></input>
            </form>
            <u><a href="questions.js">Here's a link to the websites community forum.</a></u>
            </div>
            <div className="footer">
                <a href="aboutme.html"><p>Read here about the founder!</p></a>
            </div>
        </body>
    </div>
  );
}

export default App;
