// 共享web-worker
onconnect = function (e) {
    const port = e.ports[0]
    console.log(e)

    port.onmessage = function(e) {
        const data = e.data
        port.postMessage(data.sort( (a, b) => a-b))
    }
}