
$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        //$("h1").text("Hello");
        var numberOfListItem = $("li#choices").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li#choices").eq(randomChildNumber).text());
        //找到img元件 V
        //設定img元件的src屬性 -> 對應元件的title值
        $("Img").attr("src",$("li#choices").eq(randomChildNumber).attr("title"));
    });
});