import React from 'react'

function Card({ ...props }) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            padding: 20,
            border: '1px solid teal',
            width: '100%'
        }}>
            <h2>{props.id}.{props.title}</h2>
            <p>{props.content}</p>
        </div>
    )
}

export default Card