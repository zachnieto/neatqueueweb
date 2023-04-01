import Particles from "react-tsparticles";

const CustomParticles = ({
  color = "#1c0037",
  clickable = true,
}: {
  color?: string;
  clickable?: boolean;
}) => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: color,
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: clickable,
              mode: "push",
            },
            onHover: {
              enable: true,
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default CustomParticles;
