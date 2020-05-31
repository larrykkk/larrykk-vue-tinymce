<template>
  <editor id="tinymce" :value="value" @input="onChange($event)" :init="init" />
</template>

<script>
import tinymce from 'tinymce/tinymce';
import Editor from '@tinymce/tinymce-vue';
import 'tinymce/themes/silver';
import 'tinymce/icons/default';
import 'tinymce/plugins/image'; // 插入上傳圖片插件
import 'tinymce/plugins/media'; // 插入影片插件
import 'tinymce/plugins/table'; // 插入表格插件
import 'tinymce/plugins/lists'; // 列表插件
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/link';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/print';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/help';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/template';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/toc';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/textpattern';
import 'tinymce/plugins/noneditable';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/autosave';

export default {
  name: 'TinyMce',
  components: {
    editor: Editor
  },
  props: {
    value: {
      type: String,
      required: true
    },
    init: {
      type: Object,
      default: function() {
        return {
          language_url: '/lib/tinymce/langs/zh_TW.js',
          language: 'zh_TW',
          emoticons_database_url:
            '/lib/tinymce/plugins/emoticons/js/emojis.min.js',
          skin_url: '/lib/tinymce/skins/ui/oxide',
          height: 500,
          plugins: [
            'lists advlist',
            'image imagetools',
            'link autolink',
            'table',
            'charmap',
            'searchreplace visualblocks code fullscreen',
            'print preview anchor insertdatetime media',
            'help codesample hr pagebreak nonbreaking toc textpattern noneditable ',
            'importcss',
            'directionality',
            'visualchars',
            'emoticons',
            'autosave'
          ],
          toolbar:
            'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
          branding: false,
          menubar: true,
          // 此處為圖片上傳處理函數，這個直接用了base64的圖片形式上傳圖片，
          // 如需ajax上傳可參考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
          images_upload_handler: (blobInfo, success, failure) => {
            const img = 'data:image/jpeg;base64,' + blobInfo.base64();
            success(img);
          }
        };
      }
    }
  },
  methods: {
    onChange(newValue) {
      this.$emit('input', newValue);
    }
  }
};
</script>
