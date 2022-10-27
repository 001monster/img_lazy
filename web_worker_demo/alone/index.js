const sourceArr = document.getElementById('sourceArr')
const sortBtn = document.getElementById('sortBtn')
const resultArr = document.getElementById('resultArr')

let arr = [4, 3, 1, 9]
sourceArr.textContent = arr.toString()

// 创建web worker 实例
let worker = new Worker("./alone/worker.js")

sortBtn.addEventListener('click', () => {
    console.log('触发了点击事件1-')
    // 给web worker-发送需要处理的数据
    worker.postMessage(arr)
})


worker.onmessage = function (e) {
    // 接收web worker-返回的数据
    console.log(e, 'webwork')
    resultArr.textContent = e.data
}