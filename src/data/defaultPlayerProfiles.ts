import { defaultAttackerProfiles } from './attackerProfiles';
import { defaultDefenderProfiles } from './defenderProfiles';
import { defaultGoalkeeperProfiles } from './goalkeeperProfiles';
import { defaultMidfielderProfiles } from './midfielderProfiles';
import type { PlayerProfiles } from '../types/playerProfile';

export const defaultPlayerProfiles: PlayerProfiles = {
  ...defaultGoalkeeperProfiles,
  ...defaultDefenderProfiles,
  ...defaultMidfielderProfiles,
  ...defaultAttackerProfiles
};