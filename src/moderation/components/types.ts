export type Priority = "URGENT" | "HAUTE" | "MOYENNE" | "BASSE";
export type ContentType = "Forum" | "Document" | "Événement" | "Signalement" | "Formation" | "Message";
export type ItemStatus = "en_attente" | "approuvé" | "rejeté" | "archivé";

export interface ModerationItem {
  id: number;
  type: ContentType;
  priority: Priority;
  title: string;
  excerpt: string;
  author: { initials: string; color: string; name: string };
  time: string;
  meta: string;
  signals?: number;
  status: ItemStatus;
  date: "today" | "yesterday";
  starred?: boolean;
  approvedBy?: string;
  approvedAt?: string;
}

export interface DetailPanel {
  item: ModerationItem;
  tags: string[];
  signals: number;
  pastRejections: number;
  thread: string;
  views: number;
  replies: number;
  fullContent: string;
  authorStats: { publications: number; rejets: number; signalé: number };
}
