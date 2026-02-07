import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import TopBar from "@/components/dashboard/TopBar";

const trafficData = [
  { month: "Jan", organic: 3200, paid: 1800, social: 900 },
  { month: "Feb", organic: 3600, paid: 2100, social: 1100 },
  { month: "Mar", organic: 3100, paid: 1900, social: 1300 },
  { month: "Apr", organic: 4200, paid: 2400, social: 1500 },
  { month: "May", organic: 4800, paid: 2800, social: 1200 },
  { month: "Jun", organic: 5100, paid: 3100, social: 1800 },
  { month: "Jul", organic: 4700, paid: 2600, social: 2000 },
  { month: "Aug", organic: 5500, paid: 3300, social: 2200 },
  { month: "Sep", organic: 5900, paid: 3500, social: 1900 },
  { month: "Oct", organic: 6200, paid: 3800, social: 2400 },
  { month: "Nov", organic: 6800, paid: 4100, social: 2600 },
  { month: "Dec", organic: 7200, paid: 4500, social: 2900 },
];

const conversionData = [
  { step: "Visit", value: 12000 },
  { step: "Sign Up", value: 5200 },
  { step: "Trial", value: 3100 },
  { step: "Purchase", value: 1800 },
  { step: "Retention", value: 1400 },
];

const deviceData = [
  { name: "Desktop", value: 58, color: "hsl(217, 91%, 60%)" },
  { name: "Mobile", value: 32, color: "hsl(142, 71%, 45%)" },
  { name: "Tablet", value: 10, color: "hsl(38, 92%, 50%)" },
];

const pageViews = [
  { page: "/dashboard", views: 12400, bounce: "24%", duration: "4m 12s" },
  { page: "/pricing", views: 8900, bounce: "38%", duration: "2m 45s" },
  { page: "/docs", views: 7200, bounce: "18%", duration: "6m 33s" },
  { page: "/blog", views: 5100, bounce: "42%", duration: "3m 10s" },
  { page: "/contact", views: 3400, bounce: "55%", duration: "1m 22s" },
];

const ChartTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card rounded-lg p-3 border border-border text-sm">
        <p className="text-muted-foreground mb-1">{label}</p>
        {payload.map((p: any, i: number) => (
          <p key={i} className="font-mono" style={{ color: p.color }}>{p.name}: {p.value.toLocaleString()}</p>
        ))}
      </div>
    );
  }
  return null;
};

const Analytics = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 ml-60">
        <TopBar title="Analytics" subtitle="Traffic and performance insights" />
        <main className="p-6 space-y-6">
          {/* Summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Page Views", value: "142K", change: "+18.3%" },
              { label: "Avg. Session", value: "3m 42s", change: "+5.1%" },
              { label: "Bounce Rate", value: "31.2%", change: "-2.8%" },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-lg p-5">
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <p className="text-2xl font-mono font-semibold mt-1">{s.value}</p>
                <p className={`text-xs mt-1 ${s.change.startsWith("+") ? "text-success" : "text-destructive"}`}>{s.change} vs last month</p>
              </motion.div>
            ))}
          </div>

          {/* Traffic chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-lg p-5">
            <h3 className="font-semibold mb-1">Traffic Sources</h3>
            <p className="text-sm text-muted-foreground mb-6">Monthly visitors by channel</p>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="gOrganic" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="hsl(217,91%,60%)" stopOpacity={0.3}/><stop offset="95%" stopColor="hsl(217,91%,60%)" stopOpacity={0}/></linearGradient>
                  <linearGradient id="gPaid" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="hsl(142,71%,45%)" stopOpacity={0.3}/><stop offset="95%" stopColor="hsl(142,71%,45%)" stopOpacity={0}/></linearGradient>
                  <linearGradient id="gSocial" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="hsl(38,92%,50%)" stopOpacity={0.3}/><stop offset="95%" stopColor="hsl(38,92%,50%)" stopOpacity={0}/></linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(222,30%,16%)" />
                <XAxis dataKey="month" stroke="hsl(215,20%,40%)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(215,20%,40%)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip content={<ChartTooltip />} />
                <Area type="monotone" dataKey="organic" stroke="hsl(217,91%,60%)" fill="url(#gOrganic)" strokeWidth={2} />
                <Area type="monotone" dataKey="paid" stroke="hsl(142,71%,45%)" fill="url(#gPaid)" strokeWidth={2} />
                <Area type="monotone" dataKey="social" stroke="hsl(38,92%,50%)" fill="url(#gSocial)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Conversion funnel */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card rounded-lg p-5">
              <h3 className="font-semibold mb-1">Conversion Funnel</h3>
              <p className="text-sm text-muted-foreground mb-6">User journey stages</p>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={conversionData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(222,30%,16%)" horizontal={false} />
                  <XAxis type="number" stroke="hsl(215,20%,40%)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis type="category" dataKey="step" stroke="hsl(215,20%,40%)" fontSize={12} tickLine={false} axisLine={false} width={80} />
                  <Tooltip content={<ChartTooltip />} />
                  <Bar dataKey="value" fill="hsl(217,91%,60%)" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Devices */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-card rounded-lg p-5">
              <h3 className="font-semibold mb-1">Device Breakdown</h3>
              <p className="text-sm text-muted-foreground mb-6">Sessions by device type</p>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={deviceData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={4} dataKey="value">
                      {deviceData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                    </Pie>
                    <Legend formatter={(value) => <span className="text-sm text-muted-foreground">{value}</span>} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Top pages */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="glass-card rounded-lg p-5">
            <h3 className="font-semibold mb-1">Top Pages</h3>
            <p className="text-sm text-muted-foreground mb-4">Most visited pages</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="text-left py-3 px-2 font-medium">Page</th>
                  <th className="text-left py-3 px-2 font-medium">Views</th>
                  <th className="text-left py-3 px-2 font-medium">Bounce Rate</th>
                  <th className="text-left py-3 px-2 font-medium">Avg. Duration</th>
                </tr>
              </thead>
              <tbody>
                {pageViews.map((p) => (
                  <tr key={p.page} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                    <td className="py-3 px-2 font-mono text-primary">{p.page}</td>
                    <td className="py-3 px-2 font-mono">{p.views.toLocaleString()}</td>
                    <td className="py-3 px-2">{p.bounce}</td>
                    <td className="py-3 px-2 text-muted-foreground">{p.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
