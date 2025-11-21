import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ title, subtitle, image, href }) {
  return (
    <motion.a href={href}
      initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}
      className="group block rounded-xl bg-pb-panel/60 border border-white/5 overflow-hidden"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img src={image} alt={title}
             className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
      </div>
      <div className="p-4">
        <h3 className="font-display text-xl">{title}</h3>
        <p className="text-sm text-pb-ivory/70">{subtitle}</p>
      </div>
      <div className="h-[2px] bg-pb-copper/0 group-hover:bg-pb-copper/60 transition-colors" />
    </motion.a>
  );
}