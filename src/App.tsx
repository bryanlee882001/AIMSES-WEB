import { SelectionProvider } from './context/SelectionsContext';
import Introduction from './components/1-Introduction/Introduction';
import FilterSelection from './components/2-FilterSelection/FilterSelection';
import Filters from './components/3-Filters/Filters';

function App() {
  return (
    <SelectionProvider>
      <Introduction />
      <FilterSelection />
      <Filters />
    </SelectionProvider>
  );
}

export default App;
