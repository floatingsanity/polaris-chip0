import { html } from 'lit';
import '../src/polaris-chip0.js';

export default {
  title: 'PolarisChip0',
  component: 'polaris-chip0',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <polaris-chip0
      style="--polaris-chip0-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </polaris-chip0>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
