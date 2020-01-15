$(function(){

    var username
    var mail    
    var idcard   
    var password 
    var rePwd   
    var lience

    var namespan  = $('#namespan')
    var mailspan  = $('#mailspan')
    var cardspan  = $('#cardspan')
    var pwdspan   = $('#pwdspan')
    var repwdspan = $('#repwdspan')
    var liencebox = $('#liencebox')
    var register = $('#registerBtn')

    register.on('click', function(event){
        event.preventDefault()
        //console.log('注册')
        var register = false

        username = $('#username').val()
        mail     = $('#mail').val()
        idcard   = $('#idcard').val()
        password = $('#password').val()
        rePwd    = $('#repwd').val()
        lience   = $(':checkbox')[0].checked

        //console.log(lience)
        // console.log(lience)
        // try {
        //     checkUsername()
        //     checkMail()
        //     checkIdcard()
        //     checkPassword()
        //     checkRepwd()
        //     checkNull()
        // } catch (e) {
        //     //alert(e.error)
        // }

        register = checkUsername()
        //console.log(register)
        register = checkMail()
        //console.log(register)
        register = checkIdcard()
        //console.log(register)
        register = checkPassword()
        //console.log(register)
        register = checkRepwd()
        //console.log(register)
        var lin = checkLience()

        //console.log(lin)
        if(register && lin ){
            alert('恭喜你，注册成功。快去登录吧！')
            window.location.href = 'login.html'
        }
    })
    
    function checkUsername(){
        var regUsername = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/
        // console.log(username)
        if(username.length == 0){
            namespan.text('用户名不能为空')
            return false
        }else if(!regUsername.test(username)){
            namespan.text('用户名必须是数字和字母的组合，长度不小于六个字符')
            return false
        }else{
            namespan.text('')
            return true
        }
    }

    function checkMail(){
        var regMail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
       // console.log(mail)
        if(mail.length == 0){
            mailspan.text('邮箱不能为空')
            return false
        }else if(!regMail.test(mail)){
            mailspan.text('邮箱地址必须包含@字符')
            return false
        }else{
            mailspan.text('')
            return true
        }
    }

    function checkIdcard(){
        var regIcard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
        //console.log(idcard)
        if(idcard.length == 0){
            cardspan.text('身份证号不能为空')
            return false
        }else if(!regIcard.test(idcard)){
            cardspan.text('身份证号格式不正确')
            return false
        }else{
            cardspan.text('')
            return true
        }
    }

    function checkPassword(){
        var regPwd = /^\w{8,}$/
        //console.log(password)
        if(password.length == 0){
            pwdspan.text('密码不能为空')
            return false
        }else if(!regPwd.test(password)){
            pwdspan.text('密码必须不少于8个字符')
            return false
        }else{
            pwdspan.text('')
            return true
        }
    }

    function checkRepwd(){
        if(rePwd.length == 0){
            repwdspan.text('确认密码不能为空')
            return false
        }else if(password == rePwd && checkPassword()){
            repwdspan.text('')
            return true
        }else{
            repwdspan.text('请输入正确的确认密码')
            return false
        }
    }

    function checkLience(){
        if(!lience){
            liencebox.text('请勾选')
            return false
        }else{
            liencebox.text('')
            return true
        }
    }

})