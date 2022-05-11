
// --------------------
// Request: /Users/macbook/Documents/vepaar-website-2/node_modules/nuxt3/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/paths.mjs ($id_dbbec8b4)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/css.mjs ($id_a9533952)
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/plugins/server.mjs ($id_ca724058)
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/root-component.mjs ($id_de4c36fd)
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/app-component.mjs ($id_6480c5d2)
// --------------------
const $id_8496f5da = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/paths.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_2__.$fetch;
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = __vite_ssr_import_1__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_1__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_1__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_1__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/paths.mjs
// Parents: 
// - /Users/macbook/Documents/vepaar-website-2/node_modules/nuxt3/dist/app/entry ($id_8496f5da)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// --------------------
const $id_dbbec8b4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/paths.mjs ($id_dbbec8b4)
// - /node_modules/nuxt3/dist/app/components/nuxt-link.mjs ($id_3a707821)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 

// --------------------
const $id_614de060 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/macbook/Documents/vepaar-website-2/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/macbook/Documents/vepaar-website-2/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /Users/macbook/Documents/vepaar-website-2/node_modules/nuxt3/dist/app/entry ($id_8496f5da)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/utils.mjs ($id_1f961b91)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/components/nuxt-link.mjs ($id_3a707821)
// - /node_modules/nuxt3/dist/head/runtime/composables.mjs ($id_54e514a9)
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/components.plugin.mjs ($id_c4362d98)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt3/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_8a2cde52)
// - /node_modules/nuxt3/dist/head/runtime/plugin.mjs ($id_5f983c6f)
// - /node_modules/nuxt3/dist/head/runtime/components.mjs ($id_57905f4f)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/pages/runtime/utils.mjs ($id_e1b210cc)
// - /node_modules/nuxt3/dist/app/components/utils.mjs ($id_bb7711fa)
// - /components/TheButton.vue ($id_00941411)
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/Mission.vue ($id_4d392f66)
// - /components/VepaarStartup.vue ($id_ae0d844e)
// - /components/Team.vue ($id_5e9944c5)
// - /components/TheUsersCounter.vue ($id_4c8955c0)
// - /components/OurJournery.vue ($id_621f0a3b)
// - /components/TheCta.vue ($id_b5c1e281)
// - /pages/aboutus.vue?macro=true ($id_783435b5)
// - /components/TheContent.vue ($id_7179c50a)
// - /components/FeatureCardRow.vue ($id_71dd5421)
// - /components/FeatureCard.vue ($id_d5ac0403)
// - /components/TheBestFeature.vue ($id_df493032)
// - /components/FeatureRow.vue ($id_f81b4e2d)
// - /components/TheApps.vue ($id_fa304aa1)
// - /components/TheClients.vue ($id_4b526e20)
// - /pages/crm.vue?macro=true ($id_362e578b)
// - /components/Extension.vue ($id_3050003d)
// - /components/AppsDownload.vue ($id_22a9121d)
// - /components/VolizApp.vue ($id_458087b3)
// - /components/TheDownload.vue ($id_22e80545)
// - /pages/download.vue?macro=true ($id_85211355)
// - /components/TheRow.vue ($id_61e05cae)
// - /components/SupportCard.vue ($id_85a68533)
// - /components/TheSupport.vue ($id_2ee8f308)
// - /components/TestimonialCard.vue ($id_156486af)
// - /components/TheTestimonial.vue ($id_ac5b85a4)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/links.vue?macro=true ($id_e904372e)
// - /components/ThePollSteps.vue ($id_702c25e6)
// - /pages/polls.vue?macro=true ($id_7689a5ac)
// - /components/PlanCard.vue ($id_49a9a792)
// - /components/PricingTab.vue ($id_5aada895)
// - /components/icons/MdiCheckCircle.vue ($id_da7a5c14)
// - /components/ComparePlans.vue ($id_20b49029)
// - /components/icons/MdiMinus.vue ($id_f0e7bb6e)
// - /components/icons/MdiPlus.vue ($id_7d90f4ac)
// - /components/TheAccordion.vue ($id_4318b5fb)
// - /components/TheFaq.vue ($id_03b536a4)
// - /pages/pricing.vue?macro=true ($id_eaf79752)
// - /pages/store.vue?macro=true ($id_8929f789)
// - /components/TheLinkForm.vue ($id_77d2b478)
// - /components/TheSocialMediaCounter.vue ($id_9b01da9c)
// - /components/TheLinkSteps.vue ($id_586b6059)
// - /pages/whatsapp-link-generator.vue?macro=true ($id_173c502b)
// - /pages/aboutus.vue ($id_9db4de97)
// - /pages/crm.vue ($id_e46e1fbe)
// - /pages/download.vue ($id_35dd2ec2)
// - /pages/index.vue ($id_cca58e97)
// - /pages/links.vue ($id_49b7d808)
// - /pages/polls.vue ($id_4296044b)
// - /pages/pricing.vue ($id_ee43cf6a)
// - /pages/store.vue ($id_5953fbb6)
// - /pages/whatsapp-link-generator.vue ($id_5a1e01a5)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue ($id_f10a5dcc)
// - /node_modules/nuxt3/dist/app/components/layout.mjs ($id_ddd66f9a)
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/layouts.mjs ($id_e60d145e)
// - /components/TheNavigation.vue ($id_e7251b5f)
// - /components/icons/MdiMenu.vue ($id_553dee83)
// - /components/icons/MdiClose.vue ($id_5274c7e0)
// - /components/icons/MdiTranslate.vue ($id_9e717d12)
// - /components/TheHeader.vue ($id_d18d7003)
// - /components/FooterLinks.vue ($id_73c17584)
// - /components/SocialLinks.vue ($id_73c6b2e2)
// - /components/TheFooter.vue ($id_cdfd5170)
// - /layouts/default.vue ($id_7689e89d)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/macbook/Documents/vepaar-website-2/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/macbook/Documents/vepaar-website-2/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /Users/macbook/Documents/vepaar-website-2/node_modules/nuxt3/dist/app/entry ($id_8496f5da)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/macbook/Documents/vepaar-website-2/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/macbook/Documents/vepaar-website-2/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt3/dist/app/index.mjs
// Parents: 
// - /Users/macbook/Documents/vepaar-website-2/node_modules/nuxt3/dist/app/entry ($id_8496f5da)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/error.mjs ($id_228109ca)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/router.mjs ($id_541bda03)
// - /node_modules/nuxt3/dist/app/components/nuxt-link.mjs ($id_3a707821)
// - /node_modules/nuxt3/dist/head/runtime/composables.mjs ($id_54e514a9)
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /node_modules/nuxt3/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_8a2cde52)
// - /node_modules/nuxt3/dist/head/runtime/plugin.mjs ($id_5f983c6f)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt3/dist/app/components/layout.mjs ($id_ddd66f9a)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// - /node_modules/nuxt3/dist/app/components/index.mjs ($id_dcef81fa)
// - /node_modules/nuxt3/dist/head/runtime/index.mjs ($id_274036df)
// --------------------
const $id_d8c2af0f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/unctx/dist/index.mjs ($id_a569ca2d)
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// --------------------
const $id_bf77ef36 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/compat/legacy-app.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_3__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/macbook/Documents/vepaar-website-2/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/macbook/Documents/vepaar-website-2/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 

// --------------------
const $id_a569ca2d = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/macbook/Documents/vepaar-website-2/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/macbook/Documents/vepaar-website-2/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt3/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// --------------------
const $id_75047751 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/compat/legacy-app.mjs ($id_75047751)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/macbook/Documents/vepaar-website-2/node_modules/unenv/runtime/mock/proxy.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/macbook/Documents/vepaar-website-2/node_modules/unenv/runtime/mock/proxy.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/hydrate.mjs ($id_43a772c2)
// - /node_modules/nuxt3/dist/app/composables/state.mjs ($id_d232db97)
// - /node_modules/nuxt3/dist/app/composables/error.mjs ($id_228109ca)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// - /node_modules/nuxt3/dist/app/composables/router.mjs ($id_541bda03)
// --------------------
const $id_42ae3d5d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/app/nuxt.mjs ($id_bf77ef36)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_b47c3881 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/macbook/Documents/vepaar-website-2/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/macbook/Documents/vepaar-website-2/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/component.mjs ($id_b47c3881)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/composables/utils.mjs ($id_1f961b91)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_a2ef143e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = options.default();
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating) {
      asyncData.pending.value = false;
    } else if (instance && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_1f961b91 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_43a772c2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_d232db97 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_228109ca = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error);
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/composables/asyncData.mjs ($id_a2ef143e)
// --------------------
const $id_765a0ed7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/asyncData.mjs");

function useFetch(request, opts = {}) {
  const key = "$f_" + (opts.key || __vite_ssr_import_0__.hash([request, opts]));
  const _request = __vite_ssr_import_1__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_1__.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = __vite_ssr_import_2__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, opts = {}) {
  return useFetch(request, { ...opts, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/ohash/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/fetch.mjs ($id_765a0ed7)
// Dependencies: 

// --------------------
const $id_b1b82cf3 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/macbook/Documents/vepaar-website-2/node_modules/ohash/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/macbook/Documents/vepaar-website-2/node_modules/ohash/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt3/dist/app/composables/ssr.mjs ($id_4d0dc923)
// - /node_modules/nuxt3/dist/app/composables/utils.mjs ($id_1f961b91)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_792d64c4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const initialValue = cookie.value;
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    nuxtApp.hooks.hookOnce("app:rendered", () => {
      if (cookie.value !== initialValue) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    });
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/macbook/Documents/vepaar-website-2/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/macbook/Documents/vepaar-website-2/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/router.mjs ($id_541bda03)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/macbook/Documents/vepaar-website-2/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/macbook/Documents/vepaar-website-2/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/macbook/Documents/vepaar-website-2/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/macbook/Documents/vepaar-website-2/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/cookie.mjs ($id_792d64c4)
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_4d0dc923 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/composables/index.mjs ($id_42ae3d5d)
// Dependencies: 
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_541bda03 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_1__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_1__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_1__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_1__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_1__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true && __vite_ssr_import_1__.useNuxtApp().ssrContext) {
    const { ssrContext } = __vite_ssr_import_1__.useNuxtApp();
    if (ssrContext && ssrContext.event) {
      const redirectLocation = router.resolve(to).fullPath;
      return __vite_ssr_import_0__.sendRedirect(ssrContext.event, redirectLocation);
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-link.mjs ($id_3a707821)
// --------------------
const $id_dcef81fa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/components/index.mjs ($id_dcef81fa)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /components/TheHeader.vue ($id_d18d7003)
// - /components/TheFooter.vue ($id_cdfd5170)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_3a707821 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /layouts/default.vue ($id_7689e89d)
// Dependencies: 
// - /node_modules/nuxt3/dist/head/runtime/composables.mjs ($id_54e514a9)
// --------------------
const $id_274036df = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt3/dist/head/runtime/index.mjs ($id_274036df)
// - /node_modules/nuxt3/dist/head/runtime/components.mjs ($id_57905f4f)
// - /node_modules/nuxt3/dist/head/runtime/plugin.mjs ($id_5f983c6f)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_54e514a9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt3/dist/head/runtime/composables.mjs ($id_54e514a9)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/macbook/Documents/vepaar-website-2/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/macbook/Documents/vepaar-website-2/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/css.mjs
// Parents: 
// - /Users/macbook/Documents/vepaar-website-2/node_modules/nuxt3/dist/app/entry ($id_8496f5da)
// Dependencies: 
// - /assets/css/tailwind.css ($id_f75548e1)
// - /assets/css/style.scss ($id_7107a6a0)
// --------------------
const $id_a9533952 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/css/tailwind.css");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/assets/css/style.scss");
;
}


// --------------------
// Request: /assets/css/tailwind.css
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/css.mjs ($id_a9533952)
// Dependencies: 

// --------------------
const $id_f75548e1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #d8e4ef;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{margin-left:auto;margin-right:auto;padding-left:1rem;padding-right:1rem;width:100%}@media (min-width:640px){.container{max-width:640px;padding-left:2rem;padding-right:2rem}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px;padding-left:4rem;padding-right:4rem}}@media (min-width:1280px){.container{max-width:1280px;padding-left:5rem;padding-right:5rem}}@media (min-width:1536px){.container{max-width:1536px}}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:-webkit-sticky;position:sticky}.inset-0{bottom:0;left:0;right:0;top:0}.top-0{top:0}.-bottom-\\[1px\\]{bottom:-1px}.right-0{right:0}.left-0{left:0}.-bottom-1{bottom:-.25rem}.top-20{top:5rem}.top-8{top:2rem}.bottom-0{bottom:0}.z-10{z-index:10}.-z-\\[1\\]{z-index:-1}.col-span-2{grid-column:span 2/span 2}.m-0{margin:0}.m-4{margin:1rem}.my-5{margin-bottom:1.25rem;margin-top:1.25rem}.my-4{margin-bottom:1rem;margin-top:1rem}.mx-auto{margin-left:auto;margin-right:auto}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.my-2{margin-bottom:.5rem;margin-top:.5rem}.-mx-5{margin-left:-1.25rem;margin-right:-1.25rem}.mt-5{margin-top:1.25rem}.ml-3{margin-left:.75rem}.ml-2{margin-left:.5rem}.ml-auto{margin-left:auto}.mb-2{margin-bottom:.5rem}.mt-auto{margin-top:auto}.mt-1{margin-top:.25rem}.mt-3{margin-top:.75rem}.ml-5{margin-left:1.25rem}.mt-2{margin-top:.5rem}.mt-10{margin-top:2.5rem}.mt-4{margin-top:1rem}.mr-8{margin-right:2rem}.mt-14{margin-top:3.5rem}.mr-5{margin-right:1.25rem}.mt-8{margin-top:2rem}.-mt-20{margin-top:-5rem}.mt-20{margin-top:5rem}.ml-4{margin-left:1rem}.-ml-5{margin-left:-1.25rem}.mr-2{margin-right:.5rem}.ml-0{margin-left:0}.-mb-7{margin-bottom:-1.75rem}.mt-7{margin-top:1.75rem}.mt-0{margin-top:0}.mt-6{margin-top:1.5rem}.mt-12{margin-top:3rem}.mb-5{margin-bottom:1.25rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.table-cell{display:table-cell}.grid{display:grid}.hidden{display:none}.h-12{height:3rem}.h-\\[1px\\]{height:1px}.h-full{height:100%}.h-9{height:2.25rem}.h-\\[3px\\]{height:3px}.h-20{height:5rem}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-0{height:0}.h-6{height:1.5rem}.h-8{height:2rem}.h-auto{height:auto}.h-\\[2px\\]{height:2px}.h-40{height:10rem}.h-16{height:4rem}.w-2\\/6{width:33.333333%}.w-2\\/3{width:66.666667%}.w-full{width:100%}.w-1\\/6{width:16.666667%}.w-1\\/3{width:33.333333%}.w-8{width:2rem}.w-9{width:2.25rem}.w-10{width:2.5rem}.w-20{width:5rem}.w-5{width:1.25rem}.w-60{width:15rem}.w-12{width:3rem}.w-auto{width:auto}.w-0{width:0}.w-4\\/5{width:80%}.w-64{width:16rem}.w-\\[2px\\]{width:2px}.w-\\[3px\\]{width:3px}.max-w-3xl{max-width:48rem}.max-w-sm{max-width:24rem}.max-w-5xl{max-width:64rem}.max-w-7xl{max-width:80rem}.max-w-lg{max-width:32rem}.max-w-xl{max-width:36rem}.max-w-md{max-width:28rem}.max-w-none{max-width:none}.max-w-xs{max-width:20rem}.max-w-2xl{max-width:42rem}.flex-1{flex:1 1 0%}.translate-x-full{--tw-translate-x:100%}.translate-x-0,.translate-x-full{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x:0px}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.list-disc{list-style-type:disc}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-5{gap:1.25rem}.gap-8{gap:2rem}.gap-2{gap:.5rem}.overflow-hidden{overflow:hidden}.rounded-xl{border-radius:.75rem}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-full{border-radius:9999px}.rounded-3xl{border-radius:1.5rem}.rounded-tl-md{border-top-left-radius:.375rem}.rounded-bl-md{border-bottom-left-radius:.375rem}.border{border-width:1px}.border-4{border-width:4px}.border-2{border-width:2px}.border-t{border-top-width:1px}.border-b{border-bottom-width:1px}.border-l-0{border-left-width:0}.border-r-\\[3px\\]{border-right-width:3px}.border-dashed{border-style:dashed}.border-gray-100{--tw-border-opacity:1;border-color:rgb(243 244 246/var(--tw-border-opacity))}.border-gray-400{--tw-border-opacity:1;border-color:rgb(156 163 175/var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgb(216 228 239/var(--tw-border-opacity))}.border-primary-500{--tw-border-opacity:1;border-color:rgb(48 79 254/var(--tw-border-opacity))}.border-gray-500{--tw-border-opacity:1;border-color:rgb(75 85 99/var(--tw-border-opacity))}.border-voliz-500{--tw-border-opacity:1;border-color:rgb(0 200 83/var(--tw-border-opacity))}.bg-deep-purple-500{--tw-bg-opacity:1;background-color:rgb(170 0 255/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-primary-500{--tw-bg-opacity:1;background-color:rgb(48 79 254/var(--tw-bg-opacity))}.bg-purple-500{--tw-bg-opacity:1;background-color:rgb(98 0 234/var(--tw-bg-opacity))}.bg-pink-500{--tw-bg-opacity:1;background-color:rgb(197 17 98/var(--tw-bg-opacity))}.bg-accent-100{--tw-bg-opacity:1;background-color:rgb(0 188 212/var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:rgb(23 33 57/var(--tw-bg-opacity))}.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.bg-gray-400{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(216 228 239/var(--tw-bg-opacity))}.bg-opacity-10{--tw-bg-opacity:0.1}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-primary-500{--tw-gradient-from:#304ffe;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(48,79,254,0))}.from-white{--tw-gradient-from:#fff;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,hsla(0,0%,100%,0))}.via-purple-500{--tw-gradient-stops:var(--tw-gradient-from),#6200ea,var(--tw-gradient-to,rgba(98,0,234,0))}.via-deep-purple-500{--tw-gradient-stops:var(--tw-gradient-from),#a0f,var(--tw-gradient-to,rgba(170,0,255,0))}.via-\\[\\#D1D5DB\\]{--tw-gradient-stops:var(--tw-gradient-from),#d1d5db,var(--tw-gradient-to,rgba(209,213,219,0))}.to-pink-500{--tw-gradient-to:#c51162}.to-white{--tw-gradient-to:#fff}.bg-cover{background-size:cover}.bg-clip-text{-webkit-background-clip:text;background-clip:text}.bg-center{background-position:50%}.object-contain{-o-object-fit:contain;object-fit:contain}.object-center{-o-object-position:center;object-position:center}.p-5{padding:1.25rem}.p-1{padding:.25rem}.p-4{padding:1rem}.p-8{padding:2rem}.py-12{padding-bottom:3rem;padding-top:3rem}.px-4{padding-left:1rem;padding-right:1rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-10{padding-bottom:2.5rem;padding-top:2.5rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-8{padding-left:2rem;padding-right:2rem}.py-4{padding-bottom:1rem;padding-top:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-0{padding-left:0;padding-right:0}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.py-14{padding-bottom:3.5rem;padding-top:3.5rem}.py-20{padding-bottom:5rem;padding-top:5rem}.pl-2{padding-left:.5rem}.pl-3{padding-left:.75rem}.pb-20{padding-bottom:5rem}.pt-10{padding-top:2.5rem}.pb-12{padding-bottom:3rem}.pt-4{padding-top:1rem}.pt-20{padding-top:5rem}.pb-32{padding-bottom:8rem}.pt-0{padding-top:0}.pl-10{padding-left:2.5rem}.pt-14{padding-top:3.5rem}.pr-8{padding-right:2rem}.pb-10{padding-bottom:2.5rem}.pt-16{padding-top:4rem}.text-left{text-align:left}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:1.75rem}.text-4xl{font-size:2.25rem;line-height:2.75rem}.text-sm{font-size:.875rem;line-height:1.5rem}.text-base{font-size:1rem;line-height:1.5rem}.text-xl{font-size:1.25rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.5rem}.text-3xl{font-size:1.875rem;line-height:2.5rem}.text-5xl{font-size:3rem;line-height:1.18}.font-semibold{font-weight:600}.font-normal{font-weight:400}.font-extrabold{font-weight:800}.capitalize{text-transform:capitalize}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.text-primary-500{--tw-text-opacity:1;color:rgb(48 79 254/var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.text-transparent{color:transparent}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(54 66 85/var(--tw-text-opacity))}.text-gray-200{--tw-text-opacity:1;color:rgb(216 228 239/var(--tw-text-opacity))}.text-voliz-500{--tw-text-opacity:1;color:rgb(0 200 83/var(--tw-text-opacity))}.text-black{color:rgb(0 0 0/var(--tw-text-opacity))}.text-black,.text-opacity-100{--tw-text-opacity:1}.text-opacity-0{--tw-text-opacity:0}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color)}.shadow-2xl,.shadow-sm{box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.outline{outline-style:solid}.invert{--tw-invert:invert(100%)}.filter,.invert{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.hover\\:-translate-y-1:hover{--tw-translate-y:-0.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-gray-800:hover{--tw-bg-opacity:1;background-color:rgb(23 33 57/var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hover\\:bg-accent-200:hover{--tw-bg-opacity:1;background-color:rgb(0 147 182/var(--tw-bg-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width:640px){.sm\\:top-10{top:2.5rem}.sm\\:left-\\[50\\%\\]{left:50%}.sm\\:left-auto{left:auto}.sm\\:col-span-1{grid-column:span 1/span 1}.sm\\:my-10{margin-bottom:2.5rem;margin-top:2.5rem}.sm\\:mt-0{margin-top:0}.sm\\:ml-8{margin-left:2rem}.sm\\:mt-10{margin-top:2.5rem}.sm\\:mt-20{margin-top:5rem}.sm\\:ml-auto{margin-left:auto}.sm\\:ml-0{margin-left:0}.sm\\:mt-4{margin-top:1rem}.sm\\:mr-auto{margin-right:auto}.sm\\:-ml-16{margin-left:-4rem}.sm\\:-mr-10{margin-right:-2.5rem}.sm\\:mt-40{margin-top:10rem}.sm\\:block{display:block}.sm\\:flex{display:flex}.sm\\:h-16{height:4rem}.sm\\:h-14{height:3.5rem}.sm\\:w-9{width:2.25rem}.sm\\:w-40{width:10rem}.sm\\:w-10{width:2.5rem}.sm\\:w-14{width:3.5rem}.sm\\:w-8{width:2rem}.sm\\:w-1\\/2{width:50%}.sm\\:max-w-md{max-width:28rem}.sm\\:flex-1{flex:1 1 0%}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:flex-row-reverse{flex-direction:row-reverse}.sm\\:justify-between{justify-content:space-between}.sm\\:gap-5{gap:1.25rem}.sm\\:bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.sm\\:p-10{padding:2.5rem}.sm\\:px-5{padding-left:1.25rem;padding-right:1.25rem}.sm\\:py-0{padding-bottom:0;padding-top:0}.sm\\:py-20{padding-bottom:5rem;padding-top:5rem}.sm\\:pl-20{padding-left:5rem}.sm\\:pt-0{padding-top:0}.sm\\:pr-5{padding-right:1.25rem}.sm\\:pt-20{padding-top:5rem}.sm\\:pr-10{padding-right:2.5rem}.sm\\:pl-10{padding-left:2.5rem}.sm\\:pl-0{padding-left:0}.sm\\:pr-20{padding-right:5rem}.sm\\:text-left{text-align:left}.sm\\:text-right{text-align:right}.sm\\:text-2xl{font-size:1.5rem;line-height:1.75rem}.sm\\:text-5xl{font-size:3rem;line-height:1.18}.sm\\:text-3xl{font-size:1.875rem;line-height:2.5rem}.sm\\:text-lg{font-size:1.125rem;line-height:1.5rem}.sm\\:text-4xl{font-size:2.25rem;line-height:2.75rem}.sm\\:text-base{font-size:1rem;line-height:1.5rem}}@media (min-width:768px){.md\\:h-8{height:2rem}}@media (min-width:1024px){.lg\\:static{position:static}.lg\\:absolute{position:absolute}.lg\\:sticky{position:-webkit-sticky;position:sticky}.lg\\:right-0{right:0}.lg\\:my-12{margin-bottom:3rem;margin-top:3rem}.lg\\:my-6{margin-bottom:1.5rem;margin-top:1.5rem}.lg\\:my-8{margin-bottom:2rem;margin-top:2rem}.lg\\:mt-10{margin-top:2.5rem}.lg\\:mt-4{margin-top:1rem}.lg\\:mt-20{margin-top:5rem}.lg\\:mt-0{margin-top:0}.lg\\:-mb-10{margin-bottom:-2.5rem}.lg\\:flex{display:flex}.lg\\:table-cell{display:table-cell}.lg\\:table-row{display:table-row}.lg\\:hidden{display:none}.lg\\:h-16{height:4rem}.lg\\:h-14{height:3.5rem}.lg\\:h-8{height:2rem}.lg\\:h-0{height:0}.lg\\:h-10{height:2.5rem}.lg\\:h-full{height:100%}.lg\\:h-20{height:5rem}.lg\\:h-screen{height:100vh}.lg\\:w-14{width:3.5rem}.lg\\:w-80{width:20rem}.lg\\:w-2\\/5{width:40%}.lg\\:w-20{width:5rem}.lg\\:w-10{width:2.5rem}.lg\\:max-w-md{max-width:28rem}.lg\\:max-w-2xl{max-width:42rem}.lg\\:max-w-xs{max-width:20rem}.lg\\:max-w-sm{max-width:24rem}.lg\\:flex-1{flex:1 1 0%}.lg\\:translate-x-0{--tw-translate-x:0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:justify-end{justify-content:flex-end}.lg\\:rounded-none{border-radius:0}.lg\\:bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.lg\\:bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.lg\\:bg-none{background-image:none}.lg\\:bg-clip-text{-webkit-background-clip:text;background-clip:text}.lg\\:p-20{padding:5rem}.lg\\:px-3{padding-left:.75rem;padding-right:.75rem}.lg\\:pt-4{padding-top:1rem}.lg\\:pt-20{padding-top:5rem}.lg\\:text-center{text-align:center}.lg\\:text-4xl{font-size:2.25rem;line-height:2.75rem}.lg\\:text-3xl{font-size:1.875rem;line-height:2.5rem}.lg\\:text-5xl{font-size:3rem;line-height:1.18}.lg\\:text-xl{font-size:1.25rem;line-height:1.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:1.75rem}.lg\\:text-lg{font-size:1.125rem;line-height:1.5rem}.lg\\:text-6xl{font-size:3.75rem;line-height:1.1}.lg\\:text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.lg\\:text-transparent{color:transparent}}";
}


// --------------------
// Request: /assets/css/style.scss
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/css.mjs ($id_a9533952)
// Dependencies: 

// --------------------
const $id_7107a6a0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "@import \"https://use.typekit.net/qdt0uvt.css\";\n/*! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #d8e4ef;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{margin-left:auto;margin-right:auto;padding-left:1rem;padding-right:1rem;width:100%}@media (min-width:640px){.container{max-width:640px;padding-left:2rem;padding-right:2rem}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px;padding-left:4rem;padding-right:4rem}}@media (min-width:1280px){.container{max-width:1280px;padding-left:5rem;padding-right:5rem}}@media (min-width:1536px){.container{max-width:1536px}}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:-webkit-sticky;position:sticky}.inset-0{bottom:0;left:0;right:0;top:0}.top-0{top:0}.-bottom-\\[1px\\]{bottom:-1px}.right-0{right:0}.left-0{left:0}.-bottom-1{bottom:-.25rem}.top-20{top:5rem}.top-8{top:2rem}.bottom-0{bottom:0}.z-10{z-index:10}.-z-\\[1\\]{z-index:-1}.col-span-2{grid-column:span 2/span 2}.m-0{margin:0}.m-4{margin:1rem}.my-5{margin-bottom:1.25rem;margin-top:1.25rem}.my-4{margin-bottom:1rem;margin-top:1rem}.mx-auto{margin-left:auto;margin-right:auto}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.my-2{margin-bottom:.5rem;margin-top:.5rem}.-mx-5{margin-left:-1.25rem;margin-right:-1.25rem}.mt-5{margin-top:1.25rem}.ml-3{margin-left:.75rem}.ml-2{margin-left:.5rem}.ml-auto{margin-left:auto}.mb-2{margin-bottom:.5rem}.mt-auto{margin-top:auto}.mt-1{margin-top:.25rem}.mt-3{margin-top:.75rem}.ml-5{margin-left:1.25rem}.mt-2{margin-top:.5rem}.mt-10{margin-top:2.5rem}.mt-4{margin-top:1rem}.mr-8{margin-right:2rem}.mt-14{margin-top:3.5rem}.mr-5{margin-right:1.25rem}.mt-8{margin-top:2rem}.-mt-20{margin-top:-5rem}.mt-20{margin-top:5rem}.ml-4{margin-left:1rem}.-ml-5{margin-left:-1.25rem}.mr-2{margin-right:.5rem}.ml-0{margin-left:0}.-mb-7{margin-bottom:-1.75rem}.mt-7{margin-top:1.75rem}.mt-0{margin-top:0}.mt-6{margin-top:1.5rem}.mt-12{margin-top:3rem}.mb-5{margin-bottom:1.25rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.table-cell{display:table-cell}.grid{display:grid}.hidden{display:none}.h-12{height:3rem}.h-\\[1px\\]{height:1px}.h-full{height:100%}.h-9{height:2.25rem}.h-\\[3px\\]{height:3px}.h-20{height:5rem}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-0{height:0}.h-6{height:1.5rem}.h-8{height:2rem}.h-auto{height:auto}.h-\\[2px\\]{height:2px}.h-40{height:10rem}.h-16{height:4rem}.w-2\\/6{width:33.333333%}.w-2\\/3{width:66.666667%}.w-full{width:100%}.w-1\\/6{width:16.666667%}.w-1\\/3{width:33.333333%}.w-8{width:2rem}.w-9{width:2.25rem}.w-10{width:2.5rem}.w-20{width:5rem}.w-5{width:1.25rem}.w-60{width:15rem}.w-12{width:3rem}.w-auto{width:auto}.w-0{width:0}.w-4\\/5{width:80%}.w-64{width:16rem}.w-\\[2px\\]{width:2px}.w-\\[3px\\]{width:3px}.max-w-3xl{max-width:48rem}.max-w-sm{max-width:24rem}.max-w-5xl{max-width:64rem}.max-w-7xl{max-width:80rem}.max-w-lg{max-width:32rem}.max-w-xl{max-width:36rem}.max-w-md{max-width:28rem}.max-w-none{max-width:none}.max-w-xs{max-width:20rem}.max-w-2xl{max-width:42rem}.flex-1{flex:1 1 0%}.translate-x-full{--tw-translate-x:100%}.translate-x-0,.translate-x-full{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0{--tw-translate-x:0px}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.list-disc{list-style-type:disc}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-5{gap:1.25rem}.gap-8{gap:2rem}.gap-2{gap:.5rem}.overflow-hidden{overflow:hidden}.rounded-xl{border-radius:.75rem}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-full{border-radius:9999px}.rounded-3xl{border-radius:1.5rem}.rounded-tl-md{border-top-left-radius:.375rem}.rounded-bl-md{border-bottom-left-radius:.375rem}.border{border-width:1px}.border-4{border-width:4px}.border-2{border-width:2px}.border-t{border-top-width:1px}.border-b{border-bottom-width:1px}.border-l-0{border-left-width:0}.border-r-\\[3px\\]{border-right-width:3px}.border-dashed{border-style:dashed}.border-gray-100{--tw-border-opacity:1;border-color:rgb(243 244 246/var(--tw-border-opacity))}.border-gray-400{--tw-border-opacity:1;border-color:rgb(156 163 175/var(--tw-border-opacity))}.border-gray-200{--tw-border-opacity:1;border-color:rgb(216 228 239/var(--tw-border-opacity))}.border-primary-500{--tw-border-opacity:1;border-color:rgb(48 79 254/var(--tw-border-opacity))}.border-gray-500{--tw-border-opacity:1;border-color:rgb(75 85 99/var(--tw-border-opacity))}.border-voliz-500{--tw-border-opacity:1;border-color:rgb(0 200 83/var(--tw-border-opacity))}.bg-deep-purple-500{--tw-bg-opacity:1;background-color:rgb(170 0 255/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-primary-500{--tw-bg-opacity:1;background-color:rgb(48 79 254/var(--tw-bg-opacity))}.bg-purple-500{--tw-bg-opacity:1;background-color:rgb(98 0 234/var(--tw-bg-opacity))}.bg-pink-500{--tw-bg-opacity:1;background-color:rgb(197 17 98/var(--tw-bg-opacity))}.bg-accent-100{--tw-bg-opacity:1;background-color:rgb(0 188 212/var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:rgb(23 33 57/var(--tw-bg-opacity))}.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.bg-gray-400{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(216 228 239/var(--tw-bg-opacity))}.bg-opacity-10{--tw-bg-opacity:0.1}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-primary-500{--tw-gradient-from:#304ffe;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(48,79,254,0))}.from-white{--tw-gradient-from:#fff;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,hsla(0,0%,100%,0))}.via-purple-500{--tw-gradient-stops:var(--tw-gradient-from),#6200ea,var(--tw-gradient-to,rgba(98,0,234,0))}.via-deep-purple-500{--tw-gradient-stops:var(--tw-gradient-from),#a0f,var(--tw-gradient-to,rgba(170,0,255,0))}.via-\\[\\#D1D5DB\\]{--tw-gradient-stops:var(--tw-gradient-from),#d1d5db,var(--tw-gradient-to,rgba(209,213,219,0))}.to-pink-500{--tw-gradient-to:#c51162}.to-white{--tw-gradient-to:#fff}.bg-cover{background-size:cover}.bg-clip-text{-webkit-background-clip:text;background-clip:text}.bg-center{background-position:50%}.object-contain{-o-object-fit:contain;object-fit:contain}.object-center{-o-object-position:center;object-position:center}.p-5{padding:1.25rem}.p-1{padding:.25rem}.p-4{padding:1rem}.p-8{padding:2rem}.py-12{padding-bottom:3rem;padding-top:3rem}.px-4{padding-left:1rem;padding-right:1rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-10{padding-bottom:2.5rem;padding-top:2.5rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-8{padding-left:2rem;padding-right:2rem}.py-4{padding-bottom:1rem;padding-top:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-0{padding-left:0;padding-right:0}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.py-14{padding-bottom:3.5rem;padding-top:3.5rem}.py-20{padding-bottom:5rem;padding-top:5rem}.pl-2{padding-left:.5rem}.pl-3{padding-left:.75rem}.pb-20{padding-bottom:5rem}.pt-10{padding-top:2.5rem}.pb-12{padding-bottom:3rem}.pt-4{padding-top:1rem}.pt-20{padding-top:5rem}.pb-32{padding-bottom:8rem}.pt-0{padding-top:0}.pl-10{padding-left:2.5rem}.pt-14{padding-top:3.5rem}.pr-8{padding-right:2rem}.pb-10{padding-bottom:2.5rem}.pt-16{padding-top:4rem}.text-left{text-align:left}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:1.75rem}.text-4xl{font-size:2.25rem;line-height:2.75rem}.text-sm{font-size:.875rem;line-height:1.5rem}.text-base{font-size:1rem;line-height:1.5rem}.text-xl{font-size:1.25rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.5rem}.text-3xl{font-size:1.875rem;line-height:2.5rem}.text-5xl{font-size:3rem;line-height:1.18}.font-semibold{font-weight:600}.font-normal{font-weight:400}.font-extrabold{font-weight:800}.capitalize{text-transform:capitalize}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.text-primary-500{--tw-text-opacity:1;color:rgb(48 79 254/var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.text-transparent{color:transparent}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(54 66 85/var(--tw-text-opacity))}.text-gray-200{--tw-text-opacity:1;color:rgb(216 228 239/var(--tw-text-opacity))}.text-voliz-500{--tw-text-opacity:1;color:rgb(0 200 83/var(--tw-text-opacity))}.text-black{color:rgb(0 0 0/var(--tw-text-opacity))}.text-black,.text-opacity-100{--tw-text-opacity:1}.text-opacity-0{--tw-text-opacity:0}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color)}.shadow-2xl,.shadow-sm{box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.outline{outline-style:solid}.invert{--tw-invert:invert(100%)}.filter,.invert{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}body{font-family:museo-sans}.module{padding-bottom:5rem;padding-top:5rem}.hover\\:-translate-y-1:hover{--tw-translate-y:-0.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:bg-gray-800:hover{--tw-bg-opacity:1;background-color:rgb(23 33 57/var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hover\\:bg-accent-200:hover{--tw-bg-opacity:1;background-color:rgb(0 147 182/var(--tw-bg-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}@media (min-width:640px){.sm\\:top-10{top:2.5rem}.sm\\:left-\\[50\\%\\]{left:50%}.sm\\:left-auto{left:auto}.sm\\:col-span-1{grid-column:span 1/span 1}.sm\\:my-10{margin-bottom:2.5rem;margin-top:2.5rem}.sm\\:mt-0{margin-top:0}.sm\\:ml-8{margin-left:2rem}.sm\\:mt-10{margin-top:2.5rem}.sm\\:mt-20{margin-top:5rem}.sm\\:ml-auto{margin-left:auto}.sm\\:ml-0{margin-left:0}.sm\\:mt-4{margin-top:1rem}.sm\\:mr-auto{margin-right:auto}.sm\\:-ml-16{margin-left:-4rem}.sm\\:-mr-10{margin-right:-2.5rem}.sm\\:mt-40{margin-top:10rem}.sm\\:block{display:block}.sm\\:flex{display:flex}.sm\\:h-16{height:4rem}.sm\\:h-14{height:3.5rem}.sm\\:w-9{width:2.25rem}.sm\\:w-40{width:10rem}.sm\\:w-10{width:2.5rem}.sm\\:w-14{width:3.5rem}.sm\\:w-8{width:2rem}.sm\\:w-1\\/2{width:50%}.sm\\:max-w-md{max-width:28rem}.sm\\:flex-1{flex:1 1 0%}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:flex-row-reverse{flex-direction:row-reverse}.sm\\:justify-between{justify-content:space-between}.sm\\:gap-5{gap:1.25rem}.sm\\:bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.sm\\:p-10{padding:2.5rem}.sm\\:px-5{padding-left:1.25rem;padding-right:1.25rem}.sm\\:py-0{padding-bottom:0;padding-top:0}.sm\\:py-20{padding-bottom:5rem;padding-top:5rem}.sm\\:pl-20{padding-left:5rem}.sm\\:pt-0{padding-top:0}.sm\\:pr-5{padding-right:1.25rem}.sm\\:pt-20{padding-top:5rem}.sm\\:pr-10{padding-right:2.5rem}.sm\\:pl-10{padding-left:2.5rem}.sm\\:pl-0{padding-left:0}.sm\\:pr-20{padding-right:5rem}.sm\\:text-left{text-align:left}.sm\\:text-right{text-align:right}.sm\\:text-2xl{font-size:1.5rem;line-height:1.75rem}.sm\\:text-5xl{font-size:3rem;line-height:1.18}.sm\\:text-3xl{font-size:1.875rem;line-height:2.5rem}.sm\\:text-lg{font-size:1.125rem;line-height:1.5rem}.sm\\:text-4xl{font-size:2.25rem;line-height:2.75rem}.sm\\:text-base{font-size:1rem;line-height:1.5rem}}@media (min-width:768px){.md\\:h-8{height:2rem}}@media (min-width:1024px){.lg\\:static{position:static}.lg\\:absolute{position:absolute}.lg\\:sticky{position:-webkit-sticky;position:sticky}.lg\\:right-0{right:0}.lg\\:my-12{margin-bottom:3rem;margin-top:3rem}.lg\\:my-6{margin-bottom:1.5rem;margin-top:1.5rem}.lg\\:my-8{margin-bottom:2rem;margin-top:2rem}.lg\\:mt-10{margin-top:2.5rem}.lg\\:mt-4{margin-top:1rem}.lg\\:mt-20{margin-top:5rem}.lg\\:mt-0{margin-top:0}.lg\\:-mb-10{margin-bottom:-2.5rem}.lg\\:flex{display:flex}.lg\\:table-cell{display:table-cell}.lg\\:table-row{display:table-row}.lg\\:hidden{display:none}.lg\\:h-16{height:4rem}.lg\\:h-14{height:3.5rem}.lg\\:h-8{height:2rem}.lg\\:h-0{height:0}.lg\\:h-10{height:2.5rem}.lg\\:h-full{height:100%}.lg\\:h-20{height:5rem}.lg\\:h-screen{height:100vh}.lg\\:w-14{width:3.5rem}.lg\\:w-80{width:20rem}.lg\\:w-2\\/5{width:40%}.lg\\:w-20{width:5rem}.lg\\:w-10{width:2.5rem}.lg\\:max-w-md{max-width:28rem}.lg\\:max-w-2xl{max-width:42rem}.lg\\:max-w-xs{max-width:20rem}.lg\\:max-w-sm{max-width:24rem}.lg\\:flex-1{flex:1 1 0%}.lg\\:translate-x-0{--tw-translate-x:0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:justify-end{justify-content:flex-end}.lg\\:rounded-none{border-radius:0}.lg\\:bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.lg\\:bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.lg\\:bg-none{background-image:none}.lg\\:bg-clip-text{-webkit-background-clip:text;background-clip:text}.lg\\:p-20{padding:5rem}.lg\\:px-3{padding-left:.75rem;padding-right:.75rem}.lg\\:pt-4{padding-top:1rem}.lg\\:pt-20{padding-top:5rem}.lg\\:text-center{text-align:center}.lg\\:text-4xl{font-size:2.25rem;line-height:2.75rem}.lg\\:text-3xl{font-size:1.875rem;line-height:2.5rem}.lg\\:text-5xl{font-size:3rem;line-height:1.18}.lg\\:text-xl{font-size:1.25rem;line-height:1.5rem}.lg\\:text-2xl{font-size:1.5rem;line-height:1.75rem}.lg\\:text-lg{font-size:1.125rem;line-height:1.5rem}.lg\\:text-6xl{font-size:3.75rem;line-height:1.1}.lg\\:text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.lg\\:text-transparent{color:transparent}}";
}


