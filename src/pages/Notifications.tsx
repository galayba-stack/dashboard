import { motion } from "framer-motion";
import { Bell, Check, AlertTriangle, Info, CreditCard, Users, TrendingUp } from "lucide-react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import TopBar from "@/components/dashboard/TopBar";

const notifications = [
  { icon: CreditCard, title: "Payment received", desc: "Sarah Chen completed a $1,250 payment", time: "2 min ago", type: "success", read: false },
  { icon: AlertTriangle, title: "Failed transaction", desc: "Payment from Morgan Patel failed — card declined", time: "15 min ago", type: "error", read: false },
  { icon: Users, title: "New customer signup", desc: "Riley Johnson started a Pro trial", time: "1 hour ago", type: "info", read: false },
  { icon: TrendingUp, title: "Revenue milestone", desc: "Monthly revenue crossed $50K for the first time!", time: "3 hours ago", type: "success", read: true },
  { icon: Info, title: "System update", desc: "Dashboard v2.4 deployed successfully", time: "5 hours ago", type: "info", read: true },
  { icon: Users, title: "Team invite accepted", desc: "Alex Rivera joined the workspace", time: "1 day ago", type: "info", read: true },
  { icon: AlertTriangle, title: "High churn alert", desc: "Churn rate increased to 3.1% this week", time: "1 day ago", type: "error", read: true },
  { icon: CreditCard, title: "Subscription upgraded", desc: "BigCo upgraded from Pro to Enterprise", time: "2 days ago", type: "success", read: true },
];

const typeStyles: Record<string, string> = {
  success: "bg-success/10 text-success",
  error: "bg-destructive/10 text-destructive",
  info: "bg-primary/10 text-primary",
};

const Notifications = () => {
  const unread = notifications.filter(n => !n.read).length;

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 ml-60">
        <TopBar title="Notifications" subtitle={`${unread} unread notifications`} />
        <main className="p-6 max-w-3xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">All Notifications</h3>
            <button className="flex items-center gap-1.5 text-sm text-primary hover:underline">
              <Check className="h-3.5 w-3.5" /> Mark all as read
            </button>
          </div>
          <div className="space-y-2">
            {notifications.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`glass-card rounded-lg p-4 flex items-start gap-4 ${!n.read ? "border-l-2 border-l-primary" : ""}`}
              >
                <div className={`p-2 rounded-md ${typeStyles[n.type]}`}>
                  <n.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm ${!n.read ? "font-semibold" : "font-medium"}`}>{n.title}</p>
                  <p className="text-sm text-muted-foreground">{n.desc}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{n.time}</span>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Notifications;
