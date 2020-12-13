<template>
  <button
      class="games-button"
      :style="{background: bgColor, opacity: changeColor ? '1': ''}"
      @click="clickThisButton">
  </button>
</template>

<script>
export default {
  name: "GamesButton",
  props: {
    bgColor: {
      type: String,
      default() {
        return '';
      }
    },
    music: {
      type: Number,
      default() {
        return NaN;
      }
    },
    now: {
      type: Number,
      default() {
        return NaN;
      }
    }
  },
  data: () => ({
    audio: new Audio(),
    changeColor: false
  }),
  methods: {
    clickThisButton() {
      this.audio.src = require('../assets/audio/' + this.music + '.ogg');//почему то для 4-ого файла ошибка выскакивает, если каждый раз не переприсваивать
      this.audio.play();
      this.changeColor = true;
      setTimeout(() => this.changeColor = false, 200);
    }
  },
  watch: {
    now() {
      if(this.now === this.music) {
        this.clickThisButton();
        this.$emit('toNaN');
      }
    }
  },
  mounted() {
    this.audio.src = require('../assets/audio/' + this.music + '.ogg');
  }
}
</script>

<style>
.games-button {
  cursor: pointer;
  opacity: 0.6;
}

.games-button:active {
  opacity: 1;
}

button:active, button {
  outline: none;
  border: 1px solid black;
}
</style>
