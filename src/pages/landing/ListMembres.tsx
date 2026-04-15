

const members = Array(20).fill({
    company: "SARL d'architecture Grégoire ACED",
    type: "SARL d'architecture Almatoya Architecture",
    nom: "Dupont",
    prenom: "François",
    address: "26 rue de livry 93100 Montreuil",
    phone: "06 65 00 99 88",
    email: "mjeande@hotmail.fr",
    image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200",
});

export const ListMembres = () => {
    return (
        <div className="w-full min-h-screen px-4 md:px-8 py-8 flex justify-center">
            <div className="w-full ">

                {/* HEADER */}
                <h1 className="text-center text-[32px] md:text-[40px] font-bold text-[#212121]">
                    Liste des <span className="text-[#FEDA00]">Membres</span>
                </h1>

                {/* FILTERS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <input
                        type="text"
                        placeholder="Recherche par catégorie"
                        className="border border-[#E5E5E5] rounded-md px-4 py-2 text-sm outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Recherche à proximité"
                        className="border border-[#E5E5E5] rounded-md px-4 py-2 text-sm outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Recherche par nom"
                        className="border border-[#E5E5E5] rounded-md px-4 py-2 text-sm outline-none"
                    />
                </div>

                <div className="flex justify-center mt-5">
                    <button className="bg-black text-white px-6 py-2 rounded-md text-sm shadow-md">
                        Recherchez
                    </button>
                </div>

                {/* RESULT INFO */}
                <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                    <p className="text-sm text-[#212121]">239 Fiches trouvées</p>

                    <select className="border border-[#E5E5E5] rounded-md px-4 py-2 text-sm w-full md:w-[260px] outline-none">
                        <option>Trier par ordre alphabétique</option>
                    </select>
                </div>

                {/* CARD LIST */}
                <div className="h-screen overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div className="mt-3 flex flex-col gap-6">
                        {members.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#EDEDED] rounded-[14px] p-4 md:p-6 flex flex-col md:flex-row gap-5 md:items-center justify-between"
                            >
                                {/* LEFT */}
                                <div className="flex h-full gap-4">
                                    <img
                                        src={item.image}
                                        alt="user"
                                        className="w-[100px] lg:w-[165px] h-[120px] lg:h-[190px] rounded-[12px] object-cover"
                                    />

                                    <div className="text-base">
                                        <p className="font-semibold text-[#212121]">
                                            Société : <span className="font-normal">{item.company}</span>
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 mt-2 text-[#212121]">
                                            <p>
                                                <span className="font-semibold">Nom :</span> {item.nom}
                                            </p>
                                            <p>
                                                <span className="font-semibold">Adresse :</span> <br />
                                                {item.address}
                                            </p>

                                            <p>
                                                <span className="font-semibold">Prénom :</span> <br />
                                                {item.prenom}
                                            </p>
                                            <p>
                                                <span className="font-semibold">Email :</span> <br />
                                                {item.email}
                                            </p>

                                            <p>
                                                <span className="font-semibold">Téléphone :</span> <br />
                                                {item.phone}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT BUTTONS */}
                                <div className="flex flex-col gap-2 min-w-[150px]">
                                    <button className="bg-white text-black text-base py-2 rounded-md shadow font-semibold">
                                        Modifier
                                    </button>
                                    <button className="bg-white text-black text-base py-2 rounded-md shadow font-semibold">
                                        Supprimer
                                    </button>
                                    <button className="bg-black text-white text-base py-2 rounded-md shadow font-semibold">
                                        Envoyer un email
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};