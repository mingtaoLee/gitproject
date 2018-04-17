import config from '../config/config'
import HttpRequest from '../libs/httpRequest'
import qs from 'qs'

class HTTPClient {
    constructor () {
        this.httpRequest = new HttpRequest({
            baseUrl: config.urls.base
        })
    }

    createHeaders (options) {
        var headers = {}
        if (options.ts) {
            headers['Client-Sync-Time'] = options.ts
        }
        if (options.token) {
            headers['Authorization'] = 'Bearer ' + options.token
        }
        if (options.md5) {
            headers['Content-MD5'] = options.md5
        }
        headers['content-type'] = 'application/x-www-form-urlencoded'
        return headers
    }
    async request (pathName, method, params, ts, token, task) {
        var headers = this.createHeaders({
            ts,
            token
        })
        try {
            return await this.httpRequest.request(pathName, method, qs.stringify(params), headers, task)
        } catch (e) {
            if (!e.response) {
                throw e
            }
            let message = e.response && e.response.data && e.response.data.message
            if (message) {
                e.message = message            
            }
            throw e
            // if (data.status === 401) {
            //     let result = await users.when401()
            //     return this.request(pathName, method, params, ts, result.token, task)
            // } else {
            //     throw data
            // }
        }
    }
    get (pathName, ts, token, task) {
        return this.request(pathName, 'GET', {}, ts, token, task)
    }
    post (pathName, params, token) {
        return this.request(pathName, 'POST', params, null, token)
    }
    delete (pathName, params, token) {
        return this.request(pathName, 'DELETE', params, null, token)
    }
    put (pathName, params, token) {
        return this.request(pathName, 'PUT', params, null, token)
    }
    patch (pathName, params, token) {
        return this.request(pathName, 'PATCH', params, null, token)
    }
    upload (url, fileName, file, md5, token, onProgress, task) {
        var headers = this.createHeaders({
            md5,
            token
        })
        return this.httpRequest.upload(url, fileName, file, headers, onProgress, task)
    }
    uploadBase64 (pathName, fileName, base64, md5, token, onProgress) {
        var headers = this.createHeaders({
            md5,
            token
        })
        return this.httpRequest.uploadBase64(pathName, fileName, base64, headers, onProgress)
    }
    putFile (pathName, fileName, file, md5, token, onProgress) {
        var headers = this.createHeaders({
            md5,
            token
        })
        return this.httpRequest.putFile(pathName, fileName, file, headers, onProgress)
    }
}

export default new HTTPClient()
