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
            id: "1",
            title: "Llevar Maggie al parque",
            marked: false,
        },
    ]);

return {

    notes, 
};

} );
