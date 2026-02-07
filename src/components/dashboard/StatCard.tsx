import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  index: number;
}

const StatCard = ({ title, value, change, changeType, icon: Icon, index }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="glass-card rounded-lg p-5 hover:border-primary/30 transition-colors"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-muted-foreground">{title}</span>
        <div className="p-2 rounded-md bg-secondary">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </div>
      <div className="font-mono text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 flex items-center gap-1">
        <span
          className={`text-xs font-medium ${
            changeType === "positive"
              ? "text-success"
              : changeType === "negative"
              ? "text-destructive"
              : "text-muted-foreground"
          }`}
        >
          {change}
        </span>
        <span className="text-xs text-muted-foreground">vs last month</span>
      </div>
    </motion.div>
  );
};

export default StatCard;
