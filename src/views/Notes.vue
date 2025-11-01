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

</style>