export default function ProjectList({projects}) {
    return (
        <div className="">
            {projects.map((project) =>
                <img
                  className=""
                  src={project.img} />
            )}
        </div>      
    )
}