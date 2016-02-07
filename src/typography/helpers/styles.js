let styles = {};

if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'modules') {
  styles = require('./stylesheet.scss');
} else {
  if (process.env.REACT_FOUNDATION_COMPONENTS_CSS === 'global') {
    require('./stylesheet.scss');
  }

  const classNames = ['subheader', 'lead', 'no-bullet', 'stat'];
  const keyMirrorArray = require('../../util/key-mirror-array').default;

  styles = keyMirrorArray(classNames);
}

export default styles;
