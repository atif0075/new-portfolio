<script setup>
import {
  spline,
  pointsInPath,
  createCoordsTransformer,
} from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.1";
import gsap from "https://cdn.skypack.dev/gsap@3.6.1";
import { onMounted } from "vue";
onMounted(() => {
  const buttonPath = document.getElementById("btn-path");

  function createLiquidPath(path, options) {
    const svgPoints = pointsInPath(path, options.detail);
    const originPoints = svgPoints.map(({ x, y }) => ({ x, y }));
    const liquidPoints = svgPoints.map(({ x, y }) => ({ x, y }));

    const mousePos = { x: 0, y: 0 };
    const transformCoords = createCoordsTransformer(path.closest("svg"));

    const pointDistance = Math.hypot(
      originPoints[0].x - originPoints[1].x,
      originPoints[0].y - originPoints[1].y
    );
    const maxDist = {
      x: options.axis.includes("x") ? pointDistance / 2 : 0,
      y: options.axis.includes("y") ? pointDistance / 2 : 0,
    };

    gsap.ticker.add(() => {
      gsap.set(path, {
        attr: {
          d: spline(liquidPoints, options.tension, options.close),
        },
      });
    });

    window.addEventListener("mousemove", (e) => {
      const { x, y } = transformCoords(e);

      mousePos.x = x;
      mousePos.y = y;

      liquidPoints.forEach((point, index) => {
        const pointOrigin = originPoints[index];
        const distX = Math.abs(pointOrigin.x - mousePos.x);
        const distY = Math.abs(pointOrigin.y - mousePos.y);

        if (distX <= options.range.x && distY <= options.range.y) {
          const difference = {
            x: pointOrigin.x - mousePos.x,
            y: pointOrigin.y - mousePos.y,
          };

          const target = {
            x: pointOrigin.x + difference.x,
            y: pointOrigin.y + difference.y,
          };

          const x = gsap.utils.clamp(
            pointOrigin.x - maxDist.x,
            pointOrigin.x + maxDist.x,
            target.x
          );

          const y = gsap.utils.clamp(
            pointOrigin.y - maxDist.y,
            pointOrigin.y + maxDist.y,
            target.y
          );

          gsap.to(point, {
            x: x,
            y: y,
            ease: "sine",
            overwrite: true,
            duration: 0.175,
            onComplete() {
              gsap.to(point, {
                x: pointOrigin.x,
                y: pointOrigin.y,
                ease: "elastic.out(1, 0.3)",
                duration: 1.25,
              });
            },
          });
        }
      });
    });
  }

  const prefersReducedMotionQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  if (prefersReducedMotionQuery && !prefersReducedMotionQuery.matches) {
    createLiquidPath(buttonPath, {
      detail: 32,
      tension: 1,
      close: true,
      range: {
        x: 12,
        y: 40,
      },
      axis: ["y"],
    });
  }
});
</script>
<template>
  <button id="svg-btn">
    <svg
      id="btn-svg"
      viewBox="0 0 232 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="btn-path"
        d="M32 1.5H200C216.845 1.5 230.5 15.1553 230.5 32C230.5 48.8447 216.845 62.5 200 62.5H32C15.1553 62.5 1.5 48.8447 1.5 32C1.5 15.1553 15.1553 1.5 32 1.5Z"
        class="fill-gray-900"
        stroke-width="0"
      />
    </svg>
    <span class="text-gray-100 font-medium uppercase"> See My Work </span>
  </button>
</template>
<style scoped>
#svg-btn {
  position: relative;
  width: 200px;
  height: 64px;
  line-height: 64px;
  border: 0;
  background: none;
  color: #fff;
  font-weight: 700;
  font-size: 1.25rem;
  font-family: inherit;
  cursor: pointer;
}

#btn-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  z-index: -1;
}
</style>
