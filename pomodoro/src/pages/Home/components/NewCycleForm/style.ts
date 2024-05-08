import styled from 'styled-components'

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
