export const filters = {
  TIME: {
    title: 'TIME',
    description: `DateTime Format: YYYY-MM-DD HH:MM:SS \nMission Start Date: 21 August 1996 \nMission End Date: 4 May 2009`,
    selectionType: 'range',
    unit: '',
  },
  MLT: {
    title: 'MLT',
    description: 'Magnetic Global Time',
    selectionType: 'range',
    unit: 'HH:MM:SS',
  },
  ILAT: {
    title: 'ILAT',
    description: 'Invariant Latitude',
    selectionType: 'range',
    unit: 'Degree(s)',
  },
  ALT: {
    title: 'ALT',
    description: 'Altitude',
    selectionType: 'range',
    unit: 'km',
  },
  SZA: {
    title: 'SZA',
    description: 'Solar Zenith Angle',
    selectionType: 'range',
    unit: 'Degree(s)',
  },
  'F10.7': {
    title: 'F10.7',
    description: 'F10.7 CM Radio Flux/Emissions',
    selectionType: 'range',
    unit: 'SFU',
  },
  EFLUX: {
    title: 'EFLUX',
    description: 'Net Downgoing Electron Energy Flux',
    selectionType: 'range',
    unit: 'ergs/cm²-s',
  },
  NFLUX: {
    title: 'NFLUX',
    description: 'Net Downgoing Electron Number Flux',
    selectionType: 'range',
    unit: '#/cm²-s',
  },
  'CONJUGATE SZA': {
    title: 'CONJUGATE SZA',
    description: 'Solar Zenith Angle of the Conjugate Foot Point',
    selectionType: 'range',
    unit: 'Degree(s)',
  },
  KP: {
    title: 'KP',
    description: 'KP Geomagnetic index (+= 0.33 and -= 0.67)',
    selectionType: 'range',
    unit: '',
  },
  AE: {
    title: 'AE',
    description: 'AE Geomagnetic Index',
    selectionType: 'range',
    unit: 'nano Tesla (nT)',
  },
  DST: {
    title: 'DST',
    description: 'DST Geomagnetic Index',
    selectionType: 'range',
    unit: 'nano Tesla (nT)',
  },
  'SW DRIVING': {
    title: 'SOLAR WIND DRIVING',
    description: `Dayside Merging Rate \nMean = 4415.95 \nMedian = 3157.64`,

    selectionType: 'range',
    unit: '((km/s)<sup>4/3</sup>) x (nT<sup>2/3</sup>)',
  },
  LCA: {
    title: 'LCA',
    description:
      'Theoretical Lost Cone Angle at Measurement Location as per IGRF Model',
    selectionType: 'range',
    unit: 'Degree(s)',
  },
  MECHANISMS: {
    title: 'MECHANISMS',
    description: `QS: Quasi-Static \nAlf: Aflvénic \nWS: Wave-Scattering`,
    selectionType: 'checkbox',
    unit: '',
  },
};
