import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { FieldPocketProvider } from './context/FieldPocketContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { StoriesPage } from './pages/StoriesPage';
import { StoryDetailPage } from './pages/StoryDetailPage';
import { CommunityPage } from './pages/CommunityPage';
import { ShareStoryPage } from './pages/ShareStoryPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <FieldPocketProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-cream text-charcoal">
          <Navbar />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route path="/stories/:slug" element={<StoryDetailPage />} />
              <Route
                path="/story-detail"
                element={
                  <Navigate
                    to="/stories/the-11-14-upright-at-union-concourse"
                    replace
                  />
                }
              />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/share" element={<ShareStoryPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </FieldPocketProvider>
  );
};

export default App;

