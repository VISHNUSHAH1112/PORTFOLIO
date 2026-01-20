import { useState } from "react";
import { RiContactsBookLine } from "react-icons/ri";
import { IoMdPerson } from "react-icons/io";
import { MdEmail, MdMessage } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }
    try {
      const existingData = JSON.parse(localStorage.getItem("contacts") || "[]");
      const newData = [...existingData, formData];
      localStorage.setItem("contacts", JSON.stringify(newData));

      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Error saving data");
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10" >
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl overflow-hidden">

        <div className="w-full h-48 sm:h-60">
          <img
            src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=1000&auto=format&fit=crop"
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 sm:p-10">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-800" style={{ fontFamily: "Macondo" }}>
            <RiContactsBookLine className="text-blue-600" /> Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoMdPerson className="text-gray-400 text-xl" />
              </div>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-700"
                placeholder="Your Name"
              />
            </div>

            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MdEmail className="text-gray-400 text-xl" />
              </div>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-700"
                placeholder="Email Address"
              />
            </div>

            <div className="relative mb-6">
              <div className="absolute left-3 top-4 pointer-events-none">
                <MdMessage className="text-gray-400 text-xl" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 pl-10 rounded-lg text-lg min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-700"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 shadow-md hover:shadow-lg transition-all active:scale-95 self-start"
            >
              Send <IoIosSend className="text-2xl" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;