//引入axios
var axios = require('axios')
//
var apiAxios = (method, url, params, success, failure)=>{
    axios({
        method:method,
        url:url,
        data:method === 'POST' ? params : null,
        params:method === 'GET' ? params : null,
        withCredentials:false
    })
    .then((res)=>{
        if(res){//根据后台数据结构自行判断
            if(success){
                success(res.data)
            }
        }else{
            if(failure){
                failure(res.data);
            }else{
                console.log('error:' + JSON.stringify(res.data))
            }
        }
    })
    .catch((err)=>{
        let res = err.response
        if(err && res){
            console.log('error,HTTP CODE:' + res.status)
        }
    })
}

//返回在vue模板中的调用接口
export default {
    get:(url,params,success,failure)=>{
        return apiAxios('GET',url,params,success,failure)
    },
    post:(url,params,success,failure)=>{
        return apiAxios('POST',url,params,success,failure)
    }
}
