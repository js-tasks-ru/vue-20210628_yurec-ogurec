import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: {
    count: {
      default: 0,
      type: Number,
    },
  },

  emits: ['update:count'],

  data() {
    return {
      currentCount: this.count,
    };
  },

  watch: {
    count(newValue) {
      this.currentCount = newValue;
    },
  },

  methods: {
    inc() {
      this.$emit('update:count', ++this.currentCount);
    },
  },

  template: `<button type="button" @click="inc()">{{ currentCount }}</button>`,
});
