import produce from 'immer'
import { actionTypes } from './actionTypes'

const initialState = {
  isModalOpen: false,
  coffeeShops: [],
  count: 0,
}

// Define how the state should update for each actionType.
const actionsHandlers = {
  [actionTypes.TOGGLE_MODAL]: (state, action) => ({
    ...state,
    modalOpen: action.payload,
  }),

  [actionTypes.TOGGLE_VISITED_SHOP]: produce((draft, action) => {
    const { shopId, isVisited } = action.payload
    draft.coffeeShops[shopId].isVisited = isVisited
  }),

  [actionTypes.INCREMENT]: state => ({
    ...state,
    count: state.count + 1,
  }),
}

// Reducer function
const coffeePageReducer = (state = initialState, action) =>
  actionsHandlers[action.type]
    ? actionsHandlers[action.type](state, action)
    : state

export { initialState, coffeePageReducer }
