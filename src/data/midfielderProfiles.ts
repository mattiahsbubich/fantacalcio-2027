import {
  getPlayerProfileKey,
  type PlayerProfile,
  type PlayerProfiles
} from '../types/playerProfile';

const midfielderProfiles: PlayerProfile[] = [
  // =========================
  // 1° SLOT RELATIVO
  // =========================

  {
    role: 'C',
    playerName: 'PAZ',
    team: 'COM',
    tier: '1° Slot Relativo',
    tierOrder: 1,
    percentage: 18,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'MCTOMINAY',
    team: 'NAP',
    tier: '1° Slot Relativo',
    tierOrder: 2,
    percentage: 16,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'ORSOLINI',
    team: 'BOL',
    tier: '1° Slot Relativo',
    tierOrder: 3,
    percentage: 15,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'CALHANOGLU',
    team: 'INT',
    tier: '1° Slot Relativo',
    tierOrder: 4,
    percentage: 13,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'PULISIC',
    team: 'MIL',
    tier: '1° Slot Relativo',
    tierOrder: 5,
    percentage: 13,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'ZANIOLO',
    team: 'UDI',
    tier: '1° Slot Relativo',
    tierOrder: 6,
    percentage: 11,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'BATURINA',
    team: 'COM',
    tier: '1° Slot Relativo',
    tierOrder: 7,
    percentage: 9,
    starterRating: 4,
    reliabilityRating: 4,

    // Coperto parzialmente dal riquadro del video.
    integrityRating: null,

    notes: ''
  },
  {
    role: 'C',
    playerName: 'ATTA',
    team: 'FIO',
    tier: '1° Slot Relativo',
    tierOrder: 8,
    percentage: 8,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'DE BRUYNE',
    team: 'NAP',
    tier: '1° Slot Relativo',
    tierOrder: 9,
    percentage: 7.6,
    starterRating: 4,
    reliabilityRating: 4,

    // Coperto dallo screenshot.
    integrityRating: null,

    notes: ''
  },



  // =========================
  // 2° SLOT RELATIVO
  // =========================

  {
    role: 'C',
    playerName: 'ALAJBEGOVIC',
    team: 'JUV',
    tier: '2° Slot Relativo',
    tierOrder: 19,
    percentage: 8,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
},

  {
    role: 'C',
    playerName: 'RABIOT',
    team: 'MIL',
    tier: '2° Slot Relativo',
    tierOrder: 1,
    percentage: 7,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'DA CUNHA',
    team: 'COM',
    tier: '2° Slot Relativo',
    tierOrder: 2,
    percentage: 7,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'BARELLA',
    team: 'INT',
    tier: '2° Slot Relativo',
    tierOrder: 3,
    percentage: 7,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'ROWE',
    team: 'BOL',
    tier: '2° Slot Relativo',
    tierOrder: 4,
    percentage: 7,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'ZIELINSKI',
    team: 'INT',
    tier: '2° Slot Relativo',
    tierOrder: 5,
    percentage: 7,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'ZACCAGNI',
    team: 'LAZ',
    tier: '2° Slot Relativo',
    tierOrder: 6,
    percentage: 6,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'VLASIC',
    team: 'TOR',
    tier: '2° Slot Relativo',
    tierOrder: 7,
    percentage: 6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'GUDMUNDSSON',
    team: 'FIO',
    tier: '2° Slot Relativo',
    tierOrder: 8,
    percentage: 5.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'TAYLOR',
    team: 'LAZ',
    tier: '2° Slot Relativo',
    tierOrder: 9,
    percentage: 5.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'SAELEMAEKERS',
    team: 'MIL',
    tier: '2° Slot Relativo',
    tierOrder: 10,
    percentage: 5.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // 3° SLOT RELATIVO
  // =========================

  {
    role: 'C',
    playerName: 'MCKENNIE',
    team: 'JUV',
    tier: '3° Slot Relativo',
    tierOrder: 1,
    percentage: 5,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'EKKELENKAMP',
    team: 'UDI',
    tier: '3° Slot Relativo',
    tierOrder: 2,
    percentage: 5,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'EDERSON',
    team: 'ATA',
    tier: '3° Slot Relativo',
    tierOrder: 3,
    percentage: 4,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'CASADEI',
    team: 'TOR',
    tier: '3° Slot Relativo',
    tierOrder: 4,
    percentage: 4,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'SUCIC',
    team: 'INT',
    tier: '3° Slot Relativo',
    tierOrder: 5,
    percentage: 4,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'CONCEICAO',
    team: 'JUV',
    tier: '3° Slot Relativo',
    tierOrder: 6,
    percentage: 3.6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'ANGUISSA',
    team: 'NAP',
    tier: '3° Slot Relativo',
    tierOrder: 7,
    percentage: 3.6,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'SAMARDZIC',
    team: 'ATA',
    tier: '3° Slot Relativo',
    tierOrder: 8,
    percentage: 3.3,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'BERNARDESCHI',
    team: 'BOL',
    tier: '3° Slot Relativo',
    tierOrder: 9,
    percentage: 3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'VERGARA',
    team: 'NAP',
    tier: '3° Slot Relativo',
    tierOrder: 10,
    percentage: 3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // 4° SLOT RELATIVO
  // =========================

  {
    role: 'C',
    playerName: 'PISILLI',
    team: 'ROM',
    tier: '4° Slot Relativo',
    tierOrder: 1,
    percentage: 3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'THORSTVEDT',
    team: 'SAS',
    tier: '4° Slot Relativo',
    tierOrder: 2,
    percentage: 2.6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'THURAM',
    team: 'JUV',
    tier: '4° Slot Relativo',
    tierOrder: 3,
    percentage: 2.6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },

  /**
   * Nel PDF/listone ISAKSEN risulta A,
   * mentre negli screenshot forniti è C.
   */
  {
    role: 'A',
    tierRole: 'C',
    playerName: 'ISAKSEN',
    team: 'LAZ',
    tier: '4° Slot Relativo',
    tierOrder: 4,
    percentage: 2.6,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },

  /**
   * Rodriguez Je. nello screenshot è
   * il giocatore del Como.
   * Nel listone è presente come attaccante.
   */
  {
    role: 'A',
    tierRole: 'C',
    playerName: 'RODRIGUEZ',
    team: 'COM',
    tier: '4° Slot Relativo',
    tierOrder: 5,
    percentage: 2.3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'CALÒ',
    team: 'FRO',
    tier: '4° Slot Relativo',
    tierOrder: 6,
    percentage: 2.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'PESSINA',
    team: 'MON',
    tier: '4° Slot Relativo',
    tierOrder: 7,
    percentage: 2.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'TRAORÈ',
    team: 'GEN',
    tier: '4° Slot Relativo',
    tierOrder: 8,
    percentage: 2.3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'MODRIC',
    team: 'MIL',
    tier: '4° Slot Relativo',
    tierOrder: 9,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'KONE',
    team: 'ROM',
    tier: '4° Slot Relativo',
    tierOrder: 10,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // 5° SLOT RELATIVO
  // =========================

  {
    role: 'C',
    playerName: 'BALDANZI',
    team: 'GEN',
    tier: '5° Slot Relativo',
    tierOrder: 1,
    percentage: 2.3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'MANDRAGORA',
    team: 'FIO',
    tier: '5° Slot Relativo',
    tierOrder: 2,
    percentage: 2,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'PASALIC',
    team: 'ATA',
    tier: '5° Slot Relativo',
    tierOrder: 3,
    percentage: 2,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'COLPANI',
    team: 'MON',
    tier: '5° Slot Relativo',
    tierOrder: 4,
    percentage: 2,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'DIOUF',
    team: 'INT',
    tier: '5° Slot Relativo',
    tierOrder: 5,
    percentage: 2,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'NDOUR',
    team: 'FIO',
    tier: '5° Slot Relativo',
    tierOrder: 6,
    percentage: 2,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'ODGAARD',
    team: 'BOL',
    tier: '5° Slot Relativo',
    tierOrder: 7,
    percentage: 2,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'BERNABÈ',
    team: 'PAR',
    tier: '5° Slot Relativo',
    tierOrder: 8,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'FAZZINI',
    team: 'CAG',
    tier: '5° Slot Relativo',
    tierOrder: 9,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'LIBERALI',
    team: 'COM',
    tier: '5° Slot Relativo',
    tierOrder: 10,
    percentage: 2,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // 6° SLOT RELATIVO
  // =========================

  {
    role: 'C',
    playerName: 'FAGIOLI',
    team: 'FIO',
    tier: '6° Slot Relativo',
    tierOrder: 1,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'CAQUERET',
    team: 'COM',
    tier: '6° Slot Relativo',
    tierOrder: 2,
    percentage: 2,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'ADZIC',
    team: 'JUV',
    tier: '6° Slot Relativo',
    tierOrder: 3,
    percentage: 2,
    starterRating: 1,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'CACCIAMANI',
    team: 'TOR',
    tier: '6° Slot Relativo',
    tierOrder: 4,
    percentage: 2,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'PERRONE',
    team: 'COM',
    tier: '6° Slot Relativo',
    tierOrder: 5,
    percentage: 1.6,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'GAETANO',
    team: 'ATA',
    tier: '6° Slot Relativo',
    tierOrder: 6,
    percentage: 1.6,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'CHUKWUEZE',
    team: 'MIL',
    tier: '6° Slot Relativo',
    tierOrder: 7,
    percentage: 1.6,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },

  /**
   * Nel PDF/listone CAMBIAGHI è A.
   */
  {
    role: 'A',
    tierRole: 'C',
    playerName: 'CAMBIAGHI',
    team: 'BOL',
    tier: '6° Slot Relativo',
    tierOrder: 8,
    percentage: 1.3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },

  {
    role: 'C',
    playerName: 'POLITANO',
    team: 'NAP',
    tier: '6° Slot Relativo',
    tierOrder: 9,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'MKHITARYAN',
    team: 'INT',
    tier: '6° Slot Relativo',
    tierOrder: 10,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // 7° SLOT RELATIVO
  // =========================

  {
    role: 'C',
    playerName: 'ORISTANIO',
    team: 'TOR',
    tier: '7° Slot Relativo',
    tierOrder: 1,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'GOMEZ',
    team: 'UDI',
    tier: '7° Slot Relativo',
    tierOrder: 2,
    percentage: 1,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'VOLPATO',
    team: 'SAS',
    tier: '7° Slot Relativo',
    tierOrder: 3,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'ZALEWSKI',
    team: 'ATA',
    tier: '7° Slot Relativo',
    tierOrder: 4,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },

  /**
   * Nel PDF/listone ADDAI è A.
   */
  {
    role: 'A',
    tierRole: 'C',
    playerName: 'ADDAI',
    team: 'COM',
    tier: '7° Slot Relativo',
    tierOrder: 5,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },

  {
    role: 'C',
    playerName: 'BERISHA',
    team: 'LEC',
    tier: '7° Slot Relativo',
    tierOrder: 6,
    percentage: 1,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 2,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'MEICHTRY',
    team: 'GEN',
    tier: '7° Slot Relativo',
    tierOrder: 7,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'LUIZ',
    team: 'JUV',
    tier: '7° Slot Relativo',
    tierOrder: 8,
    percentage: 1,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'FITZ-JIM',
    team: 'TOR',
    tier: '7° Slot Relativo',
    tierOrder: 9,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'MESSIAS',
    team: 'GEN',
    tier: '7° Slot Relativo',
    tierOrder: 10,
    percentage: 1,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // 8° SLOT RELATIVO
  // =========================

  {
    role: 'C',
    playerName: 'PEREZ',
    team: 'VEN',
    tier: '8° Slot Relativo',
    tierOrder: 1,
    percentage: 0.6,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'MILLER',
    team: 'UDI',
    tier: '8° Slot Relativo',
    tierOrder: 2,
    percentage: 0.6,
    starterRating: 1,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'CRISTANTE',
    team: 'ROM',
    tier: '8° Slot Relativo',
    tierOrder: 3,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'LOCATELLI',
    team: 'JUV',
    tier: '8° Slot Relativo',
    tierOrder: 4,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'ROMANO',
    team: 'CAG',
    tier: '8° Slot Relativo',
    tierOrder: 5,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'STANKOVIC',
    team: 'INT',
    tier: '8° Slot Relativo',
    tierOrder: 6,
    percentage: 0.3,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'MALEH',
    team: 'LEC',
    tier: '8° Slot Relativo',
    tierOrder: 7,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 2,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'DAGASSO',
    team: 'VEN',
    tier: '8° Slot Relativo',
    tierOrder: 8,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },

  /**
   * Nel PDF/listone CANCELLIERI è A.
   */
  {
    role: 'A',
    tierRole: 'C',
    playerName: 'CANCELLIERI',
    team: 'LAZ',
    tier: '8° Slot Relativo',
    tierOrder: 9,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },

  {
    role: 'C',
    playerName: 'BASIC',
    team: 'VEN',
    tier: '8° Slot Relativo',
    tierOrder: 10,
    percentage: null,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },

  // =========================
  // ALTRI - PRIMA PARTE
  // =========================

    {
    role: 'C',
    playerName: 'FERGUSON',
    team: 'BOL',
    tier: 'Altri',
    tierOrder: 1,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },

    {
    role: 'C',
    playerName: 'ADOPO',
    team: 'CAG',
    tier: 'Altri',
    tierOrder: 2,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'COULIBALY',
    team: 'LEC',
    tier: 'Altri',
    tierOrder: 3,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'ELLERTSSON',
    team: 'GEN',
    tier: 'Altri',
    tierOrder: 4,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'PIEROTTI',
    team: 'LEC',
    tier: 'Altri',
    tierOrder: 5,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'POBEGA',
    team: 'BOL',
    tier: 'Altri',
    tierOrder: 6,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'ROVELLA',
    team: 'LAZ',
    tier: 'Altri',
    tierOrder: 7,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'BAKOLA',
    team: 'SAS',
    tier: 'Altri',
    tierOrder: 8,
    percentage: 0.3,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'BUSIO',
    team: 'VEN',
    tier: 'Altri',
    tierOrder: 9,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'GANDELMAN',
    team: 'LEC',
    tier: 'Altri',
    tierOrder: 10,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'KEITA',
    team: 'PAR',
    tier: 'Altri',
    tierOrder: 11,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'A',
    tierRole: 'C',
    playerName: 'ONDREJKA',
    team: 'PAR',
    tier: 'Altri',
    tierOrder: 12,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'CATALDI',
    team: 'LAZ',
    tier: 'Altri',
    tierOrder: 13,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: null,
    notes: ''
  },

    // =========================
  // ALTRI - CONTINUAZIONE
  // =========================

  {
    role: 'C',
    playerName: 'DE ROON',
    team: 'ATA',
    tier: 'Altri',
    tierOrder: 14,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'JASHARI',
    team: 'MIL',
    tier: 'Altri',
    tierOrder: 15,
    percentage: 0.3,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'MIRETTI',
    team: 'JUV',
    tier: 'Altri',
    tierOrder: 16,
    percentage: 0.3,
    starterRating: 1,
    reliabilityRating: 4,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'CIURRIA',
    team: 'MON',
    tier: 'Altri',
    tierOrder: 17,
    percentage: 0.3,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'PRZYBOREK',
    team: 'LAZ',
    tier: 'Altri',
    tierOrder: 18,
    percentage: 0.3,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'ALAJBEGOVIC',
    team: 'JUV',
    tier: 'Altri',
    tierOrder: 19,

    // Nello screenshot prezzo e budget sono "-".
    percentage: null,

    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'KONE',
    team: 'SAS',
    tier: 'Altri',
    tierOrder: 20,
    percentage: null,
    starterRating: 4,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'FRATTESI',
    team: 'INT',
    tier: 'Altri',
    tierOrder: 21,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'FRENDRUP',
    team: 'GEN',
    tier: 'Altri',
    tierOrder: 22,
    percentage: null,
    starterRating: 4,
    reliabilityRating: 4,

    // Integrità coperta dal riquadro del video.
    integrityRating: null,

    notes: ''
  },
  {
    role: 'C',
    playerName: 'LOBOTKA',
    team: 'NAP',
    tier: 'Altri',
    tierOrder: 23,
    percentage: null,
    starterRating: 4,
    reliabilityRating: 4,

    // Parzialmente coperta.
    integrityRating: null,

    notes: ''
  },
  {
    role: 'C',
    playerName: 'AKINSANMIRO',
    team: 'MON',
    tier: 'Altri',
    tierOrder: 24,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,

    // Coperta dal video.
    integrityRating: null,

    notes: ''
  },
  {
    role: 'C',
    playerName: 'KARLSTROM',
    team: 'UDI',
    tier: 'Altri',
    tierOrder: 25,
    percentage: null,
    starterRating: 4,
    reliabilityRating: 4,

    // Riga tagliata nella parte bassa.
    integrityRating: null,

    notes: ''
  },
  {
    role: 'C',
    playerName: 'WINKS',
    team: 'CAG',
    tier: 'Altri',
    tierOrder: 26,
    percentage: null,
    starterRating: 4,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'ZHEGROVA',
    team: 'JUV',
    tier: 'Altri',
    tierOrder: 27,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'AMONDARAIN',
    team: 'BOL',
    tier: 'Altri',
    tierOrder: 28,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'DELE-BASHIRU',
    team: 'LAZ',
    tier: 'Altri',
    tierOrder: 29,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'FELICI',
    team: 'CAG',
    tier: 'Altri',
    tierOrder: 30,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 4,
    integrityRating: 1,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'FOFANA',
    team: 'MIL',
    tier: 'Altri',
    tierOrder: 31,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'GINEITIS',
    team: 'TOR',
    tier: 'Altri',
    tierOrder: 32,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,
    integrityRating: 4,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'KOOPMEINERS',
    team: 'JUV',
    tier: 'Altri',
    tierOrder: 33,
    percentage: null,
    starterRating: 1,
    reliabilityRating: 3,
    integrityRating: 3,
    notes: ''
  },
  {
    role: 'C',
    playerName: 'MATIC',
    team: 'SAS',
    tier: 'Altri',
    tierOrder: 34,
    percentage: null,
    starterRating: 4,
    reliabilityRating: 3,

    // Integrità coperta dal riquadro del video.
    integrityRating: null,

    notes: ''
  },
  {
    role: 'C',
    playerName: 'MILLA',
    team: 'COM',
    tier: 'Altri',
    tierOrder: 35,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 3,

    // Integrità coperta.
    integrityRating: null,

    notes: ''
  },
  {
    role: 'C',
    playerName: 'PIOTROWSKI',
    team: 'UDI',
    tier: 'Altri',
    tierOrder: 36,
    percentage: null,
    starterRating: 3,
    reliabilityRating: 4,

    // Integrità coperta.
    integrityRating: null,

    notes: ''
  }


];

export const defaultMidfielderProfiles: PlayerProfiles =
  Object.fromEntries(
    midfielderProfiles.map((profile) => [
      getPlayerProfileKey(
        profile.role,
        profile.playerName,
        profile.team
      ),
      profile
    ])
  );