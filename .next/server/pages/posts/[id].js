(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 181:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "detail_link__zcz8O"
};


/***/ }),

/***/ 991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Post": () => (/* binding */ Post),
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./utils/config.ts + 1 modules
var config = __webpack_require__(175);
// EXTERNAL MODULE: ./components/layout/post.tsx
var layout_post = __webpack_require__(872);
// EXTERNAL MODULE: ./components/models/detail/index.module.scss
var index_module = __webpack_require__(181);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./components/models/detail/index.tsx


function Index({ post  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "learning-materials",
        className: "rounded shadow",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: post.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "body",
                children: post.body
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: "/posts",
                rel: "noreferrer",
                className: `list-item-link ${(index_module_default()).link}`,
                children: [
                    ' ',
                    "back"
                ]
            }, post.id)
        ]
    }));
}
/* harmony default export */ const detail = (Index);

;// CONCATENATED MODULE: ./pages/posts/[id].tsx


// Import components.


function Post({ post  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(layout_post/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(detail, {
            post: post
        })
    }));
}
async function getStaticProps({ params  }) {
    const id = params.id;
    const res = await fetch(`${config/* default.URL_API */.Z.URL_API}/posts/${id}`);
    const post = await res.json();
    return {
        props: {
            post
        }
    };
}
async function getStaticPaths() {
    const res = await fetch(`${config/* default.URL_API */.Z.URL_API}/posts?_limit=4`);
    const posts = await res.json();
    const paths = posts.map((post)=>({
            params: {
                id: post.id.toString()
            }
        })
    );
    return {
        paths,
        fallback: false
    };
}
/* harmony default export */ const _id_ = (Post);


/***/ }),

/***/ 175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [47,97,872], () => (__webpack_exec__(991)));
module.exports = __webpack_exports__;

})();