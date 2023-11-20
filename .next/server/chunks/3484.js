"use strict";
exports.id = 3484;
exports.ids = [3484];
exports.modules = {

/***/ 61116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/clark/Downloads/Source/newsroom/src/components/GrayscaleTransitionImage.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["GrayscaleTransitionImage"];


/***/ }),

/***/ 73484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ MDXComponents)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77369);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Blockquote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5504);
/* harmony import */ var _components_Border__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32779);
/* harmony import */ var _components_GrayscaleTransitionImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61116);
/* harmony import */ var _components_StatList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77129);
/* harmony import */ var _components_TagList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89568);







const MDXComponents = {
    Blockquote ({ className, ...props }) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Blockquote__WEBPACK_IMPORTED_MODULE_2__/* .Blockquote */ .V, {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("my-32", className),
            ...props
        });
    },
    img: function Img({ className, ...props }) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("group isolate my-10 overflow-hidden rounded-4xl bg-neutral-100 max-sm:-mx-6", className),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GrayscaleTransitionImage__WEBPACK_IMPORTED_MODULE_4__/* .GrayscaleTransitionImage */ .J, {
                ...props,
                sizes: "(min-width: 768px) 42rem, 100vw",
                className: "aspect-[16/10] w-full object-cover"
            })
        });
    },
    StatList ({ className, ...props }) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StatList__WEBPACK_IMPORTED_MODULE_5__/* .StatList */ .Z, {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("my-32 !max-w-none", className),
            ...props
        });
    },
    StatListItem: _components_StatList__WEBPACK_IMPORTED_MODULE_5__/* .StatListItem */ .j,
    table: function Table({ className, ...props }) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("my-10 max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto", className),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-sm:min-w-full max-sm:flex-none max-sm:px-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                    ...props
                })
            })
        });
    },
    TagList ({ className, ...props }) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TagList__WEBPACK_IMPORTED_MODULE_6__/* .TagList */ .P, {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("my-6", className),
            ...props
        });
    },
    TagListItem: _components_TagList__WEBPACK_IMPORTED_MODULE_6__/* .TagListItem */ .N,
    TopTip ({ children, className }) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Border__WEBPACK_IMPORTED_MODULE_3__/* .Border */ .O, {
            position: "left",
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("my-10 pl-8", className),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "font-display text-sm font-bold uppercase tracking-widest text-neutral-950",
                    children: "Top tip"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-4",
                    children: children
                })
            ]
        });
    },
    Typography ({ className, ...props }) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("typography", className),
            ...props
        });
    },
    wrapper ({ className, ...props }) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("[&>*]:mx-auto [&>*]:max-w-3xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0", className),
            ...props
        });
    }
};


/***/ }),

/***/ 89568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ TagListItem),
/* harmony export */   P: () => (/* binding */ TagList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77369);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function TagList({ children, className }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        role: "list",
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, "flex flex-wrap gap-4"),
        children: children
    });
}
function TagListItem({ children, className }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600", className),
        children: children
    });
}


/***/ })

};
;