// interface接口
interface Person {
	name: string
	age: number
	sex?: string //?:可写可不写
	readonly salary: number //只读
	[propName: string]: any //任意名字任意类型
	greet(): void
}
interface Studen extends Person {
	id: number
}

class People implements Person {
	name: string = "yj;"
	age: number = 20
	salary: number = 300
	greet() {
		console.log("class hellp")
	}
}

// interface可以继承，type不能继承
type Person2 = { name: string; age: number }

let person: Person = {
	name: "yjl",
	age: 28,
	salary: 7000,
	id: "200",
	greet() {
		console.log("hello ")
	},
}
// person.salary = 1000 //只读
console.log(person)
person.greet()

let student: Studen = {
	name: "yjl",
	age: 28,
	salary: 7000,
	id: 200,
	greet() {
		console.log("hello ")
	},
}
