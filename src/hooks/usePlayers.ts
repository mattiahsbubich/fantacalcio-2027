import { useMemo } from 'react';
import { initialPlayers } from '../data/initialPlayers';
import type {
  Player,
  PlayerRole
} from '../types/player';
import { usePersistentState } from './usePersistentState';

const STORAGE_KEY =
  'fantacalcio:custom-players';

export interface CreatePlayerInput {
  name: string;
  team: string;
  role: PlayerRole;
  listPrice: number;
}

function normalizeText(
  value: string
): string {
  return value
    .trim()
    .toLocaleUpperCase('it');
}

function createPlayerId(): string {
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID ===
      'function'
  ) {
    return `custom-${crypto.randomUUID()}`;
  }

  return `custom-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}`;
}

export function usePlayers() {
  const [
    customPlayers,
    setCustomPlayers
  ] = usePersistentState<Player[]>(
    STORAGE_KEY,
    []
  );

  const allPlayers = useMemo(
    () => [
      ...initialPlayers,
      ...customPlayers
    ],
    [customPlayers]
  );

  function findExistingPlayer(
    input: CreatePlayerInput
  ): Player | undefined {
    const name =
      normalizeText(input.name);

    const team =
      normalizeText(input.team);

    return allPlayers.find(
      (player) =>
        player.name === name &&
        player.team === team &&
        player.role === input.role
    );
  }

  function addCustomPlayer(
    input: CreatePlayerInput
  ): Player {
    const existingPlayer =
      findExistingPlayer(input);

    if (existingPlayer) {
      return existingPlayer;
    }

    const player: Player = {
      id: createPlayerId(),

      name: normalizeText(
        input.name
      ),

      team: normalizeText(
        input.team
      ),

      role: input.role,

      listPrice: Math.max(
        0,
        Number.isFinite(
          input.listPrice
        )
          ? input.listPrice
          : 0
      )
    };

    setCustomPlayers(
      (current) => [
        ...current,
        player
      ]
    );

    return player;
  }

  function updateCustomPlayer(
    playerId: string,
    changes: Partial<
      Pick<
        Player,
        | 'name'
        | 'team'
        | 'role'
        | 'listPrice'
      >
    >
  ) {
    setCustomPlayers(
      (current) =>
        current.map(
          (player) => {
            if (
              player.id !== playerId
            ) {
              return player;
            }

            return {
              ...player,

              ...changes,

              name:
                changes.name !==
                undefined
                  ? normalizeText(
                      changes.name
                    )
                  : player.name,

              team:
                changes.team !==
                undefined
                  ? normalizeText(
                      changes.team
                    )
                  : player.team
            };
          }
        )
    );
  }

  function removeCustomPlayer(
    playerId: string
  ) {
    setCustomPlayers(
      (current) =>
        current.filter(
          (player) =>
            player.id !==
            playerId
        )
    );
  }

  function isCustomPlayer(
    playerId: string
  ): boolean {
    return customPlayers.some(
      (player) =>
        player.id === playerId
    );
  }

  return {
    allPlayers,
    customPlayers,

    addCustomPlayer,
    updateCustomPlayer,
    removeCustomPlayer,
    isCustomPlayer
  };
}