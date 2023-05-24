// src/stores/chatStore.ts
import { defineStore } from 'pinia'

export const useChatStore = defineStore({
  id: 'chat',
  state: () => ({
    messages: [
      { id: 1, text: 'Hello, how can I help you today?', sender: 'bot' },
      { id: 2, text: 'I need help with my code.', sender: 'user' },
      // Add more messages here
    ],
    pinnedMessages: [],
  }),
  actions: {
    pinMessage(message) {
      this.pinnedMessages.push(message)
    },
    addMessage(message) {
      this.messages.push(message)
    },
  },
})
