import {
  useMemo,
  useState
} from 'react';
import PlayerRating from '../components/PlayerRating';
import { usePlayers } from '../hooks/usePlayers';
import { usePersistentState } from '../hooks/usePersistentState';
import { usePlayerProfiles } from '../hooks/usePlayerProfiles';
import type {
  Player,
  PlayerRole
} from '../types/player';
import {
  calculateCreditsFromPercentage,
  type PlayerProfile
} from '../types/playerProfile';
import {
  attackerPairings,
  goalkeeperPairings,
  type TeamPairing
} from '../data/teamPairings';


interface SelectedAuctionPlayerProps {
  player: Player;

  totalBudget: number;

  getProfile: (
    player: Pick<
      Player,
      'role' | 'name' | 'team'
    >
  ) => PlayerProfile | undefined;
}

interface AuctionSettings {
  totalBudget: number;

  rolePercentages: Record<
    PlayerRole,
    number
  >;
}

interface CustomAuctionPlayer {
  name: string;
  team: string;
  role: PlayerRole;
}

interface AuctionSlot {
  playerId: string | null;

  customPlayer?: CustomAuctionPlayer | null;

  pricePaid: number | null;
}

type AuctionRoster = Record<
  PlayerRole,
  AuctionSlot[]
>;

const roleOrder: PlayerRole[] = [
  'P',
  'D',
  'C',
  'A'
];

const roleLabels: Record<
  PlayerRole,
  string
> = {
  P: 'Portieri',
  D: 'Difensori',
  C: 'Centrocampisti',
  A: 'Attaccanti'
};

const roleSlots: Record<
  PlayerRole,
  number
> = {
  P: 3,
  D: 8,
  C: 8,
  A: 6
};

const defaultSettings: AuctionSettings = {
  totalBudget: 500,

  rolePercentages: {
    P: 8,
    D: 18,
    C: 30,
    A: 44
  }
};

function createEmptySlots(
  amount: number
): AuctionSlot[] {
  return Array.from(
    { length: amount },
    () => ({
      playerId: null,
      customPlayer: null,
      pricePaid: null
    })
  );
}

const defaultRoster: AuctionRoster = {
  P: createEmptySlots(
    roleSlots.P
  ),

  D: createEmptySlots(
    roleSlots.D
  ),

  C: createEmptySlots(
    roleSlots.C
  ),

  A: createEmptySlots(
    roleSlots.A
  )
};

function clampPercentage(
  value: number
) {
  return Math.min(
    100,
    Math.max(0, value)
  );
}

function AuctionPage() {
  const { getProfile } =
    usePlayerProfiles();

  const {
  allPlayers,
  addCustomPlayer
} = usePlayers();

  const [
    settings,
    setSettings
  ] =
    usePersistentState<AuctionSettings>(
      'fantacalcio:auction-settings',
      defaultSettings
    );

  const [
    roster,
    setRoster
  ] =
    usePersistentState<AuctionRoster>(
      'fantacalcio:auction-roster-v2',
      defaultRoster
    );

  const [
    manualMode,
    setManualMode
  ] = useState(false);

  const [
    customPlayerName,
    setCustomPlayerName
  ] = useState('');

  const [
    customPlayerTeam,
    setCustomPlayerTeam
  ] = useState('');

  const [
    selectedRole,
    setSelectedRole
  ] =
    useState<PlayerRole | null>(
      null
    );

  const [
    selectedSlotIndex,
    setSelectedSlotIndex
  ] =
    useState<number | null>(
      null
    );

  const [
    searchQuery,
    setSearchQuery
  ] = useState('');

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
      (first, second) =>
        first.localeCompare(
          second,
          'it'
        )
    ),
  []
);

  const [
    selectedPlayer,
    setSelectedPlayer
  ] =
    useState<Player | null>(
      null
    );

  const [
    purchasePrice,
    setPurchasePrice
  ] = useState('');

  const assignedPlayerIds =
    useMemo(
      () =>
        new Set(
          roleOrder.flatMap(
            (role) =>
              roster[role]
                .map(
                  (slot) =>
                    slot.playerId
                )
                .filter(
                  (
                    playerId
                  ): playerId is string =>
                    playerId !==
                    null
                )
          )
        ),
      [roster]
    );

  const totalSpent =
    roleOrder.reduce(
      (total, role) =>
        total +
        roster[role].reduce(
          (
            roleTotal,
            slot
          ) =>
            roleTotal +
            (
              slot.pricePaid ??
              0
            ),
          0
        ),
      0
    );

  const remainingBudget =
    settings.totalBudget -
    totalSpent;

  const searchResults =
    useMemo(() => {
      if (!selectedRole) {
        return [];
      }

      const normalized =
        searchQuery
          .trim()
          .toLocaleUpperCase(
            'it'
          );

      if (
        normalized.length < 2
      ) {
        return [];
      }

      return allPlayers
        .filter(
          (player) =>
            player.role ===
            selectedRole
        )
        .filter(
          (player) =>
            !assignedPlayerIds.has(
              player.id
            )
        )
        .filter(
          (player) =>
            player.name.includes(
              normalized
            ) ||
            player.team.includes(
              normalized
            )
        )
        .slice(0, 10);
    }, [
      assignedPlayerIds,
      searchQuery,
      selectedRole
    ]);

  function getPlayerById(
    playerId: string | null
  ): Player | null {
    if (!playerId) {
      return null;
    }

    return (
      allPlayers.find(
        (player) =>
          player.id ===
          playerId
      ) ?? null
    );
  }

  function getRoleBudget(
    role: PlayerRole
  ) {
    return Math.round(
      settings.totalBudget *
        (
          settings
            .rolePercentages[
              role
            ] / 100
        )
    );
  }

  function getRoleSpent(
    role: PlayerRole
  ) {
    return roster[role].reduce(
      (total, slot) =>
        total +
        (slot.pricePaid ?? 0),
      0
    );
  }

