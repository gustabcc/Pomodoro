import { HandPalm, Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { differenceInSeconds } from 'date-fns'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartButton,
  StopButton,
  TaskInput,
} from './style'
import { useEffect, useState } from 'react'

// Schema de validação para o formulário de novo ciclo
const newCycleFormValidation = zod.object({
  task: zod.string().min(1, 'Informe a atividade'),
  minutesAmount: zod.number().int().min(1, 'Informe um valor válido'),
})

// Inferência de tipos a partir do schema de validação
type NewCycleFormData = zod.infer<typeof newCycleFormValidation>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, reset, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidation),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  // Encontra o ciclo ativo a partir do ID
  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  // Calcula a quantidade total de segundos do ciclo ativo
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  // Calcula a quantidade de segundos restantes
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  // Calcula a quantidade de minutos restantes
  const minutesAmount = Math.floor(currentSeconds / 60)

  // Calcula a quantidade de segundos restantes
  const secondsAmount = currentSeconds % 60

  // Formata a quantidade de minutos restantes
  const minutes = String(minutesAmount).padStart(2, '0')

  // Formata a quantidade de segundos restantes
  const seconds = String(secondsAmount).padStart(2, '0')

  const task = watch('task')
  const isSubmitDisabled = !task

  // Atualiza o ciclo ativo a cada segundo atuando como um cronomêtro
  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          setActiveCycleId(null)
          setCycles(state =>
            state.map(cycle => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishDate: new Date() }
              } else {
                return cycle
              }
            }),
          )
        } else {
          setAmountSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles(cyclesState => [...cyclesState, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
    reset()
  }

  function handleInterruptCycle() {
    setActiveCycleId(null)
    setCycles(state =>
      state.map(cycle => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  // Atualiza o título da página com o tempo restante do ciclo ativo
  useEffect(() => {
    if (!activeCycle) return
    document.title = `${minutes}:${seconds}`

    return () => {
      document.title = 'Pomodoro'
    }
  }, [minutes, seconds, activeCycle])

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
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

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        {activeCycle ? (
          <StopButton onClick={handleInterruptCycle} type="button">
            <HandPalm size={24} /> Interromper
          </StopButton>
        ) : (
          <StartButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} /> Começar
          </StartButton>
        )}
      </form>
    </HomeContainer>
  )
}
