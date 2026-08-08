import {
  getPlayerProfileKey,
  type PlayerProfile,
  type PlayerProfiles
} from '../types/playerProfile';

const attackerProfiles: PlayerProfile[] = [
  // =========================
  // 1° SLOT RELATIVO
  // =========================

  {
    role: 'A',
    playerName: 'MALEN',
    team: 'ROM',
    tier: '1° Slot Relativo',
    tierOrder: 1,
    percentage: 33,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'MARTINEZ',
    team: 'INT',
    tier: '1° Slot Relativo',
    tierOrder: 2,
    percentage: 31,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'THURAM',
    team: 'INT',
    tier: '1° Slot Relativo',
    tierOrder: 3,
    percentage: 28,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'HOJLUND',
    team: 'NAP',
    tier: '1° Slot Relativo',
    tierOrder: 4,
    percentage: 25,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'RAMOS',
    team: 'MIL',
    tier: '1° Slot Relativo',
    tierOrder: 5,
    percentage: 25,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'KOLO MUANI',
    team: 'JUV',
    tier: '1° Slot Relativo',
    tierOrder: 6,
    percentage: 25,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'YILDIZ',
    team: 'JUV',
    tier: '1° Slot Relativo',
    tierOrder: 7,
    percentage: 20,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'KEAN',
    team: 'FIO',
    tier: '1° Slot Relativo',
    tierOrder: 8,
    percentage: 18,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'DOUVIKAS',
    team: 'COM',
    tier: '1° Slot Relativo',
    tierOrder: 9,
    percentage: 18,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'SCAMACCA',
    team: 'ATA',
    tier: '1° Slot Relativo',
    tierOrder: 10,
    percentage: 16,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },

  // =========================
  // 2° SLOT RELATIVO
  // =========================

  {
    role: 'A',
    playerName: 'DAVIS',
    team: 'UDI',
    tier: '2° Slot Relativo',
    tierOrder: 1,
    percentage: 15,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'BERARDI',
    team: 'SAS',
    tier: '2° Slot Relativo',
    tierOrder: 2,
    percentage: 14,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'DOVBYK',
    team: 'BOL',
    tier: '2° Slot Relativo',
    tierOrder: 3,
    percentage: 14,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'KRSTOVIC',
    team: 'ATA',
    tier: '2° Slot Relativo',
    tierOrder: 4,
    percentage: 12,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'LEAO',
    team: 'MIL',
    tier: '2° Slot Relativo',
    tierOrder: 5,
    percentage: 12,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'SIMEONE',
    team: 'TOR',
    tier: '2° Slot Relativo',
    tierOrder: 6,
    percentage: 12,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'DE KETELAERE',
    team: 'ATA',
    tier: '2° Slot Relativo',
    tierOrder: 7,
    percentage: 11,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'ESPOSITO',
    team: 'INT',
    tier: '2° Slot Relativo',
    tierOrder: 8,
    percentage: 11,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'DYBALA',
    team: 'ROM',
    tier: '2° Slot Relativo',
    tierOrder: 9,
    percentage: 11,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'SOULÈ',
    team: 'ROM',
    tier: '2° Slot Relativo',
    tierOrder: 10,
    percentage: 11,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // 3° SLOT RELATIVO
  // =========================

  {
    role: 'A',
    playerName: 'LAURIENTÈ',
    team: 'SAS',
    tier: '3° Slot Relativo',
    tierOrder: 1,
    percentage: 10,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'PELLEGRINO',
    team: 'PAR',
    tier: '3° Slot Relativo',
    tierOrder: 2,
    percentage: 9.6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'RASPADORI',
    team: 'ATA',
    tier: '3° Slot Relativo',
    tierOrder: 3,
    percentage: 9,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'COLOMBO',
    team: 'GEN',
    tier: '3° Slot Relativo',
    tierOrder: 4,
    percentage: 9,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'BOWIE',
    team: 'SAS',
    tier: '3° Slot Relativo',
    tierOrder: 5,
    percentage: 9,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'CASTRO',
    team: 'ROM',
    tier: '3° Slot Relativo',
    tierOrder: 6,
    percentage: 8,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'PINAMONTI',
    team: 'SAS',
    tier: '3° Slot Relativo',
    tierOrder: 7,
    percentage: 8,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'SANTOS',
    team: 'NAP',
    tier: '3° Slot Relativo',
    tierOrder: 8,
    percentage: 7,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'NKUNKU',
    team: 'MIL',
    tier: '3° Slot Relativo',
    tierOrder: 9,
    percentage: 6,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'DIAO',
    team: 'COM',
    tier: '3° Slot Relativo',
    tierOrder: 10,
    percentage: 6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },

  // =========================
  // 4° SLOT RELATIVO
  // =========================

  {
    role: 'A',
    playerName: 'BOGA',
    team: 'JUV',
    tier: '4° Slot Relativo',
    tierOrder: 1,
    percentage: 5,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'ESPOSITO',
    team: 'CAG',
    tier: '4° Slot Relativo',
    tierOrder: 2,
    percentage: 4.6,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'DAVID',
    team: 'JUV',
    tier: '4° Slot Relativo',
    tierOrder: 3,
    percentage: 4.6,
    starterRating: 3,
    reliabilityRating: 1,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'NERES',
    team: 'NAP',
    tier: '4° Slot Relativo',
    tierOrder: 4,
    percentage: 4,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'ADAMS',
    team: 'VEN',
    tier: '4° Slot Relativo',
    tierOrder: 5,
    percentage: 3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'RATKOV',
    team: 'LAZ',
    tier: '4° Slot Relativo',
    tierOrder: 6,
    percentage: 3,
    starterRating: 1,
    reliabilityRating: 1,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'ADAMS',
    team: 'TOR',
    tier: '4° Slot Relativo',
    tierOrder: 7,
    percentage: 3,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'VITINHA',
    team: 'GEN',
    tier: '4° Slot Relativo',
    tierOrder: 8,
    percentage: 3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'YEBOAH',
    team: 'VEN',
    tier: '4° Slot Relativo',
    tierOrder: 9,
    percentage: 3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'ZAPATA',
    team: 'TOR',
    tier: '4° Slot Relativo',
    tierOrder: 10,
    percentage: 3,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 1,
    notes: ''
  },

  // =========================
  // 5° SLOT RELATIVO
  // =========================

  {
    role: 'A',
    playerName: 'BONNY',
    team: 'INT',
    tier: '5° Slot Relativo',
    tierOrder: 1,
    percentage: 2.6,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'GHEDJEMIS',
    team: 'FRO',
    tier: '5° Slot Relativo',
    tierOrder: 2,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'MOTA',
    team: 'MON',
    tier: '5° Slot Relativo',
    tierOrder: 3,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'LUKAKU',
    team: 'NAP',
    tier: '5° Slot Relativo',
    tierOrder: 4,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'GEUBBELS',
    team: 'LEC',
    tier: '5° Slot Relativo',
    tierOrder: 5,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'PICCOLI',
    team: 'FIO',
    tier: '5° Slot Relativo',
    tierOrder: 6,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'MALDINI',
    team: 'ATA',
    tier: '5° Slot Relativo',
    tierOrder: 7,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'BORRELLI',
    team: 'CAG',
    tier: '5° Slot Relativo',
    tierOrder: 8,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'LUCCA',
    team: 'NAP',
    tier: '5° Slot Relativo',
    tierOrder: 9,
    percentage: 1,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'CUTRONE',
    team: 'MON',
    tier: '5° Slot Relativo',
    tierOrder: 10,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // 6° SLOT RELATIVO
  // =========================

  {
    role: 'A',
    playerName: 'RRAHMANI',
    team: 'VEN',
    tier: '6° Slot Relativo',
    tierOrder: 1,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'RAIMONDO',
    team: 'FRO',
    tier: '6° Slot Relativo',
    tierOrder: 2,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'STULIC',
    team: 'LEC',
    tier: '6° Slot Relativo',
    tierOrder: 3,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 1,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'GIMENEZ',
    team: 'MIL',
    tier: '6° Slot Relativo',
    tierOrder: 4,
    percentage: 0.3,
    starterRating: 1,
    reliabilityRating: 1,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'NOSLIN',
    team: 'LAZ',
    tier: '6° Slot Relativo',
    tierOrder: 5,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'ADORANTE',
    team: 'VEN',
    tier: '6° Slot Relativo',
    tierOrder: 6,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'KVERNADZE',
    team: 'FRO',
    tier: '6° Slot Relativo',
    tierOrder: 7,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'EKHATOR',
    team: 'JUV',
    tier: '6° Slot Relativo',
    tierOrder: 8,
    percentage: 0.3,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'ELPHEGE',
    team: 'PAR',
    tier: '6° Slot Relativo',
    tierOrder: 9,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'PETAGNA',
    team: 'MON',
    tier: '6° Slot Relativo',
    tierOrder: 10,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // ALTRI
  // =========================

  {
    role: 'A',
    playerName: 'HAVEL',
    tier: 'Altri',
    tierOrder: 1,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'KULENOVIC',
    team: 'TOR',
    tier: 'Altri',
    tierOrder: 2,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'MENDY',
    team: 'CAG',
    tier: 'Altri',
    tierOrder: 3,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'MORATA',
    team: 'COM',
    tier: 'Altri',
    tierOrder: 4,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 1,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'KUHN',
    team: 'COM',
    tier: 'Altri',
    tierOrder: 5,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'LANG',
    team: 'NAP',
    tier: 'Altri',
    tierOrder: 6,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: "N'DRI",
    team: 'LEC',
    tier: 'Altri',
    tierOrder: 7,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'VARELA',
    team: 'MON',
    tier: 'Altri',
    tierOrder: 8,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'BUKSA',
    team: 'UDI',
    tier: 'Altri',
    tierOrder: 9,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'ALBARRACIN',
    team: 'CAG',
    tier: 'Altri',
    tierOrder: 10,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'AZON',
    team: 'COM',
    tier: 'Altri',
    tierOrder: 11,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'A',
    playerName: 'BAYO',
    team: 'UDI',
    tier: 'Altri',
    tierOrder: 12,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  }
];

export const defaultAttackerProfiles: PlayerProfiles =
  Object.fromEntries(
    attackerProfiles.map((profile) => [
      getPlayerProfileKey(
        profile.role,
        profile.playerName,
        profile.team
      ),
      profile
    ])
  );