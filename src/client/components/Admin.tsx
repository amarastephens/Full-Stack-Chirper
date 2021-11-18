import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Admin = (props: IAdminProps) => {
    const [chirp, setChirp] = useState<IChirp>({
        id: null,
        name: null,
        content: null,
        _created: null
    });
    const [content, setContent] = useState('');
    const { chirpid } = useParams<{ chirpid: string }>();
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/chirps/${chirpid}`);
            const chirp = await res.json();
            setChirp(chirp);
            setContent(chirp.content);
        })()
    }, []);

    const handleContentChange = (content: string) => setContent(content);

    const handleDeleteChirp = async (id: string) => {
        await fetch(`/api/chirps/${id}`, {
            method: "DELETE"
        });

        history.push("/");
    }

    const handleUpdateChirp = async (chirpid: string, content: string) => {
        await fetch(`/api/chirps/${chirpid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ content })
        });

        history.push("/");
    }

    return (
        <>
            <div className="card m-3 d-flex justify-content-between align-items-center flex-row">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">@{chirp.name}</h6>
                    <input type="text" value={content} onChange={(e) => handleContentChange(e.target.value)}></input>
                    <p className="card-text">{chirp._created}</p>
                </div>
                <div>
                    <i className="fas fa-trash" onClick={() => handleDeleteChirp(chirp.id)}></i>
                    <button className="btn btn-sm btn-dark" onClick={() => handleUpdateChirp(chirp.id, content)}>Save Edit</button>
                </div>
            </div>
        </>
    )
}

interface IAdminProps { }

interface IChirp {
    id: string | null
    name: string | null,
    content: string | null,
    _created: string | null
}

export default Admin