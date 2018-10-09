# vue-cli-plugin-postcss-precss
Vue CLI 3.x plugin for Postcss. Allow you to use Sass-like markup in your CSS.



## Install
First you need to install @vue/cli globally.

Then create a project add add the `postcss-precss` plugin:

```bash
vue create hello-world
cd hello-world
vue add postcss-precss
```

You'll be asked some questions regarding how the PostCss Precss configured in your project. After that, you're good to go.

`postcss-preset-env` will be default add, so `autoprefixer` will be removed from `postcss.config.js`. Here also a lot of plugins will be configured.

```js
// const baseUrl = process.env.VUE_APP_BASE_URL;
module.exports = {
  "plugins": {
    'postcss-assets': {
      // "baseUrl": baseUrl, // default '/'
      "cachebuster": false,
      "basePath": 'public/',
      "loadPaths": []
    },
    "postcss-import": {},
    "postcss-extend-rule": {},
    "postcss-advanced-variables": {},
    "postcss-plugin-bem-atrule": {
      "defaultNamespace": "el",
      "style": "suit",
      "separators": {
        "descendent": "__",
        "modifier": "--"
      },
      "shortcuts": {
        "utility": "util",
        "component": "b",
        "modifier": "m",
        "descendent": "e"
      }
    },
    "postcss-preset-env": {
      "stage": 2
    },
    "postcss-atroot": {},
    "postcss-property-lookup": {},
    "postcss-nested": {},
    "postcss-nested-ancestors": {},
    "postcss-calc": {},
    "postcss-sass-color-functions": {},
    "lost": false,
    "postcss-utils": {}
  }
}
```