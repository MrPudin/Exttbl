//Functions
function sidebar_info(state,title="Subject",data="Subject Desciption")
{
    var sidebar = document.getElementById("info");
    if(state == true)
    {
        document.getElementsByClassName("side-title")[0].textContent = title;
        document.getElementsByClassName("side-description")[0].textContent = data;
        sidebar.style.visibility = "visible";
    }
    else
    {
        sidebar.style.visibility = "hidden";
        document.getElementsByClassName("side-title")[0].textContent = "Subject";
        document.getElementsByClassName("side-description")[0].textContent = "Subject Desciption";
    }
}

//Show SIdebar
var cell_revision = document.getElementsByClassName("cell-revision");

for(i = 0; i< cell_revision.length;i++)
{
    cell_revision[i].onmousedown = (function (){
        sidebar_info(true,this.textContent);
    });
}

//Dimiss Sidebar
var sidebar = document.getElementById("info");
var sidebar_title = document.getElementsByClassName("side-title");
var table_cell = document.getElementsByTagName("td");
var table_div = document.getElementsByClassName("ttble");

for(i = 0; i < table_cell.length;i++)
{
    if(table_cell[i].className != "cell-revision")
    {
        table_cell[i].onclick = (function (){
            sidebar_info(false);
        });
    }
}

for(i = 0;i < table_div.length;i++)
{
    table_div[i].onclick = (function (event){
        if(event.target == this)
        {
            sidebar_info(false);
        }
    });
}

for(i = 0;i < sidebar_title.length;i++)
{
    sidebar_title[i].onclick = (function (){
        sidebar_info(false);
    });
}
