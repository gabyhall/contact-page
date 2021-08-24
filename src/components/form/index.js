import React, {useState} from "react";

export const Form = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    return(
        <div >
        <form className="formContainer">
            <div className="infoInput">
            <p>First Name</p>
            <input 
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"/>
            <p>Last Name</p>
            <input 
           onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"/>
            <p>Email</p>
            <input 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"/>
            <p>Subject</p>
            <input 
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"/>
            </div>
            <div className="message">
             <p>Message</p>   
            <input className="messageInput"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"/>
            <button className="sendBtn"
            onClick = {(e) => {setFirstName(firstName);
            setLastName(lastName);
            setEmail(email);
            setSubject(subject);
            setMessage(message);
            console.log(firstName);
            console.log(lastName)
            console.log(email);
            console.log(subject);
            console.log(message);
            }}
            >Send</button>
            </div>
        </form>
        </div>
    )
}

export default Form;