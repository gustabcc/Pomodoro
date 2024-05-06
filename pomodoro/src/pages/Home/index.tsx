import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartButton,
  TaskInput,
} from './style'

// Schema de validação para o formulário de novo ciclo
const newCycleFormValidation = zod.object({
  task: zod.string().min(1, 'Informe a atividade'),
  minutesAmount: zod.number().int().min(1, 'Informe um valor válido'),
})

// Inferência de tipos a partir do schema de validação
type NewCycleFormData = zod.infer<typeof newCycleFormValidation>

export function Home() {
  const { register, handleSubmit, reset, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidation),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="">Vou trabalhar em </label>
          <TaskInput
            id="task"
            list="task-suggestion"
            placeholder="Informe a atividade"
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
            min={1}
            max={60}
            step={1}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} /> Começar
        </StartButton>
      </form>
    </HomeContainer>
  )
}
