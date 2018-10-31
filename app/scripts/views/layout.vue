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
    <!-- <quill-editor v-model="content"></quill-editor> -->
    <wang-editor v-model="content" :config="config"></wang-editor>
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
import WangEditor from '../components/wang-editor';

export default {
  components: {
    QuillEditor,
    WangEditor
  },
  data() {
    return {
      content: '',
      files: [],
      config: {
        // 下面两个配置，使用其中一个即可显示“上传图片”的tab。但是两者不要同时使用！！！
        // uploadImgShowBase64: true, // 使用 base64 保存图片
        uploadImgServer: '/upload', // 上传图片到服务器
        showLinkImg: false
      }
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
