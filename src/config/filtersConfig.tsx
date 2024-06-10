export const filters = {
  TIME: {
    title: 'TIME',
    description: (
      <pre>
        {`DateTime Format: YYYY-MM-DD HH:MM:SS
Mission Start Date: 21 August 1996 
Mission End Date: 4 May 2009`}
      </pre>
    ),
    selection: 'range',
    unit: '',
  },
  MLT: {
    title: 'MLT',
    description: 'Magnetic Global Time',
    selection: 'range',
    unit: 'HH:MM:SS',
  },
  ILAT: {
    title: 'ILAT',
    description: 'Invariant Latitude',
    selection: 'range',
    unit: 'Degree(s)',
  },
  ALT: {
    title: 'ALT',
    description: 'Altitude',
    selection: 'range',
    unit: 'km',
  },
  SZA: {
    title: 'SZA',
    description: 'Solar Zenith Angle',
    selection: 'range',
    unit: 'Degree(s)',
  },
  'F10.7': {
    title: 'F10.7',
    description: 'F10.7 CM Radio Flux/Emissions',
    selection: 'range',
    unit: 'SFU',
  },
  EFLUX: {
    title: 'EFLUX',
    description: 'Net Downgoing Electron Energy Flux',
    selection: 'range',
    unit: 'ergs/cm²-s',
  },
  NFLUX: {
    title: 'NFLUX',
    description: 'Net Downgoing Electron Number Flux',
    selection: 'range',
    unit: '#/cm²-s',
  },
  'CONJUGATE SZA': {
    title: 'CONJUGATE SZA',
    description: 'Solar Zenith Angle of the Conjugate Foot Point',
    selection: 'range',
    unit: 'Degree(s)',
  },
  KP: {
    title: 'KP',
    description: 'KP Geomagnetic index (+= 0.33 and -= 0.67)',
    selection: 'range',
    unit: '',
  },
  AE: {
    title: 'AE',
    description: 'AE Geomagnetic Index',
    selection: 'range',
    unit: 'nano Tesla (nT)',
  },
  DST: {
    title: 'DST',
    description: 'DST Geomagnetic Index',
    selection: 'range',
    unit: 'nano Tesla (nT)',
  },
  'SW DRIVING': {
    title: 'SOLAR WIND DRIVING',
    description: (
      <pre>
        {`Dayside Merging Rate
Mean = 4415.95, Median = 3157.64`}
      </pre>
    ),
    selection: 'range',
    unit: '((km/s)<sup>4/3</sup>) x (nT<sup>2/3</sup>)',
  },
  LCA: {
    title: 'LCA',
    description:
      'Theoretical Lost Cone Angle at Measurement Location as per IGRF Model',
    selection: 'range',
    unit: 'Degree(s)',
  },
  MECHANISMS: {
    title: 'MECHANISMS',
    description: (
      <pre>
        {`QS: Quasi-Static
Alf: Aflvénic
WS: Wave-Scattering`}
      </pre>
    ),
    selection: 'checkbox',
    unit: '',
  },
};
