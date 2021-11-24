import { Transformer } from '@parcel/plugin'
import nunjucksToHTML from 'nunjucks-to-html'

export default new Transformer({
  async transform({ asset }) {
    // Retrieve the asset's source code and source map.
    let source = await asset.getCode()
    let sourceMap = await asset.getMap()

    // Run it through some compiler, and set the results
    // on the asset.
    let { code, map } = compile(source, sourceMap)

    nunjucksToHtml(['**/*.njk'], {
      config: 'nunjucks.config.js',
      dest: 'public',
      ext: '.html',
      baseDir: '',
      cwd: process.cwd(),
      flatten: false,
    })
      .then((results) => {})
      .catch((error) => {})

    asset.setCode(code)
    asset.setMap(map)

    // Return the asset
    return [asset]
  },
})
