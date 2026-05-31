const Footer = () => {
  return (
    <footer className="bg-background dark:bg-zinc-950 text-black dark:text-white py-12 border-t border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm font-extrabold tracking-tight">
            Kashyap<span className="text-neutral-400 dark:text-neutral-500 font-normal"> Dhamecha</span>
          </div>
          <div className="text-xs text-neutral-400 dark:text-neutral-500 text-center sm:text-right space-y-1">
            <p>© {new Date().getFullYear()} Kashyap R Dhamecha. All rights reserved.</p>
            <p className="text-[10px] text-neutral-350 dark:text-neutral-600 uppercase tracking-widest">Built with passion & precision</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
