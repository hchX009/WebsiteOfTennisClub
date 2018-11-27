/**
 * Created by Administrator on 2018/1/5.
 */
;(function($){

    $.fn.timeLine = function(opt) {
        //设置 默认值
        var defaults = {
            w: 0,   //每一个li的宽度
            n:0,    //点击移动的次数
            btnPrev:"#btnLeft",      //上一个按钮
            btnNext: "#btnRight",  //下一个按钮
            dateBox:"#yearList", //日期的ul盒子
            dateArr: "#yearList li", //保存每一个日期的数组
            conBox:"#cUl",  //保存切换内容的ul盒子
            conArr:"#cUl li" //保存每一个内容的数组
            //init:function(){
            //    var _this=this;
            //}
        };

        opt = $.extend({}, defaults, opt);
        return this.each(function() {
            opt.btnPrev=$(opt.btnPrev);
            opt.btnNext=$(opt.btnNext);
            opt.dateBox=$(opt.dateBox);
            opt.dateArr=$(opt.dateArr);
            opt.conBox=$(opt.conBox);
            opt.conArr=$(opt.conArr);
            var liNum=opt.conArr.length;
            //初始化li的位置
            opt.conArr.each(function(i){
                $(this).css("left",opt.w*i+"px");
            })
            //绑定右边点击事件
            opt.btnNext.on("click",function(){
                if(opt.n<liNum){
                    opt.n++;
                    (opt.n>=liNum)&&(opt.n=0);
                    updata();
                }
            })
            //绑定左边点击事件
            opt.btnPrev.on("click",function(){
                opt.n--;
                (opt.n<0)&&(opt.n=liNum-1);
                updata();
            })

            function updata(){
                opt.conBox.animate({left:-(opt.w*opt.n)+'px'},300);
                opt.dateBox.animate({left:-((90)*opt.n)+'px'},300);
                $(opt.dateArr[opt.n]).addClass("year-active").siblings().removeClass("year-active");
            }
        });
    }



})(jQuery);