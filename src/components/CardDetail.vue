<template>
<transition name="show" @enter="handleEnter" @leave="handleLeave">
    <div class="card-detail" v-if="selected">
        <Card :card="selected.card" @select="unselectCard" />
        <div class="card-back">
            this is card back start
            <br><br><br><br><br><br><br><b><br></b><br><br><br><br><br><br><br><br><br><br><br><br>
            this is car back end.
        </div>
    </div>
</transition>
    
</template>

<script>
import Card from '../components/Card'
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'cardDetail',
    components: {
        Card
    },
    computed: {
      ...mapState(['selected', 'unselect'])  
    },
    methods: {
        ...mapMutations(['unselectCard']),
        handleEnter(el) {
            Object.assign(el.style, {
                top: `${this.selected.rect.top}px`,
                left: `${this.selected.rect.left}px`,
                width: `${this.selected.rect.width}px`,
                height: `${this.selected.rect.height}px`
            });
            let that = this;
            setTimeout(() => {
                Object.assign(el.style, {
                    top: 0,
                    left: 0,
                    width: `${that.selected.rect.appWidth}px`,
                    height: `${that.selected.rect.appHeight}px`
                });
                that = null;
            }, 0)
        },
        handleLeave(el) {
            Object.assign(el.style, {
                top: 0,
                left: 0,
                width: `${this.unselect.rect.appWidth}px`,
                height: `${this.unselect.rect.appHeight}px`
            });
            let that = this;
            setTimeout(() => {
                Object.assign(el.style, {
                    top: `${that.unselect.rect.top}px`,
                    left: `${that.unselect.rect.left}px`,
                    width: `${that.unselect.rect.width}px`,
                    height: `${that.unselect.rect.height}px`
                });
                that = null;
            }, 0)
        }
    },
}
</script>

<style lang="scss">
    .card-detail {
        position: fixed;
        transition: all 0.6s ease;
        z-index: 99;
        background: #ffffff;
        // width: 100%;
        // height: 100%;
        will-change: top, left, width, height;
        overflow: scroll;
        .card-back {    
            color: black;
            position: relative;
            // padding-top: 300px;
            transition: all 0.6s ease;
        }
    }


    .show-enter-to,
    .show-leave {
        .card-back {
            height: auto;
        }
    }

    .show-enter,
    .show-leave-to {
        .card-back {
            height: 0;
        }
    }
    .show-enter-active,
    .show-leave-active {
        .card-detail {
            -webkit-transform: translateZ(0);  
            -moz-transform: translateZ(0);  
            -ms-transform: translateZ(0);  
            -o-transform: translateZ(0);  
            transform: translateZ(0);   /* Other transform properties here */
        }
        .card-back {
            -webkit-transform: translateZ(0);  
            -moz-transform: translateZ(0);  
            -ms-transform: translateZ(0);  
            -o-transform: translateZ(0);  
            transform: translateZ(0);   /* Other transform properties here */
        }
    }
    
</style>