import { defineConfig } from 'umi';
import routes from './config/routes'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/',
  publicPath: '/public/',
  hash: false,
  history: {
    type: 'browser'
  },
  alias: {
    'Component': require('path').resolve(__dirname, './src/components'),
    '@Services': require('path').resolve(__dirname, './src/srvices')
  },
  routes,
  fastRefresh: {},
});
