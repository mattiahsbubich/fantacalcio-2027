import { useState } from 'react';
import PlayerRating from '../components/PlayerRating';
import { usePlayers } from '../hooks/usePlayers';
import { tierDefinitions } from '../data/tierDefinitions';
import { usePlayerProfiles } from '../hooks/usePlayerProfiles';
import type {
  Player,
  PlayerRole
} from '../types/player';
import {
  calculateCreditsFromPercentage,
  type PlayerTier
} from '../types/playerProfile';

const TOTAL_BUDGET = 500;

const roleLabels: Record<PlayerRole, string> = {
  P: 'Portieri',
  D: 'Difensori',
  C: 'Centrocampisti',
  A: 'Attaccanti'
};

const roleTabs: PlayerRole[] = [
  'P',
  'D',
  'C',
  'A'
];

function parseNullableNumber(
  value: string
): number | null {
  if (value.trim() === '') {
    return null;
  }

  const parsedValue = Number(value);

  return Number.isFinite(parsedValue)
    ? parsedValue
    : null;
}

function TiersPage() {
  const {
    getProfile,
    patchProfile
  } = usePlayerProfiles();

  const {
  allPlayers,
  addCustomPlayer
} = usePlayers();

const [
  showNewPlayerForm,
  setShowNewPlayerForm
] = useState(false);

const [
  newPlayerName,
  setNewPlayerName
] = useState('');

const [
  newPlayerTeam,
  setNewPlayerTeam
] = useState('');

  const [activeRole, setActiveRole] =
    useState<PlayerRole>('P');

  const [query, setQuery] =
    useState('');

  const [
    expandedPlayer,
    setExpandedPlayer
  ] = useState<string | null>(null);

  const [
    addPlayerQuery,
    setAddPlayerQuery
  ] = useState('');

  const [
    playerToAdd,
    setPlayerToAdd
  ] = useState<Player | null>(null);

  const [
    tierToAdd,
    setTierToAdd
  ] = useState<PlayerTier | ''>('');

  const [
    percentageToAdd,
    setPercentageToAdd
  ] = useState('');

  const roleTiers =
    tierDefinitions[activeRole];

  const normalizedQuery = query
    .trim()
    .toLocaleUpperCase('it');

  /**
   * Ruolo usato nelle fasce.
   *
   * Normalmente coincide con il ruolo
   * ufficiale del listone.
   *
   * Per alcuni giocatori importati dagli
   * screenshot può essere diverso.
   */
  function getEffectiveRole(
    player: Player
  ): PlayerRole {
    const profile =
      getProfile(player);

    return (
      profile?.tierRole ??
      player.role
    );
  }

  /**
   * Tutti i giocatori appartenenti al ruolo
   * attualmente visualizzato nelle fasce.
   */
  const rolePlayers =
    allPlayers
      .filter(
        (player) =>
          getEffectiveRole(player) ===
          activeRole
      )
      .filter(
        (player) =>
          normalizedQuery === '' ||
          player.name.includes(
            normalizedQuery
          ) ||
          player.team.includes(
            normalizedQuery
          )
      );

  /**
   * Ricerca del giocatore da aggiungere
   * manualmente.
   *
   * Qui permettiamo di cercare in tutto
   * il listone.
   *
   * Se aggiungi alla fascia C un giocatore
   * ufficialmente A, verrà salvato tierRole C.
   */
  const normalizedAddQuery =
    addPlayerQuery
      .trim()
      .toLocaleUpperCase('it');

  const addPlayerResults =
    normalizedAddQuery.length < 2
      ? []
      : allPlayers
          .filter((player) => {
            const profile =
              getProfile(player);

            /**
             * Non mostriamo giocatori che
             * risultano già classificati
             * nel ruolo attuale.
             */
            if (
              profile &&
              profile.tier !==
                'Non assegnata' &&
              (
                profile.tierRole ??
                player.role
              ) === activeRole
            ) {
              return false;
            }

            return (
              player.name.includes(
                normalizedAddQuery
              ) ||
              player.team.includes(
                normalizedAddQuery
              )
            );
          })
          .slice(0, 8);

  /**
   * Giocatori del ruolo attuale
   * non ancora assegnati a una fascia.
   */
  const unassignedPlayers =
    allPlayers.filter(
      (player) => {
        if (
          getEffectiveRole(player) !==
          activeRole
        ) {
          return false;
        }

        const profile =
          getProfile(player);

        return (
          !profile ||
          profile.tier ===
            'Non assegnata'
        );
      }
    );

  function changeRole(
    role: PlayerRole
  ) {
    setActiveRole(role);

    setQuery('');
    setExpandedPlayer(null);

    setAddPlayerQuery('');
    setPlayerToAdd(null);
    setTierToAdd('');
    setPercentageToAdd('');

    setShowNewPlayerForm(false);
    setNewPlayerName('');
    setNewPlayerTeam('');
  }

  function getNextTierOrder(
    tier: PlayerTier
  ): number {
    const playersInTier =
      allPlayers.filter(
        (player) => {
          const profile =
            getProfile(player);

          if (!profile) {
            return false;
          }

          const effectiveRole =
            profile.tierRole ??
            player.role;

          return (
            effectiveRole ===
              activeRole &&
            profile.tier === tier
          );
        }
      );

    const existingOrders =
      playersInTier
        .map(
          (player) =>
            getProfile(player)
              ?.tierOrder
        )
        .filter(
          (
            value
          ): value is number =>
            typeof value ===
              'number' &&
            Number.isFinite(value)
        );

    if (
      existingOrders.length === 0
    ) {
      return 1;
    }

    return (
      Math.max(
        ...existingOrders
      ) + 1
    );
  }

  function addPlayerToTier() {
    if (
      !playerToAdd ||
      !tierToAdd
    ) {
      return;
    }

    patchProfile(
      playerToAdd.role,
      playerToAdd.name,
      playerToAdd.team,
      {
        tierRole: activeRole,
        tier: tierToAdd,
        tierOrder:
          getNextTierOrder(
            tierToAdd
          ),
        percentage:
          parseNullableNumber(
            percentageToAdd
          )
      }
    );

    setAddPlayerQuery('');
    setPlayerToAdd(null);
    setTierToAdd('');
    setPercentageToAdd('');
  }

  function movePlayerToTier(
    player: Player,
    tier: PlayerTier
  ) {
    patchProfile(
      player.role,
      player.name,
      player.team,
      {
        tierRole: activeRole,
        tier,
        tierOrder:
          getNextTierOrder(tier)
      }
    );
  }

  return (
    <section className="tiers-page stack">
      <div>
        <p className="eyebrow">
          Valutazioni personali
        </p>

        <h2>Fasce</h2>

        <p>
          Fascia, posizione,
          percentuale, valutazioni
          e note vengono salvate
          automaticamente sul
          dispositivo.
        </p>
      </div>

      <div className="budget-reference-card">
        <span>
          Budget di riferimento
        </span>

        <strong>
          {TOTAL_BUDGET} FM
        </strong>

        <small>
          1% = 5 FM
        </small>
      </div>

      {/* RUOLI */}

      <div
        className="tier-role-tabs"
        aria-label="Ruolo"
      >
        {roleTabs.map((role) => (
          <button
            key={role}
            type="button"
            className={
              activeRole === role
                ? 'active'
                : ''
            }
            onClick={() =>
              changeRole(role)
            }
          >
            <strong>
              {role}
            </strong>

            <span>
              {roleLabels[role]}
            </span>
          </button>
        ))}
      </div>

      {roleTiers.length === 0 ? (
        <div className="inline-empty-state panel">
          <strong>
            Fasce non ancora
            importate
          </strong>

          <p>
            Inseriremo qui le
            fasce dei{' '}
            {roleLabels[
              activeRole
            ].toLowerCase()}{' '}
            quando avremo i dati.
          </p>
        </div>
      ) : (
        <>
          {/* AGGIUNTA MANUALE */}

<details className="panel add-tier-player-panel">
  <summary className="add-tier-player-summary">
    <div>
      <p className="eyebrow">
        Modifica personale
      </p>

      <strong>
        Aggiungi un giocatore
      </strong>

      <span>
        Cerca e assegna manualmente
        una fascia
      </span>
    </div>

    <span className="details-chevron">
      +
    </span>
  </summary>

  <div className="add-tier-player-content stack">
    <div className="add-tier-player-search">
      <label className="search-box">
        <span className="sr-only">
          Cerca giocatore da
          aggiungere
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
          value={addPlayerQuery}
          onChange={(event) => {
            setAddPlayerQuery(
              event.target.value
            );

            setPlayerToAdd(null);
          }}
          placeholder="Cerca giocatore o squadra"
          autoComplete="off"
        />
      </label>

      {addPlayerResults.length >
        0 &&
        !playerToAdd && (
          <div className="tier-player-search-results">
            {addPlayerResults.map(
              (player) => (
                <button
                  key={player.id}
                  type="button"
                  onClick={() => {
                    setPlayerToAdd(
                      player
                    );

                    setAddPlayerQuery(
                      player.name
                    );
                  }}
                >
                  <span
                    className={`role-avatar role-${player.role.toLowerCase()}`}
                  >
                    {player.role}
                  </span>

                  <span>
                    <strong>
                      {player.name}
                    </strong>

                    <small>
                      {player.team}
                      {' · '}
                      Ruolo{' '}
                      {player.role}
                      {' · '}
                      Quot.{' '}
                      {
                        player.listPrice
                      }{' '}
                      FM
                    </small>
                  </span>
                </button>
              )
            )}
          </div>
        )}

        {normalizedAddQuery.length >= 2 &&
  addPlayerResults.length === 0 &&
  !playerToAdd &&
  !showNewPlayerForm && (
    <button
      type="button"
      className="create-player-inline-button"
      onClick={() => {
        setNewPlayerName(
          addPlayerQuery
        );

        setShowNewPlayerForm(
          true
        );
      }}
    >
      <span>
        +
      </span>

      <div>
        <strong>
          Crea nuovo giocatore
        </strong>

        <small>
          Non è ancora presente
          nel Listone
        </small>
      </div>
    </button>
  )}

  {showNewPlayerForm && (
  <div className="new-tier-player-form stack">
    <div>
      <strong>
        Nuovo giocatore
      </strong>

      <p>
        Verrà aggiunto anche
        automaticamente al Listone.
      </p>
    </div>

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
            event.target.value
          )
        }
        placeholder="Nome giocatore"
      />
    </label>

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
            event.target.value
          )
        }
        placeholder="Es. ROM"
      />
    </label>

    <div className="new-player-role-preview">
      <span>
        Ruolo
      </span>

      <strong>
        {activeRole}
      </strong>
    </div>

    <div className="new-player-form-actions">
      <button
        type="button"
        className="secondary-button"
        onClick={() => {
          setShowNewPlayerForm(
            false
          );

          setNewPlayerName('');
          setNewPlayerTeam('');
        }}
      >
        Annulla
      </button>

      <button
        type="button"
        className="primary-button"
        disabled={
          newPlayerName
            .trim() === '' ||
          newPlayerTeam
            .trim() === ''
        }
        onClick={() => {
          const newPlayer =
            addCustomPlayer({
              name:
                newPlayerName,
              team:
                newPlayerTeam,
              role:
                activeRole,

              listPrice: 1
            });

          setPlayerToAdd(
            newPlayer
          );

          setAddPlayerQuery(
            newPlayer.name
          );

          setShowNewPlayerForm(
            false
          );

          setNewPlayerName('');
          setNewPlayerTeam('');
        }}
      >
        Crea e seleziona
      </button>
    </div>
  </div>
)}
    </div>

    {playerToAdd && (
      <div className="selected-tier-player">
        <span
          className={`role-avatar role-${playerToAdd.role.toLowerCase()}`}
        >
          {playerToAdd.role}
        </span>

        <div>
          <strong>
            {playerToAdd.name}
          </strong>

          <span>
            {playerToAdd.team}
            {' · '}
            Ruolo ufficiale{' '}
            {playerToAdd.role}
            {' · '}
            Fasce {activeRole}
          </span>
        </div>
      </div>
    )}

    <div className="add-player-fields">
      <label className="form-field">
        <span>Fascia</span>

        <select
          value={tierToAdd}
          onChange={(event) =>
            setTierToAdd(
              event.target
                .value as
                | PlayerTier
                | ''
            )
          }
        >
          <option value="">
            Seleziona fascia
          </option>

          {roleTiers.map(
            (tier) => (
              <option
                key={tier}
                value={tier}
              >
                {tier}
              </option>
            )
          )}
        </select>
      </label>

      <label className="form-field">
        <span>
          Percentuale
        </span>

        <div className="input-with-suffix">
          <input
            type="number"
            min="0"
            step="0.1"
            inputMode="decimal"
            value={
              percentageToAdd
            }
            onChange={(
              event
            ) =>
              setPercentageToAdd(
                event.target.value
              )
            }
          />

          <span>%</span>
        </div>
      </label>
    </div>

    <button
      type="button"
      className="primary-button"
      disabled={
        !playerToAdd ||
        !tierToAdd
      }
      onClick={
        addPlayerToTier
      }
    >
      Aggiungi alla fascia
    </button>
  </div>
