var url = window.location.href;
var indexNum = url.lastIndexOf("\=");
var postId=url.slice(indexNum+1);
function initPost() {
    $.ajax({
        type: "post",
        url: "/community" + postId + "/getPost",
        dataType: "json",
        data: "",
        success: function succ(response) {
            $("#responseDiv").append("<div id='posts' class='lt_contentTop_Title'>"
                + "<h1 class=\"lt_contentTop_Title\">" + response.localTitle + "</h1>"
                + "<div class='lt_contentTop_Msg'><a href=''>"
                + "<div class='ltConPic'><img src="+response.headPic+" alt=''/></div>"
                + "<p class='indexTable_sonHead' href='ta.html'>" + response.author + "</p>"
                + "</a>"
                + "<p class='ltCon_detail'>" + response.Body + "</p>"
                + "<li>" + response.pubTime + "</li>"
                + "<li><button class='layui-btn layui-btn-xs' onclick='function liked() {responce[i].like+=1; window.location.reload();}'>赞</button>" + response[i].like + "</li>"
                +"<div id='commentDiv' class='ltCon_pend'>"
                + "<p class='ltCon_pendFont center'>评论区</p>"
                +"</div>"
                + "</div>"
                + "</div>");

            if (response.length > 0) {
                for (var i = 0; i < response.length; i++) {
                    $("#commentDiv").append("<div class='ltCon_pendCen center'>"
                        +"<div class='ltCon_pendCen_left' id=" + response[i].resId + ">"
                        + "<img src="+ response[i].responderHeadPic + "></div>"
                        + " <p class='ltCon_pendCen_right'>" + response[i].responder + "</p>"
                        + "<span>" + response.respondTime + "</span>"
                        + "<p class='ltReplay'>回复 <a href='/ta?Id=" + response.pId + ">" + response.respondeer + "</a> " + response.content + "</p>"
                        + "<div class='ltDo'><span onclick='function reply() {  createElement(<input type=\"text\" placeholder=\"加入讨论吧\" value=\"@\" id=\"comment\">)}'>回复</span></div>"
                        + "</div>");
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