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

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  color: ${props => props.theme['gray-100']};
  font-weight: bold;
  flex-wrap: wrap;
  font-size: 1.125rem;
`

export const BasedInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 1px solid ${props => props.theme['gray-100']};
  color: ${props => props.theme['gray-100']};

  text-align: center;
  height: 2.5rem;
  font-size: 1.125rem;
  font-weight: bold;

  &:focus {
    box-shadow: none;
    border-color: ${props => props.theme['green-500']};
  }

  &::placeholder {
    color: ${props => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BasedInput)`
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BasedInput)`
  width: 3rem;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

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
