import Image from "next/image";

export default function Footer() {
  return (
    <footer translate="no" className="notranslate py-12 md:py-16 px-4 md:px-8 border-t border-outline-variant/20 bg-surface">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <Image
            src="/brand-logo.png"
            alt="Green Herbalz Logo"
            width={40}
            height={40}
            className="opacity-70"
          />
          <span className="text-primary font-headline text-xl italic tracking-wide">
            Green Herbalz
          </span>
        </div>
        <div className="flex items-center gap-6 text-on-surface-variant text-sm font-light">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <a href="#buy" className="hover:text-primary transition-colors">Shop</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <p className="text-outline text-xs text-center md:text-right">
          © {new Date().getFullYear()} Green Herbalz. 100% Homemade with ❤️ in Tamil Nadu.
        </p>
      </div>
    </footer>
  );
}
