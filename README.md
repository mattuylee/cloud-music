本仓库为掘金小册[《React Hooks与Immutable数据流实战》](https://juejin.im/book/5da96626e51d4524ba0fd237)项目实战代码仓库。大体跟随作者[@神三元](https://github.com/sanyuan0704)流程进行，但细节上可能不一致。

## 约定&代码规范
* 默认使用create-react-app脚手架的配置。
* 文件名统一小写，用“-”连接（包括React组件文件）。
* git commit message格式遵循[Angular规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)（墙内可参考[这里](https://www.jianshu.com/p/201bd81e7dc9)）。
* 对于样式，作者全程使用`styled-components`，本仓库综合使用[CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)和`styled-components`，并全局使用less。需要大量绑定props/state到样式中时使用`styled-components`，否则使用CSS Modules。使用CSS Modules时遵循Create React App的配置规范，即文件后缀为.module.less。
* CSS类名一律小写加连字符，CSS Modules导出名称为驼峰式。（作者规定为*普通 CSS 类名全部用英语小写，单词间用下划线连接，CSS 动画钩子类名中单词用 - 连接*）。


## 目录结构

src
├── config //为了配置less弹出了create-react-app的配置
├── public
│   ├── favicon.ico
│   ├── index.html  //html模板
│   ├── manifest.json
│   └── robots.txt
├── scripts //create-react-app弹出的脚本
│   ├── build.js
│   ├── start.js
│   └── test.js
├── src
│   ├── api //数据请求
│   ├── application //主程序
│   ├── assets  //资源，样式
│   │   └── global.less //全局样式
│   ├── base-ui //基础UI小部件
│   ├── components //可复用的UI组件
│   ├── routes  //路由
│   ├── store   //redux 相关文件
│   ├── app.js  //根组件
│   ├── index.js //程序入口
│   ├── serviceWorker.js
│   └── style.js //引入样式
└── README.md
