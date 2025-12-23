import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  const {isSidebarCollapsed} = useApp()
  return (
    <AppProvider>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className={`${isSidebarCollapsed ? 'ml-16' : 'ml-64'}`} >
          <MainContent />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
