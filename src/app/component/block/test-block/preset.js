/* eslint-disable max-len */
import { storiesOf } from 'storybook/utils/utils';

storiesOf('test-block', require('./test-block.hbs')).add(
  'default',
  'No description yet...',
  `<hbs>
			{{> block/test-block @root}}
		</hbs>`,
  require('./data'),
);
