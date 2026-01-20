import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skill = () => {
    return (
        <section id="skill" >
            <div
                className="relative bg-cover bg- bg-slate-900 py-16"
                style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                        <span className="text-black-400" style={{fontFamily:"Edu SA Hand"}}>Skills</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-10">

                        <div className="flex flex-col items-center group cursor-pointer">
                            <FaHtml5 className="text-5xl text-gray-300 text-orange-500" />
                            <p className="mt-2 font-medium text-white">HTML</p>
                        </div>

                        <div className="flex flex-col items-center group cursor-pointer">
                            <FaCss3Alt className="text-5xl text-gray-300 text-sky-400" />
                            <p className="mt-2 font-medium text-white">CSS</p>
                        </div>

                        <div className="flex flex-col items-center group cursor-pointer">
                            <FaJs className="text-5xl text-gray-300 text-yellow-400" />
                            <p className="mt-2 font-medium text-white">JavaScript</p>
                        </div>

                        <div className="flex flex-col items-center group cursor-pointer">
                            <FaReact className="text-5xl text-gray-300 :text-cyan-400 " />
                            <p className="mt-2 font-medium text-white">React JS</p>
                        </div>

                        <div className="flex flex-col items-center group cursor-pointer">
                            <SiTailwindcss className="text-5xl text-gray-300 text-sky-400" />
                            <p className="mt-2 font-medium text-white">Tailwind CSS</p>
                        </div>

                        <div className="flex flex-col items-center group cursor-pointer">
                            <FaBootstrap className="text-5xl text-gray-300 text-purple-500 " />
                            <p className="mt-2 font-medium text-white">Bootstrap</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}
export default Skill