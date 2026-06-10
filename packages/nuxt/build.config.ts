import { defineBuildConfig } from 'unbuild'

// @nuxt/module-builder drives the build; this just marks the SFC library as
// external so it stays a runtime dependency rather than being bundled in.
export default defineBuildConfig({
  externals: ['@colorlib/adminlte-vue', '@colorlib/adminlte-vue/plugins', '@colorlib/adminlte-vue/css', 'bootstrap', 'vue'],
})
