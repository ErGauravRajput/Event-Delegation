const getListDetails=(e)=>{
    if(e.srcElement.children.length==0){
        const listItem=e.target;
        listItem.style.transform="rotateY(360deg)";
        setTimeout(()=>{
            listItem.style.transform="rotateY(0deg)";
        },500);
        document.getElementById("listValue").innerText=`Your Favorite Language is ${e.srcElement.innerText}.`;
    }
}



const List=document.getElementById("myList");
List.addEventListener("click",getListDetails);
