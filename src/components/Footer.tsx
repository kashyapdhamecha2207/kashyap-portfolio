const Footer = () => {
  return (
    <footer className="bg-background text-black py-12 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm font-extrabold tracking-tight">
            Kashyap<span className="text-neutral-400 font-normal"> Dhamecha</span>
          </div>
          <div className="text-xs text-neutral-400 text-center sm:text-right space-y-1">
            <p>© {new Date().getFullYear()} Kashyap R Dhamecha. All rights reserved.</p>
            <p className="text-[10px] text-neutral-300 uppercase tracking-widest">Built with passion & precision</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
