/*
 * @Author: xx
 * @Date: 2021-06-17 15:40:56
 * @LastEditors: 青峰
 * @LastEditTime: 2021-06-25 11:11:32
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
          text: 'Git',
          isGroup: true,
          children: [
            // SidebarItem
            {
              text: '基础',
              link: '/git-doc',
              children: [],
            },
            {
              text: 'more',
              link: '/git-doc/more.html',
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
              link: '/vue-doc',
              children: [],
            },
            {
              text: 'component',
              link: '/vue-doc/component.html',
              children: [],
            },
            {
              text: 'vue-router',
              link: '/vue-doc/vue-router.html',
              children: [],
            },
            {
              text: 'vuex',
              link: '/vue-doc/vuex.html',
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
              link: '/ts-doc',
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
              link: '/canvas-doc',
              children: [],
            },
          ],
        },
        {
          text: 'CSS',
          isGroup: true,
          children: [
            {
              text: '基础',
              link: '/css-doc',
              children: [],
            },
            {
              text: '布局',
              link: '/css-doc/layout.html',
              children: [],
            },
          ],
        },
      ],
    },
})