[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">easier-axios</h3>

  <p align="center">
    A easeily to add a contours to page by d3
    <br />
    <br />
    <br />
    <a href="https://github.com/sumerliu/easier-axios/blob/master/example/example.html">View Demo</a>
    ·
    <a href="https://github.com/sumerliu/easier-axios/issues">Report Bug</a>
    ·
    <a href="https://github.com/sumerliu/easier-axios/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Features](#Features)
* [Why](#Why)
  * [EasierAxios是怎么做的](#EasierAxios是怎么做的)
* [Installation](#Installation)
* [Usage](#Usage)
* [Attentions](#Attentions)
* [License](#license)
* [Contact](#contact)

<!-- ABOUT THE PROJECT -->
## About The Project
> 基于axios二次封装，为了解决RESTFUL接口冗余问题的一种前端工程化尝试<br>
> version:  0.0.12<br>
> lastDate: 2020/3/10<br>
> Author:  Sumer Liu<br>


### Built With

* [axios](https://github.com/axios/axios)
* [TypeScript](https://github.com/Microsoft/TypeScript)
* [webpack](https://github.com/webpack/webpack)

## Features
1. 以axios作为基础库，完全基于axios的api使用方法。
2. 模块化管理各个RESTFUL接口的配置。
3. 预先提供全局配置，也可以在每个RESTFUL接口具体配置，出现重复配置时以具体接口配置优先处理。
4. 统一请求参数的格式，支持请求后台动态路由，支持多个路由参数动态传入。`任何请求方式都支持动态路由参数!`
5. 每个接口除了data以外，支持axios的config所有配置。新增一个dynamicRouter配置项作为是否启用动态路由接口的标识。
6. 针对当前实例添加了拦截器接口，多个baseUrl下的可新增实例注册模块加载拦截。

## Why
* 在开发前端页面过程中，势必会因为一堆RESTFUL接口的管理带来麻烦，举个例子，目前一个项目已经存在30个接口，如果需要更改a接口的timeout或者method，大家肯定会直接去具体的api调用函数里更改，但是假设api函数所在页面的代码量过于多，定位到准确位置怕是会耗费不少时间。
* 目前axios使用大概分成两种：
    1. 直接使用`axios.get(url, configs)`或者`axios.post(url, data, configs)`这类方法，这样会存在很大的问题，给具体接口配置request headers和timeout会非常麻烦
    2. 使用`axios(url, confings)`或者`axios.defaults`搭配`axios.create(configs)`来预设全局配置，这种比第一种要好很多，但是还是会遇到具体接口配置的问题
### EasierAxios是怎么做的
EasierAxios是在第二种使用方法上进行优化，在`new EasierAxios(configs)`的同时会调用`axios(url, configs)`生成一个全局配置后的axios方法。然后所有的具体接口会写在另外一个模块里，每个接口都可以配置自己的request headers和timeout等等。导入接口模块后，再调用实例的`createApi()`方法，就会返回一个函数，只需要在需要请求接口的地方调用该函数即可。对具体接口所有的配置，与该函数无关，只在接口模块里进行修改即可。

## Installation
npm安装 
```js
    npm install easier-axios axios --save
```

## Usage
1. npm包默认导出EasierAxios核心类。命名导出CONSTANT，是插件内部的所有常量，可以用来配置。
2. EasierAxios构造函数必选一个参数，可选两个参数，参数一是axios方法，参数二是对象globalConfig，作为接口的全局配置传入。参数三是对象preConfigs，目前支持一个dynamicRouterPattern的key，用作动态路由的占位符规则。。格式如下：
    ```js
    import axios from "axios";
    import EasierAxios, { CONSTANT } from "easier-axios";

    new EasierAxios(
        axios,
        // 与axios的原有config完全一致
        {
            baseURL: 'http://127.0.0.1:7070',
            timeout: 5000
        },
        {
            dynamicRouterPattern: `:${CONSTANT.DYNAMICROUTER_PATTERN_FLAG}` // 插件的动态路由url参数默认以：开头
        }
    );
    ```
3. EasierAxios实例有4个方法：
    * registerModule({name, module})，注册模块作用域config。name为string，module格式与config一致，均必选。如果调用了该方法，则表示module内的config存入自己模块的作用域内，这样就避免了命名冲突。函数返回EasierAxios实例。支持链式调用。
    * registerGlobal(config)，注册全局作用域cofnig。config格式与globalConfig一致，可选，如果传入了config，则当前config会存入插件的全局作用域。支持链式调用。
    * setHeader(headers)，更新全局配置的请求头，更新后，所有的请求都会合并新的全局请求头信息。参数最多有两个，当只有一个参数时，必须为Object，当有两个参数时，参数一是key，参数二是value。函数返回EasierAxios实例，setHeader支持链式调用。
    * request(config)，发出请求，返回axios的结果。config是个对象，格式如下：
        * url `[String]`，必选，config中的key名，不是config中的url
        * data `[Object]`，可选，axios的data参数，作为请求头query或请求体
        * dynamicRouterParams `[Object]`，可选，当config中dynamicRouter为true时必选。动态路由的参数，插件为了更好的使用动态路由，提供了路由参数选项。格式见下文
        * module `[String]`，可选，指定使用哪个模块的config
5. 使用如下：
    * api.js
    ``` javascript
        // 必选要导入axios
        import axios from "axios";
        import EasierAxios from "easier-axios";
         //导入全局作用域接口
        import { apiConfig, globalConfig } from "config";
         //导入模块作用域接口
        import moduleA from "moduleA";
         //导入模块作用域接口
        import moduleB from "moduleB";

        const api = new EasierAxios(axios, globalConfig);
        api.registerModule({name: 'A', module: moduleA})
           .registerModule({name: 'B', module: moduleB})
           .registerGlobal(apiConfig);
        //插件使用封装了axios底层拦截器，为当前axios实例添加拦截方法。
        api.requestInterceptors(
            function(config) {
                // Do something before request is sent
                return config;
            },
            function(error) {
                // Do something with request error
                return Promise.reject(error);
            }
        );

        // Add a response interceptor
        api.responseInterceptors(
            function(response) {
                // Do something with response data
                return response;
            },
            function(error) {
                // Do something with response error
                return Promise.reject(error);
            }
        );
        //导出api函数
        export default api.request;
    ```
    * 业务模块，例如 login.js。直接使用api({url, data, dynamicRouterParams}即可)
    ``` javascript
         //get请求无参数
        api({
            url: 'login',
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

        //get请求有参数
        api({
            url: 'login',
            data: { username: 'sumer' } //参数直接以对象传入,已对axios做过处理，不需要加入params的key。无参数可以不填
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })

        //PUT请求，且是动态路由接口。最终的url路径为'sign/logout/name/sumer/date/2018-12-4',请求体是{username: 'sumer'},格式为form表单编码
        api({
            url: 'logout',
            data: { username: 'alan' }, //参数直接以对象传入。无参数可以不填
            dynamicRouterParams: { name: 'sumer', date: '2018-12-4' } //路由参数必须是Object类型，不能忽略参数，否则会抛出异常
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
            
        //POST请求有参数
        api({
            url: 'setRoleAccess',
            data: { username: 'sumer', access: 'admin' } //参数直接以对象传入。无参数可以不填
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    ```

## Attentions

1. 插件本身预设了几个配置项，如果不做任何设置，默认是get请求，Content-Type默认是application/x-www-form-urlencoded编码。
2. 使用此插件可以最大程度解耦RESTFUL接口和具体业务，开发者只需要用接口地址别名请求，而需要更改接口配置时，不用知道在哪个页面调用了此接口，只需要将注意点放在apiConfig。
3. 至于插件接口的配置项，直接去看axios文档，与axios函数的第二个参数config完全一致。
4. 构造器函数的第二参数dynamicRouterPattern支持自定义占位符重写，但是必须是字符串，而且必须要包含`CONSTANT.DYNAMICROUTER_PATTERN_FLAG`。比如： `{CONSTANT.DYNAMICROUTER_PATTERN_FLAG}`、`@CONSTANT.DYNAMICROUTER_PATTERN_FLAG`。注意字符串内不允许出现正则表达式的特定符号，比如$、^等。
5. VueCli3插件已经完成，安装文档移步[vue-cli-plugin-easy-axios](https://github.com/sumerliu/vue-cli-plugin-easy-axios)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Sumer Liu - 843627979@qq.com

Project Link: [https://github.com/sumerliu/esaier-axios](https://github.com/sumerliu/esaier-axios)

[license-shield]: https://img.shields.io/github/license/sumerliu/easier-axios.svg?style=flat-square
[license-url]: https://github.com/sumerliu/easier-axios/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/%E5%A4%A9%E9%AA%84-%E5%88%98-4038528a/