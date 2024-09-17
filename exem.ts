function returnSum(arr:number[]):number{
    let counter:number = 0;
      for (let index:number = 0; index < arr.length; index++) {
            counter += arr[index];
        
      } 
      return counter;
       
    }
    console.log(returnSum([1,4]));
    