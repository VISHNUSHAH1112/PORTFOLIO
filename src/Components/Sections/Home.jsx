import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import aaryav from "../../assets/aaryav__1112_qr.png";
import Linkdin from "../../assets/linkdin.png";
import github from "../../assets/github.png";

const roles = ["Frontend Developer", "React Developer"];

const Home = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS("particles-js", {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5 },
                    size: { value: 3, random: true },
                    line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                    move: { enable: true, speed: 5, out_mode: "out" },
                },
                interactivity: {
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                        onclick: { enable: true, mode: "push" },
                    },
                    modes: { repulse: { distance: 200 }, push: { particles_nb: 4 } },
                },
                retina_detect: true,
            });
        }
    }, []);

    return (
        <section
            id="home" style={{ minHeight: "100vh" }}
            className="relative flex items-center px-6 md:px-16 bg-gray-900 overflow-hidden pt-24 md:pt-32 min-h-[calc(110vh-4rem)]"
        >
            <div id="particles-js" className="absolute inset-0 w-full h-full z-0" />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 w-full text-white">

                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight" style={{ fontFamily: "Sour Gummy" }}>Hi There,</h1>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Sour Gummy" }}>
                        I'm Vishnu <span className="text-blue-400">Shah</span>
                    </h2>
                    <h3 className="text-gray-300 text-lg md:text-xl mb-8">
                        I am a <span className="text-blue-400 font-semibold" style={{ fontFamily: "Sour Gummy" }}>{roles[index]}</span>
                    </h3>

                    <a
                        href="#about"
                        className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform mb-10 btn btn-wobble"
                    >
                        <span style={{ fontFamily: "Winky Sans" }}>
                            About Me ↓
                        </span>
                    </a>

                    <div className="flex justify-center md:justify-start items-center space-x-6">
                        <div className="relative group">
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                                <div className="bg-white p-3 rounded-xl shadow-xl border border-gray-200 w-48 md:w-64 text-center">
                                    <img src={aaryav} alt="Instagram QR" className="w-full h-auto rounded-lg object-contain" />
                                    <p className="text-xs font-bold mt-2 text-gray-800 uppercase tracking-wider">Scan to Follow</p>
                                </div>
                            </div>
                            <a
                                href="https://www.instagram.com/aaryav__1112?igsh=ajluZXhiM3V4ZDh2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-600 text-3xl md:text-4xl hover:scale-125 transition-transform"
                            >
                                <FaInstagram />
                            </a>
                        </div>

                        <div className="relative group">
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                                <div className="bg-white p-3 rounded-xl shadow-xl border border-gray-200 w-48 md:w-64 text-center">
                                    <img src={Linkdin} alt="LinkedIn QR" className="w-full h-auto rounded-lg object-contain" />
                                    <p className="text-xs font-bold mt-2 text-gray-800 uppercase tracking-wider">Scan LinkedIn</p>
                                </div>
                            </div>
                            <a
                                href="https://www.linkedin.com/in/vishnu-shah-61b158327"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 text-3xl md:text-4xl hover:scale-125 transition-transform"
                            >
                                <FaLinkedin />
                            </a>
                        </div>

                        <div className="relative group">
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                                <div className="bg-white p-3 rounded-xl shadow-xl border border-gray-200 w-48 md:w-64 text-center">
                                    <img src={github} alt="GitHub QR" className="w-full h-auto rounded-lg object-contain" />
                                    <p className="text-xs font-bold mt-2 text-gray-800 uppercase tracking-wider">Scan GitHub</p>
                                </div>
                            </div>
                            <a
                                href="https://github.com/VISHNUSHAH1112"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 text-3xl md:text-4xl hover:scale-125 transition-transform"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                    <Tilt scale={1.05} transitionSpeed={2500}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                            <img
                                src="/profile.jpeg"
                                alt="Vishnu Shah"
                                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full shadow-2xl object-cover border-4 border-blue-400/30"
                            />
                        </div>
                    </Tilt>
                </div>

            </div>
        </section>
    );
};

export default Home;
