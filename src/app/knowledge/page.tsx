"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Tag, Clock, ChevronRight, Play } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { cn } from "@/lib/utils";

const categories = ["All", "Neuroscience", "Ayurveda", "Bio-Hacking", "Quantum Energy", "Nutrition"];

const articles = [
  // --- Neuroscience ---
  {
    id: 1,
    title: "The Neuro-Circuitry of Burnout",
    category: "Neuroscience",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000",
    excerpt: "Understanding the HPA axis and how chronic stress rewires your prefrontal cortex.",
    url: "https://www.nature.com/articles/s41583-018-0027-0",
    video: "https://www.youtube.com/watch?v=hB7aGnfL-50",
    featured: true
  },
  {
    id: 5,
    title: "Neuroplasticity: How the Brain Changes",
    category: "Neuroscience",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2000",
    excerpt: "Deep dive into synaptic pruning and long-term potentiation.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3501956/",
    video: "https://www.youtube.com/watch?v=LNHBMFCzznE",
    featured: false
  },
  {
    id: 6,
    title: "The Role of Dopamine in Motivation",
    category: "Neuroscience",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1518160111630-d41982f1bc2c?q=80&w=2000",
    excerpt: "Why the pursuit of reward is more addictive than the reward itself.",
    url: "https://www.cell.com/neuron/fulltext/S0896-6273(17)30327-0",
    video: "https://www.youtube.com/watch?v=QmOF0crdyRU",
    featured: false
  },
  {
    id: 7,
    title: "Sleep and Memory Consolidation",
    category: "Neuroscience",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?q=80&w=2000",
    excerpt: "How the hippocampus and cortex communicate during REM sleep.",
    url: "https://www.nature.com/articles/nrn3402",
    video: "https://www.youtube.com/watch?v=5MuIMqhT8DM",
    featured: false
  },
  {
    id: 8,
    title: "The Gut-Brain Axis",
    category: "Neuroscience",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2000",
    excerpt: "How your microbiome influences your mood and decision-making.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4367209/",
    video: "https://www.youtube.com/watch?v=Vz5lOND7HSc",
    featured: false
  },
  {
    id: 9,
    title: "Cognitive Load Theory in Design",
    category: "Neuroscience",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000",
    excerpt: "Minimizing mental friction for better productivity.",
    url: "https://link.springer.com/chapter/10.1007/978-1-4419-1428-6_110",
    video: "https://www.youtube.com/watch?v=Stm67fV_nHY",
    featured: false
  },
  {
    id: 10,
    title: "The Neuroscience of Meditation",
    category: "Neuroscience",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000",
    excerpt: "Gray matter changes in the amygdala and prefrontal cortex.",
    url: "https://academic.oup.com/scan/article/8/1/1/1647833",
    video: "https://www.youtube.com/watch?v=m8rrnReZ_No",
    featured: false
  },
  {
    id: 11,
    title: "Oxytocin and Social Connection",
    category: "Neuroscience",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000",
    excerpt: "The biological basis of trust and tribal behavior.",
    url: "https://www.nature.com/articles/nrn2630",
    video: "https://www.youtube.com/watch?v=XvS7v0oJ4vU",
    featured: false
  },
  {
    id: 12,
    title: "ADHD and the Executive Function",
    category: "Neuroscience",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1502466650593-b65a2c690da0?q=80&w=2000",
    excerpt: "Understanding the dopamine deficit in focus disorders.",
    url: "https://www.nature.com/articles/nrn1839",
    video: "https://www.youtube.com/watch?v=jhcn1_zY484",
    featured: false
  },
  {
    id: 13,
    title: "Brain-Computer Interfaces",
    category: "Neuroscience",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca13e7?q=80&w=2000",
    excerpt: "The future of neural links and cognitive enhancement.",
    url: "https://www.nature.com/articles/nrn.2016.113",
    video: "https://www.youtube.com/watch?v=2R8T39Z4X-s",
    featured: false
  },

  // --- Ayurveda ---
  {
    id: 2,
    title: "Doshas in the Digital Age",
    category: "Ayurveda",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000",
    excerpt: "How Vata imbalances manifest as screen fatigue and anxiety in modern workers.",
    url: "https://www.ayurvedacollege.com/blog/vata-imbalance/",
    video: "https://www.youtube.com/watch?v=0_u66Yv_S6E",
    featured: false
  },
  {
    id: 14,
    title: "Pitta: The Fire of Metabolism",
    category: "Ayurveda",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1515377196247-223877d34cc4?q=80&w=2000",
    excerpt: "Managing inflammation and digestion through Pitta pacifying diets.",
    url: "https://www.banyanbotanicals.com/info/ayurvedic-living/living-ayurveda/diet/pitta-pacifying-diet/",
    video: "https://www.youtube.com/watch?v=f-nO31M8w3M",
    featured: false
  },
  {
    id: 15,
    title: "Kapha: The Foundation of Strength",
    category: "Ayurveda",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2000",
    excerpt: "Overcoming lethargy and congestion with invigorating practices.",
    url: "https://www.ayurveda.com/kapha-balancing-diet/",
    video: "https://www.youtube.com/watch?v=pW-u1G5Osk8",
    featured: false
  },
  {
    id: 16,
    title: "Dinacharya: Daily Rituals",
    category: "Ayurveda",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000",
    excerpt: "Aligning your biological clock with the cycles of nature.",
    url: "https://www.ayurveda.com/dinacharya-daily-routine/",
    video: "https://www.youtube.com/watch?v=LqN6849C03Y",
    featured: false
  },
  {
    id: 17,
    title: "The 6 Tastes of Ayurveda",
    category: "Ayurveda",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=2000",
    excerpt: "How sweet, sour, salty, bitter, pungent, and astringent flavors affect health.",
    url: "https://www.banyanbotanicals.com/info/ayurvedic-living/living-ayurveda/diet/six-tastes/",
    video: "https://www.youtube.com/watch?v=XzUv0N0R00A",
    featured: false
  },
  {
    id: 18,
    title: "Prakriti vs. Vikriti",
    category: "Ayurveda",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2000",
    excerpt: "Understanding your birth constitution vs. your current state.",
    url: "https://www.ayurveda.com/prakriti-vikriti/",
    video: "https://www.youtube.com/watch?v=S0T009-87x8",
    featured: false
  },
  {
    id: 19,
    title: "Ayurvedic Herbalism",
    category: "Ayurveda",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?q=80&w=2000",
    excerpt: "Ashwagandha, Triphala, and Brahmi: The power of adaptogens.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3252722/",
    video: "https://www.youtube.com/watch?v=vVj_u3uPq-Y",
    featured: false
  },
  {
    id: 20,
    title: "Agni: The Digestive Fire",
    category: "Ayurveda",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1515377196247-223877d34cc4?q=80&w=2000",
    excerpt: "Why gut health is the cornerstone of all wellness in Ayurveda.",
    url: "https://www.ayurveda.com/agni-digestive-fire/",
    video: "https://www.youtube.com/watch?v=XzUv0N0R00A",
    featured: false
  },
  {
    id: 21,
    title: "Ojas, Tejas, and Prana",
    category: "Ayurveda",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000",
    excerpt: "The subtle essences of vitality, radiance, and life force.",
    url: "https://www.banyanbotanicals.com/info/ayurvedic-living/living-ayurveda/lifestyle/ojas-tejas-prana/",
    video: "https://www.youtube.com/watch?v=YpZ6G9k1pU4",
    featured: false
  },
  {
    id: 22,
    title: "Abhyanga: Oil Massage",
    category: "Ayurveda",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000",
    excerpt: "The benefits of self-massage for the nervous system.",
    url: "https://www.banyanbotanicals.com/info/ayurvedic-living/living-ayurveda/lifestyle/self-oil-massage-abhyanga/",
    video: "https://www.youtube.com/watch?v=S0T009-87x8",
    featured: false
  },

  // --- Bio-Hacking ---
  {
    id: 3,
    title: "Circadian Rhythm Entrainment",
    category: "Bio-Hacking",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1505481327203-888497e889e4?q=80&w=2000",
    excerpt: "The science of morning light exposure and its impact on cortisol production.",
    url: "https://www.nature.com/articles/nrcardio.2018.11",
    video: "https://www.youtube.com/watch?v=09R8_H9Jj_I",
    featured: false
  },
  {
    id: 23,
    title: "Cold Plunge and Mitochondrial Health",
    category: "Bio-Hacking",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2000",
    excerpt: "Activating brown fat and boosting norepinephrine levels.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9518606/",
    video: "https://www.youtube.com/watch?v=m6XAbqH-q8M",
    featured: false
  },
  {
    id: 24,
    title: "Continuous Glucose Monitoring (CGM)",
    category: "Bio-Hacking",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2000",
    excerpt: "How real-time data helps you optimize metabolic flexibility.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7311140/",
    video: "https://www.youtube.com/watch?v=0_u66Yv_S6E",
    featured: false
  },
  {
    id: 25,
    title: "Nootropics for Cognitive Peak",
    category: "Bio-Hacking",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca13e7?q=80&w=2000",
    excerpt: "A guide to L-Theanine, Caffeine, and Bacopa Monnieri.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5021479/",
    video: "https://www.youtube.com/watch?v=LNHBMFCzznE",
    featured: false
  },
  {
    id: 26,
    title: "Red Light Therapy Science",
    category: "Bio-Hacking",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1515377196247-223877d34cc4?q=80&w=2000",
    excerpt: "Photobiomodulation and its effect on cellular energy production.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4126803/",
    video: "https://www.youtube.com/watch?v=XzUv0N0R00A",
    featured: false
  },
  {
    id: 27,
    title: "Heart Rate Variability (HRV)",
    category: "Bio-Hacking",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1518160111630-d41982f1bc2c?q=80&w=2000",
    excerpt: "The ultimate metric for nervous system recovery.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5624990/",
    video: "https://www.youtube.com/watch?v=QmOF0crdyRU",
    featured: false
  },
  {
    id: 28,
    title: "Intermittent Fasting & Autophagy",
    category: "Bio-Hacking",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=2000",
    excerpt: "How periodic fasting triggers cellular cleanup.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3106288/",
    video: "https://www.youtube.com/watch?v=LqN6849C03Y",
    featured: false
  },
  {
    id: 29,
    title: "Breathwork for Nervous System Control",
    category: "Bio-Hacking",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000",
    excerpt: "Wim Hof vs. Box Breathing: The science of CO2 tolerance.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4034508/",
    video: "https://www.youtube.com/watch?v=m8rrnReZ_No",
    featured: false
  },
  {
    id: 30,
    title: "Exogenous Ketones",
    category: "Bio-Hacking",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1515377196247-223877d34cc4?q=80&w=2000",
    excerpt: "The future of brain fuel and performance enhancement.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5670148/",
    video: "https://www.youtube.com/watch?v=0_u66Yv_S6E",
    featured: false
  },
  {
    id: 31,
    title: "Wearable Tech Accuracy",
    category: "Bio-Hacking",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2000",
    excerpt: "Comparing Oura, Whoop, and Apple Watch metrics.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7213426/",
    video: "https://www.youtube.com/watch?v=QmOF0crdyRU",
    featured: false
  },

  // --- Quantum Energy ---
  {
    id: 4,
    title: "Quantum Biology 101",
    category: "Quantum Energy",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000",
    excerpt: "Exploring the role of mitochondrial coherence in overall vitality.",
    url: "https://royalsocietypublishing.org/doi/10.1098/rsif.2012.0903",
    video: "https://www.youtube.com/watch?v=f-nO31M8w3M",
    featured: false
  },
  {
    id: 32,
    title: "The Human Biofield",
    category: "Quantum Energy",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000",
    excerpt: "Measuring the electromagnetic fields of the heart and brain.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4654789/",
    video: "https://www.youtube.com/watch?v=YpZ6G9k1pU4",
    featured: false
  },
  {
    id: 33,
    title: "Mitochondrial Quantum Tunneling",
    category: "Quantum Energy",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000",
    excerpt: "How electrons move across the inner mitochondrial membrane.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4034508/",
    video: "https://www.youtube.com/watch?v=09R8_H9Jj_I",
    featured: false
  },
  {
    id: 34,
    title: "Entanglement in Biological Systems",
    category: "Quantum Energy",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000",
    excerpt: "Can cells communicate instantly across the body?",
    url: "https://www.nature.com/articles/nphys1642",
    video: "https://www.youtube.com/watch?v=f-nO31M8w3M",
    featured: false
  },
  {
    id: 35,
    title: "Zero Point Energy and Healing",
    category: "Quantum Energy",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000",
    excerpt: "The theoretical basis for non-local healing modalities.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4654789/",
    video: "https://www.youtube.com/watch?v=LqN6849C03Y",
    featured: false
  },
  {
    id: 36,
    title: "Structured Water & Cellular Vibrations",
    category: "Quantum Energy",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2000",
    excerpt: "How the exclusion zone of water stores energy in cells.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4034508/",
    video: "https://www.youtube.com/watch?v=m8rrnReZ_No",
    featured: false
  },
  {
    id: 37,
    title: "PEMF: Pulsed Electromagnetic Fields",
    category: "Quantum Energy",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1518160111630-d41982f1bc2c?q=80&w=2000",
    excerpt: "Using frequency to speed up cellular recovery.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4126803/",
    video: "https://www.youtube.com/watch?v=QmOF0crdyRU",
    featured: false
  },
  {
    id: 38,
    title: "DNA as a Fractal Antenna",
    category: "Quantum Energy",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?q=80&w=2000",
    excerpt: "How genetic material interacts with ambient EMFs.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3023253/",
    video: "https://www.youtube.com/watch?v=Vz5lOND7HSc",
    featured: false
  },
  {
    id: 39,
    title: "HeartMath: Coherence Science",
    category: "Quantum Energy",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2000",
    excerpt: "Synchronizing heart and brain frequencies for peak performance.",
    url: "https://www.heartmath.org/research/science-of-the-heart/",
    video: "https://www.youtube.com/watch?v=QmOF0crdyRU",
    featured: false
  },
  {
    id: 40,
    title: "Quantum Consciousness",
    category: "Quantum Energy",
    readTime: "16 min read",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2000",
    excerpt: "The Orch-OR theory and the role of microtubules.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3901402/",
    video: "https://www.youtube.com/watch?v=m8rrnReZ_No",
    featured: false
  },

  // --- Nutrition ---
  {
    id: 41,
    title: "The Keto-Adaptation Process",
    category: "Nutrition",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=2000",
    excerpt: "Switching from glucose to fat metabolism for brain fuel.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6410243/",
    video: "https://www.youtube.com/watch?v=0_u66Yv_S6E",
    featured: false
  },
  {
    id: 42,
    title: "Anti-Nutrients in Modern Diets",
    category: "Nutrition",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2000",
    excerpt: "Understanding lectins, oxalates, and phytates.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7600777/",
    video: "https://www.youtube.com/watch?v=f-nO31M8w3M",
    featured: false
  },
  {
    id: 43,
    title: "Nutrigenomics: Diet for Your DNA",
    category: "Nutrition",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2000",
    excerpt: "How specific nutrients turn genes on and off.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3121541/",
    video: "https://www.youtube.com/watch?v=LNHBMFCzznE",
    featured: false
  },
  {
    id: 44,
    title: "The Microbiome Diversity",
    category: "Nutrition",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2000",
    excerpt: "Why a diverse gut flora is key to immunity.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4367209/",
    video: "https://www.youtube.com/watch?v=Vz5lOND7HSc",
    featured: false
  },
  {
    id: 45,
    title: "Mitochondrial Nutrients",
    category: "Nutrition",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1515377196247-223877d34cc4?q=80&w=2000",
    excerpt: "CoQ10, PQQ, and the science of cellular energy.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6410243/",
    video: "https://www.youtube.com/watch?v=0_u66Yv_S6E",
    featured: false
  },
  {
    id: 46,
    title: "Magnesium: The Master Mineral",
    category: "Nutrition",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=2000",
    excerpt: "Why 70% of the population is deficient in this key element.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5637834/",
    video: "https://www.youtube.com/watch?v=XzUv0N0R00A",
    featured: false
  },
  {
    id: 47,
    title: "The Truth About Salt",
    category: "Nutrition",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=2000",
    excerpt: "Electrolytes and their role in nervous system firing.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6410243/",
    video: "https://www.youtube.com/watch?v=0_u66Yv_S6E",
    featured: false
  },
  {
    id: 48,
    title: "Omega-3 and Brain Structure",
    category: "Nutrition",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2000",
    excerpt: "How DHA builds the framework of your neural networks.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4404917/",
    video: "https://www.youtube.com/watch?v=LNHBMFCzznE",
    featured: false
  },
  {
    id: 49,
    title: "Vitamin D as a Hormone",
    category: "Nutrition",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1515377196247-223877d34cc4?q=80&w=2000",
    excerpt: "Its role in gene expression and circadian alignment.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3356951/",
    video: "https://www.youtube.com/watch?v=f-nO31M8w3M",
    featured: false
  },
  {
    id: 50,
    title: "The Science of Hydration",
    category: "Nutrition",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2000",
    excerpt: "Beyond 8 glasses: Electrolytes and structured cellular water.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2908954/",
    video: "https://www.youtube.com/watch?v=m8rrnReZ_No",
    featured: false
  }
];

