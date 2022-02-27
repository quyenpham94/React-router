import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Contact = () => {
    const [email, setEmail] = useState("");
    const history = useHistory();

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const storeEmail = () => {
        alert("jk, no email storage");
    }

    const handleSubmit = (e) => {
        e.preventDefaullt();
        storeEmail(email);
    }

    return (
        <div>
            <h1>This is the contact page.</h1>
            <p>To get in touch, enter email</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact;