import styled from 'styled-components'

export const HistoryContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 3.5rem;

  h1 {
    font-size: 1.5rem;
    color: ${props => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  overflow: auto;
  display: flex;
  flex: 1;
  margin-top: 2rem;

  table {
    border-collapse: collapse;
    width: 100%;
    min-width: 37.5rem;

    th {
      background: ${props => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${props => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${props => props.theme['gray-700']};
      border-top: 4px solid ${props => props.theme['gray-800']};
      padding: 1rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  Concluído: 'green-500',
  Cancelado: 'red-500',
  Pausado: 'yellow-500',
}

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
