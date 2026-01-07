export const ContactSection = () => {
  return (
    <footer className="w-full pointer-events-auto">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-6">Let's work together</h2>
        <p className="text-white/60 mb-8 max-w-xl mx-auto">
          I'm currently available for freelance work and internships. 
          Have a project in mind? Let's discuss.
        </p>
        
        <a 
          href="mailto:akhil@example.com" 
          className="
            inline-block px-8 py-4 mb-16
            rounded-full 
            bg-white text-black font-bold text-lg
            hover:scale-105 hover:bg-purple-50 transition-all duration-200
          "
        >
          Say Hello 👋
        </a>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© 2026 Akhil Dhyani. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};