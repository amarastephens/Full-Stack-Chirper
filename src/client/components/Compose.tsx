import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Compose: React.FC = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [content, setContent] = useState('');

    const handlePostChirp =  async () => {
        const res = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const userInsert = await res.json();

        await fetch('/api/chirps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content, userid: userInsert.insertId })
        })
    }

    return (
        <div> 
            <div className="form-group">
                <label htmlFor="name-input">Username</label>
                <input
                    type="email"
                    className="form-control"
                    id="name-input"
                    aria-describedby="emailHelp"
                    placeholder="Enter your handle"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email-input">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="email-input"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password-input">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password-input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <textarea
                name="content-input"
                id="content-input"
                cols={30}
                rows={10}
                defaultValue={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit" className="btn btn-primary" onClick={() => handlePostChirp()}>Submit</button>
        </div>
    )
}

export default Compose