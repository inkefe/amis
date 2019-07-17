define('docs/dev.md', function(require, exports, module) {

  module.exports = {
    "title": "自定义组件",
    "shortname": "dev",
    "html": "<p>自定义组件主要分两类。表单类和非表单类。</p>\n<h3><a class=\"anchor\" name=\"formitem\" href=\"#formitem\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>FormItem</h3><p>即表单类，它主要用来扩充表单项。先看个例子。</p>\n<pre><code class=\"lang-jsx\"><span class=\"hljs-keyword\">import</span> * <span class=\"hljs-keyword\">as</span> React <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'react'</span>;\n<span class=\"hljs-keyword\">import</span> {FormItem} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'amis'</span>;\n<span class=\"hljs-keyword\">import</span> * <span class=\"hljs-keyword\">as</span> cx <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'classnames'</span>;\n\n@FormItem({\n    <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'custom-checkbox'</span>,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">CustomCheckbox</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">React</span>.<span class=\"hljs-title\">Component</span> </span>{\n    toggle = <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n        <span class=\"hljs-keyword\">const</span> {value, onChange} = <span class=\"hljs-keyword\">this</span>.props;\n\n        onChange(!value);\n    };\n\n    render() {\n        <span class=\"hljs-keyword\">const</span> {value} = <span class=\"hljs-keyword\">this</span>.props;\n        <span class=\"hljs-keyword\">const</span> checked = !!value;\n\n        <span class=\"hljs-keyword\">return</span> (\n            <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">a</span>\n                    <span class=\"hljs-attr\">className</span>=<span class=\"hljs-string\">{cx(</span>'<span class=\"hljs-attr\">btn</span> <span class=\"hljs-attr\">btn-default</span>', {\n                        '<span class=\"hljs-attr\">btn-success</span>'<span class=\"hljs-attr\">:</span> <span class=\"hljs-attr\">checked</span>,\n                    })}\n                    <span class=\"hljs-attr\">onClick</span>=<span class=\"hljs-string\">{this.toggle}</span>\n                &gt;</span>\n                    {checked ? '已勾选' : '请勾选'}\n                <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">a</span>&gt;</span>\n                <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">className</span>=<span class=\"hljs-string\">\"inline m-l-xs\"</span>&gt;</span>{checked ? '已勾选' : '请勾选'}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n            <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span></span>\n        );\n    }\n}\n</code></pre>\n<p>有了这个代码后，页面配置 form 的 controls 里面就可以通过这样的配置启动了。</p>\n<pre><code class=\"lang-js\">{\n    <span class=\"hljs-comment\">// 其他信息省略了。。</span>\n    <span class=\"hljs-attribute\">type</span>: <span class=\"hljs-string\">'form'</span>,\n    <span class=\"hljs-attribute\">controls</span>: [\n        {\n            <span class=\"hljs-attribute\">type</span>: <span class=\"hljs-string\">'custom-checkbox'</span>,\n            <span class=\"hljs-attribute\">name</span>: <span class=\"hljs-string\">'变量名'</span>,\n            <span class=\"hljs-attribute\">label</span>: <span class=\"hljs-string\">'自定义组件。'</span>\n        }\n    ]\n}\n</code></pre>\n<p>表单项开发主要关心两件事。</p>\n<ol>\n<li>呈现当前值。如以上例子，勾选了则显示<code>已勾选</code>，否则显示<code>请勾选</code>。</li>\n<li>接收用户交互，修改表单项值。如以上例子，当用户点击按钮时，切换当前选中的值。</li>\n</ol>\n<p>至于其他功能如：label/description 的展示、表单验证功能、表单布局（常规、左右或者内联）等等，只要是通过 FormItem 注册进去的都无需自己实现。</p>\n<h4><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E9%AA%8C%E8%AF%81%E5%99%A8\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%AA%8C%E8%AF%81%E5%99%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义验证器</h4><p>如果 amis <a href=\"/amis/docs/renderers/Form/FormItem#\">自带的验证</a>能满足需求了，则不需要关心。组件可以有自己的验证逻辑。</p>\n<pre><code class=\"lang-jsx\"><span class=\"hljs-keyword\">import</span> * as <span class=\"hljs-type\">React</span> from <span class=\"hljs-symbol\">'reac</span>t';\n<span class=\"hljs-keyword\">import</span> {<span class=\"hljs-type\">FormItem</span>} from <span class=\"hljs-symbol\">'ami</span>s';\n<span class=\"hljs-keyword\">import</span> * as cx from <span class=\"hljs-symbol\">'classname</span>s';\n\n<span class=\"hljs-meta\">@FormItem</span>({\n    <span class=\"hljs-class\"><span class=\"hljs-keyword\">type</span></span>: <span class=\"hljs-symbol\">'custom</span>-checkbox',\n})\nexport <span class=\"hljs-keyword\">default</span> <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">CustomCheckbox</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">React</span>.<span class=\"hljs-title\">Component</span> </span>{\n    validate() {\n        <span class=\"hljs-comment\">// 通过 this.props.value 可以知道当前值。</span>\n\n        <span class=\"hljs-keyword\">return</span> isValid ? '' : '不合法，说明不合法原因。'\n    }\n    <span class=\"hljs-comment\">// ... 其他省略了</span>\n}\n</code></pre>\n<p>上面的栗子只是简单说明，另外可以做<code>异步验证</code>，validate 方法可以返回一个 promise。</p>\n<h4><a class=\"anchor\" name=\"optionscontrol\" href=\"#optionscontrol\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>OptionsControl</h4><p>如果你的表单组件性质和 amis 的 Select、Checkboxes、List 差不多，用户配置配置 source 可通过 API 拉取选项，你可以用 OptionsControl 取代 FormItem 这个注解。</p>\n<p>用法是一样，功能方面主要多了以下功能。</p>\n<ul>\n<li>可以配置 options，options 支持配置 visibleOn hiddenOn 等表达式</li>\n<li>可以配置 <code>source</code> 换成动态拉取 options 的功能，source 中有变量依赖会自动重新拉取。</li>\n<li>下发了这些 props，可以更方便选项。<ul>\n<li><code>options</code> 不管是用户配置的静态 options 还是配置 source 拉取的，下发到组件已经是最终的选项了。</li>\n<li><code>selectedOptions</code> 数组类型，当前用户选中的选项。</li>\n<li><code>loading</code> 当前选项是否在加载</li>\n<li><code>onToggle</code> 切换一个选项的值</li>\n<li><code>onToggleAll</code> 切换所有选项的值，类似于全选。</li>\n</ul>\n</li>\n</ul>\n<h3><a class=\"anchor\" name=\"renderer\" href=\"#renderer\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Renderer</h3><p>非表单类的组件自定义，主要通过 <code>Renderer</code> 实现。在开始阅读之前，请先阅读 <a href=\"/amis/docs/sdk#工作原理\">amis 工作原理</a>。</p>\n<pre><code class=\"lang-jsx\"><span class=\"hljs-keyword\">import</span> * as <span class=\"hljs-type\">React</span> from <span class=\"hljs-symbol\">'reac</span>t';\n<span class=\"hljs-keyword\">import</span> {<span class=\"hljs-type\">Renderer</span>} from <span class=\"hljs-symbol\">'ami</span>s';\n\n<span class=\"hljs-meta\">@Renderer</span>({\n    test: /(^|\\/)my\\-renderer$/,\n})\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">CustomRenderer</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">React</span>.<span class=\"hljs-title\">Component</span> </span>{\n    render() {\n        const {tip, body, render} = <span class=\"hljs-keyword\">this</span>.props;\n\n        <span class=\"hljs-keyword\">return</span> (\n            &lt;div&gt;\n                &lt;p&gt;这是自定义组件：{tip}&lt;/p&gt;\n                {body ? (\n                    &lt;div className=<span class=\"hljs-string\">\"container\"</span>&gt;\n                        {render(<span class=\"hljs-symbol\">'bod</span>y', body, {\n                            <span class=\"hljs-comment\">// 这里的信息会作为 props 传递给子组件，一般情况下都不需要这个</span>\n                        })}\n                    &lt;/div&gt;\n                ) : <span class=\"hljs-literal\">null</span>}\n            &lt;/div&gt;\n        );\n    }\n}\n</code></pre>\n<p>这里注册一个 React 组件，当节点的 path 信息是 <code>my-renderer</code> 结尾时，交给当前组件来完成渲染。</p>\n<p>请注意 <code>this.props</code> 中的 <code>render</code> 方法，它用来实现容器功能，通过它可以让使用者动态的配置其他渲染模型。</p>\n<h3><a class=\"anchor\" name=\"%E7%BB%84%E4%BB%B6%E9%97%B4%E9%80%9A%E4%BF%A1\" href=\"#%E7%BB%84%E4%BB%B6%E9%97%B4%E9%80%9A%E4%BF%A1\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>组件间通信</h3><p>关于组件间通信，amis 中有个机制就是，把需要被引用的组件设置一个 name 值，然后其他组件就可以通过这个 name 与其通信，比如这个<a href=\"/amis/docs/advanced#组件间通信\">栗子</a>。其实内部是依赖于内部的一个 Scoped Context。你的组件希望可以被别的组件引用，你需要把自己注册进去，默认自定义的非表单类组件并没有把自己注册进去，可以参考以下代码做添加。</p>\n<pre><code class=\"lang-js\"><span class=\"hljs-keyword\">import</span> * as <span class=\"hljs-type\">React</span> from <span class=\"hljs-symbol\">'reac</span>t';\n<span class=\"hljs-keyword\">import</span> {<span class=\"hljs-type\">Renderer</span>, <span class=\"hljs-type\">ScopedContext</span>} from <span class=\"hljs-symbol\">'ami</span>s';\n<span class=\"hljs-meta\">@Renderer</span>({\n    test: /(?:^|\\/)my\\-renderer$/,\n})\nexport <span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">CustomRenderer</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">React</span>.<span class=\"hljs-title\">Component</span> </span>{\n    static contextType = <span class=\"hljs-type\">ScopedContext</span>;\n\n    componentWillMount() {\n        const scoped = <span class=\"hljs-keyword\">this</span>.context;\n        scoped.registerComponent(<span class=\"hljs-keyword\">this</span>);\n    }\n\n    componentWillUnmount() {\n        const scoped = <span class=\"hljs-keyword\">this</span>.context;\n        scoped.unRegisterComponent(<span class=\"hljs-keyword\">this</span>);\n    }\n\n    <span class=\"hljs-comment\">// 其他部分省略了。</span>\n}\n</code></pre>\n<p>把自己注册进去了，其他组件就能引用到了。同时，如果你想找别的组件，也同样是通过 scoped 这个 context，如： <code>scoped.getComponentByName(&quot;xxxName&quot;)</code> 这样就能拿到目标组件的实例了（前提是目标组件已经配置了 name 为 <code>xxxName</code>）。</p>\n<h3><a class=\"anchor\" name=\"%E5%85%B6%E4%BB%96%E5%8A%9F%E8%83%BD%E6%96%B9%E6%B3%95\" href=\"#%E5%85%B6%E4%BB%96%E5%8A%9F%E8%83%BD%E6%96%B9%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>其他功能方法</h3><p>自定义的渲染器 props 会下发一个非常有用的 env 对象。这个 env 有以下功能方法。</p>\n<ul>\n<li><code>env.fetcher</code> 可以用来做 ajax 请求如： <code>this.props.env.fetcher(&#39;xxxAPi&#39;, this.props.data).then((result) =&gt; console.log(result))</code></li>\n<li><code>env.confirm</code> 确认框，返回一个 promise 等待用户确认如： <code>this.props.env.confirm(&#39;你确定要这么做？&#39;).then((confirmed) =&gt; console.log(confirmed))</code></li>\n<li><code>env.alert</code> 用 Modal 实现的弹框，个人觉得更美观。</li>\n<li><code>env.notify</code> toast 某个消息  如： <code>this.props.env.notify(&quot;error&quot;, &quot;出错了&quot;)</code></li>\n<li><code>env.jumpTo</code> 页面跳转。</li>\n</ul>\n\n\n<div class=\"m-t-lg b-l b-info b-3x wrapper bg-light dk\">文档内容有误？欢迎大家一起来编写，文档地址：<i class=\"fa fa-github\"></i><a href=\"https://github.com/baidu/amis/tree/master/docs/dev.md\">/docs/dev.md</a>。</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "FormItem",
          "fragment": "formitem",
          "fullPath": "#formitem",
          "level": 3,
          "children": [
            {
              "label": "自定义验证器",
              "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89%E9%AA%8C%E8%AF%81%E5%99%A8",
              "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%AA%8C%E8%AF%81%E5%99%A8",
              "level": 4
            },
            {
              "label": "OptionsControl",
              "fragment": "optionscontrol",
              "fullPath": "#optionscontrol",
              "level": 4
            }
          ]
        },
        {
          "label": "Renderer",
          "fragment": "renderer",
          "fullPath": "#renderer",
          "level": 3
        },
        {
          "label": "组件间通信",
          "fragment": "%E7%BB%84%E4%BB%B6%E9%97%B4%E9%80%9A%E4%BF%A1",
          "fullPath": "#%E7%BB%84%E4%BB%B6%E9%97%B4%E9%80%9A%E4%BF%A1",
          "level": 3
        },
        {
          "label": "其他功能方法",
          "fragment": "%E5%85%B6%E4%BB%96%E5%8A%9F%E8%83%BD%E6%96%B9%E6%B3%95",
          "fullPath": "#%E5%85%B6%E4%BB%96%E5%8A%9F%E8%83%BD%E6%96%B9%E6%B3%95",
          "level": 3
        }
      ],
      "level": 0
    }
  };

});
