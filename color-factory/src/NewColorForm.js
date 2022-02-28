import React, { useState } from 'react';
import { useHistory  } from 'react-router-dom';

import "./NewColorForm.css";

const NewColorForm = ({addColor}) => {

    const [form, updateForm] = useState({name: "", hex:"#ffffff"});
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ [form.name]: form.hex });
        history.push("/colors");
    }

    const handleChange = (e) => {
        e.persist();
        updateForm(f => ({...f, [e.target.name]: e.target.value }));
    }

    const {hex, name} = form;
    return (
        <div className='NewColorForm'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Color name</label>
                    <input  
                        name="name"
                        id="name"
                        placeholder='Enter color name'
                        onChange={handleChange}
                        value={name}
                    />
                </div>
                <div>
                    <label htmlFor="hex">Color value</label>
                    <input  
                        type="color"
                        name="hex"
                        id="hex"
                        onChange={handleChange}
                        value={hex}
                    />
                </div>
                <input type="Submit" value="Add this color" readOnly />
            </form>

        </div>
    )
};

export default NewColorForm;