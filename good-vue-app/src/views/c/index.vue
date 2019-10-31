<template>
  <comp-root>
    <h1>c</h1>
    <router-link :to="`/c/${ Number(id) + 1 }`">
      c => c
    </router-link>
    <div>
      <el-button @click="showHtmlMsgBox">
        显示自定义 html 内容
      </el-button>
    </div>
    <div>
      <el-button @click="showVNodeMsgBox">
        显示组件内容(VNode)
      </el-button>
    </div>
    <div ref="msg-box-template" style="display: none">
      <p>我是内容</p>
      <p>我是自定义 html</p>
    </div>
  </comp-root>
</template>

<script>
  import Model from './model'

  export default {
    name: 'page-c',
    props: {
      id: {
        type: [ String, Number ],
        required: true
      }
    },
    methods: {
      showHtmlMsgBox () {
        this
          .$msgbox({
            title: '我是标题',
            message: this.$refs[ 'msg-box-template' ].innerHTML,
            dangerouslyUseHTMLString: true,
            beforeClose (action, instance, done) {
              console.log('c 页面自定义 html 内容的模态框关闭前，可进行操作，最后调用 done 结束掉')
              done()
            }
          })
          .then(() => console.log('c 页面自定义 html 内容的模态框确认了'))
          .catch(() => console.log('c 页面自定义 html 内容的模态框取消了'))
      },
      showVNodeMsgBox () {
        this
          .$msgbox({
            title: '我是标题',
            message: this.$createElement(Model),
            dangerouslyUseHTMLString: true,
            beforeClose (action, instance, done) {
              console.log('c 页面组件模态框关闭前，可进行操作，最后调用 done 结束掉')
              done()
            }
          })
          .then(() => console.log('c 页面组件模态框确认了'))
          .catch(() => console.log('c 页面组件模态框取消了'))
      }
    }
  }
</script>