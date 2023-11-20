"use strict";
exports.id = 6820;
exports.ids = [6820];
exports.modules = {

/***/ 66820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ About),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Border.jsx
var Border = __webpack_require__(32779);
// EXTERNAL MODULE: ./src/components/ContactSection.jsx
var ContactSection = __webpack_require__(17612);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(41392);
// EXTERNAL MODULE: ./src/components/FadeIn.jsx
var FadeIn = __webpack_require__(55635);
// EXTERNAL MODULE: ./src/components/GridList.jsx
var GridList = __webpack_require__(34771);
// EXTERNAL MODULE: ./src/components/PageIntro.jsx
var PageIntro = __webpack_require__(33607);
// EXTERNAL MODULE: ./src/components/PageLinks.jsx
var PageLinks = __webpack_require__(37969);
// EXTERNAL MODULE: ./src/components/SectionIntro.jsx
var SectionIntro = __webpack_require__(55962);
// EXTERNAL MODULE: ./src/components/StatList.jsx
var StatList = __webpack_require__(77129);
// EXTERNAL MODULE: ./src/images/team/angela-fisher.jpg
var angela_fisher = __webpack_require__(35202);
;// CONCATENATED MODULE: ./src/images/team/benjamin-russel.jpg
/* harmony default export */ const benjamin_russel = ({"src":"/_next/static/media/benjamin-russel.da51eb4b.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAcEAAABgMAAAAAAAAAAAAAAAAAAQIDBBEFIkH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAREv/aAAwDAQACEQMRAD8Agw+KflwZK0xHTfI0Kbuy0rai7wAAJyEC7f/Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/blake-reid.jpg
/* harmony default export */ const blake_reid = ({"src":"/_next/static/media/blake-reid.bcc5ac4f.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAeEAABAwUBAQAAAAAAAAAAAAABAAIDBAUREiExMv/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGBEBAQADAAAAAAAAAAAAAAAAAQACEiH/2gAMAwEAAhEDEQA/AI6mpE13Jbb42RtiLXTQl2uhae4z9A595xERUaBG5vG//9k=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/images/team/chelsea-hagon.jpg
var chelsea_hagon = __webpack_require__(9647);
;// CONCATENATED MODULE: ./src/images/team/dries-vincent.jpg
/* harmony default export */ const dries_vincent = ({"src":"/_next/static/media/dries-vincent.5cac3ed5.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAfEAAABQQDAAAAAAAAAAAAAAAAAQIDEQQGEkEUIXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAECQf/aAAwDAQACEQMRAD8AmrrFMVrMElhXMOoVmreMFHU+6AABgrY//9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/emma-dorsey.jpg
/* harmony default export */ const emma_dorsey = ({"src":"/_next/static/media/emma-dorsey.4fab86fa.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAABBAIDAAAAAAAAAAAAAAACAAEEEQNhEyEx/8QAFQEBAQAAAAAAAAAAAAAAAAAABAX/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIDBP/aAAwDAQACEQMRAD8AhcBijDj24SyztyD24vjeq17e0REfahRAlDl0toKz/9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/jeffrey-webb.jpg
/* harmony default export */ const jeffrey_webb = ({"src":"/_next/static/media/jeffrey-webb.a90fe9d1.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAABBAICAwAAAAAAAAAAAAACAAEDEQQFEhQhMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAB/9oADAMBAAIRAxEAPwCYxtxrpCjcs3KCfsWM5Fb8W9MTX4t/qIiAjdb/2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/kathryn-murphy.jpg
/* harmony default export */ const kathryn_murphy = ({"src":"/_next/static/media/kathryn-murphy.550962fd.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAeEAACAgICAwAAAAAAAAAAAAABBAADAhEFEiExYf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIhMf/aAAwDAQACEQMRAD8At1BZfkijXyT1a1GQWFxuGxlvqcRj437Gj8iIi4xFSxs//9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/leonard-krasner.jpg
/* harmony default export */ const leonard_krasner = ({"src":"/_next/static/media/leonard-krasner.5a4a4614.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAACAgEEAwAAAAAAAAAAAAABAgADBAUGESEUMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACAzH/2gAMAwEAAhEDEQA/AKGsbr1Onc6V4mUvjLnV0qqkFWrI4Yng99n38iIiNAYNdFOT/9k=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/images/team/leslie-alexander.jpg
var leslie_alexander = __webpack_require__(85726);
;// CONCATENATED MODULE: ./src/images/team/michael-foster.jpg
/* harmony default export */ const michael_foster = ({"src":"/_next/static/media/michael-foster.00319162.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAgEAABAwMFAQAAAAAAAAAAAAACAAEDBAUREhMUITGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oADAMBAAIRAxEAPwCmutM9Pchr3nfiFC4yDudCWWw+n74iIo9bRlDpf//Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/whitney-francis.jpg
/* harmony default export */ const whitney_francis = ({"src":"/_next/static/media/whitney-francis.ced7480b.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAfEAACAQQCAwAAAAAAAAAAAAABAwACBAURBhIhIkH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABgRAQADAQAAAAAAAAAAAAAAAAEAAgMR/9oADAMBAAIRAxEAPwC3Ii7I5lak3NbbBFytFfYetPYedg/Qd6iIlK5gchbT/9k=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/lib/mdx.js
var mdx = __webpack_require__(46249);
;// CONCATENATED MODULE: ./src/app/about/page.jsx
























function Culture() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionIntro/* SectionIntro */.v, {
                eyebrow: "Wait. What?",
                title: "We want more publications owned by the people that write them.",
                invert: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "It seems simple but apprently it's not. Let's change that."
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-16",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridList/* GridList */.e, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridList/* GridListItem */.l, {
                            title: "Existing Pub",
                            invert: true,
                            children: [
                                "Do you have a passionate userbase? Have we heard of you? Pick one of the above and your pub is ",
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "FREE"
                                }),
                                "."
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "New Venture",
                            invert: true,
                            children: "Starting something new? That works too. Let's talk about the best way to get things rolling."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Capitalist Pig",
                            invert: true,
                            children: "Did that sting? Do you care? Then dangit we might need you. Fund independent journalism [here]. Your donation can fund an entire pub for _years_ to come. [extra] We can match a pitch to your budget. not unlike kickstarter for pubs. donate X to fund Y for Z years"
                        })
                    ]
                })
            })
        ]
    });
}
const team = [
    {
        title: "Leadership",
        people: [
            {
                name: "Leslie Alexander",
                role: "Co-Founder / CEO",
                image: {
                    src: leslie_alexander/* default */.Z
                }
            },
            {
                name: "Michael Foster",
                role: "Co-Founder / CTO",
                image: {
                    src: michael_foster
                }
            },
            {
                name: "Dries Vincent",
                role: "Partner & Business Relations",
                image: {
                    src: dries_vincent
                }
            }
        ]
    },
    {
        title: "Team",
        people: [
            {
                name: "Chelsea Hagon",
                role: "Senior Developer",
                image: {
                    src: chelsea_hagon/* default */.Z
                }
            },
            {
                name: "Emma Dorsey",
                role: "Senior Designer",
                image: {
                    src: emma_dorsey
                }
            },
            {
                name: "Leonard Krasner",
                role: "VP, User Experience",
                image: {
                    src: leonard_krasner
                }
            },
            {
                name: "Blake Reid",
                role: "Junior Copywriter",
                image: {
                    src: blake_reid
                }
            },
            {
                name: "Kathryn Murphy",
                role: "VP, Human Resources",
                image: {
                    src: kathryn_murphy
                }
            },
            {
                name: "Whitney Francis",
                role: "Content Specialist",
                image: {
                    src: whitney_francis
                }
            },
            {
                name: "Jeffrey Webb",
                role: "Account Coordinator",
                image: {
                    src: jeffrey_webb
                }
            },
            {
                name: "Benjamin Russel",
                role: "Senior Developer",
                image: {
                    src: benjamin_russel
                }
            },
            {
                name: "Angela Fisher",
                role: "Front-end Developer",
                image: {
                    src: angela_fisher/* default */.Z
                }
            }
        ]
    }
];
function Team() {
    return /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
        className: "mt-24 sm:mt-32 lg:mt-40",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "space-y-24",
            children: team.map((group)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(FadeIn/* FadeInStagger */.o, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Border/* Border */.O, {
                            as: FadeIn/* FadeIn */.U
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(FadeIn/* FadeIn */.U, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "font-display text-2xl font-semibold text-neutral-950",
                                        children: group.title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "lg:col-span-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        role: "list",
                                        className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8",
                                        children: group.people.map((person)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(FadeIn/* FadeIn */.U, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "group relative overflow-hidden rounded-3xl bg-neutral-100",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                                alt: "",
                                                                ...person.image,
                                                                className: "h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "font-display text-base/6 font-semibold tracking-wide text-white",
                                                                        children: person.name
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        className: "mt-2 text-sm text-white",
                                                                        children: person.role
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }, person.name))
                                    })
                                })
                            ]
                        })
                    ]
                }, group.title))
        })
    });
}
const metadata = {
    title: "About Us",
    description: "We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do."
};
async function About() {
    let blogArticles = (await (0,mdx/* loadArticles */.n)()).slice(0, 2);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PageIntro/* PageIntro */.O, {
                eyebrow: "About us",
                title: "Our strength is collaboration",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-10 max-w-2xl space-y-6 text-base",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Studio was started by three friends who noticed that developer studios were charging clients double what an in-house team would cost. Since the beginning, we have been committed to doing things differently by charging triple instead."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "At Studio, we’re more than just colleagues — we’re a family. This means we pay very little and expect people to work late. We want our employees to bring their whole selves to work. In return, we just ask that they keep themselves there until at least 6:30pm."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-16",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StatList/* StatList */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(StatList/* StatListItem */.j, {
                            value: "35",
                            label: "Underpaid employees"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(StatList/* StatListItem */.j, {
                            value: "52",
                            label: "Placated clients"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(StatList/* StatListItem */.j, {
                            value: "$25M",
                            label: "Invoices billed"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Culture, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Team, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(PageLinks/* PageLinks */.b, {
                className: "mt-24 sm:mt-32 lg:mt-40",
                title: "From the blog",
                intro: "Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design.",
                pages: blogArticles
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ContactSection/* ContactSection */.U, {})
        ]
    });
}


/***/ }),

/***/ 35202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/angela-fisher.f2122cd4.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAdEAAABgMBAAAAAAAAAAAAAAAAAQIDBAURIXET/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABcRAQADAAAAAAAAAAAAAAAAAAABAjH/2gAMAwEAAhEDEQA/AKEelkt18l6wiKR7Pkpk1Fom8a5wAACCtr//2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 9647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/chelsea-hagon.073aa8f2.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABBQACAwAAAAAAAAAAAAACAAEDBBEFMQYSIv/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8AoT8pZr+Y1BKY3htkEIg5fAi8bk7Z1u+r72iIlBf/2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 85726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/leslie-alexander.cf5840d1.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAgEAAABQMFAAAAAAAAAAAAAAAAAQIDBAUSIREVImGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABkRAAMAAwAAAAAAAAAAAAAAAAABAgMhcf/aAAwDAQACEQMRAD8Atvk2RUXJsWpm8w2sm1ykK4ttW5uI8a3degABolNsLItTw//Z","blurWidth":8,"blurHeight":8});

/***/ })

};
;