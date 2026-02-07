import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { day: "Mon", sessions: 120 },
  { day: "Tue", sessions: 190 },
  { day: "Wed", sessions: 160 },
  { day: "Thu", sessions: 210 },
  { day: "Fri", sessions: 180 },
  { day: "Sat", sessions: 90 },
  { day: "Sun", sessions: 70 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg p-3 border border-border text-sm">
        <p className="text-muted-foreground">{label}</p>
        <p className="font-mono text-primary">{payload[0].value} sessions</p>
      </div>
    );
  }
  return null;
};

const ActivityChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="glass-card rounded-lg p-5"
    >
      <div className="mb-6">
        <h3 className="font-semibold">Weekly Activity</h3>
        <p className="text-sm text-muted-foreground">User sessions this week</p>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 16%)" vertical={false} />
          <XAxis dataKey="day" stroke="hsl(215, 20%, 40%)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="hsl(215, 20%, 40%)" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(222, 40%, 12%)" }} />
          <Bar dataKey="sessions" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default ActivityChart;
