exports.id = 2279;
exports.ids = [2279];
exports.modules = {

/***/ 3972:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 99724:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 48616))

/***/ }),

/***/ 74417:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5685))

/***/ }),

/***/ 48616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FadeIn: () => (/* binding */ FadeIn),
/* harmony export */   FadeInStagger: () => (/* binding */ FadeInStagger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51498);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67277);
/* __next_internal_client_entry_do_not_use__ FadeIn,FadeInStagger auto */ 


const FadeInStaggerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
const viewport = {
    once: true,
    margin: "0px 0px -200px"
};
function FadeIn(props) {
    let shouldReduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .useReducedMotion */ .J)();
    let isInStaggerGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FadeInStaggerContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
        variants: {
            hidden: {
                opacity: 0,
                y: shouldReduceMotion ? 0 : 24
            },
            visible: {
                opacity: 1,
                y: 0
            }
        },
        transition: {
            duration: 0.5
        },
        ...isInStaggerGroup ? {} : {
            initial: "hidden",
            whileInView: "visible",
            viewport
        },
        ...props
    });
}
function FadeInStagger({ faster = false, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeInStaggerContext.Provider, {
        value: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: viewport,
            transition: {
                staggerChildren: faster ? 0.12 : 0.2
            },
            ...props
        })
    });
}


/***/ }),

/***/ 17509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridPattern: () => (/* binding */ GridPattern)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67277);
/* __next_internal_client_entry_do_not_use__ GridPattern auto */ 


function Block({ x, y, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .motion */ .E.path, {
        transform: `translate(${-32 * y + 96 * x} ${160 * y})`,
        d: "M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",
        ...props
    });
}
function GridPattern({ yOffset = 0, interactive = false, ...props }) {
    let id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    let ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    let currentBlock = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let counter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    let [hoveredBlocks, setHoveredBlocks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    let staticBlocks = [
        [
            1,
            1
        ],
        [
            2,
            2
        ],
        [
            4,
            3
        ],
        [
            6,
            2
        ],
        [
            7,
            4
        ],
        [
            5,
            5
        ]
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!interactive) {
            return;
        }
        function onMouseMove(event) {
            if (!ref.current) {
                return;
            }
            let rect = ref.current.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
                return;
            }
            x = x - rect.width / 2 - 32;
            y = y - yOffset;
            x += Math.tan(32 / 160) * y;
            x = Math.floor(x / 96);
            y = Math.floor(y / 160);
            if (currentBlock.current?.[0] === x && currentBlock.current?.[1] === y) {
                return;
            }
            currentBlock.current = [
                x,
                y
            ];
            setHoveredBlocks((blocks)=>{
                let key = counter.current++;
                let block = [
                    x,
                    y,
                    key
                ];
                return [
                    ...blocks,
                    block
                ].filter((block)=>!(block[0] === x && block[1] === y && block[2] !== key));
            });
        }
        window.addEventListener("mousemove", onMouseMove);
        return ()=>{
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [
        yOffset,
        interactive
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        ref: ref,
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                width: "100%",
                height: "100%",
                fill: `url(#${id})`,
                strokeWidth: "0"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                x: "50%",
                y: yOffset,
                strokeWidth: "0",
                className: "overflow-visible",
                children: [
                    staticBlocks.map((block)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Block, {
                            x: block[0],
                            y: block[1]
                        }, `${block}`)),
                    hoveredBlocks.map((block)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Block, {
                            x: block[0],
                            y: block[1],
                            animate: {
                                opacity: [
                                    0,
                                    1,
                                    0
                                ]
                            },
                            transition: {
                                duration: 1,
                                times: [
                                    0,
                                    0,
                                    1
                                ]
                            },
                            onAnimationComplete: ()=>{
                                setHoveredBlocks((blocks)=>blocks.filter((b)=>b[2] !== block[2]));
                            }
                        }, block[2]))
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pattern", {
                    id: id,
                    width: "96",
                    height: "480",
                    x: "50%",
                    patternUnits: "userSpaceOnUse",
                    patternTransform: `translate(0 ${yOffset})`,
                    fill: "none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 5685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  RootLayout: () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.js
var clsx = __webpack_require__(80391);
var clsx_default = /*#__PURE__*/__webpack_require__.n(clsx);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
var use_reduced_motion = __webpack_require__(51498);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs
var MotionConfig = __webpack_require__(19967);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 164 modules
var motion = __webpack_require__(67277);
;// CONCATENATED MODULE: ./src/components/Button.jsx



function Button({ invert = false, className, children, ...props }) {
    className = clsx_default()(className, "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition", invert ? "bg-white text-neutral-950 hover:bg-neutral-200" : "bg-neutral-950 text-white hover:bg-neutral-800");
    let inner = /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "relative top-px",
        children: children
    });
    if (typeof props.href === "undefined") {
        return /*#__PURE__*/ jsx_runtime_.jsx("button", {
            className: className,
            ...props,
            children: inner
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        className: className,
        ...props,
        children: inner
    });
}

;// CONCATENATED MODULE: ./src/components/Container.jsx


function Container({ as, className, children }) {
    let Component = as ?? "div";
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        className: clsx_default()("mx-auto max-w-7xl px-6 lg:px-8", className),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mx-auto max-w-2xl lg:max-w-none",
            children: children
        })
    });
}

