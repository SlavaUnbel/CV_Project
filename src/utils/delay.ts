export const delay = (delay: number) => (new Promise(resolve => window.setTimeout(resolve, delay)))