import { AdminPageLayout } from "@/components/AdminPageLayout";

const Page = ({ children }: any) => {
  return (
    <AdminPageLayout
      title="Test Page"
      breadcrumb={[{label:"Dashboard", href:"/admin"}]}
      actions={null}
    >
      <h1>This is a test</h1>
    </AdminPageLayout>
  );
};

export default Page;