function openSlot(
  role: PlayerRole,
  slotIndex: number
) {
  const slot =
    roster[role][
      slotIndex
    ];

  const existingPlayer =
    getPlayerById(
      slot.playerId
    );

  setSelectedRole(role);
  setSelectedSlotIndex(
    slotIndex
  );

  if (slot.customPlayer) {
    setManualMode(true);

    setCustomPlayerName(
      slot.customPlayer.name
    );

    setCustomPlayerTeam(
      slot.customPlayer.team
    );

    setSelectedPlayer(null);
    setSearchQuery('');
  } else {
    setManualMode(false);

    setSelectedPlayer(
      existingPlayer
    );

    setSearchQuery(
      existingPlayer?.name ??
        ''
    );

    setCustomPlayerName('');
    setCustomPlayerTeam('');
  }

  setPurchasePrice(
    slot.pricePaid !== null
      ? String(
          slot.pricePaid
        )
      : ''
  );
}

  function closeSlotEditor() {
    setSelectedRole(null);
    setSelectedSlotIndex(
      null
    );

    setSearchQuery('');
    setSelectedPlayer(null);
    setPurchasePrice('');

    setManualMode(false);
    setCustomPlayerName('');
    setCustomPlayerTeam('');
  }

  function choosePlayer(
    player: Player
  ) {
    setSelectedPlayer(player);
    setSearchQuery(player.name);

    /**
     * Non precompiliamo con la
     * quotazione del listone:
     * il prezzo pagato in asta
     * deve essere inserito
     * esplicitamente.
     */
    setPurchasePrice('');
  }

  function saveSlot() {
    if (
      selectedRole === null ||
      selectedSlotIndex === null
    ) {
      return;
    }

    const parsedPrice =
      Number(purchasePrice);

    if (
      !Number.isFinite(
        parsedPrice
      ) ||
      parsedPrice < 0
    ) {
      return;
    }

if (manualMode) {
  const cleanName =
    customPlayerName
      .trim()
      .toLocaleUpperCase(
        'it'
      );

  const cleanTeam =
    customPlayerTeam
      .trim()
      .toLocaleUpperCase(
        'it'
      );

  if (
    !cleanName ||
    !cleanTeam
  ) {
    return;
  }

  const newPlayer =
    addCustomPlayer({
      name: cleanName,
      team: cleanTeam,
      role: selectedRole,

      /*
       * Non avendo ancora una
       * quotazione ufficiale,
       * usiamo 1 come valore
       * iniziale.
       *
       * Dal Listone potremo poi
       * modificarla.
       */
      listPrice: 1
    });

  setRoster(
    (currentRoster) => {
      const nextSlots = [
        ...currentRoster[
          selectedRole
        ]
      ];

      nextSlots[
        selectedSlotIndex
      ] = {
        playerId:
          newPlayer.id,

        customPlayer: null,

        pricePaid:
          parsedPrice
      };

      return {
        ...currentRoster,

        [selectedRole]:
          nextSlots
      };
    }
  );

  closeSlotEditor();

  return;
}

    if (!selectedPlayer) {
      return;
    }

    setRoster(
      (currentRoster) => {
        const nextSlots = [
          ...currentRoster[
            selectedRole
          ]
        ];

        nextSlots[
          selectedSlotIndex
        ] = {
          playerId:
            selectedPlayer.id,

          customPlayer: null,

          pricePaid:
            parsedPrice
        };

        return {
          ...currentRoster,

          [selectedRole]:
            nextSlots
        };
      }
    );

    closeSlotEditor();
  }

  function removeSlotPlayer() {
    if (
      selectedRole === null ||
      selectedSlotIndex ===
        null
    ) {
      return;
    }

    setRoster(
      (currentRoster) => {
        const nextRoleSlots = [
          ...currentRoster[
            selectedRole
          ]
        ];

        nextRoleSlots[
          selectedSlotIndex
        ] = {
          playerId: null,
          customPlayer: null,
          pricePaid: null
        };

        return {
          ...currentRoster,

          [selectedRole]:
            nextRoleSlots
        };
      }
    );

    closeSlotEditor();
  }

  function updateTotalBudget(
    value: string
  ) {
    const parsed =
      Number(value);

    setSettings(
      (current) => ({
        ...current,

        totalBudget:
          Number.isFinite(
            parsed
          )
            ? Math.max(
                0,
                parsed
              )
            : 0
      })
    );
  }

  function updateRolePercentage(
    role: PlayerRole,
    value: string
  ) {
    const parsed =
      Number(value);

    setSettings(
      (current) => ({
        ...current,

        rolePercentages: {
          ...current
            .rolePercentages,

          [role]:
            Number.isFinite(
              parsed
            )
              ? clampPercentage(
                  parsed
                )
              : 0
        }
      })
    );
  }

