import { Sidebar } from "./sidebar";

type MainLayoutProps = {
  children?: React.ReactNode;
};

export function MainLayout(props: MainLayoutProps): React.JSX.Element {
  const { children } = props;

  return (
    <div className="flex h-screen flex-grow overflow-y-auto">
      <Sidebar />
      <div className="flex-grow overflow-y-auto">{children}</div>
    </div>
  );
}
