export type FormationStatIcon = "laptop" | "check" | "circle" | "folder" | "eye";

export type FormationStat = {
  id: string;
  label: string;
  value: string;
  icon: FormationStatIcon;
  accent: "blue" | "green" | "orange" | "purple";
};

export type FormationCategory = {
  id: string;
  name: string;
  count: number;
};

export type FormationStatus = "published" | "draft" | "archived";

export type FormationLevel = "Débutant" | "Intermédiaire" | "Avancé" | "Expert";

export type FormationArticle = {
  id: string;
  categoryId: string;
  categoryName: string;
  status: FormationStatus;
  level: FormationLevel;
  title: string;
  icon: "warning" | "chart" | "home" | "droplets" | "flame" | "building";
  iconWrapClass: string;
  iconClass: string;
};

export type FormationsMobilePanel = "categories" | "list";

export type FormationListTab = "all" | "published" | "draft" | "archived";
