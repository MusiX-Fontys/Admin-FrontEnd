<template>
    <div id="user">
        <div id="left">
            <img src="https://www.multisignaal.nl/wp-content/uploads/2021/08/blank-profile-picture-973460_1280.png" alt=""/>
            <label>{{ user.username }}</label>
        </div>
        <button v-if="role === 'general'" id="promote" @click="promoteUser">Promote to Administrator User</button>
        <button v-else id="demote" @click="demoteUser">Demote to General User</button>
    </div>
</template>
<script>
import UserManagmentWrapper from '../../wrappers/UserManagmentWrapper'

export default {
    emtis: ['reloadUsers'],
    props: {
        user: Object,
        role: String
    },
    methods: {
        async promoteUser(){
            const response = await UserManagmentWrapper.upgradeUser(this.user.id)

            if(!response.success){
                alert(response.message)
                return
            }

            this.$emit('reloadUsers')
        },
        async demoteUser(){
            const response = await UserManagmentWrapper.downgradeUser(this.user.id)

            if(!response.success){
                alert(response.message)
                return
            }
            
            this.$emit('reloadUsers')
        }
    }
}
</script>
<style scoped>
    #user{
        padding: 5px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    #left{
        display: flex;
        align-items: center;
    }

    img{
        height: 100px;
        width: 100px;
        object-fit: cover;
        margin-right: 10px;
        border-radius: 5px;
        border: 1px solid var(--primary-color);
    }

    label{
        font-family: inherit;
        font-size: 2.5em;
    }

    button{
        padding: 5px 20px;
        color: var(--secondary-color);
        border-radius: 5px;
        border: none;
        font-family: inherit;
        font-size: 1.5em;
        display: flex;
        align-items: center;
        transition: 0.2s ease transform;
    }

        button:hover{
            transform: scale(1.05);
            box-shadow: 3px 3px 5px 0px rgb(0 0 0 / 50%);
            cursor: pointer;
        }

    #promote{
        background-color: #1db954;
    }

    #demote{
        background-color: var(--primary-color);
    }
</style>