import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Notes from "../views/Notes.vue";

const router = createRouter ({
    history: createWebHistory (),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home 
        },
        {
            path: "/notes",
            name: "note",
            component: Notes 
        }
    ]
})

export default router;

