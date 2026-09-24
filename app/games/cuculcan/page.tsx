import ProjectDetail from "../ProjectDetail";

export default function CuculcanPage() {
  return (
    <ProjectDetail
      title="Cuculcan"
      type="Interactive map & open data"
      year="2026"
      description={[
        "Cuculcan is a full-stack geographic platform: an interactive explorer backed by a Go API for importing, querying, and using Central American boundaries and administrative data.",
        "It brings country, division, and subdivision data into one focused interface for people who want to explore the region or build with its geographic data.",
      ]}
      technologies={["React", "Go", "PostgreSQL", "PostGIS", "Docker"]}
      hero="/assets/projects/cuculcan/countries.png"
      screenshots={[
        "/assets/projects/cuculcan/countries.png",
        "/assets/projects/cuculcan/divisions.png",
        "/assets/projects/cuculcan/api.png",
      ]}
      links={[{ label: "Open live project", href: "https://cuculcan.com" }]}
    />
  );
}
