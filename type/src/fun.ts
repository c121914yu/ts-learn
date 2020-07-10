function returnTest(): string {
	return "hello"
}

console.log(returnTest())

function r2(): number {
	return 2
}
function r3(): Array<number> {
	return [2, 3]
}
console.log(r3())

// 空
function r4(): void {}

function sum(a: number, b: number): number {
	return a + b
}
// 指定函数类型
let testFun: (num1: number, num2: number) => number
testFun = sum
console.log(testFun(5, 6))
