type ProjectCardProps = {
  projectName: string;
  teamName: string;
  description: string;
  techStack?: string;
  demoUrl?: string;
  repositoryUrl?: string;
};

export default function ProjectCard({
  projectName,
  teamName,
  description,
  techStack,
  demoUrl,
  repositoryUrl,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-content">
        <p className="project-card-team">{teamName}</p>

        <h3>{projectName}</h3>

        <p>{description}</p>

        {techStack && (
          <p className="project-card-tech">
            {techStack}
          </p>
        )}

        <div className="project-card-links">
          {repositoryUrl && (
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}

          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
