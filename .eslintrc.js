module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  parser: 'babel-eslint',
  plugin: [
    'eslint-plugin-html',
    'eslint-plugin-import',
    'eslint-plugin-promise',
    'eslint-plugin-vue' //vue自动格式化插件
  ],
  settings: {
    'html/html-extensions': ['.html', '.vue'] // 除js文件外，会去检查文件中script标签配置
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
