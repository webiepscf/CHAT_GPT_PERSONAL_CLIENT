<!-- src/components/ChatMessage.vue -->
<template>
  <div
    class="chat-message"
    :class="{
      'bot-message': message.sender === 'bot',
      'user-message': message.sender === 'user',
    }"
  >
    {{ message.text }}
    <button @click="pinMessage">Épingler</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useChatStore } from "../stores/chatStore";

const props = defineProps({
  message: Object,
});

const store = useChatStore();

const pinMessage = () => {
  store.pinMessage(props.message);
};
</script>

<!-- Add your styles here -->
