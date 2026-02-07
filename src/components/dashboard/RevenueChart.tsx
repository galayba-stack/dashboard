import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 4200, users: 2400 },
  { month: "Feb", revenue: 3800, users: 2210 },
  { month: "Mar", revenue: 5100, users: 2900 },
  { month: "Apr", revenue: 4600, users: 2780 },
  { month: "May", revenue: 5400, users: 3100 },
  { month: "Jun", revenue: 6200, users: 3400 },
  { month: "Jul", revenue: 5900, users: 3250 },
  { month: "Aug", revenue: 7100, users: 3800 },
  { month: "Sep", revenue: 6800, users: 3600 },
  { month: "Oct", revenue: 7400, users: 4100 },
  { month: "Nov", revenue: 8200, users: 4500 },
  { month: "Dec", revenue: 9100, users: 4900 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg p-3 border border-border text-sm">
        <p className="text-muted-foreground mb-1">{label}</p>
        <p className="font-mono text-primary">${payload[0].value.toLocaleString()}</p>
        <p className="font-mono text-success">{payload[1].value.toLocaleString()} users</p>
      </div>
    );
  }
  return null;
};

const RevenueChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="glass-card rounded-lg p-5 col-span-2"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold">Revenue Overview</h3>
          <p className="text-sm text-muted-foreground">Monthly revenue and user growth</p>
        </div>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-success" />
            <span className="text-muted-foreground">Users</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(222, 30%, 16%)" />
          <XAxis dataKey="month" stroke="hsl(215, 20%, 40%)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="hsl(215, 20%, 40%)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="revenue" stroke="hsl(217, 91%, 60%)" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
          <Area type="monotone" dataKey="users" stroke="hsl(142, 71%, 45%)" fillOpacity={1} fill="url(#colorUsers)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default RevenueChart;
