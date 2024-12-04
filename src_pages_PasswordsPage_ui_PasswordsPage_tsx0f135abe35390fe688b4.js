"use strict";
(self["webpackChunkpasswordservicetest"] = self["webpackChunkpasswordservicetest"] || []).push([["src_pages_PasswordsPage_ui_PasswordsPage_tsx"],{

/***/ "./src/app/hooks/useAPI/index.ts":
/*!***************************************!*\
  !*** ./src/app/hooks/useAPI/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAPI: () => (/* reexport safe */ _lib_useAPI__WEBPACK_IMPORTED_MODULE_0__.useAPI)
/* harmony export */ });
/* harmony import */ var _lib_useAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/useAPI */ "./src/app/hooks/useAPI/lib/useAPI.ts");



/***/ }),

/***/ "./src/app/hooks/useAPI/lib/useAPI.ts":
/*!********************************************!*\
  !*** ./src/app/hooks/useAPI/lib/useAPI.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAPI: () => (/* binding */ useAPI)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var useAPI = function () {
    var handleSendToAPI = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        if (Math.random() > 0.5) {
                            resolve(true);
                        }
                        reject({ data: { message: "Сервис временно недоступен" } });
                    }, 2000);
                })];
        });
    }); };
    return {
        handleSendToAPI: handleSendToAPI,
    };
};


/***/ }),

/***/ "./src/pages/PasswordsPage/lib/contexts/passwordContext/lib/PasswordServiceContext.tsx":
/*!*********************************************************************************************!*\
  !*** ./src/pages/PasswordsPage/lib/contexts/passwordContext/lib/PasswordServiceContext.tsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordServiceContext: () => (/* binding */ PasswordServiceContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var PasswordServiceContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);


/***/ }),

/***/ "./src/pages/PasswordsPage/lib/contexts/passwordContext/lib/usePasswordService.ts":
/*!****************************************************************************************!*\
  !*** ./src/pages/PasswordsPage/lib/contexts/passwordContext/lib/usePasswordService.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePasswordService: () => (/* binding */ usePasswordService)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PasswordServiceContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordServiceContext */ "./src/pages/PasswordsPage/lib/contexts/passwordContext/lib/PasswordServiceContext.tsx");


var usePasswordService = function () {
    var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_PasswordServiceContext__WEBPACK_IMPORTED_MODULE_1__.PasswordServiceContext);
    if (!context) {
        throw new Error("Password Service context is being called outside the provider.");
    }
    return context;
};


/***/ }),

/***/ "./src/pages/PasswordsPage/lib/contexts/passwordContext/ui/PasswordServiceProvider.tsx":
/*!*********************************************************************************************!*\
  !*** ./src/pages/PasswordsPage/lib/contexts/passwordContext/ui/PasswordServiceProvider.tsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordServiceProvider: () => (/* binding */ PasswordServiceProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var app_hooks_useAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/hooks/useAPI */ "./src/app/hooks/useAPI/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_PasswordServiceContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/PasswordServiceContext */ "./src/pages/PasswordsPage/lib/contexts/passwordContext/lib/PasswordServiceContext.tsx");
/* harmony import */ var shared_lib_useToast_useToast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/useToast/useToast */ "./src/shared/lib/useToast/useToast.tsx");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





var PasswordServiceProvider = function (_a) {
    var children = _a.children;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), initialPasswords = _b[0], setInitialPasswords = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), passwords = _c[0], setPasswords = _c[1];
    var handleSendToAPI = (0,app_hooks_useAPI__WEBPACK_IMPORTED_MODULE_1__.useAPI)().handleSendToAPI;
    var toast = (0,shared_lib_useToast_useToast__WEBPACK_IMPORTED_MODULE_4__.useToast)().toast;
    var resetPasswordsList = function () {
        setPasswords(initialPasswords);
    };
    var changePasswordsList = function (cb) {
        setPasswords(cb);
    };
    var withApiResponse = function (_a, cb) {
        var title = _a.title;
        var toastParams = {
            title: title,
        };
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(void 0, void 0, void 0, function () {
                var result, res, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            result = { message: "" };
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, cb.apply(void 0, args)];
                        case 2:
                            res = _a.sent();
                            toastParams.description = res.message;
                            result = res;
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            console.log("error");
                            toastParams.variant = "destructive";
                            toastParams.description = e_1.message;
                            result = e_1;
                            return [3 /*break*/, 4];
                        case 4:
                            toast(toastParams);
                            return [2 /*return*/, result];
                    }
                });
            });
        };
    };
    var createPassword = withApiResponse({ title: "Создание пароля" }, function (formData) { return __awaiter(void 0, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, handleSendToAPI()];
                case 1:
                    _a.sent();
                    setPasswords(function (prev) {
                        var newData = __spreadArray([
                            __assign(__assign({}, formData), { id: prev[0] ? prev[0].id + 1 : 1 })
                        ], prev, true);
                        localStorage.setItem("ServPwds", JSON.stringify(newData));
                        return newData;
                    });
                    return [2 /*return*/, { message: "Пароль успешно создан!" }];
                case 2:
                    e_2 = _a.sent();
                    throw { message: "Непредвиденная ошибка" };
                case 3: return [2 /*return*/];
            }
        });
    }); });
    var changePassword = withApiResponse({ title: "Редактирование пароля" }, function (id, values) { return __awaiter(void 0, void 0, void 0, function () {
        var entryToEdit, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entryToEdit = passwords.findIndex(function (password) { return password.id === id; });
                    if (entryToEdit === -1)
                        return [2 /*return*/, { message: "Элемент не был найден" }];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, handleSendToAPI()];
                case 2:
                    _a.sent();
                    setPasswords(function (prev) {
                        prev[entryToEdit] = __assign(__assign({}, prev[entryToEdit]), values);
                        localStorage.setItem("ServPwds", JSON.stringify(prev));
                        return prev;
                    });
                    return [2 /*return*/, { message: "done" }];
                case 3:
                    e_3 = _a.sent();
                    throw { message: "Произошла ошибка. попробуйте позже." };
                case 4: return [2 /*return*/];
            }
        });
    }); });
    var deletePassword = withApiResponse({ title: "Удаление пароля" }, function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, handleSendToAPI()];
                case 1:
                    _a.sent();
                    setPasswords(function (prev) {
                        var newData = prev.filter(function (item) { return item.id === id; });
                        localStorage.setItem("ServPwds", JSON.stringify(newData));
                        return newData;
                    });
                    return [2 /*return*/, { message: "Пароль успешно удален!" }];
                case 2:
                    e_4 = _a.sent();
                    throw { message: "Непредвиденная ошибка" };
                case 3: return [2 /*return*/];
            }
        });
    }); });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
        var pwds = localStorage.getItem("ServPwds");
        if (pwds) {
            setPasswords(JSON.parse(pwds));
            setInitialPasswords(JSON.parse(pwds));
        }
    }, []);
    var value = {
        initialPasswords: initialPasswords,
        resetPasswordsList: resetPasswordsList,
        changePasswordsList: changePasswordsList,
        changePassword: changePassword,
        createPassword: createPassword,
        deletePassword: deletePassword,
        passwords: passwords,
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_lib_PasswordServiceContext__WEBPACK_IMPORTED_MODULE_3__.PasswordServiceContext.Provider, { value: value, children: children }));
};


/***/ }),

/***/ "./src/pages/PasswordsPage/ui/PasswordList.tsx":
/*!*****************************************************!*\
  !*** ./src/pages/PasswordsPage/ui/PasswordList.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordList: () => (/* binding */ PasswordList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _lib_contexts_passwordContext_lib_usePasswordService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/contexts/passwordContext/lib/usePasswordService */ "./src/pages/PasswordsPage/lib/contexts/passwordContext/lib/usePasswordService.ts");
/* harmony import */ var _passwordItem_PasswordItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passwordItem/PasswordItem */ "./src/pages/PasswordsPage/ui/passwordItem/PasswordItem.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var PasswordList = function () {
    var _a = (0,_lib_contexts_passwordContext_lib_usePasswordService__WEBPACK_IMPORTED_MODULE_1__.usePasswordService)(), changePassword = _a.changePassword, deletePassword = _a.deletePassword, passwords = _a.passwords;
    var handleChangeItem = function (entry_1, _a) { return __awaiter(void 0, [entry_1, _a], void 0, function (entry, _b) {
        var setIsLoading = _b.setIsLoading;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!entry.id)
                        return [2 /*return*/];
                    setIsLoading(true);
                    return [4 /*yield*/, changePassword(entry.id, entry)];
                case 1:
                    _c.sent();
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleDeleteItem = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            deletePassword(id);
            return [2 /*return*/];
        });
    }); };
    return passwords.map(function (password) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_passwordItem_PasswordItem__WEBPACK_IMPORTED_MODULE_2__.PasswordItem, { onEditSave: handleChangeItem, onDelete: handleDeleteItem, password: password }, password.id));
    });
};


/***/ }),

/***/ "./src/pages/PasswordsPage/ui/PasswordSearch.tsx":
/*!*******************************************************!*\
  !*** ./src/pages/PasswordsPage/ui/PasswordSearch.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordSearch: () => (/* binding */ PasswordSearch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var _lib_contexts_passwordContext_lib_usePasswordService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/contexts/passwordContext/lib/usePasswordService */ "./src/pages/PasswordsPage/lib/contexts/passwordContext/lib/usePasswordService.ts");
/* harmony import */ var shared_lib_findMostSimmilar_findMostSimmilar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/lib/findMostSimmilar/findMostSimmilar */ "./src/shared/lib/findMostSimmilar/findMostSimmilar.tsx");





var PasswordSearch = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), search = _a[0], setSearch = _a[1];
    var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    var _b = (0,_lib_contexts_passwordContext_lib_usePasswordService__WEBPACK_IMPORTED_MODULE_3__.usePasswordService)(), changePasswordsList = _b.changePasswordsList, resetPasswordsList = _b.resetPasswordsList, initialPasswords = _b.initialPasswords;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }
        if (search.length < 1) {
            console.log("reset");
            resetPasswordsList();
            return;
        }
        var searchTimeout = setTimeout(function () {
            changePasswordsList((0,shared_lib_findMostSimmilar_findMostSimmilar__WEBPACK_IMPORTED_MODULE_4__.findMostSimilar)(initialPasswords, "service", search, 6));
        }, 500);
        return function () { return clearTimeout(searchTimeout); };
    }, [search]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_2__.Input, { placeholder: "\u043F\u043E\u0438\u0441\u043A", value: search, onChange: function (e) { return setSearch(e.target.value); } });
};


/***/ }),

/***/ "./src/pages/PasswordsPage/ui/PasswordsPage.tsx":
/*!******************************************************!*\
  !*** ./src/pages/PasswordsPage/ui/PasswordsPage.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _PasswordList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordList */ "./src/pages/PasswordsPage/ui/PasswordList.tsx");
/* harmony import */ var _lib_contexts_passwordContext_ui_PasswordServiceProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/contexts/passwordContext/ui/PasswordServiceProvider */ "./src/pages/PasswordsPage/lib/contexts/passwordContext/ui/PasswordServiceProvider.tsx");
/* harmony import */ var _passwordManagement_CreatePasswordForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passwordManagement/CreatePasswordForm */ "./src/pages/PasswordsPage/ui/passwordManagement/CreatePasswordForm.tsx");
/* harmony import */ var _PasswordSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PasswordSearch */ "./src/pages/PasswordsPage/ui/PasswordSearch.tsx");





var PasswordsPage = function (_a) {
    var className = _a.className;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "px-3 max-w-5xl flex gap-5 flex-col mx-auto", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "text-4xl", children: "\u0421\u0435\u0440\u0432\u0438\u0441\u044B-\u043F\u0430\u0440\u043E\u043B\u0438" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex flex-col gap-3", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_lib_contexts_passwordContext_ui_PasswordServiceProvider__WEBPACK_IMPORTED_MODULE_2__.PasswordServiceProvider, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_passwordManagement_CreatePasswordForm__WEBPACK_IMPORTED_MODULE_3__.CreatePasswordForm, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PasswordSearch__WEBPACK_IMPORTED_MODULE_4__.PasswordSearch, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PasswordList__WEBPACK_IMPORTED_MODULE_1__.PasswordList, {})] }) })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordsPage);


/***/ }),

/***/ "./src/pages/PasswordsPage/ui/passwordItem/PasswordItem.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/PasswordsPage/ui/passwordItem/PasswordItem.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordItem: () => (/* binding */ PasswordItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ui/Card/Card */ "./src/shared/ui/Card/Card.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-tooltip */ "./node_modules/@radix-ui/react-tooltip/dist/index.mjs");
/* harmony import */ var _PasswordItemActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PasswordItemActions */ "./src/pages/PasswordsPage/ui/passwordItem/PasswordItemActions.tsx");
/* harmony import */ var _passwordManagement_PasswordSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../passwordManagement/PasswordSettings */ "./src/pages/PasswordsPage/ui/passwordManagement/PasswordSettings.tsx");






var PasswordItem = function (_a) {
    var password = _a.password, onDelete = _a.onDelete, onEditClose = _a.onEditClose, onEditOpen = _a.onEditOpen, onEditSave = _a.onEditSave;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isEditOpen = _b[0], setIsEditOpen = _b[1];
    var handleDelete = function () {
        if (onDelete) {
            onDelete(password.id);
        }
    };
    var handleEditClick = function () {
        setIsEditOpen(function (prev) {
            if (prev) {
                onEditClose && onEditClose(password);
            }
            else {
                onEditOpen && onEditOpen(password);
            }
            return !prev;
        });
    };
    var handleCopyToClipboard = function () {
        navigator.clipboard.writeText(password.password);
    };
    var handleEditSave = function (password, opts) {
        if (onEditSave) {
            onEditSave(password, opts);
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__.Card, { className: "flex flex-col gap-4 p-6", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipProvider, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex flex-row justify-between w-full", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Card_Card__WEBPACK_IMPORTED_MODULE_1__.CardTitle, { children: [password.id, ". ", password.service] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PasswordItemActions__WEBPACK_IMPORTED_MODULE_3__.PasswordItemActions, { isEdit: isEditOpen, onCopy: handleCopyToClipboard, onDelete: handleDelete, onEditOpen: handleEditClick })] }), isEditOpen && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_passwordManagement_PasswordSettings__WEBPACK_IMPORTED_MODULE_4__.PasswordSettings, { onSubmit: handleEditSave, initialValues: password, submitButtonText: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C" }))] }) }));
};


/***/ }),

/***/ "./src/pages/PasswordsPage/ui/passwordItem/PasswordItemActions.tsx":
/*!*************************************************************************!*\
  !*** ./src/pages/PasswordsPage/ui/passwordItem/PasswordItemActions.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordItemActions: () => (/* binding */ PasswordItemActions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_ui_AlertDialog_AlertDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/ui/AlertDialog/AlertDialog */ "./src/shared/ui/AlertDialog/AlertDialog.tsx");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var shared_ui_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Tooltip/Tooltip */ "./src/shared/ui/Tooltip/Tooltip.tsx");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pencil-off.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pencil.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/clipboard.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trash.js");





var PasswordItemActions = function (_a) {
    var onCopy = _a.onCopy, onDelete = _a.onDelete, onEditOpen = _a.onEditOpen, isEdit = _a.isEdit;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex gap-2", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__.TooltipTrigger, { asChild: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "ghost", onClick: onEditOpen, children: isEdit ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {}) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__.TooltipContent, { children: isEdit ? "Отменить редактирование" : "Редактировать" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__.TooltipTrigger, { asChild: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "ghost", onClick: onCopy, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {}) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_3__.TooltipContent, { children: "\u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_AlertDialog_AlertDialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialog, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_AlertDialog_AlertDialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogTrigger, { asChild: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "ghost", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {}) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_AlertDialog_AlertDialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogContent, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_AlertDialog_AlertDialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogHeader, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_AlertDialog_AlertDialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogTitle, { children: "\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_AlertDialog_AlertDialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogDescription, { children: "\u042D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C. \u042D\u0442\u043E \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u0431\u0435\u0437\u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043D\u043E\u043C\u0443 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044E \u0432\u0430\u0448\u0435\u0433\u043E \u043F\u0430\u0440\u043E\u043B\u044F." })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_AlertDialog_AlertDialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogFooter, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_AlertDialog_AlertDialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogCancel, { children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_AlertDialog_AlertDialog__WEBPACK_IMPORTED_MODULE_1__.AlertDialogAction, { onClick: onDelete, children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C" })] })] })] })] }));
};


