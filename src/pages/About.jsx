import React from 'react'
import Card from '../components/Card'

function About() {
    const cards = [
        { id: 1, title: 'Павел', content: 'kiselevskyy' },
        { id: 2, title: 'Саша', content: 'Тарасов' },
        { id: 3, title: 'Павел', content: 'kiselevskyy' },
        { id: 4, title: 'Павел', content: 'kiselevskyy' },
        { id: 5, title: 'Павел', content: 'kiselevskyy' },
        { id: 6, title: 'Павел', content: 'kiselevskyy' },
        { id: 7, title: 'Павел', content: 'kiselevskyy' }
    ]
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 50,
            padding: '50px 0',
            maxWidth: '900px',
            width: '100%'
        }}>
            <h1>Cards</h1>
            {cards.map(card =>
                <Card key={card.id} id={card.id} title={card.title} content={card.content} />
            )}
        </div>
    )
}

export default About