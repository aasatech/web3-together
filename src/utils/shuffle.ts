type ArrayType = {
  id: string;
  img: string;
  title: string;
  description: string;
  date: string;
  joinLink: string;
  details?: {
    img: string;
    intro: string;
    howToJoin: string,
    timeLines: string[],
    applyLink: string,
    noted: string;
  }
}[]

export default function shuffle(array: ArrayType) {
  var currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
