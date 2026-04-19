

// import React from "react";

// type AvatarProps = {
//   initials: string;
//   color: string;
// };

// const Avatar: React.FC<AvatarProps> = ({ initials, color }) => (
//   <div
//     className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0 ${color}`}
//   >
//     {initials}
//   </div>
// );

// type BadgeVariant = "actif" | "populaire" | "admin" | null;

// type SubCategoryProps = {
//   icon: React.ReactNode;
//   title: string;
//   badge?: BadgeVariant;
//   description: string;
//   subjects: number;
//   messages: number;
//   latestTitle: string;
//   latestUser: string;
//   latestUserInitials: string;
//   latestUserColor: string;
//   latestTime: string;
//   hasNotif?: boolean;
// };

// const badgeConfig: Record<
//   NonNullable<BadgeVariant>,
//   { label: string; className: string }
// > = {
//   actif: {
//     label: "Actif",
//     className:
//       "text-emerald-600 bg-emerald-50 border border-emerald-200",
//   },
//   populaire: {
//     label: "Populaire",
//     className: "text-green-700 bg-green-50 border border-green-200",
//   },
//   admin: {
//     label: "Admin",
//     className: "text-violet-600 bg-violet-50 border border-violet-200",
//   },
// };

// const SubCategory: React.FC<SubCategoryProps> = ({
//   icon,
//   title,
//   badge,
//   description,
//   subjects,
//   messages,
//   latestTitle,
//   latestUser,
//   latestUserInitials,
//   latestUserColor,
//   latestTime,
//   hasNotif,
// }) => (
//   <div className="flex items-start gap-4 px-5 py-4 hover:bg-blue-50/40 transition-colors cursor-pointer group border-b border-gray-100 last:border-b-0 w-full min-w-0 overflow-hidden">

//     {/* Icon */}
//     <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 text-lg">
//       {icon}
//     </div>

//     {/* Title + Description */}
//     <div className="flex-1 min-w-0">
//       <div className="flex items-center gap-2 flex-wrap">
//         <span className="font-semibold text-gray-900 text-sm sm:text-[15px] leading-tight truncate">
//           {title}
//         </span>

//         {badge && (
//           <span
//             className={`text-[11px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${badgeConfig[badge].className}`}
//           >
//             {badgeConfig[badge].label}
//           </span>
//         )}

//         {hasNotif && (
//           <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
//         )}
//       </div>

//       <p className="text-gray-400 text-xs sm:text-[13px] mt-0.5 truncate">
//         {description}
//       </p>
//     </div>

//     {/* Subjects */}
//     <div className="hidden sm:flex flex-col items-end gap-0.5 shrink-0 min-w-[60px] text-right">
//       <span className="text-sm font-bold text-gray-800">
//         {subjects.toLocaleString("fr")}
//       </span>
//       <span className="text-[11px] text-gray-400 uppercase tracking-wide">
//         Sujets
//       </span>
//     </div>

//     {/* Messages */}
//     <div className="hidden sm:flex flex-col items-end gap-0.5 flex-shrink-0 min-w-[60px] text-right">
//       <span className="text-sm font-bold text-gray-800">
//         {messages.toLocaleString("fr")}
//       </span>
//       <span className="text-[11px] text-gray-400 uppercase tracking-wide">
//         Msgs
//       </span>
//     </div>

//     {/* Latest Post */}
//     <div className="hidden md:flex flex-col gap-1 flex-shrink-0 w-[180px] min-w-0">
//       <a
//         href="#"
//         className="text-blue-600 font-medium text-[13px] hover:underline truncate block"
//       >
//         {latestTitle}
//       </a>

//       <div className="flex items-center gap-1.5 min-w-0">
//         <Avatar initials={latestUserInitials} color={latestUserColor} />
//         <span className="text-gray-400 text-xs truncate">
//           {latestUser} · {latestTime}
//         </span>
//       </div>
//     </div>

//     {/* Arrow */}
//     <svg
//       className="w-4 h-4 text-gray-300 group-hover:text-blue-400 transition-colors flex-shrink-0 hidden sm:block"
//       fill="none"
//       stroke="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M9 5l7 7-7 7"
//       />
//     </svg>
//   </div>
// );

