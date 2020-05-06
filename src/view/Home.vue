<template>
  <div class="picker">
    <div class="change" @click="changeContent">click</div>
    <div class="picker-item-wrapper" :style="wrapperStyle" ref="pickerWrapper">
      <section
        class="picker-item"
        :key="'section_' + index"
        v-for="(item, index) in dataList"
        :style="setItemStyle(index, dataList.length)">
        {{ item.content }}
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { f1, f2 } from '../utils/test';
import round from '../utils/math';

@Component({
  name: 'Picker',
})
export default class Picker extends Vue {
  $refs!: {
    pickerWrapper: HTMLFormElement;
  };

  private restore = true;

  private directionTop = true;

  private swiper = {
    radio: 100,
    rotationAmount: 0,
    startPoint: [0, 0],
    movingPoint: [0, 0],
    endPoint: [0, 0],
  };

  private dataList: object[] = [
    {
      content: '1',
      align: 'center',
    },
    {
      content: '2',
      align: 'center',
    },
    {
      content: '3',
      align: 'center',
    },
    {
      content: '4',
      align: 'center',
    },
    {
      content: '5',
      align: 'center',
    },
    {
      content: '6',
      align: 'center',
    },
    {
      content: '7',
      align: 'center',
    },
  ];

  get wrapperStyle(): string {
    const direction = this.directionTop ? '' : '-';
    const res = this.restore
      ? 'transform: rotateY(0deg)' : `transform: rotateY(30deg) rotateX(${direction}${this.swiper.rotationAmount}deg)`;
    return res;
  }

  private mounted(): void {
    console.log(f1(1, 2), f2(3, 1));
    const selfPickerWrapper = this.$refs.pickerWrapper;
    selfPickerWrapper.addEventListener('touchstart', this.swiperStart, {
      passive: false,
      capture: false,
    });
  }

  private setItemStyle(index: number, length: number): string {
    let res;
    if (this.restore === true) {
      res = 'transform: rotateX(0deg) translateZ(0px)';
    } else {
      res = `transform: rotateX(${(360 / length) * index}deg) translateZ(${this.swiper.radio}px)`;
    }
    return res;
  }

  private changeContent(): void {
    this.restore = !this.restore;
  }

  private swiperStart(event: TouchEvent): void {
    const myEvent = event || window.event;
    const selfPickerWrapper = this.$refs.pickerWrapper;
    this.swiper.startPoint = [
      myEvent.targetTouches[0].pageX,
      myEvent.targetTouches[0].pageY,
    ];
    selfPickerWrapper.addEventListener('touchmove', this.swiperMoving, {
      passive: false,
      capture: false,
    });
    (selfPickerWrapper as HTMLElement).addEventListener('touchend', this.swiperEnd, {
      passive: false,
      capture: false,
    });
  }

  private swiperMoving(event: TouchEvent): void {
    const myEvent = event || window.event;
    this.swiper.movingPoint = [
      myEvent.targetTouches[0].pageX,
      myEvent.targetTouches[0].pageY,
    ];
    this.directionTop = (myEvent.targetTouches[0].pageY)
    < this.swiper.movingPoint[1];
    this.swiper.rotationAmount = Picker.getRotation(
      this.swiper.movingPoint[1],
      this.swiper.movingPoint[1], this.swiper.radio
    );
  }

  // TODO 兼容MouseEvent
  private swiperEnd(event: TouchEvent): void {
    const myEvent = event || window.event;
    this.swiper.endPoint = [
      myEvent.changedTouches[0].pageX,
      myEvent.changedTouches[0].pageY,
    ];
    // console.log('X-axis', this.swiper.endPoint[0] - this.swiper.startPoint[0]);
    // console.log('Y-axis', this.swiper.endPoint[1] - this.swiper.startPoint[1]);
    this.directionTop = this.swiper.endPoint[1] < this.swiper.startPoint[1];
    this.swiper.rotationAmount = Picker.getRotation(
      this.swiper.startPoint[1],
      this.swiper.endPoint[1], this.swiper.radio
    );
    // console.log('this.swiper.rotationAmount', this.swiper.rotationAmount);
  }

  private static getRotation(start: number, end: number, radio: number): number {
    const distance = Math.abs(end - start);
    return round(180 / Math.PI * Math.asin(distance / radio * 2), 2);
  }
}
</script>

<style lang="scss" scoped>
@import "../style/index";
</style>
