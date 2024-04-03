<script setup>
import { ref } from "vue";
import { onSignOut, stateChange } from "@/services/AuthService";
import SigninForm from "@/components/SigninForm.vue";

const user = ref(null);

stateChange((userData) => {
  user.value = userData;
});
</script>

<template>
  <SigninForm v-if="!user" />
  <button @click="onSignOut()" v-else>Sign Out</button>
</template>

<style scoped></style>
