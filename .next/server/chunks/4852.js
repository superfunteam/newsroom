"use strict";
exports.id = 4852;
exports.ids = [4852,7757,4390];
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

/***/ 97757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/debra-fiscal.c5e84807.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAdEAACAwACAwAAAAAAAAAAAAABAgAFIQMREjFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwX/xAAYEQEAAwEAAAAAAAAAAAAAAAABABESIf/aAAwDAQACEQMRAD8AjyXNCbwsbJT0gQY3gG3AfX3TERKm6XkItJ//2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 84390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/hero.3cc9a6af.jpg","height":3117,"width":3648,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAABAwMFAAAAAAAAAAAAAAACAAEEAwYRBRMjQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/EABkRAQACAwAAAAAAAAAAAAAAAAEAAgMREv/aAAwDAQACEQMRAD8Aox1a151qVAqFGkPGgDTYShvxFt4bDuPrdIiJKkitlek1P//Z","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ 94852:
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
;// CONCATENATED MODULE: ./src/images/clients/family-fund/logomark-dark.svg
/* harmony default export */ const logomark_dark = ({"src":"/_next/static/media/logomark-dark.4d2947be.svg","height":36,"width":36,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/app/work/family-fund/hero.jpg
var hero = __webpack_require__(84390);
// EXTERNAL MODULE: ./src/app/work/family-fund/debra-fiscal.jpg
var debra_fiscal = __webpack_require__(97757);
// EXTERNAL MODULE: ./src/app/work/wrapper.jsx
var wrapper = __webpack_require__(35163);
;// CONCATENATED MODULE: ./src/app/work/family-fund/page.mdx
/*@jsxRuntime automatic @jsxImportSource react*/ 




const caseStudy = {
    client: "FamilyFund",
    title: "Skip the bank, borrow from those you trust",
    description: "FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.",
    summary: [
        "FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.",
        "We developed a custom CMS to power their blog with and optimised their site to rank higher for the keywords “Gary Vee” and “Tony Robbins”."
    ],
    logo: logomark_dark,
    image: {
        src: hero["default"]
    },
    date: "2023-01",
    service: "Web development, CMS",
    testimonial: {
        author: {
            name: "Debra Fiscal",
            role: "CEO of FamilyFund"
        },
        content: "Working with Studio, we felt more like a partner than a customer. They really resonated with our mission to change the way people convince their parents to cash out their pensions."
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
        p: "p",
        em: "em"
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
                    (0,jsx_runtime_.jsxs)(_components.p, {
                        children: [
                            "Having written one of the most shared posts on medium.com (“",
                            jsx_runtime_.jsx(_components.em, {
                                children: "How to cash out your Dad’s 401K without him knowing"
                            }),
                            "”) FamilyFund approached us looking to build out their own blog."
                        ]
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.p, {
                        children: "The blog would help drive new traffic to their site and serve as a resource-hub for users already trying to exploit their network for money. Because it was so important that they own their own content, we decided that an on-prem solution would be best."
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.p, {
                        children: "We installed 24 Mac Minis bought from craigslist in the storage cupboard of their office. One machine would be used for the web server and another one for the build server. The other 22 were for redundancy, and to DDOS squarespace.com every few months to keep them on their toes."
                    }),
                    "\n",
                    (0,jsx_runtime_.jsxs)(_components.p, {
                        children: [
                            "To optimise their search traffic we used an innovative technique. Every post has a shadow post only visible to web crawlers that is some variation of ",
                            jsx_runtime_.jsx(_components.em, {
                                children: "“Gary Vee is looking to invest in new founders”"
                            }),
                            ". Like bees to honey."
                        ]
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
                        children: "Frontend (Next.js)"
                    }),
                    jsx_runtime_.jsx(TagListItem, {
                        children: "Custom CMS"
                    }),
                    jsx_runtime_.jsx(TagListItem, {
                        children: "SEO"
                    }),
                    jsx_runtime_.jsx(TagListItem, {
                        children: "Infrastructure"
                    })
                ]
            }),
            jsx_runtime_.jsx(Typography, {
                children: "\n"
            }),
            jsx_runtime_.jsx(Blockquote, {
                author: {
                    name: "Debra Fiscal",
                    role: "CEO of FamilyFund"
                },
                image: {
                    src: debra_fiscal["default"]
                },
                children: jsx_runtime_.jsx(_components.p, {
                    children: "Working with Studio, we felt more like a partner than a customer. They really\nresonated with our mission to change the way people convince their parents to\ncash out their pensions."
                })
            }),
            jsx_runtime_.jsx(Typography, {
                children: "\n"
            }),
            (0,jsx_runtime_.jsxs)(StatList, {
                children: [
                    jsx_runtime_.jsx(StatListItem, {
                        value: "25%",
                        label: "Less traffic"
                    }),
                    jsx_runtime_.jsx(StatListItem, {
                        value: "10x",
                        label: "Page load times"
                    }),
                    jsx_runtime_.jsx(StatListItem, {
                        value: "15%",
                        label: "Higher infra costs"
                    }),
                    jsx_runtime_.jsx(StatListItem, {
                        value: "$1.2M",
                        label: "Legal fees"
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