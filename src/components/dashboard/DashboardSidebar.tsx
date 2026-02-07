import {
  LayoutDashboard,
  BarChart3,
  Users,
  CreditCard,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  ChartBarBig,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

const mainNav = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Customers", url: "/customers", icon: Users },
  { title: "Transactions", url: "/transactions", icon: CreditCard },
];

const secondaryNav = [
  { title: "Notifications", url: "/notifications", icon: Bell },
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Help", url: "/help", icon: HelpCircle },
];

const DashboardSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-60 flex-col border-r border-border bg-sidebar p-4">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <ChartBarBig className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="text-lg font-semibold gradient-text">Dashboard</span>
      </div>

      {/* Main nav */}
      <nav className="flex-1 space-y-1">
        <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Menu
        </p>
        {mainNav.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            end
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
            activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </NavLink>
        ))}

        <div className="my-4 border-t border-border" />

        <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Support
        </p>
        {secondaryNav.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
            activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
          >
            <item.icon className="h-4 w-4" />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* User */}
      <div className="mt-auto border-t border-border pt-4">
        <div className="flex items-center gap-3 rounded-md px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-medium">
            OH
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Olha H</p>
            <p className="text-xs text-muted-foreground truncate">olha@dashboard.io</p>
          </div>
          <button className="p-1 text-muted-foreground hover:text-foreground transition-colors">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
