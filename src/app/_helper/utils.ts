
export default class Utils {
  static downLoadFile(type: string, data: Uint8Array, fileName: string) {
    var bytes = new Uint8Array(data) // pass your byte response to this constructor
    var blob = new Blob([bytes], { type: type }) // change resultByte to bytes
    var link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = fileName
    link.click()
  }

  static str2date(str: string){
    return new Date(str).getTime();
  }

  static formatDate(date: Date) {
    var d = date
    var month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
  }

  static sortData(columnName: string, data: any): any {
    let sortedData: any = {}

    for (let i = 0; i < data.length; i++) {
      let object: any = data[i]

      if (Object.keys(sortedData).indexOf(object[columnName]) === -1) {
        sortedData[object[columnName]] = []
      }
      sortedData[object[columnName]].push(object)
    }

    return sortedData
  }

  static _arrayBufferToBase64(buffer: any) {
    var binary = ''
    var bytes = new Uint8Array(buffer)
    var len = bytes.byteLength
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return window.btoa(binary)
  }

  static ab2str(buf: any) {
    let buffer = new Uint8Array(buf)
    return String.fromCharCode.apply(null, buf)
  }
}
