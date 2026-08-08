import {
  getPlayerProfileKey,
  type PlayerProfile,
  type PlayerProfiles
} from '../types/playerProfile';

const goalkeeperProfiles: PlayerProfile[] = [
  {
    role: 'P',
    playerName: 'SVILAR',
    tier: 'Top',
    percentage: 13,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'BUTEZ',
    tier: 'Top',
    percentage: 10,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'MERET',
    tier: 'Top',
    percentage: 10,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'MARTINEZ',
    tier: 'Top',
    percentage: 9,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },

  {
    role: 'P',
    playerName: 'MAIGNAN',
    tier: 'Semitop',
    percentage: 9,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'CARNESECCHI',
    tier: 'Semitop',
    percentage: 8,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'DE GEA',
    tier: 'Semitop',
    percentage: 6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'SKORUPSKI',
    tier: 'Semitop',
    percentage: 5,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },

  {
    role: 'P',
    playerName: 'MOTTA',
    tier: 'Da Abbinare',
    percentage: 4.3,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'OKOYE',
    tier: 'Da Abbinare',
    percentage: 3.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'FALCONE',
    tier: 'Da Abbinare',
    percentage: 3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'BIJLOW',
    tier: 'Da Abbinare',
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'PALEARI',
    tier: 'Da Abbinare',
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'CAPRILE',
    tier: 'Da Abbinare',
    percentage: 1.6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'DAFFARA',
    tier: 'Da Abbinare',
    percentage: 1,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'MURIC',
    tier: 'Da Abbinare',
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'STANKOVIC',
    tier: 'Da Abbinare',
    percentage: 0.6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'THIAM',
    tier: 'Da Abbinare',
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'PALMISANI',
    tier: 'Da Abbinare',
    percentage: 0.3,
    starterRating: 1,
    reliabilityRating: 1,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'DESPLANCHES',
    tier: 'Da Abbinare',
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 1,
    notes: ''
  },

  {
    role: 'P',
    playerName: 'DI GREGORIO',
    tier: 'Secondi Scomodi',
    percentage: 4,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'PROVEDEL',
    tier: 'Secondi Scomodi',
    percentage: 4,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'MILINKOVIC SAVIC',
    tier: 'Secondi Scomodi',
    percentage: 2.3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'CORVI',
    tier: 'Secondi Scomodi',
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },

  {
    role: 'P',
    playerName: 'SUZUKI',
    tier: 'Altri',
    percentage: 4,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'P',
    playerName: 'PERIN',
    tier: 'Altri',
    percentage: 1,
    starterRating: 2,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  }
];

export const defaultGoalkeeperProfiles: PlayerProfiles =
  Object.fromEntries(
    goalkeeperProfiles.map((profile) => [
      getPlayerProfileKey(
        profile.role,
        profile.playerName
      ),
      profile
    ])
  );