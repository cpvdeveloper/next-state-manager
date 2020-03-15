import React from 'react'
import styled from 'styled-components'
import { useCoffeeContext } from './context'
import CoffeeListItem from './CoffeeListItem'

const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 1rem;
`

const IncrementContainer = styled.div`
  display: flex;
  & > button {
    margin-right: 0.5rem;
  }
`

const CoffeeShopsList = () => {
  const {
    state: { coffeeShops, count },
    actions: { increment },
  } = useCoffeeContext()

  return (
    <>
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
      <IncrementContainer>
        <button onClick={increment}>Increment</button>
        <div>Count is: {count}</div>
      </IncrementContainer>
    </>
  )
}

export default CoffeeShopsList
