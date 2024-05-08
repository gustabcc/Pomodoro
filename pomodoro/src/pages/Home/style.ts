import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BasedButton = styled.button`
  width: 100%;
  border-radius: 8px;
  border: 0;
  font-weight: bold;
  color: ${props => props.theme['gray-100']};
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartButton = styled(BasedButton)`
  background: ${props => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${props => props.theme['green-700']};
  }
`

export const StopButton = styled(BasedButton)`
  background: ${props => props.theme['red-500']};

  &:hover {
    background: ${props => props.theme['red-700']};
  }
`
