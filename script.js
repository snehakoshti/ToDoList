function get_Data()
{
    var data1=new Array;
    var data1_str=localStorage.getItem('todo');
    if(data1_str!==null){
        data1=JSON.parse(data1_str);
    }
    return data1;

}

function add(){
    var task=document.getElementById('task').value;
    var data1=get_Data();
    data1.push(task);
    localStorage.setItem('todo',JSON.stringify(data1));
    show();
    return false;
}

  function show(){
    var data1=get_Data();
    var html='<br><table align="center" cellpadding="2"><tr><th>Sr. No</th><th>Task</th><th>Action</th></tr>';
    for(var i=0;i<data1.length;i++){
        html+='<tr><td>'+(i+1)+'</td><td>'+data1[i]+'</td><td><button class="remove" id="'+i+'" onclick="remove('+i+')">Delete</button> </td></tr>';
    }
    html+='</table>';
    document.getElementById('todolist').innerHTML=html;
    // var buttons=document.getElementsByClassName('remove');
    // for(var i=0;i<buttons.length;i++){
    //     buttons[i].addEventListener('click',remove);
    // };
  }
  
  document.getElementById('addTask').addEventListener('click',add);
show();
  function clearDefault(a){
    if(a.default==a.value){
        a.value=""
    }
  }

  function remove(i){
    //  var id=document.getElementsByTagName("button").getAttribute(i);
      var data1=get_Data();
      data1.splice(i,1);
      localStorage.setItem('todo',JSON.stringify(data1));
      show();
      return false;
  }

