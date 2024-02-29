import Sidebar from "@/components/dashboard/sidebar";

export const metadata = {
  title: "Dashboard | Luminous",
  description: "This is a Cosmetics E-Commerce",
};

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout my-10 lg:flex gap-5 items-start">
      <div className="lg:w-1/4">
        <Sidebar />
      </div>
      <main className="lg:w-3/4 bg-gray-100 dark:bg-gray-900 lg:h-screen rounded-lg p-2 overflow-y-scroll">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
