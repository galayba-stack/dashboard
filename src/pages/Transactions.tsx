import { motion } from "framer-motion";
import { Search, Filter, Download } from "lucide-react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import TopBar from "@/components/dashboard/TopBar";

const transactions = [
  { id: "#TXN-4532", user: "Sarah Chen", method: "Visa •••• 4242", amount: "$1,250.00", fee: "$31.25", net: "$1,218.75", status: "Completed", date: "Feb 7, 2026" },
  { id: "#TXN-4531", user: "Alex Rivera", method: "Mastercard •••• 8821", amount: "$890.00", fee: "$22.25", net: "$867.75", status: "Pending", date: "Feb 7, 2026" },
  { id: "#TXN-4530", user: "Jordan Lee", method: "Visa •••• 1234", amount: "$2,100.00", fee: "$52.50", net: "$2,047.50", status: "Completed", date: "Feb 6, 2026" },
  { id: "#TXN-4529", user: "Morgan Patel", method: "PayPal", amount: "$450.00", fee: "$11.25", net: "$438.75", status: "Failed", date: "Feb 6, 2026" },
  { id: "#TXN-4528", user: "Casey Kim", method: "Visa •••• 5678", amount: "$3,200.00", fee: "$80.00", net: "$3,120.00", status: "Completed", date: "Feb 5, 2026" },
  { id: "#TXN-4527", user: "Taylor Swift", method: "Amex •••• 9900", amount: "$5,400.00", fee: "$135.00", net: "$5,265.00", status: "Completed", date: "Feb 5, 2026" },
  { id: "#TXN-4526", user: "Riley Johnson", method: "Visa •••• 3344", amount: "$720.00", fee: "$18.00", net: "$702.00", status: "Refunded", date: "Feb 4, 2026" },
  { id: "#TXN-4525", user: "Quinn Adams", method: "Mastercard •••• 7788", amount: "$1,100.00", fee: "$27.50", net: "$1,072.50", status: "Completed", date: "Feb 4, 2026" },
];

const statusStyles: Record<string, string> = {
  Completed: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Failed: "bg-destructive/10 text-destructive",
  Refunded: "bg-primary/10 text-primary",
};

const Transactions = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 ml-60">
        <TopBar title="Transactions" subtitle="Payment history and details" />
        <main className="p-6 space-y-6">
          {/* Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { label: "Total Volume", value: "$142,800" },
              { label: "Successful", value: "1,642" },
              { label: "Pending", value: "23" },
              { label: "Failed", value: "8" },
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
              <h3 className="font-semibold">All Transactions</h3>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input type="text" placeholder="Search..." className="h-9 w-56 rounded-md border border-border bg-secondary pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
                </div>
                <button className="flex items-center gap-1.5 h-9 px-3 rounded-md border border-border bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors"><Filter className="h-3.5 w-3.5" /> Filter</button>
                <button className="flex items-center gap-1.5 h-9 px-3 rounded-md border border-border bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors"><Download className="h-3.5 w-3.5" /> Export</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-muted-foreground">
                    <th className="text-left py-3 px-2 font-medium">ID</th>
                    <th className="text-left py-3 px-2 font-medium">Customer</th>
                    <th className="text-left py-3 px-2 font-medium">Method</th>
                    <th className="text-left py-3 px-2 font-medium">Amount</th>
                    <th className="text-left py-3 px-2 font-medium">Fee</th>
                    <th className="text-left py-3 px-2 font-medium">Net</th>
                    <th className="text-left py-3 px-2 font-medium">Status</th>
                    <th className="text-left py-3 px-2 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                      <td className="py-3 px-2 font-mono text-muted-foreground">{tx.id}</td>
                      <td className="py-3 px-2 font-medium">{tx.user}</td>
                      <td className="py-3 px-2 text-muted-foreground text-xs">{tx.method}</td>
                      <td className="py-3 px-2 font-mono">{tx.amount}</td>
                      <td className="py-3 px-2 font-mono text-muted-foreground">{tx.fee}</td>
                      <td className="py-3 px-2 font-mono">{tx.net}</td>
                      <td className="py-3 px-2"><span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[tx.status]}`}>{tx.status}</span></td>
                      <td className="py-3 px-2 text-muted-foreground">{tx.date}</td>
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

export default Transactions;
