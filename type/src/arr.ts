let names: Array<string> = ["henryt", "body"]
let numbers: number[] = [1, 2, 3]
console.log(names[0])
names[0] = "100"
console.log(names[0])
console.log(numbers)

// 元组
let colors: [string, number] = ["red", 99]

// 枚举
enum Color {
	Black,
	Yellow = 100,
	Red,
}
let myColor: Color = Color.Yellow
let myColor2: Color = Color.Red

console.log(myColor) //100
console.log(myColor2) //101
