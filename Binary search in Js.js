arr=[10, 20, 30, 50, 60, 80, 110, 130, 140, 170,180]
searchval=180;

let mid=Math.floor(arr.length/2);
console.log(mid)


if(searchval==arr[mid])
{
  console.log(mid)
}

else if(searchval<arr[mid])
{
  for(let i=0;i<=mid;i++)
  {
    if(searchval==arr[i])
    {
      console.log(i)
    }
  }
}

else{
    for(let i=mid;i<=arr.length-1;i++)
  {
    if(searchval==arr[i])
    {
      console.log(i)
    }
  }
}
