//Que- take an integer from user using prompt.
// check weather it is even or odd and display the output.

function user()
{
    let a=document.getElementById("number").value

    if(a%2===0)
    {
       document.write(a+"=is even number")
    }
    else 
    {
      document.write(a+"=is odd number")
    }
}