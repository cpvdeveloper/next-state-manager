import React from 'react'
import { CoffeeContextProvider } from '../src/pages/coffee/context'
import CoffeeListWrapper from '../src/pages/coffee'

const CoffeePage = ({ coffeeShops }) => (
  <CoffeeContextProvider coffeeShops={coffeeShops}>
    <CoffeeListWrapper />
  </CoffeeContextProvider>
)

CoffeePage.getInitialProps = () => {
  // Fetch some coffee shops from an API
  return {
    coffeeShops: {
      1: { name: 'Phil Coffee', location: 'Bangkok', isVisited: true },
      2: { name: 'Iris and June', location: 'London', isVisited: false },
    },
  }
}

export default CoffeePage
