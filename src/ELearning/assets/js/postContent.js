let url = window.location.href;
let indexNum = url.lastIndexOf("\=");
let postId=url.slice(indexNum+1);
let responseDiv=$("#responseDiv").val();
$.ajax({
        type: "post",
        url: "/community" + postId + "/getPost",
        dataType: "json",
        data:postId,
        success: function succ(response) {
            responseDiv.append("<div id='posts' class='lt_contentTop_Title'>"
                + "<h1 class=\"lt_contentTop_Title\">" + response.title + "</h1>"
                + "<div class='lt_contentTop_Msg'><a href='ta.html'>"
                + "<div class='ltConPic'><img src=" + response.headPic + " alt=''/></div>"
                + "<p class='indexTable_sonHead' href='ta.html'>" + response.author + "</p>"
                + "</a>"
                + "<p class='ltCon_detail'>" + response.body + "</p>"
                + "<li>" + response.pubTime + "</li>"
                // + "<li><button class='layui-btn layui-btn-xs' onclick='function liked() {response.like+=1; window.location.reload();}'>赞</button>" + response[i].like + "</li>"
                + "<div id='commentDiv' class='ltCon_pend'>"
                + "<p class='ltCon_pendFont center'>评论区</p>"
                + "</div>"
                + "</div>"
                + "</div>");
            let responses = response.resonses;
            if (responses.length > 0) {
                for (let i = 0; i < response.length; i++) {
                    responseDiv.append("<div class='ltCon_pendCen center'>"
                        + "<div class='ltCon_pendCen_left' id=" + responses[i].resId + ">"
                        + "<img src=" + responses[i].responderHeadPic + "alt=''/>"
                        + " <p class='ltCon_pendCen_right'>" + responses[i].responder + "</p>"
                        + "<span>" + responses[i].respondTime + "</span>"
                        + "<span id='resp' onclick='sendComment()'>回复</span>"
                        + "<p class='ltReplay'>回复 <a href='/ta?Id=" + responses[i].pId + ">" + response.respondeer + "</a> " + response.content + "</p>"
                        + "</div>"
                        + "</div>");
                    /* function reply() {
                        responseDiv.append("<input type='text'  value='@' id='comment' placeholder='加入讨论吧''>");
                     }
                     responseDiv.append( "<div class='ltDo'><span onclick='reply()'>回复</span></div>")*/
                }
            } else {
                alert(response.status);
            }
        },
     error:alert("糟糕，出错了！"),
    });
let comment=$("#comment").val();
let p=document.getElementById("resp");
let pId=p.parentNode.id;//为什么给我报错？？？
function sendComment(){
    alert("111");
    $.ajax({
        type:"post",
        url:"/community/respond",
        dataType:"json",
        data: "pId",//从哪儿获取
            // "comment":comment,
        success:function send(succ){
            if(succ===1)
            alert("发表成功！");
            alert("发送失败！")
        },
        error:alert("发送失败，请重新发送！"),
    });
}
