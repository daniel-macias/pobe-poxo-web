import ProjectDetail from "../ProjectDetail";

export default function AnimalectricaPage() {
  return (
    <ProjectDetail
      title="Animaléctrica"
      type="Educational simulation"
      year="2024"
      description={[
        "Animaléctrica is a tycoon-style simulation game that encourages players to learn about different types of electrical generation and their environmental impact.",
        "The game combines Honduran wildlife with fantastical and scientific elements designed to appeal to both children and adults. Players explore different energy options and learn how those choices can help combat climate change.",
        "It began as Pobe Poxo’s submission to the 2024 “Aprende Viendo, Aprende Jugando” competition organized by the Honduran Energy Department.",
      ]}
      technologies={["Godot", "Android", "iOS"]}
      hero="/assets/Animalectrica/animal0.png"
      screenshots={[
        "/assets/Animalectrica/animal1.png",
        "/assets/Animalectrica/animal2.png",
        "/assets/Animalectrica/animal3.png",
        "/assets/Animalectrica/animal4.png",
      ]}
      equalScreenshots
      links={[]}
    />
  );
}
