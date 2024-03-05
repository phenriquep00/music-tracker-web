import { IPlaylist } from "../models/IPlaylist";

export function getRandomElements(arr: IPlaylist[], numElements: number) {
    const arrayCopy = [...arr];
    
    if (numElements > arrayCopy.length) {
      console.error("Number of elements requested is greater than array length");
      return [];
    }
  
    const randomElements = [];
    for (let i = 0; i < numElements; i++) {
      // Generate a random index within the current array length
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
  
      // Remove the selected element from the array and push it to the result
      randomElements.push(arrayCopy.splice(randomIndex, 1)[0]);
    }
  
    return randomElements;
  }