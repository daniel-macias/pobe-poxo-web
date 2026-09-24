import ProjectDetail from "../ProjectDetail";

export default function RugPullSimulatorPage() {
  return (
    <ProjectDetail
      title="Rug Pull Simulator"
      type="Experimental game"
      year="2026"
      description={[
        "Rug Pull Simulator is a short experimental game about hype, greed, and trying to cash out before everything crashes.",
        "Watch your coin’s value rise and fall, boost the market, react to news, and decide when to pull the plug before risk reaches 100%.",
        "It’s fast, chaotic, and built as a small game development exercise. Can you cash out in time?",
      ]}
      technologies={["Godot", "Web"]}
      hero="/assets/projects/rug-pull-simulator.png"
      screenshots={[
        "/assets/projects/rug-pull-simulator/rs_screen_1.png",
        "/assets/projects/rug-pull-simulator/rs_screen_2.png",
      ]}
      equalScreenshots
      links={[{ label: "Play on itch.io", href: "https://macicola.itch.io/rug-puller" }]}
    />
  );
}
