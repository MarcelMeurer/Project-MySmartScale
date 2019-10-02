(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logs-log-module"],{

/***/ "./node_modules/@nebular/moment/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@nebular/moment/index.js ***!
  \***********************************************/
/*! exports provided: NbMomentDateService, NbMomentDateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_moment_date_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/moment-date.service */ "./node_modules/@nebular/moment/services/moment-date.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbMomentDateService", function() { return _services_moment_date_service__WEBPACK_IMPORTED_MODULE_0__["NbMomentDateService"]; });

/* harmony import */ var _moment_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moment.module */ "./node_modules/@nebular/moment/moment.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NbMomentDateModule", function() { return _moment_module__WEBPACK_IMPORTED_MODULE_1__["NbMomentDateModule"]; });

/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@nebular/moment/moment.module.js":
/*!*******************************************************!*\
  !*** ./node_modules/@nebular/moment/moment.module.js ***!
  \*******************************************************/
/*! exports provided: NbMomentDateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbMomentDateModule", function() { return NbMomentDateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _services_moment_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/moment-date.service */ "./node_modules/@nebular/moment/services/moment-date.service.js");
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NbMomentDateModule = /** @class */ (function () {
    function NbMomentDateModule() {
    }
    NbMomentDateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [{ provide: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDateService"], useClass: _services_moment_date_service__WEBPACK_IMPORTED_MODULE_2__["NbMomentDateService"] }],
        })
    ], NbMomentDateModule);
    return NbMomentDateModule;
}());

//# sourceMappingURL=moment.module.js.map

/***/ }),

/***/ "./node_modules/@nebular/moment/services/moment-date.service.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@nebular/moment/services/moment-date.service.js ***!
  \**********************************************************************/
/*! exports provided: NbMomentDateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NbMomentDateService", function() { return NbMomentDateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




// @ts-ignore

var moment = moment__WEBPACK_IMPORTED_MODULE_3___default.a || moment__WEBPACK_IMPORTED_MODULE_3__;
var NbMomentDateService = /** @class */ (function (_super) {
    __extends(NbMomentDateService, _super);
    function NbMomentDateService(locale) {
        var _this = _super.call(this) || this;
        _this.setLocale(locale);
        return _this;
    }
    NbMomentDateService.prototype.setLocale = function (locale) {
        _super.prototype.setLocale.call(this, locale);
        this.setMomentLocaleData(locale);
    };
    NbMomentDateService.prototype.addDay = function (date, days) {
        return this.clone(date).add({ days: days });
    };
    NbMomentDateService.prototype.addMonth = function (date, months) {
        return this.clone(date).add({ months: months });
    };
    NbMomentDateService.prototype.addYear = function (date, years) {
        return this.clone(date).add({ years: years });
    };
    NbMomentDateService.prototype.clone = function (date) {
        return date.clone().locale(this.locale);
    };
    NbMomentDateService.prototype.compareDates = function (date1, date2) {
        return this.getYear(date1) - this.getYear(date2) ||
            this.getMonth(date1) - this.getMonth(date2) ||
            this.getDate(date1) - this.getDate(date2);
    };
    NbMomentDateService.prototype.createDate = function (year, month, date) {
        return moment([year, month, date]);
    };
    NbMomentDateService.prototype.format = function (date, format) {
        if (date) {
            return date.format(format || this.localeData.defaultFormat);
        }
        return '';
    };
    NbMomentDateService.prototype.getDate = function (date) {
        return this.clone(date).date();
    };
    NbMomentDateService.prototype.getDayOfWeek = function (date) {
        return this.clone(date).day();
    };
    NbMomentDateService.prototype.getDayOfWeekNames = function (style) {
        if (style === void 0) { style = _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Narrow; }
        return this.localeData.days[style];
    };
    NbMomentDateService.prototype.getFirstDayOfWeek = function () {
        return this.localeData.firstDayOfWeek;
    };
    NbMomentDateService.prototype.getMonth = function (date) {
        return this.clone(date).month();
    };
    NbMomentDateService.prototype.getMonthEnd = function (date) {
        return this.clone(date).endOf('month');
    };
    NbMomentDateService.prototype.getMonthName = function (date, style) {
        if (style === void 0) { style = _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Abbreviated; }
        var month = this.getMonth(date);
        return this.getMonthNameByIndex(month, style);
    };
    NbMomentDateService.prototype.getMonthNameByIndex = function (month, style) {
        if (style === void 0) { style = _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Abbreviated; }
        return this.localeData.months[style][month];
    };
    NbMomentDateService.prototype.getMonthStart = function (date) {
        return this.clone(date).startOf('month');
    };
    NbMomentDateService.prototype.getNumberOfDaysInMonth = function (date) {
        return this.clone(date).daysInMonth();
    };
    NbMomentDateService.prototype.getYear = function (date) {
        return this.clone(date).year();
    };
    NbMomentDateService.prototype.getYearEnd = function (date) {
        return this.clone(date).endOf('year');
    };
    NbMomentDateService.prototype.getYearStart = function (date) {
        return this.clone(date).startOf('year');
    };
    NbMomentDateService.prototype.isSameDay = function (date1, date2) {
        return this.isSameMonth(date1, date2) && this.getDate(date1) === this.getDate(date2);
    };
    NbMomentDateService.prototype.isSameMonth = function (date1, date2) {
        return this.isSameYear(date1, date2) && this.getMonth(date1) === this.getMonth(date2);
    };
    NbMomentDateService.prototype.isSameYear = function (date1, date2) {
        return this.getYear(date1) === this.getYear(date2);
    };
    NbMomentDateService.prototype.isValidDateString = function (date, format) {
        return moment(date, format).isValid();
    };
    NbMomentDateService.prototype.parse = function (date, format) {
        return moment(date, format);
    };
    NbMomentDateService.prototype.today = function () {
        return moment();
    };
    NbMomentDateService.prototype.getId = function () {
        return 'moment';
    };
    NbMomentDateService.prototype.setMomentLocaleData = function (locale) {
        var _a, _b;
        var momentLocaleData = moment.localeData(locale);
        this.localeData = {
            firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
            defaultFormat: momentLocaleData.longDateFormat('L'),
            months: (_a = {},
                _a[_angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Abbreviated] = momentLocaleData.monthsShort(),
                _a[_angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Wide] = momentLocaleData.months(),
                _a),
            days: (_b = {},
                _b[_angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Wide] = momentLocaleData.weekdays(),
                _b[_angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Short] = momentLocaleData.weekdaysShort(),
                _b[_angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Narrow] = momentLocaleData.weekdaysMin(),
                _b),
        };
    };
    NbMomentDateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __metadata("design:paramtypes", [String])
    ], NbMomentDateService);
    return NbMomentDateService;
}(_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDateService"]));

//# sourceMappingURL=moment-date.service.js.map

/***/ }),

