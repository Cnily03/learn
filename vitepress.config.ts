import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import path from 'path'
import fs from 'node:fs'
import YAML from 'yaml'

const themeConfig: DefaultTheme.Config = YAML.parse(fs.readFileSync('./theme-config.yml', 'utf8'))

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "自学手册",
    description: "Learn with ease",

    // load yaml config from file will lose type hint
    themeConfig: Object.assign({}, {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/cnily03/learn' }
        ],

        search: {
            provider: 'local',
        },

        externalLinkIcon: false
    }, themeConfig),

    sitemap: {
        hostname: 'https://learn.tampoo.io'
    },

    srcDir: 'docs',
    outDir: 'dist',
    assetsDir: 'assets',
    cacheDir: '.cache/.vite',
    vite: {
        // https://vitejs.dev/config/
        server: {
            port: 5170,
            host: '0.0.0.0'
        },
        resolve: {
            alias: {
                '@': path.resolve('theme')
            }
        }
    }
})
