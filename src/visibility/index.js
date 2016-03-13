import { PropTypes } from 'react';

import { SCREEN_SIZES, LARGER_SCREEN_SIZES, SCREEN_ORIENTATIONS } from '../util/constants';
import createWrapperComponent from '../util/create-wrapper-component';
import styles from './_styles.scss';

export const ShowForScreenSize = createWrapperComponent({
  displayName: 'ShowForScreenSize',
  styles,
  propTypes: {
    screenSize: PropTypes.oneOf(SCREEN_SIZES).isRequired,
  },
  mapPropsToClassNames: ({ screenSize }) => ({
    [`show-for-${screenSize}`]: LARGER_SCREEN_SIZES.includes(screenSize),
  }),
});

export const ShowOnlyForScreenSize = createWrapperComponent({
  displayName: 'ShowOnlyForScreenSize',
  styles,
  propTypes: {
    screenSize: PropTypes.oneOf(SCREEN_SIZES).isRequired,
  },
  mapPropsToClassNames: ({ screenSize }) => ({
    [`show-for-${screenSize}-only`]: SCREEN_SIZES.includes(screenSize),
  }),
});

export const HideForScreenSize = createWrapperComponent({
  displayName: 'HideForScreenSize',
  styles,
  propTypes: {
    screenSize: PropTypes.oneOf(SCREEN_SIZES).isRequired,
  },
  mapPropsToClassNames: ({ screenSize }) => ({
    hide: !LARGER_SCREEN_SIZES.includes(screenSize) && SCREEN_SIZES.includes(screenSize),
    [`hide-for-${screenSize}`]: LARGER_SCREEN_SIZES.includes(screenSize),
  }),
});

export const HideOnlyForScreenSize = createWrapperComponent({
  displayName: 'HideOnlyForScreenSize',
  styles,
  propTypes: {
    screenSize: PropTypes.oneOf(SCREEN_SIZES).isRequired,
  },
  mapPropsToClassNames: ({ screenSize }) => ({
    [`hide-for-${screenSize}-only`]: SCREEN_SIZES.includes(screenSize),
  }),
});

export const Hide = createWrapperComponent({
  displayName: 'Hide',
  styles,
  mapPropsToClassNames: () => 'hide',
});

export const Invisible = createWrapperComponent({
  displayName: 'Invisible',
  styles,
  mapPropsToClassNames: () => 'invisible',
});

export const ShowForScreenOrientation = createWrapperComponent({
  displayName: 'ShowForScreenOrientation',
  styles,
  propTypes: {
    screenOrientation: PropTypes.oneOf(SCREEN_ORIENTATIONS).isRequired,
  },
  mapPropsToClassNames: ({ screenOrientation }) => ({
    [`show-for-${screenOrientation}`]: SCREEN_ORIENTATIONS.includes(screenOrientation),
  }),
});

export const HideForScreenOrientation = createWrapperComponent({
  displayName: 'HideForScreenOrientation',
  styles,
  propTypes: {
    screenOrientation: PropTypes.oneOf(SCREEN_ORIENTATIONS).isRequired,
  },
  mapPropsToClassNames: ({ screenOrientation }) => ({
    [`hide-for-${screenOrientation}`]: SCREEN_ORIENTATIONS.includes(screenOrientation),
  }),
});

export const ShowForScreenReader = createWrapperComponent({
  displayName: 'ShowForScreenReader',
  styles,
  mapPropsToClassNames: () => 'show-for-sr',
});

export const HideForScreenReader = createWrapperComponent({
  displayName: 'HideForScreenReader',
  styles,
  mapPropsToProps: () => ({ 'aria-hidden': true }),
});

export const ShowOnFocus = createWrapperComponent({
  displayName: 'ShowOnFocus',
  styles,
  mapPropsToClassNames: () => 'show-on-focus',
});

export default {
  ShowForScreenSize,
  ShowOnlyForScreenSize,
  HideForScreenSize,
  HideOnlyForScreenSize,
  Hide,
  Invisible,
  ShowForScreenOrientation,
  HideForScreenOrientation,
  ShowForScreenReader,
  HideForScreenReader,
  ShowOnFocus,
};
