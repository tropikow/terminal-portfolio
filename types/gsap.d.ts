import gsap from 'gsap'

declare module '#app' {
  interface NuxtApp {
    $gsap: typeof gsap
  }
}