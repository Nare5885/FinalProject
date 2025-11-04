<script setup>
import CreateNote from '../components/CreateNote.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import NoteCard from '../components/NoteCard.vue';
import { useNoteStore } from '../stores/note';
const noteStore = useNoteStore();

</script>

<template>
    <HeaderComponent>

    </HeaderComponent>

  <section id="notes-page">
    <div class="content">
      <h2>Notes</h2>
      <ul class="note-list">
        <li>
          <CreateNote>
            
          </CreateNote>
        </li>
        <li v-for="note in noteStore.notes" :key="note.id">
         <NoteCard :note="note"></NoteCard>
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
#notes-page {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  color: white;
  margin-bottom: 2rem;
}

.note-list {
  background-image: url("/public/cork.jpg");
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 8px;
  list-style: none;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.note-list li {
  background: white;
  color: black;
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

body {
  margin: 0;
  padding: 0;
  background-color: rgb(0, 0, 34);
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.3rem;
}
</style>