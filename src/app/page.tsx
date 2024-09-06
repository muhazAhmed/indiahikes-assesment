"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    return router.push("/form");
  };

  return (
    <div className="w-full h-[100vh] overflow-hidden relative flex flex-col gap-4 items-center justify-center">
      <video
        src="/media/LandingPage.mp4"
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover brightness-50"
      />
      <motion.h1
        className="relative z-10 text-white text-xl sm:text-4xl md:text-5xl font-bold text-center uppercase"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        Discover your next adventure in the wild.
      </motion.h1>
      <motion.p
        className="relative z-10 text-white text-sm sm:text-sm md:text-2xl font-bold text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
      >
        Presenting you the gateway to unforgettable adventures with{" "}
        <span className="text-green-300">IndiaHikes</span>.
      </motion.p>

      <motion.button
        className="p-2 z-20 rounded-full px-6 bg-primary text-white visible"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        onClick={handleClick}
      >
        Get Started
      </motion.button>
    </div>
  );
}
