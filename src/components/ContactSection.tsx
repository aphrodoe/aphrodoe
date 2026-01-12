export const ContactSection = () => {
  return (
    <footer id="contact" className="w-full pointer-events-auto py-24">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-6">
          Let’s build something meaningful
        </h2>

        <p className="text-white/60 mb-12 max-w-xl mx-auto">
          Computer Science undergraduate at IIT Jodhpur. Open to internships,
          research, and collaborative software projects.
        </p>

        {/* Primary Contact Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="mailto:akhildhyani250@gmail.com"
            className="inline-block px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 hover:bg-purple-50 transition-all duration-200"
          >
            Contact Me
          </a>

        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 Akhil Dhyani</p>
          <div className="flex gap-6">
            <a
              href="https://github.com/aphrodoe"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/akhil-dhyani-b39a37312/"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:akhildhyani250@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
