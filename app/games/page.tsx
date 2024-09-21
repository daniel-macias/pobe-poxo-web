import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const Games = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto p-6 text-center bg-white text-black flex flex-col justify-center items-center flex-grow">
          <h1 className="text-4xl font-bold mb-4 font-playwrite">Animaléctrica</h1>
          {/* Main image and description */}
          <div className="w-full max-w-4xl mb-6 flex justify-center">
            <Image
              src="/assets/Animalectrica/animal0.png"
              alt="Main Game Screenshot"
              width={800}
              height={400}
              className="mx-auto"
            />
          </div>
          <p className="mt-4 text-lg max-w-4xl mb-6">
          Animalectrica is Pobe Poxo&apos;s first game! Currently a demo and a submission for the 2024 &quot;Aprende Viendo, Aprende Jugando&quot; competition, organized by the Honduran Energy Department.
          </p>

          {/* Two images followed by text */}
          <div className="flex flex-wrap justify-center gap-4 mb-4 max-w-4xl">
            <div>
              <Image
                src="/assets/Animalectrica/animal1.png"
                alt="Game Screenshot 1"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Image
                src="/assets/Animalectrica/animal2.png"
                alt="Game Screenshot 2"
                width={300}
                height={200}
              />
            </div>
          </div>
          <p className="text-lg mb-8 max-w-4xl">
          Animaléctrica is a tycoon-style simulation game that promotes learning about different types of electrical generation and their environmental impact.
          </p>

          {/* Another two images followed by text */}
          <div className="flex flex-wrap justify-center gap-4 mb-4 max-w-4xl">
            <div>
              <Image
                src="/assets/Animalectrica/animal3.png"
                alt="Game Screenshot 3"
                width={300}
                height={200}
              />
            </div>
            <div>
              <Image
                src="/assets/Animalectrica/animal4.png"
                alt="Game Screenshot 4"
                width={300}
                height={200}
              />
            </div>
          </div>
          <p className="text-lg max-w-4xl">
          The game integrates components of Honduran fauna with fantastical and scientific elements designed to appeal to both children and adults. Our game encourages players to explore various energy options and understand how they can help combat climate change.
          </p>

          <p className="text-lg max-w-4xl mt-6">
          This game will be available on Android after the results of the contest are known to the public!
          </p>
        </div>
      </div>
    </>
  );
};

export default Games;
