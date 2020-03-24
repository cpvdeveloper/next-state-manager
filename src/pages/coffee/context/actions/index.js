import { actionCreators as coffeeActionCreators } from './coffee'
import { actionCreators as countActionCreators } from './count'

// Export a single actionCreators object.
export const allActionCreators = {
  ...coffeeActionCreators,
  ...countActionCreators,
}
