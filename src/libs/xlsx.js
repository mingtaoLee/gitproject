import xlsx from 'xlsx'

class XLSX {
    async parse (data, options = {}) {
        const wb = xlsx.read(data, {
            type: 'binary'
        })
        return Object.keys(wb.Sheets).map((name) => {
            const sheet = wb.Sheets[name]
            return {
                name,
                data: xlsx.utils.sheet_to_json(sheet, {
                    header: options.header
                })
            }
        })
    }
    async parseFile (file) {
        let target = await this.readFile(file)
        return this.parse(target.result)
    }
    readFile (file) {
        return new Promise((resolve, reject) => {
            var reader = new FileReader()
            reader.onload = function (e) {
                resolve(e.target)
            }
            reader.onerror = reject
            reader.readAsBinaryString(file)
        })
    }
}

export default new XLSX()
