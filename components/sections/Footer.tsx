import Clock from "./Clock";

var today = new Date();

export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center py-8 mt-8 border-t border-white/20">
      <Clock />
      <div className="text-neutral-600 dark:text-neutral-400 flex items-center flex-none">
        &copy; {today.getFullYear()} DabAZ
      </div>
    </footer>
  )
}