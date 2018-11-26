export default [
  { id: 0, value: 1, faceup: false, guessed: false,}, 
  { id: 1, value: 2, faceup: false, guessed: false,}, 
  { id: 2, value: 3, faceup: false, guessed: false,}, 
  { id: 3, value: 4, faceup: false, guessed: false,}, 
  { id: 4, value: 5, faceup: false, guessed: false,}, 
  { id: 5, value: 6, faceup: false, guessed: false,}, 
  { id: 6, value: 7, faceup: false, guessed: false,}, 
  { id: 7, value: 8, faceup: false, guessed: false,}, 
  { id: 8, value: 1, faceup: false, guessed: false,}, 
  { id: 9, value: 2, faceup: false, guessed: false,}, 
  { id: 10, value: 3, faceup: false, guessed: false,}, 
  { id: 11, value: 4, faceup: false, guessed: false,}, 
  { id: 12, value: 5, faceup: false, guessed: false,}, 
  { id: 13, value: 6, faceup: false, guessed: false,}, 
  { id: 14, value: 7, faceup: false, guessed: false,}, 
  { id: 15, value: 8, faceup: false, guessed: false,}, 
]

export function generateFreshSymbols () {
  return new Array(16).fill(0).map((x, i) => ({id: i, value: ((i + 1) % 8) + 1 , faceup: false, guessed: false}));
}