// --------------------
// Request: /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/plugins/server.mjs
// Parents: 
// - /Users/macbook/Documents/vepaar-website-2/node_modules/nuxt3/dist/app/entry ($id_8496f5da)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/plugins/preload.server.mjs ($id_b9f3c557)
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/components.plugin.mjs ($id_c4362d98)
// - /node_modules/nuxt3/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_8a2cde52)
// - /node_modules/nuxt3/dist/head/runtime/plugin.mjs ($id_5f983c6f)
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// --------------------
const $id_ca724058 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/router.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default
];
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/plugins/server.mjs ($id_ca724058)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_b9f3c557 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/plugins/server.mjs ($id_ca724058)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c4362d98 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/plugins/server.mjs ($id_ca724058)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/defu/dist/defu.mjs ($id_d7afab65)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// --------------------
const $id_8a2cde52 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt3/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_8a2cde52)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/nuxt3/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_8a2cde52)
// Dependencies: 

// --------------------
const $id_d7afab65 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/macbook/Documents/vepaar-website-2/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/macbook/Documents/vepaar-website-2/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt3/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/plugins/server.mjs ($id_ca724058)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/head/runtime/components.mjs ($id_57905f4f)
// - /node_modules/nuxt3/dist/head/runtime/composables.mjs ($id_54e514a9)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/meta.config.mjs ($id_17eae356)
// --------------------
const $id_5f983c6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/meta.config.mjs");

const metaMixin = {
  [__vite_ssr_import_4__.default.mixinKey]() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type || instance.proxy?.$options;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_4__.default.globalMeta);
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt3/dist/head/runtime/plugin.mjs ($id_5f983c6f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/head/runtime/composables.mjs ($id_54e514a9)
// --------------------
const $id_57905f4f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt3/dist/head/runtime/plugin.mjs ($id_5f983c6f)
// Dependencies: 

// --------------------
const $id_17eae356 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]},"mixinKey":"created"};
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/plugins/server.mjs ($id_ca724058)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/router.options.mjs ($id_ec09bf83)
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/middleware.mjs ($id_98ca4a7a)
// --------------------
const $id_a4d6cb5b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/page.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/router.options.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_3__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_3__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_4__.default);
  const { baseURL } = __vite_ssr_import_5__.useRuntimeConfig().app;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_7__.default,
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  const path = true ? nuxtApp.ssrContext.req.url : createCurrentLocation(baseURL, window.location);
  const _activeRoute = __vite_ssr_import_0__.shallowRef(router.resolve(path));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = __vite_ssr_import_0__.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._activeRoute = __vite_ssr_import_0__.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    if (false && !nuxtApp.isHydrating) {
      await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (true && !middleware) {
        console.warn(`Unknown middleware: ${entry}. Valid options are ${Object.keys(__vite_ssr_import_8__.namedMiddleware).join(", ")}.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${nuxtApp.ssrContext.url}`
          });
          return __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(() => {
    delete nuxtApp._processingMiddleware;
  });
  nuxtApp.hook("app:created", async () => {
    router.afterEach((to) => {
      if (to.matched.length === 0) {
        __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [__vite_ssr_import_2__.createError({
          statusCode: 404,
          statusMessage: `Page not found: ${to.fullPath}`
        })]);
      }
    });
    if (true) {
      router.push(nuxtApp.ssrContext.url);
      router.afterEach((to) => {
        if (to.fullPath !== nuxtApp.ssrContext.url) {
          nuxtApp.ssrContext.res.setHeader("Location", to.fullPath);
          nuxtApp.ssrContext.res.statusCode = 301;
          nuxtApp.ssrContext.res.end();
        }
      });
    }
    try {
      await router.isReady();
    } catch (error) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt3/dist/pages/runtime/utils.mjs ($id_e1b210cc)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/nuxt3/dist/app/components/utils.mjs ($id_bb7711fa)
// --------------------
const $id_485c89bf = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/utils.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  props: {
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, {}, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_e1b210cc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/page.mjs ($id_485c89bf)
// - /node_modules/nuxt3/dist/app/components/layout.mjs ($id_ddd66f9a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_bb7711fa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 
// - /pages/aboutus.vue?macro=true ($id_783435b5)
// - /pages/crm.vue?macro=true ($id_362e578b)
// - /pages/download.vue?macro=true ($id_85211355)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/links.vue?macro=true ($id_e904372e)
// - /pages/polls.vue?macro=true ($id_7689a5ac)
// - /pages/pricing.vue?macro=true ($id_eaf79752)
// - /pages/store.vue?macro=true ($id_8929f789)
// - /pages/whatsapp-link-generator.vue?macro=true ($id_173c502b)
// - /pages/aboutus.vue ($id_9db4de97)
// - /pages/crm.vue ($id_e46e1fbe)
// - /pages/download.vue ($id_35dd2ec2)
// - /pages/index.vue ($id_cca58e97)
// - /pages/links.vue ($id_49b7d808)
// - /pages/polls.vue ($id_4296044b)
// - /pages/pricing.vue ($id_ee43cf6a)
// - /pages/store.vue ($id_5953fbb6)
// - /pages/whatsapp-link-generator.vue ($id_5a1e01a5)
// --------------------
const $id_5109ddaa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/aboutus.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/crm.vue?macro=true");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/download.vue?macro=true");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/pages/links.vue?macro=true");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/pages/polls.vue?macro=true");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/pages/pricing.vue?macro=true");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/pages/store.vue?macro=true");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/pages/whatsapp-link-generator.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "aboutus",
    path: "/aboutus",
    file: "/Users/macbook/Documents/vepaar-website-2/pages/aboutus.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/aboutus.vue')
  },
  {
    name: "crm",
    path: "/crm",
    file: "/Users/macbook/Documents/vepaar-website-2/pages/crm.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/crm.vue')
  },
  {
    name: "download",
    path: "/download",
    file: "/Users/macbook/Documents/vepaar-website-2/pages/download.vue",
    children: [],
    meta: __vite_ssr_import_2__.meta,
    alias: __vite_ssr_import_2__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/download.vue')
  },
  {
    name: "index",
    path: "/",
    file: "/Users/macbook/Documents/vepaar-website-2/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_3__.meta,
    alias: __vite_ssr_import_3__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  },
  {
    name: "links",
    path: "/links",
    file: "/Users/macbook/Documents/vepaar-website-2/pages/links.vue",
    children: [],
    meta: __vite_ssr_import_4__.meta,
    alias: __vite_ssr_import_4__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/links.vue')
  },
  {
    name: "polls",
    path: "/polls",
    file: "/Users/macbook/Documents/vepaar-website-2/pages/polls.vue",
    children: [],
    meta: __vite_ssr_import_5__.meta,
    alias: __vite_ssr_import_5__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/polls.vue')
  },
  {
    name: "pricing",
    path: "/pricing",
    file: "/Users/macbook/Documents/vepaar-website-2/pages/pricing.vue",
    children: [],
    meta: __vite_ssr_import_6__.meta,
    alias: __vite_ssr_import_6__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/pricing.vue')
  },
  {
    name: "store",
    path: "/store",
    file: "/Users/macbook/Documents/vepaar-website-2/pages/store.vue",
    children: [],
    meta: __vite_ssr_import_7__.meta,
    alias: __vite_ssr_import_7__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/store.vue')
  },
  {
    name: "whatsapp-link-generator",
    path: "/whatsapp-link-generator",
    file: "/Users/macbook/Documents/vepaar-website-2/pages/whatsapp-link-generator.vue",
    children: [],
    meta: __vite_ssr_import_8__.meta,
    alias: __vite_ssr_import_8__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/whatsapp-link-generator.vue')
  }
];
}


// --------------------
// Request: /pages/aboutus.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/Mission.vue ($id_4d392f66)
// - /components/VepaarStartup.vue ($id_ae0d844e)
// - /components/Team.vue ($id_5e9944c5)
// - /components/TheUsersCounter.vue ($id_4c8955c0)
// - /components/OurJournery.vue ($id_621f0a3b)
// - /components/TheCta.vue ($id_b5c1e281)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_783435b5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheHero.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheReview.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Mission.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/VepaarStartup.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Team.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/TheUsersCounter.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/OurJournery.vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/TheCta.vue");

const _sfc_main = {}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHero = __vite_ssr_import_0__.default
  const _component_TheReview = __vite_ssr_import_1__.default
  const _component_Mission = __vite_ssr_import_2__.default
  const _component_VepaarStartup = __vite_ssr_import_3__.default
  const _component_Team = __vite_ssr_import_4__.default
  const _component_TheUsersCounter = __vite_ssr_import_5__.default
  const _component_OurJournery = __vite_ssr_import_6__.default
  const _component_TheCta = __vite_ssr_import_7__.default

  _push(`<!--[--><!-- Hero Section: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_TheHero, {
    title: "About Us",
    subTitle: "to have an online presence.",
    isHeightAuto: ""
  }, null, _parent))
  _push(`<!-- Hero Section: End --><!-- Review Section: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_TheReview, { color: "light" }, null, _parent))
  _push(`<!-- Review Section: End --><!-- Mission Section: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_Mission, null, null, _parent))
  _push(`<!-- Mission Section: End --><!-- Vepaar Startup Section: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_VepaarStartup, null, null, _parent))
  _push(`<!-- Vepaar Startup Section: Start --><!-- Team Section: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_Team, null, null, _parent))
  _push(`<!-- Team Section: End --><!-- Users Section: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_TheUsersCounter, null, null, _parent))
  _push(`<!-- Users Section: End --><!-- Our Journey Section: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_OurJournery, null, null, _parent))
  _push(`<!-- Our Journey Section: End --><!-- The CTA: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_TheCta, {
    tagline: "Trusted by 100k+ Business Worldwide",
    title: "Get Started with Vepaar today!",
    description: "One of the best free apps for small business owners! With our powerful yet simple tools, bring your store to the global platform at ease."
  }, null, _parent))
  _push(`<!-- The CTA: End --><!--]-->`)
}


const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/aboutus.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_11__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/aboutus.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/TheHero.vue
// Parents: 
// - /pages/aboutus.vue?macro=true ($id_783435b5)
// - /pages/crm.vue?macro=true ($id_362e578b)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/polls.vue?macro=true ($id_7689a5ac)
// - /pages/pricing.vue?macro=true ($id_eaf79752)
// - /pages/store.vue?macro=true ($id_8929f789)
// - /pages/whatsapp-link-generator.vue?macro=true ($id_173c502b)
// - /pages/aboutus.vue ($id_9db4de97)
// - /pages/crm.vue ($id_e46e1fbe)
// - /pages/index.vue ($id_cca58e97)
// - /pages/polls.vue ($id_4296044b)
// - /pages/pricing.vue ($id_ee43cf6a)
// - /pages/store.vue ($id_5953fbb6)
// - /pages/whatsapp-link-generator.vue ($id_5a1e01a5)
// Dependencies: 
// - /components/TheButton.vue ($id_00941411)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/TheHero.vue?vue&type=style&index=0&lang.scss ($id_f7f99620)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_79789ec9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheButton.vue");


const _sfc_main = {
  props: {
    title: String,
    subTitle: String,
    textContent: String,
    href: {
      default: "",
      type: String
    },
    isHeightAuto: {
      default: false,
      type: Boolean
    }
  }
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_button = __vite_ssr_import_0__.default

  _push(`<section${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
      class: ["module module--hero", $props.isHeightAuto ? 'module--hero-auto' : '']
    }, _attrs))
  }><div class="container h-full flex items-center"><div class="max-w-lg"><h2 class="text-3xl sm:text-5xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500">${
    __vite_ssr_import_2__.ssrInterpolate($props.title)
  }</h2><h3 class="text-2xl sm:text-4xl lg:text-5xl text-white font-semibold">${
    __vite_ssr_import_2__.ssrInterpolate($props.subTitle)
  }</h3>`)
  if ($props.textContent) {
    _push(`<p class="mt-8 text-gray-500 text-sm sm:text-base lg:text-lg">${__vite_ssr_import_2__.ssrInterpolate($props.textContent)}</p>`)
  } else {
    _push(`<!---->`)
  }
  if ($props.href !== '') {
    _push(`<div class="mt-10">`)
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_the_button, { color: "primary" }, {
      default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`Get Started Now`)
        } else {
          return [
            __vite_ssr_import_1__.createTextVNode("Get Started Now")
          ]
        }
      }),
      _: 1 /* STABLE */
    }, _parent))
    _push(`</div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div></div></section>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/TheHero.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheHero.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheHero.vue"]]);
}


// --------------------
// Request: /components/TheButton.vue
// Parents: 
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheCta.vue ($id_b5c1e281)
// - /components/TheContent.vue ($id_7179c50a)
// - /components/TheDownload.vue ($id_22e80545)
// - /components/TheRow.vue ($id_61e05cae)
// - /components/TheLinkForm.vue ($id_77d2b478)
// - /components/TheNavigation.vue ($id_e7251b5f)
// - /components/TheHeader.vue ($id_d18d7003)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/TheButton.vue?vue&type=style&index=0&lang.scss ($id_83fef445)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_00941411 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  props: {
    title: String,
    disabled: Boolean,
    theme: {
      type: String,
      default: "solid"
    },
    color: {
      type: String,
      default: "primary"
    },
    icon: String,
    size: {
      type: String,
      default: "lg"
    }
  },
  data() {
    return {
      dark: [
        "bg-black",
        "hover:bg-gray-800",
        "text-white ",
        "py-4",
        "px-8",
        "rounded",
        "shadow-2xl"
      ]
    };
  },
  computed: {
    classList() {
      const classes = [`button--${this.size}`, `button--${this.theme}`];
      if (this.color) classes.push(`button--${this.color}`);
      if (this.disabled) classes.push("disabled");
      return classes;
    }
  }
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  __vite_ssr_import_1__.ssrRenderVNode(_push, __vite_ssr_import_0__.createVNode(__vite_ssr_import_0__.resolveDynamicComponent(_ctx.$attrs.href ? 'a' : 'button'), __vite_ssr_import_0__.mergeProps({ class: $options.classList }, _attrs), {
    default: __vite_ssr_import_0__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        if ($props.icon) {
          _push(`<img${
            __vite_ssr_import_1__.ssrRenderAttr("src", `images/${$props.icon}`)
          }${
            __vite_ssr_import_1__.ssrRenderAttr("alt", $props.title ? $props.title : 'icon')
          } class="mr-2 h-6 lg:h-8"${
            _scopeId
          }>`)
        } else {
          _push(`<!---->`)
        }
        __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${__vite_ssr_import_1__.ssrInterpolate($props.title)}`)
        }, _push, _parent, _scopeId)
      } else {
        return [
          ($props.icon)
            ? (__vite_ssr_import_0__.openBlock(), __vite_ssr_import_0__.createBlock("img", {
                key: 0,
                src: `images/${$props.icon}`,
                alt: $props.title ? $props.title : 'icon',
                class: "mr-2 h-6 lg:h-8"
              }, null, 8 /* PROPS */, ["src", "alt"]))
            : __vite_ssr_import_0__.createCommentVNode("v-if", true),
          __vite_ssr_import_0__.renderSlot(_ctx.$slots, "default", {}, () => [
            __vite_ssr_import_0__.createTextVNode(__vite_ssr_import_0__.toDisplayString($props.title), 1 /* TEXT */)
          ])
        ]
      }
    }),
    _: 3 /* FORWARDED */
  }), _parent)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheButton.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheButton.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheButton.vue"]]);
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /components/TheButton.vue ($id_00941411)
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/Mission.vue ($id_4d392f66)
// - /components/VepaarStartup.vue ($id_ae0d844e)
// - /components/Team.vue ($id_5e9944c5)
// - /components/TheUsersCounter.vue ($id_4c8955c0)
// - /components/OurJournery.vue ($id_621f0a3b)
// - /components/TheCta.vue ($id_b5c1e281)
// - /pages/aboutus.vue?macro=true ($id_783435b5)
// - /components/TheContent.vue ($id_7179c50a)
// - /components/FeatureCardRow.vue ($id_71dd5421)
// - /components/FeatureCard.vue ($id_d5ac0403)
// - /components/TheBestFeature.vue ($id_df493032)
// - /components/FeatureRow.vue ($id_f81b4e2d)
// - /components/TheApps.vue ($id_fa304aa1)
// - /components/TheClients.vue ($id_4b526e20)
// - /pages/crm.vue?macro=true ($id_362e578b)
// - /components/Extension.vue ($id_3050003d)
// - /components/AppsDownload.vue ($id_22a9121d)
// - /components/VolizApp.vue ($id_458087b3)
// - /components/TheDownload.vue ($id_22e80545)
// - /pages/download.vue?macro=true ($id_85211355)
// - /components/TheRow.vue ($id_61e05cae)
// - /components/SupportCard.vue ($id_85a68533)
// - /components/TheSupport.vue ($id_2ee8f308)
// - /components/TestimonialCard.vue ($id_156486af)
// - /components/TheTestimonial.vue ($id_ac5b85a4)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/links.vue?macro=true ($id_e904372e)
// - /components/ThePollSteps.vue ($id_702c25e6)
// - /pages/polls.vue?macro=true ($id_7689a5ac)
// - /components/PlanCard.vue ($id_49a9a792)
// - /components/PricingTab.vue ($id_5aada895)
// - /components/icons/MdiCheckCircle.vue ($id_da7a5c14)
// - /components/ComparePlans.vue ($id_20b49029)
// - /components/icons/MdiMinus.vue ($id_f0e7bb6e)
// - /components/icons/MdiPlus.vue ($id_7d90f4ac)
// - /components/TheAccordion.vue ($id_4318b5fb)
// - /components/TheFaq.vue ($id_03b536a4)
// - /pages/pricing.vue?macro=true ($id_eaf79752)
// - /pages/store.vue?macro=true ($id_8929f789)
// - /components/TheLinkForm.vue ($id_77d2b478)
// - /components/TheSocialMediaCounter.vue ($id_9b01da9c)
// - /components/TheLinkSteps.vue ($id_586b6059)
// - /pages/whatsapp-link-generator.vue?macro=true ($id_173c502b)
// - /pages/aboutus.vue ($id_9db4de97)
// - /pages/crm.vue ($id_e46e1fbe)
// - /pages/download.vue ($id_35dd2ec2)
// - /pages/index.vue ($id_cca58e97)
// - /pages/links.vue ($id_49b7d808)
// - /pages/polls.vue ($id_4296044b)
// - /pages/pricing.vue ($id_ee43cf6a)
// - /pages/store.vue ($id_5953fbb6)
// - /pages/whatsapp-link-generator.vue ($id_5a1e01a5)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue ($id_f10a5dcc)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /components/TheNavigation.vue ($id_e7251b5f)
// - /components/icons/MdiMenu.vue ($id_553dee83)
// - /components/icons/MdiClose.vue ($id_5274c7e0)
// - /components/icons/MdiTranslate.vue ($id_9e717d12)
// - /components/TheHeader.vue ($id_d18d7003)
// - /components/FooterLinks.vue ($id_73c17584)
// - /components/SocialLinks.vue ($id_73c6b2e2)
// - /components/TheFooter.vue ($id_cdfd5170)
// - /layouts/default.vue ($id_7689e89d)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/macbook/Documents/vepaar-website-2/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/macbook/Documents/vepaar-website-2/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /components/TheButton.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/TheButton.vue ($id_00941411)
// Dependencies: 

