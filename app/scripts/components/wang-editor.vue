<template>
  <div class="wang-editor">
    <div class="editor"></div>
  </div>
</template>

<script>
import wangEditor from 'wangeditor';

const EDITOR_EVENT = 'input';

export default {
  name: 'wang-editor',
  model: {
    prop: 'content',
    event: EDITOR_EVENT
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
    this.$editor = new wangEditor('.editor');

    let customConfig = Object.assign(this.config, {
      onchange: html => {
        this.$emit(EDITOR_EVENT, html);
      }
    });
    this.$editor.customConfig = customConfig;

    this.$editor.create();
  },
  beforeDestroy() {
    this.$editor = null;
  }
};
</script>
