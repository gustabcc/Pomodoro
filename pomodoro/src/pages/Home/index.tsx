import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartButton,
  TaskInput,
} from './style'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em </label>
          <TaskInput
            id="task"
            type="text"
            list="task-suggestion"
            placeholder="Informe a atividade"
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
            max={60}
            step={1}
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

        <StartButton type="submit">
          <Play size={24} /> Começar
        </StartButton>
      </form>
    </HomeContainer>
  )
}
