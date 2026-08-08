import {
  useMemo,
  useState
} from 'react';
import PlayerFiltersSheet from '../components/players/PlayerFiltersSheet';
import { usePlayers } from '../hooks/usePlayers';
import { usePersistentState } from '../hooks/usePersistentState';
import { usePlayerProfiles } from '../hooks/usePlayerProfiles';
import type {
  Player,
  PlayerRole
} from '../types/player';
import {
  calculateCreditsFromPercentage
} from '../types/playerProfile';

type RoleFilter =
  | PlayerRole
  | 'ALL';

type SortOption =
  | 'name-asc'
  | 'name-desc'
  | 'price-desc'
  | 'price-asc'
  | 'team-asc'
  | 'custom';

type PlayerOrder =
  Record<string, number>;

const roles: Array<{
  id: RoleFilter;
  label: string;
  shortLabel: string;
}> = [
  {
    id: 'ALL',
    label: 'Tutti',
    shortLabel: 'Tutti'
  },
  {
    id: 'P',
    label: 'Portieri',
    shortLabel: 'P'
  },
  {
    id: 'D',
    label: 'Difensori',
    shortLabel: 'D'
  },
  {
    id: 'C',
    label: 'Centrocampisti',
    shortLabel: 'C'
  },
  {
    id: 'A',
    label: 'Attaccanti',
    shortLabel: 'A'
  }
];

const roleNames: Record<
  PlayerRole,
  string
> = {
  P: 'Portiere',
  D: 'Difensore',
  C: 'Centrocampista',
  A: 'Attaccante'
};

const roleSortOrder: Record<
  PlayerRole,
  number
> = {
  P: 0,
  D: 1,
  C: 2,
  A: 3
};

function comparePlayers(
  firstPlayer: Player,
  secondPlayer: Player,
  sortOption: SortOption,
  personalOrder: PlayerOrder
): number {
  switch (sortOption) {
    case 'name-desc':
      return secondPlayer.name.localeCompare(
        firstPlayer.name,
        'it'
      );

    case 'price-desc':
      return (
        secondPlayer.listPrice -
          firstPlayer.listPrice ||
        firstPlayer.name.localeCompare(
          secondPlayer.name,
          'it'
        )
      );

    case 'price-asc':
      return (
        firstPlayer.listPrice -
          secondPlayer.listPrice ||
        firstPlayer.name.localeCompare(
          secondPlayer.name,
          'it'
        )
      );

    case 'team-asc':
      return (
        firstPlayer.team.localeCompare(
          secondPlayer.team,
          'it'
        ) ||
        firstPlayer.name.localeCompare(
          secondPlayer.name,
          'it'
        )
      );

    case 'custom': {
      const roleDifference =
        roleSortOrder[
          firstPlayer.role
        ] -
        roleSortOrder[
          secondPlayer.role
        ];

      if (
        roleDifference !== 0
      ) {
        return roleDifference;
      }

      const firstOrder =
        personalOrder[
          firstPlayer.id
        ] ??
        Number.MAX_SAFE_INTEGER;

      const secondOrder =
        personalOrder[
          secondPlayer.id
        ] ??
        Number.MAX_SAFE_INTEGER;

      return (
        firstOrder -
          secondOrder ||
        secondPlayer.listPrice -
          firstPlayer.listPrice ||
        firstPlayer.name.localeCompare(
          secondPlayer.name,
          'it'
        )
      );
    }

    case 'name-asc':
    default:
      return firstPlayer.name.localeCompare(
        secondPlayer.name,
        'it'
      );
  }
}

