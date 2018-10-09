module.exports = [
    {
        type: 'confirm',
        name: 'lost',
        message: 'Use LostGrid for create grid layout?',
        default: false,
    },
    {
        type: 'confirm',
        name: 'bem',
        message: 'Implementing BEM as at-rules(you can modify it later in config)?',
        default: true,
    },
    {
        type: 'confirm',
        name: 'utils',
        message: 'Use PostCSS Utils to help you create functional fragments quickly via at-rules?',
        default: true,
    },
    {
        type: 'confirm',
        name: 'assets',
        message: 'Use PostCSS Assets to manage your asset path for css? If you want to resolve the assets that in public folder, you need it. ',
        default: false,
    },
    {
        type: 'list',
        name: 'stage',
        message: 'Which stage for CSS features to polyfill?',
        choices: [
            { name: 'Stage 0', value: 0 },
            { name: 'Stage 1', value: 1 },
            { name: 'Stage 2', value: 2 },
            { name: 'Stage 3', value: 3 },
            { name: 'Stage 4', value: 4 },
            { name: 'Disable stage', value: false },
        ],
        default: 2,
    }
];