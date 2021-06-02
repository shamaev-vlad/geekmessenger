import { ADD_CONVERSATION, CHANGE_VALUE } from "./types"

// contact - string
export const addConversation = (contact) => {
  return {
    type: ADD_CONVERSATION,
    payload: contact,
  }
}

export const changeValue = (id, value) => {
  return {
    type: CHANGE_VALUE,
    payload: { id, value },
  }
}
