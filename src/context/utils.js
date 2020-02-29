/**
 * Wraps an individual action creator with the provided dispatch.
 * @param {Function} actionCreator
 * @param {Function} dispatch
 * @returns {Function}
 */
const bindActionCreator = (actionCreator, dispatch) => (...args) =>
  dispatch(actionCreator.apply(this, args))

/**
 * Takes an object of action creator functions and returns another object with the
 * same keys but each value as the original action creator wrapped in the provided dispatch.
 * @param {Object of Functions} actionCreators
 * @param {Function} dispatch
 * @returns {Object of Functions}
 */
export const bindActionCreators = (actionCreators, dispatch) =>
  Object.keys(actionCreators).reduce((acc, curr) => {
    const actionCreator = actionCreators[curr]
    acc[curr] = bindActionCreator(actionCreator, dispatch)
    return acc
  }, {})
