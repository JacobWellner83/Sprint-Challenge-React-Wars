import React from 'react'
import './StarWars.css'

const CharacterCard = (props) => {
    const { character } = props
    return (
        <div className="character-file">
            <p className="name">{character.name}</p>
            <p><span className="param">birth year</span> {character.birth_year}</p>
            <p><span className="param">gender</span> {character.gender}</p>
            <p><span className="param">height</span> {character.height}</p>
            <p><span className="param">mass</span> {character.mass}</p>
        </div>
    )
}

export default CharacterCard;