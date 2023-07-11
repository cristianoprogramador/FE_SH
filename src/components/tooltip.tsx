interface ToolTipProps {
  showModal: boolean;
  projects: string[] | undefined;
}

export function ToolTip(props: ToolTipProps) {
  const { showModal, projects } = props;

  return (
    <div
      className={`absolute bottom-5 bg-purple-800 border border-purple-500 rounded-md p-2 z-10 text-white mb-10 ${
        showModal ? "opacity-100" : "opacity-0"
      } transition-opacity duration-200 ease-in-out text-center min-w-max`}
    >
      <div className="border-b">Projetos Ativos</div>
      {projects?.map((project, index) => (
        <div key={index} className="b">
          <div>{project}</div>
        </div>
      ))}
    </div>
  );
}
