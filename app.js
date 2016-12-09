$(document).ready(function () {

    var $navbar = $('#nav-bar');
    var $header = $('.header-hero');
    var $hero_text = $header.children();

    /******************************/
    /*  
    /* Change opacity for hero-text.
    /*
    /*****************************/
    var fadestart = $header.height() / 32;
    var fadeUntil = 420;
    var opacity = 0;

    /***********************************/
    /*  
    /* Navigation bar when scrolling or refreshing.
    /*
    /***********************************/
    var header_height = $header.height();
    var navbar_height = $navbar.height();
    var whenToChange = header_height - navbar_height - 40;

    /* if user refreshing page, load navbar */
    if ($navbar.offset().top <= whenToChange) {
        $navbar.removeClass('background-dark');
        $navbar.find('.brand').removeClass('brand-show');
    } else {
        $navbar.addClass('background-dark');
        $navbar.find('.brand').addClass('brand-show');
    }

    $(window).scroll(function () {
        var $scroll = $(window).scrollTop();

        /* Change opacity for hero-text */
        if ($scroll <= fadestart) { 
            opacity = 1;
        } else if ($scroll <= fadeUntil) {
            opacity = 1 - $scroll / fadeUntil;
        }
        $hero_text.css({
            'opacity': opacity
        })
        
        /* Nav-bar when scrolling */
        if ($scroll > whenToChange) { 
            $navbar.addClass('background-dark');
            if ($('#menu-btn').hasClass('active') === false) {
                $navbar.find('.brand').addClass('brand-show');
            }
        } else if ($scroll < whenToChange) {
            $navbar.removeClass('background-dark');
            $navbar.find('.brand').removeClass('brand-show');
        }
    });

    /***********************************/
    /*  
    /* Related to menu.
    /*
    /***********************************/
    /* Click to menu-btn and show or hide menu */
    $('#menu-btn').on('click', function () {
        var $page = $('.page'),
            $menu = $('.menu'),
            $menu_width = $menu.width(),
            $hamburger = $('.hamburger'),
            $navbar_brand = $navbar.find('.brand');

        $hamburger.toggleClass("is-active");

        if ($(this).hasClass('active')) {
            
               
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $('.nav-bar').animate({'left':'0px'});
    }   
            $page.animate({
                'left': '0px'
            });
            $menu.animate({
                'left': '-' + $menu_width
            });
            $(this).removeClass('active');

            if ($navbar.offset().top >= whenToChange && $navbar_brand.hasClass('brand-show') === false) {
                $navbar_brand.addClass('brand-show');
            }

        } else {
      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $('.nav-bar').animate({'left':$menu_width});
    }            
            $(this).addClass('active');
            $page.addClass('p_relative');
            $page.animate({
                'left': $menu_width
            });
            $menu.animate({
                'left': '0px'
            });
            $menu.css({
                'position': 'fixed'
            });

            if ($navbar_brand.hasClass('brand-show') === true) {
                $navbar_brand.removeClass('brand-show');
            }
        }
    });

    /* Show text to put in head when you click in ' install ' in menu. */
    $('#menu-install').on('click', function () {
        $('.text-to-head').show();
    })

    /* When click on anchor, add 100px to top otherwise navbar is hiding the text */
    window.addEventListener("hashchange", function () {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    });

    /* Remove the anchor when the use click on a element. */
    $(window).on('hashchange', function(e){
        history.replaceState ("", document.title, e.originalEvent.oldURL);
    });

    /***********************************/
    /*  
    /* Make custom framework.
    /*
    /***********************************/
    var el_selected = [];

    var $custom_dl = $('.custom-dl');
    var $ckbx = $('.ckbx');

    // Do it to < only because we want to ignore ClaCSS box choice.
    for (var i = 0; i < $ckbx.length; i++) {
        if ($ckbx.eq(i).hasClass('selected')) {
            var id_associated = $ckbx.eq(i).attr('id');
            el_selected.push(id_associated);
        }
    }

    /* The checkbox make it green (selected) or grey (unselected) */
    $ckbx.on('click', function (event) {
        event.preventDefault();
        
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
            $(this).addClass('unselected');
            var u = $(this).attr('id');
            var i = el_selected.indexOf(u);
            el_selected.splice(i, 1);
        } else {
            $(this).removeClass('unselected');
            $(this).addClass('selected');
            var u = $(this).attr('id');
/*
            if (u === 'basesign_light') {
                el_selected.splice(0, 0, u);
            } else {
*/
                el_selected.push(u);
          //  }
        }
    })

    function button_to_right() {
        var c_width = $('.custom-dl-btn').outerWidth();
        var butt_width = $('#create').outerWidth();
        var good_right = '-' + (c_width - butt_width);
        if ($('#create').hasClass('custom-btn')) {
            $('#create').css({
                'right': good_right + 'px'
            });
        }
    }

    button_to_right();
    $(window).resize(function () {
        button_to_right();
    });

   var textem = '';
    $('.custom-dl-btn button').on('click', function () {
        /* Copy allText from a file */
        function readTextFile(file) {
            var allText;
            $.ajax({
                url: "Carver/stylesheets/" + file + ".css",
                async: false,
                dataType: 'text',
                success: function (data) {
                    allText = data;
                },
            })

            return allText;
        }

        /* Select each file and launch function to copy */ 
        for (var i = 0; i < el_selected.length; i++) {
            if (el_selected[i] !== 'claCss') {
                textem += readTextFile(el_selected[i]);
        }
        }

        /* Make downloadable link and launch it to user */ 
        (function () {
            var textFile = null,
                makeTextFile = function (text) {
                    var data = new Blob([text], {
                        type: 'text/plain'
                    });

                    // If we are replacing a previously generated file we need to
                    // manually revoke the object URL to avoid memory leaks.
                    if (textFile !== null) {
                        window.URL.revokeObjectURL(textFile);
                    }

                    textFile = window.URL.createObjectURL(data);

                    return textFile;
                };

            var $create = $('#create');
            var link = document.createElement('a');
            link.setAttribute('download', 'Carver.css');
            link.href = makeTextFile(textem);
            document.body.appendChild(link);

            function btn_clicked() {
                $create.removeClass('custom-btn');
                $create.addClass('move-to-left');
                $create.animate({
                    'right': '0'
                });
                $create.empty().fadeOut();

                $create.text('Copy this in your head tag').fadeIn();
            }

            /* Wait for the link to be added to the document */
            window.requestAnimationFrame(function () {
                var event = new MouseEvent('click');
                link.dispatchEvent(event);
                document.body.removeChild(link);

                textem = '';
                btn_clicked();

                setTimeout(function () {
                    $('.text-to-head').show();
                }, 700);
            });
        })();

    });
    /***********************************/
    /*  
    /* Little things.
    /*
    /***********************************/

    //add some cool text to the title
    $(function () {
        var hidden = "hidden";
        var oldtitle = document.title;
        var currenttitle;

        // Standards:
        if (hidden in document) {
            document.addEventListener("visibilitychange", onchange);
       } else if ((hidden = "mozHidden") in document) {
            document.addEventListener("mozvisibilitychange", onchange);
       } else if ((hidden = "webkitHidden") in document) {
            document.addEventListener("webkitvisibilitychange", onchange);
       } else if ((hidden = "msHidden") in document) {
            document.addEventListener("msvisibilitychange", onchange);
        // IE 9 and lower:
       } else if ("onfocusin" in document) {
            document.onfocusin = document.onfocusout = onchange;
        // All others:
        } else {
            window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onchange;
        }
        function onchange(evt) {
            var v = "visible",
                h = "hidden",
                evtMap = {
                    focus: v,
                    focusin: v,
                    pageshow: v,
                    blur: h,
                    focusout: h,
                    pagehide: h
                };

            evt = evt || window.event;
            if (evt.type in evtMap) {
                currenttitle = oldtitle;
                $(document).attr('title', currenttitle);
            } else {
                currenttitle = this[hidden] ? "Where are you ? :( " : oldtitle;
                $(document).attr('title', currenttitle);
            }

        }

        // set the initial state (but only if browser supports the Page Visibility API)
        if (document[hidden] !== undefined)
            onchange({
                type: document[hidden] ? "blur" : "focus"
            });
    });
    
    /* For box-example */
    $('.title-code').on('click', function () {
        $(this).next().toggle();
    })
    
       $('.butt-get_started').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#build-yours-bs').offset().top-100
        }, 500);
    });
    


});