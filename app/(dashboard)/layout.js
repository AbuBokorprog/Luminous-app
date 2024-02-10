// pages/dashboard/layout.js

import Sidebar from "@/components/dashboard/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout my-10 lg:flex gap-5 items-start">
      <div>
        <Sidebar />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
