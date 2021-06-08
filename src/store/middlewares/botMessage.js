import { MESSAGE_SEND, sendMessage } from "../messages"

export const botMessage = (store) => (next) => (action) => {
  if (action.type === MESSAGE_SEND) {
    if (action.payload.author !== "Bot") {
      setTimeout(() => {
        store.dispatch(
          sendMessage({
            author: "Bot",
            message: "Я просто бот",
            roomId: action.payload.roomId,
          }),
        )
      }, 500)
    }
  }

  return next(action)
}
