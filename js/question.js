// 条件:输入一个数组，1秒console一次数组里的值

function echoArr(arr) {
    arr.forEach((e, index) => {
        setTimeout(() => console.log(e), (index + 1) * 1000)
    })
}

function echoArr2(arr, i = 0) {
    console.log(arr[i]);
    if (i < arr.length - 1) {
        setTimeout(() => {
            echoArr2(arr, ++i)
        }, 1000)
    }

}
