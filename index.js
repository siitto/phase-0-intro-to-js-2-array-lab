


const cats = [
   'Milo', 
   'Otis', 
   'Garfield'];
   console.log(cats);

cats.length = 0;
      cats.push("Milo", "Otis", "Garfield");

   function destructivelyAppendCat(name){
      cats.push('Ralph'); 
      return cats;
}
      console.log(destructivelyAppendCat(cats));
   
      cats.length = 0;
      cats.push("Milo", "Otis", "Garfield");

   function destructivelyPrependCat(name){  
      cats.unshift('Bob');
      return cats.toString;
       }
      console.log(destructivelyPrependCat(cats));
      
      cats.length = 0;
      cats.push("Milo", "Otis", "Garfield");

   function destructivelyRemoveLastCat(){
      cats.pop(-1);
      }
      console.log(cats);

      cats.length = 0;
      cats.push("Milo", "Otis", "Garfield");

   function destructivelyRemoveFirstCat(){
      cats.shift()
      }
      console.log(cats);

      cats.length = 0;
      cats.push("Milo", "Otis", "Garfield");

   function appendCat(string){
      let newCats = ["Milo", "Otis", "Garfield"];
      newCats.push('Broom');
      return newCats;
      }
      
      console.log(appendCat("Broom"));
      console.log(cats);

      cats.length = 0;
      cats.push("Milo", "Otis", "Garfield");

   function prependCat(string){
      let newCats2 = ['Milo', 'Otis', 'Garfield'];
      newCats2.unshift('Arnold');
      return newCats2;
      }
      console.log(prependCat('Arnold'));
      console.log(cats);

      cats.length = 0;
      cats.push('Milo', 'Otis', 'Garfield');

   function removeLastCat(string){
      let newCat3 = ['Milo', 'Otis', 'Garfield'];
      newCat3.pop(-1);
      return newCat3;
       } 
      console.log(removeLastCat(-1));

      cats.length = 0;
      cats.push('Milo', 'Otis', 'Garfield');

   function removeFirstCat(string){
      let newCat4 = ['Milo', 'Otis', 'Garfield'];
      newCat4.shift();
      return newCat4;
      } 
      console.log(removeFirstCat());


  
  
  

    
          