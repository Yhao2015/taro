const getBaseUrl = (url) => {
    let BASE_URL = '';
    if (process.env.NODE_ENV === 'development') {
        //开发环境 - 根据请求不同返回不同的BASE_URL
        BASE_URL = 'http://172.16.1.224:3000/mock/538/fline'
    } else {
        // 生产环境
        BASE_URL = 'http://172.16.1.224:3000/mock/538/fline'
    }
    return BASE_URL
}

export default getBaseUrl;