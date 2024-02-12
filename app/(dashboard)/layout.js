import Sidebar from "@/components/dashboard/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout my-10 lg:flex gap-5 items-start">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <main className="w-3/4 bg-dark-100 h-full p-2">{children}</main>
    </div>
  );
};

export default DashboardLayout;
