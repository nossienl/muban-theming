/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('options-panel', require('./muban-options.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
      {{> muban-options @root}}
    </hbs>`,
  {},
);
