declare module 'gsap-trial/SplitText' {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(target: string | Element | (string | Element)[], vars?: object);
    revert(): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  const ScrollSmoother: any;
  export default ScrollSmoother;
}
