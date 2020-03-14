import React from 'react'
import styled from 'styled-components'
import { actionCreators } from './context/reducer'
import { useContextHoc } from './context'

const StyledListItem = styled.li``

const CoffeeListItem = ({
  id,
  name,
  location,
  isVisited,
  toggleVisitedShop,
}) => {
  // const {
  //   actions: { toggleVisitedShop },
  // } = useCoffeeContext()

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

const takeActions = {
  toggleVisitedShop: actionCreators.toggleVisitedShop,
}

export default useContextHoc(null, takeActions)(CoffeeListItem)
