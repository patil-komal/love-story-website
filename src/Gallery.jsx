import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "images/img1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-pink-50 to-white">
      <h2 className="text-4xl font-bold text-center text-rose-700 mb-12">
        Our Memories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <img src={src} alt="memory" className="h-48 w-full object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Memory {index + 1}</h4>
              <p className="text-sm mt-1 text-gray-600">
                A moment that made our story special.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
