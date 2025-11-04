import { defineStore } from "pinia";
import { ref } from "vue";


export const useNoteStore = defineStore("notes", () => {

    const notes = ref([
        {
            id: "1",
            title: "Hacer la compra",
            marked: false,
        },
         {
            id: "2",
            title: "Llevar a Maggie al parque",
            marked: false,
        },
        {
            id: "3",
            title: "Poner una lavadora",
            marked: false,
        },
    ]);
const createId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
}
    const addNote = (title) => {
        notes.value.push(
            {
                id: createId(),
                title: title,
                marked: false,
            }
        )
    }

return {

    notes, 
    addNote
};

} );