/***/ }),

/***/ "./src/pages/PasswordsPage/ui/passwordManagement/CreatePasswordForm.tsx":
/*!******************************************************************************!*\
  !*** ./src/pages/PasswordsPage/ui/passwordManagement/CreatePasswordForm.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatePasswordForm: () => (/* binding */ CreatePasswordForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var pages_PasswordsPage_lib_contexts_passwordContext_lib_usePasswordService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pages/PasswordsPage/lib/contexts/passwordContext/lib/usePasswordService */ "./src/pages/PasswordsPage/lib/contexts/passwordContext/lib/usePasswordService.ts");
/* harmony import */ var _PasswordSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PasswordSettings */ "./src/pages/PasswordsPage/ui/passwordManagement/PasswordSettings.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CreatePasswordForm = function () {
    var createPassword = (0,pages_PasswordsPage_lib_contexts_passwordContext_lib_usePasswordService__WEBPACK_IMPORTED_MODULE_1__.usePasswordService)().createPassword;
    var handleSubmit = function (p_1, _a) { return __awaiter(void 0, [p_1, _a], void 0, function (p, _b) {
        var setIsLoading = _b.setIsLoading;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    setIsLoading(true);
                    return [4 /*yield*/, createPassword(p)];
                case 1:
                    _c.sent();
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex flex-col gap-4 p-6", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PasswordSettings__WEBPACK_IMPORTED_MODULE_2__.PasswordSettings, { onSubmit: handleSubmit }) }));
};


/***/ }),

/***/ "./src/pages/PasswordsPage/ui/passwordManagement/PasswordForm.tsx":
/*!************************************************************************!*\
  !*** ./src/pages/PasswordsPage/ui/passwordManagement/PasswordForm.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordForm: () => (/* binding */ PasswordForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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




var PasswordForm = function (_a) {
    var onSubmit = _a.onSubmit, onChange = _a.onChange, submitButtonText = _a.submitButtonText, values = _a.values, children = _a.children, props = __rest(_a, ["onSubmit", "onChange", "submitButtonText", "values", "children"]);
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoading = _b[0], setIsLoading = _b[1];
    var handleInputChange = function (e) {
        var _a;
        if (onChange)
            onChange((_a = {}, _a[e.target.name] = e.target.value, _a));
    };
    var handleCreatePassword = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            e.preventDefault();
            if (onSubmit) {
                onSubmit(values, { setIsLoading: setIsLoading });
            }
            return [2 /*return*/];
        });
    }); };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", __assign({ className: "flex flex-col gap-2", onSubmit: handleCreatePassword }, props, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex flex-row gap-2", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_3__.Input, { name: "service", value: values.service, placeholder: "\u0421\u0435\u0440\u0432\u0438\u0441", onChange: handleInputChange }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_3__.Input, { name: "password", value: values.password, placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", onChange: handleInputChange }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, { type: "submit", className: "ml-10", disabled: values.password === "" || values.service === "" || isLoading === true, isLoading: isLoading, children: submitButtonText || "создать новый пароль" })] }), children] })));
};


/***/ }),

/***/ "./src/pages/PasswordsPage/ui/passwordManagement/PasswordGenerationSettings.tsx":
/*!**************************************************************************************!*\
  !*** ./src/pages/PasswordsPage/ui/passwordManagement/PasswordGenerationSettings.tsx ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordFormSettings: () => (/* binding */ PasswordFormSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_lib_generatePassword_generatePassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/generatePassword/generatePassword */ "./src/shared/lib/generatePassword/generatePassword.ts");
/* harmony import */ var shared_ui_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Checkbox/Checkbox */ "./src/shared/ui/Checkbox/Checkbox.tsx");
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var widgets_FormGenerator_ui_FormGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! widgets/FormGenerator/ui/FormGenerator */ "./src/widgets/FormGenerator/ui/FormGenerator.tsx");
/* harmony import */ var widgets_SliderWithInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! widgets/SliderWithInput */ "./src/widgets/SliderWithInput/index.ts");
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
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};







var passwordSettingsSchema = {
    hasSymbols: {
        label: {
            text: "Символы",
            position: "after",
        },
        inputInfo: {
            type: "checkbox",
        },
    },
    hasNumbers: {
        label: {
            text: "Цифры",
            position: "after",
        },
        inputInfo: {
            type: "checkbox",
        },
    },
    hasUppercase: {
        label: {
            text: "Верхний регистр",
            position: "after",
        },
        inputInfo: {
            type: "checkbox",
        },
    },
    hasLowercase: {
        label: {
            text: "Нижний регистр",
            position: "after",
        },
        inputInfo: {
            type: "checkbox",
        },
    },
};
var PasswordFormSettings = function (_a) {
    var onChange = _a.onChange, password = _a.password;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), generationOptions = _b[0], setGenerationOptions = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isGenerationManual = _c[0], setIsGenerationManual = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isUserInteracted = _d[0], setIsUserInteracted = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), generationLength = _e[0], setGenerationLength = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), manualCharacters = _f[0], setManualCharacters = _f[1];
    var maxSymbols = 30;
    var handleOptionsChange = function (change) {
        setGenerationOptions(function (prev) {
            var newOptions = __spreadArray([], prev, true);
            var _loop_1 = function (key, value) {
                if (value) {
                    newOptions.push(key);
                }
                else {
                    newOptions = newOptions.filter(function (option) { return key !== option; });
                }
            };
            for (var _i = 0, _a = Object.entries(change); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                _loop_1(key, value);
            }
            return newOptions.length < 1 ? prev : newOptions;
        });
        setIsUserInteracted(true);
    };
    var handleOptionsLenghtChange = function (e) {
        setGenerationLength(e);
        setIsUserInteracted(true);
    };
    var analyzePassword = function (password) {
        var options = [];
        /[a-z]/.test(password) && options.push("hasLowercase");
        /[.,;\[\]]/.test(password) && options.push("hasSymbols");
        /\d/.test(password) && options.push("hasNumbers");
        /[A-Z]/.test(password) && options.push("hasUppercase");
        return options;
    };
    var handleOptionsValues = function () {
        return Object.keys(passwordSettingsSchema).reduce(function (prev, option) {
            var _a;
            return __assign(__assign({}, prev), (_a = {}, _a[option] = {
                value: generationOptions.includes(option),
                disabled: isGenerationManual,
            }, _a));
        }, {});
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (!password)
            return;
        var opts = analyzePassword(password);
        setGenerationOptions(opts);
        setGenerationLength(password.length);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (!isUserInteracted || !onChange)
            return;
        var passwordOptions = {
            characterCount: generationLength,
        };
        if (isGenerationManual && manualCharacters.length > 0) {
            passwordOptions = __assign(__assign({}, passwordOptions), { userCharacters: manualCharacters });
        }
        else if (generationOptions.length > 0) {
            passwordOptions = __assign(__assign({}, passwordOptions), generationOptions.reduce(function (prev, option) {
                var _a;
                return __assign(__assign({}, prev), (_a = {}, _a[option] = true, _a));
            }, {}));
        }
        Object.keys(passwordOptions).length > 1 &&
            onChange({ password: (0,shared_lib_generatePassword_generatePassword__WEBPACK_IMPORTED_MODULE_2__.generatePassword)(passwordOptions) });
    }, [generationLength, generationOptions, manualCharacters]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex flex-col gap-4", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_SliderWithInput__WEBPACK_IMPORTED_MODULE_6__.SliderWithInput, { onChange: handleOptionsLenghtChange, max: maxSymbols, value: generationLength }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex gap-2 items-center", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: isGenerationManual, onCheckedChange: function () { return setIsGenerationManual(function (prev) { return !prev; }); } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "\u0441\u0432\u043E\u0439 \u043D\u0430\u0431\u043E\u0440" })] }), isGenerationManual && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_4__.Input, { onChange: function (e) { return setManualCharacters(e.target.value); }, value: manualCharacters }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex gap-2", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(widgets_FormGenerator_ui_FormGenerator__WEBPACK_IMPORTED_MODULE_5__.FormGenerator, { onChange: handleOptionsChange, schema: passwordSettingsSchema, values: handleOptionsValues(), className: "justify-center" }) })] }));
};


/***/ }),

/***/ "./src/pages/PasswordsPage/ui/passwordManagement/PasswordSettings.tsx":
/*!****************************************************************************!*\
  !*** ./src/pages/PasswordsPage/ui/passwordManagement/PasswordSettings.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordSettings: () => (/* binding */ PasswordSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PasswordForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PasswordForm */ "./src/pages/PasswordsPage/ui/passwordManagement/PasswordForm.tsx");
/* harmony import */ var _PasswordGenerationSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PasswordGenerationSettings */ "./src/pages/PasswordsPage/ui/passwordManagement/PasswordGenerationSettings.tsx");
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




var PasswordSettings = function (_a) {
    var initialValues = _a.initialValues, onSubmit = _a.onSubmit, submitButtonText = _a.submitButtonText;
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValues || {
        password: "",
        service: "",
    }), settings = _b[0], setSettings = _b[1];
    var handlePasswordChange = function (newKeys) {
        setSettings(function (prev) {
            if (prev) {
                return __assign(__assign({}, prev), newKeys);
            }
            else {
                return newKeys;
            }
        });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PasswordForm__WEBPACK_IMPORTED_MODULE_2__.PasswordForm, { onSubmit: onSubmit, onChange: handlePasswordChange, values: settings, submitButtonText: submitButtonText, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PasswordGenerationSettings__WEBPACK_IMPORTED_MODULE_3__.PasswordFormSettings, { onChange: handlePasswordChange, password: settings ? settings.password : undefined }) }));
};


/***/ }),

/***/ "./src/shared/lib/findMostSimmilar/findMostSimmilar.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/lib/findMostSimmilar/findMostSimmilar.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findMostSimilar: () => (/* binding */ findMostSimilar)
/* harmony export */ });
var findMostSimilar = function (items, key, searchString, minSimmilarity) {
    // Функция для вычисления расстояния Левенштейна
    function levenshteinDistance(a, b) {
        var matrix = [];
        for (var i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }
        for (var j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }
        for (var i = 1; i <= b.length; i++) {
            for (var j = 1; j <= a.length; j++) {
                if (b[i - 1] === a[j - 1]) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                }
                else {
                    matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // Замена
                    matrix[i][j - 1] + 1, // Вставка
                    matrix[i - 1][j] + 1);
                }
            }
        }
        return matrix[b.length][a.length];
    }
    // Сравнение всех объектов с введённой строкой
    var simmilarities = items.map(function (item) {
        return levenshteinDistance(item[key].toLowerCase(), searchString.toLowerCase());
    });
    items.sort(function (a, b) { return simmilarities[items.indexOf(a)] - simmilarities[items.indexOf(b)]; }); // Сортируем по схожести
    if (minSimmilarity) {
        // Фильтруем все не подходящие под минимальную схожесть позиции
        return items.filter(function (item) {
            return simmilarities[items.indexOf(item)] < minSimmilarity;
        });
    }
    return items;
};


/***/ }),

/***/ "./src/shared/lib/generatePassword/generatePassword.ts":
/*!*************************************************************!*\
  !*** ./src/shared/lib/generatePassword/generatePassword.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generatePassword: () => (/* binding */ generatePassword)
/* harmony export */ });
var generatePassword = function (options) {
    if (!options.characterCount)
        return "";
    var count = typeof options.characterCount === "string"
        ? parseInt(options.characterCount, 10)
        : options.characterCount;
    var numbers = "0123456789";
    var symbols = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var charPool = "";
    if (options.userCharacters) {
        charPool = options.userCharacters;
    }
    else {
        if (options.hasNumbers)
            charPool += numbers;
        if (options.hasSymbols)
            charPool += symbols;
        if (options.hasUppercase)
            charPool += uppercase;
        if (options.hasLowercase)
            charPool += lowercase;
    }
    // Если пул пустой — ошибка
    if (charPool.length === 0) {
        throw new Error("No character types selected. Enable at least one character type.");
    }
    // Генерация пароля
    var password = "";
    for (var i = 0; i < count; i++) {
        var randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }
    return password;
};


/***/ }),

/***/ "./src/shared/lib/withFormLabels/withFormLabels.tsx":
/*!**********************************************************!*\
  !*** ./src/shared/lib/withFormLabels/withFormLabels.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WithFormLabels: () => (/* binding */ WithFormLabels)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/cn/cn */ "./src/shared/lib/cn/cn.ts");
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


var WithFormLabels = function (_a) {
    var children = _a.children, label = _a.label, className = _a.className, disabled = _a.disabled, props = __rest(_a, ["children", "label", "className", "disabled"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", __assign({ className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_1__.cn)("flex gap-2 flex-1 items-center", className) }, props, { children: [label && label.position === "before" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: Boolean(disabled) ? "opacity-50" : "", children: label.text })), children, label && label.position === "after" && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: Boolean(disabled) ? "opacity-50" : "", children: label.text }))] })));
};


/***/ }),

/***/ "./src/shared/ui/AlertDialog/AlertDialog.tsx":
/*!***************************************************!*\
  !*** ./src/shared/ui/AlertDialog/AlertDialog.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDialog: () => (/* binding */ AlertDialog),
/* harmony export */   AlertDialogAction: () => (/* binding */ AlertDialogAction),
/* harmony export */   AlertDialogCancel: () => (/* binding */ AlertDialogCancel),
/* harmony export */   AlertDialogContent: () => (/* binding */ AlertDialogContent),
/* harmony export */   AlertDialogDescription: () => (/* binding */ AlertDialogDescription),
/* harmony export */   AlertDialogFooter: () => (/* binding */ AlertDialogFooter),
/* harmony export */   AlertDialogHeader: () => (/* binding */ AlertDialogHeader),
/* harmony export */   AlertDialogOverlay: () => (/* binding */ AlertDialogOverlay),
/* harmony export */   AlertDialogPortal: () => (/* binding */ AlertDialogPortal),
/* harmony export */   AlertDialogTitle: () => (/* binding */ AlertDialogTitle),
/* harmony export */   AlertDialogTrigger: () => (/* binding */ AlertDialogTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-alert-dialog */ "./node_modules/@radix-ui/react-alert-dialog/dist/index.mjs");
/* harmony import */ var shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/cn/cn */ "./src/shared/lib/cn/cn.ts");
/* harmony import */ var shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Button/Button */ "./src/shared/ui/Button/Button.tsx");
"use client";
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





var AlertDialog = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Root;
var AlertDialogTrigger = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Trigger;
var AlertDialogPortal = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Portal;
var AlertDialogOverlay = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Overlay, __assign({ className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className) }, props, { ref: ref })));
});
AlertDialogOverlay.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Overlay.displayName;
var AlertDialogContent = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AlertDialogPortal, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertDialogOverlay, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Content, __assign({ ref: ref, className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className) }, props))] }));
});
AlertDialogContent.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Content.displayName;
var AlertDialogHeader = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-2 text-center sm:text-left", className) }, props)));
};
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className) }, props)));
};
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Title, __assign({ ref: ref, className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("text-lg font-semibold", className) }, props)));
});
AlertDialogTitle.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Title.displayName;
var AlertDialogDescription = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Description, __assign({ ref: ref, className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground", className) }, props)));
});
AlertDialogDescription.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Description.displayName;
var AlertDialogAction = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Action, __assign({ ref: ref, className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)((0,shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__.buttonVariants)(), className) }, props)));
});
AlertDialogAction.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Action.displayName;
var AlertDialogCancel = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Cancel, __assign({ ref: ref, className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)((0,shared_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__.buttonVariants)({ variant: "outline" }), "mt-2 sm:mt-0", className) }, props)));
});
AlertDialogCancel.displayName = _radix_ui_react_alert_dialog__WEBPACK_IMPORTED_MODULE_4__.Cancel.displayName;



/***/ }),

