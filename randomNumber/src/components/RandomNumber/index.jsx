import { useState } from 'react'

export const RandomNumber = () => {
    const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)

    const random = () => {
        setNumber(Math.floor(Math.random() * 100) + 1)
    }

    return (
        <>
            <h2>Random Number: {number}</h2>
            <button onClick={random}>New random number</button>
        </>
    )
}