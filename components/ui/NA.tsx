export const naira = (n:number|string) =>
  new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:2}).format(Number(n||0));
