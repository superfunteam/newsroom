"use strict";
exports.id = 3933;
exports.ids = [3933,8656,4493];
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

/***/ 28656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/emily-selman.8e8b8ede.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAdEAEAAgICAwAAAAAAAAAAAAABAAIDEQUSEzFh/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABgRAAMBAQAAAAAAAAAAAAAAAAACMQNx/9oADAMBAAIRAxEAPwCmTkMZytcfmygVO1QGrtQ++9O4iIpFoPVpw//Z","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 44493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/hero.5a19c176.jpg","height":3117,"width":3648,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAHAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAgEAAABQMFAAAAAAAAAAAAAAAAAQIDBAYREhQxQXKB/8QAFAEBAAAAAAAAAAAAAAAAAAAABv/EAB0RAAEEAgMAAAAAAAAAAAAAAAEAAgMRBBIhIpH/2gAMAwEAAhEDEQA/AKF+OyiRqTqeZiajWUY2U4dL4Xtxv6AAD75tgOo8SeLFa0XZ5X//2Q==","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ 83933:
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
;// CONCATENATED MODULE: ./src/images/clients/unseal/logomark-dark.svg
/* harmony default export */ const logomark_dark = ({"src":"/_next/static/media/logomark-dark.73187f97.svg","height":36,"width":36,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/app/work/unseal/hero.jpg
var hero = __webpack_require__(44493);
// EXTERNAL MODULE: ./src/app/work/unseal/emily-selman.jpg
var emily_selman = __webpack_require__(28656);
// EXTERNAL MODULE: ./src/app/work/wrapper.jsx
var wrapper = __webpack_require__(35163);
;// CONCATENATED MODULE: ./src/app/work/unseal/page.mdx
/*@jsxRuntime automatic @jsxImportSource react*/ 




const caseStudy = {
    client: "Unseal",
    title: "Get a hodl of your health",
    description: "Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.",
    summary: [
        "Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.",
        "We built out the blockchain infrastructure that supports Unseal. Unfortunately, we took a massive loss on this project when Unseal’s cryptocurrency, PlaceboCoin, went to zero."
    ],
    logo: logomark_dark,
    image: {
        src: hero["default"]
    },
    date: "2022-10",
    service: "Blockchain development",
    testimonial: {
        author: {
            name: "Emily Selman",
            role: "Head of Engineering at Unseal"
        },
        content: "Studio did an amazing job building out our core blockchain infrastructure and I’m sure once PlaceboCoin rallies they’ll be able to finish the project."
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
                        children: "Annoyed that his wife’s gynaecologist would not disclose the results of her pap smear, Unseal’s founder Kevin came up with the idea of using the block chain to store individual health records."
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.p, {
                        children: "Unseal approached us early in their development, having just raised funds through an ICO of their cryptocurrency PlaceboCoin. Having never worked on a web3 product we decided to farm the project out to an agency in Kyiv and skim profits off the top. Despite frequent complaints about missile strikes and power outages, the Ukrainians delivered the brief ahead of schedule."
                    }),
                    "\n",
                    jsx_runtime_.jsx(_components.p, {
                        children: "After reaching a high of $12k, PlaceboCoin went to zero in a matter of hours. Because we took payment in PlaceboCoin but our subcontractors insisted on being paid in USD we have taken a huge financial loss on this project."
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
                        children: "Blockchain development"
                    }),
                    jsx_runtime_.jsx(TagListItem, {
                        children: "Backend (Solidity)"
                    }),
                    jsx_runtime_.jsx(TagListItem, {
                        children: "Smart contracts"
                    })
                ]
            }),
            jsx_runtime_.jsx(Typography, {
                children: "\n"
            }),
            jsx_runtime_.jsx(Blockquote, {
                author: {
                    name: "Emily Selman",
                    role: "Head of Engineering at Unseal"
                },
                image: {
                    src: emily_selman["default"]
                },
                children: jsx_runtime_.jsx(_components.p, {
                    children: "Studio did an amazing job building out our core blockchain infrastructure and\nI’m sure once PlaceboCoin rallies they’ll be able to finish the project."
                })
            }),
            jsx_runtime_.jsx(Typography, {
                children: "\n"
            }),
            (0,jsx_runtime_.jsxs)(StatList, {
                children: [
                    jsx_runtime_.jsx(StatListItem, {
                        value: "34%",
                        label: "Fewer transactions"
                    }),
                    jsx_runtime_.jsx(StatListItem, {
                        value: "10%",
                        label: "Slower transactions"
                    }),
                    jsx_runtime_.jsx(StatListItem, {
                        value: "1000ms",
                        label: "Transaction latency"
                    }),
                    jsx_runtime_.jsx(StatListItem, {
                        value: "3",
                        label: "Active nodes"
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