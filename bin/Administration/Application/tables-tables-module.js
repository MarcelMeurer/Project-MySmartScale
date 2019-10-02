(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./src/app/pages/tables/smart-table/smart-table.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tables/smart-table/smart-table.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>\r\n    Logging <button nbButton size=\"xsmall\" (click)=\"onReLoadData()\"><i class=\"fa\"  aria-hidden=\"true\">&#xf021;</i></button>\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "./src/app/pages/tables/smart-table/smart-table.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tables/smart-table/smart-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: SmartTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartTableComponent", function() { return SmartTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _core_data_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/data/smart-table */ "./src/app/@core/data/smart-table.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmartTableComponent = /** @class */ (function () {
    function SmartTableComponent(service) {
        this.service = service;
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            actions: {
                add: false,
                edit: false,
                delete: false,
            },
            pager: {
                perPage: 50,
            },
            columns: {
                TimeUtc: {
                    title: 'Time Utc'
                },
                Tenant: {
                    title: 'Tenant',
                    type: 'strstringing',
                },
                Severity: {
                    title: 'Severity',
                    type: 'string',
                    filter: "select",
                }, ParentMethod: {
                    title: 'ParentMethod',
                    type: 'string',
                },
                Message: {
                    title: 'Message',
                    type: 'string',
                },
            },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"]();
        this.onReLoadData();
    }
    SmartTableComponent.prototype.onReLoadData = function () {
        var _this = this;
        console.log("Load log data");
        this.service.getData2().subscribe(function (data) {
            _this.source.load(data);
        });
    };
    SmartTableComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    SmartTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-smart-table',
            template: __webpack_require__(/*! ./smart-table.component.html */ "./src/app/pages/tables/smart-table/smart-table.component.html"),
            styles: ["\n    nb-card {\n      transform: translate3d(0, 0, 0);\n    }\n  "],
        }),
        __metadata("design:paramtypes", [_core_data_smart_table__WEBPACK_IMPORTED_MODULE_2__["SmartTableData"]])
    ], SmartTableComponent);
    return SmartTableComponent;
}());



/***/ }),

/***/ "./src/app/pages/tables/tables-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/tables/tables-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TablesRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function() { return TablesRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tables.component */ "./src/app/pages/tables/tables.component.ts");
/* harmony import */ var _smart_table_smart_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./smart-table/smart-table.component */ "./src/app/pages/tables/smart-table/smart-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _tables_component__WEBPACK_IMPORTED_MODULE_2__["TablesComponent"],
        children: [{
                path: 'smart-table',
                component: _smart_table_smart_table_component__WEBPACK_IMPORTED_MODULE_3__["SmartTableComponent"],
            }],
    }];
var TablesRoutingModule = /** @class */ (function () {
    function TablesRoutingModule() {
    }
    TablesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], TablesRoutingModule);
    return TablesRoutingModule;
}());

var routedComponents = [
    _tables_component__WEBPACK_IMPORTED_MODULE_2__["TablesComponent"],
    _smart_table_smart_table_component__WEBPACK_IMPORTED_MODULE_3__["SmartTableComponent"],
];


/***/ }),

/***/ "./src/app/pages/tables/tables.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tables/tables.component.ts ***!
  \**************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-tables',
            template: "<router-outlet></router-outlet>",
        })
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/pages/tables/tables.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tables/tables.module.ts ***!
  \***********************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables-routing.module */ "./src/app/pages/tables/tables-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
                _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["TablesRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["Ng2SmartTableModule"],
            ],
            declarations: _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["routedComponents"].slice(),
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ })

}]);
//# sourceMappingURL=tables-tables-module.js.map