</details>

          {/* RICERCA NELLE FASCE */}

          <label className="search-box">
            <span className="sr-only">
              Cerca nelle fasce
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
              placeholder={`Cerca tra i ${roleLabels[
                activeRole
              ].toLowerCase()}`}
              value={query}
              onChange={(
                event
              ) =>
                setQuery(
                  event.target.value
                )
              }
              autoComplete="off"
            />
          </label>

          {/* FASCE */}

          {roleTiers.map(
            (tier) => {
              const tierPlayers =
                rolePlayers
                  .filter(
                    (player) =>
                      getProfile(
                        player
                      )?.tier ===
                      tier
                  )
                  .sort(
                    (
                      firstPlayer,
                      secondPlayer
                    ) => {
                      const firstOrder =
                        getProfile(
                          firstPlayer
                        )
                          ?.tierOrder ??
                        Number.MAX_SAFE_INTEGER;

                      const secondOrder =
                        getProfile(
                          secondPlayer
                        )
                          ?.tierOrder ??
                        Number.MAX_SAFE_INTEGER;

                      return (
                        firstOrder -
                          secondOrder ||
                        firstPlayer.name.localeCompare(
                          secondPlayer.name,
                          'it'
                        )
                      );
                    }
                  );

              if (
                tierPlayers.length ===
                0
              ) {
                return null;
              }

              return (
                <section
                  className="tier-section stack"
                  key={tier}
                >
                  <div className="tier-heading">
                    <div>
                      <span className="tier-dot" />

                      <h3>
                        {tier}
                      </h3>
                    </div>

                    <span>
                      {
                        tierPlayers.length
                      }
                    </span>
                  </div>

                  <div className="strategy-player-list">
                    {tierPlayers.map(
                      (player) => {
                        const profile =
                          getProfile(
                            player
                          );

                        if (
                          !profile
                        ) {
                          return null;
                        }

                        const credits =
                          calculateCreditsFromPercentage(
                            profile.percentage,
                            TOTAL_BUDGET
                          );

                        const expanded =
                          expandedPlayer ===
                          player.id;

                        return (
                          <article
                            className="strategy-player-card"
                            key={
                              player.id
                            }
                          >
                            {/* RIEPILOGO */}

                            <button
                              type="button"
                              className="strategy-player-summary"
                              onClick={() =>
                                setExpandedPlayer(
                                  expanded
                                    ? null
                                    : player.id
                                )
                              }
                            >
                              <span
                                className={`role-avatar role-${activeRole.toLowerCase()}`}
                              >
                                {
                                  activeRole
                                }
                              </span>

                              <span className="strategy-player-name">
                                <small>
                                  {
                                    player.team
                                  }
                                </small>

                                <strong>
                                  {
                                    player.name
                                  }
                                </strong>
                              </span>

                              <span className="strategy-price-box">
                                <small>
                                  Prezzo
                                </small>

                                <strong>
                                  {credits ??
                                    '—'}
                                </strong>
                              </span>

                              <span className="strategy-price-box">
                                <small>
                                  Budget
                                </small>

                                <strong>
                                  {profile.percentage ??
                                    '—'}
                                  %
                                </strong>
                              </span>

                              <span className="strategy-expand-icon">
                                {expanded
                                  ? '−'
                                  : '+'}
                              </span>
                            </button>

                            {/* POSIZIONE */}

                            <div className="tier-position-line">
                              <span>
                                Posizione
                                nella fascia
                              </span>

                              <strong>
                                #
                                {profile.tierOrder ??
                                  '—'}
                              </strong>
                            </div>

                            {/* VALUTAZIONI */}

                            <div className="strategy-ratings-row">
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

                            {/* EDITOR */}

                            {expanded && (
                              <div className="strategy-player-editor">
                                <div className="strategy-number-grid">
                                  {/* FASCIA */}

                                  <label className="form-field">
                                    <span>
                                      Fascia
                                    </span>

                                    <select
                                      value={
                                        profile.tier
                                      }
                                      onChange={(
                                        event
                                      ) =>
                                        movePlayerToTier(
                                          player,
                                          event
                                            .target
                                            .value as PlayerTier
                                        )
                                      }
                                    >
                                      {roleTiers.map(
                                        (
                                          tierOption
                                        ) => (
                                          <option
                                            key={
                                              tierOption
                                            }
                                            value={
                                              tierOption
                                            }
                                          >
                                            {
                                              tierOption
                                            }
                                          </option>
                                        )
                                      )}
                                    </select>
                                  </label>

                                  {/* POSIZIONE */}

                                  <label className="form-field">
                                    <span>
                                      Posizione
                                      nella
                                      fascia
                                    </span>

                                    <input
                                      type="number"
                                      min="1"
                                      inputMode="numeric"
                                      value={
                                        profile.tierOrder ??
                                        ''
                                      }
                                      onChange={(
                                        event
                                      ) =>
                                        patchProfile(
                                          player.role,
                                          player.name,
                                          player.team,
                                          {
                                            tierOrder:
                                              parseNullableNumber(
                                                event
                                                  .target
                                                  .value
                                              )
                                          }
                                        )
                                      }
                                    />
                                  </label>
                                </div>

                                <div className="strategy-number-grid">
                                  {/* PERCENTUALE */}

                                  <label className="form-field">
                                    <span>
                                      Percentuale
                                    </span>

                                    <div className="input-with-suffix">
                                      <input
                                        type="number"
                                        min="0"
                                        step="0.1"
                                        inputMode="decimal"
                                        value={
                                          profile.percentage ??
                                          ''
                                        }
                                        onChange={(
                                          event
                                        ) =>
                                          patchProfile(
                                            player.role,
                                            player.name,
                                            player.team,
                                            {
                                              percentage:
                                                parseNullableNumber(
                                                  event
                                                    .target
                                                    .value
                                                )
                                            }
                                          )
                                        }
                                      />

                                      <span>
                                        %
                                      </span>
                                    </div>
                                  </label>

                                  {/* CREDITI */}

                                  <div className="calculated-credit-field">
                                    <span>
                                      Prezzo
                                      su 500
                                    </span>

                                    <strong>
                                      {credits ??
                                        '—'}{' '}
                                      FM
                                    </strong>

                                    <small>
                                      Calcolato
                                      automaticamente
                                    </small>
                                  </div>
                                </div>

                                {/* RATING EDITABILI */}

                                <div className="editable-ratings">
                                  <PlayerRating
                                    label="Titolarità"
                                    editable
                                    value={
                                      profile.starterRating
                                    }
                                    onChange={(
                                      value
                                    ) =>
                                      patchProfile(
                                        player.role,
                                        player.name,
                                        player.team,
                                        {
                                          starterRating:
                                            value
                                        }
                                      )
                                    }
                                  />

                                  <PlayerRating
                                    label="Affidabilità"
                                    editable
                                    value={
                                      profile.reliabilityRating
                                    }
                                    onChange={(
                                      value
                                    ) =>
                                      patchProfile(
                                        player.role,
                                        player.name,
                                        player.team,
                                        {
                                          reliabilityRating:
                                            value
                                        }
                                      )
                                    }
                                  />

                                  <PlayerRating
                                    label="Integrità"
                                    editable
                                    value={
                                      profile.integrityRating
                                    }
                                    onChange={(
                                      value
                                    ) =>
                                      patchProfile(
                                        player.role,
                                        player.name,
                                        player.team,
                                        {
                                          integrityRating:
                                            value
                                        }
                                      )
                                    }
                                  />
                                </div>

                                {/* NOTE */}

                                <label className="form-field">
                                  <span>
                                    Note
                                  </span>

                                  <textarea
                                    rows={3}
                                    value={
                                      profile.notes
                                    }
                                    placeholder="Aggiungi le tue note..."
                                    onChange={(
                                      event
                                    ) =>
                                      patchProfile(
                                        player.role,
                                        player.name,
                                        player.team,
                                        {
                                          notes:
                                            event
                                              .target
                                              .value
                                        }
                                      )
                                    }
                                  />
                                </label>

                                {/* RUOLO INFORMATIVO */}

                                {profile.tierRole &&
                                  profile.tierRole !==
                                    player.role && (
                                    <div className="info-banner">
                                      <strong>
                                        Ruolo
                                        fasce:{' '}
                                        {
                                          profile.tierRole
                                        }
                                      </strong>

                                      <p>
                                        Nel
                                        listone il
                                        ruolo
                                        ufficiale
                                        rimane{' '}
                                        {
                                          player.role
                                        }
                                        .
                                      </p>
                                    </div>
                                  )}

                                {/* RIMUOVI */}

                                <button
                                  type="button"
                                  className="danger-secondary-button"
                                  onClick={() => {
                                    patchProfile(
                                      player.role,
                                      player.name,
                                      player.team,
                                      {
                                        tier:
                                          'Non assegnata',
                                        tierOrder:
                                          null
                                      }
                                    );

                                    setExpandedPlayer(
                                      null
                                    );
                                  }}
                                >
                                  Rimuovi dalla
                                  fascia
                                </button>
                              </div>
                            )}
                          </article>
                        );
                      }
                    )}
                  </div>
                </section>
              );
            }
          )}

          {/* NON CLASSIFICATI */}

          <section className="tier-section stack">
            <div className="tier-heading">
              <div>
                <span className="tier-dot" />

                <h3>
                  Non classificati
                </h3>
              </div>

              <span>
                {
                  unassignedPlayers.length
                }
              </span>
            </div>

            <div className="strategy-unassigned">
              {
                unassignedPlayers.length
              }{' '}
              giocatori
            </div>
          </section>
        </>
      )}
    </section>
  );
}

export default TiersPage;