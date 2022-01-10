<template>
    <div id="dashboard">
        <div v-if="!Object.keys(dashboard).length" id="loading">
            <em class="icon fas fa-spinner"/>Loading...
        </div>
        <div v-else id="panel">
            <label id="header">Stats from last month (<label>{{ dashboard.from }}</label> to <label>{{ dashboard.to }}</label>)</label>
            <div id="stats">
                <div class="stat">
                    <label class="value">{{ dashboard.newUsers }}</label>
                    <label class="type">New Users</label>
                </div>
                <div class="stat">
                    <label class="value">{{ dashboard.activeUsers }}</label>
                    <label class="type">Active Users</label>
                </div>
                <div class="stat">
                    <label class="value">{{ dashboard.scrobbles }}</label>
                    <label class="type">Total Scrobbles</label>
                </div>
                <div class="stat">
                    <label class="value">{{ dashboard.tracks }}</label>
                    <label class="type">Total Tracks</label>
                </div>
                <div class="stat">
                    <label class="value">{{ dashboard.albums }}</label>
                    <label class="type">Total Albums</label>
                </div>
                <div class="stat">
                    <label class="value">{{ dashboard.artists }}</label>
                    <label class="type">Total Artists</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardWrapper from '../wrappers/DashboardWrapper'

export default {
    data() {
        return {
            dashboard: {}
        }
    },
    async created(){
        await this.getDashboard()
    },
    methods: {
        async getDashboard(){
            const response = await DashboardWrapper.getDashboard()
            
            if(response.success){
                this.dashboard = response.dashboard
                console.log(this.dashboard)
            }
            else{
                alert(response.message)
            }
        }
    }
}
</script>
<style scoped>
    #dashboard{
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
        height: 35vh;
        border-radius: 10px;
        background-color: var(--secondary-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
    }

    #header{
        font-size: 2.5em;
    }

        #header label{
            color: var(--primary-color);
        }

    #stats{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .stat{
        width: calc(100% / 3);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    }

    .value{
        font-size: 3em;
        color: var(--primary-color);
    }

    .type{
        font-size: 2em;
    }
</style>