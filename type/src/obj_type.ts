// object & type
let dataObj: { name: string; age: number } = {
	name: "yjl",
	age: 50,
}
// dataObj = {}
dataObj = {
	name: "ddc",
	age: 20,
}

// 复杂对象类型
let complex: { data: number[]; myFun: (item: number) => number[] } = {
	data: [1, 2, 3],
	myFun: function (item: number): number[] {
		return this.data.concat(item)
	},
}
console.log(complex.myFun(5))

// type生成类型
type MyType = { data: number[]; myFun: (item: number) => number[] }

let complex2: MyType = {
	data: [1, 2, 3],
	myFun: function (item: number): number[] {
		return this.data.concat(item)
	},
}
console.log(complex.myFun(6))