// --------------------
const $id_83fef445 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".button,.button--lg,.button--md,.button--sm,.button--xs{align-items:center;border-radius:.25rem;display:inline-flex}.button--icon{outline:2px solid transparent;outline-offset:2px;padding:.25rem;width:2rem}.button--icon,.button--xs{font-size:.875rem;height:2rem;line-height:1.5rem}.button--xs{padding-left:1rem;padding-right:1rem}.button--lg,.button--sm{font-size:.875rem;height:2.5rem;line-height:1.5rem;padding-left:1.5rem;padding-right:1.5rem}.button--md{height:3rem;padding-left:2rem;padding-right:2rem}@media (min-width:1024px){.button--lg{font-size:1rem;height:3.5rem;line-height:1.5rem;padding-left:2rem;padding-right:2rem}}.button--auto{height:auto;width:auto}.button--primary{--color:#304ffe;--text-color:#fff;--hover-color:#182bb6}.button--dark{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity));height:3rem}.button--dark:hover{--tw-bg-opacity:1;background-color:rgb(23 33 57/var(--tw-bg-opacity))}.button--solid{background-color:var(--color);color:var(--text-color)}.button--solid:hover{background-color:var(--hover-color)}.button--outline{border-color:currentColor;border-width:1px;color:var(--color)}.button--outline:hover{--tw-bg-opacity:1;background-color:rgb(235 239 254/var(--tw-bg-opacity))}.button--gray{--tw-border-opacity:1;--tw-text-opacity:1;border-color:rgb(156 163 175/var(--tw-border-opacity));border-width:1px;color:rgb(156 163 175/var(--tw-text-opacity))}.button--white{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));color:rgb(17 24 39/var(--tw-text-opacity));font-weight:500}.button--white:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.button--nav{--tw-text-opacity:1;color:rgb(216 228 239/var(--tw-text-opacity));font-size:1rem;font-weight:400;height:auto;line-height:1.5rem;padding:.5rem 0;position:relative}@media (min-width:1024px){.button--nav{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity));padding:0 .75rem}}.button--nav:after{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));bottom:0;content:\"\";height:1px;left:0;margin-left:auto;margin-right:auto;position:absolute;right:0;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:0}@media (min-width:1024px){.button--nav:after{height:0;position:static}}.button--nav:hover{--tw-gradient-from:#304ffe;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(48,79,254,0));--tw-gradient-stops:var(--tw-gradient-from),#6200ea,var(--tw-gradient-to,rgba(98,0,234,0));--tw-gradient-stops:var(--tw-gradient-from),#a0f,var(--tw-gradient-to,rgba(170,0,255,0));--tw-gradient-to:#c51162}@media (min-width:1024px){.button--nav:hover{-webkit-background-clip:text;background-clip:text;background-image:linear-gradient(to right,var(--tw-gradient-stops));color:transparent}}.button--nav:hover:after{transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}.button--nav+.button--nav{margin-left:0;margin-top:1.25rem}@media (min-width:1024px){.button--nav+.button--nav{margin-left:1.25rem;margin-top:0}}.button--accent{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(0 188 212/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity));justify-content:center;width:100%}.button--accent:hover{--tw-bg-opacity:1;background-color:rgb(0 147 182/var(--tw-bg-opacity))}.button.disabled,.disabled.button--lg,.disabled.button--md,.disabled.button--sm,.disabled.button--xs{--tw-bg-opacity:1;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;background-color:rgb(156 163 175/var(--tw-bg-opacity));box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);cursor:not-allowed}.button.disabled:hover,.disabled.button--lg:hover,.disabled.button--md:hover,.disabled.button--sm:hover,.disabled.button--xs:hover{--tw-bg-opacity:1;background-color:rgb(156 163 175/var(--tw-bg-opacity))}";
}


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /components/TheButton.vue ($id_00941411)
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/Mission.vue ($id_4d392f66)
// - /components/VepaarStartup.vue ($id_ae0d844e)
// - /components/Team.vue ($id_5e9944c5)
// - /components/TheUsersCounter.vue ($id_4c8955c0)
// - /components/OurJournery.vue ($id_621f0a3b)
// - /components/TheCta.vue ($id_b5c1e281)
// - /pages/aboutus.vue?macro=true ($id_783435b5)
// - /components/TheContent.vue ($id_7179c50a)
// - /components/FeatureCardRow.vue ($id_71dd5421)
// - /components/FeatureCard.vue ($id_d5ac0403)
// - /components/TheBestFeature.vue ($id_df493032)
// - /components/FeatureRow.vue ($id_f81b4e2d)
// - /components/TheApps.vue ($id_fa304aa1)
// - /components/TheClients.vue ($id_4b526e20)
// - /pages/crm.vue?macro=true ($id_362e578b)
// - /components/Extension.vue ($id_3050003d)
// - /components/AppsDownload.vue ($id_22a9121d)
// - /components/VolizApp.vue ($id_458087b3)
// - /components/TheDownload.vue ($id_22e80545)
// - /pages/download.vue?macro=true ($id_85211355)
// - /components/TheRow.vue ($id_61e05cae)
// - /components/SupportCard.vue ($id_85a68533)
// - /components/TheSupport.vue ($id_2ee8f308)
// - /components/TestimonialCard.vue ($id_156486af)
// - /components/TheTestimonial.vue ($id_ac5b85a4)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/links.vue?macro=true ($id_e904372e)
// - /components/ThePollSteps.vue ($id_702c25e6)
// - /pages/polls.vue?macro=true ($id_7689a5ac)
// - /components/PlanCard.vue ($id_49a9a792)
// - /components/PricingTab.vue ($id_5aada895)
// - /components/icons/MdiCheckCircle.vue ($id_da7a5c14)
// - /components/ComparePlans.vue ($id_20b49029)
// - /components/icons/MdiMinus.vue ($id_f0e7bb6e)
// - /components/icons/MdiPlus.vue ($id_7d90f4ac)
// - /components/TheAccordion.vue ($id_4318b5fb)
// - /components/TheFaq.vue ($id_03b536a4)
// - /pages/pricing.vue?macro=true ($id_eaf79752)
// - /pages/store.vue?macro=true ($id_8929f789)
// - /components/TheLinkForm.vue ($id_77d2b478)
// - /components/TheSocialMediaCounter.vue ($id_9b01da9c)
// - /components/TheLinkSteps.vue ($id_586b6059)
// - /pages/whatsapp-link-generator.vue?macro=true ($id_173c502b)
// - /pages/aboutus.vue ($id_9db4de97)
// - /pages/crm.vue ($id_e46e1fbe)
// - /pages/download.vue ($id_35dd2ec2)
// - /pages/index.vue ($id_cca58e97)
// - /pages/links.vue ($id_49b7d808)
// - /pages/polls.vue ($id_4296044b)
// - /pages/pricing.vue ($id_ee43cf6a)
// - /pages/store.vue ($id_5953fbb6)
// - /pages/whatsapp-link-generator.vue ($id_5a1e01a5)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue ($id_f10a5dcc)
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// - /components/TheNavigation.vue ($id_e7251b5f)
// - /components/icons/MdiMenu.vue ($id_553dee83)
// - /components/icons/MdiClose.vue ($id_5274c7e0)
// - /components/icons/MdiTranslate.vue ($id_9e717d12)
// - /components/TheHeader.vue ($id_d18d7003)
// - /components/FooterLinks.vue ($id_73c17584)
// - /components/SocialLinks.vue ($id_73c6b2e2)
// - /components/TheFooter.vue ($id_cdfd5170)
// - /layouts/default.vue ($id_7689e89d)
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /components/TheHero.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/TheHero.vue ($id_79789ec9)
// Dependencies: 

// --------------------
const $id_f7f99620 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".module--hero{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity));height:calc(100vh - 80px)}.module--hero-auto{height:auto;padding-bottom:8rem;padding-top:8rem}";
}


// --------------------
// Request: /components/TheReview.vue
// Parents: 
// - /pages/aboutus.vue?macro=true ($id_783435b5)
// - /pages/crm.vue?macro=true ($id_362e578b)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/polls.vue?macro=true ($id_7689a5ac)
// - /pages/pricing.vue?macro=true ($id_eaf79752)
// - /pages/store.vue?macro=true ($id_8929f789)
// - /pages/whatsapp-link-generator.vue?macro=true ($id_173c502b)
// - /pages/aboutus.vue ($id_9db4de97)
// - /pages/crm.vue ($id_e46e1fbe)
// - /pages/index.vue ($id_cca58e97)
// - /pages/polls.vue ($id_4296044b)
// - /pages/pricing.vue ($id_ee43cf6a)
// - /pages/store.vue ($id_5953fbb6)
// - /pages/whatsapp-link-generator.vue ($id_5a1e01a5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_fbce3175 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  props: {
    color: {
      default: "dark",
      type: String
    }
  },
  data() {
    return {
      reviews: ["capterra-review", "appsumo-review", "trustpilot-review"]
    };
  }
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    class: ["module module--reviews", $props.color == 'light' ? 'sm:bg-white' : 'bg-gray-900']
  }, _attrs))}><div class="container"><div class="flex flex-col justify-center items-center sm:flex-row sm:justify-between"><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($data.reviews, (review, index) => {
    _push(`<div class="${
      __vite_ssr_import_1__.ssrRenderClass(index == 0 ? 'mt-0' : 'mt-8 sm:mt-0')
    }"><img${
      __vite_ssr_import_1__.ssrRenderAttr("src", 
              'images/' +
              review +
              '-' +
              ($props.color == 'light' ? 'dark' : 'light') +
              '.svg'
            )
    } class="h-16 sm:h-14 lg:h-20"></div>`)
  })
  _push(`<!--]--></div></div></section>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheReview.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheReview.vue"]]);
}


// --------------------
// Request: /components/Mission.vue
// Parents: 
// - /pages/aboutus.vue?macro=true ($id_783435b5)
// - /pages/aboutus.vue ($id_9db4de97)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_4d392f66 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      missions: [
        {
          title: "Mission",
          text:
            "No code E-commerce builder towards how Vepaar is different and better."
        },
        {
          title: "Our Commitment",
          text:
            "Dedicated to improving Product Quality and provide the best support for our product."
        }
      ]
    };
  }
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "module module--mission" }, _attrs))}><div class="container"><div class="sm:flex items-center"><div class="flex-1"><img src="images/about.jpg" alt=""></div><div class="flex-1 pt-10 sm:pl-20 sm:pt-0"><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($data.missions, (mission, index) => {
    _push(`<div class="${
      __vite_ssr_import_1__.ssrRenderClass(index == 0 ? '' : 'mt-10')
    }"><h3 class="text-4xl text-gray-500 font-semibold">${
      __vite_ssr_import_1__.ssrInterpolate(mission.title)
    }</h3><p class="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500 mt-2">${
      __vite_ssr_import_1__.ssrInterpolate(mission.text)
    }</p></div>`)
  })
  _push(`<!--]--></div></div></div></section>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Mission.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/Mission.vue"]]);
}


// --------------------
// Request: /components/VepaarStartup.vue
// Parents: 
// - /pages/aboutus.vue?macro=true ($id_783435b5)
// - /pages/aboutus.vue ($id_9db4de97)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/VepaarStartup.vue?vue&type=style&index=0&lang.scss ($id_489ddd8b)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ae0d844e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "module module--startup" }, _attrs))}><div class="container"><div class="sm:flex items-center"><div class="flex-1"><div class="max-w-sm bg-gray-100 rounded p-5"><h3 class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500 text-3xl mb-5"> Wondering <span class="block"> What Vepaar means?</span></h3><p> Vepaar (Ve·paa·r) is a Gujarati Word (વેપાર), meaning ‘business’. After all, Gujaratis are known </p><p> for their unparalleled business skills and the brand name embodies our mission — to help small and medium businesses all over the world to take their business online. </p></div></div><div class="flex-1 mt-10 sm:mt-0"><h3 class="text-5xl font-semibold">How it all started?</h3><div class="mt-10 text-gray-400 description"><p> In 2013, we met as graduate students at TCS, with the mutual dream to create new ideas that would anticipate future technology and, in turn, newer ways to broaden our horizons. </p><p> Our entrepreneurial stint began in the year 2015, with the creation of BOT on WhatsApp (even before the same messaging brand did), which would respond automatically to #tags. And, voilà! WhatsHash was born. WhatsHash got featured on many well-known blogs and news sites, TechCrunch is one of them. 🥳 </p><p> The idea to integrate businesses on instant messaging apps emerged as our company’s side project in 2015. To build a seamless and effective business online, we decided to take things to the next level by a brand makeover this year - WhatsHash became Vepaar. </p><p> As a business app for small businesses, Vepaar is one of the emerging WhatsApp Marketing platforms across the globe today. With over 3000 happy customers, Vepaar is still 100% founder-owned, with more opportunities to maximise profits at every step. Our headquarters is situated in Ahmedabad, India. </p></div></div></div></div></section>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/VepaarStartup.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/VepaarStartup.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/VepaarStartup.vue"]]);
}


// --------------------
// Request: /components/VepaarStartup.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/VepaarStartup.vue ($id_ae0d844e)
// Dependencies: 

// --------------------
const $id_489ddd8b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".description p+p{margin-top:1rem}";
}


// --------------------
// Request: /components/Team.vue
// Parents: 
// - /pages/aboutus.vue?macro=true ($id_783435b5)
// - /pages/aboutus.vue ($id_9db4de97)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/Team.vue?vue&type=style&index=0&lang.scss ($id_2019b277)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5e9944c5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      teams: [
        {
          profile: "kaushal-gajjar.jpg",
          name: "Kaushal Gajjar",
          designation: "Full Stack Developer",
          description:
            "Nulla sagittis, eget tellus massa. Sit scelerisque arcu enim adipiscing vitae. Nulla sagittis, eget tellus massa. Sit scelerisque arcu enim adipiscing vitae.",
          socialMedia: [
            {
              icon: "twitter.svg",
              link: "#"
            },
            {
              icon: "linkedin.svg",
              link: "#"
            }
          ]
        },
        {
          profile: "harsh-kansagara.jpg",
          name: "Harsh Kansagara",
          designation: "Full Stack Developer",
          description:
            "Nulla sagittis, eget tellus massa. Sit scelerisque arcu enim adipiscing vitae. Nulla sagittis, eget tellus massa. Sit scelerisque arcu enim adipiscing vitae.",
          socialMedia: [
            {
              icon: "twitter.svg",
              link: "#"
            },
            {
              icon: "linkedin.svg",
              link: "#"
            }
          ]
        },
        {
          profile: "hemratna-bhimani.jpg",
          name: "Hemratna Bhimani",
          designation: "Full Stack Developer",
          description:
            "Nulla sagittis, eget tellus massa. Sit scelerisque arcu enim adipiscing vitae. Nulla sagittis, eget tellus massa. Sit scelerisque arcu enim adipiscing vitae.",
          socialMedia: [
            {
              icon: "twitter.svg",
              link: "#"
            },
            {
              icon: "linkedin.svg",
              link: "#"
            }
          ]
        }
      ]
    };
  }
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "module module--team" }, _attrs))}><div class="pt-20 pb-32 bg-gray-900"><div class="container"><img src="images/team-photo.jpg" alt="" class="rounded-xl"><div class="sm:flex items-center mt-8"><h3 class="text-white text-2xl font-semibold sm:px-5">Our Team</h3><p class="flex-1 text-gray-400 mt-5 sm:mt-0"> Nulla sagittis, eget tellus massa. Sit scelerisque arcu enim adipiscing vitae. Nulla sagittis, eget tellus massa. Sit scelerisque arcu enim adipiscing vitae. </p></div></div></div><div class="max-w-5xl mx-auto sm:flex -mt-20"><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($data.teams, (team, index) => {
    _push(`<div class="${
      __vite_ssr_import_1__.ssrRenderClass([index == 0 ? '' : 'mt-20 sm:mt-0', "px-5"])
    }"><img${
      __vite_ssr_import_1__.ssrRenderAttr("src", 'images/' + team.profile)
    } alt="" class="rounded-xl"><div class="my-4"><h3 class="text-2xl font-semibold text-gray-900">${
      __vite_ssr_import_1__.ssrInterpolate(team.name)
    }</h3><p class="text-gray-500">${
      __vite_ssr_import_1__.ssrInterpolate(team.designation)
    }</p></div><p class="text-gray-400">${
      __vite_ssr_import_1__.ssrInterpolate(team.description)
    }</p><div class="flex mt-5"><!--[-->`)
    __vite_ssr_import_1__.ssrRenderList(team.socialMedia, (link, index) => {
      _push(`<a${
        __vite_ssr_import_1__.ssrRenderAttr("href", link.link)
      } class="${
        __vite_ssr_import_1__.ssrRenderClass([index == 0 ? '' : 'ml-4', "transition-all duration-300 hover:-translate-y-1"])
      }"><img${
        __vite_ssr_import_1__.ssrRenderAttr("src", 'images/' + link.icon)
      } alt=""></a>`)
    })
    _push(`<!--]--></div></div>`)
  })
  _push(`<!--]--></div></section>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Team.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Team.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/Team.vue"]]);
}


// --------------------
// Request: /components/Team.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/Team.vue ($id_5e9944c5)
// Dependencies: 

// --------------------
const $id_2019b277 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".module--team{padding-bottom:8rem;padding-top:0}";
}


// --------------------
// Request: /components/TheUsersCounter.vue
// Parents: 
// - /pages/aboutus.vue?macro=true ($id_783435b5)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/aboutus.vue ($id_9db4de97)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/TheUsersCounter.vue?vue&type=style&index=0&lang.scss ($id_6da5d4ad)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_4c8955c0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data(){
    return{
      counters:[
        {
          title:"Total User",
          value:"1.5lac+"
        },
        {
          title:"Mobile App User",
          value:"1lac+"
        },
        {
          title:"Chrome Extension User",
          value:"5k+"
        }
      ]
    }
  }
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "module module--counter" }, _attrs))}><div class="container"><div class="block sm:flex justify-between"><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($data.counters, (counter, index) => {
    _push(`<div class="${
      __vite_ssr_import_1__.ssrRenderClass([index==0 ? '':'mt-8 sm:mt-0', "text-center"])
    }"><h3 class="text-4xl lg:text-5xl text-white font-semibold">${
      __vite_ssr_import_1__.ssrInterpolate(counter.value)
    }</h3><p class="text-gray-400 text-base mt-2">${
      __vite_ssr_import_1__.ssrInterpolate(counter.title)
    }</p></div>`)
  })
  _push(`<!--]--></div></div></section>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheUsersCounter.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheUsersCounter.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheUsersCounter.vue"]]);
}


// --------------------
// Request: /components/TheUsersCounter.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/TheUsersCounter.vue ($id_4c8955c0)
// Dependencies: 

// --------------------
const $id_6da5d4ad = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".module--counter{background-image:url(/_nuxt/images/counter-background.jpg);background-position:50%;background-size:cover}";
}


// --------------------
// Request: /components/OurJournery.vue
// Parents: 
// - /pages/aboutus.vue?macro=true ($id_783435b5)
// - /pages/aboutus.vue ($id_9db4de97)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/OurJournery.vue?vue&type=style&index=0&lang.scss ($id_d6fa64b9)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_621f0a3b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      journey: [
        {
          year: 2015,
          content: [
            {
              icon: "idea-icon.svg",
              title: "Project Idea",
              description: [
                "We started this project with the idea of posting cricket score updates on WhatsApp.",
                "After finalizing various on-demand services on WhatsApp, we had decided upon the idea to setup BOT to send responses based on the #Hashtags sent from users, such as #cricket, #news, #weather, and so on."
              ],
              date: "Jan 2015"
            },
            {
              icon: "featured-icon.svg",
              title: "Got Featured on TechCrunch",
              description: [
                "In the article titled ‘A Virtual Assistant To WhatsApp’, WhatsHash got featured on TechCrunch and got good visibility in the realm of WhatsApp Marketing services."
              ],
              date: "Dec 2015"
            }
          ]
        },
        {
          year: 2019,
          content: [
            {
              title: "10k+ Users",
              description:
                "Achieving a Goal. We started this project with the idea of posting cricket score updates on WhatsApp."
            },
            {
              icon: "cart.svg",
              title: "Store on WhatsApp",
              description: [
                "Along with many updates, we released the Online Store on WhatsApp. Thus, WhatsHash became the first ever solution provider to help brands bring their eCommerce stores to their customers’ WhatsApp texts."
              ],
              date: "Jan 2019"
            }
          ]
        },
        {
          year: 2021,
          content: [
            {
              icon: "rebranding.svg",
              title: "Rebranding to Vepaar",
              description: [
                "WhatsHash has evolved constantly over the years. Yet, we wanted to kickstart 2021 with a brand new identity; one that would reflect our journey of helping businesses succeed on WhatsApp and also describe who we are as a company. So, say hello to Vepaar!"
              ],
              date: "Apr 2021"
            }
          ]
        },
        {
          year: 2022,
          content: [
            {
              title: "100k+ Users",
              description:
                "Achieving a Goal. We started this project with the idea of posting cricket score updates on WhatsApp."
            }
          ]
        }
      ]
    };
  }
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "module module--journey" }, _attrs))}><div class="container"><h2 class="text-4xl sm:text-5xl text-gray-900 font-semibold"> Our Journey So Far </h2><div class="mt-10 sm:mt-20"><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($data.journey, (data, index) => {
    _push(`<div class="journey-card"><div class="journey-card__year"><h3 class="text-gray-400 text-xl sm:text-3xl font-semibold mt-5">${__vite_ssr_import_1__.ssrInterpolate(data.year)}</h3></div><div class="journey-card__content"><!--[-->`)
    __vite_ssr_import_1__.ssrRenderList(data.content, (item, index) => {
      _push(`<div class="journey-box">`)
      if (item.icon) {
        _push(`<div><img${
          __vite_ssr_import_1__.ssrRenderAttr("src", 'images/' + item.icon)
        }><h3 class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500 text-2xl sm:text-3xl my-4">${
          __vite_ssr_import_1__.ssrInterpolate(item.title)
        }</h3><div class="mt-2"><!--[-->`)
        __vite_ssr_import_1__.ssrRenderList(item.description, (text, index) => {
          _push(`<p class="${
            __vite_ssr_import_1__.ssrRenderClass([index == 0 ? '' : 'mt-2', "text-gray-400 text-base sm:text-lg"])
          }">${
            __vite_ssr_import_1__.ssrInterpolate(text)
          }</p>`)
        })
        _push(`<!--]--><p class="text-gray-500 text-xl font-semibold mt-5">${__vite_ssr_import_1__.ssrInterpolate(item.date)}</p></div></div>`)
      } else {
        _push(`<div class="journey-box-bg"><h2 class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500 text-xl sm:text-5xl">${
          __vite_ssr_import_1__.ssrInterpolate(item.title)
        }</h2><p class="max-w-sm mx-auto text-gray-400 text-base sm:text-lg mt-4">${
          __vite_ssr_import_1__.ssrInterpolate(item.description)
        }</p></div>`)
      }
      _push(`</div>`)
    })
    _push(`<!--]--></div></div>`)
  })
  _push(`<!--]--></div></div></section>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/OurJournery.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/OurJournery.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/OurJournery.vue"]]);
}


// --------------------
// Request: /components/OurJournery.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/OurJournery.vue ($id_621f0a3b)
// Dependencies: 

// --------------------
const $id_d6fa64b9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".journey-card{display:flex}.journey-card__year{--tw-border-opacity:1;border-color:rgb(216 228 239/var(--tw-border-opacity));border-right-width:3px;margin-right:2rem;position:relative;width:5rem}@media (min-width:640px){.journey-card__year{margin-right:7rem;width:10rem}}.journey-card__year:after{--tw-bg-opacity:1;background-color:rgb(216 228 239/var(--tw-bg-opacity));content:\"\";height:3px;position:absolute;right:0;top:2rem;width:1.25rem}@media (min-width:640px){.journey-card__year:after{top:2.5rem;width:2.5rem}}.journey-card__content{flex:1 1 0%}.journey-card+.journey-card{margin-top:5rem}.journey-box{margin-top:0}.journey-box .journey-box-bg{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity));border-radius:.5rem;padding:1.25rem;text-align:center}@media (min-width:640px){.journey-box .journey-box-bg{padding:2rem}}.journey-box+.journey-box{margin-top:3.5rem}";
}


// --------------------
// Request: /components/TheCta.vue
// Parents: 
// - /pages/aboutus.vue?macro=true ($id_783435b5)
// - /pages/crm.vue?macro=true ($id_362e578b)
// - /pages/polls.vue?macro=true ($id_7689a5ac)
// - /pages/store.vue?macro=true ($id_8929f789)
// - /pages/whatsapp-link-generator.vue?macro=true ($id_173c502b)
// - /pages/aboutus.vue ($id_9db4de97)
// - /pages/crm.vue ($id_e46e1fbe)
// - /pages/polls.vue ($id_4296044b)
// - /pages/store.vue ($id_5953fbb6)
// - /pages/whatsapp-link-generator.vue ($id_5a1e01a5)
// Dependencies: 
// - /components/TheButton.vue ($id_00941411)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/TheCta.vue?vue&type=style&index=0&lang.scss ($id_ed266e74)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b5c1e281 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheButton.vue");


const _sfc_main = {
  props:{
    tagline:String,
    title:String,
    description:String   
  },
  data(){
    return{
      downloadLinks:[
        {
          icon:'web.svg',
          href:'#'
        },
        {
          icon:'iOS.svg',
          href:'#'
        },
        {
          icon:'android.svg',
          href:'#'
        }
      ]
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_button = __vite_ssr_import_0__.default

  _push(`<section${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "module module--cta" }, _attrs))
  }><div class="container"><div class="lg:flex items-end"><div class="flex-1 sm:pr-5"><p class="text-lg text-white">${
    __vite_ssr_import_2__.ssrInterpolate($props.tagline)
  }</p><h2 class="text-3xl lg:text-5xl text-white font-semibold my-5 max-w-lg">${
    __vite_ssr_import_2__.ssrInterpolate($props.title)
  }</h2><p class="text-lg text-white">${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div><div class="w-60 lg:w-80 lg:max-w-xs mt-5"><div class="flex items-center lg:justify-end mb-2"><label class="block text-white">Available On:</label><div class="flex"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($data.downloadLinks, (link, index) => {
    _push(`<a${
      __vite_ssr_import_2__.ssrRenderAttr("href", link.href)
    } class="w-8 h-8 flex items-center justify-center"><img${
      __vite_ssr_import_2__.ssrRenderAttr("src", 'images/'+ link.icon)
    } alt="" class="object-contain object-center"></a>`)
  })
  _push(`<!--]--></div></div>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_the_button, {
    color: "white",
    class: "w-full justify-center"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Sign Up for Free!`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Sign Up for Free!")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div></section>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/TheCta.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheCta.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheCta.vue"]]);
}


// --------------------
// Request: /components/TheCta.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/TheCta.vue ($id_b5c1e281)
// Dependencies: 

// --------------------
const $id_ed266e74 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".module--cta{background-image:url(images/cta-business-bg.jpg);background-position:50%;background-size:cover;padding-bottom:3rem;padding-top:3rem}@media (min-width:640px){.module--cta{padding-bottom:7rem;padding-top:7rem}}";
}


// --------------------
// Request: /pages/crm.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/composables.mjs ($id_f55c9203)
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/TheContent.vue ($id_7179c50a)
// - /components/TheBestFeature.vue ($id_df493032)
// - /components/FeatureRow.vue ($id_f81b4e2d)
// - /components/TheApps.vue ($id_fa304aa1)
// - /components/TheClients.vue ($id_4b526e20)
// - /components/TheCta.vue ($id_b5c1e281)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_362e578b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/composables.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheHero.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheReview.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/TheContent.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/TheBestFeature.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/FeatureRow.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/TheApps.vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/TheClients.vue");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/TheCta.vue");


