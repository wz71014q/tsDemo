<template>
  <div class="picker">
    <div class="change" @click="changeContent">click</div>
    <div class="picker-item-wrapper" :style="itemStyle">
      <section
        class="picker-item"
        :key="'section_' + index"
        v-for="(item, index) in dataList"
        :style="setItemStyle(index, dataList.length)"
      >
        {{ item.content }}
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Picker'
})
export default class Picker extends Vue {
  private restore = true;
  private dataList: object[] = [
    {
      content: '1',
      align: 'center'
    },
    {
      content: '2',
      align: 'center'
    },
    {
      content: '3',
      align: 'center'
    },
    {
      content: '4',
      align: 'center'
    },
    {
      content: '5',
      align: 'center'
    }
  ];
  get itemStyle(): object {
    let res = {};
    res = this.restore ? {
        transform: `rotateY(0deg)`
      } : {
        transform: `rotateY(50deg)`
      }
    return res;
  }
  public setItemStyle(index: number, length: number): object {
    let res;
    if (this.restore === true) {
      res = {
        position: 'absolute',
        transform: `rotateX(0deg) translateZ(0px)`,
      };
    } else {
      res = {
        position: 'absolute',
        transform: `rotateX(${(360 / length) * index}deg) translateZ(${100}px)`,
      };
    }
    return res;
  }
  public changeContent(): void {
    this.restore = !this.restore;
  }
}
</script>

<style lang="scss" scoped>
.picker {
  text-align: center;
}
.change {
  margin: 0 auto;
  margin-top: 100px;
  display: inline-block;
  width: 50px;
  height: 45px;
  background: #ccc;
  &:hover {
    cursor: pointer;
    background-color: aqua;
  }
}
.picker-item-wrapper {
  position: relative;
  margin-top: 100px;
  transform-style: preserve-3d;
  perspective-origin: 150% 150%;
  transition: all 1s ease;
}
.picker-item {
  margin: 0 auto;
  width: 60px;
  height: 40px;
  background-color: aliceblue;
  transition: all 1s ease;
  &:first-child {
    z-index: 1;
  }
}
</style>
