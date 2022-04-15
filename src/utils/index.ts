import { SmoothGeodesicOptions } from 'leaflet'

export const getPathOptions = (color: string, delay: number) =>
  ({
    color,
    weight: 4,
    animate: {
      duration: 3000,
      iterations: 1,
      easing: 'ease-in-out',
      direction: 'alternate',
      delay
    }
  } as SmoothGeodesicOptions)
