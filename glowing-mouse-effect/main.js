const blob = document.getElementById("blob");
document.body.onpointermove = (event) => {
  const { x, y } = event;

  blob.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 300, fill: "forwards" }
  );
};
