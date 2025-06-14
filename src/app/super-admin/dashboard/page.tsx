import MainLayout from "@/app/page";

export default function SuperAdminDashboard() {
  return (
    <MainLayout role="superAdmin">
      <h1 className="text-3xl font-bold mb-4">Super Admin Dashboard</h1>
      <p>Welcome to the super admin panel!</p>
    </MainLayout>
  );
}
