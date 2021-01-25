import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy-assets'

export default {
  input: 'src/index.tsx',
  output: [
    {
      dir: 'dist',
      format: 'esm'
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'ReactMultiLevelNavbar',
      globals: {
        react: 'React'
      }
    }
  ],
  plugins: [
    typescript({ include: ['./src/**/*'] }),
    copy({
      assets: ['src/defaultStyles.css']
    })
  ],
  external: ['react']
}
