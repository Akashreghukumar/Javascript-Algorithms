class Stack
{
    constructor()
    {
        this.arr=[]
        this.index=0
        
    }
    push(data)
    {
        this.arr[this.index]=data
        this.index++
        console.log(this.arr)
        
    }

 pop()
  {
   let delitem=this.arr[this.index-1]
    console.log(delitem)
    this.index--
    
  }

  peek()
  {
   let peekele=this.arr[this.index-1]
    console.log("Peek element",peekele)
  }

  printstack()
  {
   let res=""
    for(let i=0;i<=this.index-1;i++)
      {
        res=res+" "+this.arr[i]
        
      }
    console.log("stack",res)
  }
}

var stack=new Stack()

stack.push(100)
stack.push(200)
stack.push(300)
stack.printstack()
stack.pop()
stack.peek()
stack.pop()
stack.peek()