// type CategoryCardProps = {
//   categoryIcon: React.ReactNode;
//   categoryTitle: string;
//   categoryDesc: string;
//   totalSubjects: number;
//   totalMessages: number;
//   accentColor: string; // Tailwind text color class for the subjects count
//   subcategories: SubCategoryProps[];
// };

// const CategoryCard: React.FC<CategoryCardProps> = ({
//   categoryIcon,
//   categoryTitle,
//   categoryDesc,
//   totalSubjects,
//   totalMessages,
//   accentColor,
//   subcategories,
// }) => (
//   <div className="bg-white w-full rounded-2xl shadow-sm border border-gray-100 overflow-x-hidden">

//     {/* Header */}
//     <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">

//       <div className="flex items-center gap-3 min-w-0">
//         <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-xl flex-shrink-0">
//           {categoryIcon}
//         </div>

//         <div className="min-w-0">
//           <h2 className="font-bold text-gray-900 text-base sm:text-lg truncate">
//             {categoryTitle}
//           </h2>
//           <p className="text-gray-400 text-xs sm:text-[13px] truncate">
//             {categoryDesc}
//           </p>
//         </div>
//       </div>

//       <div className="flex items-center gap-6 flex-shrink-0">
//         <div className="text-right hidden sm:block">
//           <div className={`font-bold text-base sm:text-lg ${accentColor}`}>
//             {totalSubjects.toLocaleString("fr")}
//           </div>
//           <div className="text-[11px] text-gray-400 uppercase">
//             Sujets
//           </div>
//         </div>

//         <div className="text-right hidden sm:block">
//           <div className="text-gray-800 font-bold text-base sm:text-lg">
//             {totalMessages.toLocaleString("fr")}
//           </div>
//           <div className="text-[11px] text-gray-400 uppercase">
//             Messages
//           </div>
//         </div>
//       </div>

//     </div>

//     {/* Subcategories */}
//     <div className="w-full">
//       {subcategories.map((sub, i) => (
//         <SubCategory key={i} {...sub} />
//       ))}
//     </div>
//   </div>
// );

// // ─── Data ────────────────────────────────────────────────────────────────────

