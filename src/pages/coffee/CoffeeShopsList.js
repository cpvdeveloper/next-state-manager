import React from 'react'
import styled from 'styled-components'
import { useCoffeeContext } from './context'
import CoffeeListItem from './CoffeeListItem'

const StyledList = styled.ul`
  list-style: none;
`

const CoffeeShopsList = () => {
  const {
    state: { coffeeShops },
  } = useCoffeeContext()

  return (
    <StyledList>
      {Object.keys(coffeeShops).map(key => {
        const { name, location, isVisited } = coffeeShops[key]
        return (
          <CoffeeListItem
            key={`${name}-${location}`}
            id={key}
            name={name}
            location={location}
            isVisited={isVisited}
          />
        )
      })}
    </StyledList>
  )
}

export default CoffeeShopsList
