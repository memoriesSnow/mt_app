module.exports = {
    css: {
        loaderOptions: {
            less: {
                // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                modifyVars: {
                    // 直接覆盖变量
                    // 'text-color': '#111',
                    // 'border-color': '#eee',
                    'nav-bar-height': '.5rem',
                    'nav-bar-background-color': '#f03d37',
                    'nav-bar-icon-color': '#fff',
                    'nav-bar-title-text-color': '#fff',
                    'tab-font-size':'.15rem',
                    'tab-font-weight':'700',
                    'nav-bar-title-font-size':'.18rem'
                    // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                    // hack: `true; @import "your-less-file-path.less";`,
                    
                },
            },
        },
    },
};