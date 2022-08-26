import "./Form.scss"
import { useState } from "react";

const Form = () => {
    const [naBeers, setNABeers] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending...");
        const {name, image_url, }
    }
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
        </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" required />
        </div>
        </form>

    )
}

export default Form;