// This will also work in `<script setup>`
/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
  layout: "default",
});
const _sfc_main = {
  data(){
    return{
      features:[
        {
          icon:"filter.svg",
          title:"Sales Funnel",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"tags.svg",
          title:"Contact Tags",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"profile.svg",
          title:"Build Customer Profile",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"ticket.svg",
          title:"Ticket Management",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"bulk-import.svg",
          title:"Bulk Import/Export",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"chrome-extension.svg",
          title:"Chrome Extension",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        }
      ],
      customerFeature:[
        {
          title:'Save Important Customer Data',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Sync Leads With Different CRMs',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      notesFeature:[
        {
          title:'Log Multiple Notes',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Record Sales Activity',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      messageFeature:[
        {
          title:'Save Important Text Messages',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Save Video, PDF, Audio Messages',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      chatSyncFeature:[
        {
          title:'Sync With Your Phone',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Export Synced Conversations',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ]
    }
  }
}

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHero = __vite_ssr_import_1__.default
  const _component_TheReview = __vite_ssr_import_2__.default
  const _component_TheContent = __vite_ssr_import_3__.default
  const _component_TheBestFeature = __vite_ssr_import_4__.default
  const _component_FeatureRow = __vite_ssr_import_5__.default
  const _component_TheApps = __vite_ssr_import_6__.default
  const _component_TheClients = __vite_ssr_import_7__.default
  const _component_TheCta = __vite_ssr_import_8__.default

  _push(`<!--[--><!-- Hero Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheHero, {
    title: "Power Up Your Whatsapp Web",
    subTitle: "to Improve Your Relationship With Your Customer.\n",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat."
  }, null, _parent))
  _push(`<!-- Hero Section: End --><!-- Review Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheReview, { color: "light" }, null, _parent))
  _push(`<!-- Review Section: End --><!-- Content Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheContent, {
    title: "Dashboard And Orders",
    subTitle: "Lorem Ipsum Dolor Sit Amet.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat.",
    image: "extension.jpg"
  }, null, _parent))
  _push(`<!-- Content Section: End --><!-- Best Feature Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheBestFeature, {
    class: "module--feature-bg",
    title: "We Empathise Your Needs And Provide",
    subTitle: "You Best Feature To Stimulate The WhatsApp.",
    content: "Vepaar provides you with a wide range of WhatsApp CRM features that you can use to take your business to the next level. Be it creating customer profiles, sending personalized replies, saving messages, or creating your entire online business page, Vepaar has it all.",
    features: $data.features
  }, null, _parent))
  _push(`<!-- Best Feature Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Build Customer Profile From WhatsApp",
    points: $data.customerFeature,
    image: "customer-profile-screenshot.jpg"
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Log sales activity While chatting on WhatsApp",
    isReverse: "",
    points: $data.notesFeature,
    image: "notes-screenshot.jpg"
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Save messages, Media from WhatsApp",
    points: $data.messageFeature,
    image: "messages-screenshot.jpg"
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Auto sync all the conversations from WhatsApp",
    points: $data.chatSyncFeature,
    image: "chat-saved-screenshot.jpg",
    isReverse: ""
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- The Apps: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheApps, { image: "app-pattern.png" }, {
    default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h2 class="text-2xl lg:text-5xl font-semibold text-white"${
          _scopeId
        }> Your Chrome Extension is Integrated with <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500"${
          _scopeId
        }>Business Apps you use every day.</span></h2>`)
      } else {
        return [
          __vite_ssr_import_9__.createVNode("h2", { class: "text-2xl lg:text-5xl font-semibold text-white" }, [
            __vite_ssr_import_9__.createTextVNode(" Your Chrome Extension is Integrated with "),
            __vite_ssr_import_9__.createVNode("span", { class: "text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500" }, "Business Apps you use every day.")
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<!-- The Apps: End --><!-- Clients Logo: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheClients, null, null, _parent))
  _push(`<!-- Clients Logo: End --><!-- The CTA: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheCta, {
    tagline: "Trusted by 100k+ Businesses Worldwide",
    title: "#1 CRM for WhatsApp",
    description: "Vepaar helps you semi-automate your business workflow with CRM-like features. You can create customer profiles, save media and messages, send personalized quick replies, organize WhatsApp polls, build your e-commerce store, launch your online business page and so much more!"
  }, null, _parent))
  _push(`<!-- The CTA: End --><!--]-->`)
}


const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/crm.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_12__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/crm.vue"]])
const meta = {
  layout: "default",
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/composables.mjs
// Parents: 
// - /pages/crm.vue?macro=true ($id_362e578b)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/polls.vue?macro=true ($id_7689a5ac)
// - /pages/store.vue?macro=true ($id_8929f789)
// - /pages/crm.vue ($id_e46e1fbe)
// - /pages/index.vue ($id_cca58e97)
// - /pages/polls.vue ($id_4296044b)
// - /pages/store.vue ($id_5953fbb6)
// Dependencies: 

// --------------------
const $id_f55c9203 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const warnRuntimeUsage = (method) => console.warn(`${method}() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /components/TheContent.vue
// Parents: 
// - /pages/crm.vue?macro=true ($id_362e578b)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/polls.vue?macro=true ($id_7689a5ac)
// - /pages/store.vue?macro=true ($id_8929f789)
// - /pages/crm.vue ($id_e46e1fbe)
// - /pages/index.vue ($id_cca58e97)
// - /pages/polls.vue ($id_4296044b)
// - /pages/store.vue ($id_5953fbb6)
// Dependencies: 
// - /components/TheButton.vue ($id_00941411)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7179c50a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheButton.vue");


const _sfc_main = {
  props: {
    title: String,
    subTitle: String,
    content: String,
    image: String
  }
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_button = __vite_ssr_import_0__.default

  _push(`<section${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "module module--content" }, _attrs))
  }><div class="container"><div class="sm:max-w-md lg:max-w-2xl lg:my-12 mx-auto text-left lg:text-center"><h2 class="text-2xl sm:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500">${
    __vite_ssr_import_2__.ssrInterpolate($props.title)
  }</h2><h3 class="text-2xl sm:text-4xl lg:text-5xl text-gray-900 font-semibold">${
    __vite_ssr_import_2__.ssrInterpolate($props.subTitle)
  }</h3><p class="my-5 lg:my-6 text-sm sm:text-base lg:text-lg text-gray-400">${
    __vite_ssr_import_2__.ssrInterpolate($props.content)
  }</p>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_the_button, { size: "lg" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Get Started Now `)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode(" Get Started Now ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div><div class="mt-8 -mb-7 lg:-mb-10 max-w-7xl mx-auto"><img${__vite_ssr_import_2__.ssrRenderAttr("src", 'images/' + $props.image)}></div></section>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheContent.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheContent.vue"]]);
}


// --------------------
// Request: /components/TheBestFeature.vue
// Parents: 
// - /pages/crm.vue?macro=true ($id_362e578b)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/polls.vue?macro=true ($id_7689a5ac)
// - /pages/store.vue?macro=true ($id_8929f789)
// - /pages/crm.vue ($id_e46e1fbe)
// - /pages/index.vue ($id_cca58e97)
// - /pages/polls.vue ($id_4296044b)
// - /pages/store.vue ($id_5953fbb6)
// Dependencies: 
// - /components/FeatureCardRow.vue ($id_71dd5421)
// - /components/FeatureCard.vue ($id_d5ac0403)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/TheBestFeature.vue?vue&type=style&index=0&lang.scss ($id_05cf1f6f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_df493032 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/FeatureCardRow.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/FeatureCard.vue");


const _sfc_main = {
  props: {
    title: String,
    subTitle: String,
    content: String,
    features: Array,
    isFeatureRow: {
      type: Boolean,
      default: false
    },
    cols3: {
      type: Boolean,
      default: false
    }
  }
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FeatureCardRow = __vite_ssr_import_0__.default
  const _component_FeatureCard = __vite_ssr_import_1__.default

  _push(`<section${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "module module--feature" }, _attrs))
  }><div class="container"><h2 class="text-2xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">${
    __vite_ssr_import_3__.ssrInterpolate($props.title)
  } <span class="text-2xl sm:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500">${
    __vite_ssr_import_3__.ssrInterpolate($props.subTitle)
  }</span></h2><p class="text-gray-400 text-sm sm:text-base mt-5">${
    __vite_ssr_import_3__.ssrInterpolate($props.content)
  }</p>`)
  if ($props.isFeatureRow) {
    _push(`<div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10 lg:mt-20"><!--[-->`)
    __vite_ssr_import_3__.ssrRenderList($props.features, (feature, index) => {
      _push(__vite_ssr_import_3__.ssrRenderComponent(_component_FeatureCardRow, {
        key: index,
        feature: feature
      }, null, _parent))
    })
    _push(`<!--]--></div>`)
  } else {
    _push(`<div class="${__vite_ssr_import_3__.ssrRenderClass([
          _ctx.cols2
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'
            : 'grid-cols-1 sm:grid-cols-2'
        , "grid gap-8 mt-10 lg:mt-20"])}"><!--[-->`)
    __vite_ssr_import_3__.ssrRenderList($props.features, (feature, index) => {
      _push(__vite_ssr_import_3__.ssrRenderComponent(_component_FeatureCard, {
        key: index,
        feature: feature
      }, null, _parent))
    })
    _push(`<!--]--></div>`)
  }
  _push(`</div></section>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/TheBestFeature.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheBestFeature.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheBestFeature.vue"]]);
}


// --------------------
// Request: /components/FeatureCardRow.vue
// Parents: 
// - /components/TheBestFeature.vue ($id_df493032)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_71dd5421 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  props:{
    feature:Object
  },
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "flex" }, _attrs))
  }><div class="w-10"><img${
    __vite_ssr_import_1__.ssrRenderAttr("src", 'images/'+$props.feature.icon)
  } class="w-full"></div><div class="flex-1 pl-2"><h3 class="text-gray-500 text-2xl lg:text-3xl font-semibold mt-1">${
    __vite_ssr_import_1__.ssrInterpolate($props.feature.title)
  }</h3><p class="text-gray-500 text-base py-3">${
    __vite_ssr_import_1__.ssrInterpolate($props.feature.text)
  }</p></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/FeatureCardRow.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/FeatureCardRow.vue"]]);
}


// --------------------
// Request: /components/FeatureCard.vue
// Parents: 
// - /components/TheBestFeature.vue ($id_df493032)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d5ac0403 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  props:{
    feature:Object
  },
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  }><div class="flex items-center"><div class="w-8 sm:w-9"><img${
    __vite_ssr_import_0__.ssrRenderAttr("src", 'images/'+$props.feature.icon)
  } class="w-9 h-9 object-contain object-center"></div><div class="flex-1 pl-3"><h3 class="text-gray-500 text-xl sm:text-2xl font-semibold mt-1">${
    __vite_ssr_import_0__.ssrInterpolate($props.feature.title)
  }</h3></div></div><p class="text-gray-400 text-lg mt-3">${
    __vite_ssr_import_0__.ssrInterpolate($props.feature.text)
  }</p></div>`)
}


const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_1__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/FeatureCard.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_2__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/FeatureCard.vue"]]);
}


// --------------------
// Request: /components/TheBestFeature.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/TheBestFeature.vue ($id_df493032)
// Dependencies: 

// --------------------
const $id_05cf1f6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".module--feature{padding-top:0}.module--feature.module--feature-bg{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity));padding-top:3.5rem}";
}


// --------------------
// Request: /components/FeatureRow.vue
// Parents: 
// - /pages/crm.vue?macro=true ($id_362e578b)
// - /pages/store.vue?macro=true ($id_8929f789)
// - /pages/crm.vue ($id_e46e1fbe)
// - /pages/store.vue ($id_5953fbb6)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/FeatureRow.vue?vue&type=style&index=0&lang.scss ($id_9812ec47)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f81b4e2d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  props:{
    title: String,
    subTitle: String,
    content: String,
    image: String,
    points: Array,
    isReverse:{
      type:Boolean,
      default:false,
    }
  }
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "module module--row" }, _attrs))
  }><div class="container"><div class="${
    __vite_ssr_import_1__.ssrRenderClass([$props.isReverse ? 'sm:flex-row-reverse' : 'sm:flex-row', "flex flex-col-reverse items-center text-left"])
  }"><div class="lg:max-w-md"><h2 class="text-2xl lg:text-5xl font-semibold text-gray-900 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500"><span class="">${
    __vite_ssr_import_1__.ssrInterpolate($props.title)
  }</span></h2><ul class="mt-5 sm:mt-10 list-disc ml-5 text-2xl text-gray-900"><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($props.points, (point, index) => {
    _push(`<li class="${
      __vite_ssr_import_1__.ssrRenderClass(_ctx.key==0?'':'mt-5')
    }"><h3 class="text-xl font-semibold">${
      __vite_ssr_import_1__.ssrInterpolate(point.title)
    }</h3><p class="text-base mt-2 text-gray-400">${
      __vite_ssr_import_1__.ssrInterpolate(point.description)
    }</p></li>`)
  })
  _push(`<!--]--></ul></div><div class="flex-1"><img${__vite_ssr_import_1__.ssrRenderAttr("src", 'images/'+$props.image)} alt="WhatsApp" class="block"></div></div></div></section>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/FeatureRow.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/FeatureRow.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/FeatureRow.vue"]]);
}


// --------------------
// Request: /components/FeatureRow.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/FeatureRow.vue ($id_f81b4e2d)
// Dependencies: 

// --------------------
const $id_9812ec47 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".module.module--row{padding-bottom:2.5rem;padding-top:2.5rem}@media (min-width:640px){.module.module--row{padding-bottom:1.25rem;padding-top:1.25rem}}";
}


// --------------------
// Request: /components/TheApps.vue
// Parents: 
// - /pages/crm.vue?macro=true ($id_362e578b)
// - /pages/store.vue?macro=true ($id_8929f789)
// - /pages/crm.vue ($id_e46e1fbe)
// - /pages/store.vue ($id_5953fbb6)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_fa304aa1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  props:{
    image:String
  }
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "module--apps bg-gray-900 mt-10 pt-10 sm:py-0" }, _attrs))}><div class="container"><div class="sm:flex items-center"><div class="max-w-sm">`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div><div class="flex-1 mt-10 sm:mt-0"><img${__vite_ssr_import_1__.ssrRenderAttr("src", `images/`+$props.image)} alt="" class="-ml-5 sm:ml-0"></div></div></div></section>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheApps.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheApps.vue"]]);
}


// --------------------
// Request: /components/TheClients.vue
// Parents: 
// - /pages/crm.vue?macro=true ($id_362e578b)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/pricing.vue?macro=true ($id_eaf79752)
// - /pages/store.vue?macro=true ($id_8929f789)
// - /pages/crm.vue ($id_e46e1fbe)
// - /pages/index.vue ($id_cca58e97)
// - /pages/pricing.vue ($id_ee43cf6a)
// - /pages/store.vue ($id_5953fbb6)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_4b526e20 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "module module--client" }, _attrs))}><div class="container"><div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-5"><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList(12, (index) => {
    _push(`<div><img src="images/monginis-logo.jpg" class="w-4/5 mx-auto block"></div>`)
  })
  _push(`<!--]--></div></div></section>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheClients.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheClients.vue"]]);
}


// --------------------
// Request: /pages/download.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /components/TheDownload.vue ($id_22e80545)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_85211355 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheDownload.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheDownload = __vite_ssr_import_0__.default

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_TheDownload, _attrs, null, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/download.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/download.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/TheDownload.vue
// Parents: 
// - /pages/download.vue?macro=true ($id_85211355)
// - /pages/download.vue ($id_35dd2ec2)
// Dependencies: 
// - /components/TheButton.vue ($id_00941411)
// - /components/Extension.vue ($id_3050003d)
// - /components/AppsDownload.vue ($id_22a9121d)
// - /components/VolizApp.vue ($id_458087b3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_22e80545 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheButton.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/Extension.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/AppsDownload.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/VolizApp.vue");

const _sfc_main = {}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_the_button = __vite_ssr_import_0__.default
  const _component_Extension = __vite_ssr_import_1__.default
  const _component_AppsDownload = __vite_ssr_import_2__.default
  const _component_VolizApp = __vite_ssr_import_3__.default

  _push(`<section${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({ class: "module module" }, _attrs))}><div class="container"><h2 class="text-2xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500 text-center"> Dashboard And Orders <span class="text-gray-900 block">Lorem Ipsum Dolor Sit Amet.</span></h2><p class="text-gray-400 text-base mt-5 text-center max-w-xl mx-auto"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. </p><div class="mt-20"><div class="flex flex-col-reverse lg:flex-row rounded-xl bg-deep-purple-500 bg-opacity-10"><div class="flex-1 p-5"><div class="flex items-center"><img src="images/desktop-icon.svg" alt=""><h3 class="ml-3 text-2xl sm:text-4xl text-gray-900 font-semibold"> Desktop </h3></div><p class="text-gray-500 text-lg my-6 max-w-md"> Download our free online business app, available for Android/iOS users, and kickstart your digital store with CRM, conducting polls, and running your business page at ease. Kickstart your online presence with the Vepaar app today! </p>`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_the_button, { theme: "dark" }, {
    default: __vite_ssr_import_4__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Signup for Free `)
      } else {
        return [
          __vite_ssr_import_4__.createTextVNode(" Signup for Free ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="flex-1"><img src="images/desktop-screenshot.png" alt="" class="p-4 lg:pt-4 rounded-3xl lg:rounded-none"></div></div><div class="block sm:flex mt-5">`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_Extension, null, null, _parent))
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_AppsDownload, null, null, _parent))
  _push(`</div>`)
  _push(__vite_ssr_import_5__.ssrRenderComponent(_component_VolizApp, null, null, _parent))
  _push(`</div></div></section>`)
}


const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheDownload.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_7__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheDownload.vue"]]);
}


// --------------------
// Request: /components/Extension.vue
// Parents: 
// - /components/TheDownload.vue ($id_22e80545)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_3050003d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "flex-1 rounded-xl border-4 border-primary-500 p-5 flex flex-col" }, _attrs))}><div class="flex items-center"><img src="images/extension-purple.svg" alt=""><h3 class="ml-3 text-2xl lg:text-4xl text-gray-900 font-semibold"> Chrome Extension </h3></div><p class="my-5 text-gray-500"> Vepaar has a Chrome Browser Extension which runs on top of WhatsApp Web. Visit <a href="https://web.whatsapp.com" target="_blank" class="text-primary-500">web.whatsapp.com</a> to start using the Vepaar chrome extension right away. </p><a href="javascript:;" class="mt-auto" target="_blank"><img src="images/chrome-web-store.svg" class="h-12 lg:h-16" alt=""></a></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Extension.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/Extension.vue"]]);
}


// --------------------
// Request: /components/AppsDownload.vue
// Parents: 
// - /components/TheDownload.vue ($id_22e80545)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_22a9121d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "flex-1 mt-5 sm:mt-0 sm:ml-8 rounded-xl bg-deep-purple-500 bg-opacity-10 p-5" }, _attrs))}><div class="flex items-center"><img src="images/application.svg" alt=""><h3 class="ml-3 text-2xl lg:text-4xl text-gray-900 font-semibold"> Android / iOS Apps </h3></div><p class="my-5 text-gray-500"> Download our free online business app, available for Android/iOS users, and kickstart your digital store with CRM, conducting polls, and running your business page at ease. Kickstart your online presence with the Vepaar app today! </p><div class="flex"><a href="javascript:;" target="_blank"><img src="images/playstore.svg" class="h-12 sm:h-16" alt=""></a><a href="javascript:;" target="_blank" class="ml-2"><img src="images/app-store.svg" class="h-12 sm:h-16" alt=""></a></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/AppsDownload.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/AppsDownload.vue"]]);
}


// --------------------
// Request: /components/VolizApp.vue
// Parents: 
// - /components/TheDownload.vue ($id_22e80545)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_458087b3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "mt-10 sm:mt-40 p-5 sm:p-10 lg:p-20 border-dashed border-2 border-voliz-500 rounded-xl text-center" }, _attrs))}><img src="images/voliz.svg" alt="" class="h-10 sm:h-16 mx-auto"><h2 class="text-gray-900 text-2xl sm:text-4xl my-5 sm:my-10"> A Unique App for <span class="block text-voliz-500 font-extrabold">WhatsApp Poll</span></h2><p class="text-gray-400 max-w-2xl mx-auto"> Voliz helps you create various polls and share them among your contacts, groups or broadcast channels on WhatsApp to get customer feedback in an instant. After all, less hassle assures better results! </p><div class="flex justify-center mt-5 sm:mt-10"><a href="javascript:;" target="_blank"><img src="images/playstore.svg" class="h-10 sm:h-16" alt=""></a><a href="javascript:;" target="_blank" class="ml-4"><img src="images/app-store.svg" class="h-10 sm:h-16" alt=""></a></div></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/VolizApp.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/VolizApp.vue"]]);
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/composables.mjs ($id_f55c9203)
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheContent.vue ($id_7179c50a)
// - /components/TheBestFeature.vue ($id_df493032)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/TheRow.vue ($id_61e05cae)
// - /components/TheSupport.vue ($id_2ee8f308)
// - /components/TheTestimonial.vue ($id_ac5b85a4)
// - /components/TheUsersCounter.vue ($id_4c8955c0)
// - /components/TheClients.vue ($id_4b526e20)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5dd70240 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/composables.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheHero.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheContent.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/TheBestFeature.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/TheReview.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/TheRow.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/TheSupport.vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/TheTestimonial.vue");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/TheUsersCounter.vue");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/components/TheClients.vue");


// This will also work in `<script setup>`
/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
  layout: "default",
});
const _sfc_main = {
  data(){
    return{
      features1:[
        {
          icon:"reply-icon.svg",
          title:"Customer Profile",
          text:"Build your customer profile so that we have a record of your details and the conversations we have had in the past."
        },
        {
          icon:"reply-icon.svg",
          title:"Sales Funnels/Tags",
          text:"Sales Funnels allow you to filter your leads as per some funnel stages. The feature has proven to be effective in converting your leads to customers."
        },
        {
          icon:"reply-icon.svg",
          title:"AutoSave Chat",
          text:"This feature helps you Sync the WhatsApp chat of any customer or group. You can view these chats or media files from your Vepaar account."
        },
        {
          icon:"reply-icon.svg",
          title:"Ticket & Activity Management",
          text:"Manage your customer tickets easily and ensure seamless customer support. Prioritize tickets and update their status effortlessly."
        }
      ],
      features2:[
        {
          icon:"reply-icon.svg",
          title:"Variable/Digital Products",
          text:"Allow a set of variations on a product while configuring a number of variables at your convenience. Vepaar even facilitates to sell digital products like eBooks, licenses, etc."
        },
        {
          icon:"reply-icon.svg",
          title:"Checkout Configurations",
          text:"Now, you can have your custom-made checkout page where you can add new steps and reduce some. "
        },
        {
          icon:"reply-icon.svg",
          title:"Inventory Management",
          text:"Keep track of your products and their stock from anywhere with the most efficient inventory management features. "
        },
        {
          icon:"reply-icon.svg",
          title:"Multiple Payment Integrations",
          text:"Your customers can have the luxury of choosing from a list of payment gateways from your online shop."
        }
      ]
    }
  }
}

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHero = __vite_ssr_import_1__.default
  const _component_TheContent = __vite_ssr_import_2__.default
  const _component_TheBestFeature = __vite_ssr_import_3__.default
  const _component_TheReview = __vite_ssr_import_4__.default
  const _component_TheRow = __vite_ssr_import_5__.default
  const _component_TheSupport = __vite_ssr_import_6__.default
  const _component_TheTestimonial = __vite_ssr_import_7__.default
  const _component_TheUsersCounter = __vite_ssr_import_8__.default
  const _component_TheClients = __vite_ssr_import_9__.default

  _push(`<!--[--><!-- Hero Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheHero, {
    title: "One-stop solution",
    subTitle: "to managing your business",
    textContent: "Without any possible doubt, reaching out to customers via WhatsApp is the next big thing in business! Vepaar provides you with the essential tools that allow you to manage your business effortlessly without diving deep into the technicalities. \n"
  }, null, _parent))
  _push(`<!-- Hero Section: End --><!-- Content Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheContent, {
    title: "WhatsApp CRM",
    subTitle: "Use WhatsApp to expand your business",
    content: "Allow your business to reap the benefits of the most commonly used messaging apps in the world.",
    image: "extension.jpg"
  }, null, _parent))
  _push(`<!-- Content Section: End --><!-- Best Feature Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheBestFeature, {
    title: "We acknowledge your business needs thus bring forth the most",
    subTitle: "remarkable feature WhatsApp has to offer",
    content: "Vepaar provides you with a wide range of WhatsApp CRM features that you can use to take your business to the next level. Be it creating customer profiles, sending personalized replies, saving messages, or creating your entire online business page, Vepaar has it all.  \n",
    isFeatureRow: true,
    features: $data.features1
  }, null, _parent))
  _push(`<!-- Best Feature Section: End --><!-- Review Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheReview, null, null, _parent))
  _push(`<!-- Review Section: End --><!-- Content Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheContent, {
    title: "Selling Made Easy",
    subTitle: "Vepaar store makes everything easy for your online business",
    content: "Many easy selling features are made available for you",
    image: "admin-panel.jpg"
  }, null, _parent))
  _push(`<!-- Content Section: End --><!-- Best Feature Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheBestFeature, {
    title: "Businesses all over ",
    subTitle: "the world count on us",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat.",
    features: $data.features2,
    isFeatureRow: true
  }, null, _parent))
  _push(`<!-- Best Feature Section: End --><!-- Row Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheRow, {
    title: "WhatsApp poll",
    subTitle: "Gather reliable data through WhatsApp Poll",
    content: "You can make use of polls to collect feedback from clients. Polls provide first-hand information which can be beneficial in improving your business. ",
    image: "whatsapp-poll.png"
  }, null, _parent))
  _push(`<!-- Row Section: End --><!-- Row Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheRow, {
    title: "Create WhatsApp Link",
    subTitle: "Send Predefined Messages",
    content: "Vepaar allows you to create your WhatsApp Link, which can be easily shared on social media. Your customers can use this link to initiate conversations with you on WhatsApp.",
    image: "whatsapp-link.png",
    isReverse: true
  }, null, _parent))
  _push(`<!-- Row Section: End --><!-- Support Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheSupport, null, null, _parent))
  _push(`<!-- Support Section: End --><!-- Testimonial Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheTestimonial, null, null, _parent))
  _push(`<!-- Testimonial Section: End --><!-- Users Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheUsersCounter, null, null, _parent))
  _push(`<!-- Users Section: End --><!-- Clients Logo: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheClients, null, null, _parent))
  _push(`<!-- Clients Logo: End --><!--]-->`)
}


const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_12__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_13__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_13__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/index.vue"]])
const meta = {
  layout: "default",
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/TheRow.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /components/TheButton.vue ($id_00941411)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/TheRow.vue?vue&type=style&index=0&lang.scss ($id_bda14ba0)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_61e05cae = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheButton.vue");


const _sfc_main = {
  props:{
    title: String,
    subTitle: String,
    content: String,
    image: String,
    isReverse:{
      type:Boolean,
      default:false,
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_button = __vite_ssr_import_0__.default

  _push(`<section${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "module module--row bg-gray-100" }, _attrs))
  }><div class="container"><div class="${
    __vite_ssr_import_2__.ssrRenderClass([$props.isReverse ? 'sm:flex-row-reverse text-left sm:text-right':'', "flex flex-col-reverse sm:flex-row items-center text-left"])
  }"><div class="max-w-xs lg:max-w-md"><h2 class="${
    __vite_ssr_import_2__.ssrRenderClass([$props.isReverse ? 'max-w-sm ml-auto':'', "text-2xl lg:text-5xl font-semibold text-gray-900"])
  }"><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500">${
    __vite_ssr_import_2__.ssrInterpolate($props.title)
  }</span> ${
    __vite_ssr_import_2__.ssrInterpolate($props.subTitle)
  }</h2><p class="text-gray-400 my-5 lg:my-8">${
    __vite_ssr_import_2__.ssrInterpolate($props.content)
  }</p>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_the_button, null, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Get Started Now`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Get Started Now")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="flex-1"><img${
    __vite_ssr_import_2__.ssrRenderAttr("src", 'images/'+$props.image)
  } alt="WhatsApp" class="${
    __vite_ssr_import_2__.ssrRenderClass([$props.isReverse ? 'sm:-ml-16' : 'sm:-mr-10', "block"])
  }"></div></div></div></section>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/TheRow.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheRow.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheRow.vue"]]);
}


// --------------------
// Request: /components/TheRow.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/TheRow.vue ($id_61e05cae)
// Dependencies: 

// --------------------
const $id_bda14ba0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".module.module--row{padding-bottom:2.5rem;padding-top:2.5rem}@media (min-width:640px){.module.module--row{padding-bottom:0;padding-top:0}}";
}


// --------------------
// Request: /components/TheSupport.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /components/SupportCard.vue ($id_85a68533)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_2ee8f308 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/SupportCard.vue");


const _sfc_main = {
  data(){
    return {
      supports:[
        {
          title:'Facebook <span>Community Group</span>',
          icon:'facebook.svg'
        },
        {
          title:'Chat with us on <span>WhatsApp</span>',
          icon:'whatsapp.svg'
        },
        {
          title:'Schedule a <span>Demo</span>',
          icon:'demo.svg'
        },
        {
          title:"Let's discuss on <span>Email</span>",
          icon:'email.svg'
        }
      ]
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SupportCard = __vite_ssr_import_0__.default

  _push(`<section${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "module module--support lg:h-screen" }, _attrs))}><div class="container block lg:flex items-center h-full"><div class="lg:flex"><div class="max-w-xs lg:max-w-sm"><h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">Lorem Ipsum Dolor Sit Amet. <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500">Live Support.</span></h2></div><div class="mt-10 lg:mt-0 flex-1"><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($data.supports, (support, index) => {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_SupportCard, {
      key: index,
      support: support
    }, null, _parent))
  })
  _push(`<!--]--></div></div></div></div></section>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheSupport.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheSupport.vue"]]);
}


// --------------------
// Request: /components/SupportCard.vue
// Parents: 
// - /components/TheSupport.vue ($id_2ee8f308)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/SupportCard.vue?vue&type=style&index=0&lang.scss ($id_c7c58c90)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_85a68533 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = { 
  props:{
    support:Object
  }
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "bg-gray-100 p-5 rounded flex items-center" }, _attrs))
  }><img${
    __vite_ssr_import_1__.ssrRenderAttr("src", 'images/'+$props.support.icon)
  } alt="" class="w-12 h-12 sm:w-14 sm:h-14 mr-5"><h3 class="text-xl sm:text-2xl text-gray-900 font-semibold support-title">${
    $props.support.title
  }</h3></div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/SupportCard.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/SupportCard.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/SupportCard.vue"]]);
}


// --------------------
// Request: /components/SupportCard.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/SupportCard.vue ($id_85a68533)
// Dependencies: 

// --------------------
const $id_c7c58c90 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".support-title span{display:block}";
}


// --------------------
// Request: /components/TheTestimonial.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /components/TestimonialCard.vue ($id_156486af)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ac5b85a4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TestimonialCard.vue");


const _sfc_main = {
  data(){
    return{
      testimonials1:[
        {
          image:'testimonial-1.jpg',
          name:'Adison Mango',
          store:'Store Name',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          socialIcon:'twitter'
        },
        {
          image:'testimonial-2.jpg',
          name:'Zaire Dorwart',
          store:'Store Name',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, tellus aenean porttitor.',
          socialIcon:'twitter'
        },
        {
          image:'testimonial-3.jpg',
          name:'Jaylon Aminoff',
          store:'Store Name',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          socialIcon:'twitter'
        }
      ],
      testimonials2:[
        {
          image:'testimonial-3.jpg',
          name:'Jakob Carder',
          store:'Store Name',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, tellus aenean porttitor ligula tristique libero turpis.  Amet, tellus aenean porttitor ligula tristique libero turpis.',
          socialIcon:'twitter'
        },
        {
          image:'testimonial-4.jpg',
          name:'Erin Passaquindici Arcand',
          store:'Store Name',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, tellus aenean porttitor.',
          socialIcon:'twitter'
        },
        {
          image:'testimonial-5.jpg',
          name:'Jaylon Aminoff',
          store:'Store Name',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          socialIcon:'twitter'
        }
      ],
      testimonials3:[
        {
          image:'testimonial-6.jpg',
          name:'Adison Mango',
          store:'Store Name',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          socialIcon:'twitter'
        },
        {
          image:'testimonial-5.jpg',
          name:'Nolan Saris',
          store:'Store Name',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, tellus aenean porttitor.',
          socialIcon:'twitter'
        },
        {
          image:'testimonial-4.jpg',
          name:'Craig Korsgaard',
          store:'Store Name',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, tellus aenean porttitor ligula tristique libero turpis.  Amet, tellus aenean porttitor ligula tristique libero turpis.',
          socialIcon:'twitter'
        }
      ]
    }
  }
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TestimonialCard = __vite_ssr_import_0__.default

  _push(`<section${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "module module--testimonial bg-gray-900" }, _attrs))}><div class="container"><h2 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white max-w-2xl"> Our Customers, <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500 mt-1 block">Our Triumph.</span></h2><p class="mt-6 text-gray-400">At Vepaar, our most incredible wealth is our customers. Here’s what they have to say about us. </p><div class="mt-12 sm:flex -mx-5"><div class="flex-1 px-4"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($data.testimonials1, (testimonial, index) => {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_TestimonialCard, {
      key: index,
      testimonial: testimonial
    }, null, _parent))
  })
  _push(`<!--]--></div><div class="flex-1 px-4"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($data.testimonials2, (testimonial, index) => {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_TestimonialCard, {
      key: index,
      testimonial: testimonial
    }, null, _parent))
  })
  _push(`<!--]--></div><div class="sm:flex-1 px-4"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($data.testimonials3, (testimonial, index) => {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_TestimonialCard, {
      key: index,
      testimonial: testimonial
    }, null, _parent))
  })
  _push(`<!--]--></div></div></div></section>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheTestimonial.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheTestimonial.vue"]]);
}


