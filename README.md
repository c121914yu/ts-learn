# 利用 ts 封装按键

### 插槽

组件中使用 slot 可以接受从父级传来的内容

### 自定义事件

// 1. 组件中定义 click 事件
@click = "onclick"
// 2. 组件中实现 onclick 事件
onclick(){ this.&emit("click") }
// 当然也可以通过引入
Emit @Emit('click')
onClick() { return }
// 3. 父级接受事件
<UIButton @click="sayHello"></UIButton>
// 4. 实现 sayHello
sayHello(){ console.log("hello") }

### 动态添加类

```html
// 注意内部必须为单引号，param在类内定义
<div
	:class="{
    'class1': param1
    'class2': param2
  }"
></div>
```
