import { actionTypes } from '../actions/actionTypes'

// Define how the state should update for each actionType.
export const actionHandlers = {
  [actionTypes.INCREMENT]: state => ({
    ...state,
    count: state.count + 1,
  }),
}
