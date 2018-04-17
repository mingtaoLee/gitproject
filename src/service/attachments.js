import qs from 'qs'
import users from './users'
import config from '../config/config'
import attachments from '../api/attachments'

class Attachments {
    uploadFile(file, onProgress, task) {
        let token = users.getCurrentUser().token
        let id = users.getCurrentUser().id
        return attachments.uploadFile(id, token, file.name, file, onProgress, task)
    }

    parseAttachmentUrl(src) {
        // if (!src) {
        //     return '#'
        // }
        // if (!src || !src.trim() || src == '/images/default.jpg')
        //     return ''
        if (!src.startsWith('http')) {
            src = config.urls.base + src
        }
        let url = new URL(src)

        var query = qs.parse(url.search, {
            ignoreQueryPrefix: false
        })
        if (!query.access_token) {
            query.access_token = users.getCurrentUser().token
            url.search = qs.stringify(query)
        }

        // if (!url.searchParams.get('access_token')) {
        //     url.searchParams.set('access_token', users.getCurrentUser().token)
        // }
        return url.href
    }
}

export default new Attachments()
