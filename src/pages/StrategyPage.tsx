import {
  useMemo,
  useState
} from 'react';
import {
  attackerPairings,
  goalkeeperPairings,
  type TeamPairing
} from '../data/teamPairings';

type StrategyTab =
  | 'goalkeepers'
  | 'attackers';

function formatScore(
  score: number
): string {
  return score
    .toFixed(1)
    .replace('.', ',')
    .replace(',0', '');
}

function StrategyPage() {
  const [
    activeTab,
    setActiveTab
  ] =
    useState<StrategyTab>(
      'goalkeepers'
    );

  const goalkeeperTwoTeams =
    useMemo(
      () =>
        [...goalkeeperPairings]
          .filter(
            (pairing) =>
              pairing.teams.length === 2
          )
          .sort(
            (
              first,
              second
            ) =>
              second.calendarScore -
              first.calendarScore
          ),
      []
    );

  const goalkeeperThreeTeams =
    useMemo(
      () =>
        [...goalkeeperPairings]
          .filter(
            (pairing) =>
              pairing.teams.length === 3
          )
          .sort(
            (
              first,
              second
            ) =>
              second.calendarScore -
              first.calendarScore
          ),
      []
    );

  const attackerTwoTeams =
    useMemo(
      () =>
        [...attackerPairings]
          .filter(
            (pairing) =>
              pairing.teams.length === 2
          )
          .sort(
            (
              first,
              second
            ) =>
              second.calendarScore -
              first.calendarScore
          ),
      []
    );

  const attackerThreeTeams =
    useMemo(
      () =>
        [...attackerPairings]
          .filter(
            (pairing) =>
              pairing.teams.length === 3
          )
          .sort(
            (
              first,
              second
            ) =>
              second.calendarScore -
              first.calendarScore
          ),
      []
    );

  return (
    <section className="strategy-page stack">
      {/* INTRO */}

      <div>
        <p className="eyebrow">
          Preparazione asta
        </p>

        <h2>
          Strategie
        </h2>

        <p>
          Gli abbinamenti sono
          ordinati automaticamente
          dal calendario migliore
          al peggiore.
        </p>
      </div>

      {/* TAB RUOLO */}

      <div className="strategy-main-tabs">
        <button
          type="button"
          className={
            activeTab ===
            'goalkeepers'
              ? 'active'
              : ''
          }
          onClick={() =>
            setActiveTab(
              'goalkeepers'
            )
          }
        >
          <span
            className="role-avatar role-p"
            aria-hidden="true"
          >
            P
          </span>

          <div>
            <strong>
              Portieri
            </strong>

            <small>
              Coppie e tris
            </small>
          </div>
        </button>

        <button
          type="button"
          className={
            activeTab ===
            'attackers'
              ? 'active'
              : ''
          }
          onClick={() =>
            setActiveTab(
              'attackers'
            )
          }
        >
          <span
            className="role-avatar role-a"
            aria-hidden="true"
          >
            A
          </span>

          <div>
            <strong>
              Attaccanti
            </strong>

            <small>
              Abbinamenti calendario
            </small>
          </div>
        </button>
      </div>

      {/* PORTIERI */}

      {activeTab ===
        'goalkeepers' && (
        <>
          <StrategyPairingGroup
            title="Abbinamenti a 2"
            description="Coppie di squadre con la migliore complementarità di calendario."
            pairings={
              goalkeeperTwoTeams
            }
          />

          <StrategyPairingGroup
            title="Abbinamenti a 3"
            description="Tris di squadre per aumentare ulteriormente la copertura del calendario."
            pairings={
              goalkeeperThreeTeams
            }
          />
        </>
      )}

      {/* ATTACCANTI */}

      {activeTab ===
        'attackers' && (
        <>
          {attackerTwoTeams.length >
            0 && (
            <StrategyPairingGroup
              title="Abbinamenti a 2"
              description="Le migliori coppie di squadre per il reparto offensivo."
              pairings={
                attackerTwoTeams
              }
            />
          )}

          {attackerThreeTeams.length >
            0 && (
            <StrategyPairingGroup
              title="Abbinamenti a 3"
              description="Combinazioni di tre squadre ordinate per qualità del calendario."
              pairings={
                attackerThreeTeams
              }
            />
          )}
        </>
      )}
    </section>
  );
}

interface StrategyPairingGroupProps {
  title: string;
  description: string;
  pairings: TeamPairing[];
}

function StrategyPairingGroup({
  title,
  description,
  pairings
}: StrategyPairingGroupProps) {
  return (
    <section className="strategy-pairing-group stack">
      <div className="strategy-pairing-group__heading">
        <div>
          <h3>
            {title}
          </h3>

          <p>
            {description}
          </p>
        </div>

        <span>
          {pairings.length}
        </span>
      </div>

      <div className="strategy-ranking-list">
        {pairings.map(
          (
            pairing,
            index
          ) => (
            <PairingRankingCard
              key={pairing.id}
              pairing={pairing}
              position={
                index + 1
              }
            />
          )
        )}
      </div>
    </section>
  );
}

interface PairingRankingCardProps {
  pairing: TeamPairing;
  position: number;
}

function PairingRankingCard({
  pairing,
  position
}: PairingRankingCardProps) {
  return (
    <article
      className={`strategy-ranking-card ${
        position <= 3
          ? 'top-pairing'
          : ''
      }`}
    >
      {/* POSIZIONE */}

      <div className="strategy-ranking-position">
        <small>
          #
        </small>

        <strong>
          {position}
        </strong>
      </div>

      {/* SQUADRE */}

      <div className="strategy-ranking-content">
        <div className="strategy-ranking-teams">
          {pairing.teams.map(
            (
              team,
              index
            ) => (
              <div
                key={`${pairing.id}-${team}`}
                className="strategy-ranking-team-wrapper"
              >
                {index > 0 && (
                  <span className="strategy-ranking-plus">
                    +
                  </span>
                )}

                <span className="strategy-team-badge">
                  {team}
                </span>
              </div>
            )
          )}
        </div>

        <small className="strategy-ranking-help">
          {pairing.teams.length ===
          2
            ? 'Coppia consigliata'
            : 'Tris consigliato'}
        </small>
      </div>

      {/* PUNTEGGIO */}

      <div className="strategy-ranking-score">
        <small>
          Calendario
        </small>

        <strong>
          {formatScore(
            pairing.calendarScore
          )}
        </strong>
      </div>
    </article>
  );
}

export default StrategyPage;