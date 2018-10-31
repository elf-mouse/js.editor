<template>
  <div>
    <div id="toolbar">
      <!-- Add buttons as you would before -->
      <button class="ql-bold"></button>
      <button class="ql-italic"></button>
      <button class="ql-link"></button>
      <button class="ql-image"></button>
      <!-- But you can also add your own -->
      <ui-file accept="image/*" @change="onChange">
        Upload
      </ui-file>
    </div>
    <quill-editor v-model="content"></quill-editor>
    <button type="button" @click="submit">Submit</button>
    <hr>
    <p>Preview:</p>
    <pre v-html="content"></pre>
    <hr>
    <p>Upload Info:</p>
    <div v-if="files.length">
      {{ files }}
    </div>
  </div>
</template>

<script>
import QuillEditor from '../components/quill-editor';

export default {
  components: {
    QuillEditor
  },
  data() {
    return {
      content: '',
      files: []
    }
  },
  methods: {
    submit() {
      console.log(this.content);
    },
    onChange (files) {
      this.files = files;
    }
  }
};
</script>
