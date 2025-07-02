function greet(firstName: string) {
	console.log(`Hello ${firstName}`);
}

greet("BEN");


function sum(a: number, b: number) {
	return a + b;
}

let ans = sum(1, 2);

console.log(ans);


function delayedCall(anotherFn: () => void) {
	setTimeout(anotherFn, 1000);
}

function log() {
	console.log("hi there");
}

delayedCall(log);