const arr = [
    { name: 'Alice Doe' },
    { name: 'Bob Smith' },
    { name: 'Charlie Brown' }
  ];
  
//   const initials = arr.map(value => {
//     const nameParts = value.name.split(' '); 
//     return nameParts[0].charAt(0) + nameParts[1].charAt(0); 
//   });
  
//   console.log(initials); 
  
console.log(arr.map(value=>value.name.split(' ')));
