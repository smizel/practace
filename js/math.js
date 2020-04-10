// 关于random

// random 数组随机排序
function randomArr(arr) {
    let newArr = arr.sort(function () {
        return 0.5 - Math.random()
    });
    console.log(newArr)
}

// 数组排序
function sortArr(arr) {
    let newArr = arr.sort(function (a, b) {
        return a - b;
    });
    console.log(newArr)
}

// 数组对象排序
function sortObj(arr) {
    let newArr = arr.sort(function (a, b) {
        return a.year - b.year;
    });
    console.log(newArr)
}

// 测试for循环，forEach，map 速度
function getFor(arr) {
    console.time('for循环:');
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
    }
    console.timeEnd('for循环:');
}

function getForEach(arr) {
    console.time('forEach循环:');
    arr.forEach(e => {
        const val = e
    });
    console.timeEnd('forEach循环:');
}

function getMap(arr) {
    console.time('forMap循环:');
    arr.map(e => {
        const val = e
    });
    console.timeEnd('forMap循环:');
}
