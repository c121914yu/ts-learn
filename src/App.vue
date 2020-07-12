<template>
  <div>
    <UIButton
      @click="sayHello"
      long
      rounded
      border
      dashed
      small
    >
      长按键
    </UIButton>
    <div class="ctr">
      <div class="size">
        <UIButton
          class="btn"
          xsmall
        >超小</UIButton>
        <UIButton
          class="btn"
          small
        >小</UIButton>
        <UIButton class="btn">正常</UIButton>
        <UIButton
          class="btn"
          large
        >大</UIButton>
        <UIButton
          class="btn"
          xlarge
        >超大</UIButton>
      </div>

      <div class="border">
        <UIButton class="btn">正常</UIButton>
        <UIButton
          class="btn"
          border
          large
        >边框</UIButton>
        <UIButton
          class="btn"
          border
          dashed
          small
        >虚线</UIButton>
        <UIButton
          class="btn"
          text
        >文字</UIButton>
      </div>

      <div class="radius">
        <UIButton class="btn">正常</UIButton>
        <UIButton
          class="btn"
          tile
        >无圆角</UIButton>
        <UIButton
          class="btn"
          rounded
        >大圆角</UIButton>
        <UIButton
          class="btn"
          circle
        >圆</UIButton>
      </div>

      <div class="color">
        <UIButton class="btn">默认</UIButton>
        <UIButton
          class="btn"
          color="red"
        >红色</UIButton>
        <UIButton
          class="btn"
          border
          large
          color="red"
        >红色</UIButton>
        <UIButton
          class="btn"
          border
          dashed
          small
          color="#5ad8a6"
        >绿色</UIButton>
      </div>

      <div class="text-color">
        <UIButton class="btn">默认</UIButton>
        <UIButton
          class="btn"
          titleColor="#f0f0f0"
        >白色</UIButton>
        <UIButton
          class="btn"
          color="#333"
          titleColor="red"
        >红色</UIButton>
        <UIButton
          class="btn"
          border
          color="red"
          @click="sayHello"
        >无背景</UIButton>
        <UIButton
          class="btn"
          border
          color="red"
          disabled
        >禁用</UIButton>
        <UIButton
          class="btn"
          color="red"
          disabled
          @click="sayHello"
        >禁用</UIButton>
      </div>

      <div class="shadow">
        <UIButton
          class="btn"
          shadow="1"
        >阴影1</UIButton>
        <UIButton
          class="btn"
          shadow="2"
        >阴影2</UIButton>
        <UIButton
          class="btn"
          shadow="3"
        >阴影3</UIButton>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import UIButton from '@/components/UIButton'
@Component({
  components: {
    UIButton
  }
})
export default class App extends Vue {
  sayHello(e: MouseEvent) {
    console.log('param')
    console.log(e)
  }
}
</script>


<style lang="stylus">
html, body
  box-sizing border-box
  font-size 18px
  font-family 'Arial, Helvetica, sans-serif'
*, ::before, ::after
  box-sizing inherit
  font-size inherit
  font-family inherit
.ctr
  margin 10px
  display flex
  div
    width 100px
    border 1px solid #333
    margin 0 10px
    display flex
    flex-direction column
    align-items center
    .btn
      margin 5px 0
</style>
