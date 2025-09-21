import { animate, scroll } from "motion"


animate(".service-container", { rotate: 360 })
const boxes = document.querySelectorAll(".service-container")

animate(boxes, { rotate: 360 })

    scroll(
      animate(
        ".timeline-item",
        { transform: ["rotate(0deg)", "rotate(180deg)"] },
        { ease: "linear" }
      )
    );
