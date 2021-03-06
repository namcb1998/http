var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
/**
 * @name HTTP
 * @description
 * Cordova / Phonegap plugin for communicating with HTTP servers. Supports iOS and Android.
 *
 * Advantages over Javascript requests:
 * - Background threading - all requests are done in a background thread
 * - SSL Pinning
 *
 * @usage
 * ```typescript
 * import { HTTP } from '@ionic-native/http';
 *
 * constructor(private http: HTTP) {}
 *
 * ...
 *
 * this.http.get('http://ionic.io', {}, {})
 *   .then(data => {
 *
 *     console.log(data.status);
 *     console.log(data.data); // data received by server
 *     console.log(data.headers);
 *
 *   })
 *   .catch(error => {
 *
 *     console.log(error.status);
 *     console.log(error.error); // error message as string
 *     console.log(error.headers);
 *
 *   });
 *
 * ```
 * @interfaces
 * HTTPResponse
 */
var HTTP = (function (_super) {
    __extends(HTTP, _super);
    function HTTP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This returns an object representing a basic HTTP Authorization header of the form.
     * @param username {string} Username
     * @param password {string} Password
     * @returns {Object} an object representing a basic HTTP Authorization header of the form {'Authorization': 'Basic base64EncodedUsernameAndPassword'}
     */
    /**
       * This returns an object representing a basic HTTP Authorization header of the form.
       * @param username {string} Username
       * @param password {string} Password
       * @returns {Object} an object representing a basic HTTP Authorization header of the form {'Authorization': 'Basic base64EncodedUsernameAndPassword'}
       */
    HTTP.prototype.getBasicAuthHeader = /**
       * This returns an object representing a basic HTTP Authorization header of the form.
       * @param username {string} Username
       * @param password {string} Password
       * @returns {Object} an object representing a basic HTTP Authorization header of the form {'Authorization': 'Basic base64EncodedUsernameAndPassword'}
       */
    function (username, password) {
        return;
    };
    /**
     * This sets up all future requests to use Basic HTTP authentication with the given username and password.
     * @param username {string} Username
     * @param password {string} Password
     */
    /**
       * This sets up all future requests to use Basic HTTP authentication with the given username and password.
       * @param username {string} Username
       * @param password {string} Password
       */
    HTTP.prototype.useBasicAuth = /**
       * This sets up all future requests to use Basic HTTP authentication with the given username and password.
       * @param username {string} Username
       * @param password {string} Password
       */
    function (username, password) { };
    /**
     * Get all headers defined for a given hostname.
     * @param host {string} The hostname
     * @returns {string} return all headers defined for the hostname
     */
    /**
       * Get all headers defined for a given hostname.
       * @param host {string} The hostname
       * @returns {string} return all headers defined for the hostname
       */
    HTTP.prototype.getHeaders = /**
       * Get all headers defined for a given hostname.
       * @param host {string} The hostname
       * @returns {string} return all headers defined for the hostname
       */
    function (host) {
        return;
    };
    /**
     * Set a header for all future requests. Takes a hostname, a header and a value.
     * @param host {string} The hostname to be used for scoping this header
     * @param header {string} The name of the header
     * @param value {string} The value of the header
     */
    /**
       * Set a header for all future requests. Takes a hostname, a header and a value.
       * @param host {string} The hostname to be used for scoping this header
       * @param header {string} The name of the header
       * @param value {string} The value of the header
       */
    HTTP.prototype.setHeader = /**
       * Set a header for all future requests. Takes a hostname, a header and a value.
       * @param host {string} The hostname to be used for scoping this header
       * @param header {string} The name of the header
       * @param value {string} The value of the header
       */
    function (host, header, value) { };
    /**
     * Get the name of the data serializer which will be used for all future POST and PUT requests.
     * @returns {string} returns the name of the configured data serializer
     */
    /**
       * Get the name of the data serializer which will be used for all future POST and PUT requests.
       * @returns {string} returns the name of the configured data serializer
       */
    HTTP.prototype.getDataSerializer = /**
       * Get the name of the data serializer which will be used for all future POST and PUT requests.
       * @returns {string} returns the name of the configured data serializer
       */
    function () {
        return;
    };
    /**
     * Set the data serializer which will be used for all future POST and PUT requests. Takes a string representing the name of the serializer.
     * @param serializer {string} The name of the serializer. Can be urlencoded, utf8 or json
     */
    /**
       * Set the data serializer which will be used for all future POST and PUT requests. Takes a string representing the name of the serializer.
       * @param serializer {string} The name of the serializer. Can be urlencoded, utf8 or json
       */
    HTTP.prototype.setDataSerializer = /**
       * Set the data serializer which will be used for all future POST and PUT requests. Takes a string representing the name of the serializer.
       * @param serializer {string} The name of the serializer. Can be urlencoded, utf8 or json
       */
    function (serializer) { };
    /**
     * Add a custom cookie.
     * @param url {string} Scope of the cookie
     * @param cookie {string} RFC compliant cookie string
     */
    /**
       * Add a custom cookie.
       * @param url {string} Scope of the cookie
       * @param cookie {string} RFC compliant cookie string
       */
    HTTP.prototype.setCookie = /**
       * Add a custom cookie.
       * @param url {string} Scope of the cookie
       * @param cookie {string} RFC compliant cookie string
       */
    function (url, cookie) { };
    /**
     * Clear all cookies.
     */
    /**
       * Clear all cookies.
       */
    HTTP.prototype.clearCookies = /**
       * Clear all cookies.
       */
    function () { };
    /**
     * Remove cookies for given URL.
     * @param url {string}
     * @param cb
     */
    /**
       * Remove cookies for given URL.
       * @param url {string}
       * @param cb
       */
    HTTP.prototype.removeCookies = /**
       * Remove cookies for given URL.
       * @param url {string}
       * @param cb
       */
    function (url, cb) { };
    /**
     * Resolve cookie string for given URL.
     * @param url {string}
     */
    /**
       * Resolve cookie string for given URL.
       * @param url {string}
       */
    HTTP.prototype.getCookieString = /**
       * Resolve cookie string for given URL.
       * @param url {string}
       */
    function (url) {
        return;
    };
    /**
     * Get global request timeout value in seconds.
     * @returns {number} returns the global request timeout value
     */
    /**
       * Get global request timeout value in seconds.
       * @returns {number} returns the global request timeout value
       */
    HTTP.prototype.getRequestTimeout = /**
       * Get global request timeout value in seconds.
       * @returns {number} returns the global request timeout value
       */
    function () {
        return;
    };
    /**
     * Set global request timeout value in seconds.
     * @param timeout {number} The timeout in seconds. Default 60
     */
    /**
       * Set global request timeout value in seconds.
       * @param timeout {number} The timeout in seconds. Default 60
       */
    HTTP.prototype.setRequestTimeout = /**
       * Set global request timeout value in seconds.
       * @param timeout {number} The timeout in seconds. Default 60
       */
    function (timeout) { };
    /**
     * Set SSL Cert handling mode, being one of the following values
     * default: default SSL cert handling using system's CA certs
     * nocheck: disable SSL cert checking, trusting all certs (meant to be used only for testing purposes)
     * pinned: trust only provided certs
     * @see https://github.com/silkimen/cordova-plugin-advanced-http#setsslcertmode
     * @param {'default' | 'nocheck' | 'pinned'} mode SSL Cert handling mode
     */
    /**
       * Set SSL Cert handling mode, being one of the following values
       * default: default SSL cert handling using system's CA certs
       * nocheck: disable SSL cert checking, trusting all certs (meant to be used only for testing purposes)
       * pinned: trust only provided certs
       * @see https://github.com/silkimen/cordova-plugin-advanced-http#setsslcertmode
       * @param {'default' | 'nocheck' | 'pinned'} mode SSL Cert handling mode
       */
    HTTP.prototype.setSSLCertMode = /**
       * Set SSL Cert handling mode, being one of the following values
       * default: default SSL cert handling using system's CA certs
       * nocheck: disable SSL cert checking, trusting all certs (meant to be used only for testing purposes)
       * pinned: trust only provided certs
       * @see https://github.com/silkimen/cordova-plugin-advanced-http#setsslcertmode
       * @param {'default' | 'nocheck' | 'pinned'} mode SSL Cert handling mode
       */
    function (mode) {
        return;
    };
    /**
     * Disable following redirects automatically.
     * @param disable {boolean} Set to true to disable following redirects automatically
     * @returns {Promise<void>} returns a promise that will resolve on success, and reject on failure
     */
    /**
       * Disable following redirects automatically.
       * @param disable {boolean} Set to true to disable following redirects automatically
       * @returns {Promise<void>} returns a promise that will resolve on success, and reject on failure
       */
    HTTP.prototype.disableRedirect = /**
       * Disable following redirects automatically.
       * @param disable {boolean} Set to true to disable following redirects automatically
       * @returns {Promise<void>} returns a promise that will resolve on success, and reject on failure
       */
    function (disable) {
        return;
    };
    /**
     * Make a POST request
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    /**
       * Make a POST request
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    HTTP.prototype.post = /**
       * Make a POST request
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    function (url, body, headers) {
        return;
    };
    /**
     * Make a GET request
     * @param url {string} The url to send the request to
     * @param parameters {Object} Parameters to send with the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    /**
       * Make a GET request
       * @param url {string} The url to send the request to
       * @param parameters {Object} Parameters to send with the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    HTTP.prototype.get = /**
       * Make a GET request
       * @param url {string} The url to send the request to
       * @param parameters {Object} Parameters to send with the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    function (url, parameters, headers) {
        return;
    };
    /**
     * Make a PUT request
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    /**
       * Make a PUT request
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    HTTP.prototype.put = /**
       * Make a PUT request
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    function (url, body, headers) {
        return;
    };
    /**
     * Make a PATCH request
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    /**
       * Make a PATCH request
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    HTTP.prototype.patch = /**
       * Make a PATCH request
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    function (url, body, headers) {
        return;
    };
    /**
     * Make a DELETE request
     * @param url {string} The url to send the request to
     * @param parameters {Object} Parameters to send with the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    /**
       * Make a DELETE request
       * @param url {string} The url to send the request to
       * @param parameters {Object} Parameters to send with the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    HTTP.prototype.delete = /**
       * Make a DELETE request
       * @param url {string} The url to send the request to
       * @param parameters {Object} Parameters to send with the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    function (url, parameters, headers) {
        return;
    };
    /**
     * Make a HEAD request
     * @param url {string} The url to send the request to
     * @param parameters {Object} Parameters to send with the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    /**
       * Make a HEAD request
       * @param url {string} The url to send the request to
       * @param parameters {Object} Parameters to send with the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    HTTP.prototype.head = /**
       * Make a HEAD request
       * @param url {string} The url to send the request to
       * @param parameters {Object} Parameters to send with the request
       * @param headers {Object} The headers to set for this request
       * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
       */
    function (url, parameters, headers) {
        return;
    };
    /**
     *
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @param filePath {string} The local path of the file to upload
     * @param name {string} The name of the parameter to pass the file along as
     * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
     */
    /**
       *
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @param filePath {string} The local path of the file to upload
       * @param name {string} The name of the parameter to pass the file along as
       * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
       */
    HTTP.prototype.uploadFile = /**
       *
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @param filePath {string} The local path of the file to upload
       * @param name {string} The name of the parameter to pass the file along as
       * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
       */
    function (url, body, headers, filePath, name) {
        return;
    };
      /**
     *
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @param filePath {string} The local path of the file to upload
     * @param name {string} The name of the parameter to pass the file along as
     * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
     */
    /**
       *
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @param filePath {string} The local path of the file to upload
       * @param name {string} The name of the parameter to pass the file along as
       * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
       */
     HTTP.prototype.uploadBinary = /**
     *
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @param filePath {string} The local path of the file to upload
     * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
     */
  function (url, body, headers, filePath) {
      return;
  };
    /**
     *
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @param filePath {string} The path to download the file to, including the file name.
     * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
     */
    /**
       *
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @param filePath {string} The path to download the file to, including the file name.
       * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
       */
    HTTP.prototype.downloadFile = /**
       *
       * @param url {string} The url to send the request to
       * @param body {Object} The body of the request
       * @param headers {Object} The headers to set for this request
       * @param filePath {string} The path to download the file to, including the file name.
       * @returns {Promise<any>} returns a FileEntry promise that resolve on success, and reject on failure
       */
    function (url, body, headers, filePath) {
        return;
    };
    HTTP.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Object)
    ], HTTP.prototype, "getBasicAuthHeader", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], HTTP.prototype, "useBasicAuth", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], HTTP.prototype, "getHeaders", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", void 0)
    ], HTTP.prototype, "setHeader", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], HTTP.prototype, "getDataSerializer", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], HTTP.prototype, "setDataSerializer", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], HTTP.prototype, "setCookie", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HTTP.prototype, "clearCookies", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Function]),
        __metadata("design:returntype", void 0)
    ], HTTP.prototype, "removeCookies", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", String)
    ], HTTP.prototype, "getCookieString", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], HTTP.prototype, "getRequestTimeout", null);
    __decorate([
        Cordova({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], HTTP.prototype, "setRequestTimeout", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "setSSLCertMode", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "disableRedirect", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "post", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "get", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "put", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "patch", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "delete", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "head", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object, String, String]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "uploadFile", null);
    __decorate([
      Cordova(),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", [String, Object, Object, String]),
      __metadata("design:returntype", Promise)
  ], HTTP.prototype, "uploadBinary", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object, String]),
        __metadata("design:returntype", Promise)
    ], HTTP.prototype, "downloadFile", null);
    /**
     * @name HTTP
     * @description
     * Cordova / Phonegap plugin for communicating with HTTP servers. Supports iOS and Android.
     *
     * Advantages over Javascript requests:
     * - Background threading - all requests are done in a background thread
     * - SSL Pinning
     *
     * @usage
     * ```typescript
     * import { HTTP } from '@ionic-native/http';
     *
     * constructor(private http: HTTP) {}
     *
     * ...
     *
     * this.http.get('http://ionic.io', {}, {})
     *   .then(data => {
     *
     *     console.log(data.status);
     *     console.log(data.data); // data received by server
     *     console.log(data.headers);
     *
     *   })
     *   .catch(error => {
     *
     *     console.log(error.status);
     *     console.log(error.error); // error message as string
     *     console.log(error.headers);
     *
     *   });
     *
     * ```
     * @interfaces
     * HTTPResponse
     */
    HTTP = __decorate([
        Plugin({
            pluginName: 'HTTP',
            plugin: 'cordova-plugin-advanced-http',
            pluginRef: 'cordova.plugin.http',
            repo: 'https://github.com/silkimen/cordova-plugin-advanced-http',
            platforms: ['Android', 'iOS']
        })
    ], HTTP);
    return HTTP;
}(IonicNativePlugin));
export { HTTP };
//# sourceMappingURL=index.js.map
