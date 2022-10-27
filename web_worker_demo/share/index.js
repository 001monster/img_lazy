const sourceArr = document.getElementById('sourceArr')
const sortBtn = document.getElementById('sortBtn')
const resultArr = document.getElementById('resultArr')

let arr = [5, 2, 2, 9, 4, 3, 1, 7, 6]
sourceArr.textContent = arr.toString()

// 创建web worker 实例
let worker = new SharedWorker("./share/shareWorker.js")

sortBtn.addEventListener('click', () => {
    console.log('触发了点击事件2')
    // 给web worker-发送需要处理的数据
    worker.port.postMessage(arr)
})


worker.port.onmessage = function (e) {
    // 接收web worker-返回的数据
    // console.log(e, 'webwork')
    resultArr.textContent = e.data
}