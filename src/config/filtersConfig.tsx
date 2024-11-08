export const filters = {
  'TIME': {
    title: 'Time',
    subtitle: 'Time',
    description: `Mission Start Date: 21 August 1996 \nMission End Date : 4 May 2009`,
    selectionType: 'range',
    selections: ['Between', 'Lesser Than', 'Greater Than'],
    unit: 'HH:MM:SS',
  },
  'MLT': {
    title: 'MLT',
    subtitle: 'Magnetic Global Time',
    description: 'Magnetic Global Time',
    selectionType: 'range',
    selections: ['Between', 'Lesser Than', 'Greater Than'],
    unit: 'HH:MM:SS',
  },
  'ILAT': {
    title: 'ILAT',
    subtitle: 'Invariant Latitude',
    description: 'Invariant Latitude',
    selectionType: 'hemisphere-range',
    selections: ['Northern Hemisphere', 'Southern Hemisphere', 'Either'],
    unit: 'Degree(s)',
  },
  'ALT': {
    title: 'ALT',
    subtitle: 'Altitude',
    description: 'Altitude',
    selectionType: 'range',
    selections: ['Between', 'Lesser Than', 'Greater Than'],
    unit: 'km',
  },
  'SZA': {
    title: 'SZA',
    subtitle: 'Solar Zenith Angle',
    description: 'Solar Zenith Angle',
    selectionType: 'range',
    selections: ['Between', 'Lesser Than', 'Greater Than'],
    unit: 'Degree(s)',
  },
  'F10.7': {
    title: 'F10.7',
    subtitle: 'F10.7 CM Radio Flux/Emissions',
    description: 'F10.7 CM Radio Flux/Emissions',
    selectionType: 'range',
    selections: ['Between', 'Lesser Than', 'Greater Than'],
    unit: 'SFU',
  },
  'EFLUX': {
    title: 'EFLUX',
    subtitle: 'Net Downgoing Electron Energy Flux',
    description: 'Net Downgoing Electron Energy Flux',
    selectionType: 'range',
    selections: ['Between', 'Lesser Than', 'Greater Than'],
    unit: 'ergs/cm²-s',
  },
  'NFLUX': {
    title: 'NFLUX',
    subtitle: 'Net Downgoing Electron Number Flux',
    description: 'Net Downgoing Electron Number Flux',
    selectionType: 'range',
    selections: ['Between', 'Lesser Than', 'Greater Than'],
    unit: '#/cm²-s',
  },
  'CONJUGATE SZA': {
    title: 'CONJUGATE SZA',
    subtitle: 'Solar Zenith Angle of the Conjugate Foot Point',
    description: 'Solar Zenith Angle of the Conjugate Foot Point',
    selectionType: 'range',
    selections: ['Between', 'Lesser Than', 'Greater Than'],
    unit: 'Degree(s)',
  },
  'KP': {
    title: 'KP',
    subtitle: 'KP Geomagnetic index',
    description: 'KP Geomagnetic index (+= 0.33 and -= 0.67)',
    selectionType: 'range',
    selections: ['Between', 'Lesser Than', 'Greater Than'],
    unit: '',
  },
  'AE': {
    title: 'AE',
    subtitle: 'AE Geomagnetic Index',
    description: 'AE Geomagnetic Index',
    selectionType: 'range',
    selections: ['Between', 'Lesser Than', 'Greater Than'],
    unit: 'nano Tesla (nT)',
  },
  'DST': {
    title: 'DST',
    subtitle: 'DST Geomagnetic Index',
    description: 'DST Geomagnetic Index',
    selectionType: 'range',
    selections: ['Between', 'Lesser Than', 'Greater Than'],
    unit: 'nano Tesla (nT)',
  },
  'SW DRIVING': {
    title: 'SW DRIVING',
    subtitle: 'Solar Wind Driving',
    description: `Solar Wind Driving and Dayside Merging Rate \nMean = 4415.95 \nMedian = 3157.64`,
    selectionType: 'range',
    selections: ['Between', 'Lesser Than', 'Greater Than'],
    unit: '(km/s)⁴⁄³ × (nT)²⁄³',
  },
  'LCA': {
    title: 'LCA',
    subtitle: 'Lost Cone Angle',
    description:
      'Theoretical Lost Cone Angle at Measurement Location as per IGRF Model',
    selectionType: 'range',
    selections: ['Between', 'Lesser Than', 'Greater Than'],
    unit: 'Degree(s)',
  },
  'MECHANISMS': {
    title: 'MECHANISMS',
    subtitle: 'Mechanisms',
    description: `QS: Quasi-Static \nAlf: Aflvénic \nWS: Wave-Scattering`,
    selectionType: 'checkbox',
    selections: [
      'QS Only',
      'QS Dominant',
      'Alf Only',
      'Alf Dominant',
      'WS Only',
      'WS Dominant',
      'QS + Alf',
      'QS + WS',
      'Alf + WS',
      'Alf + WS + QS',
      'Any QS',
      'Any Alf',
      'Any Wave Scattering',
      'Weak',
      'Any Intense',
    ],
    unit: '',
  },
};
