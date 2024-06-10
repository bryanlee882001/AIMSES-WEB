import { useContext } from 'react';
import { SelectionContext } from '../../context/SelectionsContext';
import { filters as filterInfo } from '../../config/filtersConfig';
import styles from './Filters.module.css';

const Filters = () => {
  const { selections } = useContext(SelectionContext);

  const displayFilterInfo = (filter: { name: string; active: boolean }) => {
    const filterDetails =
      filterInfo[filter.name as keyof typeof filterInfo] || {};

    return (
      <div key={filter.name} className={styles.filterContainer}>
        <div className={styles.filterTitle}>{filter.name}</div>
        <div className={styles.filterDescription}>
          {filterDetails.description || ''}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.filterFrame}>
      {Object.entries(selections).map(([category, filters]) => (
        <div>
          {filters
            .filter((filter) => filter.active)
            .map((filter) => displayFilterInfo(filter))}
        </div>
      ))}
    </div>
  );
};

export default Filters;
