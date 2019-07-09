let comment=$("#comment").val();
let p=document.getElementById("resp");
let pId=p.parentNode.id;//为什么给我报错？？？
function sendComment(){
    $.ajax({
        type:"post",
        url:"/community/respond",
        dataType:"json",
        data: {
            "pId":pId,
            "comment":comment,
        },
        success:alert("发表成功"),
        error:alert("发送失败，请重新发送！")
    })
}