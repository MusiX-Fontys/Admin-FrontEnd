<template>
    <div id="dashboard">
        <div id="loading">
            <em class="icon fas fa-spinner"/>Loading...
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    components: {
    },
    created(){
    },
    methods: {
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
</style>