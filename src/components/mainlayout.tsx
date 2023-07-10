import { Sidebar } from "./sidebar";

type MainLayoutProps = {
  children?: React.ReactNode;
};

export const MainLayout = (props: MainLayoutProps): React.JSX.Element => {
  const { children } = props;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">{children}</div>
    </div>
  );
};
