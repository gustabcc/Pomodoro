import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  nav {
    display: flex;
    gap: 0.5rem;
    margin-right: 1rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 3rem;
    height: 3rem;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    padding-bottom: 0.5rem;

    color: ${props => props.theme['gray-100']};

    &:hover {
      color: ${props => props.theme['green-300']};
      border-bottom: 3px solid ${props => props.theme['green-300']};
    }

    &:active {
      color: ${props => props.theme['green-700']};
    }
  }
`