// --------------------
// Request: /components/TestimonialCard.vue
// Parents: 
// - /components/TheTestimonial.vue ($id_ac5b85a4)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_156486af = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  props:{
    testimonial:Object
  }
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
      class: ["rounded-lg bg-gray-800 p-5", _ctx.index==0 ? '' : 'mt-8']
    }, _attrs))
  }><div class="flex"><div class="overflow-hidden w-10 lg:w-14 h-10 lg:h-14"><img${
    __vite_ssr_import_1__.ssrRenderAttr("src", 'images/'+$props.testimonial.image)
  } class="w-full h-full object-contain rounded-full overflow-hidden" alt=""></div><div class="px-4 flex-1"><h3 class="text-lg lg:text-xl text-white">${
    __vite_ssr_import_1__.ssrInterpolate($props.testimonial.name)
  }</h3><p class="text-base text-gray-600">${
    __vite_ssr_import_1__.ssrInterpolate($props.testimonial.store)
  }</p></div><a href="javascript:;" class="ml-auto"><img${
    __vite_ssr_import_1__.ssrRenderAttr("src", 'images/'+$props.testimonial.socialIcon+'.svg')
  } alt=""></a></div><p class="mt-5 text-base text-white">${
    __vite_ssr_import_1__.ssrInterpolate($props.testimonial.description)
  }</p></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TestimonialCard.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TestimonialCard.vue"]]);
}


// --------------------
// Request: /pages/links.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/links.vue?vue&type=style&index=0&scoped=true&lang.scss ($id_069e1f32)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e904372e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "module-page" }, _attrs))} data-v-0b16d2e0><div class="container" data-v-0b16d2e0><h2 class="text-4xl" data-v-0b16d2e0>Page links:-</h2><div class="page-link" data-v-0b16d2e0><a href="/" data-v-0b16d2e0> Home </a><a href="/crm" data-v-0b16d2e0> CRM </a><a href="/store" data-v-0b16d2e0> Store </a><a href="/polls" data-v-0b16d2e0> Polls </a><a href="/whatsapp-link-generator" data-v-0b16d2e0> Whatsapp Link Generator </a><a href="/aboutus" data-v-0b16d2e0> About Us </a><a href="/pricing" data-v-0b16d2e0> Pricing </a><a href="/download" data-v-0b16d2e0> Download </a></div></div></div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/links.vue?vue&type=style&index=0&scoped=true&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/links.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0b16d2e0"],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/links.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/links.vue?vue&type=style&index=0&scoped=true&lang.scss
// Parents: 
// - /pages/links.vue?macro=true ($id_e904372e)
// - /pages/links.vue ($id_49b7d808)
// Dependencies: 

// --------------------
const $id_069e1f32 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".module-page[data-v-0b16d2e0]{padding-bottom:5rem;padding-top:5rem}@media (min-width:1024px){.page-link[data-v-0b16d2e0]{display:flex}}.page-link a[data-v-0b16d2e0]{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity));display:inline-flex;font-size:1rem;line-height:1.5rem;padding:1rem}.page-link a[data-v-0b16d2e0]:hover{--tw-text-opacity:1;color:rgb(48 79 254/var(--tw-text-opacity))}.page-link a+a[data-v-0b16d2e0]{margin-top:1rem}@media (min-width:1024px){.page-link a+a[data-v-0b16d2e0]{margin-left:1rem;margin-top:0}}";
}


// --------------------
// Request: /pages/polls.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/composables.mjs ($id_f55c9203)
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/TheContent.vue ($id_7179c50a)
// - /components/TheBestFeature.vue ($id_df493032)
// - /components/ThePollSteps.vue ($id_702c25e6)
// - /components/TheCta.vue ($id_b5c1e281)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7689a5ac = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/composables.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheHero.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheReview.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/TheContent.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/TheBestFeature.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/ThePollSteps.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/TheCta.vue");


// This will also work in `<script setup>`
/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
  layout: "default",
});
const _sfc_main = {
  data(){
    return{
      features:[
        {
          icon:"multiple-votes.svg",
          title:"Single or Multiple Votes",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"result.svg",
          title:"Public or Private Result",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"data.svg",
          title:"See Data of Poll in Real Time",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"poll-status.svg",
          title:"Regulate Poll Status",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"multi-language.svg",
          title:"Multi-Language Poll",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"export-result.svg",
          title:"Export Poll Result in .pdf,.xls, etc",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"theme.svg",
          title:"Personalise Theme of Poll Result",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"user-feedback.svg",
          title:"User Feedback",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"market-research.svg",
          title:"Market Research",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"customer-engagement.svg",
          title:"Customer Engagement",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"social-media-research.svg",
          title:"Social Media Research",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"short-survey.svg",
          title:"Short Survey",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"learn-about-audience.svg",
          title:"Learn about your Audience",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        }
      ]
    }
  }
}

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHero = __vite_ssr_import_1__.default
  const _component_TheReview = __vite_ssr_import_2__.default
  const _component_TheContent = __vite_ssr_import_3__.default
  const _component_TheBestFeature = __vite_ssr_import_4__.default
  const _component_ThePollSteps = __vite_ssr_import_5__.default
  const _component_TheCta = __vite_ssr_import_6__.default

  _push(`<!--[--><!-- Hero Section: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheHero, {
    title: "Understand users in better way",
    subTitle: "through WhatsApp Poll.",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat.",
    href: "#"
  }, null, _parent))
  _push(`<!-- Hero Section: End --><!-- Review Section: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheReview, { color: "light" }, null, _parent))
  _push(`<!-- Review Section: End --><!-- Content Section: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheContent, {
    title: "Dashboard And Orders",
    subTitle: "Lorem Ipsum Dolor Sit Amet.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat.",
    image: "polls-screenshot.jpg"
  }, null, _parent))
  _push(`<!-- Content Section: End --><!-- Best Feature Section: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheBestFeature, {
    class: "module--feature-bg",
    title: "Features that help you build quick polls",
    subTitle: "and share it on WhatsApp.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat.",
    features: $data.features,
    cols3: ""
  }, null, _parent))
  _push(`<!-- Best Feature Section: End --><!-- Poll Step: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ThePollSteps, null, null, _parent))
  _push(`<!-- Poll Step: Start --><!-- The CTA: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheCta, {
    tagline: "Powered by Official WhatsApp Business APIs",
    title: "Polls on WhatsApp",
    description: "Nothing builds brand loyalty like showing your customers that you value their opinions over everything else. Use WhatsApp polls to engage with your buyers and gather important data that you can segment and implement in your future marketing campaigns."
  }, null, _parent))
  _push(`<!-- The CTA: End --><!--]-->`)
}


const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/polls.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_10__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/polls.vue"]])
const meta = {
  layout: "default",
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/ThePollSteps.vue
// Parents: 
// - /pages/polls.vue?macro=true ($id_7689a5ac)
// - /pages/polls.vue ($id_4296044b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/ThePollSteps.vue?vue&type=style&index=0&lang.scss ($id_9597ac70)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_702c25e6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data(){
    return {
      steps:[
        {
          icon:'create.svg',
          title:'Create',
          description:'Write a poll question, provide the options, and configure the poll settings.'
        },
        {
          icon:'share.svg',
          title:'Share',
          description:'Forward the poll to your desired audience, depending on your requirements.'
        },
        {
          icon:'collect.svg',
          title:'Collect',
          description:'Start receiving real-time votes on WhatsApp which will be reflected live on the poll result page.'
        },
        {
          icon:'analyse.svg',
          title:'Analyse',
          description:'Analyze the statistics of the data after the poll results are received. Compare the results and get idea of what your customers want.'
        },
        {
          icon:'export.svg',
          title:'Export',
          description:'Share the results in WhatsApp and also other platforms and let your customers know the results too.'
        }
      ]
    }
  }
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "module module--poll" }, _attrs))}><div class="container"><h2 class="text-center text-3xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500">How do you create a poll?</h2><p class="text-gray-400 text-center text-base mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat.</p><div class="step-list"><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($data.steps, (step, index) => {
    _push(`<div class="step-card"><img${
      __vite_ssr_import_1__.ssrRenderAttr("src", 'images/'+step.icon)
    } alt="" class="step-card__icon"><h3 class="step-card__title">${
      __vite_ssr_import_1__.ssrInterpolate(step.title)
    }</h3><p class="step-card__text">${
      __vite_ssr_import_1__.ssrInterpolate(step.description)
    }</p></div>`)
  })
  _push(`<!--]--></div></div></section>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/ThePollSteps.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/ThePollSteps.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/ThePollSteps.vue"]]);
}


// --------------------
// Request: /components/ThePollSteps.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/ThePollSteps.vue ($id_702c25e6)
// Dependencies: 

// --------------------
const $id_9597ac70 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".module.module--poll{padding-bottom:3rem;padding-top:3rem}@media (min-width:640px){.module.module--poll{padding-bottom:5rem;padding-top:5rem}}@media (min-width:1024px){.module.module--poll{padding-bottom:8rem;padding-top:8rem}}.step-list{margin-top:5rem;position:relative}.step-list:after{--tw-bg-opacity:1;background-color:rgb(216 228 239/var(--tw-bg-opacity));bottom:0;content:\"\";height:100%;left:0;position:absolute;top:0;width:3px}@media (min-width:640px){.step-list:after{left:50%}}.step-card{position:relative;text-align:left}@media (min-width:640px){.step-card{text-align:right;width:50%}}.step-card__title{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity));font-size:1.25rem;font-weight:600;line-height:1.5rem;margin-bottom:.5rem;margin-top:.5rem}@media (min-width:640px){.step-card__title{font-size:1.5rem;line-height:1.75rem}}.step-card__text{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity));max-width:24rem}.step-card:before{--tw-bg-opacity:1;background-color:rgb(216 228 239/var(--tw-bg-opacity));content:\"\";height:3px;left:0;position:absolute;top:2rem;width:1.25rem}@media (min-width:640px){.step-card:before{left:auto;right:0;width:2rem}}.step-card:nth-child(odd){padding-left:2.5rem}@media (min-width:640px){.step-card:nth-child(odd){padding-left:0;padding-right:5rem}}@media (min-width:1024px){.step-card:nth-child(odd){padding-right:7rem}}@media (min-width:640px){.step-card:nth-child(odd) .step-card__icon{margin-left:auto}}.step-card:nth-child(odd) .step-card__text{margin-left:auto}.step-card:nth-child(2n){margin-left:auto;padding-left:2.5rem;text-align:left}@media (min-width:640px){.step-card:nth-child(2n){padding-left:5rem}}@media (min-width:1024px){.step-card:nth-child(2n){padding-left:7rem}}@media (min-width:640px){.step-card:nth-child(2n) .step-card__icon{margin-left:0;margin-right:auto}}.step-card:nth-child(2n):before{content:\"\";left:0;right:auto}.step-card+.step-card{margin-top:2.5rem}@media (min-width:640px){.step-card+.step-card{margin-top:0}}";
}


// --------------------
// Request: /pages/pricing.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/PricingTab.vue ($id_5aada895)
// - /components/ComparePlans.vue ($id_20b49029)
// - /components/TheFaq.vue ($id_03b536a4)
// - /components/TheClients.vue ($id_4b526e20)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_eaf79752 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheHero.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheReview.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/PricingTab.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/ComparePlans.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/TheFaq.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/TheClients.vue");


const _sfc_main = {
  data() {
    return {
      faqs: [
        {
          question: "What is Vepaar?",
          answer:
            "Vepaar is an app (Chrome Extension+Android/iOS app) which extends functionalities of the official WhatsApp Web/Mobile app. We’ve just wrapped the WhatsApp Web into a container which does the magic."
        },
        {
          question: "How does Vepaar help my business?",
          answer:
            "Vepaar is an app (Chrome Extension+Android/iOS app) which extends functionalities of the official WhatsApp Web/Mobile app. We’ve just wrapped the WhatsApp Web into a container which does the magic."
        },
        {
          question: "What is the relation between WhatsApp and Vepaar?",
          answer:
            "Yes, the WhatsApp Link Generator will work in countries where WhatsApp is available."
        },
        {
          question:
            "Will you be able to send messages to contacts on behalf of me or my contact number?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "What languages are available?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "Do you charge commission on orders?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "I have a technical problem, whom should I email?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "How do I pay for the paid plans?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        }
      ],
      plans: [
        {
          title: "free",
          link: "#"
        },
        {
          title: "basic",
          link: "#"
        },
        {
          title: "pro",
          link: "#"
        },
        {
          title: "agency",
          link: "#"
        }
      ],
      isSticky: false,
      scrollPosition: null
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrollPosition = window.scrollY;
      var moduleHeight = document.getElementById("section-offset");
      var topPos = moduleHeight.offsetHeight + 200;
      if (this.scrollPosition >= topPos) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    }
  }
};

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHero = __vite_ssr_import_0__.default
  const _component_TheReview = __vite_ssr_import_1__.default
  const _component_PricingTab = __vite_ssr_import_2__.default
  const _component_ComparePlans = __vite_ssr_import_3__.default
  const _component_TheFaq = __vite_ssr_import_4__.default
  const _component_TheClients = __vite_ssr_import_5__.default

  _push(`<!--[--><div id="section-offset"><!-- Hero Section: Start -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_TheHero, {
    title: "Pricing",
    subTitle: "Start free",
    isHeightAuto: ""
  }, null, _parent))
  _push(`<!-- Hero Section: End --><!-- Review Section: Start -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_TheReview, { color: "light" }, null, _parent))
  _push(`<!-- Review Section: End --><!-- Pricing Tab: Start -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_PricingTab, null, null, _parent))
  _push(`<!-- Pricing Tab: End --></div><!-- Compare Plans: Start -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ComparePlans, {
    plans: $data.plans,
    isSticky: $data.isSticky
  }, null, _parent))
  _push(`<!-- Compare Plans: End --><!-- FAQ : Start -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_TheFaq, { faqs: $data.faqs }, null, _parent))
  _push(`<!-- FAQ : End --><!-- Clients Logo: Start -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_TheClients, null, null, _parent))
  _push(`<!-- Clients Logo: End --><!--]-->`)
}


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/pricing.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/pricing.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/PricingTab.vue
// Parents: 
// - /pages/pricing.vue?macro=true ($id_eaf79752)
// - /pages/pricing.vue ($id_ee43cf6a)
// Dependencies: 
// - /components/PlanCard.vue ($id_49a9a792)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/PricingTab.vue?vue&type=style&index=0&lang.scss ($id_d343d2ca)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5aada895 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/PlanCard.vue");


const _sfc_main = {
  data() {
    return {
      tabs: [
        {
          title: "Monthly Bill",
          value: "monthly"
        },
        {
          title:
            "Annual Bill <strong class='ml-2 inline-block'>[Save 16%]</strong>",
          value: "annual"
        }
      ],
      tabActive: "annual",
      monthly: [
        {
          title: "Free",
          text: "For Business Starters",
          price: "$0.00",
          notes: "*All prices are exclusive of taxes.",
          link: "#",
          color: "free-plan"
        },
        {
          title: "Basic",
          text: "For Business Starters",
          price: "$4.99",
          notes: "*All prices are exclusive of taxes.",
          link: "#",
          color: "basic-plan"
        },
        {
          title: "Pro",
          text: "For Business Starters",
          price: "$14.99",
          notes: "*All prices are exclusive of taxes.",
          link: "#",
          color: "pro-plan"
        },
        {
          title: "Agency",
          text: "For Business Starters",
          price: "$29.99",
          notes: "*All prices are exclusive of taxes.",
          link: "#",
          color: "agency-plan"
        }
      ],
      annual: [
        {
          title: "free",
          text: "For Business Starters",
          price: "$0.00",
          notes: "*All prices are exclusive of taxes.",
          link: "#"
        },
        {
          title: "basic",
          text: "For Business Starters",
          price: "$8.99",
          notes: "*All prices are exclusive of taxes.",
          link: "#"
        },
        {
          title: "pro",
          text: "For Business Starters",
          price: "$18.99",
          notes: "*All prices are exclusive of taxes.",
          link: "#"
        },
        {
          title: "agency",
          text: "For Business Starters",
          price: "$39.99",
          notes: "*All prices are exclusive of taxes.",
          link: "#"
        }
      ]
    };
  },
  computed: {
    plans() {
      return this.tabActive == "monthly" ? this.monthly : this.annual;
    }
  },
  methods: {
    tabChange(val) {
      this.tabActive = val;
    }
  }
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PlanCard = __vite_ssr_import_0__.default

  _push(`<section${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "module module--pricing" }, _attrs))}><div class="container"><h2 class="text-gray-900 text-center text-3xl font-semibold"> Choose the right plan for you. </h2><div class="flex justify-center mt-10"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($data.tabs, (tab, index) => {
    _push(`<div class="${
      __vite_ssr_import_2__.ssrRenderClass([$data.tabActive == tab.value ? 'is-active' : '', "w-60 px-5 h-14 flex justify-center items-center bg-gray-100 rounded-md text-gray-500 font-semibold tab-button"])
    }">${
      tab.title
    }</div>`)
  })
  _push(`<!--]--></div><div class="plan-list mt-14"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($options.plans, (plan, index) => {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_PlanCard, {
      key: index,
      plan: plan
    }, null, _parent))
  })
  _push(`<!--]--></div></div></section>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/PricingTab.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/PricingTab.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/PricingTab.vue"]]);
}


// --------------------
// Request: /components/PlanCard.vue
// Parents: 
// - /components/PricingTab.vue ($id_5aada895)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/PlanCard.vue?vue&type=style&index=0&lang.scss ($id_d55ee248)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_49a9a792 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  props: {
    plan: Object
  }
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
      class: ["plan", $props.plan.title + '-plan']
    }, _attrs))
  }><h2 class="font-semibold text-gray-500 text-4xl capitalize">${
    __vite_ssr_import_1__.ssrInterpolate($props.plan.title)
  }</h2><p class="text-gray-500 my-4 text-lg px-5">${
    __vite_ssr_import_1__.ssrInterpolate($props.plan.text)
  }</p><h3 class="text-4xl text-gray-500 font-semibold">${
    __vite_ssr_import_1__.ssrInterpolate($props.plan.price)
  }</h3><div class="h-20"><a${
    __vite_ssr_import_1__.ssrRenderAttr("href", $props.plan.link)
  } class="plan-button">Try Now!</a><p class="plan-note">${
    __vite_ssr_import_1__.ssrInterpolate($props.plan.notes)
  }</p></div></div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/PlanCard.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/PlanCard.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/PlanCard.vue"]]);
}


// --------------------
// Request: /components/PlanCard.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/PlanCard.vue ($id_49a9a792)
// Dependencies: 

// --------------------
const $id_d55ee248 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".plan-button{--tw-text-opacity:1;align-items:center;border-radius:.25rem;color:rgb(255 255 255/var(--tw-text-opacity));display:inline-flex;font-size:.875rem;height:2.5rem;justify-content:center;line-height:1.5rem;padding-left:2rem;padding-right:2rem;width:100%}.free-plan:hover{--tw-border-opacity:1;border-color:rgb(48 79 254/var(--tw-border-opacity))}.free-plan .plan-button{--tw-bg-opacity:1;background-color:rgb(48 79 254/var(--tw-bg-opacity))}.free-plan .plan-button:hover{--tw-bg-opacity:1;background-color:rgb(35 59 218/var(--tw-bg-opacity))}.basic-plan:hover{--tw-border-opacity:1;border-color:rgb(98 0 234/var(--tw-border-opacity))}.basic-plan .plan-button{--tw-bg-opacity:1;background-color:rgb(98 0 234/var(--tw-bg-opacity))}.basic-plan .plan-button:hover{--tw-bg-opacity:1;background-color:rgb(75 0 201/var(--tw-bg-opacity))}.pro-plan:hover{--tw-border-opacity:1;border-color:rgb(170 0 255/var(--tw-border-opacity))}.pro-plan .plan-button{--tw-bg-opacity:1;background-color:rgb(170 0 255/var(--tw-bg-opacity))}.pro-plan .plan-button:hover{--tw-bg-opacity:1;background-color:rgb(132 0 219/var(--tw-bg-opacity))}.agency-plan:hover{--tw-border-opacity:1;border-color:rgb(197 17 98/var(--tw-border-opacity))}.agency-plan .plan-button{--tw-bg-opacity:1;background-color:rgb(197 17 98/var(--tw-bg-opacity))}.agency-plan .plan-button:hover{--tw-bg-opacity:1;background-color:rgb(169 12 98/var(--tw-bg-opacity))}.plan{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity));border-color:transparent;border-radius:.25rem;border-width:4px;flex:1 1 0%;margin:1rem;padding:1.25rem;text-align:center;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.plan:hover .plan-button{--tw-text-opacity:1;height:3.5rem;margin-top:1.25rem}.plan:hover .plan-note{font-size:0;opacity:0}.plan .plan-button{--tw-text-opacity:0;align-items:center;border-radius:.25rem;color:rgb(255 255 255/var(--tw-text-opacity));display:inline-flex;font-size:0;font-size:1.125rem;height:0;line-height:1.5rem;padding-left:2rem;padding-right:2rem;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:auto}.plan-note{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity));font-size:.875rem;line-height:1.5rem}";
}


// --------------------
// Request: /components/PricingTab.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/PricingTab.vue ($id_5aada895)
// Dependencies: 

// --------------------
const $id_d343d2ca = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".plan-list{display:block}@media (min-width:1024px){.plan-list{display:flex}}.tab-button{cursor:pointer}.tab-button.is-active{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:rgb(0 188 212/var(--tw-bg-opacity));color:rgb(255 255 255/var(--tw-text-opacity));position:relative;z-index:10}.tab-button+.tab-button{margin-left:-.25rem}";
}


// --------------------
// Request: /components/ComparePlans.vue
// Parents: 
// - /pages/pricing.vue?macro=true ($id_eaf79752)
// - /pages/pricing.vue ($id_ee43cf6a)
// Dependencies: 
// - /components/icons/MdiCheckCircle.vue ($id_da7a5c14)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/ComparePlans.vue?vue&type=style&index=0&lang.scss ($id_61f0b4f3)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_20b49029 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/icons/MdiCheckCircle.vue");


const _sfc_main = {
  props: {
    plans: Array,
    isSticky: Boolean
  },
  data() {
    return {
      tables: [
        {
          title: "CRM",
          icon: "crm-icon.svg",
          data: [
            {
              label: "Quick Reply Templates",
              free: "10",
              basic: "15",
              pro: "20",
              agency: "Unlimited"
            },
            {
              label: "Quick Replies Per Day",
              free: "20",
              basic: "55",
              pro: "100",
              agency: "Unlimited"
            },
            {
              label: "Contacts, Messages and Media Tags",
              free: "10",
              basic: "15",
              pro: "20",
              agency: "Unlimited"
            },
            {
              label: "Asset Library",
              free: "20 MB",
              basic: "50 MB",
              pro: "100 MB",
              agency: "Unlimited"
            },
            {
              label: "Contacts Management",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Customizable Sales Funnel",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Sales and Activity Reports",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Notifications",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Auto-Sync Chats",
              free: "",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Personalized Quick Replies",
              free: "",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Export Reports",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Vepaar API",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Zapier Integration",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Import Contacts",
              free: "",
              basic: "",
              pro: "",
              agency: "yes"
            },
            {
              label: "Custom Fields*",
              free: "",
              basic: "",
              pro: "",
              agency: "yes"
            },
            {
              label: "Agency Profile",
              free: "",
              basic: "",
              pro: "",
              agency: "yes"
            },
            {
              label: "Salesforce Integration",
              free: "",
              basic: "",
              pro: "",
              agency: "yes"
            }
          ]
        },
        {
          title: "Polls",
          icon: "polls-icon.svg",
          data: [
            {
              label: "Active Poll",
              free: "3",
              basic: "5",
              pro: "10",
              agency: "Unlimited"
            },
            {
              label: "Responses",
              free: "Unlimilited",
              basic: "Unlimilited",
              pro: "Unlimilited",
              agency: "Unlimited"
            },
            {
              label: "Multilingual Support*",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Export Results",
              free: "",
              basic: "",
              pro: "",
              agency: "yes"
            }
          ]
        },
        {
          title: "Store",
          icon: "store-icon.svg",
          data: [
            {
              label: "Biz Page",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Products",
              free: "50",
              basic: "100",
              pro: "200",
              agency: "Unlimited"
            },
            {
              label: "Product Variants",
              free: "Predefined",
              basic: "Custom",
              pro: "Custom",
              agency: "Custom"
            },
            {
              label: "Shipping Locations",
              free: "1",
              basic: "1",
              pro: "20",
              agency: "50"
            },
            {
              label: "Dashboard and Reports",
              free: "Basic",
              basic: "Basic",
              pro: "Advanced",
              agency: "Advanced"
            },
            {
              label: "Product Badges",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Multingual Support",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Order on WhatsApp",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Payment Integration",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Custom Domain",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Order Editing",
              free: "",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Export Reports",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Order Receipt",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Advance Shipping Configuration",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Remove Vepaar Branding",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Bulk Import Inventory",
              free: "",
              basic: "",
              pro: "",
              agency: "yes"
            }
          ]
        },
        {
          title: "Support and Onboarding",
          icon: "support-icon.svg",
          data: [
            {
              label: "Chat and Email Support",
              free: "yes",
              basic: "yes",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Ongoing Product Consulatation",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Personalized Onboarding",
              free: "",
              basic: "",
              pro: "yes",
              agency: "yes"
            },
            {
              label: "Early Beta Access",
              free: "",
              basic: "",
              pro: "",
              agency: "yes"
            }
          ]
        }
      ],
      selectedPlan: 0
    };
  }
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icons_mdi_check_circle = __vite_ssr_import_0__.default

  _push(`<!--[--><div class="py-12 border-t border-gray-100"><div class="container"><div class="flex"><div class="w-2/6"></div><div class="w-2/3"><h2 class="max-w-3xl ml-auto text-4xl font-semibold pl-2"> Compare Plans </h2></div></div></div></div><div class="container"><table class="${__vite_ssr_import_2__.ssrRenderClass([$props.isSticky ? 'head-sticky' : '', "table-head"])}"><thead><tr class="desktop-thead hidden lg:table-row"><th></th><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($props.plans, (plan, index) => {
    _push(`<th class="${
      __vite_ssr_import_2__.ssrRenderClass(plan.title + '-plan')
    }"><h3 class="text-2xl text-gray-900 font-semibold mb-2 capitalize">${
      __vite_ssr_import_2__.ssrInterpolate(plan.title)
    }</h3><a${
      __vite_ssr_import_2__.ssrRenderAttr("href", plan.link)
    } class="plan-button plan-button--visible"> Try Now! </a></th>`)
  })
  _push(`<!--]--></tr><tr class="responsive-thead lg:hidden"><th colspan="5" class="${
    __vite_ssr_import_2__.ssrRenderClass($props.plans[$data.selectedPlan].title + '-plan')
  }"><div class="flex justify-between items-center relative z-10"><h3 class="capitalize m-0">${
    __vite_ssr_import_2__.ssrInterpolate($props.plans[$data.selectedPlan].title)
  }</h3><select class="capitalize block px-4 border border-gray-400 rounded"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($props.plans, (plan, index) => {
    _push(`<option${
      __vite_ssr_import_2__.ssrRenderAttr("value", index)
    } class="capitalize">${
      __vite_ssr_import_2__.ssrInterpolate(plan.title)
    }</option>`)
  })
  _push(`<!--]--></select></div><a${__vite_ssr_import_2__.ssrRenderAttr("href", $props.plans[$data.selectedPlan].link)} class="plan-button plan-button--visible relative z-10"> Try Now! </a></th></tr></thead><tbody><tr><td colspan="5"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($data.tables, (table, index) => {
    _push(`<table class="compare-table"><thead><tr><th colspan="5" class="text-left"><div class="inline-flex items-center thead-title"><img${
      __vite_ssr_import_2__.ssrRenderAttr("src", 'images/' + table.icon)
    } alt=""><span class="pl-3 text-2xl">${
      __vite_ssr_import_2__.ssrInterpolate(table.title)
    }</span></div></th></tr></thead><tbody><!--[-->`)
    __vite_ssr_import_2__.ssrRenderList(table.data, (item, index) => {
      _push(`<tr><td>${
        __vite_ssr_import_2__.ssrInterpolate(item.label)
      }</td><td class="${
        __vite_ssr_import_2__.ssrRenderClass(
                      $props.plans[$data.selectedPlan].title == 'free'
                        ? 'table-cell'
                        : 'hidden lg:table-cell'
                    )
      }">`)
      if (item.free == 'yes') {
        _push(`<span class="text-2xl text-free">`)
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_icons_mdi_check_circle, null, null, _parent))
        _push(`</span>`)
      } else {
        _push(`<span>${__vite_ssr_import_2__.ssrInterpolate(item.free)}</span>`)
      }
      _push(`</td><td class="${__vite_ssr_import_2__.ssrRenderClass(
                      $props.plans[$data.selectedPlan].title == 'basic'
                        ? 'table-cell'
                        : 'hidden lg:table-cell'
                    )}">`)
      if (item.basic == 'yes') {
        _push(`<span class="text-2xl text-basic">`)
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_icons_mdi_check_circle, null, null, _parent))
        _push(`</span>`)
      } else {
        _push(`<span>${__vite_ssr_import_2__.ssrInterpolate(item.basic)}</span>`)
      }
      _push(`</td><td class="${__vite_ssr_import_2__.ssrRenderClass(
                      $props.plans[$data.selectedPlan].title == 'pro'
                        ? 'table-cell'
                        : 'hidden lg:table-cell'
                    )}">`)
      if (item.pro == 'yes') {
        _push(`<span class="text-2xl text-pro">`)
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_icons_mdi_check_circle, null, null, _parent))
        _push(`</span>`)
      } else {
        _push(`<span>${__vite_ssr_import_2__.ssrInterpolate(item.pro)}</span>`)
      }
      _push(`</td><td class="${__vite_ssr_import_2__.ssrRenderClass(
                      $props.plans[$data.selectedPlan].title == 'agency'
                        ? 'table-cell'
                        : 'hidden lg:table-cell'
                    )}">`)
      if (item.agency == 'yes') {
        _push(`<span class="text-2xl text-agency">`)
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_icons_mdi_check_circle, null, null, _parent))
        _push(`</span>`)
      } else {
        _push(`<span>${__vite_ssr_import_2__.ssrInterpolate(item.agency)}</span>`)
      }
      _push(`</td></tr>`)
    })
    _push(`<!--]--></tbody></table>`)
  })
  _push(`<!--]--></td></tr></tbody></table><div class="table-notes pb-20 pt-10"><p class="text-gray-500 font-semibold"><a href="javascript:;" class="text-primary-500">For Starters, try our Free Plan.</a> No strings attached. You can upgrade, downgrade or cancel anytime. </p><p class="text-sm text-gray-400">*Features are under development.</p></div></div><!--]-->`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/ComparePlans.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/ComparePlans.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/ComparePlans.vue"]]);
}


