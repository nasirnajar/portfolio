"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Cpu, MapPin, Calendar, Star, Award } from "lucide-react";

const timeline = [
  {
    year: "2022-2023",
    title: "Class 12th",
    subtitle: "Science Stream",
    icon: Star,
    color: "#00ff9f",
    detail: "Achieved 96.2% and built a strong foundation in core science and mathematics.",
    badge: "96.2%",
  },
  {
    year: "2023",
    title: "Joined NIT Srinagar",
    subtitle: "B.Tech in Computer Science and Engineering",
    icon: GraduationCap,
    color: "#00d4ff",
    detail: "Started pursuing a degree in Computer Science and Engineering at NIT Srinagar.",
    badge: "NIT",
  },
  {
    year: "2023-2027",
    title: "Bachelor's Degree",
    subtitle: "B.Tech CSE",
    icon: GraduationCap,
    color: "#00fff5",
    detail: "Focused on coding, software engineering, data structures, and real-world application building.",
    badge: "2027",
  },
  {
    year: "2024",
    title: "Web Development Experience",
    subtitle: "Full Stack Developer",
    icon: Cpu,
    color: "#a855f7",
    detail: "Working on modern full-stack projects and building scalable web solutions.",
    badge: "FULL STACK",
  },
  {
    year: "Current",
    title: "CGPA",
    subtitle: "7.73",
    icon: Award,
    color: "#ec4899",
    detail: "Maintaining a solid academic record while strengthening technical skills and practical work.",
    badge: "7.73",
  },
];

const statCards = [
  { value: "7.73", label: "Current CGPA", color: "#00d4ff" },
  { value: "96.2%", label: "Class 12th Score", color: "#00ff9f" },
  { value: "2023-2027", label: "Degree Duration", color: "#a855f7" },
  { value: "NIT", label: "Srinagar, India", color: "#ec4899" },
];

function TimelineItem({
  item,
  i,
}: {
  item: (typeof timeline)[0];
  i: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className={`flex items-start gap-4 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row"}`}
    >
      {/* Icon */}
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border"
        style={{
          borderColor: item.color + "40",
          background: item.color + "12",
          boxShadow: `0 0 15px ${item.color}25`,
        }}
      >
        <item.icon size={16} style={{ color: item.color }} />
      </div>

      {/* Content */}
      <div className="flex-1 glass rounded-lg p-4 border border-cyber-blue/10 hover:border-cyber-blue/25 transition-all duration-300 group">
        <div className="flex items-start justify-between flex-wrap gap-2">
          <div>
            <div className="font-mono text-xs tracking-wider mb-0.5" style={{ color: item.color }}>
              {item.year}
            </div>
            <h4 className="font-display text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
              {item.title}
            </h4>
            <p className="font-body text-xs text-slate-500 mt-0.5">{item.subtitle}</p>
          </div>
          <span
            className="font-mono text-xs px-2 py-0.5 rounded border"
            style={{ color: item.color, borderColor: item.color + "30", background: item.color + "10" }}
          >
            {item.badge}
          </span>
        </div>
        <p className="mt-2 text-slate-400 text-xs leading-relaxed">{item.detail}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="font-mono text-xs text-cyber-blue/40 tracking-[0.3em]">01.</div>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-cyber-blue/40 to-transparent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black tracking-wider text-slate-100 section-line">
            ABOUT ME
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl font-body leading-relaxed">
            A Computer Science Engineering student with a passion for building practical,
            user-focused digital experiences. I enjoy full-stack development, problem solving,
            and turning ideas into working products that can scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Stats grid */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {statCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-5 text-center border border-cyber-blue/10 hover:scale-105 transition-transform duration-300 cursor-default"
                  style={{
                    boxShadow: `inset 0 0 20px ${card.color}08`,
                  }}
                >
                  <div
                    className="font-display text-3xl font-black mb-1"
                    style={{
                      color: card.color,
                      textShadow: `0 0 20px ${card.color}60`,
                    }}
                  >
                    {card.value}
                  </div>
                  <div className="font-mono text-xs text-slate-500 tracking-wider">
                    {card.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bio card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-cyber-blue/10"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={14} className="text-cyber-blue/50" />
                <span className="font-mono text-xs text-cyber-blue/50 tracking-wider">
                  LOCATION PROFILE
                </span>
              </div>
              <div className="space-y-3">
                {[
                  ["Institution", "National Institute of Technology, Srinagar"],
                  ["Program", "B.Tech in Computer Science and Engineering"],
                  ["Duration", "2023–2027"],
                  ["CGPA", "7.73"],
                  ["Class 12th", "96.2%"],
                ].map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between text-sm">
                    <span className="font-mono text-xs text-slate-500 tracking-wider">{key}</span>
                    <span className="font-body text-slate-300">{val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-cyber-blue/10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
                <span className="font-mono text-xs text-cyber-green/70">
                  Open to internships & full-time roles
                </span>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Calendar size={14} className="text-cyber-blue/40" />
              <span className="font-mono text-xs text-cyber-blue/40 tracking-wider">JOURNEY TIMELINE</span>
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-5 top-5 bottom-5 w-px"
                style={{ background: "linear-gradient(180deg, #00d4ff40, #a855f740, transparent)" }}
              />
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <TimelineItem key={i} item={item} i={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
