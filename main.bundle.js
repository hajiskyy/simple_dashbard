webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".border {\r\n  border-width:3px !important;\r\n}\r\n.progress {\r\n  width: 150px;\r\n  height: 150px;\r\n  line-height: 150px;\r\n  background: none;\r\n  margin: 0 auto;\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n  position: relative;\r\n}\r\n.progress:after {\r\n  content: \"\";\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  border: 7px solid #eee;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.progress > span {\r\n  width: 50%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n.progress .progress-left {\r\n  left: 0;\r\n}\r\n.progress .progress-bar {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: none;\r\n  border-width: 7px;\r\n  border-style: solid;\r\n  position: absolute;\r\n  top: 0;\r\n  border-color:  #ff7b00\r\n}\r\n.progress .progress-left .progress-bar {\r\n  left: 100%;\r\n  border-top-right-radius: 75px;\r\n  border-bottom-right-radius: 75px;\r\n  border-left: 0;\r\n  -webkit-transform-origin: center left;\r\n  transform-origin: center left;\r\n}\r\n.progress .progress-right {\r\n  right: 0;\r\n}\r\n.progress .progress-right .progress-bar {\r\n  left: -100%;\r\n  border-top-left-radius: 75px;\r\n  border-bottom-left-radius: 75px;\r\n  border-right: 0;\r\n  -webkit-transform-origin: center right;\r\n  transform-origin: center right;\r\n}\r\n.progress .progress-value {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  border-radius: 50%;\r\n  font-size: 36px;\r\n  text-align: center;\r\n  line-height: 20px;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  height: 100%;\r\n  font-weight: 300;\r\n}\r\n.progress .progress-value div {\r\n  margin-top: 10px;\r\n  margin-left: 40px;\r\n}\r\n.progress .progress-value span {\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n}\r\n.small {\r\n  color: #8b8b8b;\r\n  font-weight: 600;\r\n}\r\n/* .progress .progress-value span.small {\r\n  font-size: 12px;\r\n  font\r\n} */\r\n/* This for loop creates the necessary css animation names Due to the split circle of progress-left and progress right, we must use the animations on each side. */\r\n.progress[data-percentage=\"27\"] .progress-right .progress-bar {\r\n  -webkit-animation: loading-1 1.5s linear forwards;\r\n          animation: loading-1 1.5s linear forwards;\r\n}\r\n.progress[data-percentage=\"27\"] .progress-left .progress-bar {\r\n  -webkit-animation: 0;\r\n          animation: 0;\r\n}\r\n.progress[data-percentage=\"15\"] .progress-right .progress-bar {\r\n  -webkit-animation: loading-2 1.5s linear forwards;\r\n          animation: loading-2 1.5s linear forwards;\r\n}\r\n.progress[data-percentage=\"15\"] .progress-left .progress-bar {\r\n  -webkit-animation: 0;\r\n          animation: 0;\r\n}\r\n.progress[data-percentage=\"24\"] .progress-right .progress-bar {\r\n  -webkit-animation: loading-3 1.5s linear forwards;\r\n          animation: loading-3 1.5s linear forwards;\r\n}\r\n.progress[data-percentage=\"24\"] .progress-left .progress-bar {\r\n  -webkit-animation: 0;\r\n          animation: 0;\r\n}\r\n.progress[data-percentage=\"100\"] .progress-right .progress-bar {\r\n  -webkit-animation: loading-4 1.5s linear forwards;\r\n          animation: loading-4 1.5s linear forwards;\r\n}\r\n.progress[data-percentage=\"100\"] .progress-left .progress-bar {\r\n  -webkit-animation: loading-4 1.5s linear forwards 1.5s;\r\n          animation: loading-4 1.5s linear forwards 1.5s;\r\n}\r\n@-webkit-keyframes loading-1 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(100deg);\r\n    transform: rotate(100deg);\r\n }\r\n}\r\n@keyframes loading-1 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(100deg);\r\n    transform: rotate(100deg);\r\n }\r\n}\r\n@-webkit-keyframes loading-2 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0degdeg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(50deg);\r\n    transform: rotate(50deg);\r\n }\r\n}\r\n@keyframes loading-2 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0degdeg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(50deg);\r\n    transform: rotate(50deg);\r\n }\r\n}\r\n@-webkit-keyframes loading-3 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(80deg);\r\n    transform: rotate(80deg);\r\n }\r\n}\r\n@keyframes loading-3 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(80deg);\r\n    transform: rotate(80deg);\r\n }\r\n}\r\n@-webkit-keyframes loading-4 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(180);\r\n    transform: rotate(180deg);\r\n }\r\n}\r\n@keyframes loading-4 {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n }\r\n  100% {\r\n    -webkit-transform: rotate(180);\r\n    transform: rotate(180deg);\r\n }\r\n}\r\n.progress {\r\n  margin-bottom: 1em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-md-auto\">\r\n      <img src=\"assets/img/profile.png\" class=\"rounded float-left\" style=\"width: 200px; height: 200px;\">\r\n    </div>\r\n    <div class=\"col border border-dark p-5\">\r\n      <div class=\"row\">\r\n        <div class=\"col-2\"><strong>Market Plan</strong></div>\r\n        <div class=\"col-7\">\r\n          <p>Fill in who are your customers? What is the pain statement that you are trying to solve for them?</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-2\"><strong>Benefit</strong></div>\r\n        <div class=\"col-7\">\r\n          <p>What is the benefit that will match the pain statement</p>\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <a href=\"#\" class=\"btn btn-outline-dark\">Edit Profile</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row my-4\">\r\n    <div class=\"col-12\">\r\n      <h4 class=\"text-center\">How is <span class=\"font-weight-bold\">VentureX <i class=\"fas fa-pencil-alt text-primary\"></i> </span> doing today? <span class=\"small\">Check Dashboard</span></h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-8 mx-auto\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-3 col-md-2 mx-auto text-center\">\r\n          <div class=\"progress\" data-percentage=\"27\">\r\n            <span class=\"progress-left\">\r\n              <span class=\"progress-bar\"></span>\r\n            </span>\r\n            <span class=\"progress-right\">\r\n              <span class=\"progress-bar\" style=\"border-color: orange;\"></span>\r\n            </span>\r\n            <div class=\"progress-value\">\r\n              <div>\r\n                <strong>27</strong> \r\n                <span class=\"small\">%</span>\r\n                <br>\r\n                <span>Product</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-3 mx-auto col-md-2\">\r\n          <div class=\"progress\" data-percentage=\"15\">\r\n            <span class=\"progress-left\">\r\n              <span class=\"progress-bar\"></span>\r\n            </span>\r\n            <span class=\"progress-right\">\r\n              <span class=\"progress-bar\" style=\"border-color: red;\"></span>\r\n            </span>\r\n            <div class=\"progress-value\">\r\n              <div> <strong>3</strong> <span class=\"small\">months</span>\r\n                <br>\r\n                <span>Runway</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-3 mx-auto col-md-2\">\r\n          <div class=\"progress\" data-percentage=\"24\">\r\n            <span class=\"progress-left\">\r\n              <span class=\"progress-bar\"></span>\r\n            </span>\r\n            <span class=\"progress-right\">\r\n              <span class=\"progress-bar\"></span>\r\n            </span>\r\n            <div class=\"progress-value\">\r\n              <div>\r\n                <strong>24</strong> <span class=\"small\">%</span>\r\n                <br>\r\n                <span>Conversion</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-sm-3 mx-auto col-md-2\">\r\n          <div class=\"progress\" data-percentage=\"100\">\r\n            <span class=\"progress-left\">\r\n              <span class=\"progress-bar\" style=\"border-color: greenyellow;\"></span>\r\n            </span>\r\n            <span class=\"progress-right\">\r\n              <span class=\"progress-bar\" style=\"border-color: greenyellow;\"></span>\r\n            </span>\r\n            <div class=\"progress-value\">\r\n              <div>\r\n                <strong>100</strong> <span class=\"small\">%</span>\r\n                <br>\r\n                <span>Engagement</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 mt-2\">\r\n      <div class=\"alert alert-warning\" role=\"alert\">\r\n        <strong>Small Converson?</strong> Learn what you can do to <strong>rise you conversion</strong>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-12 mt-2\">\r\n      <div class=\"alert alert-danger\" role=\"alert\">\r\n        <strong>Low product score?</strong> <strong>Try this</strong> to get more..\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map