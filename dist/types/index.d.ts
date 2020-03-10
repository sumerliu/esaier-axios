/**!
 * @name EasierAxios
 * @author Sumer.Liu
 * @since 2020/3/10
 * @license MIT
 */
import { PreConfig, RequestModuleConfig, ApiConfig, RequestConfig, ModuleApiConfig, RequestHandler, ResponsePromise } from "./type";
declare class ApiModule {
    private version;
    private createdBy;
    private fetch;
    private moduleApiInfo;
    private globalApiInfo;
    private _preConfigs;
    private globalConfig;
    constructor(fetch: RequestHandler, globalConfig?: RequestModuleConfig, configs?: PreConfig);
    /**
     * 初始化全局配置.
     *
     * @param globalConfig
     */
    private _init;
    /**
     * axios核心方法
     *
     * @param url 请求地址
     * @param data 请求体或URL拼接的query参数
     * @param dynamicRouterParams URL拼接的动态路由参数
     * @param config 配置信息，默认是axios的配置项，支持额外1个参数dynamicRouter
     */
    private _base;
    /**
     * 发出请求，实例方法而不是原型对象方法，为了可以单独调用request而不使this指向undefined报错。
     *
     * @param url apiConfig中的key名
     * @param data 请求的内容，可以是请求头中的queryString键值对，也可以是请求体的内容
     * @param dynamicRouterParams 动态路由参数，键值对。
     * @param module 指定哪个模块。
     */
    request: ({ url: name, data, dynamicRouterParams, module }: RequestConfig) => ResponsePromise;
    /**
     * 注册全局config.
     *
     * @param apiConfig
     */
    registerGlobal(apiConfig: ApiConfig): ApiModule;
    /**
     * 注册模块config，模块会自带命名空间，避免了命名冲突.
     *
     * @param name 必选，模块名
     * @param module 必选，模块module的写法与apiConfig一致
     */
    registerModule({ name, module }: ModuleApiConfig): ApiModule;
    /**
     * 更新全局headers
     *
     * @param rest
     */
    setHeader(...rest: any): ApiModule;
}
export declare const CONSTANT: {
    DEFAULT_DYNAMICROUTER_RPATTERN: string;
    DYNAMICROUTER_PATTERN_FLAG: string;
    MODULE_PATTERN: string;
    DEFAULT_BASECONFIG: RequestModuleConfig;
};
export default ApiModule;
//# sourceMappingURL=index.d.ts.map