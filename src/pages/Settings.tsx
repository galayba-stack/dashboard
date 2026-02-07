import { motion } from "framer-motion";
import { User, Lock, Bell, CreditCard, Palette, Globe } from "lucide-react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import TopBar from "@/components/dashboard/TopBar";

const sections = [
  {
    icon: User, title: "Profile", desc: "Manage your account details",
    fields: [
      { label: "Full Name", value: "John Doe", type: "text" },
      { label: "Email", value: "john@pulse.io", type: "email" },
      { label: "Company", value: "Pulse Inc.", type: "text" },
    ],
  },
  {
    icon: Lock, title: "Security", desc: "Password and authentication",
    fields: [
      { label: "Current Password", value: "", type: "password" },
      { label: "New Password", value: "", type: "password" },
    ],
  },
  {
    icon: Bell, title: "Notifications", desc: "Configure alerts and emails",
    toggles: [
      { label: "Email notifications", enabled: true },
      { label: "Push notifications", enabled: false },
      { label: "Weekly reports", enabled: true },
      { label: "Security alerts", enabled: true },
    ],
  },
];

const Settings = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 ml-60">
        <TopBar title="Settings" subtitle="Manage your preferences" />
        <main className="p-6 max-w-3xl space-y-6">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-md bg-secondary">
                  <section.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">{section.desc}</p>
                </div>
              </div>

              {section.fields && (
                <div className="space-y-4">
                  {section.fields.map((f) => (
                    <div key={f.label}>
                      <label className="block text-sm text-muted-foreground mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        defaultValue={f.value}
                        placeholder={f.type === "password" ? "••••••••" : ""}
                        className="h-10 w-full rounded-md border border-border bg-secondary px-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                      />
                    </div>
                  ))}
                  <button className="h-9 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                    Save Changes
                  </button>
                </div>
              )}

              {section.toggles && (
                <div className="space-y-3">
                  {section.toggles.map((t) => (
                    <div key={t.label} className="flex items-center justify-between py-1">
                      <span className="text-sm">{t.label}</span>
                      <div className={`w-10 h-6 rounded-full relative cursor-pointer transition-colors ${t.enabled ? "bg-primary" : "bg-secondary"}`}>
                        <div className={`absolute top-1 h-4 w-4 rounded-full bg-foreground transition-transform ${t.enabled ? "left-5" : "left-1"}`} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Settings;
