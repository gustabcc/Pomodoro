import { Timer, Scroll } from 'phosphor-react'
import { HeaderContainer } from './style'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <Timer size={26} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={26} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
