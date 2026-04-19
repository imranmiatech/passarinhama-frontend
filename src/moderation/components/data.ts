import type { DetailPanel, ModerationItem } from "./types";


export const ITEMS: ModerationItem[] = [
  {
    id: 1,
    type: "Forum",
    priority: "URGENT",
    title: "Problème grave avec la gestion des cotisations 2025",
    excerpt:
      "Je constate de nombreuses erreurs dans les montants prélevés ce mois-ci. Plusieurs membres m'ont signalé des doubles prélèvements sans aucune réponse du bureau depuis 3 semaines. Cette situation est inacceptable et...",
    author: { initials: "JB", color: "#6366f1", name: "Jean Blanchard" },
    time: "Il y a 12 min",
    meta: "Forum général",
    signals: 3,
    status: "en_attente",
    date: "today",
  },
  {
    id: 2,
    type: "Document",
    priority: "HAUTE",
    title: "Règlement intérieur — révision 2025 v2",
    excerpt:
      "Mise à jour du règlement intérieur intégrant les nouvelles dispositions relatives aux adhésions en ligne et aux modalités de vote à distance adoptées en AG 2024.",
    author: { initials: "SM", color: "#10b981", name: "Sophie Martin" },
    time: "Il y a 1h",
    meta: "PDF · 245 Ko",
    status: "en_attente",
    date: "today",
  },
  {
    id: 3,
    type: "Événement",
    priority: "MOYENNE",
    title: "Sortie randonnée — Massif de la Clape",
    excerpt:
      "Proposition de sortie randonnée d'une journée le 3 mai 2025. Départ à 8h depuis la place de la Mairie. Niveau : intermédiaire. Prévoir pique-nique et chaussures de marche.",
    author: { initials: "PR", color: "#f97316", name: "Pierre Rousseau" },
    time: "Il y a 2h",
    meta: "0 / 25 inscrits",
    status: "en_attente",
    date: "today",
  },
  {
    id: 4,
    type: "Signalement",
    priority: "URGENT",
    title: "Message signalé — propos inappropriés",
    excerpt:
      "Message signalé par 5 membres dans le fil «Bénévolat été 2025». Contenu jugé offensant et discriminatoire à l'égard d'un bénévole. En attente de décision.",
    author: { initials: "AC", color: "#8b5cf6", name: "Alicia Chevalier" },
    time: "Il y a 35 min",
    meta: "",
    signals: 5,
    status: "en_attente",
    date: "today",
  },
  {
    id: 5,
    type: "Formation",
    priority: "MOYENNE",
    title: "Formation : Premiers secours PSC1 — juin 2025",
    excerpt:
      "Nouvelle formation de premiers secours proposée par Thomas Durand. 2 jours de formation certifiante. Places limitées à 12. Coût pris en charge par l'association.",
    author: { initials: "TD", color: "#14b8a6", name: "Thomas Durand" },
    time: "Hier à 16h20",
    meta: "12 places",
    starred: true,
    status: "en_attente",
    date: "yesterday",
  },
  {
    id: 6,
    type: "Message",
    priority: "BASSE",
    title: "Idée : organiser un vide-grenier associatif",
    excerpt:
      "Proposition de vide-grenier pour financer les activités estivales. Je me propose de coordonner si le bureau donne son accord...",
    author: { initials: "LM", color: "#22c55e", name: "Lucie Morel" },
    time: "Hier à 08h12",
    meta: "",
    status: "approuvé",
    approvedBy: "ML",
    approvedAt: "15 avr. à 08h45",
    date: "yesterday",
  },
];

export const DETAIL: DetailPanel = {
  item: ITEMS[0],
  tags: ["Forum", "URGENT", "En attente"],
  signals: 3,
  pastRejections: 2,
  thread: "Forum général",
  views: 42,
  replies: 8,
  fullContent: `Je constate de nombreuses erreurs dans les montants prélevés ce mois-ci. Plusieurs membres m'ont signalé des doubles prélèvements sans aucune réponse du bureau depuis 3 semaines.

Cette situation est inacceptable et risque de nuire gravement à la réputation de notre association. Je demande une réponse officielle sous 48h et le remboursement immédiat des sommes prélevées en trop.

Si aucune action n'est prise, je me verrai contraint de saisir les autorités compétentes et de partager cette situation sur les réseaux sociaux.`,
  authorStats: { publications: 47, rejets: 2, signalé: 3 },
};
