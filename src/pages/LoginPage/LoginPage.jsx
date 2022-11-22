
import { useState } from "react"

export default function LoginPage({ setUser }) {
    const [username, setUsername] = useState('')

    const handleChange = (event) => {
        setUsername(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setUser(username)
    }
    return (
        <div className="Login-page">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Your Username:</label>
                <input type="text" onChange={handleChange} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}