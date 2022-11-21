import { useState } from 'react'

export default function LoginPage(props) {
    const [newUser, setNewUser] = useState('')

    const handleChange = (event) => {
        setNewUser(event.target.value)
    }

    const handleSubmit = (event) => {
        props.setNewUser(newUser)
    }

    return (
        <div className="Login-page">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Your Username:</label>
                <input type="text" onchange={handleChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}