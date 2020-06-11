import React, { useContext } from 'react'
import { Container } from './styles'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

interface Props {
    toggleTheme(): void
}

const Header: React.FC<Props> = ({toggleTheme}) => {

    const { colors, title } = useContext(ThemeContext)

    return (
        <Container>
            <h1>Hello World!</h1>

            <Switch 
               onChange={toggleTheme} 
               checked={title === 'dark'}
               checkedIcon={false}
               uncheckedIcon={false}
               offColor={shade(0.15, colors.primary)}
               onColor={colors.secundary}
            />
        </Container>
    )
}

export default Header