/***/ "./src/app/@core/data-services/log-table.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/@core/data-services/log-table.service.ts ***!
  \**********************************************************/
/*! exports provided: LogTableDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogTableDataService", function() { return LogTableDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogTableDataService = /** @class */ (function () {
    function LogTableDataService(http) {
        this.http = http;
        console.log("Constructor of: LogTableDataService");
    }
    LogTableDataService.prototype.getData = function (from, to) {
        return this.http.get("/Data/Logfiles/" + from.toString() + "/" + to.toString());
    };
    LogTableDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LogTableDataService);
    return LogTableDataService;
}());



/***/ }),

/***/ "./src/app/pages/logs/log-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/logs/log-routing.module.ts ***!
  \**************************************************/
/*! exports provided: TablesRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function() { return TablesRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _log_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log.component */ "./src/app/pages/logs/log.component.ts");
/* harmony import */ var _log_table_log_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-table/log-table.component */ "./src/app/pages/logs/log-table/log-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _log_component__WEBPACK_IMPORTED_MODULE_2__["TablesComponent"],
        children: [{
                path: 'log-table',
                component: _log_table_log_table_component__WEBPACK_IMPORTED_MODULE_3__["LogTableComponent"],
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
    _log_component__WEBPACK_IMPORTED_MODULE_2__["TablesComponent"],
    _log_table_log_table_component__WEBPACK_IMPORTED_MODULE_3__["LogTableComponent"],
];


/***/ }),

