"use client";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/form");
    }, 500);
  };
  
  return (
    <div className="w-full h-[100vh] overflow-hidden relative flex flex-col gap-4 items-center justify-center">
      {loading && <Loader />}
      <video
        src="/media/LandingPage.mp4"
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover brightness-50"
      />
      <motion.h1
        className="relative z-20 text-white text-xl sm:text-4xl md:text-5xl font-bold text-center uppercase"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        Discover your next adventure in the wild.
      </motion.h1>
      <motion.p
        className="relative z-20 text-white text-sm sm:text-sm md:text-2xl font-bold text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
      >
        Presenting you the gateway to unforgettable adventures with{" "}
        <span className="text-green-300">IndiaHikes</span>.
      </motion.p>

      <motion.button
        className="relative p-2 z-30 rounded-full px-6 bg-primary text-white visible"
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
