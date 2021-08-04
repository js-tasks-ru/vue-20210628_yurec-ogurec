import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      loading: false,
      error: null,
    };
  },

  watch: {
    meetupId: {
      immediate: true,
      handler: async function watchMeetupId(newValue) {
        this.meetup = null;
        this.error = null;
        this.loading = true;
        try {
          this.meetup = await fetchMeetupById(newValue);
        } catch (error) {
          this.error = error.message;
        } finally {
          this.loading = false;
        }
      },
    },
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <meetup-view v-if="meetup" :meetup="meetup"></meetup-view>

      <ui-container v-if="loading">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-if="error">
        <ui-alert>{{ error }}</ui-alert>
      </ui-container>
    </div>`,
});