/***/ "./src/app/pages/logs/log-table/log-table.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/logs/log-table/log-table.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card>\r\n  <nb-card-header>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-7\">Logging</div>\r\n        <div class=\"col-sm-4\">\r\n            <input nbInput placeholder=\"{{inputDateField}}\"   [nbDatepicker]=\"rangepicker\" >\r\n            <nb-rangepicker #rangepicker  (rangeChange)=\"onDateChange($event)\" [(range)]=\"range\" format=\"yyyy.MM.dd\"></nb-rangepicker>\r\n        </div>\r\n        <div class=\"col-sm-1\"><button nbButton size=\"xsmall\" (click)=\"onReLoadData()\"><i class=\"fa\"  aria-hidden=\"true\">&#xf021;</i></button></div>\r\n      </div>\r\n  </nb-card-header>\r\n\r\n  <nb-card-body>\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"source\" (deleteConfirm)=\"onDeleteConfirm($event)\">\r\n    </ng2-smart-table>\r\n  </nb-card-body>\r\n</nb-card>\r\n"

/***/ }),

/***/ "./src/app/pages/logs/log-table/log-table.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/logs/log-table/log-table.component.ts ***!
  \*************************************************************/
/*! exports provided: LogTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogTableComponent", function() { return LogTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _core_data_services_log_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@core/data-services/log-table.service */ "./src/app/@core/data-services/log-table.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global */ "./src/app/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogTableComponent = /** @class */ (function () {
    function LogTableComponent(service, dateService, globals) {
        this.service = service;
        this.dateService = dateService;
        this.globals = globals;
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
        console.log("constructor has called ");
        var start = this.globals.DateToUtcMoment(new Date());
        var end = start.clone();
        this.range = {
            start: start.add(-this.globals.LogsDaysLookBack, "days").toDate(),
            end: end.add(1, "days").toDate()
        };
        this.inputDateField = this.globals.LogsDaysLookBack.toString() + " days back";
        this.onReLoadData();
    }
    LogTableComponent.prototype.onReLoadData = function () {
        var _this = this;
        console.log("Load log data");
        var from = this.globals.DateToUtcMoment(this.range.start);
        var to = this.globals.DateToUtcMoment(this.range.end);
        this.service.getData(moment__WEBPACK_IMPORTED_MODULE_4__["utc"](from).unix(), moment__WEBPACK_IMPORTED_MODULE_4__["utc"](to).add(1, "days").unix()).subscribe(function (data) {
            _this.source.load(data);
        });
    };
    LogTableComponent.prototype.onDateChange = function (event) {
        if (event.end != null && event.start != null) {
            this.range = {
                start: event.start,
                end: event.end
            };
            this.onReLoadData();
        }
    };
    LogTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-smart-table',
            template: __webpack_require__(/*! ./log-table.component.html */ "./src/app/pages/logs/log-table/log-table.component.html"),
            styles: ["\n    nb-card {\n      transform: translate3d(0, 0, 0);\n    }\n  "],
            providers: [_core_data_services_log_table_service__WEBPACK_IMPORTED_MODULE_2__["LogTableDataService"]]
        }),
        __metadata("design:paramtypes", [_core_data_services_log_table_service__WEBPACK_IMPORTED_MODULE_2__["LogTableDataService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbDateService"], _global__WEBPACK_IMPORTED_MODULE_5__["Globals"]])
    ], LogTableComponent);
    return LogTableComponent;
}());



/***/ }),

/***/ "./src/app/pages/logs/log.component.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/logs/log.component.ts ***!
  \*********************************************/
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
            template: "\n  <router-outlet></router-outlet>",
        })
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/pages/logs/log.module.ts":
/*!******************************************!*\
  !*** ./src/app/pages/logs/log.module.ts ***!
  \******************************************/
/*! exports provided: LogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogModule", function() { return LogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _log_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-routing.module */ "./src/app/pages/logs/log-routing.module.ts");
/* harmony import */ var _nebular_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/moment */ "./node_modules/@nebular/moment/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LogModule = /** @class */ (function () {
    function LogModule() {
    }
    LogModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
                _log_routing_module__WEBPACK_IMPORTED_MODULE_3__["TablesRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["Ng2SmartTableModule"],
                _nebular_moment__WEBPACK_IMPORTED_MODULE_4__["NbMomentDateModule"]
            ],
            declarations: _log_routing_module__WEBPACK_IMPORTED_MODULE_3__["routedComponents"].slice(),
        })
    ], LogModule);
    return LogModule;
}());



/***/ })

}]);
//# sourceMappingURL=logs-log-module.js.map