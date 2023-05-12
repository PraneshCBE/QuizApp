import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from './components/HomeScreen.vue';
import HomePage from './components/HomePage.vue';
import LogIn from './components/LogIn.vue';
import ForgetPassword from './components/ForgetPassword.vue';
import SpaceP404 from './components/space404.vue';
import QuizModule from './components/QuizModule';
import ResetPassword from './components/ResetPassword.vue'
const routes=[
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'HomeScreen',
        component:HomeScreen,
        path:'/dashboard'
    },
    {
        name:'LogIn',
        component:LogIn,
        path:'/Login'
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
    },
    {
        name:'QuizModule',
        component:QuizModule,
        path:'/QuizModule'
    },
    {
        name:'ResetPassword',
        component:ResetPassword,
        path:'/resetpass',
        // meta: {
        //     requiresResetToken: true
        //   }
    },
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;
