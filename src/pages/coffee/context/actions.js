import { actionTypes } from './actionTypes'

// Define the allowed actions so that we don't have to use dispatch directly in components.
export const actionCreators = {
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

  increment: () => ({
    type: actionTypes.INCREMENT,
  }),
}
