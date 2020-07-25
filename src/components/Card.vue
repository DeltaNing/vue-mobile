<template>
<transition name="show">
<div class="card" :class="{'card-selected': selected}">
    <div
      class="card-front"
      @click.stop.prevent="handleClick"
      :style="{
            backgroundImage: `url(${card.coverUrl})`,
            backgroundSize: coverSize
        }"
    ></div>
    <!-- @touchStart="handleTouchStart"
      @touchEnd="handleTouchEnd"
      @mousedown.stop.prevent="handleTouchStart"
      @mouseup.stop.prevent="handleTouchEnd" -->
    <!-- <img class="img" :src="card.coverUrl" /> -->
  </div>
</transition>
  
</template>

<script>
export default {
  name: "card",
  props: ['card', 'selected'],
  data() {
    return {
      coverSize: `${window.innerWidth}px`
    };
  },
  methods: {
    // handleTouchStart() {
    //   console.log(123)
    //   this.tempSelected = true;
    // },
    // handleTouchEnd() {
    //   this.tempSelected = false;
    //   this.selected = true;
    // },
    handleClick() {
      const appRect = document.querySelector("#app").getBoundingClientRect(); // #app的位置
      
      const elRect = this.$el.getBoundingClientRect();// card的位置
      const rect = {};
      const card = this.card;
      rect.top = elRect.top;
      rect.left = elRect.left;
      rect.width = elRect.width;
      rect.height = elRect.height;
      rect.appWidth = appRect.width;
      rect.appHeight = appRect.height;
      this.$emit('select', {rect, card});

      // Object.assign(this.$el.style, {
      //   top: `${rect.top}px`,
      //   left: `${rect.left}px`,
      //   width: `${rect.width}px`,
      //   height: `${rect.height}px`
      // });
      // let that = this;
      // setTimeout(() => {
      //   Object.assign(that.$el.style, {
      //     position: "fixed",
      //     top: 0,
      //     left: 0,
      //     width: `${rect.appWidth}px`,
      //     height: `${rect.appHeight}px`,
      //     zIndex: 99
      //   });
        
      // }, 0)
      // console.log(el.target,appRect, this.$el, this.selected);
      // if (!this.selected) {
      //   this.tempSelected = true;
      //   // let that = this;
      //   // setTimeout(() => {
      //   //   that.tempSelected = false;
      //   //   that.selected = true;
      //   //   that = null;
      //   // }, 10);
      // } else {
      //   this.selected = false;
      // }

        // this.selected = !this.selected;
    }
  }
};
</script>

<style lang="css">
.card {
  width: 100%;
  display: inline-block;
  position: relative;
  min-height: 300px;
  background: #ffffff;
  transition: ease 0.5s all;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

/* .card-selected.card {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  overflow: scroll;
  z-index: 99;
} */
.card-front {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #333;
  background-position: center;
  box-shadow: 0 22px 16px -12px rgba(0, 0, 0, 0.2);
  filter: grayscale(0.4);
  transition: all 0.6s ease;
  will-change: transform, left, right;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}


.card-temp > .card-front {
  width: 70%;
  left: 15%;
  /* transform: translate3d(0, 30px, 0); */
}

.card-selected {
  /* opacity: 0; */
  visibility: hidden;
}

</style>