[1. 项目创建](#1)

[2. 项目结构](#2)

[3. 标签动态样式及 Stylus](#3)

[4. 混合](#4)

articleLine

&emsp;&emsp;项目用到了 vuecli4 脚手架，ts 语法，stylus 预编译器。最终目标实现一个按键的封装，可通过在标签中定义按键的颜色，边框，圆角，阴影效果。

## <span id="1" class="title">1 项目创建</span>

> vue create UIButton

勾选上 Babel,TypeScript,Css Pre-processors 三项安装包。各安装提示:

1. Use class-style ...使用类语法 : yes
2. Use Babel alongsidee Ts...: yes
3. Pick a CSS pre-processor 选择 css 预编译: Stylus
4. where do you prefer placing config for Babel..: In dedicated config files 配置文件存放在各自文件中。

VSconde 中各种插件根据需求安装。

## <span id="2" class="title">2 项目结构</span>

&emsp;&emsp;使用 ts 后 vue 文件的结构与原来有些区别，ts 主要以类进行编写，结构上需要重新适应。主要是每个传递的属性都会用修饰器进行声明。

> @Component - 类修饰器，可存放组件  
> @Prop(Type) - 属性修饰器，接受父组件传值  
> @Emit(方法名) - 自定义父组件方法  
> 原本的 data 与 method 及各种生命周期属性直接写在类内  
> computed 属性用 get 名称(){return}表示

```vue
// UIButton.vue
<template
	><template>
		<script lang="ts">
			import { Vue, Component, Prop } from "vue-property-decorator"
			@Component //类装饰器
			export default class UIButton extends Vue {
				//属性装饰器,仅可读
				@Prop(Boolean)
				readonly long!: boolean //!代表非空断言符号，表示变量不会为null或undefined,即不会进行类型转换
				@Prop({
					//可以是string或number类型，默认值为0
					type: [String, Number],
					default: 0,
				})
				//方法装饰器
				@Emit("click")
				emitClick(e: MouseEvent) {
					return e
				}
			}
		</script>
		<style lang="stylus" scope></style></template
></template>
```

## <span id="3" class="title">3 标签动态样式及 Stylus</span>

**动态类**

```html
:class = "[ UIShadow, { 'ui-btn-long': long, 'ui-btn-xsmall': xsmall, } ]" //
注意内部要用单引号 // UIShadow = "ui-btn-shadow1" // long = true // xsamll =
false // 最终类名: ui-btn-shadow1 ui-btn-long //
如果只有元素（例如，无UIShadow）可以不用数组形式，直接写对象。
```

**动态样式**

```html
// 与类相似 :style=" { backgroundColor: bgColor, '--green': green }" // bgColor
= '#333' green = '#5ad8a6' // style: background-color: #333 // css变量: --green:
#5ad8a6
```

**stylus**

```css
// style标签后加入 lang="stylus"
// 不需要括号，像py一样用缩进表示包含关系
<style lang="stylus">
.ui-btn
	// 无 冒号，分号，
	border 1px solid #333
	// 嵌套简写，相当于.ui-btn .ui-btn-red 即.ui-btn内的.ui-btn-red的样式
	.ui-btn-red
		border-color: "red"
	// 相当于.ui-btn:hover,&用于表示当前标签
	&:hover
		border-color: "blue"
// 最好用的混函数，用于解决样式重用
Resize(mw, h)
	min-width mw
	height h
.ui-btn
	Resize(20px,20px)
	// 相当于
	min-width 20px
	height 20px
</style>
```

## <span id="4" class="title">4 混合</span>

```vue
import { Mixins } from "vue-property-decorator" import UIshadow from
"./UIshadow.vue" @Component //
UISshadow中类已经继承了VUE，此处UIButton直接继承UIShadow //
template内容无法继承，script和style内容可继承 //
相当于UIshadow的内容直接插入UIButton类中，实现代码抽离 export default class
UIButton extends Mixins(UIshadow){}
```