// --------------------
// Request: /components/icons/MdiCheckCircle.vue
// Parents: 
// - /components/ComparePlans.vue ($id_20b49029)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_da7a5c14 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  name: 'MdiCheckCircle'
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"></path></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/icons/MdiCheckCircle.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/icons/MdiCheckCircle.vue"]]);
}


// --------------------
// Request: /components/ComparePlans.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/ComparePlans.vue ($id_20b49029)
// Dependencies: 

// --------------------
const $id_61f0b4f3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".table-head{position:relative;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:100%}.table-head>thead tr th{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-bottom-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity));padding-bottom:3rem;position:-webkit-sticky;position:sticky;text-align:left;top:0;z-index:10}@media (min-width:1024px){.table-head>thead tr th{padding-left:.75rem;padding-right:.75rem}}.table-head>thead tr th:first-child{width:33.333333%}.table-head>thead tr th:first-child:before{--tw-border-opacity:1;background:#fff;border-bottom-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity));content:\"\";display:none;height:126px;left:-50%;position:absolute;top:0;width:50%}@media (min-width:1024px){.table-head>thead tr th:first-child:before{display:block}}.table-head>thead tr th:last-child:before{--tw-border-opacity:1;background:#fff;border-bottom-width:1px;border-color:rgb(243 244 246/var(--tw-border-opacity));content:\"\";height:126px;position:absolute;right:-50%;top:0;width:50%}.table-head>thead tr th:after{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity));bottom:-1px;content:\"\";height:1px;left:0;position:absolute;right:0}.table-head.head-sticky>thead tr th{padding-bottom:1.25rem;padding-top:1rem}.table-head.head-sticky>thead tr th h3{font-size:1rem;line-height:1.5rem;margin-bottom:.25rem}.table-head.head-sticky>thead tr th a{height:2rem}.table-head.head-sticky>thead tr th:first-child:before,.table-head.head-sticky>thead tr th:last-child:before{height:97px}.table-head.head-sticky .thead-title{position:absolute;top:-3rem}@media (max-width:1024px){.table-head>thead tr th:after{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));border-bottom-width:1px;border-color:rgb(216 228 239/var(--tw-border-opacity));bottom:-.25rem;height:100%;margin-left:-1.25rem;margin-right:-1.25rem;top:0}}.compare-card{padding-left:.75rem;padding-right:.75rem}.compare-table{position:relative;width:100%}.compare-table thead th{top:5rem;z-index:10}@media (min-width:1024px){.compare-table thead th{position:-webkit-sticky;position:sticky}}.compare-table+.compare-table{margin-top:6rem}.compare-table tr>th{padding-bottom:1.25rem;padding-top:1.25rem}.compare-table tr th{padding-top:1.25rem}.compare-table tr td{--tw-border-opacity:1;border-color:rgb(243 244 246/var(--tw-border-opacity));border-width:1px;padding:1.25rem;text-align:center;width:16.666667%}.compare-table tr td:first-child{border-left-width:0;padding-left:0;text-align:left;width:33.333333%}.compare-table tr td:last-child{border-right-width:0}.compare-table tr td span{display:inline-block;margin-left:auto;margin-right:auto}.text-free{--tw-text-opacity:1;color:rgb(48 79 254/var(--tw-text-opacity))}.text-basic{--tw-text-opacity:1;color:rgb(98 0 234/var(--tw-text-opacity))}.text-pro{--tw-text-opacity:1;color:rgb(170 0 255/var(--tw-text-opacity))}.text-agency{--tw-text-opacity:1;color:rgb(197 17 98/var(--tw-text-opacity))}";
}


// --------------------
// Request: /components/TheFaq.vue
// Parents: 
// - /pages/pricing.vue?macro=true ($id_eaf79752)
// - /pages/whatsapp-link-generator.vue?macro=true ($id_173c502b)
// - /pages/pricing.vue ($id_ee43cf6a)
// - /pages/whatsapp-link-generator.vue ($id_5a1e01a5)
// Dependencies: 
// - /components/TheAccordion.vue ($id_4318b5fb)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_03b536a4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheAccordion.vue");


const _sfc_main = {
  props: {
    faqs: Array
  },
  methods: {
    toggleAccordion() {}
  }
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheAccordion = __vite_ssr_import_0__.default

  _push(`<section${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "module module--faq bg-gray-100" }, _attrs))}><div class="container"><div class="block sm:flex"><div class="flex-1"><h2 class="text-3xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500"> Frequently Asked Questions </h2></div><div class="flex-1 pt-10 sm:pt-0"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($props.faqs, (faq, index) => {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_TheAccordion, {
      key: index,
      question: faq.question
    }, {
      default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`<p${
            _scopeId
          }>${
            __vite_ssr_import_2__.ssrInterpolate(faq.answer)
          }</p>`)
        } else {
          return [
            __vite_ssr_import_1__.createVNode("p", null, __vite_ssr_import_1__.toDisplayString(faq.answer), 1 /* TEXT */)
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
  })
  _push(`<!--]--></div></div></div></section>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheFaq.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheFaq.vue"]]);
}


// --------------------
// Request: /components/TheAccordion.vue
// Parents: 
// - /components/TheFaq.vue ($id_03b536a4)
// Dependencies: 
// - /components/icons/MdiMinus.vue ($id_f0e7bb6e)
// - /components/icons/MdiPlus.vue ($id_7d90f4ac)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/TheAccordion.vue?vue&type=style&index=0&lang.scss ($id_afd6ccf8)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_4318b5fb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/icons/MdiMinus.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/icons/MdiPlus.vue");


const _sfc_main = {
  props: {
    accordion: Object,
    question: String
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    isToggle() {
      console.log("click...");
      this.active = !this.active;
    }
  }
};

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icons_mdi_minus = __vite_ssr_import_0__.default
  const _component_icons_mdi_plus = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({
    class: ["accordion", $data.active ? 'accordion--active' : '']
  }, _attrs))}><h3 class="text-xl lg:text-2xl font-semibold text-gray-400 flex items-center"><div class="w-10">`)
  if ($data.active) {
    _push(__vite_ssr_import_3__.ssrRenderComponent(_component_icons_mdi_minus, { class: "text-gray-400" }, null, _parent))
  } else {
    _push(__vite_ssr_import_3__.ssrRenderComponent(_component_icons_mdi_plus, null, null, _parent))
  }
  _push(`</div><span class="flex-1">${
    __vite_ssr_import_3__.ssrInterpolate($props.question)
  }</span></h3><div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({
      style: ($data.active) ? null : { display: "none" },
      class: "mt-4 pl-10"
    }, _attrs))
  }>`)
  __vite_ssr_import_3__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/TheAccordion.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheAccordion.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheAccordion.vue"]]);
}


// --------------------
// Request: /components/icons/MdiMinus.vue
// Parents: 
// - /components/TheAccordion.vue ($id_4318b5fb)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f0e7bb6e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  name: 'MdiMinus'
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" d="M19 13H5v-2h14v2Z"></path></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/icons/MdiMinus.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/icons/MdiMinus.vue"]]);
}


// --------------------
// Request: /components/icons/MdiPlus.vue
// Parents: 
// - /components/TheAccordion.vue ($id_4318b5fb)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7d90f4ac = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  name: 'MdiPlus'
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"></path></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/icons/MdiPlus.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/icons/MdiPlus.vue"]]);
}


// --------------------
// Request: /components/TheAccordion.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/TheAccordion.vue ($id_4318b5fb)
// Dependencies: 

// --------------------
const $id_afd6ccf8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".accordion h3{cursor:pointer}.accordion.accordion--active h3{--tw-gradient-from:#304ffe;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(48,79,254,0));--tw-gradient-stops:var(--tw-gradient-from),#6200ea,var(--tw-gradient-to,rgba(98,0,234,0));--tw-gradient-stops:var(--tw-gradient-from),#a0f,var(--tw-gradient-to,rgba(170,0,255,0));--tw-gradient-to:#c51162;-webkit-background-clip:text;background-clip:text;background-image:linear-gradient(to right,var(--tw-gradient-stops));color:transparent}.accordion+.accordion{margin-top:2.5rem}.v-enter-active,.v-leave-active{transition:opacity .5s ease}.v-enter-from,.v-leave-to{opacity:0}";
}


// --------------------
// Request: /pages/store.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/composables.mjs ($id_f55c9203)
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/TheContent.vue ($id_7179c50a)
// - /components/TheBestFeature.vue ($id_df493032)
// - /components/FeatureRow.vue ($id_f81b4e2d)
// - /components/TheApps.vue ($id_fa304aa1)
// - /components/TheClients.vue ($id_4b526e20)
// - /components/TheCta.vue ($id_b5c1e281)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8929f789 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/composables.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheHero.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheReview.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/TheContent.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/TheBestFeature.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/FeatureRow.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/TheApps.vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/TheClients.vue");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/TheCta.vue");


// This will also work in `<script setup>`
/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
  layout: "default",
});
const _sfc_main = {
  data(){
    return{
      features:[
        {
          icon:"package.svg",
          title:"Product",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"shape.svg",
          title:"Categories",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"badges.svg",
          title:"Badges",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"charges.svg",
          title:"Charges",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"clipboard.svg",
          title:"Inventory",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"truck.svg",
          title:"Shipping",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        }
      ],
      productFeature:[
        {
          title:'Sell Ebooks, Software, Audiom Media etc',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Customize Checkout for Products',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      variableProductFeature:[
        {
          title:'Product Variants',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Create Custom Attributes',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      customisationFeature:[
        {
          title:'Checkout Add-ons',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'User Authentication via WhatsApp',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      discountFeature:[
        {
          title:'Coupon Management',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'User Restriction & Usage Limits',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ]
    }
  }
}

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHero = __vite_ssr_import_1__.default
  const _component_TheReview = __vite_ssr_import_2__.default
  const _component_TheContent = __vite_ssr_import_3__.default
  const _component_TheBestFeature = __vite_ssr_import_4__.default
  const _component_FeatureRow = __vite_ssr_import_5__.default
  const _component_TheApps = __vite_ssr_import_6__.default
  const _component_TheClients = __vite_ssr_import_7__.default
  const _component_TheCta = __vite_ssr_import_8__.default

  _push(`<!--[--><!-- Hero Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheHero, {
    title: "Simplest and Easiest Way",
    subTitle: "to Create Your Online Store",
    textContent: "Be a part of the Vepaar Community, with oveer 100k eentrepreneurs who have used Vepaar to sell online, offline, and via social media. Click the button below to start your digital store in minutes!",
    href: "#"
  }, null, _parent))
  _push(`<!-- Hero Section: End --><!-- Review Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheReview, { color: "light" }, null, _parent))
  _push(`<!-- Review Section: End --><!-- Content Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheContent, {
    title: "Dashboard And Orders",
    subTitle: "Lorem Ipsum Dolor Sit Amet.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat.",
    image: "order-screenshot.jpg"
  }, null, _parent))
  _push(`<!-- Content Section: End --><!-- Best Feature Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheBestFeature, {
    class: "module--feature-bg",
    title: "We Empathise Your Needs And Provide",
    subTitle: "You Best Feature To Stimulate The WhatsApp.",
    content: "Vepaar provides you with a wide range of WhatsApp CRM features that you can use to take your business to the next level. Be it creating customer profiles, sending personalized replies, saving messages, or creating your entire online business page, Vepaar has it all.",
    features: $data.features
  }, null, _parent))
  _push(`<!-- Best Feature Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Sell Digital Products",
    points: $data.productFeature,
    image: "sell-digital-product.jpg"
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Create Variable Products",
    isReverse: "",
    points: $data.variableProductFeature,
    image: "variable-product.jpg"
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Checkout Customisation & Add-ons",
    points: $data.customisationFeature,
    image: "checkout-customisation.jpg"
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Increase your sales with Discount Coupons",
    points: $data.discountFeature,
    image: "discount-coupons.jpg",
    isReverse: ""
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- The Apps: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheApps, { image: "payment-methods.png" }, {
    default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h2 class="text-2xl lg:text-5xl font-semibold text-white"${
          _scopeId
        }><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500"${
          _scopeId
        }>Payment Integrations</span> to make Vepaar transactions smother than ever! </h2>`)
      } else {
        return [
          __vite_ssr_import_9__.createVNode("h2", { class: "text-2xl lg:text-5xl font-semibold text-white" }, [
            __vite_ssr_import_9__.createVNode("span", { class: "text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500" }, "Payment Integrations"),
            __vite_ssr_import_9__.createTextVNode(" to make Vepaar transactions smother than ever! ")
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<!-- The Apps: End --><!-- Clients Logo: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheClients, null, null, _parent))
  _push(`<!-- Clients Logo: End --><!-- The CTA: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheCta, {
    tagline: "Trusted by 100k+ Businesses Worldwide",
    title: "Make your business the next obsession.",
    description: "Be a part of the Vepaar Commmunity, with over 100k entrepreneurs who have used Vepaar to sell online, offline, and via social media. Click the button to start your digital storre in minutes!"
  }, null, _parent))
  _push(`<!-- The CTA: End --><!--]-->`)
}


const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/store.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_12__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/store.vue"]])
const meta = {
  layout: "default",
}
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /pages/whatsapp-link-generator.vue?macro=true
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheLinkForm.vue ($id_77d2b478)
// - /components/TheSocialMediaCounter.vue ($id_9b01da9c)
// - /components/TheLinkSteps.vue ($id_586b6059)
// - /components/TheFaq.vue ($id_03b536a4)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/TheCta.vue ($id_b5c1e281)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_173c502b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheHero.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheLinkForm.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheSocialMediaCounter.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/TheLinkSteps.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/TheFaq.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/TheReview.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/TheCta.vue");


const _sfc_main = {
  data() {
    return {
      faqs: [
        {
          question:
            "How much does it charge to generate a personalized WhatsApp link?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "Why is the website asking if I want to send message?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "Does this link work in my country?",
          answer:
            "Yes, the WhatsApp Link Generator will work in countries where WhatsApp is available."
        },
        {
          question: "Where can I report a bug or an issue?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        }
      ]
    };
  }
};

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHero = __vite_ssr_import_0__.default
  const _component_TheLinkForm = __vite_ssr_import_1__.default
  const _component_TheSocialMediaCounter = __vite_ssr_import_2__.default
  const _component_TheLinkSteps = __vite_ssr_import_3__.default
  const _component_TheFaq = __vite_ssr_import_4__.default
  const _component_TheReview = __vite_ssr_import_5__.default
  const _component_TheCta = __vite_ssr_import_6__.default

  _push(`<!--[--><!-- Hero Section: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheHero, {
    title: "WhatsApp Link",
    subTitle: "in a Single Click",
    isHeightAuto: ""
  }, null, _parent))
  _push(`<!-- Hero Section: End --><!-- LinkForm: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheLinkForm, null, null, _parent))
  _push(`<!-- LinkForm: End --><!-- SocialMedia Counter: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheSocialMediaCounter, null, null, _parent))
  _push(`<!-- SocialMedia Counter: End --><!-- WhatsApp Link Steps: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheLinkSteps, null, null, _parent))
  _push(`<!-- WhatsApp Link Steps: End --><!-- FAQ : Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheFaq, { faqs: $data.faqs }, null, _parent))
  _push(`<!-- FAQ : End --><!-- Review Section: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheReview, { color: "light" }, null, _parent))
  _push(`<!-- Review Section: End --><!-- The CTA: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheCta, {
    tagline: "Trusted by 100k+ Business Worldwide",
    title: "Get Started with Vepaar today!",
    description: "One of the best free apps for small business owners! With our powerful yet simple tools, bring your store to the global platform at ease."
  }, null, _parent))
  _push(`<!-- The CTA: End --><!--]-->`)
}


const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/whatsapp-link-generator.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_10__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/whatsapp-link-generator.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/TheLinkForm.vue
// Parents: 
// - /pages/whatsapp-link-generator.vue?macro=true ($id_173c502b)
// - /pages/whatsapp-link-generator.vue ($id_5a1e01a5)
// Dependencies: 
// - /components/TheButton.vue ($id_00941411)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/TheLinkForm.vue?vue&type=style&index=0&lang.scss ($id_29bed0f8)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_77d2b478 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheButton.vue");


const _sfc_main = {
  data() {
    return {
      countryCode: "+91",
      codeList: [
        {
          value: "+90"
        },
        {
          value: "+91"
        },
        {
          value: "+92"
        },
        {
          value: "+93"
        },
        {
          value: "+94"
        },
        {
          value: "+95"
        },
        {
          value: "+96"
        },
        {
          value: "+97"
        },
        {
          value: "+98"
        },
        {
          value: "+99"
        },
        {
          value: "+100"
        }
      ]
    };
  }
};

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_button = __vite_ssr_import_0__.default

  _push(`<section${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "module module--form" }, _attrs))}><div class="container"><form class="max-w-xl mx-auto shadow-sm bg-white p-8 rounded-lg"><div class="form__input"><label for="">Your WhatsApp Number</label><div class="flex"><select class="input-group"><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($data.codeList, (code, index) => {
    _push(`<option${
      __vite_ssr_import_2__.ssrRenderAttr("value", code.value)
    }>${
      __vite_ssr_import_2__.ssrInterpolate(code.value)
    }</option>`)
  })
  _push(`<!--]--></select><input type="tel"${
    __vite_ssr_import_2__.ssrRenderAttr("value", _ctx.whatsAppNumber)
  }></div></div><div class="form__input"><label for="">What message do you want your customers to see when they contact you?</label><textarea>${
    __vite_ssr_import_2__.ssrInterpolate(_ctx.message)
  }</textarea></div><div class="form__action">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_the_button, { color: "accent" }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Get Link`)
      } else {
        return [
          __vite_ssr_import_1__.createTextVNode("Get Link")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></form></div></section>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/TheLinkForm.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheLinkForm.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheLinkForm.vue"]]);
}


// --------------------
// Request: /components/TheLinkForm.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/TheLinkForm.vue ($id_77d2b478)
// Dependencies: 

// --------------------
const $id_29bed0f8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".module--form{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.form__input label{display:block;font-weight:600;margin-bottom:.5rem}.form__input+.form__input{margin-top:2.5rem}.form__input select{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity));border-bottom-left-radius:.375rem;border-top-left-radius:.375rem;height:3rem;padding-left:.5rem;padding-right:.5rem}.form__input select:focus{outline:2px solid transparent;outline-offset:2px}.form__input input[type=tel]{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;width:100%}.form__input input[type=tel]:focus{outline:2px solid transparent;outline-offset:2px}.form__input textarea{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity));border-radius:.375rem;height:10rem;padding:1rem;width:100%}.form__input textarea:focus{outline:2px solid transparent;outline-offset:2px}.form__action{margin-top:2.5rem}";
}


// --------------------
// Request: /components/TheSocialMediaCounter.vue
// Parents: 
// - /pages/whatsapp-link-generator.vue?macro=true ($id_173c502b)
// - /pages/whatsapp-link-generator.vue ($id_5a1e01a5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/TheSocialMediaCounter.vue?vue&type=style&index=0&lang.css ($id_490a6f8f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9b01da9c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "module module--social" }, _attrs))}><div class="container"><div class="block sm:flex"><div class="max-w-2xl"><img src="images/social-media-counter.png" alt=""></div><div class="flex-1 sm:pl-10 text-left sm:text-right mt-10 sm:mt-0"><h2 class="text-3xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500"> Check These Examples </h2><p class="text-gray-400 mt-5 text-lg"> Share your customized WhatsApp link on Twitter, post on Facebook as well as on Instagram </p></div></div></div></section>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheSocialMediaCounter.vue?vue&type=style&index=0&lang.css");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheSocialMediaCounter.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheSocialMediaCounter.vue"]]);
}


// --------------------
// Request: /components/TheSocialMediaCounter.vue?vue&type=style&index=0&lang.css
// Parents: 
// - /components/TheSocialMediaCounter.vue ($id_9b01da9c)
// Dependencies: 

// --------------------
const $id_490a6f8f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".module--social{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity));padding-bottom:3.5rem;padding-top:3.5rem}@media (min-width:1024px){.module--social{padding-bottom:7rem;padding-top:7rem}}";
}


// --------------------
// Request: /components/TheLinkSteps.vue
// Parents: 
// - /pages/whatsapp-link-generator.vue?macro=true ($id_173c502b)
// - /pages/whatsapp-link-generator.vue ($id_5a1e01a5)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/TheLinkSteps.vue?vue&type=style&index=0&lang.scss ($id_da9a82b8)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_586b6059 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      steps: [
        {
          icon: "whatsapp-accent.svg",
          title: "Open WhatsApp Link Generator",
          description: "Enter your phone number with correct country code."
        },
        {
          icon: "default-message.svg",
          title: "Set Default Message",
          description:
            "Enter the default message that you would like your customers to see."
        },
        {
          icon: "whatsapp-link.svg",
          title: "Get Your WhatsApp Link",
          description:
            "Click on ‘Get Link’ button to generate your customised WhatsApp Link. "
        }
      ]
    };
  }
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "module module--links" }, _attrs))}><div class="container"><div class="sm:flex"><div class="flex-1 sm:pr-10"><h2 class="text-3xl lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500"> It&#39;s Easy! Just <span class="block">3 Simple Steps</span></h2><p class="text-gray-400 mt-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. </p></div><div class="flex-1 sm:pl-10 pt-10 sm:pt-0"><div class="link-list"><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($data.steps, (step, index) => {
    _push(`<div class="link-card"><img${
      __vite_ssr_import_1__.ssrRenderAttr("src", 'images/' + step.icon)
    } alt="" class="link-card__icon"><h3 class="link-card__title">${
      __vite_ssr_import_1__.ssrInterpolate(step.title)
    }</h3><p class="link-card__text">${
      __vite_ssr_import_1__.ssrInterpolate(step.description)
    }</p></div>`)
  })
  _push(`<!--]--></div></div></div></div></section>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheLinkSteps.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheLinkSteps.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheLinkSteps.vue"]]);
}


// --------------------
// Request: /components/TheLinkSteps.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/TheLinkSteps.vue ($id_586b6059)
// Dependencies: 

// --------------------
const $id_da9a82b8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".link-list{padding-bottom:2.5rem;position:relative}@media (min-width:640px){.link-list{padding-bottom:7rem}}.link-list:after{--tw-bg-opacity:1;background-color:rgb(216 228 239/var(--tw-bg-opacity));bottom:0;content:\"\";height:100%;left:0;position:absolute;top:0;width:3px}.link-card{padding-left:2.5rem;position:relative;text-align:left}@media (min-width:640px){.link-card{padding-left:5rem}}.link-card__title{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity));font-size:1.25rem;font-weight:600;line-height:1.5rem;margin-bottom:.5rem;margin-top:.5rem;max-width:20rem}@media (min-width:640px){.link-card__title{font-size:1.5rem;line-height:1.75rem}}.link-card__text{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity));max-width:20rem}.link-card:before{--tw-bg-opacity:1;background-color:rgb(216 228 239/var(--tw-bg-opacity));content:\"\";height:3px;left:0;position:absolute;top:2rem;width:1.25rem}@media (min-width:640px){.link-card:before{width:2rem}}.link-card+.link-card{margin-top:2.5rem}";
}


// --------------------
// Request: /pages/aboutus.vue
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/Mission.vue ($id_4d392f66)
// - /components/VepaarStartup.vue ($id_ae0d844e)
// - /components/Team.vue ($id_5e9944c5)
// - /components/TheUsersCounter.vue ($id_4c8955c0)
// - /components/OurJournery.vue ($id_621f0a3b)
// - /components/TheCta.vue ($id_b5c1e281)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9db4de97 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheHero.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheReview.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Mission.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/VepaarStartup.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/Team.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/TheUsersCounter.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/OurJournery.vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/TheCta.vue");

const _sfc_main = {}
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHero = __vite_ssr_import_0__.default
  const _component_TheReview = __vite_ssr_import_1__.default
  const _component_Mission = __vite_ssr_import_2__.default
  const _component_VepaarStartup = __vite_ssr_import_3__.default
  const _component_Team = __vite_ssr_import_4__.default
  const _component_TheUsersCounter = __vite_ssr_import_5__.default
  const _component_OurJournery = __vite_ssr_import_6__.default
  const _component_TheCta = __vite_ssr_import_7__.default

  _push(`<!--[--><!-- Hero Section: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_TheHero, {
    title: "About Us",
    subTitle: "to have an online presence.",
    isHeightAuto: ""
  }, null, _parent))
  _push(`<!-- Hero Section: End --><!-- Review Section: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_TheReview, { color: "light" }, null, _parent))
  _push(`<!-- Review Section: End --><!-- Mission Section: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_Mission, null, null, _parent))
  _push(`<!-- Mission Section: End --><!-- Vepaar Startup Section: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_VepaarStartup, null, null, _parent))
  _push(`<!-- Vepaar Startup Section: Start --><!-- Team Section: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_Team, null, null, _parent))
  _push(`<!-- Team Section: End --><!-- Users Section: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_TheUsersCounter, null, null, _parent))
  _push(`<!-- Users Section: End --><!-- Our Journey Section: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_OurJournery, null, null, _parent))
  _push(`<!-- Our Journey Section: End --><!-- The CTA: Start -->`)
  _push(__vite_ssr_import_9__.ssrRenderComponent(_component_TheCta, {
    tagline: "Trusted by 100k+ Business Worldwide",
    title: "Get Started with Vepaar today!",
    description: "One of the best free apps for small business owners! With our powerful yet simple tools, bring your store to the global platform at ease."
  }, null, _parent))
  _push(`<!-- The CTA: End --><!--]-->`)
}


const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_10__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/aboutus.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_11__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/aboutus.vue"]]);
}


// --------------------
// Request: /pages/crm.vue
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/composables.mjs ($id_f55c9203)
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/TheContent.vue ($id_7179c50a)
// - /components/TheBestFeature.vue ($id_df493032)
// - /components/FeatureRow.vue ($id_f81b4e2d)
// - /components/TheApps.vue ($id_fa304aa1)
// - /components/TheClients.vue ($id_4b526e20)
// - /components/TheCta.vue ($id_b5c1e281)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e46e1fbe = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/composables.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheHero.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheReview.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/TheContent.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/TheBestFeature.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/FeatureRow.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/TheApps.vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/TheClients.vue");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/TheCta.vue");


