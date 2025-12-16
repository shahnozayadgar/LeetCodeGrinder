type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const filteredArr: number[] = [];

    for (const stringIndex in arr) {
        const i = Number(stringIndex);
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
};

const arr = [0, 10, 20, 30];
const fn = (n: number) => n > 10;
const result = filter(arr, fn);
console.log(result);