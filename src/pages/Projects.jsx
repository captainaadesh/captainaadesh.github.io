
import { motion } from "motion/react";
import { Hammer } from "lucide-react";

export default function Projects() {
  return (
    <main
      className="min-h-screen bg-white dark:bg-[#101010]
      text-[#171717] dark:text-white
      transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10
        min-h-screen flex flex-col justify-center">

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl py-32"
        >
          <p className="text-blue-500 text-sm tracking-widest mb-8">
            SELECTED WORK
          </p>

          <h1 className="text-6xl md:text-9xl
            font-semibold tracking-tighter leading-none">
            Projects<span className="text-blue-500">.</span>
          </h1>

          <div className="mt-14 flex items-start gap-5">
            <div className="w-12 h-12 shrink-0 rounded-2xl
              bg-gray-100 dark:bg-[#1B1B1B]
              flex items-center justify-center">
              <Hammer size={22} className="text-gray-500" />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl
                font-medium tracking-tight">
                Work in progress.
              </h2>

              <p className="mt-3 text-lg text-gray-500
                dark:text-gray-400 leading-relaxed">
                I'm currently working on some new projects.
                Check back soon.
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