const auctionPairingSuggestions =
  useMemo(() => {
    const suggestions: Record<
      PlayerRole,
      Array<{
        sourceTeam: string;
        pairing: TeamPairing;
      }>
    > = {
      P: [],
      D: [],
      C: [],
      A: []
    };

    (['P', 'A'] as PlayerRole[]).forEach(
      (role) => {
        roster[role].forEach(
          (slot) => {
            const player =
              getPlayerById(
                slot.playerId
              );

            const team =
              player?.team ??
              slot.customPlayer?.team;

            if (!team) {
              return;
            }

            const sourcePairings =
              role === 'P'
                ? goalkeeperPairings
                : attackerPairings;

            sourcePairings
              .filter(
                (pairing) =>
                  pairing.teams.includes(
                    team
                  )
              )
              .forEach(
                (pairing) => {
                  suggestions[
                    role
                  ].push({
                    sourceTeam: team,
                    pairing
                  });
                }
              );
          }
        );

        suggestions[role] =
          suggestions[role]
            .sort(
              (
                first,
                second
              ) =>
                second.pairing
                  .calendarScore -
                first.pairing
                  .calendarScore
            )
            .filter(
              (
                suggestion,
                index,
                all
              ) =>
                all.findIndex(
                  (other) =>
                    other.pairing
                      .id ===
                    suggestion
                      .pairing.id
                ) === index
            )
            .slice(0, 5);
      }
    );

    return suggestions;
  }, [roster]);

  return (
    <section className="auction-page stack">
      {/* BUDGET GENERALE */}

      <section className="auction-summary-card">
        <p className="eyebrow">
          Budget asta
        </p>

        <strong className="auction-main-number">
          {remainingBudget} FM
        </strong>

        <p>
          Spesi {totalSpent} su{' '}
          {settings.totalBudget}{' '}
          crediti.
        </p>

        <div className="budget-progress">
          <span
            style={{
              width: `${
                settings.totalBudget <=
                0
                  ? 0
                  : clampPercentage(
                      (
                        totalSpent /
                        settings.totalBudget
                      ) * 100
                    )
              }%`
            }}
          />
        </div>

        {remainingBudget < 0 && (
          <div className="warning-banner">
            Budget superato di{' '}
            {Math.abs(
              remainingBudget
            )}{' '}
            FM.
          </div>
        )}
      </section>

      {/* CONFIGURAZIONE */}

      <details className="panel auction-settings">
        <summary>
          Configurazione pre-asta
        </summary>

        <div className="settings-content stack">
          <label className="form-field">
            <span>
              Budget totale
            </span>

            <input
              type="number"
              min="0"
              value={
                settings.totalBudget
              }
              onChange={(
                event
              ) =>
                updateTotalBudget(
                  event.target
                    .value
                )
              }
            />
          </label>

          <div className="percentage-grid">
            {roleOrder.map(
              (role) => (
                <label
                  className="percentage-field"
                  key={role}
                >
                  <span>
                    {
                      roleLabels[
                        role
                      ]
                    }
                  </span>

                  <div>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      value={
                        settings
                          .rolePercentages[
                            role
                          ]
                      }
                      onChange={(
                        event
                      ) =>
                        updateRolePercentage(
                          role,
                          event
                            .target
                            .value
                        )
                      }
                    />

                    <span>
                      %
                    </span>
                  </div>

                  <small>
                    {
                      getRoleBudget(
                        role
                      )
                    }{' '}
                    FM
                  </small>
                </label>
              )
            )}
          </div>
        </div>
      </details>

      {/* ROSA */}

      <section className="stack">
        <div>
          <p className="eyebrow">
            La tua asta
          </p>

          <h2>
            Rosa
          </h2>

          <p>
            Tocca lo slot preciso in
            cui vuoi inserire il
            giocatore.
          </p>
        </div>

        <div className="auction-roster">
          {roleOrder.map(
            (role) => {
              const roleBudget =
                getRoleBudget(
                  role
                );

              const roleSpent =
                getRoleSpent(
                  role
                );

              const roleRemaining =
                roleBudget -
                roleSpent;

              return (
                <section
                  className="auction-roster-role"
                  key={role}
                >
                  <header className="auction-roster-role__header">
                    <div>
                      <span
                        className={`role-avatar role-${role.toLowerCase()}`}
                      >
                        {role}
                      </span>

                      <div>
                        <strong>
                          {
                            roleLabels[
                              role
                            ]
                          }
                        </strong>

                        <span>
                          {
                            settings
                              .rolePercentages[
                                role
                              ]
                          }
                          % ·{' '}
                          {
                            roleBudget
                          }{' '}
                          crediti
                        </span>
                      </div>
                    </div>

                    <div className="auction-role-budget-status">
                      <strong
                        className={
                          roleRemaining <
                          0
                            ? 'negative-value'
                            : ''
                        }
                      >
                        {
                          roleRemaining
                        }{' '}
                        FM
                      </strong>

                      <span>
                        residui
                      </span>
                    </div>
                  </header>

                  <div className="auction-slot-list">
                    {roster[
                      role
                    ].map(
                      (
                        slot,
                        index
                      ) => {
                        const player =
                          getPlayerById(
                            slot.playerId
                          );

                        const displayName =
                          player?.name ??
                          slot.customPlayer
                            ?.name ??
                          null;

                        const displayTeam =
                          player?.team ??
                          slot.customPlayer
                            ?.team ??
                          null;

                        const hasPlayer =
                          displayName !== null;

                        return (
                          <button
                            key={
                              index
                            }
                            type="button"
                            className={`auction-roster-slot ${
                              hasPlayer
                                ? 'filled'
                                : 'empty'
                            }`}
                            onClick={() =>
                              openSlot(
                                role,
                                index
                              )
                            }
                          >
                            <span className="auction-slot-number">
                              {index +
                                1}
                              .
                            </span>

                            {hasPlayer ? (
                              <>
                                <span className="auction-slot-player">
                                  <strong>
                                    {displayName}
                                  </strong>

                                  <small>
                                    {displayTeam}

                                    {!player && (
                                      <>
                                        {' · '}
                                        manuale
                                      </>
                                    )}
                                  </small>
                                </span>

                                <span className="auction-slot-price">
                                  {slot.pricePaid}
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="auction-slot-empty-text">
                                  Slot
                                  vuoto
                                </span>

                                <span className="auction-slot-add">
                                  +
                                </span>
                              </>
                            )}
                          </button>
                        );
                      }
                    )}
                  </div>

                    {auctionPairingSuggestions[
  role
].length > 0 && (
  <div className="auction-role-suggestions">
    <div className="auction-role-suggestions__header">
      <div>
        <span>
          ✦
        </span>

        <div>
          <strong>
            Abbinamenti consigliati
          </strong>

          <small>
            In base alle squadre
            che hai già preso
          </small>
        </div>
      </div>
    </div>

    <div className="auction-role-suggestion-list">
      {auctionPairingSuggestions[
        role
      ].map(
        ({
          sourceTeam,
          pairing
        }) => {
          const otherTeams =
            pairing.teams.filter(
              (team) =>
                team !== sourceTeam
            );

          return (
            <div
              className="auction-role-suggestion"
              key={`${sourceTeam}-${pairing.id}`}
            >
              <div className="pairing-flow">
                <span className="pairing-team owned">
                  {sourceTeam}
                </span>

                <span className="pairing-arrow">
                  →
                </span>

                <div className="pairing-targets">
                  {otherTeams.map(
                    (team) => (
                      <span
                        key={team}
                        className="pairing-team target"
                      >
                        {team}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="pairing-score-badge">
                <small>
                  Calendario
                </small>

                <strong>
                  {pairing.calendarScore
                    .toFixed(1)
                    .replace(
                      '.',
                      ','
                    )
                    .replace(
                      ',0',
                      ''
                    )}
                </strong>
              </div>
            </div>
          );
        }
      )}
    </div>
  </div>
)}

                </section>
              );
            }
          )}
        </div>
</section>

{/* EDITOR SLOT */}

{selectedRole !== null &&
        selectedSlotIndex !==
          null && (
          <div
            className="auction-slot-editor-overlay"
            onMouseDown={(
              event
            ) => {
              if (
                event.target ===
                event.currentTarget
              ) {
                closeSlotEditor();
              }
            }}
          >
            <section
              className="auction-slot-editor"
              role="dialog"
              aria-modal="true"
            >
              <div className="sheet-handle" />

              <header className="auction-slot-editor__header">
                <div>
                  <p className="eyebrow">
                    {
                      roleLabels[
                        selectedRole
                      ]
                    }
                  </p>

                  <h2>
                    Slot{' '}
                    {selectedSlotIndex +
                      1}
                  </h2>
                </div>

                <button
                  type="button"
                  className="icon-button"
                  onClick={
                    closeSlotEditor
                  }
                >
                  ×
                </button>
              </header>

              <div className="stack">
<div className="auction-player-source-tabs">
  <button
    type="button"
    className={
      !manualMode
        ? 'active'
        : ''
    }
    onClick={() => {
      setManualMode(false);
      setCustomPlayerName('');
      setCustomPlayerTeam('');
    }}
  >
    Dal listone
  </button>

  <button
    type="button"
    className={
      manualMode
        ? 'active'
        : ''
    }
    onClick={() => {
      setManualMode(true);
      setSelectedPlayer(null);
      setSearchQuery('');
    }}
  >
    Nuovo giocatore
  </button>
</div>

{!manualMode && (
  <>
    <div className="auction-player-search">
      <label className="search-box">
        <span className="sr-only">
          Cerca giocatore
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
          value={searchQuery}
          onChange={(event) => {
            setSearchQuery(
              event.target.value
            );

            setSelectedPlayer(
              null
            );
          }}
          placeholder={`Cerca ${roleLabels[
            selectedRole
          ].toLowerCase()}`}
          autoComplete="off"
        />
      </label>

{searchResults.length > 0 &&
  !selectedPlayer && (
    <div className="auction-inline-search-results">
      {searchResults.map(
        (player) => (
          <button
            key={player.id}
            type="button"
            className="auction-inline-search-result"
            onPointerDown={(event) => {
              /*
               * Su Safari iPhone il pointerDown
               * arriva prima del blur dell'input.
               * In questo modo la selezione non
               * viene persa quando la tastiera
               * è aperta.
               */
              event.preventDefault();

              choosePlayer(
                player
              );
            }}
          >
            <span
              className={`role-avatar role-${player.role.toLowerCase()}`}
            >
              {player.role}
            </span>

            <span className="auction-inline-result-info">
              <strong>
                {player.name}
              </strong>

              <small>
                {player.team}
                {' · '}
                Quot.{' '}
                {player.listPrice}{' '}
                FM
              </small>
            </span>

            <span className="auction-inline-result-select">
              +
            </span>
          </button>
        )
      )}
    </div>
  )}
    </div>

    {selectedPlayer && (
      <SelectedAuctionPlayer
        player={
          selectedPlayer
        }
        totalBudget={
          settings.totalBudget
        }
        getProfile={
          getProfile
        }
      />
    )}
  </>
)}

{manualMode && (
  <div className="manual-auction-player stack">
    <label className="form-field">
      <span>
        Nome giocatore
      </span>

      <input
        type="text"
        value={
          customPlayerName
        }
        onChange={(
          event
        ) =>
          setCustomPlayerName(
            event.target.value
          )
        }
        placeholder="Nome giocatore"
        autoComplete="off"
      />
    </label>

    <label className="form-field">
      <span>
        Squadra
      </span>

      <select
        value={
          customPlayerTeam
        }
        onChange={(
          event
        ) =>
          setCustomPlayerTeam(
            event.target.value
          )
        }
      >
        <option value="">
          Seleziona squadra
        </option>

        {teams.map(
          (team) => (
            <option
              key={team}
              value={team}
            >
              {team}
            </option>
          )
        )}
      </select>
    </label>

    <div className="info-banner">
      <strong>
        Giocatore manuale
      </strong>

      <p>
        Verrà salvato
        nell'asta anche se
        non è ancora presente
        nel listone.
      </p>
    </div>
  </div>
)}

                <label className="form-field">
                  <span>
                    Prezzo pagato
                  </span>

                  <input
                    type="number"
                    min="0"
                    inputMode="numeric"
                    disabled={
  !manualMode &&
  !selectedPlayer
}
                    value={
                      purchasePrice
                    }
                    onChange={(
                      event
                    ) =>
                      setPurchasePrice(
                        event
                          .target
                          .value
                      )
                    }
                    placeholder="Crediti"
                  />
                </label>

                <button
                  type="button"
                  className="primary-button"
                  disabled={
                    purchasePrice === '' ||
                    (
                      manualMode
                        ? (
                            customPlayerName
                              .trim() === '' ||
                            customPlayerTeam
                              .trim() === ''
                          )
                        : !selectedPlayer
                    )
                  }
                  onClick={
                    saveSlot
                  }
                >
                  Salva nello slot{' '}
                  {selectedSlotIndex +
                    1}
                </button>

{(
  roster[
    selectedRole
  ][
    selectedSlotIndex
  ].playerId !== null ||
  roster[
    selectedRole
  ][
    selectedSlotIndex
  ].customPlayer != null
) && (
  <button
    type="button"
    className="danger-secondary-button"
    onClick={
      removeSlotPlayer
    }
  >
    Svuota questo slot
  </button>
)}
              </div>
            </section>
          </div>
        )}
    </section>
  );
}

/**
 * Piccolo blocco separato per
 * mostrare le informazioni delle
 * fasce durante la scelta in asta.
 */
interface SelectedAuctionPlayerProps {
  player: Player;

  totalBudget: number;

  getProfile: (
    player: Pick<
      Player,
      'role' | 'name' | 'team'
    >
  ) =>
    | ReturnType<
        typeof usePlayerProfiles
      >['profiles'][string]
    | undefined;
}

function SelectedAuctionPlayer({
  player,
  totalBudget,
  getProfile
}: SelectedAuctionPlayerProps) {
  const profile =
    getProfile(player);

  const recommendedCredits =
    calculateCreditsFromPercentage(
      profile?.percentage ??
        null,
      totalBudget
    );

  return (
    <div className="auction-strategy-card">
      <div className="selected-auction-player">
        <span
          className={`role-avatar role-${player.role.toLowerCase()}`}
        >
          {player.role}
        </span>

        <div>
          <div className="player-name-line">
            <strong>
              {player.name}
            </strong>

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
            {player.team}
            {' · '}
            Quotazione{' '}
            {player.listPrice} FM
          </span>
        </div>
      </div>

      {profile && (
        <>
          <div className="auction-strategy-values">
            <div>
              <span>
                Consigliato
              </span>

              <strong>
                {recommendedCredits ??
                  '—'}{' '}
                FM
              </strong>
            </div>

            <div>
              <span>
                Percentuale
              </span>

              <strong>
                {profile.percentage ??
                  '—'}
                %
              </strong>
            </div>
          </div>

          <div className="strategy-ratings-row auction-ratings">
            <PlayerRating
              label="Titol."
              value={
                profile.starterRating
              }
            />

            <PlayerRating
              label="Affid."
              value={
                profile.reliabilityRating
              }
            />

            <PlayerRating
              label="Integr."
              value={
                profile.integrityRating
              }
            />
          </div>

          {profile.notes && (
            <p className="auction-player-note">
              {profile.notes}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default AuctionPage;