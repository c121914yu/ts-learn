# typeScript 学习

## 基础

npm install -g typescript //安装 ts
tsc --init //生成配置文件
tsc \*\*\*.ts //编译
tsc //含配置文件时自动将所有 ts 转化成 js
TypeScript Auto Compiler //vs 插件，保存时自动将 ts 转化成 js

## 数据类型

const/let/var 变量名: 类型 = 数据  
在未定义类型情况下，若未给初始类型则默认为 any，若有初始值则为初始值的类型。

any - 任意类型  
number - 数字类型  
boolean - 布尔类型  
string - 字符串
Array<type> - 数组类型
type[] - 数组类型 //简便写法，可用 type 可为 any
[string, number] - 元组 //第一个必须为 string，第二个为 number
枚举例子见 type/arr.ts
function name(params:type):type{} - 函数指定返回类型
let name = (params:type) => type - 指定函数只能是特定格式

**关于对象一些内容**
若初始化时指定了 key 值，重赋值必须包含这些 key 值

```ts
// 抽离类型
type myType = { data: number[]; myFun: (item: number) => number[] }
let complex2: MyType = {
	data: [1, 2, 3],
	myFun: function (item: number): number[] {
		return this.data.concat(item)
	},
}
```

**union type**  
组合类型，用|分开

typeof - 查看类型

默认变量值为 undefined

null 与 undefined 为一种类型,两者可以互相转化，但不可以由其他类型转化而来，但可以转化成其他类型。
