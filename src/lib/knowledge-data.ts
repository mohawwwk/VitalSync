
export interface Article {
  id: number;
  title: string;
  category: string;
  readTime: string;
  image: string;
  description: string;
  content: string;
  references: { text: string; link: string }[];
  youtubeLinks: { title: string; url: string }[];
  featured?: boolean;
}

export const articles: Article[] = [
  // --- Neuroscience ---
  {
    id: 1,
    title: "The Neuro-Circuitry of Burnout",
    category: "Neuroscience",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=2000",
    description: "Understanding the HPA axis and how chronic stress rewires your prefrontal cortex.",
    content: `Burnout is not just "feeling tired." It is a physiological state characterized by the dysregulation of the HPA (Hypothalamic-Pituitary-Adrenal) axis. 
Chronic stress leads to an overproduction of cortisol, which eventually causes the prefrontal cortex to lose its ability to regulate the amygdala. 
This results in heightened emotional reactivity and decreased executive function.

Research shows that long-term exposure to work-related stress can lead to visible structural changes in the brain, including the shrinking of the hippocampus, 
which is critical for memory and learning.`,
    references: [
      { text: "Nature Reviews Neuroscience: The stress-system", link: "https://www.nature.com/articles/s41583-018-0027-0" },
      { text: "Journal of Neuroscience: Cortisol and the Brain", link: "https://www.jneurosci.org/" }
    ],
    youtubeLinks: [
      { title: "The Science of Burnout", url: "https://www.youtube.com/embed/GAb3o9Zxc3E" }
    ],
    featured: true
  },
  {
    id: 2,
    title: "Neuroplasticity: How the Brain Changes",
    category: "Neuroscience",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2000",
    description: "Deep dive into synaptogenesis, synaptic pruning, and myelination.",
    content: `
      Neuroplasticity is the brain's remarkable ability to reorganize itself by forming new neural connections throughout life. 
      This process allows neurons (nerve cells) in the brain to compensate for injury and disease and to adjust their activities in response to new situations or to changes in their environment.
      
      Key mechanisms include synaptogenesis (creation of new synapses), synaptic pruning (elimination of weaker ones), and myelination (strengthening of existing connections).
    `,
    references: [
      { text: "NCBI: Mechanisms of Neuroplasticity", link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3501956/" }
    ],
    youtubeLinks: [
      { title: "Neuroplasticity Explained", url: "https://www.youtube.com/embed/kW86X-Z-H_U" }
    ],
    featured: false
  },
  {
    id: 3,
    title: "The Role of Dopamine in Motivation",
    category: "Neuroscience",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1512036667332-28a1a9e170de?auto=format&fit=crop&q=80&w=2000",
    description: "Why the pursuit of reward is more addictive than the reward itself.",
    content: `
      Dopamine is often misunderstood as the "pleasure molecule." In reality, it is the "anticipation molecule." 
      It drives us toward rewards rather than providing the satisfaction of the reward itself. 
      This biological mechanism is what fuels addiction, but also what enables high-level goal setting and achievement.
    `,
    references: [
      { text: "Neuron: Dopamine and Decision Making", link: "https://www.cell.com/neuron/fulltext/S0896-6273(17)30327-0" }
    ],
    youtubeLinks: [
      { title: "Dopamine & Motivation", url: "https://www.youtube.com/embed/6_W_U_XvU_U" }
    ],
    featured: false
  },
  {
    id: 4,
    title: "Sleep and Memory Consolidation",
    category: "Neuroscience",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=2000",
    description: "How the hippocampus and cortex communicate during REM sleep.",
    content: `
      During sleep, the brain performs essential "maintenance" work. One of the most critical functions is memory consolidation. 
      Short-term memories stored in the hippocampus are transferred to the neocortex for long-term storage. 
      This process primarily happens during Slow-Wave Sleep (SWS) and REM sleep.
    `,
    references: [
      { text: "Nature Reviews Neuroscience: Sleep-dependent memory processing", link: "https://www.nature.com/articles/nrn3402" }
    ],
    youtubeLinks: [
      { title: "Sleep & Memory", url: "https://www.youtube.com/embed/5MuIMqhT8dm" }
    ],
    featured: false
  },
  {
    id: 5,
    title: "Doshas in the Digital Age",
    category: "Ayurveda",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=2000",
    description: "How Vata imbalances manifest as screen fatigue and anxiety in modern workers.",
    content: `
      In Ayurveda, the Vata dosha is associated with movement, air, and ether. 
      Modern digital life—characterized by rapid information consumption, constant notifications, and erratic schedules—is inherently Vata-aggravating. 
      This leads to "digital burnout," manifested as anxiety, insomnia, and fragmented focus.
    `,
    references: [
      { text: "Ayurveda College: Vata Imbalance", link: "https://www.ayurvedacollege.com/blog/vata-imbalance/" }
    ],
    youtubeLinks: [
      { title: "Understanding Vata Dosha", url: "https://www.youtube.com/embed/S_I5Ue777qA" }
    ],
    featured: false
  },
  {
    id: 6,
    title: "The Biology of Cold Exposure",
    category: "Bio-Hacking",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2000",
    description: "Brown fat activation, immune response, and the Wim Hof method.",
    content: `
      Cold exposure triggers a process called thermogenesis, which activates brown adipose tissue (BAT) or "brown fat." 
      Unlike white fat, brown fat burns calories to generate heat. Regular cold exposure has also been linked to improved immune function 
      and the release of norepinephrine, which acts as a powerful anti-inflammatory and focus-booster.
    `,
    references: [
      { text: "NCBI: Cold Exposure and Health", link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4049052/" }
    ],
    youtubeLinks: [
      { title: "Cold Exposure Benefits", url: "https://www.youtube.com/embed/9_5Vv8T_U3U" }
    ],
    featured: false
  },
  {
    id: 7,
    title: "The Bio-Photon Field",
    category: "Quantum Energy",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    description: "Measuring ultra-weak light emissions from living cells.",
    content: `
      Every living cell emits ultra-weak light particles known as biophotons. 
      While the intensities are extremely low, research suggests these light emissions are part of a sophisticated communication system 
      that regulates biological processes at the quantum level.
    `,
    references: [
      { text: "NCBI: Biophotonics in Biology", link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4214534/" }
    ],
    youtubeLinks: [
      { title: "Biophotons: Light of the Cell", url: "https://www.youtube.com/embed/zS9YHe60D7Y" }
    ],
    featured: false
  },
  {
    id: 8,
    title: "Understanding Your Dosha: Vata, Pitta, Kapha",
    category: "Ayurveda",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000",
    description: "The ancient science of biological types and how they influence your energy.",
    content: `
      In Ayurveda, the five elements that found the universe—space, air, fire, water, and earth—manifest in the human body as three basic energies, or functional principles, known as doshas: Vata, Pitta, and Kapha.
      
      Vata (Space/Air) governs movement and enthusiasm.
      Pitta (Fire/Water) governs metabolism and digestion.
      Kapha (Water/Earth) governs structure and stability.
      
      Everyone has a unique combination of these three, known as Prakriti. Understanding your dominant dosha is key to personalized wellness.
    `,
    references: [
      { text: "The Ayurvedic Institute: Introduction to Ayurveda", link: "https://www.ayurveda.com/resources/articles/intro-to-ayurveda" }
    ],
    youtubeLinks: [
      { title: "What is Ayurveda?", url: "https://www.youtube.com/embed/S_I5Ue777qA" }
    ],
    featured: false
  },
  {
    id: 9,
    title: "The Gut-Brain Connection in Ancient Medicine",
    category: "Ayurveda",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2000",
    description: "How 'Agni' (digestive fire) determines your mental clarity and emotional resilience.",
    content: `
      Ayurveda has taught for thousands of years that all health begins in the gut. Agni, or digestive fire, is responsible for transforming food into energy and thoughts into consciousness.
      
      When Agni is weak, toxins (Ama) accumulate, leading to mental fog, depression, and physical lethargy. Modern science is just now catching up with the "second brain" theory, but Ayurveda has used it as a diagnostic pillar for millennia.
    `,
    references: [
      { text: "Journal of Ayurveda and Integrative Medicine: Gut-Brain Axis", link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7321356/" }
    ],
    youtubeLinks: [
      { title: "The Gut-Brain Axis Explained", url: "https://www.youtube.com/embed/V4fU08G8Y5Y" }
    ],
    featured: false
  },
  {
    id: 10,
    title: "Quantum Biometrics: The Future of Diagnostics",
    category: "Technology",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=2000",
    description: "Measuring the subtle energy fields and bio-photon emissions of the human body.",
    content: `
      Quantum biometrics is an emerging field that looks beyond traditional blood tests and heart rates. It measures the subtle electromagnetic fields and bio-photon emissions that characterize living organisms.
      
      By analyzing these signals using machine learning, we can detect physiological imbalances long before they manifest as clinical symptoms. This is the cornerstone of VitalSync's preventative approach.
    `,
    references: [
      { text: "Quantum Biology: Bio-photon emission", link: "https://www.frontiersin.org/articles/10.3389/fphys.2018.01319/full" }
    ],
    youtubeLinks: [
      { title: "Quantum Biology 101", url: "https://www.youtube.com/embed/W9yv8pY_iXw" }
    ],
    featured: false
  }
];
