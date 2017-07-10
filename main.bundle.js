webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_component__ = __webpack_require__("../../../../../src/app/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_photo_list_component__ = __webpack_require__("../../../../../src/app/components/photo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_side_panel_component__ = __webpack_require__("../../../../../src/app/components/side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_nav_bar_component__ = __webpack_require__("../../../../../src/app/components/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_component__ = __webpack_require__("../../../../../src/app/components/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_component__ = __webpack_require__("../../../../../src/app/components/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_my_album_component__ = __webpack_require__("../../../../../src/app/components/my-album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_add_photo_component__ = __webpack_require__("../../../../../src/app/components/add-photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_image_comments_component__ = __webpack_require__("../../../../../src/app/components/image-comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_image_detail_component__ = __webpack_require__("../../../../../src/app/components/image-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_photo_row_component__ = __webpack_require__("../../../../../src/app/components/photo-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_photo_service__ = __webpack_require__("../../../../../src/app/services/photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_add_photo_service__ = __webpack_require__("../../../../../src/app/services/add-photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_upload_photo_service__ = __webpack_require__("../../../../../src/app/services/upload-photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_comment_service__ = __webpack_require__("../../../../../src/app/services/comment.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_photo_list_component__["a" /* PhotoList */],
            __WEBPACK_IMPORTED_MODULE_8__components_side_panel_component__["a" /* SidePanel */],
            __WEBPACK_IMPORTED_MODULE_9__components_nav_bar_component__["a" /* NavBar */],
            __WEBPACK_IMPORTED_MODULE_10__components_register_component__["a" /* Register */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_component__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_12__components_my_album_component__["a" /* MyAlbum */],
            __WEBPACK_IMPORTED_MODULE_13__components_add_photo_component__["a" /* AddPhoto */],
            __WEBPACK_IMPORTED_MODULE_14__components_image_comments_component__["a" /* ImageComments */],
            __WEBPACK_IMPORTED_MODULE_15__components_image_detail_component__["a" /* ImageDetail */],
            __WEBPACK_IMPORTED_MODULE_16__components_photo_row_component__["a" /* PhotoRow */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__services_photo_service__["a" /* PhotoService */],
            __WEBPACK_IMPORTED_MODULE_18__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_19__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_20__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_21__services_add_photo_service__["a" /* AddPhotoService */],
            __WEBPACK_IMPORTED_MODULE_22__services_upload_photo_service__["a" /* UploadPhotoService */],
            __WEBPACK_IMPORTED_MODULE_23__services_comment_service__["a" /* CommentService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_component__ = __webpack_require__("../../../../../src/app/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_register_component__ = __webpack_require__("../../../../../src/app/components/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_component__ = __webpack_require__("../../../../../src/app/components/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_my_album_component__ = __webpack_require__("../../../../../src/app/components/my-album.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_add_photo_component__ = __webpack_require__("../../../../../src/app/components/add-photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_image_detail_component__ = __webpack_require__("../../../../../src/app/components/image-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });







var appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_1__components_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_2__components_register_component__["a" /* Register */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__components_login_component__["a" /* Login */]
    },
    {
        path: 'my-album',
        component: __WEBPACK_IMPORTED_MODULE_4__components_my_album_component__["a" /* MyAlbum */]
    },
    {
        path: 'add-photo',
        component: __WEBPACK_IMPORTED_MODULE_5__components_add_photo_component__["a" /* AddPhoto */]
    },
    {
        path: 'image-detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__components_image_detail_component__["a" /* ImageDetail */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-photo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<form *ngIf=\"!photoAdded\" class=\"ui form\" (ngSubmit)=\"onSubmit()\" #addPhotoForm = \"ngForm\">\n  <h2 class=\"ui dividing header\">Add Your Photo</h2>\n  <div class=\"field\">\n    <div class=\"two fields\">\n      <div class=\"field\">\n        <label>* Photo Name</label>\n      <input type=\"text\" name=\"photoName\" placeholder=\"Photo Name\" [(ngModel)]=\"newPhoto.photoName\" ngControl=\"photoName\" required>\n      </div>\n      <div class=\"field\">\n        <label>* Photo Title</label>\n        <input type=\"text\" name=\"title\" placeholder=\"Photo Title\" [(ngModel)]=\"newPhoto.title\" ngControl=\"title\" required>\n      </div>\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Description</label>\n      <div class=\"field\">\n        <input type=\"text\" name=\"Description\" placeholder=\"Description\" [(ngModel)]=\"newPhoto.description\" ngControl=\"description\">\n      </div>\n  </div>\n\n  <div class=\"field\">\n  <label>Upload Photo</label>\n  <input type=\"file\" (change)=\"uploadPhotoService.fileChangeEvent($event)\" />\n  <button type=\"button\" (click)=\"uploadPhotoService.upload()\" class=\"ui mini button\">Upload</button>\n\n  </div>\n  <hr>\n  <br>\n  <button type=\"submit\" class=\"ui button\" [disabled]=\"!addPhotoForm.form.valid\" >Submit</button>\n</form>\n\n<div *ngIf=\"photoAdded\">\n  <h1>Add Photo Success!</h1>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/add-photo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_photo__ = __webpack_require__("../../../../../src/app/models/photo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_upload_photo_service__ = __webpack_require__("../../../../../src/app/services/upload-photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_add_photo_service__ = __webpack_require__("../../../../../src/app/services/add-photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPhoto; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPhoto = (function () {
    function AddPhoto(uploadPhotoService, addPhotoService, userService) {
        this.uploadPhotoService = uploadPhotoService;
        this.addPhotoService = addPhotoService;
        this.userService = userService;
        this.newPhoto = new __WEBPACK_IMPORTED_MODULE_1__models_photo__["a" /* Photo */]();
        this.photoAdded = false;
    }
    AddPhoto.prototype.onSubmit = function () {
        var _this = this;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            console.log(_this.user);
            _this.newPhoto.user = _this.user;
            _this.addPhotoService.sendPhoto(_this.newPhoto)
                .subscribe(function (data) {
                _this.photoAdded = true;
                _this.newPhoto = new __WEBPACK_IMPORTED_MODULE_1__models_photo__["a" /* Photo */]();
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    return AddPhoto;
}());
AddPhoto = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'add-photo',
        template: __webpack_require__("../../../../../src/app/components/add-photo.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_upload_photo_service__["a" /* UploadPhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_upload_photo_service__["a" /* UploadPhotoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_add_photo_service__["a" /* AddPhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_add_photo_service__["a" /* AddPhotoService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AddPhoto);

var _a, _b, _c;
//# sourceMappingURL=add-photo.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"ui grid\">\n    <div class=\"twelve wide column\">\n      <photo-list></photo-list>\n    </div>\n    <div class=\"four wide column\">\n      <side-panel></side-panel>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/components/home.component.html")
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/image-comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui text container\">\n  <h3>{{user.userName}}</h3>\n  <h4>{{photo.title}}</h4>\n  <p>{{photo.description}}</p>\n\n  <div class=\"ui comments\">\n    <h3 class=\"ui dividing header\">Comments</h3>\n\n    <div class=\"comment\" *ngFor=\"let comment of photo.commentList\">\n      <div class=\"ui grid\">\n        <div class=\"two wide column\">\n          <img src=\"resources/static/pic/avatar1.png\" class=\"ui image tiny\">\n          <span class=\"author\">{{comment.userName}}</span>\n        </div>\n        <div class=\"fourteen wide column\">\n          <div class=\"ui blue message\">\n            <div class=\"content\">\n              <div class=\"text\">\n                {{comment.content}}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br>\n    <div class=\"ui grid\">\n      <div class=\"two wide column\">\n        <img src=\"resources/static/pic/avatar1.png\" class=\"ui image tiny\">\n        <span class=\"author\">{{user.userName}}</span>\n      </div>\n      <div class=\"fourteen wide column\">\n        <form class=\"ui form\" (ngSubmit)=\"onSubmit()\" #commentForm=\"ngForm\">\n          <div class=\"field\">\n            <textarea #words rows=\"3\" placeholder=\"Add a comment\" required [(ngModel)]=\"newComment.content\" name=\"words\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"ui blue button\">Comment</button>\n        </form>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/image-comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_photo__ = __webpack_require__("../../../../../src/app/models/photo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_comment__ = __webpack_require__("../../../../../src/app/models/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_comment_service__ = __webpack_require__("../../../../../src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_photo_service__ = __webpack_require__("../../../../../src/app/services/photo.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComments; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ImageComments = (function () {
    function ImageComments(userService, commentService, photoService) {
        var _this = this;
        this.userService = userService;
        this.commentService = commentService;
        this.photoService = photoService;
        this.myLocalStorage = localStorage;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]();
        this.newComment = new __WEBPACK_IMPORTED_MODULE_4__models_comment__["a" /* Comment */]();
        console.log(this.photo);
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        }, function (error) { return console.log(error); });
    }
    ImageComments.prototype.onInit = function () {
    };
    ImageComments.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.photo);
        console.log(this.photo.commentList);
        this.newComment.photo = this.photo;
        this.newComment.userName = this.user.userName;
        this.newComment.photoId = this.photo.photoId;
        this.commentService.addComment(this.newComment).subscribe(function (photo) { return _this.photoService.getPhotoById(_this.photo.photoId).subscribe(function (photo) { return _this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body); }, function (error) { return console.log(error); }); }
        // error => console.log(error)
        );
        // this.photo.commentList.push(this.newComment);
        this.newComment = new __WEBPACK_IMPORTED_MODULE_4__models_comment__["a" /* Comment */]();
    };
    return ImageComments;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('photo'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_photo__["a" /* Photo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_photo__["a" /* Photo */]) === "function" && _a || Object)
], ImageComments.prototype, "photo", void 0);
ImageComments = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'image-comments',
        template: __webpack_require__("../../../../../src/app/components/image-comments.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_comment_service__["a" /* CommentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_photo_service__["a" /* PhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_photo_service__["a" /* PhotoService */]) === "function" && _d || Object])
], ImageComments);

var _a, _b, _c, _d;
//# sourceMappingURL=image-comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/image-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pusher\">\n  <div class=\"ui inverted vertical masthead segment\">\n    <div class=\"ui text container\">\n\n      <div class=\"center aligned\">\n        <img src=\"http://localhost:8080/images/{{photo.imageName}}\" class=\"ui image massive centered\" />\n      </div>\n      <br>\n      <div class=\"ui grid\">\n      <div class=\"left floated six wide column \" style=\"cursor: pointer; color: gray;\">\n        <i class=\"long arrow left icon\"></i><span (click)=\"goBack()\">Back</span>\n      </div>\n      <div class=\"right floated right aligned six wide column\" style=\"color: gray;\">\n        <i class=\"thumbs outline up icon\"></i> {{photo.likes}}\n        &nbsp;&nbsp;<a style=\"cursor: pointer\" (click)=\"likeDisplay()\">{{like}}</a>\n      </div>\n    </div>\n    </div>\n  </div>\n</div>\n\n<div>\n  <image-comments [photo]=\"photo\"></image-comments>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/image-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_photo__ = __webpack_require__("../../../../../src/app/models/photo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_photo_service__ = __webpack_require__("../../../../../src/app/services/photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDetail; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageDetail = (function () {
    function ImageDetail(photoService, userService, route) {
        var _this = this;
        this.photoService = photoService;
        this.userService = userService;
        this.route = route;
        this.photo = new __WEBPACK_IMPORTED_MODULE_1__models_photo__["a" /* Photo */]();
        this.route.params.forEach(function (params) {
            _this.photoId = Number.parseInt(params['id']);
        });
        this.photoService.getPhotoById(this.photoId).subscribe(function (photo) {
            _this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body);
            _this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
                _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
                if (_this.user.likedPhotoList.filter(function (photo) { return photo.photoId == _this.photo.photoId; })[0]) {
                    _this.like = "Unlike";
                }
                else {
                    _this.like = "Like";
                }
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    }
    ImageDetail.prototype.goBack = function () {
        window.history.back();
    };
    ImageDetail.prototype.ngOnInit = function () {
    };
    ImageDetail.prototype.likeDisplay = function () {
        if (this.like == "Like") {
            this.like = "Unlike";
            this.user.likedPhotoList.push(this.photo);
            this.photo.likes += 1;
            this.userService.updateUser(this.user).subscribe();
            this.photoService.updatePhoto(this.photo).subscribe();
        }
        else {
            this.like = "Like";
            // var index = this.user.likedPhotoList.indexOf(this.photo, 0);
            for (var i = 0; i < this.user.likedPhotoList.length; i++) {
                if (this.user.likedPhotoList[i].photoId == this.photo.photoId) {
                    this.user.likedPhotoList.splice(i, 1);
                }
            }
            // console.log(index);
            // if (index > -1) {
            //   this.user.likedPhotoList.splice(index, 1);
            // }
            this.photo.likes -= 1;
            this.userService.updateUser(this.user).subscribe();
            this.photoService.updatePhoto(this.photo).subscribe();
        }
    };
    return ImageDetail;
}());
ImageDetail = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'image-detail',
        template: __webpack_require__("../../../../../src/app/components/image-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_photo_service__["a" /* PhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_photo_service__["a" /* PhotoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], ImageDetail);

var _a, _b, _c;
//# sourceMappingURL=image-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form (ngSubmit)=\"onSubmit()\" class=\"ui form\" [hidden]=\"loginService.checkLogin()\">\n    <div class=\"field\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" required [(ngModel)]=\"model.username\" ngControl=\"username\" placeholder=\"Username\" name=\"username\" required><br>\n    </div>\n\n    <div class=\"field\">\n      <label for=\"password\"></label>\n      <input type=\"password\" required [(ngModel)]=\"model.password\" ngControl=\"password\" placeholder=\"password\" name=\"password\" required>\n    </div>\n\n    <button type=\"submit\" class=\"ui button\">Submit</button>\n  </form>\n\n  <div [hidden]=\"!loginService.checkLogin()\">\n    <h3>Logged In Successfully!</h3>\n    <h2>Welcome back, {{currentUserName}}!</h2>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Login = (function () {
    function Login(loginService) {
        this.loginService = loginService;
        this.model = { 'username': '', 'password': '' };
        this.currentUserName = localStorage.getItem("currentUserName");
    }
    Login.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.sendCredential(this.model).subscribe(function (data) {
            localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
            _this.loginService.sendToken(localStorage.getItem("token")).subscribe(function (data) {
                _this.currentUserName = _this.model.username;
                localStorage.setItem("currentUserName", _this.model.username);
                _this.model.username = '';
                _this.model.password = '';
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    return Login;
}());
Login = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/components/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], Login);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/my-album.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class='photo-list'>\n    <div clas=\"ui grid\">\n       <div class=\"ui horizontal segments\" >\n         <span *ngFor=\"let photo of photos\" >\n           <div class=\"ui segment\">\n             <img src='http://localhost:8080/images/{{photo.imageName}}' class='ui medium image' (click)=\"onSelect(photo)\" style=\"cursor: pointer\">\n             <div class=\"ui grid\">\n                 <div class=\"twelve wide column left aligned\">\n                     <strong>{{photo.title}}</strong><br/>\n                 </div>\n                 <div class=\"four wide column right aligned\">\n                   {{photo.likes}} Likes\n                 </div>\n             </div>\n           </div>\n         </span>\n        </div>\n      </div>\n\n      <a class=\"ui button\" routerLink=\"/add-photo\" routerLinkActive=\"active\">Add Photo</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/my-album.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_photo_service__ = __webpack_require__("../../../../../src/app/services/photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAlbum; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyAlbum = (function () {
    function MyAlbum(photoService, router, userService) {
        var _this = this;
        this.photoService = photoService;
        this.router = router;
        this.userService = userService;
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(function (user) {
            _this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            console.log(_this.user);
            _this.photoService.getPhotosByUser(_this.user).subscribe(function (photos) {
                console.log(_this.photos = JSON.parse(JSON.parse(JSON.stringify(user))._body).photoList);
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    }
    MyAlbum.prototype.onSelect = function (photo) {
        this.selectedPhoto = photo;
        this.router.navigate(['/image-detail', this.selectedPhoto.photoId]);
    };
    return MyAlbum;
}());
MyAlbum = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'my-album',
        template: __webpack_require__("../../../../../src/app/components/my-album.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_photo_service__["a" /* PhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_photo_service__["a" /* PhotoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], MyAlbum);

var _a, _b, _c;
//# sourceMappingURL=my-album.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui inverted fixed menu\">\n  <div class=\"ui secondary pointing menu\">\n    <a class=\"item\" routerLink=\"/home\" routerLinkActive=\"active\">\n      <img src=\"assets/static/pic/logo.png\" />\n    </a>\n    <a class=\"item\" routerLink=\"/home\" routerLinkActive=\"active\">\n      <h2>Photable</h2>\n    </a>\n    <a class=\"item\" routerLink=\"/home\" routerLinkActive=\"active\">\n      Home\n    </a>\n    <a class=\"item\" routerLink=\"/my-album\" routerLinkActive=\"active\">\n      My Album\n    </a>\n  </div>\n  <div class=\"right menu\">\n    <a *ngIf=\"!loginService.checkLogin()\" class=\"item\" routerLink=\"/register\" routerLinkActive=\"active\">\n      Register\n    </a>\n    <a class=\"item\" routerLink=\"/login\" routerLinkActive=\"active\" (click)=\"onClick()\">\n      {{loginService.checkLogin()? 'Logout' : 'Login'}}\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("../../../../../src/app/services/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBar = (function () {
    function NavBar(loginService) {
        this.loginService = loginService;
        this.myLocalStorage = localStorage;
    }
    NavBar.prototype.onClick = function () {
        if (this.loginService.checkLogin()) {
            this.loginService.logout();
        }
    };
    return NavBar;
}());
NavBar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'nav-bar',
        template: __webpack_require__("../../../../../src/app/components/nav-bar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], NavBar);

var _a;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/photo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"photo-list\">\n  <!-- <div *ngFor=\"#user of users\"> -->\n    <div *ngFor=\"let photo of photos\">\n      <div class=\"ui grid\">\n        \n        <div class=\"two wide column\">\n        </div>\n\n        <div class=\"fourteen wide column\">\n          <div class=\"ui raised segment\">\n            \n            <img src=\"http://localhost:8080/images/{{photo.imageName}}\" class=\"ui image big centered\" (click)=\"onSelect(photo)\" style=\"cursor:pointer\">\n\n            <div class=\"ui center aligned grid\">\n              <div class=\"column twelve wide\">\n                <div class=\"ui grid\">\n                  <div class=\"four column row\">\n                    <div class=\"left floated column left aligned\">\n                      <strong>{{photo.title}}</strong><br/>\n                      {{photo.description}}\n                    </div>\n                    <div class=\"right floated column right aligned\">\n                      {{photo.likes}} &nbsp;Likes\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/photo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_photo_service__ = __webpack_require__("../../../../../src/app/services/photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoList; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotoList = (function () {
    function PhotoList(photoService, router) {
        var _this = this;
        this.photoService = photoService;
        this.router = router;
        this.photoService.getPhotos().subscribe(function (data) { return console.log(_this.photos = JSON.parse(JSON.parse(JSON.stringify(data))._body)); }, function (error) { return console.log(error); });
    }
    PhotoList.prototype.onSelect = function (photo) {
        this.selectedPhoto = photo;
        this.router.navigate(['/image-detail', this.selectedPhoto.photoId]);
    };
    return PhotoList;
}());
PhotoList = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'photo-list',
        template: __webpack_require__("../../../../../src/app/components/photo-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_photo_service__["a" /* PhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_photo_service__["a" /* PhotoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], PhotoList);

var _a, _b;
//# sourceMappingURL=photo-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/photo-row.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let photo of photoListRanked\">\n  <div class=\"ui grid\">\n    <div class=\"ten wide column\">\n      <img src=\"http://localhost:8080/images/{{photo.imageName}}\" class=\"ui image small centered\" >\n    </div>\n    <div class=\"six wide column\">\n      <br />\n      <p class=\"ui centered\">{{ photo.likes }} likes</p>\n      <p class=\"ui\">{{ photo.title }}</p>\n    </div>\n  </div>\n  <div class=\"ui divider\">\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/photo-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_photo_service__ = __webpack_require__("../../../../../src/app/services/photo.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoRow; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoRow = (function () {
    function PhotoRow(photoService) {
        var _this = this;
        this.photoService = photoService;
        this.photoService.getPhotos().subscribe(function (data) {
            _this.photoList = JSON.parse(JSON.parse(JSON.stringify(data))._body);
            _this.photoListSorted = _this.photoList.sort(function (a, b) { return b.likes - a.likes; });
            _this.photoListRanked = [];
            for (var index in _this.photoListSorted) {
                if (Number(index) < 3) {
                    _this.photoListRanked.push(_this.photoListSorted[index]);
                }
                else {
                    break;
                }
            }
        }, function (error) { return console.log(error); });
    }
    return PhotoRow;
}());
PhotoRow = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'photo-row',
        template: __webpack_require__("../../../../../src/app/components/photo-row.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_photo_service__["a" /* PhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_photo_service__["a" /* PhotoService */]) === "function" && _a || Object])
], PhotoRow);

var _a;
//# sourceMappingURL=photo-row.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form *ngIf=\"!registered\" class=\"ui form\" (ngSubmit)=\"onSubmit()\" #registerForm = \"ngForm\">\n    <h2 class=\"ui dividing header\">Register User</h2>\n    <div class=\"field\">\n      <label>* Name</label>\n      <div class=\"two fields\">\n        <div class=\"field\">\n          <input type=\"text\" name=\"firstName\" placeholder=\"First Name\" [(ngModel)]=\"newUser.firstName\" ngControl=\"firstName\" required>\n        </div>\n        <div class=\"field\">\n          <input type=\"text\" name=\"lastName\" placeholder=\"Last Name\" [(ngModel)]=\"newUser.lastName\" required>\n        </div>\n      </div>\n    </div>\n    <div class=\"field\">\n      <label>* Username/Password</label>\n      <div class=\"three fields\">\n        <div class=\"field\">\n          <input type=\"text\" name=\"userName\" placeholder=\"User Name\" [(ngModel)]=\"newUser.userName\" ngControl=\"userName\" required>\n        </div>\n        <div class=\"field\">\n          <input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"newUser.password\" ngControl=\"password1\" required>\n        </div>\n        <div class=\"field\">\n          <input type=\"password\" name=\"password\" placeholder=\"Password Again\" ngControl=\"password2\" required>\n        </div>\n      </div>\n    </div>\n\n    <button type=\"submit\" class=\"ui button\" [disabled]=\"!registerForm.form.valid\">Register</button>\n  </form>\n\n  <div *ngIf=\"registered\">\n    <h1>Register Success!</h1>    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_User__ = __webpack_require__("../../../../../src/app/models/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service__ = __webpack_require__("../../../../../src/app/services/register.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Register = (function () {
    function Register(registerService) {
        this.registerService = registerService;
        this.newUser = new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */]();
        this.registered = false;
    }
    Register.prototype.onSubmit = function () {
        var _this = this;
        console.log("submit test");
        this.registerService.sendUser(this.newUser)
            .subscribe(function (data) {
            _this.registered = true;
            _this.newUser = new __WEBPACK_IMPORTED_MODULE_1__models_User__["a" /* User */]();
        }, function (error) { return console.log(error); });
    };
    return Register;
}());
Register = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'register',
        template: __webpack_require__("../../../../../src/app/components/register.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_register_service__["a" /* RegisterService */]) === "function" && _a || Object])
], Register);

var _a;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/side-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h4>Photo Rankings</h4>\n  <div class=\"ui divider\">\n    <photo-row></photo-row>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidePanel; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidePanel = (function () {
    function SidePanel() {
    }
    return SidePanel;
}());
SidePanel = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'side-panel',
        template: __webpack_require__("../../../../../src/app/components/side-panel.component.html")
    })
], SidePanel);

