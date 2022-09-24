import { BACKGROUND_COLOR, COLOR_INDIGO_700 } from '../theme/colors';

export const backgroundConfig = {
  background: {
    color: {
      value: BACKGROUND_COLOR,
    },
  },
  fpsLimit: 120,
  interactivity: {
    modes: {
      push: {
        quantity: 10,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: COLOR_INDIGO_700,
    },
    links: {
      color: COLOR_INDIGO_700,
      distance: 150,
      enable: true,
      opacity: 1,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 30,
    },
    opacity: {
      value: 0.8,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
};
