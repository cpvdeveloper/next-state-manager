import React from 'react'
import styled from 'styled-components'
import { useCoffeeContext } from './context'

const StyledListItem = styled.li``

const CoffeeListItem = ({ id, name, location, isVisited }) => {
  const {
    actions: { toggleVisitedShop },
  } = useCoffeeContext()

  const handleToggleVisited = () => {
    toggleVisitedShop(id, !isVisited)
  }

  return (
    <StyledListItem>
      <div>
        <input
          type="checkbox"
          checked={isVisited}
          onChange={handleToggleVisited}
        />
        {name} • {location}
      </div>
    </StyledListItem>
  )
}

export default CoffeeListItem