function PlayersPage() {
  const {
    allPlayers,
    addCustomPlayer,
    isCustomPlayer
  } = usePlayers();

  const {
    getProfile
  } = usePlayerProfiles();

  const [
    query,
    setQuery
  ] = useState('');

  const [
    activeRole,
    setActiveRole
  ] =
    useState<RoleFilter>(
      'ALL'
    );

  const [
    sortOption,
    setSortOption
  ] =
    usePersistentState<SortOption>(
      'fantacalcio:listone-sort',
      'name-asc'
    );

  const [
    personalOrder,
    setPersonalOrder
  ] =
    usePersistentState<PlayerOrder>(
      'fantacalcio:player-order',
      {}
    );

  const [
    selectedTeams,
    setSelectedTeams
  ] =
    useState<string[]>([]);

  const [
    minimumPrice,
    setMinimumPrice
  ] = useState('');

  const [
    maximumPrice,
    setMaximumPrice
  ] = useState('');

  const [
    filtersOpen,
    setFiltersOpen
  ] = useState(false);

  /*
   * =========================
   * NUOVO GIOCATORE
   * =========================
   */

  const [
    newPlayerName,
    setNewPlayerName
  ] = useState('');

  const [
    newPlayerTeam,
    setNewPlayerTeam
  ] = useState('');

  const [
    newPlayerRole,
    setNewPlayerRole
  ] =
    useState<PlayerRole>('A');

  const [
    newPlayerPrice,
    setNewPlayerPrice
  ] = useState('1');

  const [
    newPlayerMessage,
    setNewPlayerMessage
  ] = useState('');

  /*
   * =========================
   * SQUADRE
   * =========================
   */

  const teams = useMemo(
    () =>
      Array.from(
        new Set(
          allPlayers.map(
            (player) =>
              player.team
          )
        )
      ).sort(
        (
          firstTeam,
          secondTeam
        ) =>
          firstTeam.localeCompare(
            secondTeam,
            'it'
          )
      ),
    [allPlayers]
  );

  /*
   * =========================
   * FILTRI
   * =========================
   */

  const filteredPlayers =
    useMemo(() => {
      const normalizedQuery =
        query
          .trim()
          .toLocaleUpperCase(
            'it'
          );

      const parsedMinimumPrice =
        minimumPrice === ''
          ? null
          : Number(
              minimumPrice
            );

      const parsedMaximumPrice =
        maximumPrice === ''
          ? null
          : Number(
              maximumPrice
            );

      return allPlayers
        .filter(
          (player) =>
            activeRole ===
              'ALL' ||
            player.role ===
              activeRole
        )
        .filter(
          (player) =>
            normalizedQuery
              .length === 0 ||
            player.name.includes(
              normalizedQuery
            ) ||
            player.team.includes(
              normalizedQuery
            )
        )
        .filter(
          (player) =>
            selectedTeams
              .length === 0 ||
            selectedTeams.includes(
              player.team
            )
        )
        .filter(
          (player) =>
            parsedMinimumPrice ===
              null ||
            player.listPrice >=
              parsedMinimumPrice
        )
        .filter(
          (player) =>
            parsedMaximumPrice ===
              null ||
            player.listPrice <=
              parsedMaximumPrice
        )
        .sort(
          (
            firstPlayer,
            secondPlayer
          ) =>
            comparePlayers(
              firstPlayer,
              secondPlayer,
              sortOption,
              personalOrder
            )
        );
    }, [
      activeRole,
      allPlayers,
      maximumPrice,
      minimumPrice,
      personalOrder,
      query,
      selectedTeams,
      sortOption
    ]);

  const activeFilterCount =
    selectedTeams.length +
    (
      minimumPrice !== ''
        ? 1
        : 0
    ) +
    (
      maximumPrice !== ''
        ? 1
        : 0
    );

  /*
   * =========================
   * FUNZIONI
   * =========================
   */

  function toggleTeam(
    team: string
  ) {
    setSelectedTeams(
      (currentTeams) =>
        currentTeams.includes(
          team
        )
          ? currentTeams.filter(
              (
                currentTeam
              ) =>
                currentTeam !==
                team
            )
          : [
              ...currentTeams,
              team
            ]
    );
  }

  function resetFilters() {
    setSelectedTeams([]);
    setMinimumPrice('');
    setMaximumPrice('');
  }

  function updatePlayerOrder(
    playerId: string,
    value: string
  ) {
    const parsedValue =
      Number(value);

    setPersonalOrder(
      (currentOrder) => {
        if (
          value === '' ||
          !Number.isFinite(
            parsedValue
          ) ||
          parsedValue < 1
        ) {
          const nextOrder = {
            ...currentOrder
          };

          delete nextOrder[
            playerId
          ];

          return nextOrder;
        }

        return {
          ...currentOrder,

          [playerId]:
            Math.floor(
              parsedValue
            )
        };
      }
    );
  }

  function createNewPlayer() {
    const cleanName =
      newPlayerName.trim();

    const cleanTeam =
      newPlayerTeam.trim();

    const parsedPrice =
      Number(
        newPlayerPrice
      );

    if (
      cleanName === '' ||
      cleanTeam === '' ||
      !Number.isFinite(
        parsedPrice
      ) ||
      parsedPrice < 0
    ) {
      return;
    }

    const player =
      addCustomPlayer({
        name: cleanName,
        team: cleanTeam,
        role:
          newPlayerRole,
        listPrice:
          parsedPrice
      });

    setQuery(
      player.name
    );

    setActiveRole(
      player.role
    );

    setNewPlayerName('');
    setNewPlayerTeam('');
    setNewPlayerPrice('1');

    setNewPlayerMessage(
      `${player.name} aggiunto al Listone`
    );

    window.setTimeout(
      () => {
        setNewPlayerMessage(
          ''
        );
      },
      2500
    );
  }

  return (
    <section className="players-page stack">
      {/* INTRO */}

      <div className="listone-intro">
        <div>
          <p className="eyebrow">
            Stagione 2026/27
          </p>

          <h2>
            {
              allPlayers.length
            }{' '}
            giocatori
          </h2>

          <p>
            Listone ufficiale +
            giocatori aggiunti
            manualmente.
          </p>
        </div>
      </div>

      {/* NUOVO GIOCATORE */}

      <details className="panel listone-add-player-panel">
        <summary className="listone-add-player-summary">
          <div>
            <span className="listone-add-player-icon">
              +
            </span>

            <div>
              <strong>
                Nuovo giocatore
              </strong>

              <small>
                Aggiungi un giocatore
                non ancora presente
                nel listone
              </small>
            </div>
          </div>

          <span className="details-chevron">
            +
          </span>
        </summary>

        <div className="listone-add-player-content stack">
          {newPlayerMessage && (
            <div className="info-banner">
              <strong>
                {
                  newPlayerMessage
                }
              </strong>
            </div>
          )}

          <label className="form-field">
            <span>
              Nome
            </span>

            <input
              type="text"
              value={
                newPlayerName
              }
              onChange={(
                event
              ) =>
                setNewPlayerName(
                  event.target
                    .value
                )
              }
              placeholder="Nome giocatore"
              autoComplete="off"
            />
          </label>

          <div className="listone-new-player-grid">
            <label className="form-field">
              <span>
                Squadra
              </span>

              <input
                type="text"
                value={
                  newPlayerTeam
                }
                onChange={(
                  event
                ) =>
                  setNewPlayerTeam(
                    event.target
                      .value
                  )
                }
                placeholder="Es. ROM"
                autoComplete="off"
              />
            </label>

            <label className="form-field">
              <span>
                Ruolo
              </span>

              <select
                value={
                  newPlayerRole
                }
                onChange={(
                  event
                ) =>
                  setNewPlayerRole(
                    event.target
                      .value as
                      PlayerRole
                  )
                }
              >
                <option value="P">
                  P
                </option>

                <option value="D">
                  D
                </option>

                <option value="C">
                  C
                </option>

                <option value="A">
                  A
                </option>
              </select>
            </label>
          </div>

          <label className="form-field">
            <span>
              Quotazione
            </span>

            <div className="input-with-suffix">
              <input
                type="number"
                min="0"
                step="1"
                inputMode="numeric"
                value={
                  newPlayerPrice
                }
                onChange={(
                  event
                ) =>
                  setNewPlayerPrice(
                    event.target
                      .value
                  )
                }
              />

              <span>
                FM
              </span>
            </div>
          </label>

          <button
            type="button"
            className="primary-button"
            disabled={
              newPlayerName
                .trim() === '' ||
              newPlayerTeam
                .trim() === '' ||
              newPlayerPrice === ''
            }
            onClick={
              createNewPlayer
            }
          >
            Aggiungi al Listone
          </button>
        </div>
      </details>

      {/* RICERCA */}

      <label className="search-box">
        <span className="sr-only">
          Cerca per giocatore
          o squadra
        </span>

        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            cx="11"
            cy="11"
            r="7"
          />

          <path d="m20 20-4-4" />
        </svg>

        <input
          type="search"
          value={query}
          onChange={(
            event
          ) =>
            setQuery(
              event.target
                .value
            )
          }
          placeholder="Cerca giocatore o squadra"
          autoComplete="off"
        />

        {query && (
          <button
            type="button"
            onClick={() =>
              setQuery('')
            }
            aria-label="Cancella ricerca"
          >
            ×
          </button>
        )}
      </label>

      {/* RUOLI */}

      <div
        className="role-tabs"
        aria-label="Filtra per ruolo"
      >
        {roles.map(
          (role) => {
            const count =
              role.id ===
              'ALL'
                ? allPlayers.length
                : allPlayers.filter(
                    (player) =>
                      player.role ===
                      role.id
                  ).length;

            return (
              <button
                key={
                  role.id
                }
                type="button"
                className={
                  activeRole ===
                  role.id
                    ? 'active'
                    : ''
                }
                onClick={() =>
                  setActiveRole(
                    role.id
                  )
                }
                aria-pressed={
                  activeRole ===
                  role.id
                }
              >
                <span className="role-tab-long">
                  {
                    role.label
                  }
                </span>

                <span className="role-tab-short">
                  {
                    role.shortLabel
                  }
                </span>

                <small>
                  {count}
                </small>
              </button>
            );
          }
        )}
      </div>

      {/* ORDINAMENTO / FILTRI */}

      <div className="list-controls">
        <label className="sort-control">
          <span>
            Ordina
          </span>

          <select
            value={
              sortOption
            }
            onChange={(
              event
            ) =>
              setSortOption(
                event.target
                  .value as
                  SortOption
              )
            }
          >
            <option value="name-asc">
              Nome A–Z
            </option>

            <option value="name-desc">
              Nome Z–A
            </option>

            <option value="price-desc">
              Quotazione più alta
            </option>

            <option value="price-asc">
              Quotazione più bassa
            </option>

            <option value="team-asc">
              Squadra A–Z
            </option>

            <option value="custom">
              Ordine personale
            </option>
          </select>
        </label>

        <button
          type="button"
          className="filter-button"
          onClick={() =>
            setFiltersOpen(
              true
            )
          }
        >
          Filtri

          {activeFilterCount >
            0 && (
            <span>
              {
                activeFilterCount
              }
            </span>
          )}
        </button>
      </div>

      {sortOption ===
        'custom' && (
        <div className="info-banner">
          <strong>
            Ordine personale
          </strong>

          <p>
            Inserisci un numero
            accanto ai giocatori.
            Il numero 1 sarà il
            primo, il numero 2 il
            secondo e così via.
          </p>
        </div>
      )}

      {/* RISULTATI */}

      <div className="results-heading">
        <strong>
          {
            filteredPlayers.length
          }{' '}
          risultati
        </strong>

        {activeFilterCount >
        0 ? (
          <button
            type="button"
            onClick={
              resetFilters
            }
          >
            Azzera filtri
          </button>
        ) : (
          <span>
            Nessun filtro
            aggiuntivo
          </span>
        )}
      </div>

      {filteredPlayers.length >
      0 ? (
        <div className="player-list">
          {filteredPlayers.map(
            (player) => {
              const profile =
                getProfile(
                  player
                );

              const custom =
                isCustomPlayer(
                  player.id
                );

              return (
                <article
                  className="player-row"
                  key={
                    player.id
                  }
                >
                  <div
                    className={`role-avatar role-${player.role.toLowerCase()}`}
                    aria-hidden="true"
                  >
                    {
                      player.role
                    }
                  </div>

                  <div className="player-main">
                    <div className="player-name-line">
                      <strong>
                        {
                          player.name
                        }
                      </strong>

                      {custom && (
                        <span className="custom-player-chip">
                          Manuale
                        </span>
                      )}

                      {profile &&
                        profile.tier !==
                          'Non assegnata' && (
                          <span className="tier-chip">
                            {
                              profile.tier
                            }
                          </span>
                        )}
                    </div>

                    <span>
                      {
                        roleNames[
                          player.role
                        ]
                      }
                      {' · '}
                      {
                        player.team
                      }
                    </span>

                    {profile && (
                      <div className="player-strategy-summary">
                        <span>
                          Consigliato{' '}
                          <strong>
                            {calculateCreditsFromPercentage(
                              profile.percentage,
                              500
                            ) ??
                              '—'}
                          </strong>{' '}
                          FM
                        </span>

                        <span>
                          {profile.percentage ??
                            '—'}
                          %
                        </span>
                      </div>
                    )}

                    {sortOption ===
                      'custom' && (
                      <label className="personal-order-control">
                        <span>
                          Posizione
                          personale
                        </span>

                        <input
                          type="number"
                          min="1"
                          inputMode="numeric"
                          value={
                            personalOrder[
                              player.id
                            ] ?? ''
                          }
                          onChange={(
                            event
                          ) =>
                            updatePlayerOrder(
                              player.id,
                              event
                                .target
                                .value
                            )
                          }
                          placeholder="—"
                        />
                      </label>
                    )}
                  </div>

                  <div
                    className="player-price"
                    aria-label={`${player.listPrice} fantamilioni`}
                  >
                    <strong>
                      {
                        player.listPrice
                      }
                    </strong>

                    <span>
                      FM
                    </span>
                  </div>
                </article>
              );
            }
          )}
        </div>
      ) : (
        <div className="empty-state compact-empty-state">
          <h3>
            Nessun giocatore
            trovato
          </h3>

          <p>
            Prova con un altro
            nome, una squadra o
            un intervallo di
            quotazione diverso.
          </p>
        </div>
      )}

      <PlayerFiltersSheet
        open={
          filtersOpen
        }
        teams={
          teams
        }
        selectedTeams={
          selectedTeams
        }
        minimumPrice={
          minimumPrice
        }
        maximumPrice={
          maximumPrice
        }
        resultCount={
          filteredPlayers.length
        }
        onClose={() =>
          setFiltersOpen(
            false
          )
        }
        onToggleTeam={
          toggleTeam
        }
        onMinimumPriceChange={
          setMinimumPrice
        }
        onMaximumPriceChange={
          setMaximumPrice
        }
        onReset={
          resetFilters
        }
      />
    </section>
  );
}

export default PlayersPage;