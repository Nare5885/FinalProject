<script setup>
defineProps (
    {
        note: Object
    }
)
</script>

<template>

<article class="note-card">
<input type="text" class="card-title" v-model="note.title">
<input type="checkbox" v-model="note.marked">
</article>

</template>

<style>
.note-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  margin: 10px 0;
}

.card-title {
  border: none;
  font-size: 1rem;
  padding: 5px;
  width: 80%;
  outline: none;
}

.note-card input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>