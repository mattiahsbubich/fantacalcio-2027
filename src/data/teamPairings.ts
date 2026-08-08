import type { PlayerRole } from '../types/player';

export interface TeamPairing {
  id: string;
  role: PlayerRole;
  teams: string[];
  calendarScore: number;
}

export const goalkeeperPairings: TeamPairing[] = [
  // =========================
  // PORTIERI - 2 SQUADRE
  // =========================

  {
    id: 'p2-int-cag',
    role: 'P',
    teams: ['INT', 'CAG'],
    calendarScore: 34.5
  },
  {
    id: 'p2-nap-lec',
    role: 'P',
    teams: ['NAP', 'LEC'],
    calendarScore: 35
  },
  {
    id: 'p2-rom-ven',
    role: 'P',
    teams: ['ROM', 'VEN'],
    calendarScore: 34
  },
  {
    id: 'p2-com-udi',
    role: 'P',
    teams: ['COM', 'UDI'],
    calendarScore: 35
  },
  {
    id: 'p2-com-tor',
    role: 'P',
    teams: ['COM', 'TOR'],
    calendarScore: 34
  },
  {
    id: 'p2-mil-par',
    role: 'P',
    teams: ['MIL', 'PAR'],
    calendarScore: 33.5
  },
  {
    id: 'p2-juv-tor',
    role: 'P',
    teams: ['JUV', 'TOR'],
    calendarScore: 34.5
  },
  {
    id: 'p2-juv-cag',
    role: 'P',
    teams: ['JUV', 'CAG'],
    calendarScore: 34
  },
  {
    id: 'p2-ata-sas',
    role: 'P',
    teams: ['ATA', 'SAS'],
    calendarScore: 35
  },
  {
    id: 'p2-ata-par',
    role: 'P',
    teams: ['ATA', 'PAR'],
    calendarScore: 34
  },
  {
    id: 'p2-laz-lec',
    role: 'P',
    teams: ['LAZ', 'LEC'],
    calendarScore: 34.5
  },
  {
    id: 'p2-laz-cag',
    role: 'P',
    teams: ['LAZ', 'CAG'],
    calendarScore: 33.5
  },
  {
    id: 'p2-laz-fro',
    role: 'P',
    teams: ['LAZ', 'FRO'],
    calendarScore: 33.5
  },
  {
    id: 'p2-bol-ven',
    role: 'P',
    teams: ['BOL', 'VEN'],
    calendarScore: 35
  },
  {
    id: 'p2-fio-cag',
    role: 'P',
    teams: ['FIO', 'CAG'],
    calendarScore: 33.5
  },
  {
    id: 'p2-fio-ven',
    role: 'P',
    teams: ['FIO', 'VEN'],
    calendarScore: 33.5
  },
  {
    id: 'p2-udi-gen',
    role: 'P',
    teams: ['UDI', 'GEN'],
    calendarScore: 33
  },
  {
    id: 'p2-lec-gen',
    role: 'P',
    teams: ['LEC', 'GEN'],
    calendarScore: 33.5
  },
  {
    id: 'p2-par-gen',
    role: 'P',
    teams: ['PAR', 'GEN'],
    calendarScore: 33
  },
  {
    id: 'p2-gen-ven',
    role: 'P',
    teams: ['GEN', 'VEN'],
    calendarScore: 33.5
  },

  // =========================
  // PORTIERI - 3 SQUADRE
  // =========================

  {
    id: 'p3-fio-lec-gen',
    role: 'P',
    teams: ['FIO', 'LEC', 'GEN'],
    calendarScore: 37.5
  },
  {
    id: 'p3-fio-udi-cag',
    role: 'P',
    teams: ['FIO', 'UDI', 'CAG'],
    calendarScore: 37
  },
  {
    id: 'p3-fio-par-ven',
    role: 'P',
    teams: ['FIO', 'PAR', 'VEN'],
    calendarScore: 36.5
  },
  {
    id: 'p3-fio-lec-cag',
    role: 'P',
    teams: ['FIO', 'LEC', 'CAG'],
    calendarScore: 36.5
  },
  {
    id: 'p3-udi-gen-par',
    role: 'P',
    teams: ['UDI', 'GEN', 'PAR'],
    calendarScore: 37.5
  },
  {
    id: 'p3-udi-gen-ven',
    role: 'P',
    teams: ['UDI', 'GEN', 'VEN'],
    calendarScore: 37
  },
  {
    id: 'p3-udi-lec-gen',
    role: 'P',
    teams: ['UDI', 'LEC', 'GEN'],
    calendarScore: 36.5
  },
  {
    id: 'p3-lec-gen-cag',
    role: 'P',
    teams: ['LEC', 'GEN', 'CAG'],
    calendarScore: 36
  },
  {
    id: 'p3-lec-gen-sas',
    role: 'P',
    teams: ['LEC', 'GEN', 'SAS'],
    calendarScore: 36.5
  },
  {
    id: 'p3-gen-tor-fro',
    role: 'P',
    teams: ['GEN', 'TOR', 'FRO'],
    calendarScore: 36.5
  },
  {
    id: 'p3-gen-par-sas',
    role: 'P',
    teams: ['GEN', 'PAR', 'SAS'],
    calendarScore: 36.5
  },
  {
    id: 'p3-par-tor-mon',
    role: 'P',
    teams: ['PAR', 'TOR', 'MON'],
    calendarScore: 36
  },
  {
    id: 'p3-sas-tor-fro',
    role: 'P',
    teams: ['SAS', 'TOR', 'FRO'],
    calendarScore: 36.5
  },
  {
    id: 'p3-sas-fro-ven',
    role: 'P',
    teams: ['SAS', 'FRO', 'VEN'],
    calendarScore: 36
  },
  {
    id: 'p3-tor-cag-fro',
    role: 'P',
    teams: ['TOR', 'CAG', 'FRO'],
    calendarScore: 36
  },
  {
    id: 'p3-bol-lec-ven',
    role: 'P',
    teams: ['BOL', 'LEC', 'VEN'],
    calendarScore: 37.5
  },
  {
    id: 'p3-bol-lec-gen',
    role: 'P',
    teams: ['BOL', 'LEC', 'GEN'],
    calendarScore: 37
  },
  {
    id: 'p3-bol-tor-fro',
    role: 'P',
    teams: ['BOL', 'TOR', 'FRO'],
    calendarScore: 37.5
  }
];

