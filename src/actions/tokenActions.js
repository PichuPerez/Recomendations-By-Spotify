const SAVE_TOKEN = 'SAVE_TOKEN'
const DELETE_TOKEN = 'DELETE_TOKEN'

export const saveToken = token => ({
  type: SAVE_TOKEN,
  token
})

export const deleteToken = () => ({
  type: DELETE_TOKEN,
  token: undefined
})
