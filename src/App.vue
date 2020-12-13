<template>
  <div id="app">
    <h1>Раунд: {{way.length}}</h1>
    <div class="field">
      <div class="block" v-show="block">
        <h1 style="background: wheat;padding: 5px" v-show="isShowEnd">
          <div>Вы ощиблись :(</div>
          <button @click="startGame" style="display: block;margin: auto">Заново?</button>
        </h1>
      </div>
      <GamesButton
          @click.native="setResult(1)"
          :now="now"
          :bgColor="'blue'"
          :music="1"
          @toNaN="() => this.now = NaN"/>
      <GamesButton
          @click.native="setResult(2)"
          :now="now"
          :bgColor="'red'"
          :music="2"
          @toNaN="() => this.now = NaN"/>
      <GamesButton
          @click.native="setResult(3)"
          :now="now"
          :bgColor="'yellow'"
          :music="3"
          @toNaN="() => this.now = NaN"/>
      <GamesButton
          @click.native="setResult(4)"
          :now="now"
          :bgColor="'green'"
          :music="4"
          @toNaN="() => this.now = NaN"/>
    </div>
    <button @click="startGame">Start</button>
    <div>
      <h1>Выбор сложности:</h1>
      <input name="lvl" type="radio" v-model="lvl" :value="1"> Легкий
      <input name="lvl" type="radio" v-model="lvl" :value="2"> Средний
      <input name="lvl" type="radio" v-model="lvl" :value="3"> Сложный
    </div>
  </div>
</template>

<script>
import GamesButton from './components/GamesButton'

export default {
  name: 'App',
  components: {
    GamesButton
  },
  data: () => ({
    way: [],
    now: NaN,
    result: [],
    block: true,
    isShowEnd: false,
    lvl: 1
  }),
  methods: {
    startGame() {
      this.way = [];
      this.now = NaN;
      this.isShowEnd = false;
      this.startRound();
    },
    startRound() {
      let lvlCheck = this.lvl;
      this.way.push(Math.round(1 + 3 * Math.random()));
      let i = 0;
      let timer = setInterval(() => {
        if(lvlCheck !== this.lvl) clearInterval(timer);
        this.now = this.way[i];
        i++;
        if(i === this.way.length) {
          this.block = false;
          this.result = [];
          clearInterval(timer);
        }
      }, this.lvl === 1 ? 1500: this.lvl === 2 ? 1000: 400)
    },
    setResult(click) {
      if(this.way[this.result.length] === click) {
        this.result.push(click);
        if(this.way.length === this.result.length) {
          this.block = true;
          setTimeout(() => this.startRound(), 1000);
        }
      }
      else {
        this.way = [];
        this.now = NaN;
        this.result = [];
        this.block = true;
        this.isShowEnd = true;
      }
    }
  },
  watch: {
    lvl() {
      this.way = [];
      this.now = NaN;
      this.result = [];
      this.block = true;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
 min-height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.field {
  position: relative;
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1px;
}

.block {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
}
</style>
