import { useContext } from 'react';
import { SelectionContext } from '../../context/SelectionsContext';
import { filters as filterInfo } from '../../config/filtersConfig';
import styles from './Filters.module.css';
import FilterRange from './Range/FilterRange';

const Filters = () => {
  const { selections, setSelections } = useContext(SelectionContext);

  const closeFilter = (filterName: string) => {
    // Create a copy of selections to modify
    const updatedSelections = { ...selections };

    // Iterate through each category
    for (const category in updatedSelections) {
      const updatedFilters = updatedSelections[category].map((filter) =>
        filter.name === filterName ? { ...filter, active: false } : filter,
      );

      // Update the filters array for this category
      updatedSelections[category] = updatedFilters;
    }

    // Update the state with the new selections object
    setSelections(updatedSelections);
  };

  const displayFilterInfo = (filter: { name: string; active: boolean }) => {
    const filterDetails =
      filterInfo[filter.name as keyof typeof filterInfo] || {};

    return (
      <div key={filter.name} className={styles.filterContainer}>
        <div className={styles.titleContainer}>
          {/* Filter Title */}
          <div className={styles.filterTitle}>{filter.name}</div>

          {/* Close Button */}
          <button
            className={styles.closeButton}
            onClick={() => closeFilter(filter.name)}
          >
            ×
          </button>
        </div>

        {/* Filter Description */}
        <div className={styles.filterDescription}>
          {filterDetails.description || ''}
        </div>

        {/* Filter Range */}
        <FilterRange filterName={filter.name} />
      </div>
    );
  };

  return (
    <>
      <div className={styles.title}>Filter Criterias</div>
      <div className={styles.filterFrame}>
        {Object.entries(selections).map(([category, filters]) => (
          <div key={category}>
            {filters
              .filter((filter) => filter.active)
              .map((filter) => displayFilterInfo(filter))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Filters;