// const categories: CategoryCardProps[] = [
//   {
//     categoryIcon: "⚖️",
//     categoryTitle: "Questions juridiques",
//     categoryDesc: "Droit de la copropriété, règlements, litiges, jurisprudence",
//     totalSubjects: 312,
//     totalMessages: 2840,
//     accentColor: "text-blue-600",
//     subcategories: [
//       {
//         icon: "🏛️",
//         title: "Droit de la copropriété",
//         badge: "actif",
//         description: "Règlement de copropriété, charges, assemblées générales, votes",
//         subjects: 187,
//         messages: 1654,
//         latestTitle: "Quote-parts de charges — cas …",
//         latestUser: "Marie L.",
//         latestUserInitials: "ML",
//         latestUserColor: "bg-purple-500",
//         latestTime: "il y a 2h",
//         hasNotif: false,
//       },
//       {
//         icon: "⚖️",
//         title: "Litiges & contentieux",
//         description: "Procédures judiciaires, recours, médiation entre copropriétaires",
//         subjects: 125,
//         messages: 1186,
//         latestTitle: "Recours contre syndic défaillant",
//         latestUser: "Thomas R.",
//         latestUserInitials: "TR",
//         latestUserColor: "bg-pink-500",
//         latestTime: "hier",
//         hasNotif: true,
//       },
//     ],
//   },
//   {
//     categoryIcon: "🔨",
//     categoryTitle: "Travaux & Rénovation",
//     categoryDesc: "Projets de rénovation, devis, réglementation, rénovation énergétique",
//     totalSubjects: 448,
//     totalMessages: 3920,
//     accentColor: "text-green-500",
//     subcategories: [
//       {
//         icon: "♻️",
//         title: "Rénovation énergétique",
//         badge: "populaire",
//         description: "Isolation, pompe à chaleur, DPE collectif, aides MaPrimeRénov'",
//         subjects: 263,
//         messages: 2571,
//         latestTitle: "Isolation toiture — comparatif 2…",
//         latestUser: "Sophie M.",
//         latestUserInitials: "SM",
//         latestUserColor: "bg-teal-500",
//         latestTime: "il y a 4h",
//         hasNotif: false,
//       },
//       {
//         icon: "🏗️",
//         title: "Gros œuvre & structure",
//         description: "Toiture, façades, fondations, diagnostics structurels",
//         subjects: 185,
//         messages: 1349,
//         latestTitle: "Ravalement de façade — quelles…",
//         latestUser: "Julien M.",
//         latestUserInitials: "JM",
//         latestUserColor: "bg-green-500",
//         latestTime: "il y a 2j",
//         hasNotif: false,
//       },
//     ],
//   },
//   {
//     categoryIcon: "🤝",
//     categoryTitle: "Vie associative",
//     categoryDesc: "Actualités de l'association, événements, ressources membres",
//     totalSubjects: 524,
//     totalMessages: 2711,
//     accentColor: "text-violet-500",
//     subcategories: [
//       {
//         icon: "📢",
//         title: "Annonces officielles",
//         badge: "admin",
//         description: "Communiqués du bureau, informations importantes, AG",
//         subjects: 42,
//         messages: 384,
//         latestTitle: "Convocation AG 2025 — infos pr…",
//         latestUser: "Claire D.",
//         latestUserInitials: "CD",
//         latestUserColor: "bg-orange-400",
//         latestTime: "il y a 3j",
//         hasNotif: false,
//       },
//       {
//         icon: "💡",
//         title: "Entraide & ressources",
//         description: "Bons plans, recommandations, partage d'expériences",
//         subjects: 482,
//         messages: 2327,
//         latestTitle: "Avis syndic Paris 15e — retour d'…",
//         latestUser: "Lucie B.",
//         latestUserInitials: "LB",
//         latestUserColor: "bg-slate-400",
//         latestTime: "aujourd'hui",
//         hasNotif: false,
//       },
//     ],
//   },
// ];

// // ─── Page ─────────────────────────────────────────────────────────────────────

// export default function CategoriesList() {
//   return (
//     <div className="w-full overflow-hidden">
//       <div className="flex flex-col w-full gap-y-5 overflow-hidden">
//         {categories.map((cat, i) => (
//           <CategoryCard key={i} {...cat} />
//         ))}
//       </div>
//     </div>
//   );
// }



import React from "react";

type AvatarProps = {
  initials: string;
  color: string;
};

