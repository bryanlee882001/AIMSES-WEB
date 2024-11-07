import { useContext } from 'react';
import { SelectionContext } from '../../context/SelectionsContext';
import { filters as filterInfo } from '../../config/filtersConfig';
import styles from './FilterSelection.module.css';

const FilterSelection = () => {
  const { selections, setSelections } = useContext(SelectionContext);

  const handleClick = (category: string, filterName: string) => {
    setSelections((prevSelections) => {
      const newSelections = { ...prevSelections };

      newSelections[category] = newSelections[category].map((filter) =>
        filter.name === filterName
          ? { ...filter, active: !filter.active }
          : filter,
      );

      return newSelections;
    });
  };

  return (
    <>
      <div className={styles.title}>Filter Selection</div>
      <div className={styles.selectionBody}>
        {Object.entries(selections).map(([category, filters]) => (
          <div key={category} className={styles.selectionCategory}>
            <h3>{category}</h3>
            <div className={styles.selectionCategory}>
              {filters.map((filter) => (
                <button
                  key={filter.name}
                  className={`${styles.selectionButton} ${filter.active ? styles.active : ''}`}
                  onClick={() => handleClick(category, filter.name)}
                  title={
                    filterInfo[filter.name as keyof typeof filterInfo]
                      .subtitle || ''
                  }
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilterSelection;
