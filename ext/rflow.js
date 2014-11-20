/**
 * Created by krzysztofr on 18.11.2014.
 */
/* ą */


$(document).ready(function() {



//global
    var timer = $.timer(function() {
        //alert('This message was sent by a timer.');
        //console.log('timer fire');
        search_block_check();
        timer.stop();
    });

    timer.set({ time : 10000, autostart : false }); //5000 = 5 sec





    //console.log( "doc ready" );
    ExternalLinks();
    $("a[rel*=leanModal]").leanModal({ top : 20, overlay : 0.4, closeButton: ".modal_close" });
    $("#menu_tool_logout").leanModal({ top : 20, overlay : 0.4, closeButton: ".modal_close" });
    $("#add_new_activity").leanModal({ top : 20, overlay : 0.4, closeButton: ".modal_close" });


    //attach new action menu
    var p = $("#menu_top_activities_new_task");
    var offset = p.offset();
    $("#menu_top_activities_new_task_link").offset({ top: offset.top + $("#menu_top_activities_new_task").outerHeight(), left: offset.left})

    //set menu icons
    var menudivs = $('.lmenu_item_background');
    TweenLite.to(menudivs, 0, {alpha:0.6});






    //calculate left menu bar and logo position
    function stretch_left_menu() {

        //stretch left menu
        //console.log($("#content").outerHeight(true));

        if($("#content").outerHeight(true)>$("#menu_left").outerHeight(true))
        {
            $("#menu_left").css('height', $("#content").outerHeight(true) + 'px');
        }
        else
        {
            $("#menu_left").css('height', $("#content").outerHeight(true) + 'px');
        }

        //console.log($("#menu_left").outerHeight(true));
        $("#menu_left_logo").css('margin-top','50px');
        //set logo
        $("#menu_left_logo").css('margin-top', $("#menu_left").outerHeight(true) - $("#menu_left_buttons_all").outerHeight(true) - $("#menu_left_logo").outerHeight(true) +50 + 'px');


    }//stretch_left_menu


    //this funcrion called after every collapse/hide
    stretch_left_menu();








    $('.docs_table_body_row').each(function() {
        //console.log($(this).outerHeight());
        $(this).find('.docs_table_cell').css('height', $(this).outerHeight() -20 + 'px');
    });

    //$(".docs_table_cell").css('height','50px');
    //var maxHeight = Math.max.apply(null, $("div.panel").map(function ()
    //{
    //return $(this).height();
    //}).get());



//on window resize calculations
    $(window).resize(function(){

        var windowWidth = $(window).width(); //retrieve current window width
        var windowHeight = $(window).height(); //retrieve current window height
        var documentWidth = $(document).width(); //retrieve current document width
        var documentHeight = $(document).height(); //retrieve current document height
        var vScrollPosition = $(document).scrollTop(); //retrieve the document scroll ToP position
        var hScrollPosition = $(document).scrollLeft(); //retrieve the document scroll Left position

//console.log(windowWidth + 'x' + windowHeight);


    }); //onresize




    /* popup =============================================================================== */

    $('#logout_popup_no').mouseenter(function() {
        $(this).css('cursor','pointer');
    });

    $('#logout_popup_no').mouseleave(function() {
    });

    $('#logout_popup_yes').mouseenter(function() {
        $(this).css('cursor','pointer');
    });

    $('#logout_popup_yes').mouseleave(function() {
    });

    $('#logout_popup_yes').click(function() {
        //window.location.href = './wyloguj'
        var gotourl = $(this).attr('rfurl');
        window.location.href = gotourl;
    });


    $('#lean_overlay').mouseenter(function() {
        $('.menu_tool').find('.menu_tool_txt').hide();
        //console.log('overlay');
    });


    /* popup =============================================================================== */










    /* expand =============================================================================== */

    $('#tasks_actual_expand_all').click(function() {
        //alert('expand all');

        $(this).parent().parent().parent().find('.actual_entry_container').slideDown("fast", function() {
            // Animation complete.
            stretch_left_menu();
        });
        $(this).parent().parent().parent().find('.actual_entry').find('.collapse_switch > a').html('Zwiń');
        $(this).parent().parent().parent().find('.actual_entry').find('.collapse_switch_collapsed > a').html('Zwiń');

        $(this).parent().parent().parent().find('.actual_entry').find('.collapse_switch_collapsed').addClass('collapse_switch').removeClass('collapse_switch_collapsed');

        stretch_left_menu();
        //$(this).parent().parent().parent().find('.actual_entry_container').find('.collapse_switch').addClass('collapse_switch_collapsed').removeClass('collapse_switch');
    });


    //$('.collapse_switch').click(function() {
    //$('.collapse_switch').on('click', function() {
    $(document).on("click",".collapse_switch", function () {
        //alert('collapse click');

        //check state
        if($(this).parent().parent().parent().find('.actual_entry_container').is(":hidden"))
        {
            //hidden=pokaz
            $(this).find('a').html('Zwiń');
            $(this).addClass('collapse_switch').removeClass('collapse_switch_collapsed');
        }
        else
        {
            //visible=ukrywam
            //console.log($(this).find('a').html());
            $(this).find('a').html('Rozwiń');
            $(this).addClass('collapse_switch_collapsed').removeClass('collapse_switch');
        }

        $(this).parent().parent().parent().find('.actual_entry_container').slideToggle("fast", function() {
            // Animation complete.
            stretch_left_menu();
        });

    });




    $('.c2_my_actual_tab_cell').click(function() {
        //$('.c2_my_actual_tab_cell').on('click', function() {

        if($(this).hasClass('btn'))
        {
            //alert('tab');
            //console.log($(this).find('span').attr('id'));
            var get_cnt = $(this).find('span').attr('id');
            get_cnt =	get_cnt.replace(/tab_/g,'content_');
            //console.log(get_cnt);


            $(this).addClass('tab_cell_active');
            $('.c2_my_actual_tabs').find('.c2_my_actual_tab_cell').not(this).removeClass('tab_cell_active');

            $('#actual_activities_container').hide();
            $('#actual_activities_container').html($('#'+get_cnt).html()).fadeIn(0, function() {
                // Animation complete.
                stretch_left_menu();
            });

        }//if
    });



    $('.actual_entry_title > a').mouseenter(function() {
        //$(this).parent().parent().parent().css('background','#fce7ea');
        $(this).parent().parent().parent().addClass('entry_over');
    });

    $('.actual_entry_title > a').mouseleave(function() {
        $(this).parent().parent().parent().removeClass('entry_over');
    });



    //start
    //on page load all
    $('#tab_actual_all').trigger("click");



    /* ====================================================================================== */






    $('.activity_show_all_btn').mouseenter(function() {
        var thisdiv = $(this).parent();
        TweenLite.to(thisdiv, 1, {backgroundColor:'#0189b5'});
        //$(this).parent().css('background','black');
    });

    $('.activity_show_all_btn').mouseleave(function() {
        var thisdiv = $(this).parent();
        TweenLite.to(thisdiv, 1, {backgroundColor:'#0199c9'});
        //$(this).parent().css('background','black');
    });




    /* subs =============================================================================== */


    $('.sub_entry').mouseenter(function() {
        $(this).css('cursor','pointer');
        $(this).find('.sub_entry_name').css( "text-decoration","underline");
    });

    $('.sub_entry').mouseleave(function() {
        $(this).find('.sub_entry_name').css( "text-decoration","none");
    });

    $('.sub_entry').click(function() {
        var gotourl = $(this).attr('rfurl');
        if(gotourl)
        {
            window.location.href = gotourl;
        }
    });


    /* subs =============================================================================== */


    /* left menu =============================================================================== */

    $('#menu_left_logo').mouseenter(function() {
        $(this).css('cursor','pointer');
    });

    $('#menu_left_logo').mouseleave(function() {
    });

    $('#menu_left_logo').click(function() {
        window.open('http://r-flow.pl');
        return false;
    });




    $('.lmenu_item').mouseenter(function() {
        //alert('a');
        $(this).css('cursor','pointer');
        $(this).css('background','#016b8c');

        var back_img = $(this).find('.lmenu_item_background').css( "background-image");
        back_img =	back_img.replace(/ico/g,'ico_hover');
        //console.log(back_img);
        $(this).find('.lmenu_item_background').css( "background-image",back_img);


        var thisdiv = $(this).find('.lmenu_item_background');
        TweenLite.to(thisdiv, 0.5, {alpha:1});

        if($(this).hasClass("has_submenu"))
        {
            $(this).find('.lmenu_item_arrow').show();
        }
    });



    $('.lmenu_item').mouseleave(function() {
        $(this).css('background','#0199c9');

        var back_img = $(this).find('.lmenu_item_background').css( "background-image");
        back_img =	back_img.replace(/ico_hover/g,'ico')
        //console.log(back_img);
        $(this).find('.lmenu_item_background').css( "background-image",back_img);

        var thisdiv = $(this).find('.lmenu_item_background');
        TweenLite.to(thisdiv, 0.5, {alpha:0.6,});
        $(this).find('.lmenu_item_arrow').fadeOut(0);
        $(this).find('.lmenu_item_slidemenu').fadeOut(200);
    });




    $('.lmenu_item').click(function() {


        if($(this).hasClass("has_submenu"))
        {
            if($(this).find('.lmenu_item_arrow').is(":visible"))
            {
                $(this).find('.lmenu_item_arrow').fadeOut(200);
                $(this).find('.lmenu_item_slidemenu').fadeIn(200);
            }
            else
            {
                $(this).find('.lmenu_item_arrow').fadeIn(200);
                $(this).find('.lmenu_item_slidemenu').fadeOut(200);
            }
        }
        else
        {
            //redirect to url
            var gotourl = $(this).attr('rfurl');
            if(gotourl)
            {
                window.location.href = gotourl;
            }

        }

    });//click function





    $('.lmenu_item_slidemenu').mouseenter(function() {
        $(this).css('cursor','auto');
    });

    /* left menu =============================================================================== */




    /* activities new =============================================================================== */

    $('#menu_top_activities_new_task').mouseenter(function() {
        $(this).css('cursor','pointer');
        //$("#menu_top_activities_new_task_link").fadeIn(400);
        //$("#menu_top_activities_new_task_link").show();
    });

    $('#menu_top_activities_new_task').mouseleave(function() {
        //$("#menu_top_activities_new_task_link").fadeOut(400);
        //$("#menu_top_activities_new_task_link").hide();
        $("#menu_top_activities_new_task_link").fadeOut(200);
        $("#menu_top_activities_new_task_container").fadeOut(200);
    });



    $('#menu_top_activities_new_task').click(function() {
        //$("#menu_top_activities_new_task_link").fadeOut(400);

        if($(this).find('#menu_top_activities_new_task_container').is(":visible"))
        {
            $("#menu_top_activities_new_task_link").fadeOut(200);
            $("#menu_top_activities_new_task_container").fadeOut(200);
        }
        else
        {
            $("#menu_top_activities_new_task_link").fadeIn(200);
            $("#menu_top_activities_new_task_container").fadeIn(200);
        }
    });






    $('#menu_top_activities_new_task_link').mouseenter(function() {
        $(this).css('cursor','auto');
    });

    $('#menu_top_activities_new_task_container').mouseenter(function() {
        $(this).css('cursor','auto');
    });





    $('#menu_top_activities_add_file').mouseenter(function() {
        $(this).css('cursor','pointer');
    });

    $('#menu_top_activities_add_file').mouseleave(function() {
    });


    $('#menu_top_activities_add_file').click(function() {
        window.location.href = "upload/dodaj.php";
    });


    $('.menu_top_activity').mouseenter(function() {
        $(this).css('cursor','pointer');
        //$(this).css('background','#0199c9');
        //$(this).css('border-color','#34add4');
        var thisdiv = $(this);
        TweenLite.to(thisdiv, 0, {backgroundColor:'#0199c9'});
        TweenLite.to(thisdiv, 0, {borderColor:'#34add4'});
    });


    $('.menu_top_activity').mouseleave(function() {
        //$(this).css('background','#dd152d');
        //$(this).css('border-color','#e44457');
        var thisdiv = $(this);
        TweenLite.to(thisdiv, 0.3, {backgroundColor:'#dd152d'});
        TweenLite.to(thisdiv, 0.3, {borderColor:'#e44457'});
    });


    $('.menu_top_activity').click(function() {
        var gotourl = $(this).attr('rfurl');
        window.location.href = gotourl;
    });


    /* activities new =============================================================================== */






    /* activities left =============================================================================== */


    $('.menu_left_activity').mouseenter(function() {
        $(this).css('cursor','pointer');
        //$(this).css('background','#0199c9');
        //$(this).css('border-color','#34add4');
        var thisdiv = $(this);
        TweenLite.to(thisdiv, 0, {backgroundColor:'#0199c9'});
        TweenLite.to(thisdiv, 0, {borderColor:'#34add4'});
    });


    $('.menu_left_activity').mouseleave(function() {
        //$(this).css('background','#dd152d');
        //$(this).css('border-color','#e44457');
        var thisdiv = $(this);
        TweenLite.to(thisdiv, 0.3, {backgroundColor:'#dd152d'});
        TweenLite.to(thisdiv, 0.3, {borderColor:'#e44457'});
    });


    $('.menu_left_activity').click(function() {
        var gotourl = $(this).attr('rfurl');
        window.location.href = gotourl;
    });



    /* activities left =============================================================================== */










    /* slide menu =============================================================================== */

    $('#menu_tool_logout').mouseenter(function() {
        $(this).css('cursor','pointer');
        var thisdiv = $(this);
        TweenLite.to(thisdiv, 0.4, {width:118, onComplete:showLabel_logout});
        $('.menu_tool').not(this).find('.menu_tool_txt').hide();
        search_block_check();
    });

    $('#menu_tool_logout').mouseleave(function() {
        var thisdiv = $(this);
        TweenLite.to(thisdiv, 0.4, {width:40, onComplete:hideLabel_logout()});
    });


    $('#menu_tool_logout').click(function() {
        //alert('logout overlay');
        $('.menu_tool').find('.menu_tool_txt').hide();
    });


    function showLabel_logout() {
        $('#menu_tool_logout_txt').show();
        var thisdiv = $('#menu_tool_logout_txt');
        TweenLite.to(thisdiv, 0, {alpha:0});
        TweenLite.to(thisdiv, 0.1, {alpha:1});
    }//show label_to


    function hideLabel_logout() {
        var thisdiv = $('#menu_tool_logout_txt');
        TweenLite.to(thisdiv, 0.2, {alpha:0});
        setTimeout(function() {
            $('#menu_tool_logout_txt').hide();
            //console.log('hide');
        }, 150);
        //$('#menu_tool_logout_txt').hide();
    }//show label_to




    function search_block_check() {

        var check_search = $('#menu_tool_search').width();

        if(parseInt(check_search) > 40)
        {
            //alert(check_search);
            var thisdiv = $('#menu_tool_search');
            TweenLite.to(thisdiv, 0.4, {width:40, delay: 0, onComplete:hideLabel_search()});
        }

        var search_val = $('#top_search_input').val();
        //console.log(search_val);
        if(search_val == '')
        {
            $('#top_search_input').val('Szukana fraza');
        }//if


    }//search_block_check








    $('#menu_tool_settings').mouseenter(function() {
        $(this).css('cursor','pointer');
        var thisdiv = $(this);
        TweenLite.to(thisdiv, 0.4, {width:143, onComplete:showLabel_settings});
        $('.menu_tool').not(this).find('.menu_tool_txt').hide();
        search_block_check();
    });

    $('#menu_tool_settings').mouseleave(function() {
        var thisdiv = $(this);
        TweenLite.to(thisdiv, 0.4, {width:40, onComplete:hideLabel_settings()});
    });


    $('#menu_tool_settings').click(function() {
        //alert('go to settings url');
        //window.location.href = './ustawienia'
        var gotourl = $(this).attr('rfurl');
        window.location.href = gotourl;
    });


    function showLabel_settings() {
        $('#menu_tool_settings_txt').show();
        var thisdiv = $('#menu_tool_settings_txt');
        TweenLite.to(thisdiv, 0, {alpha:0});
        TweenLite.to(thisdiv, 0.1, {alpha:1});
    }//show label_to


    function hideLabel_settings() {
        var thisdiv = $('#menu_tool_settings_txt');
        TweenLite.to(thisdiv, 0.2, {alpha:0});
        setTimeout(function() {
            $('#menu_tool_settings_txt').hide();
            //console.log('hide');
        }, 150);
        //$('#menu_tool_logout_txt').hide();
    }//show label_to









    $('#menu_tool_team').mouseenter(function() {
        $(this).css('cursor','pointer');
        var thisdiv = $(this);
        TweenLite.to(thisdiv, 0.4, {width:120, onComplete:showLabel_team});
        $('.menu_tool').not(this).find('.menu_tool_txt').hide();
        search_block_check();
    });

    $('#menu_tool_team').mouseleave(function() {
        var thisdiv = $(this);
        TweenLite.to(thisdiv, 0.4, {width:40, onComplete:hideLabel_team()});
    });


    $('#menu_tool_team').click(function() {
        //alert('go to settings url');
        //window.location.href = './moj_zespol'
        var gotourl = $(this).attr('rfurl');
        window.location.href = gotourl;
    });


    function showLabel_team() {
        $('#menu_tool_team_txt').show();
        var thisdiv = $('#menu_tool_team_txt');
        TweenLite.to(thisdiv, 0, {alpha:0});
        TweenLite.to(thisdiv, 0.1, {alpha:1});
    }//show label_to


    function hideLabel_team() {
        var thisdiv = $('#menu_tool_team_txt');
        TweenLite.to(thisdiv, 0.2, {alpha:0});
        //$('#menu_tool_logout_txt').hide();
        setTimeout(function() {
            $('#menu_tool_team_txt').hide();
            //console.log('hide');
        }, 150);
    }//show label_to



















    $('#menu_tool_search').mouseenter(function() {
        //$(this).css('cursor','pointer');
        var checker = $(this).width();
        //console.log(checker);
        timer.stop();


        if(parseInt(checker) < 250)
        {
            var thisdiv = $(this);
            TweenLite.to(thisdiv, 0.4, {width:250, onComplete:showLabel_search});
            $('.menu_tool').not(this).find('.menu_tool_txt').hide();
        }
    });


    $('#menu_tool_search').mouseleave(function(e) {
        // new element is: e.toElement || e.relatedTarget
        //console.log(e.relatedTarget.id);
        //console.log($("#" + e.relatedTarget.id).hasClass("menu_tool"));

        var hidesearch = $("#" + e.relatedTarget.id).hasClass("menu_tool");

        if(hidesearch)
        {
            var thisdiv = $(this);
            TweenLite.to(thisdiv, 0.4, {width:40, delay: 0, onComplete:hideLabel_search()});
        }
        else
        {
            timer.play(true); //timer.play(reset);
        }

    });


    $('#menu_tool_search').click(function() {
    });


    function showLabel_search() {
        $('#menu_tool_search_txt').show();
        //$("#menu_tool_search_txt :input").focus();
        //$("#top_search_input").focus();
        var thisdiv = $('#menu_tool_search_txt');
        TweenLite.to(thisdiv, 0, {alpha:0});
        TweenLite.to(thisdiv, 0.1, {alpha:1});
    }//show label_to


    function hideLabel_search() {
        var thisdiv = $('#menu_tool_search_txt');
        TweenLite.to(thisdiv, 0.05, {alpha:0});
        //$('#menu_tool_logout_txt').hide();
        setTimeout(function() {
            $('#menu_tool_search_txt').hide();
            //console.log('hide');
        }, 150);
    }//show label_to




    $('#top_search_input').focus(function() {
        if(this.value == 'Szukana fraza')
        {
            $(this).val('');
        }//if
    });


    $('#top_search_input').blur(function() {
        if(this.value == '')
        {
            //$(this).val('Szukana fraza');
        }//if
    });


    $('#menu_tool_search_submit').mouseenter(function() {
        $(this).css('cursor','pointer');
    });

    $('#menu_tool_search_submit').mouseleave(function() {
    });


    $('#menu_tool_search_submit').click(function() {

        var input_val = $('#top_search_input').val();
        //console.log(input_val);
        if(input_val == '' || input_val == 'Szukana fraza')
        {
            $('#top_search_input').focus();
        }
        else
        {
            $('#search_form').submit();
        }
    });//search click






    $('#search_form').submit(function(){
        var search_val = $('#top_search_input').val();
        //console.log(search_val);
        if(search_val == '')
        {
            return false;
        }//if
    });//search submit



    /* slide menu =============================================================================== */



});
//document ready