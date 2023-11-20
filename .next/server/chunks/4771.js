"use strict";
exports.id = 4771;
exports.ids = [4771];
exports.modules = {

/***/ 34771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ GridList),
/* harmony export */   l: () => (/* binding */ GridListItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77369);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32779);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55635);




function GridList({ children, className }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* .FadeInStagger */ .o, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            role: "list",
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3", className),
            children: children
        })
    });
}
function GridListItem({ title, children, className, invert = false }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("text-base", invert ? "text-neutral-300 before:bg-white after:bg-white/10" : "text-neutral-600 before:bg-neutral-950 after:bg-neutral-100", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* .FadeIn */ .U, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Border__WEBPACK_IMPORTED_MODULE_2__/* .Border */ .O, {
                position: "left",
                className: "pl-8",
                invert: invert,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("font-semibold", invert ? "text-white" : "text-neutral-950"),
                        children: [
                            title,
                            "."
                        ]
                    }),
                    " ",
                    children
                ]
            })
        })
    });
}


/***/ })

};
;