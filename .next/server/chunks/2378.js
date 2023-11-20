"use strict";
exports.id = 2378;
exports.ids = [2378];
exports.modules = {

/***/ 12378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Process),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/components/Blockquote.jsx
var Blockquote = __webpack_require__(5504);
// EXTERNAL MODULE: ./src/components/ContactSection.jsx
var ContactSection = __webpack_require__(17612);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(41392);
// EXTERNAL MODULE: ./src/components/FadeIn.jsx
var FadeIn = __webpack_require__(55635);
// EXTERNAL MODULE: ./src/components/GridList.jsx
var GridList = __webpack_require__(34771);
// EXTERNAL MODULE: ./src/components/GridPattern.jsx
var GridPattern = __webpack_require__(55806);
// EXTERNAL MODULE: ./src/components/List.jsx
var List = __webpack_require__(13677);
// EXTERNAL MODULE: ./src/components/PageIntro.jsx
var PageIntro = __webpack_require__(33607);
// EXTERNAL MODULE: ./src/components/SectionIntro.jsx
var SectionIntro = __webpack_require__(55962);
// EXTERNAL MODULE: ./src/components/StylizedImage.jsx
var StylizedImage = __webpack_require__(39046);
// EXTERNAL MODULE: ./src/components/TagList.jsx
var TagList = __webpack_require__(89568);
// EXTERNAL MODULE: ./src/images/laptop.jpg
var laptop = __webpack_require__(83261);
;// CONCATENATED MODULE: ./src/images/meeting.jpg
/* harmony default export */ const meeting = ({"src":"/_next/static/media/meeting.0efc6edc.jpg","height":1600,"width":2400,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAABAwMFAAAAAAAAAAAAAAACAAEEAwUREyEiMWH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABgRAAMBAQAAAAAAAAAAAAAAAAABAhIx/9oADAMBAAIRAxEAPwC7ba86VbRlHMLVMXkPx2ybdY8wiIpw3kd9P//Z","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/images/whiteboard.jpg
/* harmony default export */ const whiteboard = ({"src":"/_next/static/media/whiteboard.2d6ee65a.jpg","height":1800,"width":2400,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAeEAABBAEFAAAAAAAAAAAAAAABAAIDEQQGEhMkQf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAZEQADAQEBAAAAAAAAAAAAAAABAgQAAxH/2gAMAwEAAhEDEQA/AKcvUc0LWdWLdzVHbi4AHwgoiJs8/Jl9IwKqOqMAp3//2Q==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/app/process/page.jsx















function Section({ title, image, children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
        className: "group/section [counter-increment:section]",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(FadeIn/* FadeIn */.U, {
                        className: "w-[33.75rem] flex-none lg:w-[45rem]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StylizedImage/* StylizedImage */.p, {
                            ...image,
                            sizes: "(min-width: 1024px) 41rem, 31rem",
                            className: "justify-center lg:justify-end lg:group-even/section:justify-start"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FadeIn/* FadeIn */.U, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]",
                                "aria-hidden": "true"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl",
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mt-6",
                                children: children
                            })
                        ]
                    })
                })
            ]
        })
    });
}
function Discover() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
        title: "Discover",
        image: {
            src: whiteboard
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-6 text-base text-neutral-600",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "We work closely with our clients to understand their",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                className: "font-semibold text-neutral-950",
                                children: "needs"
                            }),
                            " and goals, embedding ourselves in their every day operations to understand what makes their business tick."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Our team of private investigators shadow the company director’s for several weeks while our account managers focus on going through their trash. Our senior security experts then perform social engineering hacks to gain access to their",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                className: "font-semibold text-neutral-950",
                                children: "business"
                            }),
                            " ",
                            "accounts — handing that information over to our forensic accounting team."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Once the full audit is complete, we report back with a comprehensive",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                className: "font-semibold text-neutral-950",
                                children: "plan"
                            }),
                            " and, more importantly, a budget."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "mt-12 font-display text-base font-semibold text-neutral-950",
                children: "Included in this phase"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TagList/* TagList */.P, {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "In-depth questionnaires"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "Feasibility studies"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "Blood samples"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "Employee surveys"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "Proofs-of-concept"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "Forensic audit"
                    })
                ]
            })
        ]
    });
}
function Build() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
        title: "Build",
        image: {
            src: laptop/* default */.Z,
            shape: 1
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-6 text-base text-neutral-600",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Based off of the discovery phase, we develop a comprehensive roadmap for each product and start working towards delivery. The roadmap is an intricately tangled mess of technical nonsense designed to drag the project out as long as possible."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Each client is assigned a key account manager to keep lines of communication open and obscure the actual progress of the project. They act as a buffer between the client’s incessant nagging and the development team who are hard at work scouring open source projects for code to re-purpose."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Our account managers are trained to only reply to client emails after 9pm, several days after the initial email. This reinforces the general aura that we are very busy and dissuades clients from asking for changes."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Blockquote/* Blockquote */.V, {
                author: {
                    name: "Debra Fiscal",
                    role: "CEO of Unseal"
                },
                className: "mt-12",
                children: "Studio were so regular with their progress updates we almost began to think they were automated!"
            })
        ]
    });
}
function Deliver() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
        title: "Deliver",
        image: {
            src: meeting,
            shape: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-6 text-base text-neutral-600",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "About halfway through the Build phase, we push each project out by 6 weeks due to a change in",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                className: "font-semibold text-neutral-950",
                                children: "requirements"
                            }),
                            ". This allows us to increase the budget a final time before launch."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "Despite largely using pre-built components, most of the",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                className: "font-semibold text-neutral-950",
                                children: "progress"
                            }),
                            " ",
                            "on each project takes place in the final 24 hours. The development time allocated to each client is actually spent making augmented reality demos that go viral on Twitter."
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        children: [
                            "We ensure that the main pages of the site are",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                className: "font-semibold text-neutral-950",
                                children: "fully functional"
                            }),
                            " ",
                            "at launch — the auxiliary pages will, of course, be lorem ipusm shells which get updated as part of our exorbitant",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                className: "font-semibold text-neutral-950",
                                children: "maintenance"
                            }),
                            " ",
                            "retainer."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "mt-12 font-display text-base font-semibold text-neutral-950",
                children: "Included in this phase"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(List/* List */.a, {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                        title: "Testing",
                        children: "Our projects always have 100% test coverage, which would be impressive if our tests weren’t as porous as a sieve."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                        title: "Infrastructure",
                        children: "To ensure reliability we only use the best Digital Ocean droplets that $4 a month can buy."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                        title: "Support",
                        children: "Because we hold the API keys for every critical service your business uses, you can expect a lifetime of support, and invoices, from us."
                    })
                ]
            })
        ]
    });
}
function Values() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx(GridPattern/* GridPattern */.K, {
                    className: "absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",
                    yOffset: -270
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionIntro/* SectionIntro */.v, {
                eyebrow: "Our values",
                title: "Balancing reliability and innovation",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "We strive to stay at the forefront of emerging trends and technologies, while completely ignoring them and forking that old Rails project we feel comfortable using. We stand by our core values to justify that decision."
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-24",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridList/* GridList */.e, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Meticulous",
                            children: "The first part of any partnership is getting our designer to put your logo in our template. The second step is getting them to do the colors."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Efficient",
                            children: "We pride ourselves on never missing a deadline which is easy because most of the work was done years ago."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Adaptable",
                            children: "Every business has unique needs and our greatest challenge is shoe-horning those needs into something we already built."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Honest",
                            children: "We are transparent about all of our processes, banking on the simple fact our clients never actually read anything."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Loyal",
                            children: "We foster long-term relationships with our clients that go beyond just delivering a product, allowing us to invoice them for decades."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Innovative",
                            children: "The technological landscape is always evolving and so are we. We are constantly on the lookout for new open source projects to clone."
                        })
                    ]
                })
            })
        ]
    });
}
const metadata = {
    title: "Our Process",
    description: "We believe in efficiency and maximizing our resources to provide the best value to our clients."
};
function Process() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PageIntro/* PageIntro */.O, {
                eyebrow: "Our process",
                title: "How we work",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "We believe in efficiency and maximizing our resources to provide the best value to our clients. The primary way we do that is by re-using the same five projects we’ve been developing for the past decade."
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Discover, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Build, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Deliver, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Values, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ContactSection/* ContactSection */.U, {})
        ]
    });
}


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