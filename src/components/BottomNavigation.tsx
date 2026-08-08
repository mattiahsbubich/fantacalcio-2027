import type { ReactNode } from 'react';

export type PageId =
  | 'home'
  | 'players'
  | 'tiers'
  | 'auction'
  | 'strategy';

interface BottomNavigationProps {
  activePage: PageId;
  onChange: (page: PageId) => void;
}

const items: Array<{
  id: PageId;
  label: string;
  icon: ReactNode;
  primary?: boolean;
}> = [
  {
    id: 'home',
    label: 'Home',
    icon: (
      <path d="M3 10.8 12 3l9 7.8v9.7a.5.5 0 0 1-.5.5h-5.2v-6.2H8.7V21H3.5a.5.5 0 0 1-.5-.5v-9.7Z" />
    )
  },
  {
    id: 'players',
    label: 'Listone',
    icon: (
      <>
        <path d="M7 5h14M7 12h14M7 19h14" />
        <circle cx="3" cy="5" r="1" />
        <circle cx="3" cy="12" r="1" />
        <circle cx="3" cy="19" r="1" />
      </>
    )
  },
  {
    id: 'auction',
    label: 'Asta',
    primary: true,
    icon: (
      <>
        <path d="M12 3v18" />
        <path d="M16.5 7.2c-.9-1.4-2.5-2.2-4.5-2.2-2.8 0-4.8 1.4-4.8 3.5 0 5.1 9.6 2.3 9.6 7.1 0 2.1-2 3.4-4.9 3.4-2.2 0-4-.8-5-2.4" />
      </>
    )
  },
  {
    id: 'tiers',
    label: 'Fasce',
    icon: (
      <>
        <path d="M5 6h14" />
        <path d="M7 12h10" />
        <path d="M9 18h6" />
      </>
    )
  },
  {
    id: 'strategy',
    label: 'Strategia',
    icon: (
      <>
        <circle
          cx="12"
          cy="12"
          r="8"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
        />
        <path d="M12 4V2M20 12h2M12 20v2M4 12H2" />
      </>
    )
  }
];

function BottomNavigation({
  activePage,
  onChange
}: BottomNavigationProps) {
  return (
    <nav
      className="bottom-navigation"
      aria-label="Navigazione principale"
    >
      <div className="bottom-navigation__dock">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${
              activePage === item.id
                ? 'active'
                : ''
            } ${
              item.primary
                ? 'primary-nav-item'
                : ''
            }`}
            onClick={() =>
              onChange(item.id)
            }
            aria-current={
              activePage === item.id
                ? 'page'
                : undefined
            }
          >
            <span
              className="nav-icon"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {item.icon}
              </svg>
            </span>

            <span className="nav-label">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default BottomNavigation;