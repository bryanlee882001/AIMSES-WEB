import style from './FilterRange.module.css';
import React, { useState, useContext } from 'react';
import { filters as filterInfo } from '../../../config/filtersConfig';
// import { SelectionContext } from '../../../context/SelectionsContext';

const Range = ({ filter }) => {
  // const { selections } = useContext(SelectionContext);
  const [selectedRange, setSelectedRange] = useState('');
  const filterDetails = filterInfo[filter.name as keyof typeof filterInfo] || {};

  const handleRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRange(event.target.value);
  };

  return (
    <div className={style.rangeContainer}>
      {/* Select a Range Value */}
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
          <div>
            <label id="minRangeLabel" className={style.rangeLabels}>
              From
            </label>
            <div className={style.inputContainer}>
              <input
                type="text"
                id="minRange"
                className={style.between}
                placeholder="Insert Value"
              />
              <span id="minRangeUnit">{filterDetails.unit}</span>
            </div>
          </div>
          <div>
            <label id="maxRangeLabel" className={style.rangeLabels}>
              To
            </label>
            <div className={style.inputContainer}>
              <input
                type="text"
                id="maxRange"
                className={style.between}
                placeholder="Insert Value"
              />
              <span id="maxRangeUnit">{filterDetails.unit}</span>
            </div>
          </div>
        </>
      )}

      {selectedRange === 'lesserThan' && (
        <div>
          <label id="lesserThanLabel" className={style.rangeLabels}>
            Lesser Than
          </label>
          <div className={style.inputContainer}>
            <input
              type="text"
              id="lesserThanValue"
              className={style.lesserThanInput}
              placeholder="Insert Value"
            />
            <span id="lesserThanUnit"></span>
          </div>
        </div>
      )}

      {selectedRange === 'greaterThan' && (
        <div>
          <label id="greaterThanLabel" className={style.rangeLabels}>
            Greater Than
          </label>
          <div className={style.inputContainer}>
            <input
              type="text"
              id="greaterThanValue"
              className={style.greaterThanInput}
              placeholder="Insert Value"
            />
            <span id="greaterThanUnit"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Range;