// This will also work in `<script setup>`
/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
  layout: "default",
});
const _sfc_main = {
  data(){
    return{
      features:[
        {
          icon:"filter.svg",
          title:"Sales Funnel",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"tags.svg",
          title:"Contact Tags",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"profile.svg",
          title:"Build Customer Profile",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"ticket.svg",
          title:"Ticket Management",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"bulk-import.svg",
          title:"Bulk Import/Export",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"chrome-extension.svg",
          title:"Chrome Extension",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        }
      ],
      customerFeature:[
        {
          title:'Save Important Customer Data',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Sync Leads With Different CRMs',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      notesFeature:[
        {
          title:'Log Multiple Notes',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Record Sales Activity',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      messageFeature:[
        {
          title:'Save Important Text Messages',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Save Video, PDF, Audio Messages',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      chatSyncFeature:[
        {
          title:'Sync With Your Phone',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Export Synced Conversations',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ]
    }
  }
}

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHero = __vite_ssr_import_1__.default
  const _component_TheReview = __vite_ssr_import_2__.default
  const _component_TheContent = __vite_ssr_import_3__.default
  const _component_TheBestFeature = __vite_ssr_import_4__.default
  const _component_FeatureRow = __vite_ssr_import_5__.default
  const _component_TheApps = __vite_ssr_import_6__.default
  const _component_TheClients = __vite_ssr_import_7__.default
  const _component_TheCta = __vite_ssr_import_8__.default

  _push(`<!--[--><!-- Hero Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheHero, {
    title: "Power Up Your Whatsapp Web",
    subTitle: "to Improve Your Relationship With Your Customer.\n",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat."
  }, null, _parent))
  _push(`<!-- Hero Section: End --><!-- Review Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheReview, { color: "light" }, null, _parent))
  _push(`<!-- Review Section: End --><!-- Content Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheContent, {
    title: "Dashboard And Orders",
    subTitle: "Lorem Ipsum Dolor Sit Amet.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat.",
    image: "extension.jpg"
  }, null, _parent))
  _push(`<!-- Content Section: End --><!-- Best Feature Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheBestFeature, {
    class: "module--feature-bg",
    title: "We Empathise Your Needs And Provide",
    subTitle: "You Best Feature To Stimulate The WhatsApp.",
    content: "Vepaar provides you with a wide range of WhatsApp CRM features that you can use to take your business to the next level. Be it creating customer profiles, sending personalized replies, saving messages, or creating your entire online business page, Vepaar has it all.",
    features: $data.features
  }, null, _parent))
  _push(`<!-- Best Feature Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Build Customer Profile From WhatsApp",
    points: $data.customerFeature,
    image: "customer-profile-screenshot.jpg"
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Log sales activity While chatting on WhatsApp",
    isReverse: "",
    points: $data.notesFeature,
    image: "notes-screenshot.jpg"
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Save messages, Media from WhatsApp",
    points: $data.messageFeature,
    image: "messages-screenshot.jpg"
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Auto sync all the conversations from WhatsApp",
    points: $data.chatSyncFeature,
    image: "chat-saved-screenshot.jpg",
    isReverse: ""
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- The Apps: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheApps, { image: "app-pattern.png" }, {
    default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h2 class="text-2xl lg:text-5xl font-semibold text-white"${
          _scopeId
        }> Your Chrome Extension is Integrated with <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500"${
          _scopeId
        }>Business Apps you use every day.</span></h2>`)
      } else {
        return [
          __vite_ssr_import_9__.createVNode("h2", { class: "text-2xl lg:text-5xl font-semibold text-white" }, [
            __vite_ssr_import_9__.createTextVNode(" Your Chrome Extension is Integrated with "),
            __vite_ssr_import_9__.createVNode("span", { class: "text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500" }, "Business Apps you use every day.")
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<!-- The Apps: End --><!-- Clients Logo: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheClients, null, null, _parent))
  _push(`<!-- Clients Logo: End --><!-- The CTA: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheCta, {
    tagline: "Trusted by 100k+ Businesses Worldwide",
    title: "#1 CRM for WhatsApp",
    description: "Vepaar helps you semi-automate your business workflow with CRM-like features. You can create customer profiles, save media and messages, send personalized quick replies, organize WhatsApp polls, build your e-commerce store, launch your online business page and so much more!"
  }, null, _parent))
  _push(`<!-- The CTA: End --><!--]-->`)
}


const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/crm.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_12__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/crm.vue"]]);
}


// --------------------
// Request: /pages/download.vue
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /components/TheDownload.vue ($id_22e80545)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_35dd2ec2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheDownload.vue");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheDownload = __vite_ssr_import_0__.default

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_TheDownload, _attrs, null, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/download.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/download.vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/composables.mjs ($id_f55c9203)
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheContent.vue ($id_7179c50a)
// - /components/TheBestFeature.vue ($id_df493032)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/TheRow.vue ($id_61e05cae)
// - /components/TheSupport.vue ($id_2ee8f308)
// - /components/TheTestimonial.vue ($id_ac5b85a4)
// - /components/TheUsersCounter.vue ($id_4c8955c0)
// - /components/TheClients.vue ($id_4b526e20)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/composables.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheHero.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheContent.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/TheBestFeature.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/TheReview.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/TheRow.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/TheSupport.vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/TheTestimonial.vue");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/TheUsersCounter.vue");

const __vite_ssr_import_9__ = await __vite_ssr_import__("/components/TheClients.vue");


// This will also work in `<script setup>`
/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
  layout: "default",
});
const _sfc_main = {
  data(){
    return{
      features1:[
        {
          icon:"reply-icon.svg",
          title:"Customer Profile",
          text:"Build your customer profile so that we have a record of your details and the conversations we have had in the past."
        },
        {
          icon:"reply-icon.svg",
          title:"Sales Funnels/Tags",
          text:"Sales Funnels allow you to filter your leads as per some funnel stages. The feature has proven to be effective in converting your leads to customers."
        },
        {
          icon:"reply-icon.svg",
          title:"AutoSave Chat",
          text:"This feature helps you Sync the WhatsApp chat of any customer or group. You can view these chats or media files from your Vepaar account."
        },
        {
          icon:"reply-icon.svg",
          title:"Ticket & Activity Management",
          text:"Manage your customer tickets easily and ensure seamless customer support. Prioritize tickets and update their status effortlessly."
        }
      ],
      features2:[
        {
          icon:"reply-icon.svg",
          title:"Variable/Digital Products",
          text:"Allow a set of variations on a product while configuring a number of variables at your convenience. Vepaar even facilitates to sell digital products like eBooks, licenses, etc."
        },
        {
          icon:"reply-icon.svg",
          title:"Checkout Configurations",
          text:"Now, you can have your custom-made checkout page where you can add new steps and reduce some. "
        },
        {
          icon:"reply-icon.svg",
          title:"Inventory Management",
          text:"Keep track of your products and their stock from anywhere with the most efficient inventory management features. "
        },
        {
          icon:"reply-icon.svg",
          title:"Multiple Payment Integrations",
          text:"Your customers can have the luxury of choosing from a list of payment gateways from your online shop."
        }
      ]
    }
  }
}

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHero = __vite_ssr_import_1__.default
  const _component_TheContent = __vite_ssr_import_2__.default
  const _component_TheBestFeature = __vite_ssr_import_3__.default
  const _component_TheReview = __vite_ssr_import_4__.default
  const _component_TheRow = __vite_ssr_import_5__.default
  const _component_TheSupport = __vite_ssr_import_6__.default
  const _component_TheTestimonial = __vite_ssr_import_7__.default
  const _component_TheUsersCounter = __vite_ssr_import_8__.default
  const _component_TheClients = __vite_ssr_import_9__.default

  _push(`<!--[--><!-- Hero Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheHero, {
    title: "One-stop solution",
    subTitle: "to managing your business",
    textContent: "Without any possible doubt, reaching out to customers via WhatsApp is the next big thing in business! Vepaar provides you with the essential tools that allow you to manage your business effortlessly without diving deep into the technicalities. \n"
  }, null, _parent))
  _push(`<!-- Hero Section: End --><!-- Content Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheContent, {
    title: "WhatsApp CRM",
    subTitle: "Use WhatsApp to expand your business",
    content: "Allow your business to reap the benefits of the most commonly used messaging apps in the world.",
    image: "extension.jpg"
  }, null, _parent))
  _push(`<!-- Content Section: End --><!-- Best Feature Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheBestFeature, {
    title: "We acknowledge your business needs thus bring forth the most",
    subTitle: "remarkable feature WhatsApp has to offer",
    content: "Vepaar provides you with a wide range of WhatsApp CRM features that you can use to take your business to the next level. Be it creating customer profiles, sending personalized replies, saving messages, or creating your entire online business page, Vepaar has it all.  \n",
    isFeatureRow: true,
    features: $data.features1
  }, null, _parent))
  _push(`<!-- Best Feature Section: End --><!-- Review Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheReview, null, null, _parent))
  _push(`<!-- Review Section: End --><!-- Content Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheContent, {
    title: "Selling Made Easy",
    subTitle: "Vepaar store makes everything easy for your online business",
    content: "Many easy selling features are made available for you",
    image: "admin-panel.jpg"
  }, null, _parent))
  _push(`<!-- Content Section: End --><!-- Best Feature Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheBestFeature, {
    title: "Businesses all over ",
    subTitle: "the world count on us",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat.",
    features: $data.features2,
    isFeatureRow: true
  }, null, _parent))
  _push(`<!-- Best Feature Section: End --><!-- Row Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheRow, {
    title: "WhatsApp poll",
    subTitle: "Gather reliable data through WhatsApp Poll",
    content: "You can make use of polls to collect feedback from clients. Polls provide first-hand information which can be beneficial in improving your business. ",
    image: "whatsapp-poll.png"
  }, null, _parent))
  _push(`<!-- Row Section: End --><!-- Row Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheRow, {
    title: "Create WhatsApp Link",
    subTitle: "Send Predefined Messages",
    content: "Vepaar allows you to create your WhatsApp Link, which can be easily shared on social media. Your customers can use this link to initiate conversations with you on WhatsApp.",
    image: "whatsapp-link.png",
    isReverse: true
  }, null, _parent))
  _push(`<!-- Row Section: End --><!-- Support Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheSupport, null, null, _parent))
  _push(`<!-- Support Section: End --><!-- Testimonial Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheTestimonial, null, null, _parent))
  _push(`<!-- Testimonial Section: End --><!-- Users Section: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheUsersCounter, null, null, _parent))
  _push(`<!-- Users Section: End --><!-- Clients Logo: Start -->`)
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_TheClients, null, null, _parent))
  _push(`<!-- Clients Logo: End --><!--]-->`)
}


const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_12__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_13__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_13__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/index.vue"]]);
}


// --------------------
// Request: /pages/links.vue
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/links.vue?vue&type=style&index=0&scoped=true&lang.scss ($id_069e1f32)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_49b7d808 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "module-page" }, _attrs))} data-v-0b16d2e0><div class="container" data-v-0b16d2e0><h2 class="text-4xl" data-v-0b16d2e0>Page links:-</h2><div class="page-link" data-v-0b16d2e0><a href="/" data-v-0b16d2e0> Home </a><a href="/crm" data-v-0b16d2e0> CRM </a><a href="/store" data-v-0b16d2e0> Store </a><a href="/polls" data-v-0b16d2e0> Polls </a><a href="/whatsapp-link-generator" data-v-0b16d2e0> Whatsapp Link Generator </a><a href="/aboutus" data-v-0b16d2e0> About Us </a><a href="/pricing" data-v-0b16d2e0> Pricing </a><a href="/download" data-v-0b16d2e0> Download </a></div></div></div>`)
}

const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/links.vue?vue&type=style&index=0&scoped=true&lang.scss");


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/links.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0b16d2e0"],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/links.vue"]]);
}


// --------------------
// Request: /pages/polls.vue
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/composables.mjs ($id_f55c9203)
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/TheContent.vue ($id_7179c50a)
// - /components/TheBestFeature.vue ($id_df493032)
// - /components/ThePollSteps.vue ($id_702c25e6)
// - /components/TheCta.vue ($id_b5c1e281)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_4296044b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/composables.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheHero.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheReview.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/TheContent.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/TheBestFeature.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/ThePollSteps.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/TheCta.vue");


// This will also work in `<script setup>`
/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
  layout: "default",
});
const _sfc_main = {
  data(){
    return{
      features:[
        {
          icon:"multiple-votes.svg",
          title:"Single or Multiple Votes",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"result.svg",
          title:"Public or Private Result",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"data.svg",
          title:"See Data of Poll in Real Time",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"poll-status.svg",
          title:"Regulate Poll Status",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"multi-language.svg",
          title:"Multi-Language Poll",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"export-result.svg",
          title:"Export Poll Result in .pdf,.xls, etc",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"theme.svg",
          title:"Personalise Theme of Poll Result",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"user-feedback.svg",
          title:"User Feedback",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"market-research.svg",
          title:"Market Research",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"customer-engagement.svg",
          title:"Customer Engagement",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"social-media-research.svg",
          title:"Social Media Research",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"short-survey.svg",
          title:"Short Survey",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"learn-about-audience.svg",
          title:"Learn about your Audience",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        }
      ]
    }
  }
}

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHero = __vite_ssr_import_1__.default
  const _component_TheReview = __vite_ssr_import_2__.default
  const _component_TheContent = __vite_ssr_import_3__.default
  const _component_TheBestFeature = __vite_ssr_import_4__.default
  const _component_ThePollSteps = __vite_ssr_import_5__.default
  const _component_TheCta = __vite_ssr_import_6__.default

  _push(`<!--[--><!-- Hero Section: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheHero, {
    title: "Understand users in better way",
    subTitle: "through WhatsApp Poll.",
    textContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat.",
    href: "#"
  }, null, _parent))
  _push(`<!-- Hero Section: End --><!-- Review Section: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheReview, { color: "light" }, null, _parent))
  _push(`<!-- Review Section: End --><!-- Content Section: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheContent, {
    title: "Dashboard And Orders",
    subTitle: "Lorem Ipsum Dolor Sit Amet.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat.",
    image: "polls-screenshot.jpg"
  }, null, _parent))
  _push(`<!-- Content Section: End --><!-- Best Feature Section: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheBestFeature, {
    class: "module--feature-bg",
    title: "Features that help you build quick polls",
    subTitle: "and share it on WhatsApp.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat.",
    features: $data.features,
    cols3: ""
  }, null, _parent))
  _push(`<!-- Best Feature Section: End --><!-- Poll Step: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_ThePollSteps, null, null, _parent))
  _push(`<!-- Poll Step: Start --><!-- The CTA: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheCta, {
    tagline: "Powered by Official WhatsApp Business APIs",
    title: "Polls on WhatsApp",
    description: "Nothing builds brand loyalty like showing your customers that you value their opinions over everything else. Use WhatsApp polls to engage with your buyers and gather important data that you can segment and implement in your future marketing campaigns."
  }, null, _parent))
  _push(`<!-- The CTA: End --><!--]-->`)
}


const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/polls.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_10__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/polls.vue"]]);
}


// --------------------
// Request: /pages/pricing.vue
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/PricingTab.vue ($id_5aada895)
// - /components/ComparePlans.vue ($id_20b49029)
// - /components/TheFaq.vue ($id_03b536a4)
// - /components/TheClients.vue ($id_4b526e20)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ee43cf6a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheHero.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheReview.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/PricingTab.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/ComparePlans.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/TheFaq.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/TheClients.vue");


const _sfc_main = {
  data() {
    return {
      faqs: [
        {
          question: "What is Vepaar?",
          answer:
            "Vepaar is an app (Chrome Extension+Android/iOS app) which extends functionalities of the official WhatsApp Web/Mobile app. We’ve just wrapped the WhatsApp Web into a container which does the magic."
        },
        {
          question: "How does Vepaar help my business?",
          answer:
            "Vepaar is an app (Chrome Extension+Android/iOS app) which extends functionalities of the official WhatsApp Web/Mobile app. We’ve just wrapped the WhatsApp Web into a container which does the magic."
        },
        {
          question: "What is the relation between WhatsApp and Vepaar?",
          answer:
            "Yes, the WhatsApp Link Generator will work in countries where WhatsApp is available."
        },
        {
          question:
            "Will you be able to send messages to contacts on behalf of me or my contact number?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "What languages are available?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "Do you charge commission on orders?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "I have a technical problem, whom should I email?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "How do I pay for the paid plans?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        }
      ],
      plans: [
        {
          title: "free",
          link: "#"
        },
        {
          title: "basic",
          link: "#"
        },
        {
          title: "pro",
          link: "#"
        },
        {
          title: "agency",
          link: "#"
        }
      ],
      isSticky: false,
      scrollPosition: null
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrollPosition = window.scrollY;
      var moduleHeight = document.getElementById("section-offset");
      var topPos = moduleHeight.offsetHeight + 200;
      if (this.scrollPosition >= topPos) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    }
  }
};

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHero = __vite_ssr_import_0__.default
  const _component_TheReview = __vite_ssr_import_1__.default
  const _component_PricingTab = __vite_ssr_import_2__.default
  const _component_ComparePlans = __vite_ssr_import_3__.default
  const _component_TheFaq = __vite_ssr_import_4__.default
  const _component_TheClients = __vite_ssr_import_5__.default

  _push(`<!--[--><div id="section-offset"><!-- Hero Section: Start -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_TheHero, {
    title: "Pricing",
    subTitle: "Start free",
    isHeightAuto: ""
  }, null, _parent))
  _push(`<!-- Hero Section: End --><!-- Review Section: Start -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_TheReview, { color: "light" }, null, _parent))
  _push(`<!-- Review Section: End --><!-- Pricing Tab: Start -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_PricingTab, null, null, _parent))
  _push(`<!-- Pricing Tab: End --></div><!-- Compare Plans: Start -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_ComparePlans, {
    plans: $data.plans,
    isSticky: $data.isSticky
  }, null, _parent))
  _push(`<!-- Compare Plans: End --><!-- FAQ : Start -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_TheFaq, { faqs: $data.faqs }, null, _parent))
  _push(`<!-- FAQ : End --><!-- Clients Logo: Start -->`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_TheClients, null, null, _parent))
  _push(`<!-- Clients Logo: End --><!--]-->`)
}


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/pricing.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/pricing.vue"]]);
}


// --------------------
// Request: /pages/store.vue
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/composables.mjs ($id_f55c9203)
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/TheContent.vue ($id_7179c50a)
// - /components/TheBestFeature.vue ($id_df493032)
// - /components/FeatureRow.vue ($id_f81b4e2d)
// - /components/TheApps.vue ($id_fa304aa1)
// - /components/TheClients.vue ($id_4b526e20)
// - /components/TheCta.vue ($id_b5c1e281)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5953fbb6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/composables.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheHero.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheReview.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/TheContent.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/TheBestFeature.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/FeatureRow.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/TheApps.vue");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/TheClients.vue");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/TheCta.vue");


// This will also work in `<script setup>`
/*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
  layout: "default",
});
const _sfc_main = {
  data(){
    return{
      features:[
        {
          icon:"package.svg",
          title:"Product",
          text:"Understand your user in a better way by collecting information about Their feedback,Market Research etc."
        },
        {
          icon:"shape.svg",
          title:"Categories",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"badges.svg",
          title:"Badges",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"charges.svg",
          title:"Charges",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"clipboard.svg",
          title:"Inventory",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        },
        {
          icon:"truck.svg",
          title:"Shipping",
          text:"With our Quick Reply feature, you can send personalized responses to your customers with just a click!"
        }
      ],
      productFeature:[
        {
          title:'Sell Ebooks, Software, Audiom Media etc',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Customize Checkout for Products',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      variableProductFeature:[
        {
          title:'Product Variants',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'Create Custom Attributes',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      customisationFeature:[
        {
          title:'Checkout Add-ons',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'User Authentication via WhatsApp',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ],
      discountFeature:[
        {
          title:'Coupon Management',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
          title:'User Restriction & Usage Limits',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat. Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
      ]
    }
  }
}

const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHero = __vite_ssr_import_1__.default
  const _component_TheReview = __vite_ssr_import_2__.default
  const _component_TheContent = __vite_ssr_import_3__.default
  const _component_TheBestFeature = __vite_ssr_import_4__.default
  const _component_FeatureRow = __vite_ssr_import_5__.default
  const _component_TheApps = __vite_ssr_import_6__.default
  const _component_TheClients = __vite_ssr_import_7__.default
  const _component_TheCta = __vite_ssr_import_8__.default

  _push(`<!--[--><!-- Hero Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheHero, {
    title: "Simplest and Easiest Way",
    subTitle: "to Create Your Online Store",
    textContent: "Be a part of the Vepaar Community, with oveer 100k eentrepreneurs who have used Vepaar to sell online, offline, and via social media. Click the button below to start your digital store in minutes!",
    href: "#"
  }, null, _parent))
  _push(`<!-- Hero Section: End --><!-- Review Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheReview, { color: "light" }, null, _parent))
  _push(`<!-- Review Section: End --><!-- Content Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheContent, {
    title: "Dashboard And Orders",
    subTitle: "Lorem Ipsum Dolor Sit Amet.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem purus ultrices amet posuere placerat.",
    image: "order-screenshot.jpg"
  }, null, _parent))
  _push(`<!-- Content Section: End --><!-- Best Feature Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheBestFeature, {
    class: "module--feature-bg",
    title: "We Empathise Your Needs And Provide",
    subTitle: "You Best Feature To Stimulate The WhatsApp.",
    content: "Vepaar provides you with a wide range of WhatsApp CRM features that you can use to take your business to the next level. Be it creating customer profiles, sending personalized replies, saving messages, or creating your entire online business page, Vepaar has it all.",
    features: $data.features
  }, null, _parent))
  _push(`<!-- Best Feature Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Sell Digital Products",
    points: $data.productFeature,
    image: "sell-digital-product.jpg"
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Create Variable Products",
    isReverse: "",
    points: $data.variableProductFeature,
    image: "variable-product.jpg"
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Checkout Customisation & Add-ons",
    points: $data.customisationFeature,
    image: "checkout-customisation.jpg"
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- Feature Row Section: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_FeatureRow, {
    title: "Increase your sales with Discount Coupons",
    points: $data.discountFeature,
    image: "discount-coupons.jpg",
    isReverse: ""
  }, null, _parent))
  _push(`<!-- Feature Row Section: End --><!-- The Apps: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheApps, { image: "payment-methods.png" }, {
    default: __vite_ssr_import_9__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<h2 class="text-2xl lg:text-5xl font-semibold text-white"${
          _scopeId
        }><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500"${
          _scopeId
        }>Payment Integrations</span> to make Vepaar transactions smother than ever! </h2>`)
      } else {
        return [
          __vite_ssr_import_9__.createVNode("h2", { class: "text-2xl lg:text-5xl font-semibold text-white" }, [
            __vite_ssr_import_9__.createVNode("span", { class: "text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 via-deep-purple-500 to-pink-500" }, "Payment Integrations"),
            __vite_ssr_import_9__.createTextVNode(" to make Vepaar transactions smother than ever! ")
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<!-- The Apps: End --><!-- Clients Logo: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheClients, null, null, _parent))
  _push(`<!-- Clients Logo: End --><!-- The CTA: Start -->`)
  _push(__vite_ssr_import_10__.ssrRenderComponent(_component_TheCta, {
    tagline: "Trusted by 100k+ Businesses Worldwide",
    title: "Make your business the next obsession.",
    description: "Be a part of the Vepaar Commmunity, with over 100k entrepreneurs who have used Vepaar to sell online, offline, and via social media. Click the button to start your digital storre in minutes!"
  }, null, _parent))
  _push(`<!-- The CTA: End --><!--]-->`)
}


const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_11__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/store.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_12__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_12__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/store.vue"]]);
}


// --------------------
// Request: /pages/whatsapp-link-generator.vue
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs ($id_5109ddaa)
// Dependencies: 
// - /components/TheHero.vue ($id_79789ec9)
// - /components/TheLinkForm.vue ($id_77d2b478)
// - /components/TheSocialMediaCounter.vue ($id_9b01da9c)
// - /components/TheLinkSteps.vue ($id_586b6059)
// - /components/TheFaq.vue ($id_03b536a4)
// - /components/TheReview.vue ($id_fbce3175)
// - /components/TheCta.vue ($id_b5c1e281)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5a1e01a5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheHero.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheLinkForm.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheSocialMediaCounter.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/TheLinkSteps.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/TheFaq.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/TheReview.vue");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/TheCta.vue");


const _sfc_main = {
  data() {
    return {
      faqs: [
        {
          question:
            "How much does it charge to generate a personalized WhatsApp link?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "Why is the website asking if I want to send message?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        },
        {
          question: "Does this link work in my country?",
          answer:
            "Yes, the WhatsApp Link Generator will work in countries where WhatsApp is available."
        },
        {
          question: "Where can I report a bug or an issue?",
          answer:
            "The Vepaar WhatsApp Link Generator is absolutely free of cost!"
        }
      ]
    };
  }
};

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHero = __vite_ssr_import_0__.default
  const _component_TheLinkForm = __vite_ssr_import_1__.default
  const _component_TheSocialMediaCounter = __vite_ssr_import_2__.default
  const _component_TheLinkSteps = __vite_ssr_import_3__.default
  const _component_TheFaq = __vite_ssr_import_4__.default
  const _component_TheReview = __vite_ssr_import_5__.default
  const _component_TheCta = __vite_ssr_import_6__.default

  _push(`<!--[--><!-- Hero Section: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheHero, {
    title: "WhatsApp Link",
    subTitle: "in a Single Click",
    isHeightAuto: ""
  }, null, _parent))
  _push(`<!-- Hero Section: End --><!-- LinkForm: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheLinkForm, null, null, _parent))
  _push(`<!-- LinkForm: End --><!-- SocialMedia Counter: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheSocialMediaCounter, null, null, _parent))
  _push(`<!-- SocialMedia Counter: End --><!-- WhatsApp Link Steps: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheLinkSteps, null, null, _parent))
  _push(`<!-- WhatsApp Link Steps: End --><!-- FAQ : Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheFaq, { faqs: $data.faqs }, null, _parent))
  _push(`<!-- FAQ : End --><!-- Review Section: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheReview, { color: "light" }, null, _parent))
  _push(`<!-- Review Section: End --><!-- The CTA: Start -->`)
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_TheCta, {
    tagline: "Trusted by 100k+ Business Worldwide",
    title: "Get Started with Vepaar today!",
    description: "One of the best free apps for small business owners! With our powerful yet simple tools, bring your store to the global platform at ease."
  }, null, _parent))
  _push(`<!-- The CTA: End --><!--]-->`)
}


const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/whatsapp-link-generator.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_10__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/pages/whatsapp-link-generator.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 

// --------------------
const $id_ec09bf83 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/router.mjs ($id_a4d6cb5b)
// Dependencies: 

// --------------------
const $id_98ca4a7a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/root-component.mjs
// Parents: 
// - /Users/macbook/Documents/vepaar-website-2/node_modules/nuxt3/dist/app/entry ($id_8496f5da)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// --------------------
const $id_de4c36fd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/root-component.mjs ($id_de4c36fd)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/error-component.mjs ($id_aea6985e)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f8564e04 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/error-component.mjs");



const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/node_modules/nuxt3/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/components/nuxt-root.vue ($id_f8564e04)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue ($id_f10a5dcc)
// --------------------
const $id_aea6985e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/error-component.mjs ($id_aea6985e)
// Dependencies: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f10a5dcc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");



const _sfc_main = {
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
          line.includes('internal') ||
          line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = String(error.statusCode || 500)
const is404 = statusCode === '404'

const statusMessage = error.statusMessage ?? is404 ? 'Page Not Found' : 'Internal Server Error'
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

const ErrorTemplate = is404 ? __vite_ssr_import_0__.default : true ? __vite_ssr_import_2__.default : __vite_ssr_import_1__.default

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate, Error404: __vite_ssr_import_0__.default, Error500: __vite_ssr_import_1__.default, ErrorDev: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_3__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/node_modules/nuxt3/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue ($id_f10a5dcc)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-link.mjs ($id_3a707821)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_e68b6b38)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b90d4d0f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "404"
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useMeta({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useMeta: __vite_ssr_import_1__.useMeta }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-573335c0><div class="fixed left-0 right-0 spotlight z-10" data-v-573335c0></div><div class="max-w-520px text-center z-20" data-v-573335c0><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-573335c0>${
    $props.statusCode
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-573335c0>${
    $props.description
  }</p><div class="w-full flex items-center justify-center" data-v-573335c0>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-573335c0"],['__file',"/Users/macbook/Documents/vepaar-website-2/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 

// --------------------
const $id_e68b6b38 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-573335c0]{cursor:pointer}.flex[data-v-573335c0]{display:flex}.grid[data-v-573335c0]{display:-ms-grid;display:grid}.place-content-center[data-v-573335c0]{place-content:center}.items-center[data-v-573335c0]{align-items:center}.justify-center[data-v-573335c0]{justify-content:center}.font-sans[data-v-573335c0]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-573335c0]{font-weight:500}.font-light[data-v-573335c0]{font-weight:300}.text-8xl[data-v-573335c0]{font-size:6rem;line-height:1}.text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-573335c0]{line-height:1.25}.mb-8[data-v-573335c0]{margin-bottom:2rem}.mb-16[data-v-573335c0]{margin-bottom:4rem}.max-w-520px[data-v-573335c0]{max-width:520px}.min-h-screen[data-v-573335c0]{min-height:100vh}.overflow-hidden[data-v-573335c0]{overflow:hidden}.px-8[data-v-573335c0]{padding-left:2rem;padding-right:2rem}.py-2[data-v-573335c0]{padding-bottom:.5rem;padding-top:.5rem}.px-4[data-v-573335c0]{padding-left:1rem;padding-right:1rem}.fixed[data-v-573335c0]{position:fixed}.left-0[data-v-573335c0]{left:0}.right-0[data-v-573335c0]{right:0}.text-center[data-v-573335c0]{text-align:center}.text-black[data-v-573335c0]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-573335c0]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-573335c0]{width:100%}.z-10[data-v-573335c0]{z-index:10}.z-20[data-v-573335c0]{z-index:20}@media (min-width:640px){.sm\\:text-4xl[data-v-573335c0]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-573335c0]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-573335c0]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-573335c0]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:px-6[data-v-573335c0]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-573335c0]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-573335c0]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-573335c0]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-573335c0]{background-color:#ffffff4d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-573335c0]{background-color:#1414144d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-573335c0]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:\"\";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-573335c0]:hover:before{background-position:-50% 0;opacity:1}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue ($id_f10a5dcc)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_a2b3b709)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_14c8b574 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useMeta({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useMeta: __vite_ssr_import_0__.useMeta }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-0914425d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-0914425d></div><div class="max-w-520px text-center" data-v-0914425d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-0914425d>${
    $props.statusCode
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0914425d>${
    $props.description
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0914425d"],['__file',"/Users/macbook/Documents/vepaar-website-2/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// Dependencies: 

// --------------------
const $id_a2b3b709 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-0914425d]{display:-ms-grid;display:grid}.place-content-center[data-v-0914425d]{place-content:center}.font-sans[data-v-0914425d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-0914425d]{font-weight:500}.font-light[data-v-0914425d]{font-weight:300}.h-1\\/2[data-v-0914425d]{height:50%}.text-8xl[data-v-0914425d]{font-size:6rem;line-height:1}.text-xl[data-v-0914425d]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-0914425d]{line-height:1.25}.mb-8[data-v-0914425d]{margin-bottom:2rem}.mb-16[data-v-0914425d]{margin-bottom:4rem}.max-w-520px[data-v-0914425d]{max-width:520px}.min-h-screen[data-v-0914425d]{min-height:100vh}.overflow-hidden[data-v-0914425d]{overflow:hidden}.px-8[data-v-0914425d]{padding-left:2rem;padding-right:2rem}.fixed[data-v-0914425d]{position:fixed}.left-0[data-v-0914425d]{left:0}.right-0[data-v-0914425d]{right:0}.-bottom-1\\/2[data-v-0914425d]{bottom:-50%}.text-center[data-v-0914425d]{text-align:center}.text-black[data-v-0914425d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-0914425d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width:640px){.sm\\:text-4xl[data-v-0914425d]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-0914425d]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-0914425d]{padding-left:0;padding-right:0}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-0914425d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-0914425d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt3/dist/app/components/nuxt-error-page.vue ($id_f10a5dcc)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_2691164c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bc2d74a1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");


const _sfc_main = {
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useMeta({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useMeta: __vite_ssr_import_0__.useMeta }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-1da4697d><div class="fixed left-0 right-0 spotlight" data-v-1da4697d></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-1da4697d>${
    $props.statusCode
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-1da4697d>${
    $props.description
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-1da4697d><pre class="text-xl font-light leading-tight z-10 p-8" data-v-1da4697d>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1da4697d"],['__file',"/Users/macbook/Documents/vepaar-website-2/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 

// --------------------
const $id_2691164c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-1da4697d]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-1da4697d]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-1da4697d]{display:flex}.flex-col[data-v-1da4697d]{flex-direction:column}.flex-1[data-v-1da4697d]{flex:1 1 0%}.font-sans[data-v-1da4697d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-1da4697d]{font-weight:500}.font-light[data-v-1da4697d]{font-weight:300}.h-auto[data-v-1da4697d]{height:auto}.text-xl[data-v-1da4697d]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-1da4697d]{font-size:3.75rem;line-height:1}.leading-tight[data-v-1da4697d]{line-height:1.25}.mb-8[data-v-1da4697d]{margin-bottom:2rem}.mb-6[data-v-1da4697d]{margin-bottom:1.5rem}.min-h-screen[data-v-1da4697d]{min-height:100vh}.overflow-y-auto[data-v-1da4697d]{overflow-y:auto}.p-8[data-v-1da4697d]{padding:2rem}.px-10[data-v-1da4697d]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-1da4697d]{padding-top:3.5rem}.fixed[data-v-1da4697d]{position:fixed}.left-0[data-v-1da4697d]{left:0}.right-0[data-v-1da4697d]{right:0}.text-black[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-1da4697d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-1da4697d]{z-index:10}@media (min-width:640px){.sm\\:text-8xl[data-v-1da4697d]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-1da4697d]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-1da4697d]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-1da4697d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}";
}


// --------------------
// Request: /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/app-component.mjs
// Parents: 
// - /Users/macbook/Documents/vepaar-website-2/node_modules/nuxt3/dist/app/entry ($id_8496f5da)
// Dependencies: 
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// --------------------
const $id_6480c5d2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/pages/runtime/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt3/dist/pages/runtime/app.vue
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/app-component.mjs ($id_6480c5d2)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/layout.mjs ($id_ddd66f9a)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_0851ff57 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt3/dist/pages/runtime/app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/node_modules/nuxt3/dist/pages/runtime/app.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt3/dist/app/components/layout.mjs
// Parents: 
// - /node_modules/nuxt3/dist/pages/runtime/app.vue ($id_0851ff57)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt3/dist/app/components/utils.mjs ($id_bb7711fa)
// - /node_modules/nuxt3/dist/app/index.mjs ($id_d8c2af0f)
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/layouts.mjs ($id_e60d145e)
// --------------------
const $id_ddd66f9a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(__vite_ssr_import_0__.Transition, hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition), __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt3/dist/app/components/layout.mjs ($id_ddd66f9a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /layouts/default.vue ($id_7689e89d)
// --------------------
const $id_e60d145e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {
  default: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/layouts/default.vue'))
};
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/layouts.mjs ($id_e60d145e)
// Dependencies: 
// - /node_modules/nuxt3/dist/head/runtime/index.mjs ($id_274036df)
// - /components/TheHeader.vue ($id_d18d7003)
// - /components/TheFooter.vue ($id_cdfd5170)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7689e89d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/head/runtime/index.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheHeader.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheFooter.vue");

const _sfc_main = {
  setup(__props, { expose }) {
  expose();

  __vite_ssr_import_0__.useHead({
    title: 'Vepaar: Boost your Online Business with All-In-One App', // or, title => `My App - ${title}`
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
    bodyAttrs: {
      class: 'test'
    }
  });

const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHeader = __vite_ssr_import_1__.default
  const _component_TheFooter = __vite_ssr_import_2__.default

  _push(`<!--[-->`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_TheHeader, null, null, _parent))
  _push(`<div class="pt-16 lg:pt-20">`)
  __vite_ssr_import_4__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</div>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_TheFooter, null, null, _parent))
  _push(`<!--]-->`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/layouts/default.vue"]]);
}


// --------------------
// Request: /components/TheHeader.vue
// Parents: 
// - /layouts/default.vue ($id_7689e89d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-link.mjs ($id_3a707821)
// - /components/TheNavigation.vue ($id_e7251b5f)
// - /components/TheButton.vue ($id_00941411)
// - /components/icons/MdiMenu.vue ($id_553dee83)
// - /components/icons/MdiClose.vue ($id_5274c7e0)
// - /components/icons/MdiTranslate.vue ($id_9e717d12)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/TheHeader.vue?vue&type=style&index=0&lang.scss ($id_6c7016ca)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d18d7003 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/TheNavigation.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/TheButton.vue");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/icons/MdiMenu.vue");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/icons/MdiClose.vue");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/icons/MdiTranslate.vue");


const _sfc_main = {
  data(){
    return{
      isOpen:false,
      lastScrollPosition:0,
      scrollPosition:null,
      showNavbar:true,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    navToggle() {
      this.isOpen = !this.isOpen;
    },
    close() {
      this.isOpen = false;
    },
    onScroll() {
      this.scrollPosition = window.scrollY

      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 100) {
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  },
}

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_0__.default
  const _component_TheNavigation = __vite_ssr_import_1__.default
  const _component_the_button = __vite_ssr_import_2__.default
  const _component_icons_mdi_menu = __vite_ssr_import_3__.default
  const _component_icons_mdi_close = __vite_ssr_import_4__.default
  const _component_icons_mdi_translate = __vite_ssr_import_5__.default

  _push(`<header${
    __vite_ssr_import_7__.ssrRenderAttrs(__vite_ssr_import_6__.mergeProps({
      class: ["bg-white fixed top-0 left-0 right-0 header", $data.showNavbar ? '' : 'is-fixed']
    }, _attrs))
  }><div class="container"><div class="${
    __vite_ssr_import_7__.ssrRenderClass([$data.isOpen ? 'relative z-10': 'static', "flex justify-between header__wrap"])
  }"><div class="flex items-center justify-between">`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: ["header-logo", $data.scrollPosition > 60 ? 'logo-icon' : '']
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div${
          _scopeId
        }><img width="192" height="32" class="h-6 md:h-8 w-auto max-w-none"${
          __vite_ssr_import_7__.ssrRenderAttr("src", $data.isOpen ? 'images/vepaar-logo-gray.png' : 'images/vepaar-logo.png')
        } alt="vepaar-logo"${
          _scopeId
        }></div>`)
      } else {
        return [
          __vite_ssr_import_6__.createVNode("div", null, [
            __vite_ssr_import_6__.createVNode("img", {
              width: "192",
              height: "32",
              class: "h-6 md:h-8 w-auto max-w-none",
              src: $data.isOpen ? 'images/vepaar-logo-gray.png' : 'images/vepaar-logo.png',
              alt: "vepaar-logo"
            }, null, 8 /* PROPS */, ["src"])
          ])
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="flex justify-between lg:flex-1 items-center lg:bg-white relative">`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_TheNavigation, {
    class: [$data.isOpen ? 'flex -z-[1] is-open' : '', "navigation"]
  }, null, _parent))
  _push(`<div class="lg:hidden flex items-center">`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_the_button, {
    size: "sm",
    color: "primary",
    theme: "link",
    class: ["button--humberger", $data.isOpen ? 'filter invert':'']
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        if (!$data.isOpen) {
          _push(__vite_ssr_import_7__.ssrRenderComponent(_component_icons_mdi_menu, { class: "text-xl" }, null, _parent, _scopeId))
        } else {
          _push(__vite_ssr_import_7__.ssrRenderComponent(_component_icons_mdi_close, { class: "text-xl" }, null, _parent, _scopeId))
        }
      } else {
        return [
          (!$data.isOpen)
            ? (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(_component_icons_mdi_menu, {
                key: 0,
                class: "text-xl"
              }))
            : (__vite_ssr_import_6__.openBlock(), __vite_ssr_import_6__.createBlock(_component_icons_mdi_close, {
                key: 1,
                class: "text-xl"
              }))
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><div class="header-action hidden lg:flex">`)
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_the_button, {
    color: "primary",
    size: "sm",
    class: "login-button"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` Login `)
      } else {
        return [
          __vite_ssr_import_6__.createTextVNode(" Login ")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_the_button, {
    theme: "outline",
    color: "gray",
    size: "sm",
    class: "ml-2 language-button"
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(` EN `)
        _push(__vite_ssr_import_7__.ssrRenderComponent(_component_icons_mdi_translate, { class: "ml-2" }, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_6__.createTextVNode(" EN "),
          __vite_ssr_import_6__.createVNode(_component_icons_mdi_translate, { class: "ml-2" })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div></div></header>`)
}

const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/TheHeader.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheHeader.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_10__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheHeader.vue"]]);
}


// --------------------
// Request: /components/TheNavigation.vue
// Parents: 
// - /components/TheHeader.vue ($id_d18d7003)
// Dependencies: 
// - /components/TheButton.vue ($id_00941411)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e7251b5f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/TheButton.vue");

const _sfc_main = {
  setup(__props, { expose }) {
  expose();

const navigations = [
  {
    name: "CRM",
    link: "/crm"
  },
  {
    name: "Store",
    link: "/store"
  },
  {
    name: "Download",
    link: "download"
  },
  {
    name: "Pricing",
    link: "pricing"
  }
];

const __returned__ = { navigations }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_button = __vite_ssr_import_0__.default

  _push(`<nav${__vite_ssr_import_2__.ssrRenderAttrs(_attrs)}><!--[-->`)
  __vite_ssr_import_2__.ssrRenderList($setup.navigations, (nav, index) => {
    _push(__vite_ssr_import_2__.ssrRenderComponent(_component_the_button, {
      key: index,
      href: nav.link,
      theme: "nav"
    }, {
      default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
        if (_push) {
          _push(`${__vite_ssr_import_2__.ssrInterpolate(nav.name)}`)
        } else {
          return [
            __vite_ssr_import_1__.createTextVNode(__vite_ssr_import_1__.toDisplayString(nav.name), 1 /* TEXT */)
          ]
        }
      }),
      _: 2 /* DYNAMIC */
    }, _parent))
  })
  _push(`<!--]--></nav>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheNavigation.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheNavigation.vue"]]);
}


// --------------------
// Request: /components/icons/MdiMenu.vue
// Parents: 
// - /components/TheHeader.vue ($id_d18d7003)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_553dee83 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  name: 'MdiMenu'
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"></path></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/icons/MdiMenu.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/icons/MdiMenu.vue"]]);
}


