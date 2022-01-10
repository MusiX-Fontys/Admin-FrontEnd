<template>
    <div id="user-managment">
        <div id="loading" v-if="loading">
            <em class="icon fas fa-spinner"/>Loading...
        </div>
        <div id="panel" v-else>
            <div id="head">
                <div id="tabs">
                    <label :class="this.searchType === 'general' ? 'tab-selected' : 'tab'" @click="selectTab('general')">General</label>
                    <label :class="this.searchType === 'administrator' ? 'tab-selected' : 'tab'" @click="selectTab('administrator')">Administrator</label>
                </div>
                <form @submit.prevent="searchUsers">
                    <input id="search" v-model="search" placeholder="Search User..."/>
                </form>
            </div>
            <div id="body">
                <div id="users">
                    <User v-for="user in getSelectedUsers()" :key="user.id" :user="user" :role="searchType" @reloadUsers="reloadUsers()"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import User from '../components/usermanagment_components/User.vue'
import UserManagmentWrapper from '../wrappers/UserManagmentWrapper'

export default {
    data() {
        return {
            generalUsers: [],
            administratorUsers: [],
            search: '',
            searchType: 'general',
            loading: true
        }
    },
    components: {
        User
    },
    async created(){
        await this.getGeneralUsers()
        await this.getAdministratorUsers()
        this.loading = false
    },
    methods: {
        async getGeneralUsers(){
            const response = await UserManagmentWrapper.getUsersByRole('general')
            
            if(response.success){
                this.generalUsers = response.users
            }
            else{
                alert(response.message)
            }
        },
        async getAdministratorUsers(){
            const response = await UserManagmentWrapper.getUsersByRole('administrator')
            
            if(response.success){
                this.administratorUsers = response.users
            }
            else{
                alert(response.message)
            }
        },

        selectTab(searchType){
            this.searchType = searchType
        },

        searchUsers(){
            this.getGeneralUsersBySearch()
            this.getAdministratorUsersBySearch()
        },
        async getGeneralUsersBySearch(){
            const response = await UserManagmentWrapper.getUsersBySearch('general', this.search)
            
            if(response.success){
                this.generalUsers = response.users
            }
            else{
                alert(response.message)
            }
        },
        async getAdministratorUsersBySearch(){
            const response = await UserManagmentWrapper.getUsersBySearch('administrator', this.search)
            
            if(response.success){
                this.administratorUsers = response.users
            }
            else{
                alert(response.message)
            }
        },

        getSelectedUsers(){
            if(this.searchType === 'general'){
                return this.generalUsers
            }
            else{
                return this.administratorUsers
            }
        },

        async reloadUsers(){
            await this.getGeneralUsers()
            await this.getAdministratorUsers()
            this.search = ''
            this.searchType = 'general'
        }
    }
}
</script>
<style scoped>
    #user-managment{
        display: flex;  
        align-items: center;
        justify-content: center;
        height: calc(100% - 75px);
        width: 100%;
    }

    #loading{
        font-size: 4em;
        color: var(--secondary-color);
        display: flex;
        align-items: center;
    }

    .icon {
        margin-right: 5px;
        animation: rotation 1.5s infinite linear;
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }

    #panel{
        width: 45vw;
        height: 80vh;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.75);
        display: flex;
        flex-direction: column;
    }

    #head{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid var(--text-color);
    }

    #tabs{
        height: fit-content;
        display: flex;
        align-items: flex-start;
        justify-items: center;
        font-size: 1.5em;
    }

    .tab{
        margin: 10px 0px 10px 25px;
        color: var(--text-color);
        font-weight: normal; 
    }

        .tab:hover{
            cursor: pointer;
            color: var(--primary-color); 
        }

    .tab-selected{
        margin: 10px 0px 10px 25px;
        color: var(--primary-color);
        font-weight: normal; 
        cursor: pointer;
    }

    #search{
        font-family: inherit;
        font-size: 1.25em;
        border: none;
        outline: none;
        border-radius: 5px;
        padding: 10px;
    }

    #body{
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        height: 100%;
        overflow-y: overlay;
    }

    #users{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        align-items: center;
        align-content: flex-start;
    }
</style>