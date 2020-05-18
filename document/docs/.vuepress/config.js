module.exports = {
    title: 'D的文档',
    description: 'Just playing around',
    themeConfig: {
        logo: '/logo.png',
        smoothScroll: true,
        nav: [
            // { 有下拉框的 -- 暂不启用
            //     text: 'Languages',
            //     ariaLabel: 'Language Menu',
            //     items: [
            //         { text: 'Chinese', link: '/language/chinese/' },
            //         {   text: 'Japanese', 
            //             link: '/language/japanese/' ,           
            //             items: [
            //                 { text: 'Chinese', link: '/language/chinese/' },
            //                 { text: 'Japanese', link: '/language/japanese/' }
            //             ]
            //         }
            //     ]
            // },
            { text: 'Home', link: '/' },
            { text: 'GitHub', link: 'https://github.com/D20F' },
            { text: '个人项目展示', link: 'https://106.53.202.188:8080' },
        ],
        sidebar: [
          {
            title: '前端',   // 必要的 frontEnd
            // path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,侧边栏的每个子组默认是可折叠的，你可以设置 collapsable: false 来让一个组永远都是展开状态。
            sidebarDepth: 1,    // 可选的, 默认值是 1 一个侧边栏的子组配置同时支持 sidebarDepth 字段用于重写默认显示的侧边栏深度(1)。
            children: [
              ['/D20F/frontEnd/indexedOB.md','indexedOB'],
              ['/D20F/frontEnd/canvas.md','canvas'],
              ['/D20F/frontEnd/面试难题.md','面试难题'],
              ['/D20F/frontEnd/dom.md','dom'],
              ['/D20F/frontEnd/js操作.md','js操作'],
              ['/D20F/frontEnd/js应用.md','js应用'],
              ['/D20F/frontEnd/vue.md','vue'],
            ]
          },
          {
            title: '后端',   // 必要的 backEnd
            children: [
              ['/D20F/backEnd/mysql.md','Mysql'],
              ['/D20F/backEnd/linux.md','Liunx'],
            ]
          },
          {
            title: '通用',   // 必要的 general
            children: [
              ['/D20F/general/git.md','Git'],
              ['/D20F/general/环境安装指南.md','环境安装指南'],
              ['/D20F/general/封装axios.md','封装axios'],
            ]
          },
          {
            title: 'Cocos',   // 必要的 cocos
            children: [
              ['/D20F/cocos/节点操作.md','节点操作'],
              ['/D20F/cocos/CocosCreate3D.md','CocosCreate3D'],
            ]
          },
          {
            title: 'Css',   // 必要的 css
            children: [
              ['/D20F/css/面试css.md','面试css'],
              ['/D20F/css/样式记忆.md','样式记忆'],
            ]
          },
        ]
    }
}