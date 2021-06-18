/*
 * @Author: xx
 * @Date: 2021-06-17 15:40:56
 * @LastEditors: 青峰
 * @LastEditTime: 2021-06-18 14:59:35
 * @FilePath: /vue-press/docs/.vuepress/config.ts
 */
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'en-US',
    title: 'Menkou Chunmao',
    description: 'Just playing around',
    themeConfig: {
      logo: '/images/logo.jpeg',
    },
})