import styled from 'styled-components'

export const Container = styled.div`
    height: 70px;
    background-color: ${props => props.theme.colors.primary};
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`