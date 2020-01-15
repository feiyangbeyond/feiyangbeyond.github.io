var btn = document.getElementsByTagName('button')[0]
btn.onclick = function(event){
    //阻止行为
    event.preventDefault();
    login()
}
// btn.addEventListener('click', login())
function login(){
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    var msg = document.getElementsByTagName('p')[0]
    if(username == '' || password == ''){
        msg.innerHTML = '用户名或密码不能为空'
    }else if(username == 'guofeiyang' && password == 'guofeiyang'){
        alert('登录成功！')
        window.location.href = 'index.html'
    }else{
        msg.innerHTML = '用户名或密码错误'
    }

}