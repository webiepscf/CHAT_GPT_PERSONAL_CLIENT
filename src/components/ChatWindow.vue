<template>
  <div class="chat-window">
    <ChatMessage
      v-for="(message, index) in store.messages"
      :key="index"
      :message="message"
      @pin="store.pinMessage"
    />
  </div>
</template>

<script setup lang="ts">
import { useChatStore } from "../stores/chatStore";
import ChatMessage from "./ChatMessage.vue";

const store = useChatStore();
</script>

<style scoped>
.chat-window {
  /* Add your styles for the chat window here */
}
</style>
