import path from 'path'
import webpack from 'webpack'
import { BuildEnv, BuildPaths } from './config/build/types/config'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales')
    }

    const mode = env.mode || 'development'
    const PORT = env.port || 9001

    const isDev = mode === 'development'

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })
}
