# Auroral Ionospheric Magnetospheric Statistical Electron Spectra (AIMSES)

## Project Description
A modernized web application that computes spectral statistics from data obtained from the Fast Auroral SnapshoT Explorer (FAST) satellite. 

## Instructions 
```
git clone https://github.com/bryanlee882001/AIMSES-WEB.git
cd AIMSES-WEB 
npm install 
npm run build
```

Provides:
```
Statistics: Mean, +1/-1σ, Median, 25%, 75%
Spectra: Downward, Upward, Mirroring
Normalization: Raw, Energy Flux, Number Flux
```

Sortable by:
```
Location: TIME, MLT, ILAT, ALT
Ionospheric Conditions: SZA, F10.7
Magnetospheric Conditions: EFLUX, NFLUX, CONJUGATE SZA, KP, AE, 
                           DST, SW DRIVING, LCA, MECHANISMS
```

<br/>

## ER Diagram
![AIMSES ER Diagram](https://github.com/bryanlee882001/AIMSES/assets/63344458/68d90a77-51c1-4d54-b87f-e695f073ba27)

