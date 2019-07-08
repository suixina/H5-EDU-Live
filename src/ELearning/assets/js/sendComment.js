let comment=$("#comment").val();
let pubTime=document.getElementById("comment").click();
function sendComment(){
    $.ajax({
        type:"post",
        url:"/community" + postId + "/getPost",
        dataType:"json",
        data: {
            "response.Id":Id,
            "comment":comment,
            "pubTime":pubTime.getTime(),
        },
        success:alert("发表成功"),
        error:alert("发送失败，请重新发送！")
    })
}