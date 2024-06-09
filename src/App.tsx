import { SelectionProvider } from './context/SelectionsContext';
import FilterSelection from './components/2-FilterSelection/FilterSelection';
import Title from './components/1-Introduction/Introduction';

function App() {
  return (
    <SelectionProvider>
      <Title />
      <FilterSelection />
    </SelectionProvider>
  );
}

export default App;
