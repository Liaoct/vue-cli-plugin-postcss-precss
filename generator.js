module.exports = (api, opts, rootOptions) => {
    const utils = require('./utils')(api);

    api.onCreateComplete(() => {
        utils.updatePostcssConfig(config => {
            config.plugins = config.plugins || {};
            delete config.plugins.autoprefixer;
            const conf = {
                "postcss-assets": opts.assets ? {
                    cachebuster: false,
                    basePath: 'public/',
                    loadPaths: []
                } : opts.assets,
                "postcss-import": {},
                "postcss-extend-rule": {},
                "postcss-advanced-variables": {},
                "postcss-plugin-bem-atrule": opts.bem ? {
                    defaultNamespace: 'el', // default namespace to use, none by default
                    style: 'suit', // suit or bem, suit by default,
                    separators: {
                        descendent: '__', // overwrite any default separator for chosen style
                        modifier: '--'
                    },
                    shortcuts: {
                        utility: 'util', //override at-rule name
                        component: 'b',
                        modifier: 'm',
                        descendent: 'e'
                    }
                } : opts.bem,
                "postcss-preset-env": {
                    stage: opts.stage
                },
                "postcss-atroot": {},
                "postcss-property-lookup": {},
                "postcss-nested": {},
                "postcss-nested-ancestors": {},
                "postcss-calc": {},
                "postcss-sass-color-functions": {},
                "lost": opts.lost ? {} : false,
                "postcss-utils": opts.utils ? {} : false
            };
            for (key in conf) {
                config.plugins[key] = conf[key];
            }
            return config;
        });
    });
};