<template>
  <div class="quill-editor">
    <div ref="editor"></div>
  </div>
</template>

<script>
import Quill from 'quill';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block'],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction

  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ['clean'] // remove formatting button
];

const DEFAULTS = {
  modules: {
    toolbar: '#toolbar' // toolbarOptions
  },
  theme: 'snow'
};

const EDITOR_EVENT = 'input';

export default {
  name: 'quill-editor',
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
    },
    placeholder: String
  },
  data() {
    return {
      $editor: null,
      currentContent: this.content
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.$editor = null;
  },
  methods: {
    init() {
      if (this.placeholder) {
        this.config = Object.assign(this.config, {
          placeholder: this.placeholder
        });
      }

      this.$editor = new Quill(
        this.$refs.editor,
        Object.assign(DEFAULTS, this.config)
      );

      // Set editor content
      if (this.model) {
        this.$editor.setContents(this.model);
      }

      this.$editor.on('text-change', (delta, source) => {
        let html = this.$refs.editor.children[0].innerHTML;
        if (html === '<p><br></p>') html = '';

        this.currentContent = html;
        this.$emit(EDITOR_EVENT, this.currentContent);
      });
    }
  }
};
</script>