//# sourceMappingURL=side-panel.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/app/models/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = (function () {
    function Comment() {
    }
    return Comment;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ "../../../../../src/app/models/photo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Photo; });
var Photo = (function () {
    function Photo() {
    }
    return Photo;
}());

//# sourceMappingURL=photo.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/services/add-photo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPhotoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddPhotoService = (function () {
    function AddPhotoService(http) {
        this.http = http;
    }
    AddPhotoService.prototype.sendPhoto = function (photo) {
        var url = "http://localhost:8080/rest/photo/add";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        console.log(url);
        return this.http.post(url, JSON.stringify(photo), { headers: headers1 });
    };
    return AddPhotoService;
}());
AddPhotoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AddPhotoService);

var _a;
//# sourceMappingURL=add-photo.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.addComment = function (comment) {
        var tokenUrl1 = "http://localhost:8080/rest/comment/add";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        console.log(JSON.stringify(comment));
        return this.http.post(tokenUrl1, JSON.stringify(comment), { headers: headers1 });
    };
    return CommentService;
}());
CommentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CommentService);

var _a;
//# sourceMappingURL=comment.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.sendCredential = function (model) {
        var tokenUrl1 = "http://localhost:8080/user/login";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(tokenUrl1, JSON.stringify(model), { headers: headers1 });
    };
    LoginService.prototype.sendToken = function (token) {
        var tokenUrl2 = "http://localhost:8080/rest/user/users";
        console.log('Bearer ' + token);
        var getHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + token });
        return this.http.get(tokenUrl2, { headers: getHeaders });
    };
    LoginService.prototype.logout = function () {
        localStorage.setItem("token", "");
        localStorage.setItem("currentUserName", "");
        alert("You just logged out.");
    };
    LoginService.prototype.checkLogin = function () {
        if (localStorage.getItem("currentUserName") != null && localStorage.getItem("currentUserName") != '' && localStorage.getItem("token") != null && localStorage.getItem("token") != '') {
            //console.log(localStorage.getItem("currentUserName"));
            //console.log(localStorage.getItem("token"));
            return true;
        }
        else {
            return false;
        }
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/photo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoService = (function () {
    function PhotoService(http) {
        this.http = http;
    }
    PhotoService.prototype.getPhotos = function () {
        var url = "http://localhost:8080/photo/allPhotos";
        return this.http.get(url);
    };
    PhotoService.prototype.getPhotoById = function (photoId) {
        var tokenUrl1 = "http://localhost:8080/rest/photo/photoId";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(photoId), { headers: headers1 });
    };
    PhotoService.prototype.getPhotosByUser = function (user) {
        var tokenUrl1 = "http://localhost:8080/rest/photo/user";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(user), { headers: headers1 });
    };
    PhotoService.prototype.updatePhoto = function (photo) {
        var tokenUrl1 = "http://localhost:8080/rest/photo/update";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(photo), { headers: headers1 });
    };
    return PhotoService;
}());
PhotoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], PhotoService);

