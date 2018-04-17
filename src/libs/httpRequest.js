import axios from 'axios'

var HttpRequest = function (options = {}) {
    Object.assign(this, options)
}

HttpRequest.prototype.getUrl = function (pathName) {
    if (pathName.startsWith('http')) {
        return pathName
    }
    if (this.baseUrl && pathName) {
        return new URL(pathName, this.baseUrl).href
    }
    throw new Error('地址错误')
}

HttpRequest.prototype.request = function (url, type, params = {}, headers = {}, task = {}) {
    url = this.getUrl(url)
    var CancelToken = axios.CancelToken
    return axios.request({
        method: type,
        url: url,
        data: params,
        headers: headers,
        contentType: 'application/x-www-form-urlencoded',
        timeout: 30000,
        cancelToken: new CancelToken(cancel => (task.cancel = cancel))
    })
}

HttpRequest.prototype.upload = function (url, fileName, file, headers, onProgress, task = {}) {
    url = this.getUrl(url)
    let formData = new FormData()
    formData.append('file', file, fileName)

    var CancelToken = axios.CancelToken
    return axios.post(url, formData, {
        headers: headers,
        contentType: 'multipart/form-data',
        onUploadProgress (e) {
            onProgress && onProgress(e)
        },
        cancelToken: new CancelToken(cancel => (task.cancel = cancel))
    }).then(res => res.data)
}

export default HttpRequest