// EXTERNAL MODULE: ./src/components/FadeIn.jsx
var FadeIn = __webpack_require__(48616);
;// CONCATENATED MODULE: ./src/components/Logo.jsx



function Logomark({ invert = false, filled = false, ...props }) {
    let id = (0,react_.useId)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 32 32",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                clipPath: `url(#${id}-clip)`,
                className: clsx_default()("h-8 transition-all duration-300", invert ? "fill-white" : "fill-neutral-950", filled ? "w-8" : "w-0 group-hover/logo:w-8")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("use", {
                href: `#${id}-path`,
                className: invert ? "stroke-white" : "stroke-neutral-950",
                fill: "none",
                strokeWidth: "1.5"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        id: `${id}-path`,
                        d: "M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                        id: `${id}-clip`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                            href: `#${id}-path`
                        })
                    })
                ]
            })
        ]
    });
}
function Logo({ className, invert = false, filled = false, fillOnHover = false, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "148",
        viewBox: "0 0 90 12",
        "aria-hidden": "true",
        className: clsx_default()(fillOnHover && "group/logo", className),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M77.0865 10.8647V3.61164H79.008L79.0757 4.92422H79.1569C79.5222 3.96346 80.4018 3.47632 81.3761 3.47632C82.391 3.47632 83.2841 3.90934 83.6765 5.10013H83.7847C84.123 4.01759 85.0838 3.47632 86.1799 3.47632C87.5737 3.47632 88.6562 4.30176 88.6562 6.48038V10.8647H86.667V6.9134C86.667 5.69553 86.2881 5.10013 85.3815 5.10013C84.4207 5.10013 83.8659 5.91204 83.8659 6.8322V10.8647H81.8768V6.9134C81.8768 5.69553 81.4843 5.10013 80.5912 5.10013C79.617 5.10013 79.0757 5.91204 79.0757 6.8322V10.8647H77.0865Z",
                fill: "black"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M72.193 10.9865C70.0143 10.9865 68.5529 9.59269 68.5529 7.23816C68.5529 4.99188 69.8926 3.47632 72.193 3.47632C74.3581 3.47632 75.8195 4.88363 75.8195 7.23816C75.8195 9.48444 74.4798 10.9865 72.193 10.9865ZM72.1794 9.37618C73.1537 9.37618 73.8033 8.68606 73.8033 7.23816C73.8033 5.80379 73.1808 5.10013 72.193 5.10013C71.2051 5.10013 70.5556 5.79026 70.5556 7.23816C70.5556 8.67253 71.1916 9.37618 72.1794 9.37618Z",
                fill: "black"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M63.9602 10.9865C61.7816 10.9865 60.3202 9.59269 60.3202 7.23816C60.3202 4.99188 61.6598 3.47632 63.9602 3.47632C66.1253 3.47632 67.5868 4.88363 67.5868 7.23816C67.5868 9.48444 66.2471 10.9865 63.9602 10.9865ZM63.9467 9.37618C64.921 9.37618 65.5705 8.68606 65.5705 7.23816C65.5705 5.80379 64.9481 5.10013 63.9602 5.10013C62.9724 5.10013 62.3229 5.79026 62.3229 7.23816C62.3229 8.67253 62.9589 9.37618 63.9467 9.37618Z",
                fill: "black"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M55.4806 10.8647V3.61164H57.2803L57.3615 4.77538H57.4291C57.7539 3.84168 58.5117 3.51692 59.4318 3.51692H59.8378V5.38431H59.3912C58.0516 5.38431 57.4968 5.99324 57.4697 7.07578V10.8647H55.4806Z",
                fill: "black"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M50.8576 11C48.7466 11 47.5558 10.0257 47.5693 8.57781H49.5179C49.5314 9.34912 50.1268 9.66035 50.9117 9.66035C51.7236 9.66035 52.1431 9.36265 52.1431 8.87551C52.1431 8.21245 51.683 8.11773 50.6546 7.96888C49.0443 7.75237 47.7588 7.37348 47.7588 5.77672C47.7588 4.24763 49.0308 3.47632 50.9252 3.47632C52.7791 3.47632 53.9563 4.32882 53.9969 5.76319H52.0484C52.0484 5.15426 51.5883 4.81597 50.8711 4.81597C50.1268 4.81597 49.7479 5.1272 49.7479 5.57375C49.7479 6.11502 50.208 6.2774 51.277 6.41272C52.7791 6.6157 54.1458 6.9134 54.1458 8.68606C54.1458 10.2828 52.9009 11 50.8576 11Z",
                fill: "black"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M38.3237 10.8647L36.5917 3.61164H38.6485L39.7716 8.87551H39.8528L40.8812 3.61164H43.0463L44.0747 8.90258H44.1289L45.2655 3.61164H47.2412L45.4956 10.8647H42.8975L41.9097 6.14209H41.842L40.8812 10.8647H38.3237Z",
                fill: "black"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M32.8127 10.9865C30.5393 10.9865 29.1997 9.5115 29.1997 7.29229C29.1997 4.95128 30.5935 3.47632 32.745 3.47632C35.2619 3.47632 36.4527 5.27605 36.2092 7.68471H31.1618C31.1483 8.83491 31.8113 9.48444 32.8127 9.48444C33.5705 9.48444 34.1388 9.11908 34.2877 8.56428H36.1686C35.9791 10.0257 34.6395 10.9865 32.8127 10.9865ZM32.745 4.97835C31.8384 4.97835 31.2565 5.53315 31.1753 6.41272H34.2606C34.2065 5.45196 33.5705 4.97835 32.745 4.97835Z",
                fill: "black"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M19 10.8647V1H21.5169L25.6712 7.96888H25.7659L25.6847 4.81597V1H27.7145V10.8647H25.3329L21.1786 4.04466H21.0839L21.138 6.89987V10.8647H19Z",
                fill: "black"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M12 0H0V12H12V0ZM6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z",
                fill: "black"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/SocialMedia.jsx



function FacebookIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z"
        })
    });
}
function InstagramIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.272.644 1.772 1.153.509.5.902 1.104 1.153 1.772.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 0 1-1.153 1.772c-.5.509-1.104.902-1.772 1.153-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63Zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.096 3.096 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058ZM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27Zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666Zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"
        })
    });
}
function TwitterIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M8.29 20.253c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.922a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743A11.65 11.65 0 0 1 3.392 4.75a4.106 4.106 0 0 0 1.27 5.477A4.072 4.072 0 0 1 2.8 9.715v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.232 8.232 0 0 1 2 18.41a11.616 11.616 0 0 0 6.29 1.84"
        })
    });
}
function GitHubIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
        })
    });
}
function DribbbleIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2Zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.42 25.42 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362ZM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.688 8.688 0 0 1 12 3.475Zm-3.633.803a53.889 53.889 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975ZM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.523 8.523 0 0 1-2.191-5.705ZM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 0 1 1.823 6.475 8.402 8.402 0 0 1-3.341.684Zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715Z"
        })
    });
}
const socialMediaProfiles = [
    {
        title: "Facebook",
        href: "https://facebook.com",
        icon: FacebookIcon
    },
    {
        title: "Instagram",
        href: "https://instagram.com",
        icon: InstagramIcon
    },
    {
        title: "Twitter",
        href: "https://twitter.com",
        icon: TwitterIcon
    },
    {
        title: "GitHub",
        href: "https://github.com",
        icon: GitHubIcon
    },
    {
        title: "Dribbble",
        href: "https://dribbble.com",
        icon: DribbbleIcon
    }
];
function SocialMedia({ className, invert = false }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        role: "list",
        className: clsx_default()("flex gap-x-10", invert ? "text-white" : "text-neutral-950", className),
        children: socialMediaProfiles.map((socialMediaProfile)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: socialMediaProfile.href,
                    "aria-label": socialMediaProfile.title,
                    className: clsx_default()("transition", invert ? "hover:text-neutral-200" : "hover:text-neutral-700"),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(socialMediaProfile.icon, {
                        className: "h-6 w-6 fill-current"
                    })
                })
            }, socialMediaProfile.title))
    });
}

