// 关于random

// random 数组随机排序
function randomArr(arr) {
    let newArr = arr.sort(function () {
        return 0.5 - Math.random()
    });
    console.log(newArr)
}

function sortArr(arr) {
    let newArr = arr.sort(function (a, b) {
        return a - b;
    });
    console.log(newArr)
}

