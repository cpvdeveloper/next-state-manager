import { actionTypes } from './actionTypes'

// Define the allowed actions so that we don't have to use dispatch directly in components.
export const actionCreators = {
  increment: () => ({
    type: actionTypes.INCREMENT,
  }),
}
