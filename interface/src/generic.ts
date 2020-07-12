// ts中的泛型（generic）

function identify<T>(arg: T): T {
	return arg
}
console.log(identify(false))

interface GIdentify<T> {
	(arg: T): T
}
let test: GIdentify<number | string> = identify

console.log(test("head"))
console.log(test(1))

// function getLen<T extends number>(obj: T): any {
// 	return obj
// }
function getLen<T extends { len: number }>(obj: T): any {
	return obj
}
const obj = {
	number: 20,
	len: 30,
}
console.log(getLen(obj))
