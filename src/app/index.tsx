import One from "@/components/index/one";
import Two from "@/components/index/two";
import Three from "@/components/index/three";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Animated gradient background - only in dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent dark:from-emerald-500/20 dark:via-teal-500/10 dark:to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-transparent dark:bg-emerald-500/30 rounded-full blur-[120px] dark:animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-transparent dark:bg-teal-400/20 rounded-full blur-[100px]"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col pt-12">
        {/* Hero Section */}
        <One />

        {/* About Us Section */}
        <Two />

        {/* Services Section */}
        <Three />

      </div>
    </div>
  );
}
