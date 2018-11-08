import { join } from 'path'

const baseDir = join(process.cwd(), '/static');

export default {
   base: baseDir,
   module: join(baseDir, '/../node_modules'),
   assets: join(baseDir, '/assets'),
   src: join(baseDir, '/src'),
   dist: join(baseDir, '/dist')
}