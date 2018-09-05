const fs = require('fs');

module.exports = api => {
    return {
        updatePostcssConfig(callback) {
            let config, configPath;

            const rcPath = api.resolve('./postcss.config.js');
            const pkgPath = api.resolve('./package.json');
            if (fs.existsSync(rcPath)) {
                configPath = rcPath;
                config = callback(require(rcPath));
            } else if (fs.existsSync(pkgPath)) {
                configPath = pkgPath;
                config = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf8' }));
                config.postcss = callback(config.postcss || {});
            }

            if (configPath) {
                const moduleExports = configPath !== pkgPath ? 'module.exports = ' : ''
                fs.writeFileSync(
                    configPath,
                    `${moduleExports}${JSON.stringify(config, null, 2)}`,
                    { encoding: 'utf8' }
                )
            }
        }
    }
}