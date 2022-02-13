"use strict";
(() => {
var exports = {};
exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Index": () => (/* binding */ posts_Index),
  "default": () => (/* binding */ posts),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./utils/config.ts + 1 modules
var config = __webpack_require__(175);
// EXTERNAL MODULE: ./components/layout/post.tsx
var post = __webpack_require__(872);
;// CONCATENATED MODULE: ./components/models/item/index.tsx

function Index({ post  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: `/posts/${post.id}`,
        rel: "noreferrer",
        className: "list-item-link",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    post.title,
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: post.body
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M9 5l7 7-7 7"
                })
            })
        ]
    }));
}
/* harmony default export */ const item = (Index);

;// CONCATENATED MODULE: ./components/models/list/index.tsx


function list_Index({ posts  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: posts.length ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            id: "learning-materials",
            className: "rounded shadow",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Articles"
                }),
                posts.map((post)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx(item, {
                        post: post
                    }, post.id));
                })
            ]
        }) : 'No articles found!'
    }));
}
/* harmony default export */ const list = (list_Index);

;// CONCATENATED MODULE: ./pages/posts/index.tsx


// Import components.


function posts_Index({ posts  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(post/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(list, {
            posts: posts
        })
    }));
}
async function getStaticProps() {
    const res = await fetch(`${config/* default.URL_API */.Z.URL_API}/posts?_limit=4`);
    const posts = await res.json();
    return {
        props: {
            posts
        }
    };
}
/* harmony default export */ const posts = (posts_Index);


/***/ }),

/***/ 175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ config)
});

;// CONCATENATED MODULE: external "next/config"
const config_namespaceObject = require("next/config");
var config_default = /*#__PURE__*/__webpack_require__.n(config_namespaceObject);
;// CONCATENATED MODULE: ./utils/config.ts

const { publicRuntimeConfig  } = config_default()();
/* harmony default export */ const config = (publicRuntimeConfig);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [47,97,872], () => (__webpack_exec__(504)));
module.exports = __webpack_exports__;

})();