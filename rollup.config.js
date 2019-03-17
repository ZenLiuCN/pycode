import babel from 'rollup-plugin-babel'
import rollupTypescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
export default {
  input: 'src/pycode.ts',
  output: {
    name: 'pycode',
    file: 'dist/pycode.min.js',
    format: 'umd'
  },
  plugins: [
    commonjs(),
    rollupTypescript(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}
