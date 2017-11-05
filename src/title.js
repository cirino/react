import React from 'react'

const Title = ( { name }) => (
    <h2>{` ${name} `}</h2>
)

Title.defaultProps = {
  name: 'Sistema'
}

export default Title;