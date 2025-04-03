function extractRideDetails(container) {
  const name = container.querySelector('h3')?.textContent?.trim() || '';
  const href = container.querySelector('a')?.getAttribute('href') || '';
  const location = container.querySelector('p')?.textContent?.trim() || '';
  const description =
    container.querySelector('div[class*="mt-1"]')?.textContent?.trim() || '';
  const videoUrl =
    container.querySelector('video source')?.getAttribute('src') || '';

  return {
    name,
    href,
    location,
    description,
    videoUrl,
  };
}

const container = document.querySelectorAll(
  '[class*="relative"][class*="h-[394px]"]'
);
const myAns = [];
container.forEach((elem) => {
  myAns.push(extractRideDetails(elem));
});
console.log(myAns);
// if (container) {
//   console.log(extractRideDetails(container));
// }
