import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${props => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${props => props.theme['gray-700']};
    border-radius: 8px;
    padding: 2rem 1rem;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  margin: 0 1rem;
  color: ${props => props.theme['green-300']};
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
