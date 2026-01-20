import { useState } from "react";
import { IoMdPerson } from "react-icons/io";
import Resume from "../../assets/Vishnu_Shah_Resume_Frontend.pdf";
import Photo from "../../assets/photo.jpeg";

const About = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleDownloadClick = () => {
        // Toggle alert
        setShowAlert(true);
    };

    const handleConfirmDownload = () => {
        // Download resume
        const link = document.createElement("a");
        link.href = Resume;
        link.download = "Vishnu_Shah_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Close alert
        setShowAlert(false);
    };

    const handleCancelDownload = () => {
        setShowAlert(false);
    };

    return (
        <section
            id="about"
            style={{ minHeight: "100vh" }}
            className="w-full bg-gray-50 py-16 px-6 md:px-16 flex justify-center relative"
        >
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-12">

                {/* Text Section */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h2 className="flex justify-center md:justify-start items-center gap-3 text-4xl md:text-5xl font-bold" style={{ fontFamily: "Sour Gummy" }}>
                        <IoMdPerson className="text-blue-600 text-5xl md:text-6xl" />
                        About <span className="text-blue-600">Me</span>
                    </h2>

                    <h3 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "Sour Gummy" }}>
                        Hi, I'm <span className="text-blue-600" style={{ fontFamily: "Winky Sans" }}>Vishnu</span>
                    </h3>
                    <p className="text-xl md:text-2xl font-semibold text-gray-800" style={{ fontFamily: "Gravitas One", fontSize: "32px" }}>
                        Frontend Developer
                    </p>

                    <p className="text-gray-600 max-w-md mx-auto md:mx-0" style={{ fontFamily: "Edu Australia VIC WA NT Hand Precursive", fontSize: "22px" }}>
                        I build responsive and user-friendly web applications with modern
                        frontend technologies, ensuring a seamless user experience.
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-2 text-gray-700 text-lg">
                        <p>
                            📧 <span className="font-medium">Email:</span>{" "}
                            <span className="font-bold text-black" style={{ fontFamily: "PT Sans" }}>shahvishnu1112@gmail.com</span>
                        </p>
                        <p>
                            📍 <span className="font-medium">Location:</span> Gujarat,India
                        </p>
                    </div>

                    {/* Resume Button */}
                    <div className="mt-4 w-full sm:w-auto">
                        <button
                            style={{ fontFamily: "Fjalla One" }}
                            onClick={handleDownloadClick}
                            className="relative px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform neon-pulse w-full sm:w-auto text-sm sm:text-base md:text-lg"
                        >
                            Download Resume
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <img
                        src={Photo}
                        alt="Vishnu Shah"
                        className="w-48 h-64 sm:w-56 sm:h-72 md:w-152 md:h-150 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer shadow-lg"
                    />
                </div>
            </div>

            {/* Custom Alert Modal */}
            {showAlert && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl shadow-2xl w-80 md:w-96 text-center space-y-4">
                        <h3 className="text-xl font-bold">Download Resume</h3>
                        <p>Do you want to download the resume?</p>
                        <div className="flex justify-center gap-4 mt-4">
                            <button
                                onClick={handleConfirmDownload}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                            >
                                Yes
                            </button>
                            <button
                                onClick={handleCancelDownload}
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default About;
