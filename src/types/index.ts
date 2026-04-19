export type EventCategory = "AG" | "Formation" | "Réunion" | "Conférence" | "Social" | "Autre";
export type EventStatus = "Publié" | "Brouillon" | "Terminé" | "Complet";

export type ProgramItem = {
  time: string;
  label: string;
};

export type Event = {
  id: string;
  title: string;
  date: string; // ISO date string e.g. "2025-04-09"
  timeStart: string;
  timeEnd: string;
  location: string;
  category: EventCategory;
  status: EventStatus;
  organizer: string;
  organizerInitials: string;
  organizerRole?: string;
  visibility: string;
  registered: number;
  capacity: number;
  description: string;
  note?: string;
  program?: ProgramItem[];
};