/***/ "./src/shared/ui/Card/Card.tsx":
/*!*************************************!*\
  !*** ./src/shared/ui/Card/Card.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card),
/* harmony export */   CardContent: () => (/* binding */ CardContent),
/* harmony export */   CardDescription: () => (/* binding */ CardDescription),
/* harmony export */   CardFooter: () => (/* binding */ CardFooter),
/* harmony export */   CardHeader: () => (/* binding */ CardHeader),
/* harmony export */   CardTitle: () => (/* binding */ CardTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/cn/cn */ "./src/shared/lib/cn/cn.ts");
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



var Card = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ ref: ref, className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", className) }, props)));
});
Card.displayName = "Card";
var CardHeader = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ ref: ref, className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-1.5 p-6", className) }, props)));
});
CardHeader.displayName = "CardHeader";
var CardTitle = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ ref: ref, className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("text-2xl font-semibold leading-none tracking-tight", className) }, props)));
});
CardTitle.displayName = "CardTitle";
var CardDescription = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ ref: ref, className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground", className) }, props)));
});
CardDescription.displayName = "CardDescription";
var CardContent = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ ref: ref, className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("p-6 pt-0", className) }, props)));
});
CardContent.displayName = "CardContent";
var CardFooter = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", __assign({ ref: ref, className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center p-6 pt-0", className) }, props)));
});
CardFooter.displayName = "CardFooter";



/***/ }),

/***/ "./src/shared/ui/Checkbox/Checkbox.tsx":
/*!*********************************************!*\
  !*** ./src/shared/ui/Checkbox/Checkbox.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-checkbox */ "./node_modules/@radix-ui/react-checkbox/dist/index.mjs");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/cn/cn */ "./src/shared/lib/cn/cn.ts");
"use client";
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





var Checkbox = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.Root, __assign({ ref: ref, className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className) }, props, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.Indicator, { className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center justify-center text-current"), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], { className: "h-4 w-4" }) }) })));
});
Checkbox.displayName = _radix_ui_react_checkbox__WEBPACK_IMPORTED_MODULE_3__.Root.displayName;



/***/ }),

/***/ "./src/shared/ui/Input/Input.tsx":
/*!***************************************!*\
  !*** ./src/shared/ui/Input/Input.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/cn/cn */ "./src/shared/lib/cn/cn.ts");
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



var Input = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, type = _a.type, props = __rest(_a, ["className", "type"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", __assign({ type: type, className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className), ref: ref }, props)));
});
Input.displayName = "Input";



/***/ }),

/***/ "./src/shared/ui/Slider/Slider.tsx":
/*!*****************************************!*\
  !*** ./src/shared/ui/Slider/Slider.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Slider: () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-slider */ "./node_modules/@radix-ui/react-slider/dist/index.mjs");
/* harmony import */ var shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/cn/cn */ "./src/shared/lib/cn/cn.ts");
"use client";
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




var Slider = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_3__.Root, __assign({ ref: ref, className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex w-full touch-none select-none items-center", className) }, props, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_3__.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_3__.Range, { className: "absolute h-full bg-primary" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_3__.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })] })));
});
Slider.displayName = _radix_ui_react_slider__WEBPACK_IMPORTED_MODULE_3__.Root.displayName;



/***/ }),

/***/ "./src/shared/ui/Tooltip/Tooltip.tsx":
/*!*******************************************!*\
  !*** ./src/shared/ui/Tooltip/Tooltip.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tooltip: () => (/* binding */ Tooltip),
/* harmony export */   TooltipContent: () => (/* binding */ TooltipContent),
/* harmony export */   TooltipProvider: () => (/* binding */ TooltipProvider),
/* harmony export */   TooltipTrigger: () => (/* binding */ TooltipTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-tooltip */ "./node_modules/@radix-ui/react-tooltip/dist/index.mjs");
/* harmony import */ var shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/lib/cn/cn */ "./src/shared/lib/cn/cn.ts");
"use client";
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




var TooltipProvider = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__.Provider;
var Tooltip = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__.Root;
var TooltipTrigger = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__.Trigger;
var TooltipContent = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_a, ref) {
    var className = _a.className, _b = _a.sideOffset, sideOffset = _b === void 0 ? 4 : _b, props = __rest(_a, ["className", "sideOffset"]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__.Content, __assign({ ref: ref, sideOffset: sideOffset, className: (0,shared_lib_cn_cn__WEBPACK_IMPORTED_MODULE_2__.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className) }, props)));
});
TooltipContent.displayName = _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__.Content.displayName;



/***/ }),

/***/ "./src/widgets/FormGenerator/ui/FormGenerator.tsx":
/*!********************************************************!*\
  !*** ./src/widgets/FormGenerator/ui/FormGenerator.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormGenerator: () => (/* binding */ FormGenerator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var shared_lib_withFormLabels_withFormLabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/lib/withFormLabels/withFormLabels */ "./src/shared/lib/withFormLabels/withFormLabels.tsx");
/* harmony import */ var shared_ui_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/Checkbox/Checkbox */ "./src/shared/ui/Checkbox/Checkbox.tsx");
/* harmony import */ var shared_ui_Slider_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Slider/Slider */ "./src/shared/ui/Slider/Slider.tsx");




var FormGenerator = function (_a) {
    var schema = _a.schema, values = _a.values, onChange = _a.onChange, className = _a.className;
    return Object.keys(schema).map(function (key) {
        var input = schema[key];
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_lib_withFormLabels_withFormLabels__WEBPACK_IMPORTED_MODULE_1__.WithFormLabels, { label: schema[key].label, disabled: values && values[key] ? values[key].disabled : undefined, className: className, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FormInputSwitch, { inputValue: values ? values[key] : undefined, inputName: key, input: input, onChange: onChange }) }, key));
    });
};
var FormInputSwitch = function (_a) {
    var onChange = _a.onChange, inputValue = _a.inputValue, input = _a.input, inputName = _a.inputName;
    switch (input.inputInfo.type) {
        case "checkbox":
            var isChecked = inputValue ? inputValue.value || false : false;
            var isDisabled = inputValue ? inputValue.disabled || false : false;
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_2__.Checkbox, { onCheckedChange: function (checked) {
                    var _a;
                    return onChange && onChange((_a = {}, _a[inputName] = checked, _a));
                }, name: inputName, disabled: isDisabled, checked: isChecked }));
        case "slider":
            var defaultValue = inputValue ? inputValue.value || 0 : 0;
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Slider_Slider__WEBPACK_IMPORTED_MODULE_3__.Slider, { name: inputName, onChange: function (e) {
                    var _a;
                    return onChange && onChange((_a = {}, _a[inputName] = e.target.value, _a));
                }, min: input.inputInfo.min || 0, value: defaultValue }));
        default:
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
};


/***/ }),

/***/ "./src/widgets/SliderWithInput/index.ts":
/*!**********************************************!*\
  !*** ./src/widgets/SliderWithInput/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderWithInput: () => (/* reexport safe */ _ui_SliderWithInput__WEBPACK_IMPORTED_MODULE_0__.SliderWithInput)
/* harmony export */ });
/* harmony import */ var _ui_SliderWithInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/SliderWithInput */ "./src/widgets/SliderWithInput/ui/SliderWithInput.tsx");



/***/ }),

/***/ "./src/widgets/SliderWithInput/ui/SliderWithInput.tsx":
/*!************************************************************!*\
  !*** ./src/widgets/SliderWithInput/ui/SliderWithInput.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderWithInput: () => (/* binding */ SliderWithInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/ui/Input/Input */ "./src/shared/ui/Input/Input.tsx");
/* harmony import */ var shared_ui_Slider_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/ui/Slider/Slider */ "./src/shared/ui/Slider/Slider.tsx");
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




