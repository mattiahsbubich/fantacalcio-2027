import { useState } from 'react';
import { usePersistentState } from '../hooks/usePersistentState';
import type {
  PlayerRole
} from '../types/player';

interface Simulation {
  id: string;
  name: string;

  roster: Record<
    PlayerRole,
    string[]
  >;
}

type HomeView =
  | 'home'
  | 'notes'
  | 'simulations'
  | 'simulation-detail';

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

function createEmptyRoster(): Record<
  PlayerRole,
  string[]
> {
  return {
    P: Array(
      roleSlots.P
    ).fill(''),

    D: Array(
      roleSlots.D
    ).fill(''),

    C: Array(
      roleSlots.C
    ).fill(''),

    A: Array(
      roleSlots.A
    ).fill('')
  };
}

function createSimulation(
  index: number
): Simulation {
  return {
    id: `${Date.now()}-${index}`,

    name: `Simulazione ${index}`,

    roster:
      createEmptyRoster()
  };
}

function HomePage() {
  const [
    view,
    setView
  ] =
    useState<HomeView>(
      'home'
    );

  const [
    notes,
    setNotes
  ] =
    usePersistentState<string>(
      'fantacalcio:home-notes',
      ''
    );

  const [
    simulations,
    setSimulations
  ] =
    usePersistentState<Simulation[]>(
      'fantacalcio:simulations',
      []
    );

  const [
    activeSimulationId,
    setActiveSimulationId
  ] =
    useState<string | null>(
      null
    );

  const activeSimulation =
    simulations.find(
      (simulation) =>
        simulation.id ===
        activeSimulationId
    ) ?? null;

  function goHome() {
    setView('home');

    setActiveSimulationId(
      null
    );
  }

  function openNotes() {
    setView('notes');
  }

  function openSimulations() {
    setView(
      'simulations'
    );

    setActiveSimulationId(
      null
    );
  }

  function openSimulation(
    simulationId: string
  ) {
    setActiveSimulationId(
      simulationId
    );

    setView(
      'simulation-detail'
    );
  }

  function addSimulation() {
    const nextNumber =
      simulations.length + 1;

    const simulation =
      createSimulation(
        nextNumber
      );

    setSimulations(
      (current) => [
        ...current,
        simulation
      ]
    );

    setActiveSimulationId(
      simulation.id
    );

    setView(
      'simulation-detail'
    );
  }

  function updateSimulationName(
    value: string
  ) {
    if (
      !activeSimulation
    ) {
      return;
    }

    setSimulations(
      (current) =>
        current.map(
          (simulation) =>
            simulation.id ===
            activeSimulation.id
              ? {
                  ...simulation,
                  name: value
                }
              : simulation
        )
    );
  }

  function updateSlot(
    role: PlayerRole,
    index: number,
    value: string
  ) {
    if (
      !activeSimulation
    ) {
      return;
    }

    setSimulations(
      (current) =>
        current.map(
          (simulation) => {
            if (
              simulation.id !==
              activeSimulation.id
            ) {
              return simulation;
            }

            const nextSlots = [
              ...simulation.roster[
                role
              ]
            ];

            nextSlots[
              index
            ] = value;

            return {
              ...simulation,

              roster: {
                ...simulation.roster,

                [role]:
                  nextSlots
              }
            };
          }
        )
    );
  }

  function deleteSimulation() {
    if (
      !activeSimulation
    ) {
      return;
    }

    setSimulations(
      (current) =>
        current.filter(
          (simulation) =>
            simulation.id !==
            activeSimulation.id
        )
    );

    setActiveSimulationId(
      null
    );

    setView(
      'simulations'
    );
  }

  function getFilledSlots(
    simulation: Simulation
  ) {
    return roleOrder.reduce(
      (total, role) =>
        total +
        simulation.roster[
          role
        ].filter(
          (playerName) =>
            playerName.trim() !==
            ''
        ).length,
      0
    );
  }

  /*
   * =========================
   * APPUNTI
   * =========================
   */

  if (view === 'notes') {
    return (
      <section className="home-subpage stack">
        <header className="home-subpage-header">
          <button
            type="button"
            className="home-back-button"
            onClick={
              goHome
            }
          >
            ←
          </button>

          <div>
            <p className="eyebrow">
              Spazio personale
            </p>

            <h2>
              Appunti
            </h2>
          </div>

          <span className="autosave-chip">
            Salvato
          </span>
        </header>

        <div className="panel stack">
          <textarea
            className="home-notes-page-textarea"
            value={notes}
            onChange={(
              event
            ) =>
              setNotes(
                event.target.value
              )
            }
            placeholder={`Scrivi qui tutto ciò che vuoi ricordare...

• Giocatori da evitare
• Possibili occasioni
• Idee per l'asta
• Budget da modificare
• Dubbi
• Strategie`}
          />

          <small className="home-storage-note">
            Tutto viene salvato
            automaticamente su
            questo dispositivo.
          </small>
        </div>
      </section>
    );
  }

  /*
   * =========================
   * ELENCO SIMULAZIONI
   * =========================
   */

  if (
    view ===
    'simulations'
  ) {
    return (
      <section className="home-subpage stack">
        <header className="home-subpage-header">
          <button
            type="button"
            className="home-back-button"
            onClick={
              goHome
            }
          >
            ←
          </button>

          <div>
            <p className="eyebrow">
              Pianificazione
            </p>

            <h2>
              Simulazioni rosa
            </h2>
          </div>

          <button
            type="button"
            className="small-primary-button"
            onClick={
              addSimulation
            }
          >
            + Nuova
          </button>
        </header>

        <p className="home-subpage-description">
          Crea più idee di rosa e
          apri soltanto quella che
          vuoi modificare.
        </p>

        {simulations.length ===
        0 ? (
          <button
            type="button"
            className="empty-simulation-card"
            onClick={
              addSimulation
            }
          >
            <span>
              +
            </span>

            <strong>
              Crea la prima
              simulazione
            </strong>

            <small>
              Ogni simulazione
              viene salvata
              separatamente.
            </small>
          </button>
        ) : (
          <div className="simulation-compact-list">
            {simulations.map(
              (
                simulation,
                index
              ) => {
                const filled =
                  getFilledSlots(
                    simulation
                  );

                return (
                  <button
                    key={
                      simulation.id
                    }
                    type="button"
                    className="simulation-compact-card"
                    onClick={() =>
                      openSimulation(
                        simulation.id
                      )
                    }
                  >
                    <div className="simulation-compact-index">
                      {index + 1}
                    </div>

                    <div className="simulation-compact-info">
                      <strong>
                        {
                          simulation.name
                        }
                      </strong>

                      <span>
                        {filled} / 25
                        giocatori
                      </span>
                    </div>

                    <span className="simulation-compact-arrow">
                      →
                    </span>
                  </button>
                );
              }
            )}
          </div>
        )}

        {simulations.length >
          0 && (
          <button
            type="button"
            className="new-simulation-large-button"
            onClick={
              addSimulation
            }
          >
            + Nuova simulazione
          </button>
        )}
      </section>
    );
  }

  /*
   * =========================
   * DETTAGLIO SIMULAZIONE
   * =========================
   */

  if (
    view ===
      'simulation-detail' &&
    activeSimulation
  ) {
    return (
      <section className="home-subpage stack">
        <header className="home-subpage-header">
          <button
            type="button"
            className="home-back-button"
            onClick={
              openSimulations
            }
          >
            ←
          </button>

          <div>
            <p className="eyebrow">
              Simulazione rosa
            </p>

            <h2>
              {
                activeSimulation.name
              }
            </h2>
          </div>

          <span className="autosave-chip">
            Salvato
          </span>
        </header>

        <section className="panel stack">
          <label className="form-field">
            <span>
              Nome simulazione
            </span>

            <input
              type="text"
              value={
                activeSimulation.name
              }
              onChange={(
                event
              ) =>
                updateSimulationName(
                  event.target.value
                )
              }
            />
          </label>
        </section>

        <div className="simulation-detail-roles">
          {roleOrder.map(
            (role) => (
              <section
                key={role}
                className="simulation-role"
              >
                <div className="simulation-role-heading">
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

                    <small>
                      {
                        activeSimulation
                          .roster[
                            role
                          ]
                          .filter(
                            (
                              player
                            ) =>
                              player.trim() !==
                              ''
                          )
                          .length
                      }
                      {' / '}
                      {
                        roleSlots[
                          role
                        ]
                      }
                    </small>
                  </div>
                </div>

                <div className="simulation-slot-list">
                  {activeSimulation
                    .roster[
                      role
                    ]
                    .map(
                      (
                        playerName,
                        index
                      ) => (
                        <label
                          key={
                            index
                          }
                          className="simulation-slot"
                        >
                          <span>
                            {index +
                              1}
                            .
                          </span>

                          <input
                            type="text"
                            value={
                              playerName
                            }
                            onChange={(
                              event
                            ) =>
                              updateSlot(
                                role,
                                index,
                                event
                                  .target
                                  .value
                              )
                            }
                            placeholder="Giocatore"
                          />
                        </label>
                      )
                    )}
                </div>
              </section>
            )
          )}
        </div>

        <button
          type="button"
          className="danger-secondary-button"
          onClick={
            deleteSimulation
          }
        >
          Elimina simulazione
        </button>
      </section>
    );
  }

  /*
   * =========================
   * HOME
   * =========================
   */

  return (
    <section className="home-page stack">
      <section className="home-welcome-card">
        <p className="eyebrow">
          Fantacalcio 2026/27
        </p>

        <h2>
          Preparazione asta
        </h2>

        <p>
          Il tuo spazio personale
          per preparare e gestire
          l'asta.
        </p>
      </section>

      <div className="home-dashboard-grid">
        {/* APPUNTI */}

        <button
          type="button"
          className="home-feature-card"
          onClick={
            openNotes
          }
        >
          <div className="home-feature-card__icon">
            ✎
          </div>

          <div className="home-feature-card__content">
            <span className="eyebrow">
              Spazio personale
            </span>

            <strong>
              Appunti
            </strong>

            <p>
              Idee, giocatori,
              promemoria e note
              per l'asta.
            </p>

            {notes.trim() !==
              '' && (
              <small>
                Appunti presenti
              </small>
            )}
          </div>

          <span className="home-feature-card__arrow">
            →
          </span>
        </button>

        {/* SIMULAZIONI */}

        <button
          type="button"
          className="home-feature-card"
          onClick={
            openSimulations
          }
        >
          <div className="home-feature-card__icon">
            ◫
          </div>

          <div className="home-feature-card__content">
            <span className="eyebrow">
              Pianificazione
            </span>

            <strong>
              Simulazioni rosa
            </strong>

            <p>
              Crea e confronta
              più possibili rose.
            </p>

            <small>
              {
                simulations.length
              }{' '}
              {simulations.length ===
              1
                ? 'simulazione'
                : 'simulazioni'}
            </small>
          </div>

          <span className="home-feature-card__arrow">
            →
          </span>
        </button>
      </div>
    </section>
  );
}

export default HomePage;