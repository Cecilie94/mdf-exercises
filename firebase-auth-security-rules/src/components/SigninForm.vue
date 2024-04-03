<script setup>
import { ref } from "vue";
import { signIn } from "@/services/AuthService";

const email = ref("");
const password = ref("");
const onSubmitForm = () => {
  signIn(email.value, password.value);
};
</script>

<template>
  <form @submit.prevent="onSubmitForm">
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button type="submit">Sign in</button>
  </form>
</template>

<style scoped></style>
