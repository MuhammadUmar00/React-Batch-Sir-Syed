import api from '../../services/api'
import { GET_USER } from '../types/home'

export const getUser = userId => {
  return dispatch =>
    dispatch({
      type: GET_USER,
      contacts: contacts.data
    })
}
