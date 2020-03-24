import { actionHandlers as coffeeActionHandlers } from './coffee'
import { actionHandlers as countActionHandlers } from './count'

// Create a single object containing all action creators.
const allActionHandlers = {
  ...coffeeActionHandlers,
  ...countActionHandlers,
}

const initialState = {
  isModalOpen: false,
  coffeeShops: [],
  count: 0,
}

// Reducer function
const coffeePageReducer = (state, action) =>
  allActionHandlers[action.type]
    ? allActionHandlers[action.type](state, action)
    : state

export { initialState, coffeePageReducer }
