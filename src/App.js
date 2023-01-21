import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Pages/Router/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div  data-theme="pastel">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
