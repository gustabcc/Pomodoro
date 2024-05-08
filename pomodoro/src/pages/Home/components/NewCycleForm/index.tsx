import { FormContainer, MinutesAmountInput, TaskInput } from './style'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="">Vou trabalhar em </label>
      <TaskInput
        id="task"
        list="task-suggestion"
        placeholder="Informe a atividade"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestion">
        <option value="Estudar">Estudar</option>
        <option value="Trabalhar">Trabalhar</option>
        <option value="Exercitar">Exercitar</option>
        <option value="Descansar">Descansar</option>
      </datalist>

      <label htmlFor="">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmout"
        placeholder="00"
        disabled={!!activeCycle}
        min={1}
        max={60}
        step={1}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
