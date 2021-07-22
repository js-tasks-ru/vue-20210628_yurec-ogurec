import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
createApp({
  data() {
    return {
      a: 0,
      b: 0,
      op: 'sum',
    };
  },
  computed: {
    result() {
      switch (this.op) {
        case 'sum':
          return this.a + this.b;
        case 'subtract':
          return this.a - this.b;
        case 'multiply':
          return this.a * this.b;
        case 'divide':
          return this.a / this.b;
      }
      return undefined;
    },
  },
}).mount('#app');
