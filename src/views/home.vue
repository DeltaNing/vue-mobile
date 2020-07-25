<template>
    <div class="home">
        <CardList />
        <cardDetail />
    </div>
</template>

<script>
import CardList from '../components/CardList.vue'
import CardDetail from '../components/CardDetail.vue'
export default {
    name: 'home',
    components: {
        CardList,
        CardDetail
    }
}
</script>

<style lang="css">
    .home {
        height: 100%;
        width: 100%;
        color: white;
        overflow: scroll;
    }
</style>