// --------------------
// Request: /components/icons/MdiClose.vue
// Parents: 
// - /components/TheHeader.vue ($id_d18d7003)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5274c7e0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  name: 'MdiClose'
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"></path></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/icons/MdiClose.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/icons/MdiClose.vue"]]);
}


// --------------------
// Request: /components/icons/MdiTranslate.vue
// Parents: 
// - /components/TheHeader.vue ($id_d18d7003)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9e717d12 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  name: 'MdiTranslate'
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="currentColor" d="m12.87 15.07l-2.54-2.51l.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11l.76-2.04M18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12m-2.62 7l1.62-4.33L19.12 17h-3.24Z"></path></svg>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/icons/MdiTranslate.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/icons/MdiTranslate.vue"]]);
}


// --------------------
// Request: /components/TheHeader.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/TheHeader.vue ($id_d18d7003)
// Dependencies: 

// --------------------
const $id_6c7016ca = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".header{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);z-index:10}.header:after{--tw-gradient-from:#fff;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,hsla(0,0%,100%,0));--tw-gradient-stops:var(--tw-gradient-from),#d1d5db,var(--tw-gradient-to,rgba(209,213,219,0));--tw-gradient-to:#fff;background-image:linear-gradient(to bottom,var(--tw-gradient-stops));bottom:0;content:\"\";display:inline-block;height:2px;left:0;position:absolute;right:0;width:100%}.header.is-fixed{--tw-translate-y:-4rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.header.is-fixed .header__wrap,.header__wrap{padding-bottom:.75rem;padding-top:.75rem}@media (min-width:1024px){.header__wrap{padding-bottom:1.25rem;padding-top:1.25rem}}.header-logo{align-items:center;display:flex;padding-right:2rem;position:relative;transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);width:auto;width:16rem}.header-logo:after{--tw-gradient-from:#fff;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,hsla(0,0%,100%,0));--tw-gradient-stops:var(--tw-gradient-from),#d1d5db,var(--tw-gradient-to,rgba(209,213,219,0));--tw-gradient-to:#fff;background-image:linear-gradient(to bottom,var(--tw-gradient-stops));content:\"\";display:inline-block;height:2.5rem;margin-left:1.25rem;width:2px}@media (min-width:640px){.header-logo:after{margin-left:2.5rem}}.header-logo.logo-icon{transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:1024px){.header-logo.logo-icon{width:5rem}.header-logo.logo-icon:after{position:absolute;right:1rem}}.header-logo.logo-icon:before{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity));content:\"\"}@media (min-width:1024px){.header-logo.logo-icon:before{height:100%;position:absolute;right:0;width:2.5rem}}.navigation{--tw-translate-x:100%;--tw-gradient-from:#304ffe;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(48,79,254,0));--tw-gradient-stops:var(--tw-gradient-from),#6200ea,var(--tw-gradient-to,rgba(98,0,234,0));--tw-gradient-stops:var(--tw-gradient-from),#a0f,var(--tw-gradient-to,rgba(170,0,255,0));--tw-gradient-to:#c51162;align-items:center;background-image:linear-gradient(to right,var(--tw-gradient-stops));bottom:0;flex-direction:column;justify-content:center;left:0;position:fixed;right:0;top:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}@media (min-width:1024px){.navigation{--tw-translate-x:0px;background-image:none;flex-direction:row;position:static;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}}.navigation.is-open{--tw-translate-x:0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.3s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.button--link.button--humberger{padding-left:0;padding-right:0}.button--link.button--humberger img{margin:0}";
}


// --------------------
// Request: /components/TheFooter.vue
// Parents: 
// - /layouts/default.vue ($id_7689e89d)
// Dependencies: 
// - /node_modules/nuxt3/dist/app/components/nuxt-link.mjs ($id_3a707821)
// - /components/FooterLinks.vue ($id_73c17584)
// - /components/SocialLinks.vue ($id_73c6b2e2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cdfd5170 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt3/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/FooterLinks.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/SocialLinks.vue");


const _sfc_main = {
  data(){
    return {
      footerLinks:[
        {
          title:"Products",
          links:[
            {
              name:'CRM',
              href:'#'
            },
            {
              name:'Store',
              href:'#'
            },
            {
              name:'Polls',
              href:'#'
            },
            {
              name:'Link Generator',
              href:'#'
            }
          ]
        },
        {
          title:"Learn",
          links:[
            {
              name:'User Guide',
              href:'#'
            },
            {
              name:'Video Tutorials',
              href:'#'
            },
            {
              name:'Blog',
              href:'#'
            },
            {
              name:'FAQs',
              href:'#'
            }
          ]
        },
        {
          title:"Others",
          links:[
            {
              name:'Privacy Policy',
              href:'#'
            },
            {
              name:'Terms of Use',
              href:'#'
            }
          ]
        }
      ]
    }
  }
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __vite_ssr_import_0__.default
  const _component_FooterLinks = __vite_ssr_import_1__.default
  const _component_SocialLinks = __vite_ssr_import_2__.default

  _push(`<footer${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "pt-10 sm:pt-20 bg-gray-900" }, _attrs))}><div class="container"><div class="lg:flex"><div class="lg:w-2/5"><div class="lg:max-w-xs">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img src="images/vepaar-logo-white.png" alt="" class="h-8 lg:h-10 max-w-none"${_scopeId}>`)
      } else {
        return [
          __vite_ssr_import_3__.createVNode("img", {
            src: "images/vepaar-logo-white.png",
            alt: "",
            class: "h-8 lg:h-10 max-w-none"
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`<p class="text-base text-gray-500 mt-7">Vepaar has the right tools for you to create and run your business page, and seamlessly interact with your customers anytime, anywhere.</p></div></div><div class="mt-10 lg:mt-0 lg:flex-1"><div class="grid grid-cols-2 sm:grid-cols-4 gap-5"><!--[-->`)
  __vite_ssr_import_4__.ssrRenderList($data.footerLinks, (flink, index) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_FooterLinks, {
      key: index,
      flink: flink
    }, null, _parent))
  })
  _push(`<!--]-->`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_SocialLinks, { class: "col-span-2 sm:col-span-1" }, null, _parent))
  _push(`</div></div></div><div class="mt-8 py-8 text-center sm:text-left sm:flex justify-between border-t border-gray-500"><p class="text-base text-gray-400">© 7Span Internet Pvt Ltd. All rights reserved, 2022.</p><div class="inline-flex items-center"><span class="text-base text-gray-400 inline-block mr-2">Made in</span><img src="images/india.svg" alt=""></div></div></div></footer>`)
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/TheFooter.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/TheFooter.vue"]]);
}


// --------------------
// Request: /components/FooterLinks.vue
// Parents: 
// - /components/TheFooter.vue ($id_cdfd5170)
// Dependencies: 
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /components/FooterLinks.vue?vue&type=style&index=0&lang.scss ($id_433587bf)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_73c17584 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  props:{
    flink:Object
  }
}

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_0__.ssrRenderAttrs(_attrs)
  }><h3 class="text-gray-500 text-2xl font-semibold">${
    __vite_ssr_import_0__.ssrInterpolate($props.flink.title)
  }</h3><div class="mt-5 lg:mt-10"><!--[-->`)
  __vite_ssr_import_0__.ssrRenderList($props.flink.links, (link, index) => {
    _push(`<a${
      __vite_ssr_import_0__.ssrRenderAttr("href", link.href)
    } class="${
      __vite_ssr_import_0__.ssrRenderClass([index==0?'':'mt-2 lg:mt-4', "text-white text-lg block footer-link"])
    }">${
      __vite_ssr_import_0__.ssrInterpolate(link.name)
    }</a>`)
  })
  _push(`<!--]--></div></div>`)
}

const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/FooterLinks.vue?vue&type=style&index=0&lang.scss");


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/FooterLinks.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/FooterLinks.vue"]]);
}


// --------------------
// Request: /components/FooterLinks.vue?vue&type=style&index=0&lang.scss
// Parents: 
// - /components/FooterLinks.vue ($id_73c17584)
// Dependencies: 

// --------------------
const $id_433587bf = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".footer-link:hover{--tw-gradient-from:#304ffe;--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to,rgba(48,79,254,0));--tw-gradient-stops:var(--tw-gradient-from),#6200ea,var(--tw-gradient-to,rgba(98,0,234,0));--tw-gradient-stops:var(--tw-gradient-from),#a0f,var(--tw-gradient-to,rgba(170,0,255,0));--tw-gradient-to:#c51162;-webkit-background-clip:text;background-clip:text;background-image:linear-gradient(to right,var(--tw-gradient-stops));color:transparent}";
}


// --------------------
// Request: /components/SocialLinks.vue
// Parents: 
// - /components/TheFooter.vue ($id_cdfd5170)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_73c6b2e2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const _sfc_main = {
  data() {
    return {
      socialLinks: [
        {
          icon: "facebook.svg",
          link: "javascript:;"
        },
        {
          icon: "whatsapp.svg",
          link: "javascript:;"
        },
        {
          icon: "youtube.svg",
          link: "javascript:;"
        },
        {
          icon: "linkedin.svg",
          link: "javascript:;"
        },
        {
          icon: "twitter.svg",
          link: "javascript:;"
        }
      ]
    };
  }
};

const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "sm:ml-auto flex justify-between sm:block" }, _attrs))}><!--[-->`)
  __vite_ssr_import_1__.ssrRenderList($data.socialLinks, (social, index) => {
    _push(`<a${
      __vite_ssr_import_1__.ssrRenderAttr("href", social.link)
    } class="${
      __vite_ssr_import_1__.ssrRenderClass(index == 0 ? 'inline-flex' : 'block ml-2 sm:ml-0 sm:mt-4')
    }"><img${
      __vite_ssr_import_1__.ssrRenderAttr("src", 'images/' + social.icon)
    } alt="" class="w-8"></a>`)
  })
  _push(`<!--]--></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/SocialLinks.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/macbook/Documents/vepaar-website-2/components/SocialLinks.vue"]]);
}


const __modules__ = {
  "/Users/macbook/Documents/vepaar-website-2/node_modules/nuxt3/dist/app/entry": $id_8496f5da,
  "/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/paths.mjs": $id_dbbec8b4,
  "/node_modules/ufo/dist/index.mjs": $id_614de060,
  "/node_modules/vue/dist/vue.cjs.js": $id_60f0615f,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_780217c4,
  "/node_modules/nuxt3/dist/app/index.mjs": $id_d8c2af0f,
  "/node_modules/nuxt3/dist/app/nuxt.mjs": $id_bf77ef36,
  "/node_modules/hookable/dist/index.mjs": $id_a2c811c4,
  "/node_modules/unctx/dist/index.mjs": $id_a569ca2d,
  "/node_modules/nuxt3/dist/app/compat/legacy-app.mjs": $id_75047751,
  "/node_modules/unenv/runtime/mock/proxy.mjs": $id_39e12da7,
  "/node_modules/nuxt3/dist/app/composables/index.mjs": $id_42ae3d5d,
  "/node_modules/nuxt3/dist/app/composables/component.mjs": $id_b47c3881,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9a4a698,
  "/node_modules/nuxt3/dist/app/composables/asyncData.mjs": $id_a2ef143e,
  "/node_modules/nuxt3/dist/app/composables/utils.mjs": $id_1f961b91,
  "/node_modules/nuxt3/dist/app/composables/hydrate.mjs": $id_43a772c2,
  "/node_modules/nuxt3/dist/app/composables/state.mjs": $id_d232db97,
  "/node_modules/nuxt3/dist/app/composables/error.mjs": $id_228109ca,
  "/node_modules/nuxt3/dist/app/composables/fetch.mjs": $id_765a0ed7,
  "/node_modules/ohash/dist/index.mjs": $id_b1b82cf3,
  "/node_modules/nuxt3/dist/app/composables/cookie.mjs": $id_792d64c4,
  "/node_modules/cookie-es/dist/index.mjs": $id_f4975261,
  "/node_modules/h3/dist/index.mjs": $id_57d7ded6,
  "/node_modules/destr/dist/index.mjs": $id_03d15ecd,
  "/node_modules/nuxt3/dist/app/composables/ssr.mjs": $id_4d0dc923,
  "/node_modules/nuxt3/dist/app/composables/router.mjs": $id_541bda03,
  "/node_modules/nuxt3/dist/app/components/index.mjs": $id_dcef81fa,
  "/node_modules/nuxt3/dist/app/components/nuxt-link.mjs": $id_3a707821,
  "/node_modules/nuxt3/dist/head/runtime/index.mjs": $id_274036df,
  "/node_modules/nuxt3/dist/head/runtime/composables.mjs": $id_54e514a9,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_852b06a2,
  "/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/css.mjs": $id_a9533952,
  "/assets/css/tailwind.css": $id_f75548e1,
  "/assets/css/style.scss": $id_7107a6a0,
  "/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/plugins/server.mjs": $id_ca724058,
  "/node_modules/nuxt3/dist/app/plugins/preload.server.mjs": $id_b9f3c557,
  "/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/components.plugin.mjs": $id_c4362d98,
  "/node_modules/nuxt3/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_8a2cde52,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_c032264e,
  "/node_modules/defu/dist/defu.mjs": $id_d7afab65,
  "/node_modules/nuxt3/dist/head/runtime/plugin.mjs": $id_5f983c6f,
  "/node_modules/nuxt3/dist/head/runtime/components.mjs": $id_57905f4f,
  "/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/meta.config.mjs": $id_17eae356,
  "/node_modules/nuxt3/dist/pages/runtime/router.mjs": $id_a4d6cb5b,
  "/node_modules/nuxt3/dist/pages/runtime/page.mjs": $id_485c89bf,
  "/node_modules/nuxt3/dist/pages/runtime/utils.mjs": $id_e1b210cc,
  "/node_modules/nuxt3/dist/app/components/utils.mjs": $id_bb7711fa,
  "/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/routes.mjs": $id_5109ddaa,
  "/pages/aboutus.vue?macro=true": $id_783435b5,
  "/components/TheHero.vue": $id_79789ec9,
  "/components/TheButton.vue": $id_00941411,
  "/node_modules/vue/server-renderer/index.js": $id_b215fa1c,
  "/components/TheButton.vue?vue&type=style&index=0&lang.scss": $id_83fef445,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/components/TheHero.vue?vue&type=style&index=0&lang.scss": $id_f7f99620,
  "/components/TheReview.vue": $id_fbce3175,
  "/components/Mission.vue": $id_4d392f66,
  "/components/VepaarStartup.vue": $id_ae0d844e,
  "/components/VepaarStartup.vue?vue&type=style&index=0&lang.scss": $id_489ddd8b,
  "/components/Team.vue": $id_5e9944c5,
  "/components/Team.vue?vue&type=style&index=0&lang.scss": $id_2019b277,
  "/components/TheUsersCounter.vue": $id_4c8955c0,
  "/components/TheUsersCounter.vue?vue&type=style&index=0&lang.scss": $id_6da5d4ad,
  "/components/OurJournery.vue": $id_621f0a3b,
  "/components/OurJournery.vue?vue&type=style&index=0&lang.scss": $id_d6fa64b9,
  "/components/TheCta.vue": $id_b5c1e281,
  "/components/TheCta.vue?vue&type=style&index=0&lang.scss": $id_ed266e74,
  "/pages/crm.vue?macro=true": $id_362e578b,
  "/node_modules/nuxt3/dist/pages/runtime/composables.mjs": $id_f55c9203,
  "/components/TheContent.vue": $id_7179c50a,
  "/components/TheBestFeature.vue": $id_df493032,
  "/components/FeatureCardRow.vue": $id_71dd5421,
  "/components/FeatureCard.vue": $id_d5ac0403,
  "/components/TheBestFeature.vue?vue&type=style&index=0&lang.scss": $id_05cf1f6f,
  "/components/FeatureRow.vue": $id_f81b4e2d,
  "/components/FeatureRow.vue?vue&type=style&index=0&lang.scss": $id_9812ec47,
  "/components/TheApps.vue": $id_fa304aa1,
  "/components/TheClients.vue": $id_4b526e20,
  "/pages/download.vue?macro=true": $id_85211355,
  "/components/TheDownload.vue": $id_22e80545,
  "/components/Extension.vue": $id_3050003d,
  "/components/AppsDownload.vue": $id_22a9121d,
  "/components/VolizApp.vue": $id_458087b3,
  "/pages/index.vue?macro=true": $id_5dd70240,
  "/components/TheRow.vue": $id_61e05cae,
  "/components/TheRow.vue?vue&type=style&index=0&lang.scss": $id_bda14ba0,
  "/components/TheSupport.vue": $id_2ee8f308,
  "/components/SupportCard.vue": $id_85a68533,
  "/components/SupportCard.vue?vue&type=style&index=0&lang.scss": $id_c7c58c90,
  "/components/TheTestimonial.vue": $id_ac5b85a4,
  "/components/TestimonialCard.vue": $id_156486af,
  "/pages/links.vue?macro=true": $id_e904372e,
  "/pages/links.vue?vue&type=style&index=0&scoped=true&lang.scss": $id_069e1f32,
  "/pages/polls.vue?macro=true": $id_7689a5ac,
  "/components/ThePollSteps.vue": $id_702c25e6,
  "/components/ThePollSteps.vue?vue&type=style&index=0&lang.scss": $id_9597ac70,
  "/pages/pricing.vue?macro=true": $id_eaf79752,
  "/components/PricingTab.vue": $id_5aada895,
  "/components/PlanCard.vue": $id_49a9a792,
  "/components/PlanCard.vue?vue&type=style&index=0&lang.scss": $id_d55ee248,
  "/components/PricingTab.vue?vue&type=style&index=0&lang.scss": $id_d343d2ca,
  "/components/ComparePlans.vue": $id_20b49029,
  "/components/icons/MdiCheckCircle.vue": $id_da7a5c14,
  "/components/ComparePlans.vue?vue&type=style&index=0&lang.scss": $id_61f0b4f3,
  "/components/TheFaq.vue": $id_03b536a4,
  "/components/TheAccordion.vue": $id_4318b5fb,
  "/components/icons/MdiMinus.vue": $id_f0e7bb6e,
  "/components/icons/MdiPlus.vue": $id_7d90f4ac,
  "/components/TheAccordion.vue?vue&type=style&index=0&lang.scss": $id_afd6ccf8,
  "/pages/store.vue?macro=true": $id_8929f789,
  "/pages/whatsapp-link-generator.vue?macro=true": $id_173c502b,
  "/components/TheLinkForm.vue": $id_77d2b478,
  "/components/TheLinkForm.vue?vue&type=style&index=0&lang.scss": $id_29bed0f8,
  "/components/TheSocialMediaCounter.vue": $id_9b01da9c,
  "/components/TheSocialMediaCounter.vue?vue&type=style&index=0&lang.css": $id_490a6f8f,
  "/components/TheLinkSteps.vue": $id_586b6059,
  "/components/TheLinkSteps.vue?vue&type=style&index=0&lang.scss": $id_da9a82b8,
  "/pages/aboutus.vue": $id_9db4de97,
  "/pages/crm.vue": $id_e46e1fbe,
  "/pages/download.vue": $id_35dd2ec2,
  "/pages/index.vue": $id_cca58e97,
  "/pages/links.vue": $id_49b7d808,
  "/pages/polls.vue": $id_4296044b,
  "/pages/pricing.vue": $id_ee43cf6a,
  "/pages/store.vue": $id_5953fbb6,
  "/pages/whatsapp-link-generator.vue": $id_5a1e01a5,
  "/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/router.options.mjs": $id_ec09bf83,
  "/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/middleware.mjs": $id_98ca4a7a,
  "/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/root-component.mjs": $id_de4c36fd,
  "/node_modules/nuxt3/dist/app/components/nuxt-root.vue": $id_f8564e04,
  "/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/error-component.mjs": $id_aea6985e,
  "/node_modules/nuxt3/dist/app/components/nuxt-error-page.vue": $id_f10a5dcc,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_b90d4d0f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_e68b6b38,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_14c8b574,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_a2b3b709,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_bc2d74a1,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_2691164c,
  "/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/app-component.mjs": $id_6480c5d2,
  "/node_modules/nuxt3/dist/pages/runtime/app.vue": $id_0851ff57,
  "/node_modules/nuxt3/dist/app/components/layout.mjs": $id_ddd66f9a,
  "/@id/__x00__virtual:/Users/macbook/Documents/vepaar-website-2/.nuxt/layouts.mjs": $id_e60d145e,
  "/layouts/default.vue": $id_7689e89d,
  "/components/TheHeader.vue": $id_d18d7003,
  "/components/TheNavigation.vue": $id_e7251b5f,
  "/components/icons/MdiMenu.vue": $id_553dee83,
  "/components/icons/MdiClose.vue": $id_5274c7e0,
  "/components/icons/MdiTranslate.vue": $id_9e717d12,
  "/components/TheHeader.vue?vue&type=style&index=0&lang.scss": $id_6c7016ca,
  "/components/TheFooter.vue": $id_cdfd5170,
  "/components/FooterLinks.vue": $id_73c17584,
  "/components/FooterLinks.vue?vue&type=style&index=0&lang.scss": $id_433587bf,
  "/components/SocialLinks.vue": $id_73c6b2e2
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("/Users/macbook/Documents/vepaar-website-2/node_modules/nuxt3/dist/app/entry")