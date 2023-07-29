import type { Preview, Story } from '@storybook/react';
import '../src/app/globals.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { withMaxWidth } from './decorators';

const preview: Preview = {
  decorators: [withMaxWidth],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Introduction', 'REA'],
        locales: 'en-US',
      },
    },
  },
};

export default preview;
