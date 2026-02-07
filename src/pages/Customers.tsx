import { motion } from "framer-motion";
import { Search, MoreHorizontal, Mail, Phone } from "lucide-react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import TopBar from "@/components/dashboard/TopBar";

const customers = [
  { name: "Sarah Chen", email: "sarah@acme.co", company: "Acme Corp", plan: "Enterprise", spent: "$12,400", status: "Active", avatar: "SC" },
  { name: "Alex Rivera", email: "alex@startup.io", company: "StartupIO", plan: "Pro", spent: "$4,800", status: "Active", avatar: "AR" },
  { name: "Jordan Lee", email: "jordan@bigco.com", company: "BigCo", plan: "Enterprise", spent: "$18,200", status: "Active", avatar: "JL" },
  { name: "Morgan Patel", email: "morgan@design.co", company: "DesignCo", plan: "Starter", spent: "$890", status: "Churned", avatar: "MP" },
  { name: "Casey Kim", email: "casey@techfirm.dev", company: "TechFirm", plan: "Pro", spent: "$6,300", status: "Active", avatar: "CK" },
  { name: "Taylor Swift", email: "taylor@media.com", company: "MediaHouse", plan: "Enterprise", spent: "$22,100", status: "Active", avatar: "TS" },
  { name: "Riley Johnson", email: "riley@cloud.io", company: "CloudBase", plan: "Pro", spent: "$3,200", status: "Trial", avatar: "RJ" },
  { name: "Quinn Adams", email: "quinn@retail.co", company: "RetailPlus", plan: "Starter", spent: "$1,500", status: "Active", avatar: "QA" },
];

const statusStyles: Record<string, string> = {
  Active: "bg-success/10 text-success",
  Churned: "bg-destructive/10 text-destructive",
  Trial: "bg-warning/10 text-warning",
};

const planStyles: Record<string, string> = {
  Enterprise: "bg-primary/10 text-primary",
  Pro: "bg-accent/10 text-accent",
  Starter: "bg-muted text-muted-foreground",
};

const Customers = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 ml-60">
        <TopBar title="Customers" subtitle="Manage your customer base" />
        <main className="p-6 space-y-6">
          {/* Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Customers", value: "2,420" },
              { label: "Active", value: "2,180" },
              { label: "New This Month", value: "148" },
              { label: "Churn Rate", value: "2.4%" },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-card rounded-lg p-4">
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <p className="text-xl font-mono font-semibold mt-1">{s.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Table */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-lg p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">All Customers</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input type="text" placeholder="Search customers..." className="h-9 w-64 rounded-md border border-border bg-secondary pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-muted-foreground">
                    <th className="text-left py-3 px-2 font-medium">Customer</th>
                    <th className="text-left py-3 px-2 font-medium">Company</th>
                    <th className="text-left py-3 px-2 font-medium">Plan</th>
                    <th className="text-left py-3 px-2 font-medium">Total Spent</th>
                    <th className="text-left py-3 px-2 font-medium">Status</th>
                    <th className="text-left py-3 px-2 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((c) => (
                    <tr key={c.email} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-medium">{c.avatar}</div>
                          <div>
                            <p className="font-medium">{c.name}</p>
                            <p className="text-xs text-muted-foreground">{c.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-muted-foreground">{c.company}</td>
                      <td className="py-3 px-2"><span className={`px-2 py-1 rounded-full text-xs font-medium ${planStyles[c.plan]}`}>{c.plan}</span></td>
                      <td className="py-3 px-2 font-mono">{c.spent}</td>
                      <td className="py-3 px-2"><span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[c.status]}`}>{c.status}</span></td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-1">
                          <button className="p-1.5 rounded hover:bg-secondary transition-colors"><Mail className="h-3.5 w-3.5 text-muted-foreground" /></button>
                          <button className="p-1.5 rounded hover:bg-secondary transition-colors"><Phone className="h-3.5 w-3.5 text-muted-foreground" /></button>
                          <button className="p-1.5 rounded hover:bg-secondary transition-colors"><MoreHorizontal className="h-3.5 w-3.5 text-muted-foreground" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Customers;
