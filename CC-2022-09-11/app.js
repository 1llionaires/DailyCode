// Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.

//P: array
//R: return the array sorted in alphabetical order
//E: given ['one', 'two', 'three'], results "one", "three", "two"]
//   given ["Nams","RdhE","bVcyUCLF","pagszY","wlqyz","yZOJdI"], results ["Nams","RdhE","bVcyUCLF","pagszY","wlqyz","yZOJdI"]
//   given ["CosuaJ","EvMs","UwbCWcJptB","wLarojg"], results ["CosuaJ","EvMs","UwbCWcJptB","wLarojg"]
//PC: create a function that sorts the array in alphabetical order
sortme = function( names ){
    return names.sort()
}