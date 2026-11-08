import {
  Github,
  Linkedin,
  ArrowUpRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10
      bg-white dark:bg-[#101010] text-gray-500 dark:text-gray-400">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10
        flex flex-col md:flex-row justify-between gap-6">

        <div>
          <p className="text-xs mt-2">
            Designed and built with ❤️ by Aadesh.
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-8">
        <p className="text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}