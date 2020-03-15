import React, { createContext, useReducer, useContext } from 'react'
import { bindActionCreators } from '../../../context/utils'
import { coffeePageReducer, initialState } from './reducer'
import { actionCreators } from './actions'

// Create a separate context for state and dispatch.
// This gives better performance rather than having a single provider with a value
// that is a new object each time i.e. value={{ state, dispatch }}
const CoffeeStateContext = createContext()
const CoffeeDispatchContext = createContext()

// A single provider which actually gives access to both our state and dispatch contexts.
// Props other than children can be those returned from the page's getInitialProps.
export const CoffeeContextProvider = ({ children, coffeeShops }) => {
  const initFunction = () => ({ ...initialState, coffeeShops })
  const [state, dispatch] = useReducer(
    coffeePageReducer,
    initialState,
    initFunction
  )

  return (
    <CoffeeStateContext.Provider value={state}>
      <CoffeeDispatchContext.Provider value={dispatch}>
        {children}
      </CoffeeDispatchContext.Provider>
    </CoffeeStateContext.Provider>
  )
}

// Consumer to access the state and dispatch contexts.
export const useCoffeeContext = () => {
  const [state, dispatch] = [
    useContext(CoffeeStateContext),
    useContext(CoffeeDispatchContext),
  ]

  // Wrap each action creator with dispatch.
  const actionsWithDispatch = bindActionCreators(actionCreators, dispatch)

  return {
    actions: actionsWithDispatch,
    state,
  }
}

// Could also do something like this.
// export const useCoffeeContext = (takeState, takeActions) => {
//   const [state, dispatch] = [
//     useContext(CoffeeStateContext),
//     useContext(CoffeeDispatchContext),
//   ]

//   const takenState = takeState(state)
//   const takenActions = takeActions(actionCreators)

//   // Wrap each action creator with dispatch.
//   const actionsWithDispatch = bindActionCreators(takenActions, dispatch)

//   return {
//     ...actionsWithDispatch,
//     ...takenState,
//   }
// }

export const useContextHoc = (
  takeState,
  takeActions = null,
  includeDispatch = false
) => Component => otherProps => {
  const [state, dispatch] = [
    useContext(CoffeeStateContext),
    useContext(CoffeeDispatchContext),
  ]

  const takenState = typeof takeState === 'function' ? takeState(state) : {}

  const takenActions =
    typeof takeActions === 'function'
      ? takeActions(actionCreators)
      : typeof takeActions === 'object'
      ? takeActions
      : {}

  const takenActionsWithDispatch = bindActionCreators(takenActions, dispatch)

  const props = {
    ...takenState,
    ...takenActionsWithDispatch,
    ...otherProps,
    dispatch: includeDispatch ? dispatch : undefined,
  }

  return <Component {...props} />
}
