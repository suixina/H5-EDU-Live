$(".indexTable li").click(function(){
    var indexs=$(this).index();
    $(".indexTable li").removeClass("on").eq(indexs).addClass("on");
    $(".indexTable_con").hide().eq(indexs).show();
});
function queryTitle(){
    var search=$("#search");
    $.ajax({
        type:"post",
        url : "/community",/*+postId + "/getPost"*/
        dataType:"json",
        data:"search",
        success:function succ(postList) {
            for(let i=0;i<postList.length;i++){
                if(postList.length>0){
                    $("#postDiv").append("<div class='indexTable_son' style='display: block'>"+postList[i].postId
                        +"<div class='inHeadPic'><img src="+postList[i].headPic+"alt=''></div>"
                        +"<a class=\"indexTable_sonHead\" href='ta.html'>"+postList[i].author+"</a>"+"</div>"
                        +"<div class=\"indexTableCon\">"
                        +"<h1><a href='/lt_content?postId="+postList[i].postId+"'></a>"+postList[i].localTitle+"</h1>"
                        // +"<p>"+postList[i].mBody+"</p>"
                        +"<ul class=\"indexTable_conFoot clearfix\">"
                        +"<li>"+postList[i].pubTime+"</li>"
                        +"<li><a href=\"lt_content.html\">评论</a>"+postList[i].heat+"</li>"
                        +"<li>最新回复时间："+postList[i].latestTime+"</li>"
                        +"</ul>"
                        +"</div>");
                }
                else{
                    alert(postList.status);
                }
            }
            error:function err(){
                alert("没有内容")
            }
        }
    });
}
    $.ajax({
        type:"post",
        url : "/community",/*+postId + "/getPost"*/
        dataType:"json",
        data:"indexs",
        success:function succ(postList) {
            for(let i=0;i<postList.length;i++){
                if(postList.length>0){
                    $("#postDiv").append("<div class='indexTable_son' style='display: block'>"+postList[i].postId
                        +"<div class='inHeadPic'><img src="+postList[i].headPic+"alt=''></div>"
                        +"<a class=\"indexTable_sonHead\" href='ta.html'>"+postList[i].author+"</a>"+"</div>"
                        +"<div class=\"indexTableCon\">"
                        +"<h1><a href='/lt_content?postId="+postList[i].postId+"'></a>"+postList[i].localTitle+"</h1>"
                        // +"<p>"+postList[i].mBody+"</p>"
                        +"<ul class=\"indexTable_conFoot clearfix\">"
                        +"<li>"+postList[i].pubTime+"</li>"
                        +"<li><a href=\"lt_content.html\">评论</a>"+postList[i].heat+"</li>"
                        +"<li>最新回复时间："+postList[i].latestTime+"</li>"
                        +"</ul>"
                        +"</div>");
                }
                else{
                    alert(postList.status);
                }
            }
        error:function err(){
                alert("糟糕，出错了！")
            }
        }
    });
