import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import PageNotFound from './lib/PageNotFound';
// import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
// Add page imports here

const AuthenticatedApp = () => {
  

 

  // Render the main app
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
};


function App() {

  return (

      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>

  )
}

export default App