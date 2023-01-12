import './App.css';
import { AppProvider } from './context/AppProvider';
import Banner from './modules/banner/banner';
import DataGrid from './modules/data-grid/data-grid';

function App() {
  return (
    <AppProvider>
      <Banner />
      <DataGrid />
    </AppProvider>
  );
}

export default App;
