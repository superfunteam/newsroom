"use strict";
exports.id = 3052;
exports.ids = [3052,8221,830];
exports.modules = {

/***/ 80141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useMDXComponents)
/* harmony export */ });
/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73484);

function useMDXComponents(components) {
    return {
        ...components,
        ..._components_MDXComponents__WEBPACK_IMPORTED_MODULE_0__/* .MDXComponents */ .t
    };
}


/***/ }),

/***/ 28221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/hero.814cd572.jpg","height":3117,"width":3648,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAcEAABBQEBAQAAAAAAAAAAAAADAAECBBESITH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBv/EABoRAAICAwAAAAAAAAAAAAAAAAECAAMEEUH/2gAMAwEAAhEDEQA/ALpOi0WclyqGIwvJoCrv0WHONGT5933UREZjLbDqCBtHs//Z","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ 90830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/jenny-wilson.a0821351.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAfEAABBAEFAQAAAAAAAAAAAAACAAEDBBMRFCExQZH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEhAxH/2gAMAwEAAhEDEQA/AJbMFCTfDhxHDadgYYyYRj8bnvX6iImPGqNFYz//2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 53052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  caseStudy: () => (/* binding */ caseStudy),
  "default": () => (/* binding */ page),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./mdx-components.jsx
var mdx_components = __webpack_require__(80141);
;// CONCATENATED MODULE: ./src/images/clients/phobia/logomark-dark.svg
/* harmony default export */ const logomark_dark = ({"src":"/_next/static/media/logomark-dark.00d7d7b3.svg","height":36,"width":36,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/app/work/phobia/hero.jpg
var hero = __webpack_require__(28221);
// EXTERNAL MODULE: ./src/app/work/phobia/jenny-wilson.jpg
var jenny_wilson = __webpack_require__(90830);
// EXTERNAL MODULE: ./src/app/work/wrapper.jsx
var wrapper = __webpack_require__(35163);
;// CONCATENATED MODULE: ./src/app/work/phobia/page.mdx
/*@jsxRuntime automatic @jsxImportSource react*/ 




const caseStudy = {
    client: "Phobia",
    title: "Overcome your fears, find your match",
    description: "Find love in the face of fear — Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.",
    summary: [
        "Find love in the face of fear — Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.",
        "We worked with Phobia to develop a new onboarding flow. A user is shown pictures of common phobias and we use the microphone to detect which ones make them scream, feeding the results into the matching algorithm."
    ],
    logo: logomark_dark,
    image: {
        src: hero["default"]
    },
    date: "2022-06",
    service: "App development",
    testimonial: {
        author: {
            name: "Jenny Wilson",
            role: "CPO of Phobia"
        },
        content: "The team at Studio went above and beyond with our onboarding, even finding a way to access the user’s microphone without triggering one of those annoying permission dialogs."
    }
};
const metadata = {
    title: `${caseStudy.client} Case Study`,
    description: caseStudy.description
};

const MDXLayout = function Layout(props) {
    return jsx_runtime_.jsx(wrapper["default"], Object.assign({}, props, {
        caseStudy: caseStudy
    }));
};
function _createMdxContent(props) {
    const _components = Object.assign({
        h2: "h2",
        p: "p"
    }, (0,mdx_components/* useMDXComponents */.a)(), props.components), { Typography, TagList, TagListItem, Blockquote, StatList, StatListItem } = _components;
    if (!Blockquote) _missingMdxReference("Blockquote", true);
    if (!StatList) _missingMdxReference("StatList", true);
    if (!StatListItem) _missingMdxReference("StatListItem", true);
    if (!TagList) _missingMdxReference("TagList", true);
    if (!TagListItem) _missingMdxReference("TagListItem", true);
    if (!Typography) _missingMdxReference("Typography", true);
    return (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            (0,jsx_runtime_.jsxs)(Typography, {
                children: [
                    "\n",
                    "\n",
                    "\n",
                    jsx_runtime_.jsx(_components.h2, {
                        children: "Overview"
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.p, {
                        children: "Noticing incredibly high churn, the team at Phobia came to the conclusion that, instead of having a fundamentally flawed business idea, they needed to improve their onboarding process."
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.p, {
                        children: "Previously users selected their phobias manually but this led to some users selecting things they weren’t actually afraid of to increase their matches."
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.p, {
                        children: "To combat this, we developed a system that displays a slideshow of common phobias during onboarding. We then use malware to surreptitiously access their microphone and detect when they have audible reactions. We measure the pitch, volume and duration of their screams and feed that information to the matching algorithm."
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.p, {
                        children: "The next phase is a VR version of the onboarding flow where users are subjected to a series of scenarios that will determine their fears. We are currently developing the first scenario, working title: “Jumping out of a plane full of spiders”."
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.h2, {
                        children: "What we did"
                    }),
                    "\n"
                ]
            }),
            (0,jsx_runtime_.jsxs)(TagList, {
                children: [
                    jsx_runtime_.jsx(TagListItem, {
                        children: "Android"
                    }),
                    jsx_runtime_.jsx(TagListItem, {
                        children: "iOS"
                    }),
                    jsx_runtime_.jsx(TagListItem, {
                        children: "Malware"
                    }),
                    jsx_runtime_.jsx(TagListItem, {
                        children: "VR"
                    })
                ]
            }),
            jsx_runtime_.jsx(Typography, {
                children: "\n"
            }),
            jsx_runtime_.jsx(Blockquote, {
                author: {
                    name: "Jenny Wilson",
                    role: "CPO of Phobia"
                },
                image: {
                    src: jenny_wilson["default"]
                },
                children: jsx_runtime_.jsx(_components.p, {
                    children: "The team at Studio went above and beyond with our onboarding, even finding a\nway to access the user’s microphone without triggering one of those annoying\npermission dialogs."
                })
            }),
            jsx_runtime_.jsx(Typography, {
                children: "\n"
            }),
            (0,jsx_runtime_.jsxs)(StatList, {
                children: [
                    jsx_runtime_.jsx(StatListItem, {
                        value: "20%",
                        label: "Churn rate"
                    }),
                    jsx_runtime_.jsx(StatListItem, {
                        value: "5x",
                        label: "Uninstalls"
                    }),
                    jsx_runtime_.jsx(StatListItem, {
                        value: "2.3",
                        label: "App store rating"
                    }),
                    jsx_runtime_.jsx(StatListItem, {
                        value: "8",
                        label: "Pending lawsuits"
                    })
                ]
            }),
            (0,jsx_runtime_.jsxs)(Typography, {
                children: [
                    "\n",
                    "\n"
                ]
            })
        ]
    });
}
function MDXContent(props = {}) {
    return jsx_runtime_.jsx(MDXLayout, Object.assign({}, props, {
        children: jsx_runtime_.jsx(_createMdxContent, props)
    }));
}
/* harmony default export */ const page = (MDXContent);
function _missingMdxReference(id, component) {
    throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


/***/ })

};
;