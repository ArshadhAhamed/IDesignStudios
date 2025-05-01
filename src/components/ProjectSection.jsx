import React from "react";
import archimg1 from "../assets/archimg1.jpg";
import archimg2 from "../assets/archimg2.jpg"; 
import archimg3 from "../assets/archimg3.jpg";

// Remove local video import and add the GitHub Release URL directly
const videoUrl = "https://github.com/ArshadhAhamed/IDesignStudios/releases/download/v1.0/Final_Interior.mp4";

const ProjectSection = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 md:px-16">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

      {/* Project Image Sections - unchanged */}
      {[{ img: archimg1, title: "Modern Villa", desc: "Luxurious interiors with natural lighting." },
        { img: archimg2, title: "Waiting Hall", desc: "Compact design with smart storage." },
        { img: archimg3, title: "Bedroom", desc: "Minimalist professional workspace." }
      ].map((project, index) => (
        <div key={index} className="grid md:grid-cols-2 gap-6 items-center mb-12">
          <img
            src={project.img}
            alt={`Project ${index + 1}`}
            className="w-auto h-auto object-cover rounded-xl shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.desc}</p>
          </div>
        </div>
      ))}

      {/* Second Video - GitHub Release URL */}
      <div className="my-10 max-w-5xl mx-auto">
        <video
          src={videoUrl}  // Use the GitHub Release URL here
          autoPlay
          muted
          loop
          controls
          playsInline
          className="w-full h-auto object-contain rounded-xl shadow-xl"
        />
        <h4 className="text-xl font-semibold mt-4">Client Walkthrough</h4>
        <p className="text-gray-700">
          A presentation video created for a client showcasing spatial planning and lighting.
        </p>
      </div>
    </section>
  );
};

export default ProjectSection;