;// CONCATENATED MODULE: ./src/components/Footer.jsx






const Footer_navigation = [
    {
        title: "Work",
        links: [
            {
                title: "FamilyFund",
                href: "/work/family-fund"
            },
            {
                title: "Unseal",
                href: "/work/unseal"
            },
            {
                title: "Phobia",
                href: "/work/phobia"
            },
            {
                title: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        "See all ",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            "aria-hidden": "true",
                            children: "→"
                        })
                    ]
                }),
                href: "/work"
            }
        ]
    },
    {
        title: "Company",
        links: [
            {
                title: "About",
                href: "/about"
            },
            {
                title: "Process",
                href: "/process"
            },
            {
                title: "Blog",
                href: "/blog"
            },
            {
                title: "Contact us",
                href: "/contact"
            }
        ]
    },
    {
        title: "Connect",
        links: socialMediaProfiles
    }
];
function Navigation() {
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            role: "list",
            className: "grid grid-cols-2 gap-8 sm:grid-cols-3",
            children: Footer_navigation.map((section, sectionIndex)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "font-display text-sm font-semibold tracking-wider text-neutral-950",
                            children: section.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            role: "list",
                            className: "mt-4 text-sm text-neutral-700",
                            children: section.links.map((link, linkIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "mt-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: link.href,
                                        className: "transition hover:text-neutral-950",
                                        children: link.title
                                    })
                                }, linkIndex))
                        })
                    ]
                }, sectionIndex))
        })
    });
}
function ArrowIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 16 6",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16 3 10 .5v2H0v1h10v2L16 3Z"
        })
    });
}
function NewsletterForm() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: "max-w-sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "font-display text-sm font-semibold tracking-wider text-neutral-950",
                children: "Sign up for our newsletter"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-4 text-sm text-neutral-700",
                children: "Subscribe to get the latest design news, articles, resources and inspiration."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative mt-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "email",
                        placeholder: "Email address",
                        autoComplete: "email",
                        "aria-label": "Email address",
                        className: "block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute inset-y-1 right-1 flex justify-end",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            "aria-label": "Submit",
                            className: "flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowIcon, {
                                className: "w-4"
                            })
                        })
                    })
                ]
            })
        ]
    });
}
function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        as: "footer",
        className: "mt-24 w-full sm:mt-32 lg:mt-40",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FadeIn.FadeIn, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex lg:justify-end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NewsletterForm, {})
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            "aria-label": "Home",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                                className: "h-8",
                                fillOnHover: true
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-sm text-neutral-700",
                            children: [
                                "\xa9 PressBox. ",
                                new Date().getFullYear()
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/components/GridPattern.jsx
var GridPattern = __webpack_require__(17509);
;// CONCATENATED MODULE: ./src/components/Offices.jsx


function Office({ name, children, invert = false }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("address", {
        className: clsx_default()("text-sm not-italic", invert ? "text-neutral-300" : "text-neutral-600"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                className: invert ? "text-white" : "text-neutral-950",
                children: name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            children
        ]
    });
}
function Offices({ invert = false, ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        role: "list",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Office, {
                    name: "Copenhagen",
                    invert: invert,
                    children: [
                        "1 Carlsberg Gate",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "1260, K\xf8benhavn, Denmark"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Office, {
                    name: "Billund",
                    invert: invert,
                    children: [
                        "24 Lego All\xe9",
                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                        "7190, Billund, Denmark"
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/RootLayout.jsx
/* __next_internal_client_entry_do_not_use__ RootLayout auto */ 












const RootLayoutContext = /*#__PURE__*/ (0,react_.createContext)(null);
function XIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z"
            })
        ]
    });
}
function MenuIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M2 6h20v2H2zM2 16h20v2H2z"
        })
    });
}
function Header({ panelId, icon: Icon, expanded, onToggle, toggleRef, invert = false }) {
    let { logoHovered, setLogoHovered } = (0,react_.useContext)(RootLayoutContext);
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    "aria-label": "Home",
                    onMouseEnter: ()=>setLogoHovered(true),
                    onMouseLeave: ()=>setLogoHovered(false),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Logomark, {
                            className: "h-8 sm:hidden",
                            invert: invert,
                            filled: logoHovered
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Logo, {
                            className: "hidden h-8 sm:block",
                            invert: invert,
                            filled: logoHovered
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center gap-x-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                            href: "/contact",
                            invert: invert,
                            children: "Ready to Quit"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            ref: toggleRef,
                            type: "button",
                            onClick: onToggle,
                            "aria-expanded": expanded ? "true" : "false",
                            "aria-controls": panelId,
                            className: clsx_default()("group -m-2.5 rounded-full p-2.5 transition", invert ? "hover:bg-white/10" : "hover:bg-neutral-950/10"),
                            "aria-label": "Toggle navigation",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                className: clsx_default()("h-6 w-6", invert ? "fill-white group-hover:fill-neutral-200" : "fill-neutral-950 group-hover:fill-neutral-700")
                            })
                        })
                    ]
                })
            ]
        })
    });
}
function NavigationRow({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "even:mt-px sm:bg-neutral-950",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2",
                children: children
            })
        })
    });
}
function NavigationItem({ href, children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: href,
        className: "group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16",
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"
            })
        ]
    });
}
function RootLayout_Navigation() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "mt-px font-display text-5xl font-medium tracking-tight text-white",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavigationRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/work",
                        children: "Publications"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/about",
                        children: "Joining Us"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavigationRow, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/process",
                        children: "On Quitting"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavigationItem, {
                        href: "/blog",
                        children: "PressBox News"
                    })
                ]
            })
        ]
    });
}
function RootLayoutInner({ children }) {
    let panelId = (0,react_.useId)();
    let [expanded, setExpanded] = (0,react_.useState)(false);
    let openRef = (0,react_.useRef)(null);
    let closeRef = (0,react_.useRef)(null);
    let navRef = (0,react_.useRef)(null);
    let shouldReduceMotion = (0,use_reduced_motion/* useReducedMotion */.J)();
    (0,react_.useEffect)(()=>{
        function onClick(event) {
            if (event.target instanceof HTMLElement && event.target.closest("a")?.href === window.location.href) {
                setExpanded(false);
            }
        }
        window.addEventListener("click", onClick);
        return ()=>{
            window.removeEventListener("click", onClick);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MotionConfig/* MotionConfig */.A, {
        transition: shouldReduceMotion ? {
            duration: 0
        } : undefined,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute left-0 right-0 top-2 z-40 pt-14",
                        "aria-hidden": expanded ? "true" : undefined,
                        inert: expanded ? "" : undefined,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                            panelId: panelId,
                            icon: MenuIcon,
                            toggleRef: openRef,
                            expanded: expanded,
                            onToggle: ()=>{
                                setExpanded((expanded)=>!expanded);
                                window.setTimeout(()=>closeRef.current?.focus({
                                        preventScroll: true
                                    }));
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                        layout: true,
                        id: panelId,
                        style: {
                            height: expanded ? "auto" : "0.5rem"
                        },
                        className: "relative z-50 overflow-hidden bg-neutral-950 pt-2",
                        "aria-hidden": expanded ? undefined : "true",
                        inert: expanded ? undefined : "",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                            layout: true,
                            className: "bg-neutral-800",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    ref: navRef,
                                    className: "bg-neutral-950 pb-16 pt-14",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                                        invert: true,
                                        panelId: panelId,
                                        icon: XIcon,
                                        toggleRef: closeRef,
                                        expanded: expanded,
                                        onToggle: ()=>{
                                            setExpanded((expanded)=>!expanded);
                                            window.setTimeout(()=>openRef.current?.focus({
                                                    preventScroll: true
                                                }));
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(RootLayout_Navigation, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Container, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "font-display text-base font-semibold text-white",
                                                            children: "Our offices"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Offices, {
                                                            invert: true,
                                                            className: "mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "sm:border-l sm:border-transparent sm:pl-16",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "font-display text-base font-semibold text-white",
                                                            children: "Follow us"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(SocialMedia, {
                                                            className: "mt-6",
                                                            invert: true
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                layout: true,
                style: {
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40
                },
                className: "relative flex flex-auto overflow-hidden bg-white pt-14",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.div, {
                    layout: true,
                    className: "relative isolate flex w-full flex-col pt-9",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridPattern.GridPattern, {
                            className: "absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",
                            yOffset: -96,
                            interactive: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("main", {
                            className: "w-full flex-auto",
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                    ]
                })
            })
        ]
    });
}
function RootLayout({ children }) {
    let pathname = (0,navigation.usePathname)();
    let [logoHovered, setLogoHovered] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(RootLayoutContext.Provider, {
        value: {
            logoHovered,
            setLogoHovered
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(RootLayoutInner, {
            children: children
        }, pathname)
    });
}


/***/ }),

/***/ 73530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/components/RootLayout.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/clark/Downloads/Source/newsroom/src/components/RootLayout.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["RootLayout"];

// EXTERNAL MODULE: ./src/styles/tailwind.css
var tailwind = __webpack_require__(66092);
;// CONCATENATED MODULE: ./src/app/layout.jsx



const metadata = {
    title: {
        template: "%s - Pressbox",
        default: "Pressbox - Empowering author-owned publications"
    }
};
function Layout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: "h-full bg-neutral-950 text-base antialiased",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "flex min-h-full flex-col",
            children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 29653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41392);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55635);




function NotFound() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W, {
        className: "flex h-full items-center pt-24 sm:pt-32 lg:pt-40",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* .FadeIn */ .U, {
            className: "flex max-w-xl flex-col items-center text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "font-display text-4xl font-semibold text-neutral-950 sm:text-5xl",
                    children: "404"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mt-4 font-display text-2xl font-semibold text-neutral-950",
                    children: "Page not found"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-2 text-sm text-neutral-600",
                    children: "Sorry, we couldn’t find the page you’re looking for."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/",
                    className: "mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700",
                    children: "Go to the home page"
                })
            ]
        })
    });
}


/***/ }),

/***/ 41392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77369);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function Container({ as, className, children }) {
    let Component = as ?? "div";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("mx-auto max-w-7xl px-6 lg:px-8", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto max-w-2xl lg:max-w-none",
            children: children
        })
    });
}


/***/ }),

/***/ 55635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ e0),
/* harmony export */   o: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/clark/Downloads/Source/newsroom/src/components/FadeIn.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["FadeIn"];

const e1 = proxy["FadeInStagger"];


/***/ }),

/***/ 9873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 66092:
/***/ (() => {



/***/ })

};
;