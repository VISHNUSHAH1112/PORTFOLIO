import Aashish from "../../assets/Aashish.png";
import Dogs from "../../assets/dog.png";
import Img from "../../assets/images.png";
import Timer from "../../assets/images.jpg";
import Quiz from "../../assets/quiz.avif";

const projects = [
    {
        title: "Aashish Textorium",
        image: Aashish,
        link: "https://aashishtextorium.netlify.app/",
    },
    {
        title: "Dogs Breed",
        image: Dogs,
        link: "https://resonant-basbousa-9adcfc.netlify.app/",
    },
    {
        title: "Real Time Clock",
        image: Img,
        link: "https://super-tapioca-a2575b.netlify.app/",
    },
    {
        title: "Timer",
        image: Timer,
        link: "https://zingy-wisp-e6cac2.netlify.app/",
    },
    {
        title: "Quiz App",
        image: Quiz,
        link: "https://quizjs20.netlify.app/",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="px-6 md:px-10 py-20 bg-gray-100 min-h-screen" style={{ minHeight: "100vh" }}>
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-800" style={{ fontFamily: "Edu SA Hand" }}>
                My Projects
            </h2>

            {/* Grid Container */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 shadow-md rounded-xl hover:shadow-2xl transition-all duration-300 flex flex-col group"
                    >
                        {/* Image Wrapper: Isse image cut nahi hogi */}
                        <div className="w-full bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center border border-gray-100 relative"
                            style={{ height: "240px" }}>

                            <img
                                src={project.image}
                                alt={project.title}
                                /* object-contain ensures the full image is visible */
                                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Overlay Effect on Hover */}
                            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>

                        {/* Content Area */}
                        <div className="pt-5 pb-2 px-2 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-4 text-gray-700 text-center">
                                {project.title}
                            </h3>

                            {/* Button - Bottom-aligned */}
                            <div className="mt-auto">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center px-4 py-2.5 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm active:scale-95"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;