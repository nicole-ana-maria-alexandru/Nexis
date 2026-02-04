import React, { useState, useEffect } from "react"
import "./Ping.css"

export const Ping: React.FC = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL;

        fetch(`${apiUrl}/api/ping`)
            .then((res) => res.json())
            .then((data) => {
                setMessage(data.message);
                setLoading(false);
            })
            .catch(() => {
                setError("Error connecting to server");
                setLoading(false);
            });
    }, []);

    return (
        <>
            <p className={`ping-text ${error ? "ping-error" : ""}`}>
                {loading
                    ? "Loading..."
                    : error
                    ? error
                    : `Server says ${message}`
                }
            </p>
        </>
    );
}