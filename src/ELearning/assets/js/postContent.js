var url = window.location.href;
var indexNum = url.lastIndexOf("\=");
var postId=url.slice(indexNum+1);
function initPost() {
    var responseDiv=$("#responseDiv")
    $.ajax({
        type: "post",
        url: "/community" + postId + "/getPost",
        dataType: "json",
        data:"",
        success: function succ(response) {
            responseDiv.append("<div id='posts' class='lt_contentTop_Title'>"
                + "<h1 class=\"lt_contentTop_Title\">" + response.title + "</h1>"
                + "<div class='lt_contentTop_Msg'><a href='ta.html'>"
                + "<div class='ltConPic'><img src="+response.headPic+" alt=''/></div>"
                + "<p class='indexTable_sonHead' href='ta.html'>" + response.author + "</p>"
                + "</a>"
                + "<p class='ltCon_detail'>" + response.body + "</p>"
                + "<li>" + response.pubTime + "</li>"
                // + "<li><button class='layui-btn layui-btn-xs' onclick='function liked() {response.like+=1; window.location.reload();}'>赞</button>" + response[i].like + "</li>"
                +"<div id='commentDiv' class='ltCon_pend'>"
                + "<p class='ltCon_pendFont center'>评论区</p>"
                +"</div>"
                + "</div>"
                + "</div>");
            let responses=response.resonses;
            if (responses.length > 0) {
                for (let i = 0; i < response.length; i++) {
                    responseDiv.append("<div class='ltCon_pendCen center'>"
                        +"<div class='ltCon_pendCen_left' id=" + responses[i].resId + ">"
                        + "<img src="+ responses[i].responderHeadPic + "alt=''/>"
                        + " <p class='ltCon_pendCen_right'>" + responses[i].responder + "</p>"
                        + "<span>" + responses[i].respondTime + "</span>"
                        +"<span id='resp' onclick='sendComment()'>回复</span>"
                        + "<p class='ltReplay'>回复 <a href='/ta?Id=" + responses[i].pId + ">" + response.respondeer + "</a> " + response.content + "</p>"
                        +"</div>"
                        + "</div>");
                   /* function reply() {
                       responseDiv.append("<input type='text'  value='@' id='comment' placeholder='加入讨论吧''>");
                    }
                    responseDiv.append( "<div class='ltDo'><span onclick='reply()'>回复</span></div>")*/
                }
            } else {
                alert(response.status);
            }
            error:function err() {
                alert("糟糕，出错了！")
            }
        }
    });
}