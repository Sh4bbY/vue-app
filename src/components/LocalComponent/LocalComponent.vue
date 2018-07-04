<template>
  <div class="local-component">
    <h2>I am {{name}}</h2>
    <button @click="count++;work()">You clicked me {{ count }} times.</button>
  </div>
</template>
<script src="./LocalComponent.ts" lang="ts"></script>
<style src="./LocalComponent.scss" scoped></style>
