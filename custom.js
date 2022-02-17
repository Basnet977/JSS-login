let users = [
    { id: 1, name: 'admin', address: 'chicago', phone:763864323 },
    { id: 2, name: 'user', address: 'canada', phone:8734649 },
    { id: 3, name: 'player', address: 'tokyo', phone:7648643 },
]
function display() {
    let output="";
    users.forEach((user, index) => {
      output+= `<tr>
        <td>${++index}</td>
        <td>${user.name}</td>
        <td>${user.address}</td>
        <td>${user.phone}</td>
        <td>
        <button onclick= "updateuser(${user.id})">Edit</button>
        <button onclick= "deleteuser(${user.id})" >Delete</button>
        </td>
      </tr>`
    });
    document.getElementById('userlist').innerHTML = output;
}
display();

//add record

let increment = 4;
document.querySelector('#AddRecord').addEventListener('click',function(e){
    e.preventDefault();
    let userid = document.getElementById('userid').value;
    let id = parseInt(userid);
    if(userid!=''){
      let data= getbyid(id);
      data.name = document.getElementById('name').value
      data.address = document.getElementById('address').value
      data.phone = document.getElementById('phone').value
      display();
    document.getElementById('name').value = "";
    document.getElementById('address').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('userid').value = "";
    document.getElementById('AddRecord').innerHTML = "Add Record";
    } else{
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let phone = document.getElementById('phone').value;
    let senddata={id:increment,name:name,address:address,phone:phone}
    users.push(senddata);
    increment++;
    display();
    document.getElementById('name').value = "";
    document.getElementById('address').value = "";
    document.getElementById('phone').value = "";
    }
});

// edit and delete

function getbyid(id){
  return users.filter((user)=>user.id===id)[0]
}

function deleteuser(id){
  delete users[id-1]
  display()
}

function updateuser(id){
  let data= getbyid(id);
  document.getElementById('name').value= data.name;
  document.getElementById('address').value= data.address;
  document.getElementById('phone').value= data.phone;
  document.getElementById('userid').value = data.id;
  document.getElementById('AddRecord').innerHTML = "Update Record";
}

