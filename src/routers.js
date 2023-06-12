import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from './components/HomeScreen.vue';
import HomePage from './components/HomePage.vue';
import LogIn from './components/LogIn.vue';
import ForgetPassword from './components/ForgetPassword.vue';
import SpaceP404 from './components/space404.vue';
import QuizModule from './components/QuizModule';
import ResetPassword from './components/ResetPassword.vue'
import AvailCourses from './components/Dashboard/AvailCourses.vue';
import QuizDets from './components/Dashboard/QuizDets.vue';
import StudMain from './components/Dashboard/StudMain.vue';
import CourseInfo from './components/Dashboard/CourseInfo.vue';
import InspectWatcher from './components/InspectWatcher.vue';
import AnimeBg from './components/AnimeBg.vue';
import SuccessSubmit from './components/SuccessSubmit.vue';
import AutoSubmit from './components/AutoSubmit.vue';
import QuizConformation from './components/QuizConformation.vue';
const routes=[
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'HomeScreen',
        component:HomeScreen,
        path:'/dashboard',
        redirect:'/sm',
        children: [
            {
             name: 'AvailCourses',
             path: '/availcourses',
             component:AvailCourses
           },
           {
             name: 'QuizDets',
             path: '/qd',
             component:QuizDets
           },
           {
            name: 'StudMain',
            path: '/sm',
            component:StudMain
          },
          {
            path: '/dashboard', // Replace with the path you want to redirect to
            name: 'AnotherPage', // Name the route 'AnotherPage'
            component: StudMain, // Replace with the actual component for 'AnotherPage'
          },
          {
            path: '/dashboard',
            redirect: { name: 'AnotherPage' }, // Redirect to the named route 'AnotherPage'
          },
         ]
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
        props:true,
        path:'/QuizModule'
    },
    {
        name:'ResetPassword',
        component:ResetPassword,
        path:'/resetpass',
        meta: {
            requiresResetToken: true
          }
    },
    {
        name: 'InspectWatcher',
        path: '/you-r-dead',
        component:InspectWatcher
    },
    {
        name: 'CourseInfo',
        path: '/ci',
        props:true,
        component:CourseInfo
      },
      {
        name: 'AnimeBg',
        path:'/bg',
        component:AnimeBg
      },
      {
        name: 'QuizConformation',
        path: '/qConfo',
        props:true,
        component:QuizConformation
      },
      {
        name: 'SuccessSubmit',
        path: '/ss',
        component:SuccessSubmit
      },
      {
        name: 'AutoSubmit',
        path: '/as',
        component:AutoSubmit
      },
      
      
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;
