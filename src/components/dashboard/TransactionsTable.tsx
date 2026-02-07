import { motion } from "framer-motion";

const transactions = [
  { id: "#4532", user: "Test Human", email: "test@example.com", amount: "$1,250.00", status: "Completed", date: "Jan 15" },
  { id: "#4531", user: "Test Human2", email: "test2@example.com", amount: "$890.00", status: "Pending", date: "Jan 15" },
];

const statusStyles: Record<string, string> = {
  Completed: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Failed: "bg-destructive/10 text-destructive",
};

const TransactionsTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="glass-card rounded-lg p-5 col-span-2"
    >
      <div className="mb-4">
        <h3 className="font-semibold">Recent Transactions</h3>
        <p className="text-sm text-muted-foreground">Latest payment activity</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="text-left py-3 px-2 font-medium">ID</th>
              <th className="text-left py-3 px-2 font-medium">User</th>
              <th className="text-left py-3 px-2 font-medium">Amount</th>
              <th className="text-left py-3 px-2 font-medium">Status</th>
              <th className="text-left py-3 px-2 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                <td className="py-3 px-2 font-mono text-muted-foreground">{tx.id}</td>
                <td className="py-3 px-2">
                  <div>
                    <div className="font-medium">{tx.user}</div>
                    <div className="text-xs text-muted-foreground">{tx.email}</div>
                  </div>
                </td>
                <td className="py-3 px-2 font-mono">{tx.amount}</td>
                <td className="py-3 px-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[tx.status]}`}>
                    {tx.status}
                  </span>
                </td>
                <td className="py-3 px-2 text-muted-foreground">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default TransactionsTable;
