<template>
    <div class="navigation-bar">
        <div class="nav-side">
            <span class="logo fa-stack fa-2x" @click="redirectToPage('/dashboard')">
                <em class="logo-back fas fa-square fa-stack-2x" />
                <em class="logo-front fas fa-compact-disc fa-stack-1x" />
            </span>
            <h1 class="title">MusiX</h1>
        </div>
        <div class="nav-side">
            <div v-if="isUserLoggedIn()">
                <label class="nav-option" @click="redirectToPage('/dashboard')">Dashboard</label>
                <label class="nav-option" @click="redirectToPage('/users')">Users</label>
                <label class="nav-option" @click="handelLogOut()">Log Out</label>
            </div>
            <div v-else>
                <label class="nav-option" @click="redirectToPage('/signin')">Sign In</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavigationBar',
    methods: {
        isUserLoggedIn(){
            return localStorage.getItem('jwt') !== null
        },
        handelLogOut() {
            localStorage.removeItem('jwt')
            this.$router.push('/signin')
        },
        redirectToPage(route){
            this.$router.push(route)
        }
    }
}
</script>

<style scoped>
    .navigation-bar{
        position: absolute;
        background: rgba(0, 0, 0, 0.75);
        height: 75px;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav-side{
        display: flex;
        align-items: center;
    }

    .logo{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .logo-front{
        color: var(--secondary-color);
        font-size: 1.25em;
        transition: 2s ease transform;
    }

    .logo-front:hover{
        transform: rotate(900deg);
    }

    .logo-back{
        color: var(--primary-color);
        font-size: 2em;
    }

    .title{
        font-weight: 400;
        font-style: normal;
        font-size: 3em;
        color: var(--secondary-color);
        margin: 0;
    }

    .nav-option{
        color: var(--secondary-color);
        margin-right: 50px;
        font-size: 1.5em;
        cursor: pointer;
    }
</style>