import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: null,
    },
  },

  computed: {
    style() {
      return this.image ? `--bg-url: url(${this.image})` : '';
    },
  },

  template: `
    <div class="meetup-cover" :style="style">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
