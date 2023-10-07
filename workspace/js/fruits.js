const fruits = ['apple', 'mango', 'orange', 'akara'];

const newFruits = fruits.filter(function(name) {
    return name.startsWith("a")
});


console.log(newFruits);