import produce from 'immer'
import { actionTypes } from './actionTypes'

const initialState = {
  isModalOpen: false,
  coffeeShops: [],
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
}

// Define the allowed actions so that we don't have to use dispatch directly in components.
const actionCreators = {
  openModal: () => ({
    type: actionTypes.TOGGLE_MODAL,
    payload: true,
  }),
  closeModal: () => ({
    type: actionTypes.TOGGLE_MODAL,
    payload: false,
  }),
  toggleVisitedShop: (shopId, isVisited) => ({
    type: actionTypes.TOGGLE_VISITED_SHOP,
    payload: {
      shopId,
      isVisited,
    },
  }),
}

// Reducer function
const coffeePageReducer = (state = initialState, action) =>
  actionsHandlers[action.type]
    ? actionsHandlers[action.type](state, action)
    : state

export { initialState, actionCreators, coffeePageReducer }
