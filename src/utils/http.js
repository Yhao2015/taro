import Taro from '@tarojs/taro'
import getBaseUrl from './baseUrl'
import interceptors from './interceptors'

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

class httpRequest {

    baseOptions(params, method = "GET") {
        let { url, data } = params;
        const BASE_URL = getBaseUrl();
        let contentType = "application/x-www-form-urlencoded";
        contentType = params.contentType || contentType;
        const option = {
            url: BASE_URL + url,
            data: data,
            method: method,
            header: {
                'content-type': contentType,
                'cookie': Taro.getStorageSync('cookie'),
                'Authorization': Taro.getStorageSync('Authorization')
            }
        };
        return Taro.request(option);
    }

    get(url, data = "") {
        let option = { url, data };
        return this.baseOptions(option);
    }

    post(url, data, contentType) {
        let params = { url, data, contentType };
        return this.baseOptions(params, "POST");
    }

    put(url, data = "") {
        let option = { url, data };
        return this.baseOptions(option, "PUT");
    }

    delete(url, data = "") {
        let option = { url, data };
        return this.baseOptions(option, "DELETE");
    }

}

export default new httpRequest()