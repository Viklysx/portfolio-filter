export default function ProjectList({projects}) {
    return (
        <div className="projects">
            {projects.map((project, i) =>
                <img 
                    key={i} 
                    src={project.img} />
            )}
        </div>      
    )
}