// 类定义
class Persion {
	name: string
	protected gender: string
	private age: number
	constructor(name: string, gender: string, age: number) {
		this.name = name
		this.gender = gender
		this.age = age
	}
	printAge() {
		return this.age
	}
	setAge(age: number) {
		this.age = age
	}
}

const persion = new Persion("yhh", "gender", 20)
console.log(persion)
console.log(persion.printAge())
persion.setAge(22)
console.log(persion.printAge())

// 继承
class Student extends Persion {
	number: string
	constructor(name: string, gender: string, age: number, number: string) {
		super(name, gender, age)
		this.number = number
	}
}
const yjl = new Student("yjl", "male", 20, "201806")
console.log(yjl)
