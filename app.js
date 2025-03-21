let button=document.getElementById("button");
let numberInShape=1;
let oldvalue=0;

button.onclick=()=>{
    let n=document.getElementById("number").value;
    const circle=document.getElementById("circle");
    const square=document.getElementById("square");
    const rectangle=document.getElementById("rectangle");
    const colour=document.getElementById("colour").value;
    const box=document.getElementById("box");

    n=Number(n)+Number(oldvalue);

    for(let i=numberInShape;i<=n;i++)
    {
        let shape=document.createElement("div");
        shape.innerHTML+=numberInShape;
        if(circle.checked)
        {
            shape.classList.add("circle");
            shape.style.backgroundColor=colour;
        }
        else if(square.checked)
        {
            shape.classList.add("square");
            shape.style.backgroundColor=colour;
        }
        else if(rectangle.checked)
        {
            shape.classList.add("rectangle");
            shape.style.backgroundColor=colour;
        }
        else
        {
            document.write("Invalid Input");
        }

        numberInShape++;
        box.appendChild(shape);
        oldvalue=document.getElementById("box").lastElementChild.innerHTML;
    }
}