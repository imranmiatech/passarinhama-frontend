
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavLogo from "../../assets/landing/nav_image.jpg";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
    const bannerRef = useRef(null);
    const navRef = useRef(null);
    const part02Ref = useRef(null);
    const part03Ref = useRef(null);
    const part04Ref = useRef(null);
    const part05Ref = useRef(null);
    const newsCardsRef = useRef<HTMLDivElement[]>([]);
    const agendaCardsRef = useRef<HTMLDivElement[]>([]);
    const buttonsRef = useRef<HTMLButtonElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Part 01 - Banner slide down + fade in
            gsap.from(bannerRef.current, {
                y: -40,
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
            });

            // Part 01 - Nav fade in from top
            gsap.from(navRef.current, {
                y: -30,
                opacity: 0,
                duration: 0.8,
                delay: 0.3,
                ease: "power3.out",
            });

            // Part 02 - Hero section fade up on scroll
            gsap.from(part02Ref.current, {
                scrollTrigger: {
                    trigger: part02Ref.current,
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
            });

            // Part 03 - Title fade up
            gsap.from(part03Ref.current, {
                scrollTrigger: {
                    trigger: part03Ref.current,
                    start: "top 85%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });

            // News cards stagger
            gsap.from(newsCardsRef.current, {
                scrollTrigger: {
                    trigger: newsCardsRef.current[0],
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "power3.out",
            });

            // Part 04 - Agenda title
            gsap.from(part04Ref.current, {
                scrollTrigger: {
                    trigger: part04Ref.current,
                    start: "top 85%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });

            // Agenda cards stagger
            gsap.from(agendaCardsRef.current, {
                scrollTrigger: {
                    trigger: agendaCardsRef.current[0],
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "power3.out",
            });

            // Part 05 - Buttons stagger from bottom
            gsap.from(buttonsRef.current, {
                scrollTrigger: {
                    trigger: part05Ref.current,
                    start: "top 85%",
                },
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.5)",
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-white w-full min-h-screen flex justify-center">

            {/* CENTER WRAPPER */}
            <div className="w-full mx-auto flex flex-col">

                {/*------------------------- part 01 ----------------------------- */}
                <div className="mt-5 md:mt-8 lg:mt-11 w-full">
                    <div ref={bannerRef} className="w-full bg-[#FFD000] py-3 px-4 text-center">
                        <p className="font-normal text-[#212121] text-sm">
                            Les retardataires : n'oubliez pas de régler votre cotisation ! N'oubliez pas de vous inscrire à la prochaine formation mensuelle !
                        </p>
                    </div>
                    <div className="w-full flex justify-center">
                        <div ref={navRef} className="w-full max-w-[1440px] items-center flex flex-col lg:flex-row gap-y-5 justify-between py-3 px-5">
                            <div className="w-full flex gap-x-5">
                                <div className="h-[50px] lg:w-24 lg:h-[65px] rounded-[10px] overflow-hidden">
                                    <img className="w-full h-full object-cover" src={NavLogo} alt="Hero" />
                                </div>
                                <div>
                                    <h3 className="text-[#212121] font-[Poppins] font-bold text-[20px] leading-[150%] tracking-[0%]">ARCHICOPRO</h3>
                                    <h3 className="text-[#939393] font-[Poppins] font-semibold text-[14px] leading-[150%] tracking-[0%]">EXTRANET</h3>
                                    <p className="text-black text-[12px] leading-[150%]">Un immeuble, un architecte</p>
                                </div>
                            </div>
                            <div className="flex lg:justify-end w-full gap-x-5 lg:gap-x-10">
                                <button className="font-semibold text-base w-full lg:w-fit leading-[150%] bg-[#EDEEF0] hover:bg-[#000000] px-5 py-2.5 rounded-[30px] text-black hover:text-[#FFFFFF] cursor-pointer transition-colors duration-200">Contact</button>
                                <button className="font-semibold text-base w-full lg:w-fit leading-[150%] bg-[#EDEEF0] hover:bg-[#000000] px-5 py-2.5 rounded-[30px] text-black hover:text-[#FFFFFF] cursor-pointer transition-colors duration-200">Ancien Extranet</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/*------------------------- part 02 ----------------------------- */}
                <div className="w-full py-7.5 md:py-10 lg:py-10 flex justify-center bg-[#F9FAFB] px-5">
                    <div ref={part02Ref} className="w-full max-w-[1440px] items-center flex flex-col justify-center">
                        <div className="flex flex-col items-center">
                            <div className="font-semibold w-fit text-[12px] leading-[150%] text-center bg-[#EAFEF6] text-[#1C8037] rounded-[8px] px-6 py-2 uppercase">Simple et professionnel</div>
                            <h1 className="font-poppins font-bold text-[32px] md:text-[40px] leading-[120%] tracking-[-0.01em] text-center w-full max-w-[550px] mt-6">
                                L'espace dédié aux Architectes de Copropriété
                            </h1>
                        </div>
                        <div className="w-full flex flex-col items-center">
                            <p className="font-normal w-full max-w-[700px] text-[18px] leading-[150%] tracking-[-0.02em] text-center text-[#999999] mt-7">
                                Accédez à vos ressources, consultez l'agenda de la compagnie et développez votre réseau au sein de notre annuaire exclusif.
                            </p>
                            <button className="border border-[#818181] w-full max-w-[283px] bg-[#ffffff] text-[#999999] hover:text-white hover:bg-black hover:border-black rounded-[10px] transition-colors duration-200 mt-5 px-6 py-3 font-semibold text-base cursor-pointer">
                                Identifiant
                            </button>
                            <button className="border border-[#818181] w-full max-w-[283px] bg-[#ffffff] text-[#999999] hover:text-white hover:bg-black hover:border-black rounded-[10px] transition-colors duration-200 mt-5 px-6 py-3 font-semibold text-base cursor-pointer">
                                Mot de passe
                            </button>
                            <Link to='landing/commission' className="border border-[#818181] w-full max-w-[283px] bg-[#ffffff] text-[#999999] hover:text-white hover:bg-black hover:border-black rounded-[10px] transition-colors duration-200 mt-5 px-6 py-3 font-semibold text-base cursor-pointer">
                                Accédez à votre dashbord
                            </Link>
                        </div>
                    </div>
                </div>

                {/*------------------------- part 03 ----------------------------- */}
                <div className="w-full py-5 md:py-10 lg:py-10 flex justify-center bg-[#F9FAFB] px-5">
                    <div className="w-full max-w-[1440px] items-center flex flex-col justify-center">
                        <div ref={part03Ref} className="flex flex-col items-center">
                            <h1 className="font-poppins font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] tracking-[-0.01em] text-center w-full max-w-[550px] mt-6">
                                Dernières <span className="text-[#FEDA00]">Actualités</span>
                            </h1>
                        </div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center mt-7 lg:mt-10">
                            {[0, 1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    ref={(el) => { if (el) newsCardsRef.current[i] = el; }}
                                    className="bg-white px-6 py-7 border border-[#E7E7E7] rounded-[20px] flex flex-col gap-y-4"
                                >
                                    <h3 className="text-[#8A8C91] font-bold text-[20px] leading-[120%]">29 Mai 2026</h3>
                                    <p className="text-[#212121] font-bold text-[12px] leading-[120%]">categorie</p>
                                    <p className="text-[#999999] font-normal text-[12px] leading-[120%]">Retour d'expérience 01 - Introduction : DTG, Diagnostics en copropriété ; obligati...</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/*------------------------- part 04 ----------------------------- */}
                <div className="w-full py-5 md:py-10 lg:py-10 flex justify-center bg-[#F9FAFB] px-5">
                    <div className="w-full max-w-[1440px] items-center flex flex-col justify-center">
                        <div ref={part04Ref} className="flex flex-col items-center">
                            <h1 className="font-poppins font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[120%] tracking-[-0.01em] text-center w-full max-w-[750px] mt-6">
                                <span className="text-[#FEDA00]">Agenda</span> de la Compagnie
                            </h1>
                        </div>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center mt-7 lg:mt-10">
                            {[0, 1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    ref={(el) => { if (el) agendaCardsRef.current[i] = el; }}
                                    className="bg-white px-6 py-7 border border-[#E7E7E7] rounded-[20px] flex flex-col gap-y-4"
                                >
                                    <h3 className="text-[#8A8C91] font-bold text-[20px] leading-[120%]">29 Mai 2026</h3>
                                    <p className="text-[#212121] font-bold text-[12px] leading-[120%]">categorie</p>
                                    <p className="text-[#999999] font-normal text-[12px] leading-[120%]">Retour d'expérience 01 - Introduction : DTG, Diagnostics en copropriété ; obligati...</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/*------------------------- part 05 ----------------------------- */}
                <div  className="w-full py-4 md:py-4 lg:py-5 flex justify-center bg-[#000000] px-5">
                    {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                        {[
                            { label: "Administrateur", bg: "bg-[#FEDA00] hover:bg-[#E5C600]" },
                            { label: "Commission", bg: "bg-[#FEDA00] hover:bg-[#E5C600]" },
                            { label: "Membre Normal", bg: "bg-[#97B9FF] hover:bg-[#7A9BFF]" },
                            { label: "Auditeur", bg: "bg-[#EDEEF0] hover:bg-[#D0D0D0]" },
                            { label: "Technicopro", bg: "bg-[#EDEEF0] hover:bg-[#D0D0D0]" },
                            { label: "Comité des copropriétés", bg: "bg-[#EDEEF0] hover:bg-[#D0D0D0]" },
                        ].map((btn, i) => (
                            <button
                                key={i}
                                ref={(el) => { if (el) buttonsRef.current[i] = el; }}
                                className={`text-base text-[#212121] font-semibold leading-[150%] px-6 py-2.5 rounded-[40px] ${btn.bg} transition-colors duration-200 cursor-pointer`}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div> */}
                    <Link to='/landing' className="text-[16px] text-[#ffffff] flex justify-center cursor-pointer font-normal">members</Link>
                </div>

            </div>
        </div>
    );
};