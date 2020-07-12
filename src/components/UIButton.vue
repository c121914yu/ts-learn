<template>
  <button
    class="ui-btn"
    :class="{ 
      'ui-btn-long': long,
      'ui-btn-xsmall': xsmall,
      'ui-btn-small': small,
      'ui-btn-large': large,
      'ui-btn-xlarge': xlarge,
      'ui-btn-border': border,
      'ui-btn-dashed': dashed,
      'ui-btn-text': text,
      'ui-btn-tile': tile,
      'ui-btn-rounded': rounded,
      'ui-btn-circle': circle
    }"
    @click="onClick"
  >
    <!-- 插槽 -->
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'vue-property-decorator'
@Component //类装饰器
export default class UIButton extends Vue {
  //属性装饰器,仅可读
  @Prop(Boolean)
  readonly long!: boolean //!代表非空断言符号，表示变量不会为null或undefined,即不会进行类型转换
  // 两种类型
  @Prop([Boolean, Number])
  readonly long1!: boolean | number
  // 含初始值
  @Prop({
    type: [Boolean, Number],
    default: true
  })
  readonly long2!: boolean | number

  // 控制大小
  @Prop(Boolean)
  readonly xsmall!: boolean
  @Prop(Boolean)
  readonly small!: boolean
  @Prop(Boolean)
  readonly large!: boolean
  @Prop(Boolean)
  readonly xlarge!: boolean

  // 控制边框
  @Prop(Boolean)
  readonly border!: boolean
  @Prop(Boolean)
  readonly dashed!: boolean
  @Prop(Boolean)
  readonly text!: boolean

  // 控制圆角
  @Prop(Boolean)
  readonly tile!: boolean
  @Prop(Boolean)
  readonly rounded!: boolean
  @Prop(Boolean)
  readonly circle!: boolean

  //方法装饰器
  @Emit('click')
  onClick(e: MouseEvent) {
    return
  }
  // onClick(e: MouseEvent) {
  //   this.$emit('click', e)
  // }
}
</script>

<style lang="stylus" scope>
// 混合函数
Resize(mw, h, pr, fs)
  min-width mw
  height h
  padding 0 pr
  font-size fs
  &.ui-btn-circle // 相当于.ui-btn..ui-btn-circle
    width h
    // width @height
    min-width 0
    padding 0
.ui-btn
  Resize(64px, 36px, 16px, 0.875rem)
  border 0 solid black
  border-radius 4px
  color #f0f0f0
  background-color #2d8cf0
  font-weight 500
  letter-spacing 0.09em
  cursor pointer
  user-select none
  outline none
.ui-btn:active
  transform scale(0.95)
.ui-btn-long
  width 100%
// 按键大小
.ui-btn-xsmall
  Resize(36px, 20px, 9px, 0.625rem)
.ui-btn-small
  Resize(50px, 28px, 12px, 0.75rem)
.ui-btn-large
  Resize(78px, 44px, 19px, 0.875rem)
.ui-btn-xlarge
  Resize(92px, 52px, 23px, 1rem)
// 边框样式
.ui-btn-border
  border-width 1px
.ui-btn-dashed
  color #4d4d4d
  border-style dashed
.ui-btn-text, .ui-btn-border
  color #4d4d4d
  background-color transparent
// 圆角样式
.ui-btn-tile
  border-radius 0
.ui-btn-rounded, .ui-btn-circle
  border-radius 1000px
</style>