const Avatar: React.FC<AvatarProps> = ({ initials, color }) => (
  <div
    className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0 ${color}`}
  >
    {initials}
  </div>
);

type BadgeVariant = "actif" | "populaire" | "admin" | null;

type SubCategoryProps = {
  icon: React.ReactNode;
  title: string;
  badge?: BadgeVariant;
  description: string;
  subjects: number;
  messages: number;
  latestTitle: string;
  latestUser: string;
  latestUserInitials: string;
  latestUserColor: string;
  latestTime: string;
  hasNotif?: boolean;
};

const badgeConfig: Record<
  NonNullable<BadgeVariant>,
  { label: string; className: string }
> = {
  actif: {
    label: "Actif",
    className:
      "text-emerald-600 bg-emerald-50 border border-emerald-200",
  },
  populaire: {
    label: "Populaire",
    className: "text-green-700 bg-green-50 border border-green-200",
  },
  admin: {
    label: "Admin",
    className: "text-violet-600 bg-violet-50 border border-violet-200",
  },
};

const SubCategory: React.FC<SubCategoryProps> = ({
  icon,
  title,
  badge,
  description,
  subjects,
  messages,
  latestTitle,
  latestUser,
  latestUserInitials,
  latestUserColor,
  latestTime,
  hasNotif,
}) => (
  <div className="flex items-start gap-4 px-5 py-4 hover:bg-blue-50/40 transition-colors cursor-pointer group border-b border-gray-100 last:border-b-0 w-full min-w-0 overflow-hidden">

    {/* Icon */}
    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 text-lg">
      {icon}
    </div>

    {/* Title + Description */}
    <div className="flex-1 min-w-0">
      {/* FIX: flex-nowrap এবং min-w-0 যোগ করে ট্রাঙ্কেশন নিশ্চিত করা হয়েছে */}
      <div className="flex items-center gap-2 flex-nowrap min-w-0">
        <span className="font-semibold text-gray-900 text-sm sm:text-[15px] leading-tight truncate min-w-0">
          {title}
        </span>

        {badge && (
          <span
            className={`text-[11px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${badgeConfig[badge].className}`}
          >
            {badgeConfig[badge].label}
          </span>
        )}

        {hasNotif && (
          <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
        )}
      </div>

      <p className="text-gray-400 text-xs sm:text-[13px] mt-0.5 truncate">
        {description}
      </p>
    </div>

    {/* Subjects */}
    <div className="hidden sm:flex flex-col items-end gap-0.5 flex-shrink-0 min-w-[60px] text-right">
      <span className="text-sm font-bold text-gray-800">
        {subjects.toLocaleString("fr")}
      </span>
      <span className="text-[11px] text-gray-400 uppercase tracking-wide">
        Sujets
      </span>
    </div>

    {/* Messages */}
    <div className="hidden sm:flex flex-col items-end gap-0.5 flex-shrink-0 min-w-[60px] text-right">
      <span className="text-sm font-bold text-gray-800">
        {messages.toLocaleString("fr")}
      </span>
      <span className="text-[11px] text-gray-400 uppercase tracking-wide">
        Msgs
      </span>
    </div>

    {/* Latest Post */}
    <div className="hidden md:flex flex-col gap-1 flex-shrink-0 w-[180px] min-w-0">
      <a
        href="#"
        className="text-blue-600 font-medium text-[13px] hover:underline truncate block min-w-0"
      >
        {latestTitle}
      </a>

      <div className="flex items-center gap-1.5 min-w-0">
        <Avatar initials={latestUserInitials} color={latestUserColor} />
        <span className="text-gray-400 text-xs truncate min-w-0">
          {latestUser} · {latestTime}
        </span>
      </div>
    </div>

    {/* Arrow */}
    <svg
      className="w-4 h-4 text-gray-300 group-hover:text-blue-400 transition-colors flex-shrink-0 hidden sm:block"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

type CategoryCardProps = {
  categoryIcon: React.ReactNode;
  categoryTitle: string;
  categoryDesc: string;
  totalSubjects: number;
  totalMessages: number;
  accentColor: string; // Tailwind text color class for the subjects count
  subcategories: SubCategoryProps[];
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryIcon,
  categoryTitle,
  categoryDesc,
  totalSubjects,
  totalMessages,
  accentColor,
  subcategories,
}) => (
  <div className="bg-white w-full rounded-2xl shadow-sm border border-gray-100 overflow-x-hidden">

    {/* Header */}
    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">

      <div className="flex items-center gap-3 min-w-0">
        <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-xl flex-shrink-0">
          {categoryIcon}
        </div>

        <div className="min-w-0">
          <h2 className="font-bold text-gray-900 text-base sm:text-lg truncate">
            {categoryTitle}
          </h2>
          <p className="text-gray-400 text-xs sm:text-[13px] truncate">
            {categoryDesc}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 flex-shrink-0">
        <div className="text-right hidden sm:block">
          <div className={`font-bold text-base sm:text-lg ${accentColor}`}>
            {totalSubjects.toLocaleString("fr")}
          </div>
          <div className="text-[11px] text-gray-400 uppercase">
            Sujets
          </div>
        </div>

        <div className="text-right hidden sm:block">
          <div className="text-gray-800 font-bold text-base sm:text-lg">
            {totalMessages.toLocaleString("fr")}
          </div>
          <div className="text-[11px] text-gray-400 uppercase">
            Messages
          </div>
        </div>
      </div>

    </div>

    {/* Subcategories - FIX: শেষ আইটেমের নিচের প্যাডিং সরানো হয়েছে */}
    <div className="w-full [&>div:last-child]:pb-0">
      {subcategories.map((sub, i) => (
        <SubCategory key={i} {...sub} />
      ))}
    </div>
  </div>
);

// ─── Data (unchanged) ────────────────────────────────────────────────────────

const categories: CategoryCardProps[] = [
  {
    categoryIcon: "⚖️",
    categoryTitle: "Questions juridiques",
    categoryDesc: "Droit de la copropriété, règlements, litiges, jurisprudence",
    totalSubjects: 312,
    totalMessages: 2840,
    accentColor: "text-blue-600",
    subcategories: [
      {
        icon: "🏛️",
        title: "Droit de la copropriété",
        badge: "actif",
        description: "Règlement de copropriété, charges, assemblées générales, votes",
        subjects: 187,
        messages: 1654,
        latestTitle: "Quote-parts de charges — cas …",
        latestUser: "Marie L.",
        latestUserInitials: "ML",
        latestUserColor: "bg-purple-500",
        latestTime: "il y a 2h",
        hasNotif: false,
      },
      {
        icon: "⚖️",
        title: "Litiges & contentieux",
        description: "Procédures judiciaires, recours, médiation entre copropriétaires",
        subjects: 125,
        messages: 1186,
        latestTitle: "Recours contre syndic défaillant",
        latestUser: "Thomas R.",
        latestUserInitials: "TR",
        latestUserColor: "bg-pink-500",
        latestTime: "hier",
        hasNotif: true,
      },
    ],
  },
  {
    categoryIcon: "🔨",
    categoryTitle: "Travaux & Rénovation",
    categoryDesc: "Projets de rénovation, devis, réglementation, rénovation énergétique",
    totalSubjects: 448,
    totalMessages: 3920,
    accentColor: "text-green-500",
    subcategories: [
      {
        icon: "♻️",
        title: "Rénovation énergétique",
        badge: "populaire",
        description: "Isolation, pompe à chaleur, DPE collectif, aides MaPrimeRénov'",
        subjects: 263,
        messages: 2571,
        latestTitle: "Isolation toiture — comparatif 2…",
        latestUser: "Sophie M.",
        latestUserInitials: "SM",
        latestUserColor: "bg-teal-500",
        latestTime: "il y a 4h",
        hasNotif: false,
      },
      {
        icon: "🏗️",
        title: "Gros œuvre & structure",
        description: "Toiture, façades, fondations, diagnostics structurels",
        subjects: 185,
        messages: 1349,
        latestTitle: "Ravalement de façade — quelles…",
        latestUser: "Julien M.",
        latestUserInitials: "JM",
        latestUserColor: "bg-green-500",
        latestTime: "il y a 2j",
        hasNotif: false,
      },
    ],
  },
  {
    categoryIcon: "🤝",
    categoryTitle: "Vie associative",
    categoryDesc: "Actualités de l'association, événements, ressources membres",
    totalSubjects: 524,
    totalMessages: 2711,
    accentColor: "text-violet-500",
    subcategories: [
      {
        icon: "📢",
        title: "Annonces officielles",
        badge: "admin",
        description: "Communiqués du bureau, informations importantes, AG",
        subjects: 42,
        messages: 384,
        latestTitle: "Convocation AG 2025 — infos pr…",
        latestUser: "Claire D.",
        latestUserInitials: "CD",
        latestUserColor: "bg-orange-400",
        latestTime: "il y a 3j",
        hasNotif: false,
      },
      {
        icon: "💡",
        title: "Entraide & ressources",
        description: "Bons plans, recommandations, partage d'expériences",
        subjects: 482,
        messages: 2327,
        latestTitle: "Avis syndic Paris 15e — retour d'…",
        latestUser: "Lucie B.",
        latestUserInitials: "LB",
        latestUserColor: "bg-slate-400",
        latestTime: "aujourd'hui",
        hasNotif: false,
      },
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CategoriesList() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex flex-col w-full gap-y-5 overflow-hidden">
        {categories.map((cat, i) => (
          <CategoryCard key={i} {...cat} />
        ))}
      </div>
    </div>
  );
}