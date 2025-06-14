import MainLayout from "../page";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout role="superAdmin">{children}</MainLayout>;
}
