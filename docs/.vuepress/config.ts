/*
 * @Author: xx
 * @Date: 2021-06-17 15:40:56
 * @LastEditors: 青峰
 * @LastEditTime: 2021-06-28 11:51:40
 * @FilePath: /vue-press/docs/.vuepress/config.ts
 */
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
const sidebar: DefaultThemeOptions = [
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
      {
        text: 'code-block',
        link: '/css-doc/code-block.html',
        children: [],
      },
      {
        text: 'stacking-contex',
        link: '/css-doc/stacking-contex.html',
        children: [],
      },
      {
        text: 'css3',
        link: '/css-doc/css3.html',
        children: [],
      },
    ],
  },
  {
    text: 'Html',
    isGroup: true,
    children: [
      // SidebarItem
      {
        text: '渲染过程',
        link: '/html-doc/render.html',
        children: [],
      },
    ],
  },
  {
    text: 'WebSocket',
    isGroup: true,
    children: [
      // SidebarItem
      {
        text: 'WebSocket',
        link: '/web-socket-doc',
        children: [],
      },
    ],
  },
  {
    text: '测试工具🔧',
    isGroup: true,
    children: [
      // SidebarItem
      {
        text: 'Jest',
        link: '/jest-doc',
        children: [],
      },
    ],
  },
  {
    text: 'Js',
    isGroup: true,
    children: [
      {
        text: 'this',
        link: '/js-doc/this.html',
        children: [],
      },
      {
        text: 'scop',
        link: '/js-doc/scop.html',
        children: [],
      },
    ],
  },
]

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'en-US',
    title: 'Menkou Chunmao',
    description: 'Just playing around',
    themeConfig: {
      logo: '/images/logo.jpeg',
      sidebar: sidebar
    },
    head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
})