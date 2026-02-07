import { DollarSign, Users, TrendingUp, ShoppingCart } from "lucide-react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import TopBar from "@/components/dashboard/TopBar";
import StatCard from "@/components/dashboard/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import ActivityChart from "@/components/dashboard/ActivityChart";
import TransactionsTable from "@/components/dashboard/TransactionsTable";

const stats = [
  { title: "Total Revenue", value: "$48,200", change: "+12.5%", changeType: "positive" as const, icon: DollarSign },
  { title: "Active Users", value: "4,920", change: "+8.2%", changeType: "positive" as const, icon: Users },
  { title: "Conversion Rate", value: "3.24%", change: "-0.4%", changeType: "negative" as const, icon: TrendingUp },
  { title: "Total Orders", value: "1,840", change: "+24.1%", changeType: "positive" as const, icon: ShoppingCart },
];

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 ml-60">
        <TopBar />
        <main className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.title} {...stat} index={i} />
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <RevenueChart />
            <ActivityChart />
          </div>

          {/* Table */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <TransactionsTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
