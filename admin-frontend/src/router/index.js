import { createRouter, createWebHistory } from "vue-router"

// Import Pages
import DashboardPage from '../pages/DashboardPage'
import SignInPage from '../pages/SignInPage'
import UserManagmentPage from '../pages/UserManagmentPage'

//Define Routes
const routes = [
    {
        path: '/signin',
        name: 'signin',
        component: SignInPage,
        meta: {
            guest: true
        }
    },
    {
        path: '/',
        alias: '/dashboard',
        name: 'dashboard',
        component: DashboardPage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/users',
        name: 'users',
        component: UserManagmentPage,
        meta: {
            requiresAuth: true
        }
    }
]

//Create Router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), 
    routes
})

//Check before entering page
router.beforeEach(async (to, from, next) => {

    //Check JWT expiration
    if(localStorage.getItem('jwt') != null){
        try{
            const claims = parseJwt(localStorage.getItem("jwt"))
            const isExpired = checkExpiration(claims["exp"])
    
            if(isExpired){
              localStorage.removeItem("jwt")
            }
        }
        catch{
            localStorage.removeItem("jwt")
        }
    }

    //AuthenticationState
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('jwt') == null) {
        next({
          name: 'signin',
          params: { nextUrl: to.fullPath }
        })
      } 
      else {
        next()
      }
    } 
    else if (to.matched.some(record => record.meta.guest)) {
      if (localStorage.getItem('jwt') == null) {
        next()
      } 
      else {
        next({ name: 'dashboard' })
      }
    } 
    else {
      next()
    }
})

//Get claims from JWT
function parseJwt (token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

//Check expiration date of JWT
function checkExpiration (exp) {
  const expDate = new Date(exp * 1000)
  const currentDate = new Date()

  return expDate.getTime() <= currentDate.getTime();
}

export default router