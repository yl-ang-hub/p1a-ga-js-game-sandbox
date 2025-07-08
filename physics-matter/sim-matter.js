renderHeight = screen.height - 180;
renderWidth = screen.width - 20;

// module aliases
const Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

// create an engine
const engine = Engine.create();

// create a renderer
options = {
  wireframeBackground: "#3260a8",
  height: 1000,
  width: 1200,
  showDebug: true,
};
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    height: renderHeight,
    width: renderWidth,
    wireframes: false,
  },
});

// create runner
const runner = Runner.create();

// run the engine
Runner.run(runner, engine);

// run the renderer
Render.run(render);

// create two boxes and a ground
const pinball = Bodies.circle(
  renderWidth / 2,
  renderHeight * 0.2,
  30,
  {
    restitution: 1.5,
    render: {
      sprite: {
        texture: "./assets/flippers-ball.png",
        xOffset: 0.5,
        yOffset: 0.5,
      },
    },
  },
  80
);
const leftFlipper = Bodies.rectangle(
  renderWidth * 0.4,
  renderHeight * 0.8,
  160,
  20,
  {
    isStatic: true,
    angle: 10,
  }
);
const rightFlipper = Bodies.rectangle(
  renderWidth * 0.6,
  renderHeight * 0.8,
  160,
  20,
  {
    isStatic: true,
    angle: -10,
  }
);
// temporary ground for pinball
const ground = Bodies.rectangle(
  renderWidth / 2,
  renderHeight,
  renderWidth,
  50,
  {
    isStatic: true,
  }
);

// Add sprites
// pinball.render.sprite = {};

// Create axes for my flippers?

// add all of the bodies to the world
Composite.add(engine.world, [pinball, leftFlipper, rightFlipper, ground]);

console.log(render.options);

// Detect collision
// const ballCollision = Matter.Collision.collides(pinball, rightFlipper);
// console.log(`They collided: ${ballCollision}`);
