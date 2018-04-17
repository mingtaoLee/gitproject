import y2wHTTPClient from './y2wHTTPClient'
import config from '../config/config'
import MD5 from 'md5-webworker'

class Attachment {
    async uploadFile(uid, token, fileName, file, onProgress, task = {}) {
        let canceled = false
        task.cancel = function () {
            canceled = true
        }
        let url = `${config.urls.base}attachments`
        let md5 = await MD5(file)
        if (canceled) {
            throw new Error('cancel')
        }
        let data = await y2wHTTPClient.upload(url, fileName, file, md5, token, onProgress, task)
        data.name = fileName
        data.ext = fileName.split('.').pop().toLowerCase()
        data.url = `${config.urls.base}attachments/${data.id}/${data.md5}`
        data.size = data.size || file.size
        return data
    }

    async getPublicAttachmentUrl(src, token) {
        if (/attachments\/(\d+)\/content/ig.test(src)) {
            var id = /attachments\/(\d+)\/content/ig.exec(src)[1];
            let url = `${config.urls.attachment}attachments/${id}`
            let res = await y2wHTTPClient.get(url, null, token)
            let data = res.data
            console.log(data)
            return {
                url: `${config.urls.attachment}attachments/${id}/${data.md5}`,
                md5: data.md5
            }
        } else if (/attachments\/(\d+)\/(\w{32})/ig.test(src)) {
            var md5 = /attachments\/(\d+)\/(\w{32})/ig.exec(src)[2];
            return {
                url: src,
                md5: md5
            }
        } else
            return {
                url: src,
                md5: ''
            }
    }
}

export default new Attachment()