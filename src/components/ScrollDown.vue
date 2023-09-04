<script setup></script>
<template>
  <svg
    x="0"
    y="0"
    viewBox="0 0 50 50"
    style="enable-background: new 0 0 512 512"
  >
    <g>
      <path
        d="M25 45a14 14 0 0 0 14-14V19a14 14 0 0 0-28 0v12a14 14 0 0 0 14 14zM13 19a12 12 0 0 1 24 0v12a12 12 0 0 1-24 0z"
        fill="currentColor"
      ></path>
      <path
        id="scroll-arrow"
        d="M24 24.5h.09l.2.21a1 1 0 0 0 1.42 0l.2-.21H26v-.09l5.71-5.7-1.42-1.42-4.29 4.3V11h-2v10.59l-4.29-4.3-1.42 1.42 5.71 5.7z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
</template>
<style scoped>
#scroll-arrow {
  animation: scrollDown 1s infinite;
}
@keyframes scrollDown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
