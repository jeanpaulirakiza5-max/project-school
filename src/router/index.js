

import {createRouter,createWebHistory} from "vue-router";

import HomePage from "@/views/HomePage.vue"
import AboutPage from "@/views/AboutPage.vue"
import NotFounal from "@/views/NotFounal.vue"
import SinUp from "@/views/SinUp.vue"

const routes=[
    {
    path:"/",
    name:"Home",
    component:HomePage,
    },
    {
        path:"/sinup",
        name:"SinUp",
        component:SinUp,
    },
{
path:"/about",
 name:"About",
component:AboutPage,

},
{
    path:'/:pathMatch(.*)*',
    name:"NotFounal",
    component:NotFounal,
},

];
const router=createRouter(
    {

        history:createWebHistory(),routes
    }
);
export default router;
