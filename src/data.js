const animals = [
  { name: "cat", sound: "meow",foodRequirement:{food:2, water:3} },
  { name: "dog", sound: "woof" }
];

function useSound(animals){
    return [
        animals.name,
        function makeSound(){
           console.log(animals.sound)
       }
        
    ]
}
export default animals;
export { useSound };