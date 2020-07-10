type sumType = { money: number; count: (value: number) => void }
let sumVal: sumType = {
	money: 20,
	count(value: number): void {
		this.money += value
	},
}

type handleType = { name: string; sumVal: sumType; friend: string[] }
let handleCount: handleType = {
	name: "Henry",
	sumVal: sumVal,
	friend: ["24", "24r"],
}
console.log(handleCount)
handleCount.sumVal.count(500)
console.log(handleCount)
