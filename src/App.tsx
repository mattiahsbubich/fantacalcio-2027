import { useEffect, useState } from 'react';
import BottomNavigation, {
  type PageId
} from './components/BottomNavigation';
import AuctionPage from './pages/AuctionPage';
import HomePage from './pages/HomePage';
import PlayersPage from './pages/PlayersPage';
import StrategyPage from './pages/StrategyPage';
import TiersPage from './pages/TiersPage';

const pageTitles: Record<PageId, string> = {
  home: 'Fantacalcio 26/27',
  players: 'Listone',
  tiers: 'Fasce',
  auction: 'Asta',
  strategy: 'Strategia'
};

function App() {
  const [activePage, setActivePage] =
    useState<PageId>('home');

  const [isOnline, setIsOnline] =
    useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener(
      'online',
      handleOnline
    );

    window.addEventListener(
      'offline',
      handleOffline
    );

    return () => {
      window.removeEventListener(
        'online',
        handleOnline
      );

      window.removeEventListener(
        'offline',
        handleOffline
      );
    };
  }, []);

  function renderPage() {
    switch (activePage) {
      case 'players':
        return <PlayersPage />;

      case 'tiers':
        return <TiersPage />;

      case 'auction':
        return <AuctionPage />;

      case 'strategy':
        return <StrategyPage />;

      case 'home':
      default:
        return <HomePage />;
    }
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">
            Fanta 2026/27
          </p>

          <h1>
            {pageTitles[activePage]}
          </h1>
        </div>

        <span
          className={`status-badge ${
            isOnline
              ? 'online'
              : 'offline'
          }`}
        >
          {isOnline
            ? 'Online'
            : 'Offline'}
        </span>
      </header>

      <main className="page-content">
        {renderPage()}
      </main>

      <BottomNavigation
        activePage={activePage}
        onChange={setActivePage}
      />
    </div>
  );
}

export default App;