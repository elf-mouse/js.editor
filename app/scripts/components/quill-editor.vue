<template>
  <div class="quill-editor">
    <div ref="editor"></div>
  </div>
</template>

<script>
import Quill from 'quill';

const toolbar = [
  ['bold', 'italic', 'underline'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  ['link', 'image'],
  ['clean']
];

const DEFAULTS = {
  modules: {
    toolbar
  },
  theme: 'snow'
};

export default {
  name: 'ui-editor',
  model: {
    prop: 'content',
    event: 'change'
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    config: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      $editor: null,
      currentContent: this.content
    };
  },
  watch: {
    model(val) {
      if (this.$editor) {
        if (val !== this.currentContent) {
          this.currentContent = val;
          this.$editor.setHTML(val);
        } else if(!val) {
          this.$editor.setText('');
        }
      }
    }
  },
  methods: {
    init() {
      this.$editor = new Quill(this.$refs.editor, Object.assign(DEFAULTS, this.config));

      // Set editor content
      if (this.model) {
        this.$editor.setHTML(this.model);
      }

      this.$editor.on('text-change', (delta, source) => {
        let html = this.$refs.editor.children[0].innerHTML;
        if (html === '<p><br></p>') html = '';

        this.currentContent = html;
        this.$emit('change', this.currentContent);
      });
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.$editor = null
  }
};
</script>