var SliderWithInput = function (_a) {
    var onChange = _a.onChange, value = _a.value, label = _a.label, max = _a.max, min = _a.min, props = __rest(_a, ["onChange", "value", "label", "max", "min"]);
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), sliderValue = _b[0], setSliderValue = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""), inputValue = _c[0], setInputValue = _c[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        if (value) {
            setSliderValue(value);
            setInputValue(value.toString());
        }
    }, [value]);
    var handleInputChange = function (e) {
        var result = parseInt(e.target.value) || 0;
        if (max && result > max)
            return;
        setSliderValue(result);
        setInputValue(e.target.value);
        if (onChange) {
            onChange(result);
        }
    };
    var handleSliderChange = function (value) {
        var result = value[0];
        setInputValue(result.toString());
        setSliderValue(result);
        if (onChange) {
            onChange(result);
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex gap-4", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "max-w-72 flex-1", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "mb-2", children: label !== null && label !== void 0 ? label : "Кол-во символов" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Slider_Slider__WEBPACK_IMPORTED_MODULE_3__.Slider, __assign({ name: "slider", onValueChange: handleSliderChange, min: min, max: max, value: [sliderValue] }, props))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(shared_ui_Input_Input__WEBPACK_IMPORTED_MODULE_2__.Input, { name: "input", className: "max-w-20", type: "number", onChange: handleInputChange, value: inputValue })] }));
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX1Bhc3N3b3Jkc1BhZ2VfdWlfUGFzc3dvcmRzUGFnZV90c3gwZjEzNWFiZTM1MzkwZmU2ODhiNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXRDLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixjQUFjLDZCQUE2QiwwQkFBMEIsY0FBYyxxQkFBcUI7QUFDeEcsNklBQTZJLGNBQWM7QUFDM0osdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsbUNBQW1DLFNBQVM7QUFDNUMsbUNBQW1DLFdBQVcsVUFBVTtBQUN4RCwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLDhHQUE4RyxPQUFPO0FBQ3JILGlGQUFpRixpQkFBaUI7QUFDbEcseURBQXlELGdCQUFnQixRQUFRO0FBQ2pGLCtDQUErQyxnQkFBZ0IsZ0JBQWdCO0FBQy9FO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFDdEQsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNPO0FBQ1Asd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxRQUFRLHlDQUF5QztBQUNsRixxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERzQztBQUMvQiw2QkFBNkIsb0RBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RkO0FBQytCO0FBQzNEO0FBQ1Asa0JB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QUNBLG9CQUFvQixzREFBSSxDQUFDLGlFQUFRLElBQUk7QUFDckM7QUFDQSx3REFBd0Q7QUFDeEQsaUJBQWlCLDZEQUE2RDtBQUM5RTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFJLENBQUMsMkRBQU0sSUFBSTtBQUNuQztBQUNBLHdEQUF3RDtBQUN4RCxpQkFBaUIsc0RBQXNEO0FBQ3ZFO0FBQ0EsbUJBQW1CLHNEQUFJLENBQUMsdURBQVMsSUFBSTtBQUNyQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJ1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdkQsZ0JBQWdCLFNBQUksSUFBSSxTQUFJO0FBQzVCO0FBQ0EsaURBQWlELE9BQU87QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBSSxJQUFJLFNBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsY0FBYztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytEO0FBQ25CO0FBQ0U7QUFDRztBQUMxQztBQUNQO0FBQ0EsYUFBYSwrQ0FBUTtBQUNyQixhQUFhLCtDQUFRO0FBQ3JCLElBQUksZ0RBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFLLFVBQVUsb0NBQW9DLHVEQUFLLFVBQVUseUNBQXlDLHNEQUFJLFFBQVEsNkZBQTZGLEdBQUcsc0RBQUksQ0FBQywyREFBTSxhQUFhLDZGQUE2RixZQUFZLEdBQUcsc0RBQUksQ0FBQyx3REFBSyxJQUFJLHNHQUFzRyxJQUFJO0FBQy9kIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFzc3dvcmRzZXJ2aWNldGVzdC8uL3NyYy9hcHAvaG9va3MvdXNlQVBJL2luZGV4LnRzIiwid2VicGFjazovL3Bhc3N3b3Jkc2VydmljZXRlc3QvLi9zcmMvYXBwL2hvb2tzL3VzZUFQSS9saWIvdXNlQVBJLnRzIiwid2VicGFjazovL3Bhc3N3b3Jkc2VydmljZXRlc3QvLi9zcmMvcGFnZXMvUGFzc3dvcmRzUGFnZS9saWIvY29udGV4dHMvcGFzc3dvcmRDb250ZXh0L2xpYi9QYXNzd29yZFNlcnZpY2VDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZHNlcnZpY2V0ZXN0Ly4vc3JjL3BhZ2VzL1Bhc3N3b3Jkc1BhZ2UvbGliL2NvbnRleHRzL3Bhc3N3b3JkQ29udGV4dC9saWIvdXNlUGFzc3dvcmRTZXJ2aWNlLnRzIiwid2VicGFjazovL3Bhc3N3b3Jkc2VydmljZXRlc3QvLi9zcmMvcGFnZXMvUGFzc3dvcmRzUGFnZS9saWIvY29udGV4dHMvcGFzc3dvcmRDb250ZXh0L3VpL1Bhc3N3b3JkU2VydmljZVByb3ZpZGVyLnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZHNlcnZpY2V0ZXN0Ly4vc3JjL3BhZ2VzL1Bhc3N3b3Jkc1BhZ2UvdWkvUGFzc3dvcmRMaXN0LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZHNlcnZpY2V0ZXN0Ly4vc3JjL3BhZ2VzL1Bhc3N3b3Jkc1BhZ2UvdWkvUGFzc3dvcmRTZWFyY2gudHN4Iiwid2VicGFjazovL3Bhc3N3b3Jkc2VydmljZXRlc3QvLi9zcmMvcGFnZXMvUGFzc3dvcmRzUGFnZS91aS9QYXNzd29yZHNQYWdlLnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZHNlcnZpY2V0ZXN0Ly4vc3JjL3BhZ2VzL1Bhc3N3b3Jkc1BhZ2UvdWkvcGFzc3dvcmRJdGVtL1Bhc3N3b3JkSXRlbS50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmRzZXJ2aWNldGVzdC8uL3NyYy9wYWdlcy9QYXNzd29yZHNQYWdlL3VpL3Bhc3N3b3JkSXRlbS9QYXNzd29yZEl0ZW1BY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZHNlcnZpY2V0ZXN0Ly4vc3JjL3BhZ2VzL1Bhc3N3b3Jkc1BhZ2UvdWkvcGFzc3dvcmRNYW5hZ2VtZW50L0NyZWF0ZVBhc3N3b3JkRm9ybS50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmRzZXJ2aWNldGVzdC8uL3NyYy9wYWdlcy9QYXNzd29yZHNQYWdlL3VpL3Bhc3N3b3JkTWFuYWdlbWVudC9QYXNzd29yZEZvcm0udHN4Iiwid2VicGFjazovL3Bhc3N3b3Jkc2VydmljZXRlc3QvLi9zcmMvcGFnZXMvUGFzc3dvcmRzUGFnZS91aS9wYXNzd29yZE1hbmFnZW1lbnQvUGFzc3dvcmRHZW5lcmF0aW9uU2V0dGluZ3MudHN4Iiwid2VicGFjazovL3Bhc3N3b3Jkc2VydmljZXRlc3QvLi9zcmMvcGFnZXMvUGFzc3dvcmRzUGFnZS91aS9wYXNzd29yZE1hbmFnZW1lbnQvUGFzc3dvcmRTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmRzZXJ2aWNldGVzdC8uL3NyYy9zaGFyZWQvbGliL2ZpbmRNb3N0U2ltbWlsYXIvZmluZE1vc3RTaW1taWxhci50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmRzZXJ2aWNldGVzdC8uL3NyYy9zaGFyZWQvbGliL2dlbmVyYXRlUGFzc3dvcmQvZ2VuZXJhdGVQYXNzd29yZC50cyIsIndlYnBhY2s6Ly9wYXNzd29yZHNlcnZpY2V0ZXN0Ly4vc3JjL3NoYXJlZC9saWIvd2l0aEZvcm1MYWJlbHMvd2l0aEZvcm1MYWJlbHMudHN4Iiwid2VicGFjazovL3Bhc3N3b3Jkc2VydmljZXRlc3QvLi9zcmMvc2hhcmVkL3VpL0FsZXJ0RGlhbG9nL0FsZXJ0RGlhbG9nLnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZHNlcnZpY2V0ZXN0Ly4vc3JjL3NoYXJlZC91aS9DYXJkL0NhcmQudHN4Iiwid2VicGFjazovL3Bhc3N3b3Jkc2VydmljZXRlc3QvLi9zcmMvc2hhcmVkL3VpL0NoZWNrYm94L0NoZWNrYm94LnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZHNlcnZpY2V0ZXN0Ly4vc3JjL3NoYXJlZC91aS9JbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmRzZXJ2aWNldGVzdC8uL3NyYy9zaGFyZWQvdWkvU2xpZGVyL1NsaWRlci50c3giLCJ3ZWJwYWNrOi8vcGFzc3dvcmRzZXJ2aWNldGVzdC8uL3NyYy9zaGFyZWQvdWkvVG9vbHRpcC9Ub29sdGlwLnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZHNlcnZpY2V0ZXN0Ly4vc3JjL3dpZGdldHMvRm9ybUdlbmVyYXRvci91aS9Gb3JtR2VuZXJhdG9yLnRzeCIsIndlYnBhY2s6Ly9wYXNzd29yZHNlcnZpY2V0ZXN0Ly4vc3JjL3dpZGdldHMvU2xpZGVyV2l0aElucHV0L2luZGV4LnRzIiwid2VicGFjazovL3Bhc3N3b3Jkc2VydmljZXRlc3QvLi9zcmMvd2lkZ2V0cy9TbGlkZXJXaXRoSW5wdXQvdWkvU2xpZGVyV2l0aElucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyB1c2VBUEkgfSBmcm9tIFwiLi9saWIvdXNlQVBJXCI7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZyA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIGcubmV4dCA9IHZlcmIoMCksIGdbXCJ0aHJvd1wiXSA9IHZlcmIoMSksIGdbXCJyZXR1cm5cIl0gPSB2ZXJiKDIpLCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuZXhwb3J0IHZhciB1c2VBUEkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZVNlbmRUb0FQSSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHsgZGF0YTogeyBtZXNzYWdlOiBcItCh0LXRgNCy0LjRgSDQstGA0LXQvNC10L3QvdC+INC90LXQtNC+0YHRgtGD0L/QtdC9XCIgfSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgfSldO1xuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYW5kbGVTZW5kVG9BUEk6IGhhbmRsZVNlbmRUb0FQSSxcbiAgICB9O1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB2YXIgUGFzc3dvcmRTZXJ2aWNlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQYXNzd29yZFNlcnZpY2VDb250ZXh0IH0gZnJvbSBcIi4vUGFzc3dvcmRTZXJ2aWNlQ29udGV4dFwiO1xuZXhwb3J0IHZhciB1c2VQYXNzd29yZFNlcnZpY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNvbnRleHQgPSB1c2VDb250ZXh0KFBhc3N3b3JkU2VydmljZUNvbnRleHQpO1xuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXNzd29yZCBTZXJ2aWNlIGNvbnRleHQgaXMgYmVpbmcgY2FsbGVkIG91dHNpZGUgdGhlIHByb3ZpZGVyLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEl0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKTtcbiAgICByZXR1cm4gZy5uZXh0ID0gdmVyYigwKSwgZ1tcInRocm93XCJdID0gdmVyYigxKSwgZ1tcInJldHVyblwiXSA9IHZlcmIoMiksIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlQVBJIH0gZnJvbSBcImFwcC9ob29rcy91c2VBUElcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBhc3N3b3JkU2VydmljZUNvbnRleHQsIH0gZnJvbSBcIi4uL2xpYi9QYXNzd29yZFNlcnZpY2VDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gXCJzaGFyZWQvbGliL3VzZVRvYXN0L3VzZVRvYXN0XCI7XG5leHBvcnQgdmFyIFBhc3N3b3JkU2VydmljZVByb3ZpZGVyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW47XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoW10pLCBpbml0aWFsUGFzc3dvcmRzID0gX2JbMF0sIHNldEluaXRpYWxQYXNzd29yZHMgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShbXSksIHBhc3N3b3JkcyA9IF9jWzBdLCBzZXRQYXNzd29yZHMgPSBfY1sxXTtcbiAgICB2YXIgaGFuZGxlU2VuZFRvQVBJID0gdXNlQVBJKCkuaGFuZGxlU2VuZFRvQVBJO1xuICAgIHZhciB0b2FzdCA9IHVzZVRvYXN0KCkudG9hc3Q7XG4gICAgdmFyIHJlc2V0UGFzc3dvcmRzTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0UGFzc3dvcmRzKGluaXRpYWxQYXNzd29yZHMpO1xuICAgIH07XG4gICAgdmFyIGNoYW5nZVBhc3N3b3Jkc0xpc3QgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgc2V0UGFzc3dvcmRzKGNiKTtcbiAgICB9O1xuICAgIHZhciB3aXRoQXBpUmVzcG9uc2UgPSBmdW5jdGlvbiAoX2EsIGNiKSB7XG4gICAgICAgIHZhciB0aXRsZSA9IF9hLnRpdGxlO1xuICAgICAgICB2YXIgdG9hc3RQYXJhbXMgPSB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0LCByZXMsIGVfMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7IG1lc3NhZ2U6IFwiXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjYi5hcHBseSh2b2lkIDAsIGFyZ3MpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RQYXJhbXMuZGVzY3JpcHRpb24gPSByZXMubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RQYXJhbXMudmFyaWFudCA9IFwiZGVzdHJ1Y3RpdmVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdFBhcmFtcy5kZXNjcmlwdGlvbiA9IGVfMS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVfMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCh0b2FzdFBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3VsdF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIGNyZWF0ZVBhc3N3b3JkID0gd2l0aEFwaVJlc3BvbnNlKHsgdGl0bGU6IFwi0KHQvtC30LTQsNC90LjQtSDQv9Cw0YDQvtC70Y9cIiB9LCBmdW5jdGlvbiAoZm9ybURhdGEpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlXzI7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGhhbmRsZVNlbmRUb0FQSSgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmRzKGZ1bmN0aW9uIChwcmV2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3RGF0YSA9IF9fc3ByZWFkQXJyYXkoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fYXNzaWduKF9fYXNzaWduKHt9LCBmb3JtRGF0YSksIHsgaWQ6IHByZXZbMF0gPyBwcmV2WzBdLmlkICsgMSA6IDEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sIHByZXYsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJTZXJ2UHdkc1wiLCBKU09OLnN0cmluZ2lmeShuZXdEYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7IG1lc3NhZ2U6IFwi0J/QsNGA0L7Qu9GMINGD0YHQv9C10YjQvdC+INGB0L7Qt9C00LDQvSFcIiB9XTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGVfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBcItCd0LXQv9GA0LXQtNCy0LjQtNC10L3QvdCw0Y8g0L7RiNC40LHQutCwXCIgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH0pO1xuICAgIHZhciBjaGFuZ2VQYXNzd29yZCA9IHdpdGhBcGlSZXNwb25zZSh7IHRpdGxlOiBcItCg0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L/QsNGA0L7Qu9GPXCIgfSwgZnVuY3Rpb24gKGlkLCB2YWx1ZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbnRyeVRvRWRpdCwgZV8zO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBlbnRyeVRvRWRpdCA9IHBhc3N3b3Jkcy5maW5kSW5kZXgoZnVuY3Rpb24gKHBhc3N3b3JkKSB7IHJldHVybiBwYXNzd29yZC5pZCA9PT0gaWQ7IH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnlUb0VkaXQgPT09IC0xKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHsgbWVzc2FnZTogXCLQrdC70LXQvNC10L3RgiDQvdC1INCx0YvQuyDQvdCw0LnQtNC10L1cIiB9XTtcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaGFuZGxlU2VuZFRvQVBJKCldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZHMoZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZbZW50cnlUb0VkaXRdID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHByZXZbZW50cnlUb0VkaXRdKSwgdmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiU2VydlB3ZHNcIiwgSlNPTi5zdHJpbmdpZnkocHJldikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgeyBtZXNzYWdlOiBcImRvbmVcIiB9XTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGVfMyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBcItCf0YDQvtC40LfQvtGI0LvQsCDQvtGI0LjQsdC60LAuINC/0L7Qv9GA0L7QsdGD0LnRgtC1INC/0L7Qt9C20LUuXCIgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH0pO1xuICAgIHZhciBkZWxldGVQYXNzd29yZCA9IHdpdGhBcGlSZXNwb25zZSh7IHRpdGxlOiBcItCj0LTQsNC70LXQvdC40LUg0L/QsNGA0L7Qu9GPXCIgfSwgZnVuY3Rpb24gKGlkKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZV80O1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBoYW5kbGVTZW5kVG9BUEkoKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkcyhmdW5jdGlvbiAocHJldikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0RhdGEgPSBwcmV2LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5pZCA9PT0gaWQ7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJTZXJ2UHdkc1wiLCBKU09OLnN0cmluZ2lmeShuZXdEYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7IG1lc3NhZ2U6IFwi0J/QsNGA0L7Qu9GMINGD0YHQv9C10YjQvdC+INGD0LTQsNC70LXQvSFcIiB9XTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGVfNCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBcItCd0LXQv9GA0LXQtNCy0LjQtNC10L3QvdCw0Y8g0L7RiNC40LHQutCwXCIgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH0pO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwd2RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJTZXJ2UHdkc1wiKTtcbiAgICAgICAgaWYgKHB3ZHMpIHtcbiAgICAgICAgICAgIHNldFBhc3N3b3JkcyhKU09OLnBhcnNlKHB3ZHMpKTtcbiAgICAgICAgICAgIHNldEluaXRpYWxQYXNzd29yZHMoSlNPTi5wYXJzZShwd2RzKSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG4gICAgdmFyIHZhbHVlID0ge1xuICAgICAgICBpbml0aWFsUGFzc3dvcmRzOiBpbml0aWFsUGFzc3dvcmRzLFxuICAgICAgICByZXNldFBhc3N3b3Jkc0xpc3Q6IHJlc2V0UGFzc3dvcmRzTGlzdCxcbiAgICAgICAgY2hhbmdlUGFzc3dvcmRzTGlzdDogY2hhbmdlUGFzc3dvcmRzTGlzdCxcbiAgICAgICAgY2hhbmdlUGFzc3dvcmQ6IGNoYW5nZVBhc3N3b3JkLFxuICAgICAgICBjcmVhdGVQYXNzd29yZDogY3JlYXRlUGFzc3dvcmQsXG4gICAgICAgIGRlbGV0ZVBhc3N3b3JkOiBkZWxldGVQYXNzd29yZCxcbiAgICAgICAgcGFzc3dvcmRzOiBwYXNzd29yZHMsXG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3goUGFzc3dvcmRTZXJ2aWNlQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogdmFsdWUsIGNoaWxkcmVuOiBjaGlsZHJlbiB9KSk7XG59O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGcgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEl0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpO1xuICAgIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VQYXNzd29yZFNlcnZpY2UgfSBmcm9tIFwiLi4vbGliL2NvbnRleHRzL3Bhc3N3b3JkQ29udGV4dC9saWIvdXNlUGFzc3dvcmRTZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYXNzd29yZEl0ZW0gfSBmcm9tIFwiLi9wYXNzd29yZEl0ZW0vUGFzc3dvcmRJdGVtXCI7XG5leHBvcnQgdmFyIFBhc3N3b3JkTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VQYXNzd29yZFNlcnZpY2UoKSwgY2hhbmdlUGFzc3dvcmQgPSBfYS5jaGFuZ2VQYXNzd29yZCwgZGVsZXRlUGFzc3dvcmQgPSBfYS5kZWxldGVQYXNzd29yZCwgcGFzc3dvcmRzID0gX2EucGFzc3dvcmRzO1xuICAgIHZhciBoYW5kbGVDaGFuZ2VJdGVtID0gZnVuY3Rpb24gKGVudHJ5XzEsIF9hKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCBbZW50cnlfMSwgX2FdLCB2b2lkIDAsIGZ1bmN0aW9uIChlbnRyeSwgX2IpIHtcbiAgICAgICAgdmFyIHNldElzTG9hZGluZyA9IF9iLnNldElzTG9hZGluZztcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbnRyeS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjaGFuZ2VQYXNzd29yZChlbnRyeS5pZCwgZW50cnkpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICB2YXIgaGFuZGxlRGVsZXRlSXRlbSA9IGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgZGVsZXRlUGFzc3dvcmQoaWQpO1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICByZXR1cm4gcGFzc3dvcmRzLm1hcChmdW5jdGlvbiAocGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIChfanN4KFBhc3N3b3JkSXRlbSwgeyBvbkVkaXRTYXZlOiBoYW5kbGVDaGFuZ2VJdGVtLCBvbkRlbGV0ZTogaGFuZGxlRGVsZXRlSXRlbSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0sIHBhc3N3b3JkLmlkKSk7XG4gICAgfSk7XG59O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwic2hhcmVkL3VpL0lucHV0L0lucHV0XCI7XG5pbXBvcnQgeyB1c2VQYXNzd29yZFNlcnZpY2UgfSBmcm9tIFwiLi4vbGliL2NvbnRleHRzL3Bhc3N3b3JkQ29udGV4dC9saWIvdXNlUGFzc3dvcmRTZXJ2aWNlXCI7XG5pbXBvcnQgeyBmaW5kTW9zdFNpbWlsYXIgfSBmcm9tIFwic2hhcmVkL2xpYi9maW5kTW9zdFNpbW1pbGFyL2ZpbmRNb3N0U2ltbWlsYXJcIjtcbmV4cG9ydCB2YXIgUGFzc3dvcmRTZWFyY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlU3RhdGUoXCJcIiksIHNlYXJjaCA9IF9hWzBdLCBzZXRTZWFyY2ggPSBfYVsxXTtcbiAgICB2YXIgaXNNb3VudGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgICB2YXIgX2IgPSB1c2VQYXNzd29yZFNlcnZpY2UoKSwgY2hhbmdlUGFzc3dvcmRzTGlzdCA9IF9iLmNoYW5nZVBhc3N3b3Jkc0xpc3QsIHJlc2V0UGFzc3dvcmRzTGlzdCA9IF9iLnJlc2V0UGFzc3dvcmRzTGlzdCwgaW5pdGlhbFBhc3N3b3JkcyA9IF9iLmluaXRpYWxQYXNzd29yZHM7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWFyY2gubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNldFwiKTtcbiAgICAgICAgICAgIHJlc2V0UGFzc3dvcmRzTGlzdCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWFyY2hUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjaGFuZ2VQYXNzd29yZHNMaXN0KGZpbmRNb3N0U2ltaWxhcihpbml0aWFsUGFzc3dvcmRzLCBcInNlcnZpY2VcIiwgc2VhcmNoLCA2KSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGVhclRpbWVvdXQoc2VhcmNoVGltZW91dCk7IH07XG4gICAgfSwgW3NlYXJjaF0pO1xuICAgIHJldHVybiBfanN4KElucHV0LCB7IHBsYWNlaG9sZGVyOiBcIlxcdTA0M0ZcXHUwNDNFXFx1MDQzOFxcdTA0NDFcXHUwNDNBXCIsIHZhbHVlOiBzZWFyY2gsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTsgfSB9KTtcbn07XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgUGFzc3dvcmRMaXN0IH0gZnJvbSBcIi4vUGFzc3dvcmRMaXN0XCI7XG5pbXBvcnQgeyBQYXNzd29yZFNlcnZpY2VQcm92aWRlciB9IGZyb20gXCIuLi9saWIvY29udGV4dHMvcGFzc3dvcmRDb250ZXh0L3VpL1Bhc3N3b3JkU2VydmljZVByb3ZpZGVyXCI7XG5pbXBvcnQgeyBDcmVhdGVQYXNzd29yZEZvcm0gfSBmcm9tIFwiLi9wYXNzd29yZE1hbmFnZW1lbnQvQ3JlYXRlUGFzc3dvcmRGb3JtXCI7XG5pbXBvcnQgeyBQYXNzd29yZFNlYXJjaCB9IGZyb20gXCIuL1Bhc3N3b3JkU2VhcmNoXCI7XG52YXIgUGFzc3dvcmRzUGFnZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWU7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJweC0zIG1heC13LTV4bCBmbGV4IGdhcC01IGZsZXgtY29sIG14LWF1dG9cIiwgY2hpbGRyZW46IFtfanN4KFwicFwiLCB7IGNsYXNzTmFtZTogXCJ0ZXh0LTR4bFwiLCBjaGlsZHJlbjogXCJcXHUwNDIxXFx1MDQzNVxcdTA0NDBcXHUwNDMyXFx1MDQzOFxcdTA0NDFcXHUwNDRCLVxcdTA0M0ZcXHUwNDMwXFx1MDQ0MFxcdTA0M0VcXHUwNDNCXFx1MDQzOFwiIH0pLCBfanN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgZ2FwLTNcIiwgY2hpbGRyZW46IF9qc3hzKFBhc3N3b3JkU2VydmljZVByb3ZpZGVyLCB7IGNoaWxkcmVuOiBbX2pzeChDcmVhdGVQYXNzd29yZEZvcm0sIHt9KSwgX2pzeChQYXNzd29yZFNlYXJjaCwge30pLCBfanN4KFBhc3N3b3JkTGlzdCwge30pXSB9KSB9KV0gfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3Jkc1BhZ2U7XG4iLCJpbXBvcnQgeyBqc3hzIGFzIF9qc3hzLCBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZFRpdGxlIH0gZnJvbSBcInNoYXJlZC91aS9DYXJkL0NhcmRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb29sdGlwUHJvdmlkZXIgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXRvb2x0aXBcIjtcbmltcG9ydCB7IFBhc3N3b3JkSXRlbUFjdGlvbnMgfSBmcm9tIFwiLi9QYXNzd29yZEl0ZW1BY3Rpb25zXCI7XG5pbXBvcnQgeyBQYXNzd29yZFNldHRpbmdzIH0gZnJvbSBcIi4uL3Bhc3N3b3JkTWFuYWdlbWVudC9QYXNzd29yZFNldHRpbmdzXCI7XG5leHBvcnQgdmFyIFBhc3N3b3JkSXRlbSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBwYXNzd29yZCA9IF9hLnBhc3N3b3JkLCBvbkRlbGV0ZSA9IF9hLm9uRGVsZXRlLCBvbkVkaXRDbG9zZSA9IF9hLm9uRWRpdENsb3NlLCBvbkVkaXRPcGVuID0gX2Eub25FZGl0T3Blbiwgb25FZGl0U2F2ZSA9IF9hLm9uRWRpdFNhdmU7XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoZmFsc2UpLCBpc0VkaXRPcGVuID0gX2JbMF0sIHNldElzRWRpdE9wZW4gPSBfYlsxXTtcbiAgICB2YXIgaGFuZGxlRGVsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAob25EZWxldGUpIHtcbiAgICAgICAgICAgIG9uRGVsZXRlKHBhc3N3b3JkLmlkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGhhbmRsZUVkaXRDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0SXNFZGl0T3BlbihmdW5jdGlvbiAocHJldikge1xuICAgICAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgICAgICBvbkVkaXRDbG9zZSAmJiBvbkVkaXRDbG9zZShwYXNzd29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvbkVkaXRPcGVuICYmIG9uRWRpdE9wZW4ocGFzc3dvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICFwcmV2O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBoYW5kbGVDb3B5VG9DbGlwYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHBhc3N3b3JkLnBhc3N3b3JkKTtcbiAgICB9O1xuICAgIHZhciBoYW5kbGVFZGl0U2F2ZSA9IGZ1bmN0aW9uIChwYXNzd29yZCwgb3B0cykge1xuICAgICAgICBpZiAob25FZGl0U2F2ZSkge1xuICAgICAgICAgICAgb25FZGl0U2F2ZShwYXNzd29yZCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoX2pzeChDYXJkLCB7IGNsYXNzTmFtZTogXCJmbGV4IGZsZXgtY29sIGdhcC00IHAtNlwiLCBjaGlsZHJlbjogX2pzeHMoVG9vbHRpcFByb3ZpZGVyLCB7IGNoaWxkcmVuOiBbX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCIsIGNoaWxkcmVuOiBbX2pzeHMoQ2FyZFRpdGxlLCB7IGNoaWxkcmVuOiBbcGFzc3dvcmQuaWQsIFwiLiBcIiwgcGFzc3dvcmQuc2VydmljZV0gfSksIF9qc3goUGFzc3dvcmRJdGVtQWN0aW9ucywgeyBpc0VkaXQ6IGlzRWRpdE9wZW4sIG9uQ29weTogaGFuZGxlQ29weVRvQ2xpcGJvYXJkLCBvbkRlbGV0ZTogaGFuZGxlRGVsZXRlLCBvbkVkaXRPcGVuOiBoYW5kbGVFZGl0Q2xpY2sgfSldIH0pLCBpc0VkaXRPcGVuICYmIChfanN4KFBhc3N3b3JkU2V0dGluZ3MsIHsgb25TdWJtaXQ6IGhhbmRsZUVkaXRTYXZlLCBpbml0aWFsVmFsdWVzOiBwYXNzd29yZCwgc3VibWl0QnV0dG9uVGV4dDogXCJcXHUwNDFGXFx1MDQ0MFxcdTA0MzhcXHUwNDNDXFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQ0MlxcdTA0NENcIiB9KSldIH0pIH0pKTtcbn07XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgQWxlcnREaWFsb2csIEFsZXJ0RGlhbG9nQWN0aW9uLCBBbGVydERpYWxvZ0NhbmNlbCwgQWxlcnREaWFsb2dDb250ZW50LCBBbGVydERpYWxvZ0Rlc2NyaXB0aW9uLCBBbGVydERpYWxvZ0Zvb3RlciwgQWxlcnREaWFsb2dIZWFkZXIsIEFsZXJ0RGlhbG9nVGl0bGUsIEFsZXJ0RGlhbG9nVHJpZ2dlciwgfSBmcm9tIFwic2hhcmVkL3VpL0FsZXJ0RGlhbG9nL0FsZXJ0RGlhbG9nXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwic2hhcmVkL3VpL0J1dHRvbi9CdXR0b25cIjtcbmltcG9ydCB7IFRvb2x0aXAsIFRvb2x0aXBDb250ZW50LCBUb29sdGlwVHJpZ2dlciB9IGZyb20gXCJzaGFyZWQvdWkvVG9vbHRpcC9Ub29sdGlwXCI7XG5pbXBvcnQgeyBDbGlwYm9hcmQsIFBlbmNpbCwgUGVuY2lsT2ZmLCBUcmFzaCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmV4cG9ydCB2YXIgUGFzc3dvcmRJdGVtQWN0aW9ucyA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBvbkNvcHkgPSBfYS5vbkNvcHksIG9uRGVsZXRlID0gX2Eub25EZWxldGUsIG9uRWRpdE9wZW4gPSBfYS5vbkVkaXRPcGVuLCBpc0VkaXQgPSBfYS5pc0VkaXQ7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmbGV4IGdhcC0yXCIsIGNoaWxkcmVuOiBbX2pzeHMoVG9vbHRpcCwgeyBjaGlsZHJlbjogW19qc3goVG9vbHRpcFRyaWdnZXIsIHsgYXNDaGlsZDogdHJ1ZSwgY2hpbGRyZW46IF9qc3goQnV0dG9uLCB7IHZhcmlhbnQ6IFwiZ2hvc3RcIiwgb25DbGljazogb25FZGl0T3BlbiwgY2hpbGRyZW46IGlzRWRpdCA/IF9qc3goUGVuY2lsT2ZmLCB7fSkgOiBfanN4KFBlbmNpbCwge30pIH0pIH0pLCBfanN4KFRvb2x0aXBDb250ZW50LCB7IGNoaWxkcmVuOiBpc0VkaXQgPyBcItCe0YLQvNC10L3QuNGC0Ywg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtVwiIDogXCLQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjFwiIH0pXSB9KSwgX2pzeHMoVG9vbHRpcCwgeyBjaGlsZHJlbjogW19qc3goVG9vbHRpcFRyaWdnZXIsIHsgYXNDaGlsZDogdHJ1ZSwgY2hpbGRyZW46IF9qc3goQnV0dG9uLCB7IHZhcmlhbnQ6IFwiZ2hvc3RcIiwgb25DbGljazogb25Db3B5LCBjaGlsZHJlbjogX2pzeChDbGlwYm9hcmQsIHt9KSB9KSB9KSwgX2pzeChUb29sdGlwQ29udGVudCwgeyBjaGlsZHJlbjogXCJcXHUwNDQxXFx1MDQzQVxcdTA0M0VcXHUwNDNGXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQ0Q1wiIH0pXSB9KSwgX2pzeHMoQWxlcnREaWFsb2csIHsgY2hpbGRyZW46IFtfanN4KEFsZXJ0RGlhbG9nVHJpZ2dlciwgeyBhc0NoaWxkOiB0cnVlLCBjaGlsZHJlbjogX2pzeChCdXR0b24sIHsgdmFyaWFudDogXCJnaG9zdFwiLCBjaGlsZHJlbjogX2pzeChUcmFzaCwge30pIH0pIH0pLCBfanN4cyhBbGVydERpYWxvZ0NvbnRlbnQsIHsgY2hpbGRyZW46IFtfanN4cyhBbGVydERpYWxvZ0hlYWRlciwgeyBjaGlsZHJlbjogW19qc3goQWxlcnREaWFsb2dUaXRsZSwgeyBjaGlsZHJlbjogXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDNGXFx1MDQzMFxcdTA0NDBcXHUwNDNFXFx1MDQzQlxcdTA0NEZcIiB9KSwgX2pzeChBbGVydERpYWxvZ0Rlc2NyaXB0aW9uLCB7IGNoaWxkcmVuOiBcIlxcdTA0MkRcXHUwNDQyXFx1MDQzRSBcXHUwNDM0XFx1MDQzNVxcdTA0MzlcXHUwNDQxXFx1MDQ0MlxcdTA0MzJcXHUwNDM4XFx1MDQzNSBcXHUwNDNEXFx1MDQzNVxcdTA0MzJcXHUwNDNFXFx1MDQzN1xcdTA0M0NcXHUwNDNFXFx1MDQzNlxcdTA0M0RcXHUwNDNFIFxcdTA0M0VcXHUwNDQyXFx1MDQzQ1xcdTA0MzVcXHUwNDNEXFx1MDQzOFxcdTA0NDJcXHUwNDRDLiBcXHUwNDJEXFx1MDQ0MlxcdTA0M0UgXFx1MDQzRlxcdTA0NDBcXHUwNDM4XFx1MDQzMlxcdTA0MzVcXHUwNDM0XFx1MDQzNVxcdTA0NDIgXFx1MDQzQSBcXHUwNDMxXFx1MDQzNVxcdTA0MzdcXHUwNDMyXFx1MDQzRVxcdTA0MzdcXHUwNDMyXFx1MDQ0MFxcdTA0MzBcXHUwNDQyXFx1MDQzRFxcdTA0M0VcXHUwNDNDXFx1MDQ0MyBcXHUwNDQzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQ0RSBcXHUwNDMyXFx1MDQzMFxcdTA0NDhcXHUwNDM1XFx1MDQzM1xcdTA0M0UgXFx1MDQzRlxcdTA0MzBcXHUwNDQwXFx1MDQzRVxcdTA0M0JcXHUwNDRGLlwiIH0pXSB9KSwgX2pzeHMoQWxlcnREaWFsb2dGb290ZXIsIHsgY2hpbGRyZW46IFtfanN4KEFsZXJ0RGlhbG9nQ2FuY2VsLCB7IGNoaWxkcmVuOiBcIlxcdTA0MUVcXHUwNDQyXFx1MDQzQ1xcdTA0MzVcXHUwNDNEXFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIgfSksIF9qc3goQWxlcnREaWFsb2dBY3Rpb24sIHsgb25DbGljazogb25EZWxldGUsIGNoaWxkcmVuOiBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzNFxcdTA0NDJcXHUwNDMyXFx1MDQzNVxcdTA0NDBcXHUwNDM0XFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIgfSldIH0pXSB9KV0gfSldIH0pKTtcbn07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZyA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIGcubmV4dCA9IHZlcmIoMCksIGdbXCJ0aHJvd1wiXSA9IHZlcmIoMSksIGdbXCJyZXR1cm5cIl0gPSB2ZXJiKDIpLCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZVBhc3N3b3JkU2VydmljZSB9IGZyb20gXCJwYWdlcy9QYXNzd29yZHNQYWdlL2xpYi9jb250ZXh0cy9wYXNzd29yZENvbnRleHQvbGliL3VzZVBhc3N3b3JkU2VydmljZVwiO1xuaW1wb3J0IHsgUGFzc3dvcmRTZXR0aW5ncyB9IGZyb20gXCIuL1Bhc3N3b3JkU2V0dGluZ3NcIjtcbmV4cG9ydCB2YXIgQ3JlYXRlUGFzc3dvcmRGb3JtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjcmVhdGVQYXNzd29yZCA9IHVzZVBhc3N3b3JkU2VydmljZSgpLmNyZWF0ZVBhc3N3b3JkO1xuICAgIHZhciBoYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAocF8xLCBfYSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgW3BfMSwgX2FdLCB2b2lkIDAsIGZ1bmN0aW9uIChwLCBfYikge1xuICAgICAgICB2YXIgc2V0SXNMb2FkaW5nID0gX2Iuc2V0SXNMb2FkaW5nO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNyZWF0ZVBhc3N3b3JkKHApXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZmxleCBmbGV4LWNvbCBnYXAtNCBwLTZcIiwgY2hpbGRyZW46IF9qc3goUGFzc3dvcmRTZXR0aW5ncywgeyBvblN1Ym1pdDogaGFuZGxlU3VibWl0IH0pIH0pKTtcbn07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGcgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEl0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpO1xuICAgIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInNoYXJlZC91aS9CdXR0b24vQnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJzaGFyZWQvdWkvSW5wdXQvSW5wdXRcIjtcbmV4cG9ydCB2YXIgUGFzc3dvcmRGb3JtID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIG9uU3VibWl0ID0gX2Eub25TdWJtaXQsIG9uQ2hhbmdlID0gX2Eub25DaGFuZ2UsIHN1Ym1pdEJ1dHRvblRleHQgPSBfYS5zdWJtaXRCdXR0b25UZXh0LCB2YWx1ZXMgPSBfYS52YWx1ZXMsIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIHByb3BzID0gX19yZXN0KF9hLCBbXCJvblN1Ym1pdFwiLCBcIm9uQ2hhbmdlXCIsIFwic3VibWl0QnV0dG9uVGV4dFwiLCBcInZhbHVlc1wiLCBcImNoaWxkcmVuXCJdKTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShmYWxzZSksIGlzTG9hZGluZyA9IF9iWzBdLCBzZXRJc0xvYWRpbmcgPSBfYlsxXTtcbiAgICB2YXIgaGFuZGxlSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChvbkNoYW5nZSlcbiAgICAgICAgICAgIG9uQ2hhbmdlKChfYSA9IHt9LCBfYVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlLCBfYSkpO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZUNyZWF0ZVBhc3N3b3JkID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChvblN1Ym1pdCkge1xuICAgICAgICAgICAgICAgIG9uU3VibWl0KHZhbHVlcywgeyBzZXRJc0xvYWRpbmc6IHNldElzTG9hZGluZyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfSk7XG4gICAgfSk7IH07XG4gICAgcmV0dXJuIChfanN4cyhcImZvcm1cIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IFwiZmxleCBmbGV4LWNvbCBnYXAtMlwiLCBvblN1Ym1pdDogaGFuZGxlQ3JlYXRlUGFzc3dvcmQgfSwgcHJvcHMsIHsgY2hpbGRyZW46IFtfanN4cyhcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmbGV4IGZsZXgtcm93IGdhcC0yXCIsIGNoaWxkcmVuOiBbX2pzeChJbnB1dCwgeyBuYW1lOiBcInNlcnZpY2VcIiwgdmFsdWU6IHZhbHVlcy5zZXJ2aWNlLCBwbGFjZWhvbGRlcjogXCJcXHUwNDIxXFx1MDQzNVxcdTA0NDBcXHUwNDMyXFx1MDQzOFxcdTA0NDFcIiwgb25DaGFuZ2U6IGhhbmRsZUlucHV0Q2hhbmdlIH0pLCBfanN4KElucHV0LCB7IG5hbWU6IFwicGFzc3dvcmRcIiwgdmFsdWU6IHZhbHVlcy5wYXNzd29yZCwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxRlxcdTA0MzBcXHUwNDQwXFx1MDQzRVxcdTA0M0JcXHUwNDRDXCIsIG9uQ2hhbmdlOiBoYW5kbGVJbnB1dENoYW5nZSB9KSwgX2pzeChCdXR0b24sIHsgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcIm1sLTEwXCIsIGRpc2FibGVkOiB2YWx1ZXMucGFzc3dvcmQgPT09IFwiXCIgfHwgdmFsdWVzLnNlcnZpY2UgPT09IFwiXCIgfHwgaXNMb2FkaW5nID09PSB0cnVlLCBpc0xvYWRpbmc6IGlzTG9hZGluZywgY2hpbGRyZW46IHN1Ym1pdEJ1dHRvblRleHQgfHwgXCLRgdC+0LfQtNCw0YLRjCDQvdC+0LLRi9C5INC/0LDRgNC+0LvRjFwiIH0pXSB9KSwgY2hpbGRyZW5dIH0pKSk7XG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVBhc3N3b3JkIH0gZnJvbSBcInNoYXJlZC9saWIvZ2VuZXJhdGVQYXNzd29yZC9nZW5lcmF0ZVBhc3N3b3JkXCI7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJzaGFyZWQvdWkvQ2hlY2tib3gvQ2hlY2tib3hcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcInNoYXJlZC91aS9JbnB1dC9JbnB1dFwiO1xuaW1wb3J0IHsgRm9ybUdlbmVyYXRvciB9IGZyb20gXCJ3aWRnZXRzL0Zvcm1HZW5lcmF0b3IvdWkvRm9ybUdlbmVyYXRvclwiO1xuaW1wb3J0IHsgU2xpZGVyV2l0aElucHV0IH0gZnJvbSBcIndpZGdldHMvU2xpZGVyV2l0aElucHV0XCI7XG52YXIgcGFzc3dvcmRTZXR0aW5nc1NjaGVtYSA9IHtcbiAgICBoYXNTeW1ib2xzOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICB0ZXh0OiBcItCh0LjQvNCy0L7Qu9GLXCIsXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhZnRlclwiLFxuICAgICAgICB9LFxuICAgICAgICBpbnB1dEluZm86IHtcbiAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGhhc051bWJlcnM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHRleHQ6IFwi0KbQuNGE0YDRi1wiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWZ0ZXJcIixcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXRJbmZvOiB7XG4gICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBoYXNVcHBlcmNhc2U6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHRleHQ6IFwi0JLQtdGA0YXQvdC40Lkg0YDQtdCz0LjRgdGC0YBcIixcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFmdGVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0SW5mbzoge1xuICAgICAgICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgaGFzTG93ZXJjYXNlOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICB0ZXh0OiBcItCd0LjQttC90LjQuSDRgNC10LPQuNGB0YLRgFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiYWZ0ZXJcIixcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXRJbmZvOiB7XG4gICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5leHBvcnQgdmFyIFBhc3N3b3JkRm9ybVNldHRpbmdzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIG9uQ2hhbmdlID0gX2Eub25DaGFuZ2UsIHBhc3N3b3JkID0gX2EucGFzc3dvcmQ7XG4gICAgdmFyIF9iID0gdXNlU3RhdGUoW10pLCBnZW5lcmF0aW9uT3B0aW9ucyA9IF9iWzBdLCBzZXRHZW5lcmF0aW9uT3B0aW9ucyA9IF9iWzFdO1xuICAgIHZhciBfYyA9IHVzZVN0YXRlKGZhbHNlKSwgaXNHZW5lcmF0aW9uTWFudWFsID0gX2NbMF0sIHNldElzR2VuZXJhdGlvbk1hbnVhbCA9IF9jWzFdO1xuICAgIHZhciBfZCA9IHVzZVN0YXRlKGZhbHNlKSwgaXNVc2VySW50ZXJhY3RlZCA9IF9kWzBdLCBzZXRJc1VzZXJJbnRlcmFjdGVkID0gX2RbMV07XG4gICAgdmFyIF9lID0gdXNlU3RhdGUoMCksIGdlbmVyYXRpb25MZW5ndGggPSBfZVswXSwgc2V0R2VuZXJhdGlvbkxlbmd0aCA9IF9lWzFdO1xuICAgIHZhciBfZiA9IHVzZVN0YXRlKFwiXCIpLCBtYW51YWxDaGFyYWN0ZXJzID0gX2ZbMF0sIHNldE1hbnVhbENoYXJhY3RlcnMgPSBfZlsxXTtcbiAgICB2YXIgbWF4U3ltYm9scyA9IDMwO1xuICAgIHZhciBoYW5kbGVPcHRpb25zQ2hhbmdlID0gZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICBzZXRHZW5lcmF0aW9uT3B0aW9ucyhmdW5jdGlvbiAocHJldikge1xuICAgICAgICAgICAgdmFyIG5ld09wdGlvbnMgPSBfX3NwcmVhZEFycmF5KFtdLCBwcmV2LCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3T3B0aW9ucy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdPcHRpb25zID0gbmV3T3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikgeyByZXR1cm4ga2V5ICE9PSBvcHRpb247IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMoY2hhbmdlKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgX2IgPSBfYVtfaV0sIGtleSA9IF9iWzBdLCB2YWx1ZSA9IF9iWzFdO1xuICAgICAgICAgICAgICAgIF9sb29wXzEoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3T3B0aW9ucy5sZW5ndGggPCAxID8gcHJldiA6IG5ld09wdGlvbnM7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRJc1VzZXJJbnRlcmFjdGVkKHRydWUpO1xuICAgIH07XG4gICAgdmFyIGhhbmRsZU9wdGlvbnNMZW5naHRDaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBzZXRHZW5lcmF0aW9uTGVuZ3RoKGUpO1xuICAgICAgICBzZXRJc1VzZXJJbnRlcmFjdGVkKHRydWUpO1xuICAgIH07XG4gICAgdmFyIGFuYWx5emVQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IFtdO1xuICAgICAgICAvW2Etel0vLnRlc3QocGFzc3dvcmQpICYmIG9wdGlvbnMucHVzaChcImhhc0xvd2VyY2FzZVwiKTtcbiAgICAgICAgL1suLDtcXFtcXF1dLy50ZXN0KHBhc3N3b3JkKSAmJiBvcHRpb25zLnB1c2goXCJoYXNTeW1ib2xzXCIpO1xuICAgICAgICAvXFxkLy50ZXN0KHBhc3N3b3JkKSAmJiBvcHRpb25zLnB1c2goXCJoYXNOdW1iZXJzXCIpO1xuICAgICAgICAvW0EtWl0vLnRlc3QocGFzc3dvcmQpICYmIG9wdGlvbnMucHVzaChcImhhc1VwcGVyY2FzZVwiKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfTtcbiAgICB2YXIgaGFuZGxlT3B0aW9uc1ZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHBhc3N3b3JkU2V0dGluZ3NTY2hlbWEpLnJlZHVjZShmdW5jdGlvbiAocHJldiwgb3B0aW9uKSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHByZXYpLCAoX2EgPSB7fSwgX2Fbb3B0aW9uXSA9IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogZ2VuZXJhdGlvbk9wdGlvbnMuaW5jbHVkZXMob3B0aW9uKSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXNHZW5lcmF0aW9uTWFudWFsLFxuICAgICAgICAgICAgfSwgX2EpKTtcbiAgICAgICAgfSwge30pO1xuICAgIH07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFwYXNzd29yZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIG9wdHMgPSBhbmFseXplUGFzc3dvcmQocGFzc3dvcmQpO1xuICAgICAgICBzZXRHZW5lcmF0aW9uT3B0aW9ucyhvcHRzKTtcbiAgICAgICAgc2V0R2VuZXJhdGlvbkxlbmd0aChwYXNzd29yZC5sZW5ndGgpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzVXNlckludGVyYWN0ZWQgfHwgIW9uQ2hhbmdlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgcGFzc3dvcmRPcHRpb25zID0ge1xuICAgICAgICAgICAgY2hhcmFjdGVyQ291bnQ6IGdlbmVyYXRpb25MZW5ndGgsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0dlbmVyYXRpb25NYW51YWwgJiYgbWFudWFsQ2hhcmFjdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwYXNzd29yZE9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcGFzc3dvcmRPcHRpb25zKSwgeyB1c2VyQ2hhcmFjdGVyczogbWFudWFsQ2hhcmFjdGVycyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnZW5lcmF0aW9uT3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwYXNzd29yZE9wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcGFzc3dvcmRPcHRpb25zKSwgZ2VuZXJhdGlvbk9wdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBvcHRpb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcmV2KSwgKF9hID0ge30sIF9hW29wdGlvbl0gPSB0cnVlLCBfYSkpO1xuICAgICAgICAgICAgfSwge30pKTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3Qua2V5cyhwYXNzd29yZE9wdGlvbnMpLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgIG9uQ2hhbmdlKHsgcGFzc3dvcmQ6IGdlbmVyYXRlUGFzc3dvcmQocGFzc3dvcmRPcHRpb25zKSB9KTtcbiAgICB9LCBbZ2VuZXJhdGlvbkxlbmd0aCwgZ2VuZXJhdGlvbk9wdGlvbnMsIG1hbnVhbENoYXJhY3RlcnNdKTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgZ2FwLTRcIiwgY2hpbGRyZW46IFtfanN4KFNsaWRlcldpdGhJbnB1dCwgeyBvbkNoYW5nZTogaGFuZGxlT3B0aW9uc0xlbmdodENoYW5nZSwgbWF4OiBtYXhTeW1ib2xzLCB2YWx1ZTogZ2VuZXJhdGlvbkxlbmd0aCB9KSwgX2pzeHMoXCJkaXZcIiwgeyBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyXCIsIGNoaWxkcmVuOiBbX2pzeChDaGVja2JveCwgeyBjaGVja2VkOiBpc0dlbmVyYXRpb25NYW51YWwsIG9uQ2hlY2tlZENoYW5nZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0SXNHZW5lcmF0aW9uTWFudWFsKGZ1bmN0aW9uIChwcmV2KSB7IHJldHVybiAhcHJldjsgfSk7IH0gfSksIF9qc3goXCJwXCIsIHsgY2hpbGRyZW46IFwiXFx1MDQ0MVxcdTA0MzJcXHUwNDNFXFx1MDQzOSBcXHUwNDNEXFx1MDQzMFxcdTA0MzFcXHUwNDNFXFx1MDQ0MFwiIH0pXSB9KSwgaXNHZW5lcmF0aW9uTWFudWFsICYmIChfanN4KElucHV0LCB7IG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkgeyByZXR1cm4gc2V0TWFudWFsQ2hhcmFjdGVycyhlLnRhcmdldC52YWx1ZSk7IH0sIHZhbHVlOiBtYW51YWxDaGFyYWN0ZXJzIH0pKV0gfSksIF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZmxleCBnYXAtMlwiLCBjaGlsZHJlbjogX2pzeChGb3JtR2VuZXJhdG9yLCB7IG9uQ2hhbmdlOiBoYW5kbGVPcHRpb25zQ2hhbmdlLCBzY2hlbWE6IHBhc3N3b3JkU2V0dGluZ3NTY2hlbWEsIHZhbHVlczogaGFuZGxlT3B0aW9uc1ZhbHVlcygpLCBjbGFzc05hbWU6IFwianVzdGlmeS1jZW50ZXJcIiB9KSB9KV0gfSkpO1xufTtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBhc3N3b3JkRm9ybSB9IGZyb20gXCIuL1Bhc3N3b3JkRm9ybVwiO1xuaW1wb3J0IHsgUGFzc3dvcmRGb3JtU2V0dGluZ3MgfSBmcm9tIFwiLi9QYXNzd29yZEdlbmVyYXRpb25TZXR0aW5nc1wiO1xuZXhwb3J0IHZhciBQYXNzd29yZFNldHRpbmdzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGluaXRpYWxWYWx1ZXMgPSBfYS5pbml0aWFsVmFsdWVzLCBvblN1Ym1pdCA9IF9hLm9uU3VibWl0LCBzdWJtaXRCdXR0b25UZXh0ID0gX2Euc3VibWl0QnV0dG9uVGV4dDtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZShpbml0aWFsVmFsdWVzIHx8IHtcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgIHNlcnZpY2U6IFwiXCIsXG4gICAgfSksIHNldHRpbmdzID0gX2JbMF0sIHNldFNldHRpbmdzID0gX2JbMV07XG4gICAgdmFyIGhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gZnVuY3Rpb24gKG5ld0tleXMpIHtcbiAgICAgICAgc2V0U2V0dGluZ3MoZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcmV2KSwgbmV3S2V5cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3S2V5cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3goUGFzc3dvcmRGb3JtLCB7IG9uU3VibWl0OiBvblN1Ym1pdCwgb25DaGFuZ2U6IGhhbmRsZVBhc3N3b3JkQ2hhbmdlLCB2YWx1ZXM6IHNldHRpbmdzLCBzdWJtaXRCdXR0b25UZXh0OiBzdWJtaXRCdXR0b25UZXh0LCBjaGlsZHJlbjogX2pzeChQYXNzd29yZEZvcm1TZXR0aW5ncywgeyBvbkNoYW5nZTogaGFuZGxlUGFzc3dvcmRDaGFuZ2UsIHBhc3N3b3JkOiBzZXR0aW5ncyA/IHNldHRpbmdzLnBhc3N3b3JkIDogdW5kZWZpbmVkIH0pIH0pKTtcbn07XG4iLCJleHBvcnQgdmFyIGZpbmRNb3N0U2ltaWxhciA9IGZ1bmN0aW9uIChpdGVtcywga2V5LCBzZWFyY2hTdHJpbmcsIG1pblNpbW1pbGFyaXR5KSB7XG4gICAgLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINCy0YvRh9C40YHQu9C10L3QuNGPINGA0LDRgdGB0YLQvtGP0L3QuNGPINCb0LXQstC10L3RiNGC0LXQudC90LBcbiAgICBmdW5jdGlvbiBsZXZlbnNodGVpbkRpc3RhbmNlKGEsIGIpIHtcbiAgICAgICAgdmFyIG1hdHJpeCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtYXRyaXhbaV0gPSBbaV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPD0gYS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbWF0cml4WzBdW2pdID0gajtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBiLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8PSBhLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJbaSAtIDFdID09PSBhW2ogLSAxXSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRyaXhbaV1bal0gPSBtYXRyaXhbaSAtIDFdW2ogLSAxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeFtpXVtqXSA9IE1hdGgubWluKG1hdHJpeFtpIC0gMV1baiAtIDFdICsgMSwgLy8g0JfQsNC80LXQvdCwXG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeFtpXVtqIC0gMV0gKyAxLCAvLyDQktGB0YLQsNCy0LrQsFxuICAgICAgICAgICAgICAgICAgICBtYXRyaXhbaSAtIDFdW2pdICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRyaXhbYi5sZW5ndGhdW2EubGVuZ3RoXTtcbiAgICB9XG4gICAgLy8g0KHRgNCw0LLQvdC10L3QuNC1INCy0YHQtdGFINC+0LHRitC10LrRgtC+0LIg0YEg0LLQstC10LTRkdC90L3QvtC5INGB0YLRgNC+0LrQvtC5XG4gICAgdmFyIHNpbW1pbGFyaXRpZXMgPSBpdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGxldmVuc2h0ZWluRGlzdGFuY2UoaXRlbVtrZXldLnRvTG93ZXJDYXNlKCksIHNlYXJjaFN0cmluZy50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KTtcbiAgICBpdGVtcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBzaW1taWxhcml0aWVzW2l0ZW1zLmluZGV4T2YoYSldIC0gc2ltbWlsYXJpdGllc1tpdGVtcy5pbmRleE9mKGIpXTsgfSk7IC8vINCh0L7RgNGC0LjRgNGD0LXQvCDQv9C+INGB0YXQvtC20LXRgdGC0LhcbiAgICBpZiAobWluU2ltbWlsYXJpdHkpIHtcbiAgICAgICAgLy8g0KTQuNC70YzRgtGA0YPQtdC8INCy0YHQtSDQvdC1INC/0L7QtNGF0L7QtNGP0YnQuNC1INC/0L7QtCDQvNC40L3QuNC80LDQu9GM0L3Rg9GOINGB0YXQvtC20LXRgdGC0Ywg0L/QvtC30LjRhtC40LhcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIHNpbW1pbGFyaXRpZXNbaXRlbXMuaW5kZXhPZihpdGVtKV0gPCBtaW5TaW1taWxhcml0eTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbn07XG4iLCJleHBvcnQgdmFyIGdlbmVyYXRlUGFzc3dvcmQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5jaGFyYWN0ZXJDb3VudClcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgdmFyIGNvdW50ID0gdHlwZW9mIG9wdGlvbnMuY2hhcmFjdGVyQ291bnQgPT09IFwic3RyaW5nXCJcbiAgICAgICAgPyBwYXJzZUludChvcHRpb25zLmNoYXJhY3RlckNvdW50LCAxMClcbiAgICAgICAgOiBvcHRpb25zLmNoYXJhY3RlckNvdW50O1xuICAgIHZhciBudW1iZXJzID0gXCIwMTIzNDU2Nzg5XCI7XG4gICAgdmFyIHN5bWJvbHMgPSBcIiFAIyQlXiYqKClfKy09W117fXw7OidcXFwiLC48Pj8vXCI7XG4gICAgdmFyIHVwcGVyY2FzZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcbiAgICB2YXIgbG93ZXJjYXNlID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiO1xuICAgIHZhciBjaGFyUG9vbCA9IFwiXCI7XG4gICAgaWYgKG9wdGlvbnMudXNlckNoYXJhY3RlcnMpIHtcbiAgICAgICAgY2hhclBvb2wgPSBvcHRpb25zLnVzZXJDaGFyYWN0ZXJzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzTnVtYmVycylcbiAgICAgICAgICAgIGNoYXJQb29sICs9IG51bWJlcnM7XG4gICAgICAgIGlmIChvcHRpb25zLmhhc1N5bWJvbHMpXG4gICAgICAgICAgICBjaGFyUG9vbCArPSBzeW1ib2xzO1xuICAgICAgICBpZiAob3B0aW9ucy5oYXNVcHBlcmNhc2UpXG4gICAgICAgICAgICBjaGFyUG9vbCArPSB1cHBlcmNhc2U7XG4gICAgICAgIGlmIChvcHRpb25zLmhhc0xvd2VyY2FzZSlcbiAgICAgICAgICAgIGNoYXJQb29sICs9IGxvd2VyY2FzZTtcbiAgICB9XG4gICAgLy8g0JXRgdC70Lgg0L/Rg9C7INC/0YPRgdGC0L7QuSDigJQg0L7RiNC40LHQutCwXG4gICAgaWYgKGNoYXJQb29sLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjaGFyYWN0ZXIgdHlwZXMgc2VsZWN0ZWQuIEVuYWJsZSBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyIHR5cGUuXCIpO1xuICAgIH1cbiAgICAvLyDQk9C10L3QtdGA0LDRhtC40Y8g0L/QsNGA0L7Qu9GPXG4gICAgdmFyIHBhc3N3b3JkID0gXCJcIjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgdmFyIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhclBvb2wubGVuZ3RoKTtcbiAgICAgICAgcGFzc3dvcmQgKz0gY2hhclBvb2xbcmFuZG9tSW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4gcGFzc3dvcmQ7XG59O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJzaGFyZWQvbGliL2NuL2NuXCI7XG5leHBvcnQgdmFyIFdpdGhGb3JtTGFiZWxzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIGxhYmVsID0gX2EubGFiZWwsIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgZGlzYWJsZWQgPSBfYS5kaXNhYmxlZCwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwibGFiZWxcIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlZFwiXSk7XG4gICAgcmV0dXJuIChfanN4cyhcImRpdlwiLCBfX2Fzc2lnbih7IGNsYXNzTmFtZTogY24oXCJmbGV4IGdhcC0yIGZsZXgtMSBpdGVtcy1jZW50ZXJcIiwgY2xhc3NOYW1lKSB9LCBwcm9wcywgeyBjaGlsZHJlbjogW2xhYmVsICYmIGxhYmVsLnBvc2l0aW9uID09PSBcImJlZm9yZVwiICYmIChfanN4KFwicFwiLCB7IGNsYXNzTmFtZTogQm9vbGVhbihkaXNhYmxlZCkgPyBcIm9wYWNpdHktNTBcIiA6IFwiXCIsIGNoaWxkcmVuOiBsYWJlbC50ZXh0IH0pKSwgY2hpbGRyZW4sIGxhYmVsICYmIGxhYmVsLnBvc2l0aW9uID09PSBcImFmdGVyXCIgJiYgKF9qc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBCb29sZWFuKGRpc2FibGVkKSA/IFwib3BhY2l0eS01MFwiIDogXCJcIiwgY2hpbGRyZW46IGxhYmVsLnRleHQgfSkpXSB9KSkpO1xufTtcbiIsIlwidXNlIGNsaWVudFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIEFsZXJ0RGlhbG9nUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtYWxlcnQtZGlhbG9nXCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJzaGFyZWQvbGliL2NuL2NuXCI7XG5pbXBvcnQgeyBidXR0b25WYXJpYW50cyB9IGZyb20gXCJzaGFyZWQvdWkvQnV0dG9uL0J1dHRvblwiO1xudmFyIEFsZXJ0RGlhbG9nID0gQWxlcnREaWFsb2dQcmltaXRpdmUuUm9vdDtcbnZhciBBbGVydERpYWxvZ1RyaWdnZXIgPSBBbGVydERpYWxvZ1ByaW1pdGl2ZS5UcmlnZ2VyO1xudmFyIEFsZXJ0RGlhbG9nUG9ydGFsID0gQWxlcnREaWFsb2dQcmltaXRpdmUuUG9ydGFsO1xudmFyIEFsZXJ0RGlhbG9nT3ZlcmxheSA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9hLCByZWYpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCJdKTtcbiAgICByZXR1cm4gKF9qc3goQWxlcnREaWFsb2dQcmltaXRpdmUuT3ZlcmxheSwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNuKFwiZml4ZWQgaW5zZXQtMCB6LTUwIGJnLWJsYWNrLzgwICBkYXRhLVtzdGF0ZT1vcGVuXTphbmltYXRlLWluIGRhdGEtW3N0YXRlPWNsb3NlZF06YW5pbWF0ZS1vdXQgZGF0YS1bc3RhdGU9Y2xvc2VkXTpmYWRlLW91dC0wIGRhdGEtW3N0YXRlPW9wZW5dOmZhZGUtaW4tMFwiLCBjbGFzc05hbWUpIH0sIHByb3BzLCB7IHJlZjogcmVmIH0pKSk7XG59KTtcbkFsZXJ0RGlhbG9nT3ZlcmxheS5kaXNwbGF5TmFtZSA9IEFsZXJ0RGlhbG9nUHJpbWl0aXZlLk92ZXJsYXkuZGlzcGxheU5hbWU7XG52YXIgQWxlcnREaWFsb2dDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX2EsIHJlZikge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjbGFzc05hbWVcIl0pO1xuICAgIHJldHVybiAoX2pzeHMoQWxlcnREaWFsb2dQb3J0YWwsIHsgY2hpbGRyZW46IFtfanN4KEFsZXJ0RGlhbG9nT3ZlcmxheSwge30pLCBfanN4KEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkNvbnRlbnQsIF9fYXNzaWduKHsgcmVmOiByZWYsIGNsYXNzTmFtZTogY24oXCJmaXhlZCBsZWZ0LVs1MCVdIHRvcC1bNTAlXSB6LTUwIGdyaWQgdy1mdWxsIG1heC13LWxnIHRyYW5zbGF0ZS14LVstNTAlXSB0cmFuc2xhdGUteS1bLTUwJV0gZ2FwLTQgYm9yZGVyIGJnLWJhY2tncm91bmQgcC02IHNoYWRvdy1sZyBkdXJhdGlvbi0yMDAgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3N0YXRlPWNsb3NlZF06c2xpZGUtb3V0LXRvLWxlZnQtMS8yIGRhdGEtW3N0YXRlPWNsb3NlZF06c2xpZGUtb3V0LXRvLXRvcC1bNDglXSBkYXRhLVtzdGF0ZT1vcGVuXTpzbGlkZS1pbi1mcm9tLWxlZnQtMS8yIGRhdGEtW3N0YXRlPW9wZW5dOnNsaWRlLWluLWZyb20tdG9wLVs0OCVdIHNtOnJvdW5kZWQtbGdcIiwgY2xhc3NOYW1lKSB9LCBwcm9wcykpXSB9KSk7XG59KTtcbkFsZXJ0RGlhbG9nQ29udGVudC5kaXNwbGF5TmFtZSA9IEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkNvbnRlbnQuZGlzcGxheU5hbWU7XG52YXIgQWxlcnREaWFsb2dIZWFkZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCJdKTtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNuKFwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgdGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0XCIsIGNsYXNzTmFtZSkgfSwgcHJvcHMpKSk7XG59O1xuQWxlcnREaWFsb2dIZWFkZXIuZGlzcGxheU5hbWUgPSBcIkFsZXJ0RGlhbG9nSGVhZGVyXCI7XG52YXIgQWxlcnREaWFsb2dGb290ZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCJdKTtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyBjbGFzc05hbWU6IGNuKFwiZmxleCBmbGV4LWNvbC1yZXZlcnNlIHNtOmZsZXgtcm93IHNtOmp1c3RpZnktZW5kIHNtOnNwYWNlLXgtMlwiLCBjbGFzc05hbWUpIH0sIHByb3BzKSkpO1xufTtcbkFsZXJ0RGlhbG9nRm9vdGVyLmRpc3BsYXlOYW1lID0gXCJBbGVydERpYWxvZ0Zvb3RlclwiO1xudmFyIEFsZXJ0RGlhbG9nVGl0bGUgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfYSwgcmVmKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiXSk7XG4gICAgcmV0dXJuIChfanN4KEFsZXJ0RGlhbG9nUHJpbWl0aXZlLlRpdGxlLCBfX2Fzc2lnbih7IHJlZjogcmVmLCBjbGFzc05hbWU6IGNuKFwidGV4dC1sZyBmb250LXNlbWlib2xkXCIsIGNsYXNzTmFtZSkgfSwgcHJvcHMpKSk7XG59KTtcbkFsZXJ0RGlhbG9nVGl0bGUuZGlzcGxheU5hbWUgPSBBbGVydERpYWxvZ1ByaW1pdGl2ZS5UaXRsZS5kaXNwbGF5TmFtZTtcbnZhciBBbGVydERpYWxvZ0Rlc2NyaXB0aW9uID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX2EsIHJlZikge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjbGFzc05hbWVcIl0pO1xuICAgIHJldHVybiAoX2pzeChBbGVydERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvbiwgX19hc3NpZ24oeyByZWY6IHJlZiwgY2xhc3NOYW1lOiBjbihcInRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIsIGNsYXNzTmFtZSkgfSwgcHJvcHMpKSk7XG59KTtcbkFsZXJ0RGlhbG9nRGVzY3JpcHRpb24uZGlzcGxheU5hbWUgPSBBbGVydERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvbi5kaXNwbGF5TmFtZTtcbnZhciBBbGVydERpYWxvZ0FjdGlvbiA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9hLCByZWYpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCJdKTtcbiAgICByZXR1cm4gKF9qc3goQWxlcnREaWFsb2dQcmltaXRpdmUuQWN0aW9uLCBfX2Fzc2lnbih7IHJlZjogcmVmLCBjbGFzc05hbWU6IGNuKGJ1dHRvblZhcmlhbnRzKCksIGNsYXNzTmFtZSkgfSwgcHJvcHMpKSk7XG59KTtcbkFsZXJ0RGlhbG9nQWN0aW9uLmRpc3BsYXlOYW1lID0gQWxlcnREaWFsb2dQcmltaXRpdmUuQWN0aW9uLmRpc3BsYXlOYW1lO1xudmFyIEFsZXJ0RGlhbG9nQ2FuY2VsID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX2EsIHJlZikge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjbGFzc05hbWVcIl0pO1xuICAgIHJldHVybiAoX2pzeChBbGVydERpYWxvZ1ByaW1pdGl2ZS5DYW5jZWwsIF9fYXNzaWduKHsgcmVmOiByZWYsIGNsYXNzTmFtZTogY24oYnV0dG9uVmFyaWFudHMoeyB2YXJpYW50OiBcIm91dGxpbmVcIiB9KSwgXCJtdC0yIHNtOm10LTBcIiwgY2xhc3NOYW1lKSB9LCBwcm9wcykpKTtcbn0pO1xuQWxlcnREaWFsb2dDYW5jZWwuZGlzcGxheU5hbWUgPSBBbGVydERpYWxvZ1ByaW1pdGl2ZS5DYW5jZWwuZGlzcGxheU5hbWU7XG5leHBvcnQgeyBBbGVydERpYWxvZywgQWxlcnREaWFsb2dQb3J0YWwsIEFsZXJ0RGlhbG9nT3ZlcmxheSwgQWxlcnREaWFsb2dUcmlnZ2VyLCBBbGVydERpYWxvZ0NvbnRlbnQsIEFsZXJ0RGlhbG9nSGVhZGVyLCBBbGVydERpYWxvZ0Zvb3RlciwgQWxlcnREaWFsb2dUaXRsZSwgQWxlcnREaWFsb2dEZXNjcmlwdGlvbiwgQWxlcnREaWFsb2dBY3Rpb24sIEFsZXJ0RGlhbG9nQ2FuY2VsLCB9O1xuIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcInNoYXJlZC9saWIvY24vY25cIjtcbnZhciBDYXJkID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX2EsIHJlZikge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjbGFzc05hbWVcIl0pO1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IHJlZjogcmVmLCBjbGFzc05hbWU6IGNuKFwicm91bmRlZC1sZyBib3JkZXIgYmctY2FyZCB0ZXh0LWNhcmQtZm9yZWdyb3VuZCBzaGFkb3ctc21cIiwgY2xhc3NOYW1lKSB9LCBwcm9wcykpKTtcbn0pO1xuQ2FyZC5kaXNwbGF5TmFtZSA9IFwiQ2FyZFwiO1xudmFyIENhcmRIZWFkZXIgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfYSwgcmVmKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiXSk7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgcmVmOiByZWYsIGNsYXNzTmFtZTogY24oXCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMS41IHAtNlwiLCBjbGFzc05hbWUpIH0sIHByb3BzKSkpO1xufSk7XG5DYXJkSGVhZGVyLmRpc3BsYXlOYW1lID0gXCJDYXJkSGVhZGVyXCI7XG52YXIgQ2FyZFRpdGxlID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX2EsIHJlZikge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjbGFzc05hbWVcIl0pO1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IHJlZjogcmVmLCBjbGFzc05hbWU6IGNuKFwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBsZWFkaW5nLW5vbmUgdHJhY2tpbmctdGlnaHRcIiwgY2xhc3NOYW1lKSB9LCBwcm9wcykpKTtcbn0pO1xuQ2FyZFRpdGxlLmRpc3BsYXlOYW1lID0gXCJDYXJkVGl0bGVcIjtcbnZhciBDYXJkRGVzY3JpcHRpb24gPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfYSwgcmVmKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiXSk7XG4gICAgcmV0dXJuIChfanN4KFwiZGl2XCIsIF9fYXNzaWduKHsgcmVmOiByZWYsIGNsYXNzTmFtZTogY24oXCJ0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiLCBjbGFzc05hbWUpIH0sIHByb3BzKSkpO1xufSk7XG5DYXJkRGVzY3JpcHRpb24uZGlzcGxheU5hbWUgPSBcIkNhcmREZXNjcmlwdGlvblwiO1xudmFyIENhcmRDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX2EsIHJlZikge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjbGFzc05hbWVcIl0pO1xuICAgIHJldHVybiAoX2pzeChcImRpdlwiLCBfX2Fzc2lnbih7IHJlZjogcmVmLCBjbGFzc05hbWU6IGNuKFwicC02IHB0LTBcIiwgY2xhc3NOYW1lKSB9LCBwcm9wcykpKTtcbn0pO1xuQ2FyZENvbnRlbnQuZGlzcGxheU5hbWUgPSBcIkNhcmRDb250ZW50XCI7XG52YXIgQ2FyZEZvb3RlciA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9hLCByZWYpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCJdKTtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgX19hc3NpZ24oeyByZWY6IHJlZiwgY2xhc3NOYW1lOiBjbihcImZsZXggaXRlbXMtY2VudGVyIHAtNiBwdC0wXCIsIGNsYXNzTmFtZSkgfSwgcHJvcHMpKSk7XG59KTtcbkNhcmRGb290ZXIuZGlzcGxheU5hbWUgPSBcIkNhcmRGb290ZXJcIjtcbmV4cG9ydCB7IENhcmQsIENhcmRIZWFkZXIsIENhcmRGb290ZXIsIENhcmRUaXRsZSwgQ2FyZERlc2NyaXB0aW9uLCBDYXJkQ29udGVudCB9O1xuIiwiXCJ1c2UgY2xpZW50XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgQ2hlY2tib3hQcmltaXRpdmUgZnJvbSBcIkByYWRpeC11aS9yZWFjdC1jaGVja2JveFwiO1xuaW1wb3J0IHsgQ2hlY2sgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJzaGFyZWQvbGliL2NuL2NuXCI7XG52YXIgQ2hlY2tib3ggPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfYSwgcmVmKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiXSk7XG4gICAgcmV0dXJuIChfanN4KENoZWNrYm94UHJpbWl0aXZlLlJvb3QsIF9fYXNzaWduKHsgcmVmOiByZWYsIGNsYXNzTmFtZTogY24oXCJwZWVyIGgtNCB3LTQgc2hyaW5rLTAgcm91bmRlZC1zbSBib3JkZXIgYm9yZGVyLXByaW1hcnkgcmluZy1vZmZzZXQtYmFja2dyb3VuZCBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LTIgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTAgZGF0YS1bc3RhdGU9Y2hlY2tlZF06YmctcHJpbWFyeSBkYXRhLVtzdGF0ZT1jaGVja2VkXTp0ZXh0LXByaW1hcnktZm9yZWdyb3VuZFwiLCBjbGFzc05hbWUpIH0sIHByb3BzLCB7IGNoaWxkcmVuOiBfanN4KENoZWNrYm94UHJpbWl0aXZlLkluZGljYXRvciwgeyBjbGFzc05hbWU6IGNuKFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jdXJyZW50XCIpLCBjaGlsZHJlbjogX2pzeChDaGVjaywgeyBjbGFzc05hbWU6IFwiaC00IHctNFwiIH0pIH0pIH0pKSk7XG59KTtcbkNoZWNrYm94LmRpc3BsYXlOYW1lID0gQ2hlY2tib3hQcmltaXRpdmUuUm9vdC5kaXNwbGF5TmFtZTtcbmV4cG9ydCB7IENoZWNrYm94IH07XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY24gfSBmcm9tIFwic2hhcmVkL2xpYi9jbi9jblwiO1xudmFyIElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX2EsIHJlZikge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIHR5cGUgPSBfYS50eXBlLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2xhc3NOYW1lXCIsIFwidHlwZVwiXSk7XG4gICAgcmV0dXJuIChfanN4KFwiaW5wdXRcIiwgX19hc3NpZ24oeyB0eXBlOiB0eXBlLCBjbGFzc05hbWU6IGNuKFwiZmxleCBoLTEwIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItaW5wdXQgYmctYmFja2dyb3VuZCBweC0zIHB5LTIgdGV4dC1iYXNlIHJpbmctb2Zmc2V0LWJhY2tncm91bmQgZmlsZTpib3JkZXItMCBmaWxlOmJnLXRyYW5zcGFyZW50IGZpbGU6dGV4dC1zbSBmaWxlOmZvbnQtbWVkaXVtIGZpbGU6dGV4dC1mb3JlZ3JvdW5kIHBsYWNlaG9sZGVyOnRleHQtbXV0ZWQtZm9yZWdyb3VuZCBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctcmluZyBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LTIgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTAgbWQ6dGV4dC1zbVwiLCBjbGFzc05hbWUpLCByZWY6IHJlZiB9LCBwcm9wcykpKTtcbn0pO1xuSW5wdXQuZGlzcGxheU5hbWUgPSBcIklucHV0XCI7XG5leHBvcnQgeyBJbnB1dCB9O1xuIiwiXCJ1c2UgY2xpZW50XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgU2xpZGVyUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2xpZGVyXCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJzaGFyZWQvbGliL2NuL2NuXCI7XG52YXIgU2xpZGVyID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX2EsIHJlZikge1xuICAgIHZhciBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIHByb3BzID0gX19yZXN0KF9hLCBbXCJjbGFzc05hbWVcIl0pO1xuICAgIHJldHVybiAoX2pzeHMoU2xpZGVyUHJpbWl0aXZlLlJvb3QsIF9fYXNzaWduKHsgcmVmOiByZWYsIGNsYXNzTmFtZTogY24oXCJyZWxhdGl2ZSBmbGV4IHctZnVsbCB0b3VjaC1ub25lIHNlbGVjdC1ub25lIGl0ZW1zLWNlbnRlclwiLCBjbGFzc05hbWUpIH0sIHByb3BzLCB7IGNoaWxkcmVuOiBbX2pzeChTbGlkZXJQcmltaXRpdmUuVHJhY2ssIHsgY2xhc3NOYW1lOiBcInJlbGF0aXZlIGgtMiB3LWZ1bGwgZ3JvdyBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1mdWxsIGJnLXNlY29uZGFyeVwiLCBjaGlsZHJlbjogX2pzeChTbGlkZXJQcmltaXRpdmUuUmFuZ2UsIHsgY2xhc3NOYW1lOiBcImFic29sdXRlIGgtZnVsbCBiZy1wcmltYXJ5XCIgfSkgfSksIF9qc3goU2xpZGVyUHJpbWl0aXZlLlRodW1iLCB7IGNsYXNzTmFtZTogXCJibG9jayBoLTUgdy01IHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItcHJpbWFyeSBiZy1iYWNrZ3JvdW5kIHJpbmctb2Zmc2V0LWJhY2tncm91bmQgdHJhbnNpdGlvbi1jb2xvcnMgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTIgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcgZm9jdXMtdmlzaWJsZTpyaW5nLW9mZnNldC0yIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGlzYWJsZWQ6b3BhY2l0eS01MFwiIH0pXSB9KSkpO1xufSk7XG5TbGlkZXIuZGlzcGxheU5hbWUgPSBTbGlkZXJQcmltaXRpdmUuUm9vdC5kaXNwbGF5TmFtZTtcbmV4cG9ydCB7IFNsaWRlciB9O1xuIiwiXCJ1c2UgY2xpZW50XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgVG9vbHRpcFByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXRvb2x0aXBcIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcInNoYXJlZC9saWIvY24vY25cIjtcbnZhciBUb29sdGlwUHJvdmlkZXIgPSBUb29sdGlwUHJpbWl0aXZlLlByb3ZpZGVyO1xudmFyIFRvb2x0aXAgPSBUb29sdGlwUHJpbWl0aXZlLlJvb3Q7XG52YXIgVG9vbHRpcFRyaWdnZXIgPSBUb29sdGlwUHJpbWl0aXZlLlRyaWdnZXI7XG52YXIgVG9vbHRpcENvbnRlbnQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfYSwgcmVmKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgX2IgPSBfYS5zaWRlT2Zmc2V0LCBzaWRlT2Zmc2V0ID0gX2IgPT09IHZvaWQgMCA/IDQgOiBfYiwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiLCBcInNpZGVPZmZzZXRcIl0pO1xuICAgIHJldHVybiAoX2pzeChUb29sdGlwUHJpbWl0aXZlLkNvbnRlbnQsIF9fYXNzaWduKHsgcmVmOiByZWYsIHNpZGVPZmZzZXQ6IHNpZGVPZmZzZXQsIGNsYXNzTmFtZTogY24oXCJ6LTUwIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJvcmRlciBiZy1wb3BvdmVyIHB4LTMgcHktMS41IHRleHQtc20gdGV4dC1wb3BvdmVyLWZvcmVncm91bmQgc2hhZG93LW1kIGFuaW1hdGUtaW4gZmFkZS1pbi0wIHpvb20taW4tOTUgZGF0YS1bc3RhdGU9Y2xvc2VkXTphbmltYXRlLW91dCBkYXRhLVtzdGF0ZT1jbG9zZWRdOmZhZGUtb3V0LTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzaWRlPWJvdHRvbV06c2xpZGUtaW4tZnJvbS10b3AtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMlwiLCBjbGFzc05hbWUpIH0sIHByb3BzKSkpO1xufSk7XG5Ub29sdGlwQ29udGVudC5kaXNwbGF5TmFtZSA9IFRvb2x0aXBQcmltaXRpdmUuQ29udGVudC5kaXNwbGF5TmFtZTtcbmV4cG9ydCB7IFRvb2x0aXAsIFRvb2x0aXBUcmlnZ2VyLCBUb29sdGlwQ29udGVudCwgVG9vbHRpcFByb3ZpZGVyIH07XG4iLCJpbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBXaXRoRm9ybUxhYmVscyB9IGZyb20gXCJzaGFyZWQvbGliL3dpdGhGb3JtTGFiZWxzL3dpdGhGb3JtTGFiZWxzXCI7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJzaGFyZWQvdWkvQ2hlY2tib3gvQ2hlY2tib3hcIjtcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCJzaGFyZWQvdWkvU2xpZGVyL1NsaWRlclwiO1xuZXhwb3J0IHZhciBGb3JtR2VuZXJhdG9yID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHNjaGVtYSA9IF9hLnNjaGVtYSwgdmFsdWVzID0gX2EudmFsdWVzLCBvbkNoYW5nZSA9IF9hLm9uQ2hhbmdlLCBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWU7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNjaGVtYSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gc2NoZW1hW2tleV07XG4gICAgICAgIHJldHVybiAoX2pzeChXaXRoRm9ybUxhYmVscywgeyBsYWJlbDogc2NoZW1hW2tleV0ubGFiZWwsIGRpc2FibGVkOiB2YWx1ZXMgJiYgdmFsdWVzW2tleV0gPyB2YWx1ZXNba2V5XS5kaXNhYmxlZCA6IHVuZGVmaW5lZCwgY2xhc3NOYW1lOiBjbGFzc05hbWUsIGNoaWxkcmVuOiBfanN4KEZvcm1JbnB1dFN3aXRjaCwgeyBpbnB1dFZhbHVlOiB2YWx1ZXMgPyB2YWx1ZXNba2V5XSA6IHVuZGVmaW5lZCwgaW5wdXROYW1lOiBrZXksIGlucHV0OiBpbnB1dCwgb25DaGFuZ2U6IG9uQ2hhbmdlIH0pIH0sIGtleSkpO1xuICAgIH0pO1xufTtcbnZhciBGb3JtSW5wdXRTd2l0Y2ggPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgb25DaGFuZ2UgPSBfYS5vbkNoYW5nZSwgaW5wdXRWYWx1ZSA9IF9hLmlucHV0VmFsdWUsIGlucHV0ID0gX2EuaW5wdXQsIGlucHV0TmFtZSA9IF9hLmlucHV0TmFtZTtcbiAgICBzd2l0Y2ggKGlucHV0LmlucHV0SW5mby50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgICAgICAgdmFyIGlzQ2hlY2tlZCA9IGlucHV0VmFsdWUgPyBpbnB1dFZhbHVlLnZhbHVlIHx8IGZhbHNlIDogZmFsc2U7XG4gICAgICAgICAgICB2YXIgaXNEaXNhYmxlZCA9IGlucHV0VmFsdWUgPyBpbnB1dFZhbHVlLmRpc2FibGVkIHx8IGZhbHNlIDogZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gKF9qc3goQ2hlY2tib3gsIHsgb25DaGVja2VkQ2hhbmdlOiBmdW5jdGlvbiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbkNoYW5nZSAmJiBvbkNoYW5nZSgoX2EgPSB7fSwgX2FbaW5wdXROYW1lXSA9IGNoZWNrZWQsIF9hKSk7XG4gICAgICAgICAgICAgICAgfSwgbmFtZTogaW5wdXROYW1lLCBkaXNhYmxlZDogaXNEaXNhYmxlZCwgY2hlY2tlZDogaXNDaGVja2VkIH0pKTtcbiAgICAgICAgY2FzZSBcInNsaWRlclwiOlxuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IGlucHV0VmFsdWUgPyBpbnB1dFZhbHVlLnZhbHVlIHx8IDAgOiAwO1xuICAgICAgICAgICAgcmV0dXJuIChfanN4KFNsaWRlciwgeyBuYW1lOiBpbnB1dE5hbWUsIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbkNoYW5nZSAmJiBvbkNoYW5nZSgoX2EgPSB7fSwgX2FbaW5wdXROYW1lXSA9IGUudGFyZ2V0LnZhbHVlLCBfYSkpO1xuICAgICAgICAgICAgICAgIH0sIG1pbjogaW5wdXQuaW5wdXRJbmZvLm1pbiB8fCAwLCB2YWx1ZTogZGVmYXVsdFZhbHVlIH0pKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBfanN4KF9GcmFnbWVudCwge30pO1xuICAgIH1cbn07XG4iLCJleHBvcnQgeyBTbGlkZXJXaXRoSW5wdXQgfSBmcm9tIFwiLi91aS9TbGlkZXJXaXRoSW5wdXRcIjtcbiIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cyB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwic2hhcmVkL3VpL0lucHV0L0lucHV0XCI7XG5pbXBvcnQgeyBTbGlkZXIgfSBmcm9tIFwic2hhcmVkL3VpL1NsaWRlci9TbGlkZXJcIjtcbmV4cG9ydCB2YXIgU2xpZGVyV2l0aElucHV0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIG9uQ2hhbmdlID0gX2Eub25DaGFuZ2UsIHZhbHVlID0gX2EudmFsdWUsIGxhYmVsID0gX2EubGFiZWwsIG1heCA9IF9hLm1heCwgbWluID0gX2EubWluLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wib25DaGFuZ2VcIiwgXCJ2YWx1ZVwiLCBcImxhYmVsXCIsIFwibWF4XCIsIFwibWluXCJdKTtcbiAgICB2YXIgX2IgPSB1c2VTdGF0ZSgwKSwgc2xpZGVyVmFsdWUgPSBfYlswXSwgc2V0U2xpZGVyVmFsdWUgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZShcIlwiKSwgaW5wdXRWYWx1ZSA9IF9jWzBdLCBzZXRJbnB1dFZhbHVlID0gX2NbMV07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRTbGlkZXJWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgfSwgW3ZhbHVlXSk7XG4gICAgdmFyIGhhbmRsZUlucHV0Q2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKSB8fCAwO1xuICAgICAgICBpZiAobWF4ICYmIHJlc3VsdCA+IG1heClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc2V0U2xpZGVyVmFsdWUocmVzdWx0KTtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgb25DaGFuZ2UocmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIGhhbmRsZVNsaWRlckNoYW5nZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdmFsdWVbMF07XG4gICAgICAgIHNldElucHV0VmFsdWUocmVzdWx0LnRvU3RyaW5nKCkpO1xuICAgICAgICBzZXRTbGlkZXJWYWx1ZShyZXN1bHQpO1xuICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZmxleCBnYXAtNFwiLCBjaGlsZHJlbjogW19qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm1heC13LTcyIGZsZXgtMVwiLCBjaGlsZHJlbjogW19qc3goXCJwXCIsIHsgY2xhc3NOYW1lOiBcIm1iLTJcIiwgY2hpbGRyZW46IGxhYmVsICE9PSBudWxsICYmIGxhYmVsICE9PSB2b2lkIDAgPyBsYWJlbCA6IFwi0JrQvtC7LdCy0L4g0YHQuNC80LLQvtC70L7QslwiIH0pLCBfanN4KFNsaWRlciwgX19hc3NpZ24oeyBuYW1lOiBcInNsaWRlclwiLCBvblZhbHVlQ2hhbmdlOiBoYW5kbGVTbGlkZXJDaGFuZ2UsIG1pbjogbWluLCBtYXg6IG1heCwgdmFsdWU6IFtzbGlkZXJWYWx1ZV0gfSwgcHJvcHMpKV0gfSksIF9qc3goSW5wdXQsIHsgbmFtZTogXCJpbnB1dFwiLCBjbGFzc05hbWU6IFwibWF4LXctMjBcIiwgdHlwZTogXCJudW1iZXJcIiwgb25DaGFuZ2U6IGhhbmRsZUlucHV0Q2hhbmdlLCB2YWx1ZTogaW5wdXRWYWx1ZSB9KV0gfSkpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==