import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from './components/HomeScreen.vue';
import LogIn from './components/LogIn.vue';
import ForgetPassword from './components/ForgetPassword.vue';
import SpaceP404 from './components/space404.vue';
const routes=[
    {
        name:'HomeScreen',
        component:HomeScreen,
        path:'/'
    },
    {
        name:'LogIn',
        component:LogIn,
        path:'/LogIn'
    },
    {
        name:'ForgetPassword',
        component:ForgetPassword,
        path:'/ForgetPassword'
    },
    {
        path:'/:pathMatch(.*)*',
        component:SpaceP404
    },
    {
        path:'/:pathMatch(.*)',
        component:SpaceP404
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;
