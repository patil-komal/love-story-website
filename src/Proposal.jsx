import { motion } from "framer-motion"; 

export default function Proposal() {
  return (
    <section className="py-28 bg-gradient-to-b from-rose-300 to-pink-200 text-center px-6">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-rose-800 mb-6"
      >
        Forever & Always
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-2xl max-w-2xl mx-auto"
      >
        No matter where life takes us, our story will always be the most 
        beautiful part of my life.
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-6xl mt-10"
      >
        ❤️
      </motion.div>

      <motion.button
        className="mt-10 bg-red-600 text-white px-8 py-3 rounded-full text-lg shadow-xl hover:scale-105 transition-transform"
        whileHover={{ scale: 1.03 }}
        onClick={() => {
          document.getElementById("proposal-modal").classList.remove("hidden");
        }}
      >
        A Special Message
      </motion.button>

      {/* Modal */}
      <div
        id="proposal-modal"
        className="fixed inset-0 bg-black/50 hidden items-center justify-center p-6"
      >
        <div className="bg-white rounded-2xl p-8 max-w-xl mx-auto text-center shadow-2xl">
          <h3 className="text-2xl font-bold text-rose-700">My Love</h3>
          <p className="mt-4 text-gray-700">
            You are my forever. Will you keep writing this story with me?
          </p>

          <button
            className="px-6 py-2 mt-6 rounded-full bg-rose-600 text-white"
            onClick={() => {
              document.getElementById("proposal-modal").classList.add("hidden");
            }}
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
}
