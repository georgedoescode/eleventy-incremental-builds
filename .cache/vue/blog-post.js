'use strict';

var blogPost_vue_rollupPluginVue_script = require('./blog-post.vue_rollup-plugin-vue_script.js');
var normalizeComponent = require('./node_modules/vue-runtime-helpers/dist/normalize-component.js');

/* script */
const __vue_script__ = blogPost_vue_rollupPluginVue_script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("html", { attrs: { lang: "en" } }, [
    _vm._ssrNode(
      '<head><meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Blog Post</title></head> <body><main><h1>' +
        _vm._ssrEscape(_vm._s(_vm.post.title)) +
        "</h1></main></body>"
    ),
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = "data-v-20800e4c";
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

module.exports = __vue_component__;
