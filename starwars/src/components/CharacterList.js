import React from 'react'
import './StarWars.css'

import CharacterCard from './CharacterCard'

const CharacterList = (props) => {
    const {characters } = props
    return (
        <div className="character-container">
            {
                characters.map(character => {
                    return <CharacterCard key={character.name} character={character} />
                })
            }
        </div>
    )
}

export default CharacterList;