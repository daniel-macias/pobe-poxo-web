import ProjectDetail from "../ProjectDetail";

export default function MoBooKitPage() {
  return (
    <ProjectDetail
      title="MoBooKit"
      type="Mobile game"
      year="2025–2026"
      description={[
        "MoBooKit (from Morale Booster Kit) is a virtual pet: a small game about taking care of a quirky little robot companion.",
        "Spend time with your robot, discover its different looks, and play a collection of minigames—some fun and a few intentionally less so.",
      ]}
      technologies={["Godot", "Android", "iOS"]}
      hero="/assets/projects/mobookit/mobookit_icon.webp"
      screenshots={[
        "/assets/projects/mobookit/mobookitdemo230x511bb.webp",
        "/assets/projects/mobookit/mobookitdemo230x511bb (1).webp",
        "/assets/projects/mobookit/mobookitdemo230x511bb (2).webp",
        "/assets/projects/mobookit/mobookitdemo230x511bb (3).webp",
      ]}
      portrait
      links={[
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.macicola.mobookit" },
        { label: "App Store", href: "https://apps.apple.com/us/app/mobookit/id6775362360" },
      ]}
    />
  );
}
