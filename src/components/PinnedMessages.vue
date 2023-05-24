<!-- src/components/PinnedMessages.vue -->
<template>
  <div class="pinned-messages">
    <ChatMessage
      v-for="(message, index) in store.pinnedMessages"
      :key="index"
      :message="message"
    />
  </div>
</template>

<script setup lang="ts">
import { useChatStore } from "../stores/chatStore";
import ChatMessage from "./ChatMessage.vue";

const store = useChatStore();
</script>

<!-- Add your styles here -->
