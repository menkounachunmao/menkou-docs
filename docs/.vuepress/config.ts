/*
 * @Author: xx
 * @Date: 2021-06-17 15:40:56
 * @LastEditors: 青峰
 * @LastEditTime: 2021-06-24 19:55:55
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
      sidebar: [
        // SidebarItem
        {
          text: '代码管理',
          isGroup: true,
          children: [
            // SidebarItem
            {
              text: '基础',
              link: '/git',
              children: [],
            },
            {
              text: 'more',
              link: '/git/more.html',
              children: [],
            },
          ],
        },
        // SidebarGroup
        {
          isGroup: true,
          text: 'VUE',
          children: [
            {
              text: '基础',
              link: '/vue',
              children: [],
            },
            {
              text: 'component',
              link: '/vue/component.html',
              children: [],
            },
            {
              text: 'vue-router',
              link: '/vue/vue-router.html',
              children: [],
            },
            {
              text: 'vuex',
              link: '/vue/vuex.html',
              children: [],
            },
          ],
        },
        {
          text: 'TypeScript',
          isGroup: true,
          children: [
            // SidebarItem
            {
              text: 'typeScript',
              link: '/typeScript',
              children: [],
            },
          ],
        },
        {
          text: 'Canvas',
          isGroup: true,
          children: [
            // SidebarItem
            {
              text: 'canvas',
              link: '/canvas',
              children: [],
            },
          ],
        },
      ],
    },
})