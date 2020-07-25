<template>
    <div class="card-list">
        <ul>
            <li v-for="card in cards" :key="card.id">
                <Card :card="card" 
                :selected="selected && selected.card === card"
                @select="selectCard" />
            </li>
        </ul>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'cardList',
    components: {
        Card
    },
    computed: {
        ...mapState(['cards', 'selected'])
    },
    methods: {
        ...mapMutations(['selectCard'])
    }
}
</script>

<style lang="css">
ul {
    padding: 0;
}
    li {
        list-style-type: none;
        margin: 20px auto;
        padding: 0 10%;
    }
</style>