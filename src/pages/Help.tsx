import { motion } from "framer-motion";
import { Book, MessageCircle, Mail, ExternalLink } from "lucide-react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import TopBar from "@/components/dashboard/TopBar";

const resources = [
  { icon: Book, title: "Documentation", desc: "Browse guides, API references, and tutorials", link: "#" },
  { icon: MessageCircle, title: "Community", desc: "Join discussions and get help from other users", link: "#" },
  { icon: Mail, title: "Contact Support", desc: "Reach our team for technical assistance", link: "#" },
];

const faqs = [
  { q: "How do I upgrade my plan?", a: "Navigate to Settings → Billing to view and upgrade your current plan." },
  { q: "Can I export my data?", a: "Yes! Go to any data table and click the Export button to download as CSV." },
  { q: "How do I invite team members?", a: "Go to Settings → Team and use the invite form to add new members." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans." },
];

const Help = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 ml-60">
        <TopBar title="Help Center" subtitle="Find answers and get support" />
        <main className="p-6 max-w-3xl space-y-6">
          {/* Resources */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {resources.map((r, i) => (
              <motion.a
                key={r.title}
                href={r.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-lg p-5 hover:border-primary/30 transition-colors group"
              >
                <div className="p-2 rounded-md bg-secondary w-fit mb-3">
                  <r.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1 flex items-center gap-1">
                  {r.title}
                  <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-muted-foreground">{r.desc}</p>
              </motion.a>
            ))}
          </div>

          {/* FAQ */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-lg p-6">
            <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
                  <p className="font-medium text-sm mb-1">{faq.q}</p>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Help;
