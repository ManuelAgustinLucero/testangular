webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/lock/lock.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"page-header lock-page header-filter\" style=\"background-image: url('../../assets/img/lock.jpg'); background-size: cover; background-position: top center;\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\n    <div class=\"container\">\n      <div class=\"col-md-4 ml-auto mr-auto\">\n        <div class=\"card card-profile text-center card-hidden\">\n          <div class=\"card-header \">\n            <div class=\"card-avatar\">\n              <a href=\"#pablo\">\n                <img class=\"img\" src=\"../../assets/img/faces/avatar.jpg\">\n              </a>\n            </div>\n          </div>\n          <div class=\"card-body \">\n            <h4 class=\"card-title\">Tania Andrew</h4>\n            <div class=\"form-group\">\n              <label for=\"exampleInput1\" class=\"bmd-label-floating\">Enter Password</label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleInput1\">\n            </div>\n          </div>\n          <div class=\"card-footer justify-content-center\">\n            <a href=\"#pablo\" class=\"btn btn-rose btn-round\">Unlock</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer \">\n    <div class=\"container\">\n      <nav class=\"pull-left\">\n        <ul>\n          <li>\n            <a href=\"https://www.creative-tim.com\">\n              Creative Tim\n            </a>\n          </li>\n          <li>\n            <a href=\"http://presentation.creative-tim.com\">\n              About Us\n            </a>\n          </li>\n          <li>\n            <a href=\"http://blog.creative-tim.com\">\n              Blog\n            </a>\n          </li>\n          <li>\n            <a href=\"https://www.creative-tim.com/license\">\n              Licenses\n            </a>\n          </li>\n        </ul>\n      </nav>\n      <div class=\"copyright pull-right\">\n        &copy;\n          {{test | date: 'yyyy'}}, made with <i class=\"material-icons\">favorite</i> by\n        <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n      </div>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/lock/lock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LockComponent = /** @class */ (function () {
    function LockComponent() {
        this.test = new Date();
    }
    LockComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('lock-page');
        body.classList.add('off-canvas-sidebar');
        var card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    };
    LockComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('lock-page');
        body.classList.remove('off-canvas-sidebar');
    };
    LockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lock-cmp',
            template: __webpack_require__("../../../../../src/app/pages/lock/lock.component.html")
        })
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"page-header login-page header-filter\" filter-color=\"black\" style=\"background-image: url('../../assets/img/login.jpg'); background-size: cover; background-position: top center;\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\n    <div class=\"container\">\n      <div class=\"col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto\">\n      \n        <form #formUser=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form\" >\n          <div class=\"card card-login card-hidden\">\n            \n\n            <div class=\"card-header card-header-rose text-center\">\n              <h4 class=\"card-title\">Entrá</h4>\n            \n              <!-- <div class=\"social-line\">\n                <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\n                  <i class=\"fa fa-facebook-square\"></i>\n                </a>\n                <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\n                  <i class=\"fa fa-twitter\"></i>\n                </a>\n                <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\n                  <i class=\"fa fa-google-plus\"></i>\n                </a>\n              </div> -->\n            </div>\n            <div class=\"card-body \">\n              <!-- <p class=\"card-description text-center\">Or Be Classical</p> -->\n              <span class=\"bmd-form-group\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"material-icons\">face</i>\n                    </span>\n                  </div>\n                  <input #usuario=\"ngModel\" name=\"usuario\" [(ngModel)]=\"user.usuario\" type=\"text\" class=\"form-control\" placeholder=\"Usuario...\">\n                </div>\n              </span>\n              <!-- <span class=\"bmd-form-group\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"material-icons\">email</i>\n                    </span>\n                  </div>\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Email...\">\n                </div>\n              </span> -->\n              <span class=\"bmd-form-group\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"material-icons\">lock_outline</i>\n                    </span>\n                  </div>\n                  <input #clave=\"ngModel\" name=\"clave\" [(ngModel)]=\"user.clave\"  type=\"password\" class=\"form-control\" placeholder=\"Clave...\">\n                </div>\n              </span>\n            </div>\n            <div class=\"card-footer justify-content-center\">\n              <input type=\"submit\" value=\"Vamos\" class=\"btn btn-danger btn-block btn-round\">\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <footer class=\"footer \">\n      <div class=\"container\">\n        <nav class=\"pull-left\">\n          <ul>\n            <li>\n              <a href=\"https://www.creative-tim.com\">\n                Contactanos\n              </a>\n            </li>\n          </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n          &copy;\n            {{test | date: 'yyyy'}}, ARGEUMS para el mundo\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(element, _loginService) {
        this.element = element;
        this._loginService = _loginService;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('identity');
        this.accountDontExist = null;
        this.camposIncorrectos = null;
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        var card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
        this.user = {
            'usuario': '',
            'clave': '',
            'audience': 'app_desarrollo',
        };
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._loginService.generateToken(this.user).subscribe(function (response) {
            _this.sendlogin(response.token);
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                _this.showNotification('top', 'center', 'Completá los campos');
            }
        });
    };
    LoginComponent.prototype.sendlogin = function (token) {
        var _this = this;
        this._loginService.signup(token).subscribe(function (response) {
            var identity = response;
            if (identity.estado != "ERROR") {
                _this.identity = identity;
                localStorage.setItem('identity', JSON.stringify(identity));
                window.location.href = '';
            }
            else {
                _this.showNotification('top', 'center', identity.mensaje);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                _this.showNotification('top', 'center', 'Usuario o clave incorrecta');
            }
        });
    };
    LoginComponent.prototype.showNotification = function (from, align, text) {
        $.notify({
            icon: 'notifications',
            message: text
        }, {
            type: 'danger',
            timer: 5000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    LoginComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        body.classList.remove('off-canvas-sidebar');
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-cmp',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* LoginService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_routing__ = __webpack_require__("../../../../../src/app/pages/pages.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pricing_pricing_component__ = __webpack_require__("../../../../../src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lock_lock_component__ = __webpack_require__("../../../../../src/app/pages/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { MdIconModule, MdCardModule, MdInputModule, MdCheckboxModule, MdButtonModule } from '@angular/material';

// import { FlexLayoutModule } from '@angular/flex-layout';





var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__pages_routing__["a" /* PagesRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_7__lock_lock_component__["a" /* LockComponent */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pricing_pricing_component__ = __webpack_require__("../../../../../src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lock_lock_component__ = __webpack_require__("../../../../../src/app/pages/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");




var PagesRoutes = [
    {
        path: '',
        children: [{
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
            }, {
                path: 'lock',
                component: __WEBPACK_IMPORTED_MODULE_2__lock_lock_component__["a" /* LockComponent */]
            }, {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_0__register_register_component__["a" /* RegisterComponent */]
            }, {
                path: 'pricing',
                component: __WEBPACK_IMPORTED_MODULE_1__pricing_pricing_component__["a" /* PricingComponent */]
            }]
    }
];


/***/ }),

/***/ "../../../../../src/app/pages/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n  <div class=\"page-header pricing-page header-filter\" style=\"background-image: url('../../assets/img/bg-pricing.jpg'); background-size: cover; background-position: top center;\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 ml-auto mr-auto text-center\">\n          <h2 class=\"title\">Pick the best plan for you</h2>\n          <h5 class=\"description\">You have Free Unlimited Updates and Premium Support on each package.</h5>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"card card-pricing card-plain\">\n            <h6 class=\"card-category\"> Freelancer</h6>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-white \">\n                <i class=\"material-icons\">weekend</i>\n              </div>\n              <h3 class=\"card-title\">Free</h3>\n              <p class=\"card-description\">This is good if your company size is between 2 and 10 Persons.</p>\n            </div>\n            <div class=\"card-footer justify-content-center \">\n              <a href=\"#pablo\" class=\"btn btn-round btn-white\">Choose Plan</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"card card-pricing \">\n            <h6 class=\"card-category\"> Small Company</h6>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-rose \">\n                <i class=\"material-icons\">home</i>\n              </div>\n              <h3 class=\"card-title\">29$</h3>\n              <p class=\"card-description\">This is good if your company size is between 2 and 10 Persons.</p>\n            </div>\n            <div class=\"card-footer justify-content-center \">\n              <a href=\"#pablo\" class=\"btn btn-round btn-rose\">Choose Plan</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"card card-pricing card-plain\">\n            <h6 class=\"card-category\"> Medium Company</h6>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-white \">\n                <i class=\"material-icons\">business</i>\n              </div>\n              <h3 class=\"card-title\">69$</h3>\n              <p class=\"card-description\">This is good if your company size is between 11 and 99 Persons.</p>\n            </div>\n            <div class=\"card-footer justify-content-center \">\n              <a href=\"#pablo\" class=\"btn btn-round btn-white\">Choose Plan</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"card card-pricing card-plain\">\n            <h6 class=\"card-category\"> Extra Pack</h6>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-white \">\n                <i class=\"material-icons\">account_balance</i>\n              </div>\n              <h3 class=\"card-title\">159$</h3>\n              <p class=\"card-description\">This is good if your company size is 99+ Persons.</p>\n            </div>\n            <div class=\"card-footer justify-content-center \">\n              <a href=\"#pablo\" class=\"btn btn-round btn-white\">Choose Plan</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer \">\n      <div class=\"container\">\n        <nav class=\"pull-left\">\n          <ul>\n            <li>\n              <a href=\"https://www.creative-tim.com\">\n                Creative Tim\n              </a>\n            </li>\n            \n          </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n          &copy;\n          {{test | date: 'yyyy'}}, made with <i class=\"material-icons\">favorite</i> by\n          <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
        this.test = new Date();
    }
    PricingComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('pricing-page');
        body.classList.add('off-canvas-sidebar');
    };
    PricingComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('pricing-page');
        body.classList.remove('off-canvas-sidebar');
    };
    PricingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pricing-cmp',
            template: __webpack_require__("../../../../../src/app/pages/pricing/pricing.component.html")
        })
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"page-header register-page header-filter\" filter-color=\"black\" style=\"background-image: url('../../assets/img/register.jpg'); background-size: cover; background-position: top center;\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-10 ml-auto mr-auto\">\n          <div class=\"card card-signup\">\n            <h2 class=\"card-title text-center\">Register</h2>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-5 ml-auto\">\n                  <div class=\"info info-horizontal\">\n                    <div class=\"icon icon-rose\">\n                      <i class=\"material-icons\">timeline</i>\n                    </div>\n                    <div class=\"description\">\n                      <h4 class=\"info-title\">Marketing</h4>\n                      <p class=\"description\">\n                        We've created the marketing campaign of the website. It was a very interesting collaboration.\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"info info-horizontal\">\n                    <div class=\"icon icon-primary\">\n                      <i class=\"material-icons\">code</i>\n                    </div>\n                    <div class=\"description\">\n                      <h4 class=\"info-title\">Fully Coded in HTML5</h4>\n                      <p class=\"description\">\n                        We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"info info-horizontal\">\n                    <div class=\"icon icon-info\">\n                      <i class=\"material-icons\">group</i>\n                    </div>\n                    <div class=\"description\">\n                      <h4 class=\"info-title\">Built Audience</h4>\n                      <p class=\"description\">\n                        There is also a Fully Customizable CMS Admin Dashboard for this product.\n                      </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-5 mr-auto\">\n                  <div class=\"social text-center\">\n                    <button mat-raised-button class=\"btn btn-just-icon btn-round btn-twitter\">\n                      <i class=\"fa fa-twitter\"></i>\n                    </button>\n                    <button mat-raised-button class=\"btn btn-just-icon btn-round btn-dribbble\">\n                      <i class=\"fa fa-dribbble\"></i>\n                    </button>\n                    <button mat-raised-button class=\"btn btn-just-icon btn-round btn-facebook\">\n                      <i class=\"fa fa-facebook\"> </i>\n                    </button>\n                    <h4 class=\"mt-3\"> or be classical </h4>\n                  </div>\n                  <form class=\"form\" method=\"\" action=\"\">\n                    <div class=\"form-group has-default\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"material-icons\">face</i>\n                          </span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\">\n                      </div>\n                    </div>\n                    <div class=\"form-group has-default\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"material-icons\">mail</i>\n                          </span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Email...\">\n                      </div>\n                    </div>\n                    <div class=\"form-group has-default\">\n                      <div class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">\n                            <i class=\"material-icons\">lock_outline</i>\n                          </span>\n                        </div>\n                        <input type=\"password\" placeholder=\"Password...\" class=\"form-control\">\n                      </div>\n                    </div>\n                    <div class=\"form-check\">\n                      <label class=\"form-check-label\">\n                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                        <span class=\"form-check-sign\">\n                          <span class=\"check\"></span>\n                        </span>\n                        I agree to the\n                        <a href=\"#something\">terms and conditions</a>.\n                      </label>\n                    </div>\n                    <div class=\"text-center\">\n                      <a href=\"#pablo\" class=\"btn btn-primary btn-round mt-4\">Get Started</a>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer \">\n      <div class=\"container\">\n        <nav class=\"pull-left\">\n          <ul>\n            <li>\n              <a href=\"https://www.creative-tim.com\">\n                Creative Tim\n              </a>\n            </li>\n            <li>\n              <a href=\"http://presentation.creative-tim.com\">\n                About Us\n              </a>\n            </li>\n            <li>\n              <a href=\"http://blog.creative-tim.com\">\n                Blog\n              </a>\n            </li>\n            <li>\n              <a href=\"https://www.creative-tim.com/license\">\n                Licenses\n              </a>\n            </li>\n          </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n          &copy;\n        {{test | date: 'yyyy'}}, made with <i class=\"material-icons\">favorite</i> by\n          <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.test = new Date();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('register-page');
        body.classList.add('off-canvas-sidebar');
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('register-page');
        body.classList.remove('off-canvas-sidebar');
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-cmp',
            template: __webpack_require__("../../../../../src/app/pages/register/register.component.html")
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_global__ = __webpack_require__("../../../../../src/app/global/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_Api__ = __webpack_require__("../../../../../src/app/global/Api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
        this.auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MjQwNTk3NTYsInBhcyI6IkxJTHJUZnR3TC11ZkJITk4tbUlKZWpfUW1RPT0iLCJ1c3IiOiJkZXYifQ.H63e3TxsL5FCZsb0Rpayjjy4ueW2Gzwhw1L5iufk9Bw';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.url = __WEBPACK_IMPORTED_MODULE_3__global_global__["a" /* global */].url;
        this.api = __WEBPACK_IMPORTED_MODULE_4__global_Api__["a" /* api */].API_ClienteID;
    }
    LoginService.prototype.login = function (user) {
        var json = JSON.stringify(user);
        console.log(this.auth);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('authorization', this.auth);
        headers.append('API_ClienteID', this.api);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'autorizar', options)
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.test4 = function () {
        //const json = JSON.stringify();
        //const params = 'json=' + json;
        this.headers.set('Authorization', this.auth);
        return this._http.post(this.url + 'testPostHeader', { "api_clienteID": "yangee_desarrollo" }, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.generateToken = function (user) {
        var json = JSON.stringify(user);
        //const params = 'json=' + json;
        this.headers.set('Authorization', this.auth);
        return this._http.post(this.url + 'tokenCliente', json, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.signup = function (token) {
        console.log(token);
        var params = { "api_clienteID": "yangee_desarrollo" };
        this.headers.set('Authorization', token);
        return this._http.post(this.url + 'autorizar', { "api_clienteID": "app_desarrollo" }, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != 'undefined') {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    LoginService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        if (token != 'undefined') {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    LoginService.prototype.register = function (user_to_register) {
        var json = JSON.stringify(user_to_register);
        var params = 'json=' + json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + 'user/new', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.update_user = function (user_to_update) {
        var json = JSON.stringify(user_to_update);
        var params = 'json=' + json + '&authorization=' + this.getToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + 'user/edit', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map