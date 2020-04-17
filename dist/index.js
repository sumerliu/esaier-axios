/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"easier-axios\",\"version\":\"0.0.13\",\"description\":\"Easier to use axios with configs separated to modules\",\"main\":\"dist/index.js\",\"scripts\":{\"test\":\"jest\",\"build\":\"webpack --mode development --progress --display-modules --colors --display-reasons\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sumerliu/esaier-axios.git\"},\"keywords\":[\"axios\",\"modules\",\"easy\",\"manager\",\"request\"],\"author\":\"Sumer.Liu\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/sumerliu/esaier-axios/issues\"},\"homepage\":\"https://github.com/sumerliu/esaier-axios#readme\",\"devDependencies\":{\"@types/jest\":\"^25.1.4\",\"@types/node\":\"^13.9.0\",\"axios\":\"^0.19.2\",\"clean-webpack-plugin\":\"^3.0.0\",\"jest\":\"^25.1.0\",\"prettier\":\"^1.19.1\",\"ts-jest\":\"^25.2.1\",\"ts-loader\":\"^6.2.1\",\"typescript\":\"^3.8.3\",\"webpack\":\"^4.42.0\",\"webpack-cli\":\"^3.3.11\"}}");

/***/ }),

/***/ "./src/constant.ts":
/*!*************************!*\
  !*** ./src/constant.ts ***!
  \*************************/
/*! exports provided: DYNAMICROUTER_PATTERN_FLAG, DEFAULT_DYNAMICROUTER_RPATTERN, MODULE_PATTERN, DEFAULT_BASECONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DYNAMICROUTER_PATTERN_FLAG", function() { return DYNAMICROUTER_PATTERN_FLAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DYNAMICROUTER_RPATTERN", function() { return DEFAULT_DYNAMICROUTER_RPATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODULE_PATTERN", function() { return MODULE_PATTERN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BASECONFIG", function() { return DEFAULT_BASECONFIG; });
/**
 * 动态路由参数用来替换占位符的标志位，指定占位符标志位是字符串pattern
 */
var DYNAMICROUTER_PATTERN_FLAG = "pattern";
/**
 * 插件动态路由参数的默认占位符
 */
var DEFAULT_DYNAMICROUTER_RPATTERN = ":" + DYNAMICROUTER_PATTERN_FLAG;
/**
 * 表明当前请求url是模块的占位符，默认为->
 */
var MODULE_PATTERN = "->";
/**
 * 插件的请求默认配置项
 */
