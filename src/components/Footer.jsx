export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--nav-border)] bg-[var(--bg-primary)] py-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-[var(--text-secondary)] text-sm mb-4 md:mb-0">
          © {year} Ankit Kumar. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm text-[var(--text-secondary)]">
          <a href="#home" className="hover:text-[var(--text-primary)] hover:text-blue-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-[var(--text-primary)] hover:text-blue-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-[var(--text-primary)] hover:text-blue-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[var(--text-primary)] hover:text-blue-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
