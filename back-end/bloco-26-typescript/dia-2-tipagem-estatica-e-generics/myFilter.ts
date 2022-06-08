type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
    const newArray: Array<T> = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

console.log(myFilter([1, 2, 3], (item, index, array) => item < 3 ));

console.log(myFilter(["a", "b", "c"], (item, index, array) => {
    return item !== "a"
}));