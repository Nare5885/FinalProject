<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/note';


const noteStore = useNoteStore();

const handleSubmit = () => { 
    noteStore.addNote(title.value);
    title.value = "";

}

const title = ref("");

</script>

<template>
  <form class="note-form" @submit.prevent="handleSubmit">
    <input type="text" 
    class="note-title" 
    placeholder="Nueva Nota" 
    v-model="title"
    />
  <button class="create-btn">+

  </button>
  </form>
</template>

<style>
.note-form {
  display: flex;
  gap: 10px;
  margin: 20px 0;
  justify-content: center;
}

.note-title {
  padding: 8px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 200px;
}

.create-btn {
  background-color: #e28413;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 15px;
  font-size: 1.2rem;
  cursor: pointer;
}

.create-btn:hover {
  background-color: #c47311;
}
</style>