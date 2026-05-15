/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Programs from "@/components/Programs";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden selection:bg-accent selection:text-accent-foreground">
      <CustomCursor />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <Hero />
          <Stats />
          <About />
          <Programs />
          <WhyUs />
          <Testimonials />
          <RegistrationForm />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

