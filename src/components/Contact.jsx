import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 3) {
      tempErrors.name = "Name must be at least 3 characters long.";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 5) {
      tempErrors.message = "Message must be at least 5 characters long.";
    }

    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
    }
  };

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto space-y-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Get In Touch
        </h2>
        <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto">
          Feel free to reach out for collaborations, job opportunities, or just
          to say hello.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5 bg-[#131a2a]/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl space-y-8 h-full">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">
              Contact Information
            </h3>
            <p className="text-sm text-slate-400">
              Open for new opportunities and interesting projects.
            </p>
          </div>

          <div className="space-y-4 font-mono text-sm">
            <div className="flex items-center space-x-3 text-slate-300">
              <span className="text-cyan-400 font-bold">✉</span>
              <span>mahdihaidari@example.com</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-300">
              <span className="text-purple-400 font-bold">🌍</span>
              <span>Available Globally (Remote)</span>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800/60 space-y-3">
            <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider">
              Connect with me
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Mahdi-Haidari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 bg-[#131a2a]/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl shadow-xl">
          {isSubmitted && (
            <div className="mb-6 p-4 bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 rounded-xl text-center font-medium text-sm">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-xl bg-[#0b0f19] border ${errors.name ? "border-red-500/50" : "border-slate-800 focus:border-purple-500"} text-white text-sm focus:outline-none transition-colors`}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1 font-mono">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-xl bg-[#0b0f19] border ${errors.email ? "border-red-500/50" : "border-slate-800 focus:border-purple-500"} text-white text-sm focus:outline-none transition-colors`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1 font-mono">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold font-mono text-slate-300 uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                rows="4"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-xl bg-[#0b0f19] border ${errors.message ? "border-red-500/50" : "border-slate-800 focus:border-purple-500"} text-white text-sm focus:outline-none transition-colors`}
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-xs mt-1 font-mono">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/10"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
