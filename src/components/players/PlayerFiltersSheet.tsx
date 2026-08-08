interface PlayerFiltersSheetProps {
  open: boolean;
  teams: string[];
  selectedTeams: string[];
  minimumPrice: string;
  maximumPrice: string;
  resultCount: number;
  onClose: () => void;
  onToggleTeam: (team: string) => void;
  onMinimumPriceChange: (value: string) => void;
  onMaximumPriceChange: (value: string) => void;
  onReset: () => void;
}

function PlayerFiltersSheet({
  open,
  teams,
  selectedTeams,
  minimumPrice,
  maximumPrice,
  resultCount,
  onClose,
  onToggleTeam,
  onMinimumPriceChange,
  onMaximumPriceChange,
  onReset
}: PlayerFiltersSheetProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="filters-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      }}
    >
      <section
        className="filters-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="filters-title"
      >
        <div className="sheet-handle" />

        <header className="filters-sheet__header">
          <div>
            <p className="eyebrow">Listone</p>
            <h2 id="filters-title">Filtri</h2>
          </div>

          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Chiudi filtri"
          >
            ×
          </button>
        </header>

        <div className="filter-section">
          <h3>Quotazione</h3>

          <div className="price-filter-grid">
            <label>
              <span>Minima</span>

              <input
                type="number"
                min="0"
                inputMode="numeric"
                value={minimumPrice}
                onChange={(event) =>
                  onMinimumPriceChange(
                    event.target.value
                  )
                }
                placeholder="0"
              />
            </label>

            <label>
              <span>Massima</span>

              <input
                type="number"
                min="0"
                inputMode="numeric"
                value={maximumPrice}
                onChange={(event) =>
                  onMaximumPriceChange(
                    event.target.value
                  )
                }
                placeholder="Nessun limite"
              />
            </label>
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-section__title">
            <h3>Squadre</h3>

            <span>
              {selectedTeams.length === 0
                ? 'Tutte'
                : `${selectedTeams.length} selezionate`}
            </span>
          </div>

          <div className="team-filter-grid">
            {teams.map((team) => {
              const selected =
                selectedTeams.includes(team);

              return (
                <button
                  key={team}
                  type="button"
                  className={selected ? 'active' : ''}
                  onClick={() => onToggleTeam(team)}
                  aria-pressed={selected}
                >
                  {team}
                </button>
              );
            })}
          </div>
        </div>

        <footer className="filters-sheet__footer">
          <button
            type="button"
            className="secondary-button"
            onClick={onReset}
          >
            Azzera
          </button>

          <button
            type="button"
            className="primary-button"
            onClick={onClose}
          >
            Mostra {resultCount} risultati
          </button>
        </footer>
      </section>
    </div>
  );
}

export default PlayerFiltersSheet;