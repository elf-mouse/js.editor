<template>
  <div class="wang-editor">
    <div ref="editor" class="editor" @input="onInput"></div>
  </div>
</template>

<script>
import wangEditor from 'wangeditor';

const UI_EDITOR = {
  menus: [
    'head', // 标题
    'bold', // 粗体
    'fontSize', // 字号
    'fontName', // 字体
    'italic', // 斜体
    'underline', // 下划线
    'strikeThrough', // 删除线
    'foreColor', // 文字颜色
    'backColor', // 背景颜色
    'link', // 插入链接
    'list', // 列表
    'justify', // 对齐方式
    'quote', // 引用
    'emoticon', // 表情
    'image', // 插入图片
    'table', // 表格
    'video', // 插入视频
    'code', // 插入代码
    'undo', // 撤销
    'redo' // 重复
  ],
  events: {
    input: 'input'
  }
};

export default {
  name: 'wang-editor',
  model: {
    prop: 'content',
    event: UI_EDITOR.events.input
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      $editor: null
    };
  },
  mounted() {
    const customConfig = Object.assign(
      {
        onchange: html => {
          this.$emit(UI_EDITOR.events.input, html);
        }
      },
      this.config
    );

    this.$editor = new wangEditor('.editor');
    this.$editor.customConfig = customConfig;
    this.$editor.create();

    this.$editor.txt.html(this.content); // Set initial value
    this.$refs.editor.click(); // NOTE: some bugfix
  },
  beforeDestroy() {
    this.$editor = null;
  },
  methods: {
    onInput() {
      this.$emit(UI_EDITOR.events.input, this.$editor.txt.html());
    }
  }
};
</script>
