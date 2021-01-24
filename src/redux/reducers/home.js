import { homeState } from '../state/home'
import { GET_USER } from '../types/home'

export default function homeReducer (state = homeState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      }

    default:
      return state
  }
}
