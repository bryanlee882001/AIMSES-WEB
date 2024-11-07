import style from './FilterRange.module.css';
import React, { useState, useContext } from 'react';
import { filters as filterInfo } from '../../../config/filtersConfig';
// import { SelectionContext } from '../../../context/SelectionsContext';

interface Filter {
  name: string;
  active: boolean;
}

const Range: React.FC<{ filter: Filter }> = ({ filter }) => {
  // const { selections } = useContext(SelectionContext);
  const [selectedRange, setSelectedRange] = useState('');
  const filterDetails =
    filterInfo[filter.name as keyof typeof filterInfo] || {};

  const handleRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRange(event.target.value);
  };

  // Function to render range input fields dynamically based on rangeType
  const renderRangeInput = (label: string, id: string, unit: string) => (
    <div>
      <label htmlFor={id} className={style.rangeLabels}>
        {label}
      </label>
      <div className={style.inputContainer}>
        <input
          type="text"
          id={id}
          className={style.rangeInput}
          placeholder="Insert Value"
        />
        <span className={style.unit}>{unit}</span>
      </div>
    </div>
  );

  return (
    <>
      {(filterDetails.selectionType === 'range' ||
        filterDetails.selectionType === 'hemisphere-range') && (
        <>
          <div className={style.rangeContainer}>
            <select
              className={style.selectRange}
              id="rangeSelect"
              value={selectedRange}
              onChange={handleRangeChange}
            >
              <option value="" disabled>
                Select a Range
              </option>
              <option value="between">Between</option>
              <option value="lesserThan">Lesser Than</option>
              <option value="greaterThan">Greater Than</option>
            </select>

            {selectedRange === 'between' && (
              <>
                {renderRangeInput('From', 'minRange', filterDetails.unit)}
                {renderRangeInput('To', 'maxRange', filterDetails.unit)}
              </>
            )}

            {selectedRange === 'lesserThan' &&
              renderRangeInput(
                'Lesser Than',
                'lesserThanValue',
                filterDetails.unit,
              )}

            {selectedRange === 'greaterThan' &&
              renderRangeInput(
                'Greater Than',
                'greaterThanValue',
                filterDetails.unit,
              )}
          </div>
          <div>
            {filterDetails.selectionType === 'hemisphere-range' && (
              <select
                className={style.selectRange}
                id="rangeSelect"
                value={selectedRange}
              >
                <option value="" disabled selected>
                  Select a Hemisphere
                </option>
                <option value="northernhemisphere">Northern Hemisphere</option>
                <option value="southernhemisphere">Southern Hemisphere</option>
                <option value="either">Either</option>
              </select>
            )}
          </div>
        </>
      )}

      {filterDetails.selectionType === 'checkbox' && (
        <div className={style.checkboxContainer}>
          {filterDetails.selections?.map((selection, index) => (
            <label key={index} className={style.spectraRequirementsContainer}>
              <input type="radio" name="mechs" value={selection} />
              {selection}
              <span className={style.checkboxMark}></span>
            </label>
          ))}
        </div>
      )}
    </>
  );
};

export default Range;