var _a;
//# sourceMappingURL=photo.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/register.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.sendUser = function (user) {
        var url = "http://localhost:8080/user/register";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(url, JSON.stringify(user), { headers: headers1 });
    };
    return RegisterService;
}());
RegisterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], RegisterService);

var _a;
//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/upload-photo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPhotoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadPhotoService = (function () {
    function UploadPhotoService() {
        this.filesToUpload = [];
    }
    UploadPhotoService.prototype.upload = function () {
        this.makeFileRequest("http://localhost:8080/rest/photo/upload", [], this.filesToUpload).then(function (result) {
            console.log(result);
        }, function (error) {
            console.error(error);
        });
    };
    UploadPhotoService.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    UploadPhotoService.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        alert("Upload successful!");
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));
            xhr.send(formData);
        });
    };
    return UploadPhotoService;
}());
UploadPhotoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UploadPhotoService);

//# sourceMappingURL=upload-photo.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
    };
    UserService.prototype.getUserById = function (id) {
    };
    UserService.prototype.getUserByName = function (username) {
        var tokenUrl = "http://localhost:8080/rest/user/userName";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl, username, { headers: headers });
    };
    UserService.prototype.updateUser = function (user) {
        var tokenUrl1 = "http://localhost:8080/rest/user/update";
        var headers1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token") });
        return this.http.post(tokenUrl1, JSON.stringify(user), { headers: headers1 });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map