var DEFAULT_BASECONFIG = {
    method: "GET",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: CONSTANT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANT", function() { return CONSTANT; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/constant.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

var EasierAxios = /** @class */ (function () {
    function EasierAxios(fetch, globalConfig, configs) {
        var _this = this;
        if (configs === void 0) { configs = { dynamicRouterPattern: _constant__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DYNAMICROUTER_RPATTERN"] }; }
        this.version = __webpack_require__(/*! ../package.json */ "./package.json").version;
        this.createdBy = "sumerliu@github.com";
        this.moduleApiInfo = [];
        this.globalApiInfo = {};
        this.globalConfig = {};
        /**
         * 发出请求，实例方法而不是原型对象方法，为了可以单独调用request而不使this指向undefined报错。
         *
         * @param url apiConfig中的key名
         * @param data 请求的内容，可以是请求头中的queryString键值对，也可以是请求体的内容
         * @param dynamicRouterParams 动态路由参数，键值对。
         * @param module 指定哪个模块。
         */
        this.request = function (_a) {
            var name = _a.url, data = _a.data, dynamicRouterParams = _a.dynamicRouterParams, module = _a.module;
            /**
             * 调用api函数时有两种模块config引入写法，一种是url中带->。一种是module字段声明，如果两种写法同时存在，module字段优先级更高
             */
            var isUseModule = Boolean(module) || name.includes(_constant__WEBPACK_IMPORTED_MODULE_0__["MODULE_PATTERN"]);
            var moduleName = module || name.split(_constant__WEBPACK_IMPORTED_MODULE_0__["MODULE_PATTERN"])[0].trim();
            var pathName = (name.includes(_constant__WEBPACK_IMPORTED_MODULE_0__["MODULE_PATTERN"]) && name.split(_constant__WEBPACK_IMPORTED_MODULE_0__["MODULE_PATTERN"])[1].trim()) || name;
            var targetConfig = isUseModule
                ? _this.moduleApiInfo.find(function (item) { return item.name == moduleName; }).module
                : _this.globalApiInfo;
            if (!Boolean(targetConfig[pathName])) {
                throw new Error("could not find the request url, please check whether you register module");
            }
            var _b = targetConfig[pathName], url = _b.url, rest = __rest(_b, ["url"]);
            /* 具体接口的配置参数和全局配置合并, headers因为是嵌套对象，所以需要单独合并 */
            var headers = rest.headers, restConfig = __rest(rest, ["headers"]);
            var config = __assign(__assign({}, _this.globalConfig), restConfig);
            config.headers = __assign(__assign({}, config.headers), headers);
            return _this._base(url, data, dynamicRouterParams, config);
        };
        this.fetch = fetch;
        this._preConfigs = configs;
        this._init(globalConfig);
    }
    /**
     * 初始化全局配置.
     *
     * @param globalConfig
     */
    EasierAxios.prototype._init = function (globalConfig) {
        if (globalConfig === void 0) { globalConfig = {}; }
        /* 用户传入的全局配置参数和默认参数合并 */
        this.globalConfig = __assign(__assign({}, _constant__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_BASECONFIG"]), globalConfig);
    };
    /**
     * axios核心方法
     *
     * @param url 请求地址
     * @param data 请求体或URL拼接的query参数
     * @param dynamicRouterParams URL拼接的动态路由参数
     * @param config 配置信息，默认是axios的配置项，支持额外1个参数dynamicRouter
     */
    EasierAxios.prototype._base = function (url, data, dynamicRouterParams, config) {
        var _this = this;
        var isDynamicRouter = Boolean(config.dynamicRouter);
        var method = config.method.toUpperCase();
        var _data = {}, _url = url;
        /* 先区分是动态路由还是静态路由请求 */
        if (isDynamicRouter) {
            if (Object.prototype.toString.call(dynamicRouterParams) == "[object Object]") {
                /* 将动态路由参数中的占位符替换成请求中的路由参数 */
                Object.entries(dynamicRouterParams).forEach(function (item) {
                    var regArg = _this._preConfigs.dynamicRouterPattern.replace(new RegExp("" + _constant__WEBPACK_IMPORTED_MODULE_0__["DYNAMICROUTER_PATTERN_FLAG"], "g"), item[0]);
                    var rule = new RegExp("(" + regArg + ")", "g");
                    _url = _url.replace(rule, item[1]);
                });
            }
            else {
                throw new Error("when you use dynamicRouter params request, data must be object");
            }
        }
        if (Boolean(data)) {
            /**
             * 如果data作为请求体信息传输，data可以是以下任意类型：
             * - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
             * - 浏览器专属：FormData, File, Blob
             * - Node 专属： Stream
             **/
            var NeedRequestBodyMethods = ["PUT", "POST", "PATCH"];
            /* 再区分是传params(请求方式通过头部url的queryString),还是传data(请求方式通过请求体的data) */
            _data = NeedRequestBodyMethods.includes(method)
                ? { data: data }
                : { params: data };
        }
        return this.fetch(__assign(__assign(__assign({ url: _url }, _data), config), { 
            /* 当method为PUT、POST和PATCH等时，只处理了json和form编码，将data以form或json编码格式传递。其余编码格式将不会对请求数据做任何处理！*/
            transformRequest: [
                function (data) {
                    var result;
                    var CONTENT_TYPE = config.headers["Content-Type"];
                    switch (CONTENT_TYPE) {
                        case "application/x-www-form-urlencoded":
                            var ret = "";
                            for (var it_1 in data) {
                                ret += "&" + encodeURIComponent(it_1) + "=" + encodeURIComponent(data[it_1]);
                            }
                            result = ret.substring(1);
                            break;
                        case "application/json":
                            result = JSON.stringify(data);
                            break;
                        default:
                            result = data;
                    }
                    return result;
                }
            ] }));
    };
    /**
     * 注册全局config.
     *
     * @param apiConfig
     */
    EasierAxios.prototype.registerGlobal = function (apiConfig) {
        this.globalApiInfo = apiConfig;
        return this;
    };
    /**
     * 注册模块config，模块会自带命名空间，避免了命名冲突.
     *
     * @param name 必选，模块名
     * @param module 必选，模块module的写法与apiConfig一致
     */
    EasierAxios.prototype.registerModule = function (_a) {
        var name = _a.name, module = _a.module;
        if (Boolean(name) && typeof name == "string") {
            this.moduleApiInfo.push({
                name: name,
                module: module
            });
            return this;
        }
        else {
            throw new Error("if you use the module, the module name is necessary");
        }
    };
    /**
     * 更新全局headers
     *
     * @param rest
     */
    EasierAxios.prototype.setHeader = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        if (rest.length == 1 && typeof rest == "object") {
            for (var _a = 0, _b = Object.keys(rest[0]); _a < _b.length; _a++) {
                var key = _b[_a];
                this.globalConfig.headers[key] = rest[0][key];
            }
        }
        else if (rest.length == 2) {
            this.globalConfig.headers[rest[0]] = rest[1];
        }
        else {
            throw new Error("the maximum length of arguments is 2, if there is only one, it must be object ");
        }
        return this;
    };
    EasierAxios.prototype.requestInterceptors = function (configFn, errorFn) {
        this.fetch.interceptors.request.use(configFn, errorFn);
    };
    EasierAxios.prototype.responseInterceptors = function (responseFn, errorFn) {
        this.fetch.interceptors.request.use(responseFn, errorFn);
    };
    return EasierAxios;
}());
var CONSTANT = {
    DEFAULT_DYNAMICROUTER_RPATTERN: _constant__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DYNAMICROUTER_RPATTERN"],
    DYNAMICROUTER_PATTERN_FLAG: _constant__WEBPACK_IMPORTED_MODULE_0__["DYNAMICROUTER_PATTERN_FLAG"],
    MODULE_PATTERN: _constant__WEBPACK_IMPORTED_MODULE_0__["MODULE_PATTERN"],
    DEFAULT_BASECONFIG: _constant__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_BASECONFIG"]
};
/* harmony default export */ __webpack_exports__["default"] = (EasierAxios);


/***/ })

/******/ });
//# sourceMappingURL=index.js.map