const KnowledgeHub = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = articles.filter(a => 
    activeCategory === "All" || a.category === activeCategory
  );

  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-6xl font-display font-bold text-text-primary leading-tight">
              Knowledge <span className="text-primary italic">Hub.</span>
            </h1>
            <p className="text-text-secondary text-lg">
              Deep-dives into the science and spirit of human optimization.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input 
              type="text" 
              placeholder="Search the archive..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-colors text-sm"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                activeCategory === cat 
                  ? "bg-primary border-primary text-white" 
                  : "bg-white/5 border-white/10 text-text-muted hover:border-white/20"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {activeCategory === "All" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer"
            onClick={() => window.open(articles[0].url, '_blank')}
          >
            <Image 
              src={articles[0].image} 
              alt={articles[0].title} 
              fill
              priority
              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-12 space-y-4 max-w-3xl">
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest">
                <span className="text-primary px-3 py-1 bg-primary/10 rounded-full">{articles[0].category}</span>
                <span className="text-text-muted flex items-center gap-2"><Clock size={14} /> {articles[0].readTime}</span>
              </div>
              <h2 className="text-5xl font-display font-bold text-white group-hover:text-primary transition-colors">{articles[0].title}</h2>
              <p className="text-text-secondary text-lg leading-relaxed">{articles[0].excerpt}</p>
              <div className="flex items-center gap-6 pt-4">
                <button className="flex items-center gap-2 text-primary font-bold">
                  Read Full Thesis <ChevronRight size={20} />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); window.open(articles[0].video, '_blank'); }}
                  className="flex items-center gap-2 text-accent font-bold"
                >
                  Watch Lecture <Play size={16} fill="currentColor" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.filter(a => !a.featured || activeCategory !== "All").map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="group h-full flex flex-col overflow-hidden border-transparent hover:border-primary/20 transition-all">
                <div className="h-56 overflow-hidden relative cursor-pointer" onClick={() => window.open(article.url, '_blank')}>
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                    {article.category}
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                      <ChevronRight size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-8 space-y-4 flex-1">
                  <div className="flex items-center gap-3 text-[10px] text-text-muted uppercase font-bold tracking-widest">
                    <Clock size={12} /> {article.readTime}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-primary group-hover:text-primary transition-colors cursor-pointer" onClick={() => window.open(article.url, '_blank')}>
                    {article.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
                <div className="px-8 pb-8 pt-4 border-t border-white/5 flex justify-between items-center">
                  <button 
                    onClick={() => window.open(article.url, '_blank')}
                    className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline"
                  >
                    Access Paper
                  </button>
                  <button 
                    onClick={() => window.open(article.video, '_blank')}
                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:bg-primary/20 hover:text-primary transition-all"
                  >
                    <Play size={14} fill="currentColor" />
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Video Lectures / Masterclasses */}
        <div className="pt-20 space-y-12">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <h2 className="text-4xl font-display font-bold text-text-primary">Masterclasses.</h2>
              <p className="text-text-secondary">Guided deep-dives from our resident experts.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2">View Archive <ChevronRight size={20} /></button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Quantum Entrainment Masterclass", author: "Dr. Aris Thorne", duration: "45 min", url: "https://www.youtube.com/watch?v=f-nO31M8w3M" },
              { title: "Advanced Somatic Release", author: "Marcus Kael", duration: "32 min", url: "https://www.youtube.com/watch?v=LqN6849C03Y" }
            ].map((video) => (
              <div 
                key={video.title} 
                className="relative aspect-video rounded-[3rem] overflow-hidden group cursor-pointer"
                onClick={() => window.open(video.url, '_blank')}
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                  <div className="w-20 h-20 bg-white text-primary rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play size={32} fill="currentColor" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-display font-bold text-white">{video.title}</h4>
                    <p className="text-white/60 text-sm">{video.author} • {video.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default KnowledgeHub;