export const attackerPairings: TeamPairing[] = [
  {
    id: 'a-ata-bol',
    role: 'A',
    teams: ['ATA', 'BOL'],
    calendarScore: 34.5
  },
  {
    id: 'a-ata-mon',
    role: 'A',
    teams: ['ATA', 'MON'],
    calendarScore: 35
  },
  {
    id: 'a-ata-sas',
    role: 'A',
    teams: ['ATA', 'SAS'],
    calendarScore: 36
  },
  {
    id: 'a-ata-udi',
    role: 'A',
    teams: ['ATA', 'UDI'],
    calendarScore: 34.5
  },
  {
    id: 'a-bol-com',
    role: 'A',
    teams: ['BOL', 'COM'],
    calendarScore: 35.5
  },
  {
    id: 'a-bol-int',
    role: 'A',
    teams: ['BOL', 'INT'],
    calendarScore: 36
  },
  {
    id: 'a-bol-juv',
    role: 'A',
    teams: ['BOL', 'JUV'],
    calendarScore: 35
  },
  {
    id: 'a-bol-rom',
    role: 'A',
    teams: ['BOL', 'ROM'],
    calendarScore: 36
  },
  {
    id: 'a-cag-int',
    role: 'A',
    teams: ['CAG', 'INT'],
    calendarScore: 35.5
  },
  {
    id: 'a-cag-juv',
    role: 'A',
    teams: ['CAG', 'JUV'],
    calendarScore: 35
  },
  {
    id: 'a-cag-laz',
    role: 'A',
    teams: ['CAG', 'LAZ'],
    calendarScore: 35
  },
  {
    id: 'a-cag-mil',
    role: 'A',
    teams: ['CAG', 'MIL'],
    calendarScore: 35
  },
  {
    id: 'a-com-fio',
    role: 'A',
    teams: ['COM', 'FIO'],
    calendarScore: 35
  },
  {
    id: 'a-com-sas',
    role: 'A',
    teams: ['COM', 'SAS'],
    calendarScore: 35
  },
  {
    id: 'a-com-tor',
    role: 'A',
    teams: ['COM', 'TOR'],
    calendarScore: 35
  },
  {
    id: 'a-com-udi',
    role: 'A',
    teams: ['COM', 'UDI'],
    calendarScore: 35.5
  },
  {
    id: 'a-fio-juv',
    role: 'A',
    teams: ['FIO', 'JUV'],
    calendarScore: 34.5
  },
  {
    id: 'a-fio-mil',
    role: 'A',
    teams: ['FIO', 'MIL'],
    calendarScore: 35.5
  },
  {
    id: 'a-fro-gen',
    role: 'A',
    teams: ['FRO', 'GEN'],
    calendarScore: 35
  },
  {
    id: 'a-fro-nap',
    role: 'A',
    teams: ['FRO', 'NAP'],
    calendarScore: 34.5
  },
  {
    id: 'a-fro-int',
    role: 'A',
    teams: ['FRO', 'INT'],
    calendarScore: 34.5
  },
  {
    id: 'a-fro-mil',
    role: 'A',
    teams: ['FRO', 'MIL'],
    calendarScore: 34.5
  },
  {
    id: 'a-gen-lec',
    role: 'A',
    teams: ['GEN', 'LEC'],
    calendarScore: 35.5
  },
  {
    id: 'a-gen-par',
    role: 'A',
    teams: ['GEN', 'PAR'],
    calendarScore: 34.5
  },
  {
    id: 'a-int-mon',
    role: 'A',
    teams: ['INT', 'MON'],
    calendarScore: 35.5
  },
  {
    id: 'a-int-sas',
    role: 'A',
    teams: ['INT', 'SAS'],
    calendarScore: 34.5
  },
  {
    id: 'a-int-tor',
    role: 'A',
    teams: ['INT', 'TOR'],
    calendarScore: 35
  },
  {
    id: 'a-juv-laz',
    role: 'A',
    teams: ['JUV', 'LAZ'],
    calendarScore: 35
  },
  {
    id: 'a-juv-par',
    role: 'A',
    teams: ['JUV', 'PAR'],
    calendarScore: 34.5
  },
  {
    id: 'a-juv-tor',
    role: 'A',
    teams: ['JUV', 'TOR'],
    calendarScore: 35
  },
  {
    id: 'a-laz-lec',
    role: 'A',
    teams: ['LAZ', 'LEC'],
    calendarScore: 35.5
  },
  {
    id: 'a-lec-mil',
    role: 'A',
    teams: ['LEC', 'MIL'],
    calendarScore: 35
  },
  {
    id: 'a-lec-nap',
    role: 'A',
    teams: ['LEC', 'NAP'],
    calendarScore: 35.5
  },
  {
    id: 'a-mil-par',
    role: 'A',
    teams: ['MIL', 'PAR'],
    calendarScore: 35.5
  },
  {
    id: 'a-mil-sas',
    role: 'A',
    teams: ['MIL', 'SAS'],
    calendarScore: 35
  },
  {
    id: 'a-mil-tor',
    role: 'A',
    teams: ['MIL', 'TOR'],
    calendarScore: 35
  },
  {
    id: 'a-rom-mon',
    role: 'A',
    teams: ['ROM', 'MON'],
    calendarScore: 35.5
  },
  {
    id: 'a-nap-tor',
    role: 'A',
    teams: ['NAP', 'TOR'],
    calendarScore: 35.5
  },
  {
    id: 'a-rom-ven',
    role: 'A',
    teams: ['ROM', 'VEN'],
    calendarScore: 35
  },
  {
    id: 'a-sas-ven',
    role: 'A',
    teams: ['SAS', 'VEN'],
    calendarScore: 34.5
  }
];