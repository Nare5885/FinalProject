<script setup>
import { transformWithEsbuild } from 'vite';
import { useNoteStore } from '../stores/note';

const noteStore = useNoteStore();
</script>

<template>
    <section id="notes-page">
       <h2>Notes</h2> 
       <ul clase="note-list">
        <li v-for="note in noteStore.notes" :key="note-id"></li>
        {{
            note.title 
        }}
       </ul>
    </section>
</template>

<style>
body {
  margin: 0 50px;
  padding: 0;
  background-color: rgb(0, 0, 34);
  color: white;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.3rem;

  a {
    color: #e28413;
  }

  pre {
    padding: 10px 20px;
    background-color: lightgray;
    color: rgb(27, 27, 27);
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 0 50px;
    flex-wrap: wrap;
  }
}
</style>