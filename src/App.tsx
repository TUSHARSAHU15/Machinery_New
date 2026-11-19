import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { StockListPage } from './pages/StockListPage';
import { MachineDetailPage } from './pages/MachineDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/index" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/we-import" element={<StockListPage />} />
          <Route path="/machinery-we-import" element={<StockListPage />} />
          <Route path="/stock-list" element={<StockListPage />} />
          <Route path="/stock_list2" element={<StockListPage />} />
          <Route path="/machines" element={<StockListPage />} />
          <Route path="/machines/:slug" element={<MachineDetailPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/quote" element={<Navigate to="/contactus" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
