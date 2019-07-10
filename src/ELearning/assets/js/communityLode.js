/*$(".indexTable li").click(function(){
    var indexs=$(this).index();
    $(".indexTable li").removeClass("on").eq(indexs).addClass("on");
    $(".indexTable_con").hide().eq(indexs).show();
});*/
function queryTitle(){
    let search=$("#search").val();
    $.ajax({
        type:"post",
        url : "/community/summaries",/*+postId + "/getPost"*/
        dataType:"json",
        data:search,
        success:function succ(postList) {
            for(let users in postList) {
                $("#postDiv").append("<div class='indexTable_son' style='display: block'>" + users.postId
                    + "<div class='inHeadPic'><img src=" + users.headPic + "alt=''></div>"
                    + "<a class=\"indexTable_sonHead\" href='ta.html'>" + users.author + "</a>" + "</div>"
                    + "<div class=\"indexTableCon\">"
                    + "<h1><a href='/lt_content?postId=" + users.postId + "'></a>" + users.title + "</h1>"
                    // +"<p>"+postList[i].mBody+"</p>"
                    + "<ul class=\"indexTable_conFoot clearfix\">"
                    + "<li>" + users.pubTime + "</li>"
                    + "<li><a href=\"lt_content.html\">评论</a>" + users.heat + "</li>"
                    + "<li>最新回复时间：" +users.latestTime + "</li>"
                    + "</ul>"
                    + "</div>");
                }
            },
            error:function err(){
                alert("没有内容")//可以弹
            }
    });
}
$.ajax({
        type:"post",
        url : "/community/summaries",/*+postId + "/getPost"*/
        dataType:"json",
        data:"",
        success:function succ(postList) {
            for (let i = 0; i < postList.length; i++) {
                if (postList.length > 0) {
                    $("#postDiv").append("<div class='indexTable_son' style='display: block'>" + postList[i].postId
                        + "<div class='inHeadPic'><img src=" + postList[i].headPic + "alt=''></div>"
                        + "<a class=\"indexTable_sonHead\" href='ta.html'>" + postList[i].author + "</a>" + "</div>"
                        + "<div class=\"indexTableCon\">"
                        + "<h1><a href='/lt_content?postId=" + postList[i].postId + "'></a>" + postList[i].title + "</h1>"
                        // +"<p>"+postList[i].mBody+"</p>"
                        + "<ul class=\"indexTable_conFoot clearfix\">"
                        + "<li>" + postList[i].pubTime + "</li>"
                        + "<li><a href=\"lt_content.html\">评论</a>" + postList[i].heat + "</li>"
                        + "<li>最新回复时间：" + postList[i].latestTime + "</li>"
                        + "</ul>"
                        + "</div>");
                } else {
                    alert(postList.status);
                }
            }
        },
        error:alert("糟糕，出错了！"),//可以弹
    });
