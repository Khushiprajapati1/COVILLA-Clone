function navAnimation() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".navItem",
      scroller: "body",
      start: "top top",
      end: "bottom -50%",
      scrub: 0.4,


    },
  });

  tl.to(
    ".navItem ,.navItem button i",
    {
      backgroundColor: "white",
      color: "black",

    },
    "a"
  );

  tl.to(
    ".nav .navItem .about span",
    {
      opacity: 1,
    },
    "a"
  );
  tl.to(
    ".nav",
    {
      borderBottom: "0.5px solid rgb(190,190,212 / 0.5%)",
    },
    "a"
  );
  tl.to(
    ".navItem button",
    {
      border: "0.5px solid rgb(190,190,212 / 0.5%)",
    },
    "a"
  );
}
navAnimation();
