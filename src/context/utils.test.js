import { bindActionCreator, bindActionCreators } from '../utils'

describe('the context util functions', () => {
  describe('the bindActionCreator function', () => {
    const mockActionCreator = payload => ({ type: 'TEST_ACTION', payload })
    const mockDispatch = action => action

    let boundActionCreator
    beforeEach(() => {
      boundActionCreator = bindActionCreator(mockActionCreator, mockDispatch)
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    test('returns a function', () => {
      expect(typeof boundActionCreator).toBe('function')
    })

    test('the returned function when called dispatches the result of the action creator', () => {
      expect(boundActionCreator('test-payload')).toEqual(
        mockDispatch({ type: 'TEST_ACTION', payload: 'test-payload' })
      )
    })
  })

  describe('the bindActionCreators function', () => {
    const mockActionCreators = {
      'action-creator-1': () => {},
      'action-creator-2': () => {},
    }
    const mockDispatch = () => {}

    afterEach(() => {
      jest.resetAllMocks()
    })

    test('returns an object with the same keys as the actionCreators argument', () => {
      const keysOfResults = Object.keys(
        bindActionCreators(mockActionCreators, mockDispatch)
      )
      const keysOfArgument = Object.keys(mockActionCreators)
      expect(keysOfResults).toEqual(keysOfArgument)
    })

    test('throws an error for actionCreators that are not functions', () => {
      let mockInvalidActionCreators
      mockInvalidActionCreators = {
        ...mockActionCreators,
        'action-creator-3': 'string-action-creator',
      }

      expect(() =>
        bindActionCreators(mockInvalidActionCreators, mockDispatch)
      ).toThrow(
        'Action creators must be functions, you passed one which is: string'
      )

      mockInvalidActionCreators = {
        ...mockActionCreators,
        'action-creator-3': { TYPE: 'TEST_ACTION' },
      }

      expect(() =>
        bindActionCreators(mockInvalidActionCreators, mockDispatch)
      ).toThrow(
        'Action creators must be functions, you passed one which is: object'
      )
    })
  })
})
