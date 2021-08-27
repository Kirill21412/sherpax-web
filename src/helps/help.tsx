import gsap from "gsap";
export const judgeFontWeightBySystem = (): string =>
{
  const agent = navigator.userAgent.toLowerCase();
  if (agent.indexOf("win") >= 0 || agent.indexOf("wow")) {
    return '600'
  } else {
    return '400'
  }
}

export const moveAction = (ele: any, time: number, x: number, y: number, yoyo: boolean, ease?: string) =>
{
  gsap.to(ele, time, {
    x: x,
    y: y,
    repeat: -1,
    startAt: { x: 0, y: 0 },
    ease: ease ? "none" : ease,
    yoyo: yoyo,
  });
}
