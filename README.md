本仓库为掘金小册[《React Hooks与Immutable数据流实战》](https://juejin.im/book/5da96626e51d4524ba0fd237)项目实战代码仓库。大体跟随作者[@神三元](https://github.com/sanyuan0704)流程进行，但细节上可能不一致。

这是作者[原仓库](https://github.com/sanyuan0704/react-cloud-music)。

## 约定&代码规范
* 默认使用create-react-app脚手架的配置。    
* 文件名统一小写，用“-”连接（包括React组件文件）。
* git commit message格式遵循[Angular规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.greljkmo14y0)（墙内可参考[这里](https://www.jianshu.com/p/201bd81e7dc9)），但type部分除规范约定的之外，额外允许`daily`作为type，表示日常进度推进。
* 对于样式，作者全程使用`styled-components`，本仓库综合使用[CSS Modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)和`styled-components`，并全局使用less。需要大量绑定props/state到样式中时使用`styled-components`，否则使用CSS Modules。使用CSS Modules时遵循Create React App的配置规范，即文件后缀为.module.less。
* CSS类名一律小写加连字符，CSS Modules导出名称为驼峰式。（作者规定为*普通 CSS 类名全部用英语小写，单词间用下划线连接，CSS 动画钩子类名中单词用 - 连接*）。


## 目录结构

<pre>
cloud-music
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
│   │   ├── variables.less //css全局变量
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
</pre>

---

说一说跟着做这个项目的一些想法。。首先我并没有跟着敲完，可能这样跟着别人的脚步写代码并不适合我。你很难在这样的项目中有自己的思考，因为任何改动都会导致你和作者的思维出现分歧，做到后面就会产生一些恼人问题。当然如果自己和作者差距非常大，全盘接受似乎也不是什么坏事。

实话说，作者的CSS布局技巧我比较认可，但某些代码令人费解。另外作者承诺不使用UI框架，自己手工打造基础UI。可能是我对UI框架有什么误解，像better-scroll，swiper这些根本不是UI框架（好吧只是UI库），只有Ant Design之类的才算？
这和我想象中有一些出入。当然，跟着做下来肯定是会有收获的，比如炫酷的切换动画，redux的使用等等，再怎么说至少能够收获一些React技术栈的实践经验。

另外redux繁重的模板代码确实令人诟病，我认为在项目中引入redux之前应该思考一下，我们是否真的需要它？又是否有必要将任何组件的内部状态都用redux管理？

就到这里吧。。由于前期对项目进行了一些修改，后面再继续跟着做会有一些额外的枯燥的工作，一步一步跟着自己实现也觉得没太大意义，所以最后直接复制了[原仓库](https://github.com/sanyuan0704/react-cloud-music)的代码。
