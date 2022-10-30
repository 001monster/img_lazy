// 独享web worker
onmessage = function (e) {
    // 这是传递进来的信息
    const data = e.data

    // 回传处理过后的数据
    postMessage(
        data.sort((a, b) => a-b)
    )
}