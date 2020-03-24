import produce from 'immer'
import { actionTypes } from '../actions/actionTypes'

// Define how the state should update for each actionType.
export const actionHandlers = {
  [actionTypes.TOGGLE_MODAL]: (state, action) => ({
    ...state,
    modalOpen: action.payload,
  }),

  [actionTypes.TOGGLE_VISITED_SHOP]: produce((draft, action) => {
    const { shopId, isVisited } = action.payload
    draft.coffeeShops[shopId].isVisited = isVisited
  }),
}
