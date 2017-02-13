# Carver

Carver is a miniscule framework to do things directly, as a grid, as navbar, setting a margin or padding, position, display, and more. 

If you want more complete Carver version, you can have :
 - Grid system
 - CSS utilities
 - Basic Navigation bar
 - Some classic style for input, button, and boxes.

## [Download](https://stabla.github.io/Carver/)
## Demo and examples
 Available at https://stabla.github.io/Carver/

## Documentation
### Table of content
1. [Grid system](#user-content-1-grid-system)
1. [Basic Navigation bar](#user-content-2-basic-menu-system)
1. [Use good skins](#user-content-3-use-good-skins)
1. [Utilities & CSS Prewrited classes](#user-content-4-utilities--css-prewrited-classes)
1. [ClaCss.js](#user-content-5-clacssjs) - Write you CSS with Class
1. [Only if you don't use ClaCss.js](#user-content-6-only-if-you-dont-use-clacssjs)
1. [Good Google Fonts & Beautiful Web Typ](#user-content-7-good-google-fonts--beautiful-web-type)
1. [Basesign](#user-content-8-basesign)
1. [HackDesign](#user-content-9-hackdesign)


### 1. Grid system
Ok, so, here, we have a grid system.

#### Basic
You can set a row like that :
   ```
    <div class="row">
        <div class="cl-X"></div>
    </div
   ```
   Where X is a number between 0 and 12. 0 is for nothing, and 12 is for a 100% width column.

But row is, not really necessary, it's just to be sure to set a width to 100% (row is only width: 100%)

#### Offset
**How to create an offset ?**

```cl-offset-X``` where ```X``` is a number between 1 and 12. 1 is for a little offset, and 6 is for the half of the available space offset.

        Example : class="cl-offset-4"
#### Responsive
**For screen where width is under 780px : s**

```cl-s-X``` where ```X``` is a number between 0 and 12. Where 0 is for a display: none, to make it disapear, and 12 is for full width. Therefore, 6 is for 50% because 6 is 50% of 12.

        Example : class="cl-s-8"
**For screen where width is under 460px : xs**

```cl-xs-X``` where ```X``` is a number between 0 and 12. Where 0 is for a display: none, to make it disapear, and 12 is for full width. Therefore, 6 is for 50% because 6 is 50% of 12.  

        Example : class="cl-xs-8"

### 2. Basic Navigation bar
There's a list of available class, it's understable, no explanation needed.
* ``` .nav-bar``` : setting up a navbar
* ``` .nav-left``` : setting up a left side to a navbar
* ``` .nav-right``` : setting up a right side to a navbar
* ``` .brand-logo```: setting up a position for your logo
* ``` .brand-logo-text```: setting up a position for a text
* ``` .container ``` : setting up a contain for your navbar.
* ```.container-off```: no margin, it's over, to use in your JS.. or maybe not.
(It's responsive)

        Example :  
           <div class="nav-bar">
               <div class="nav-left">
                   <div class="brand-logo-text">
                       <h3>BRAND</h3>
                   </div>
               </div>
                <div class="nav-right">
                       <ul>
                           <li> Sign in </li>
                           <li> Sign up </li>
                       </ul>
                </div>
           </div>

### 3. Use good skins
* ``` .box ``` : make a box
* ``` .danger ``` : to show a danger message (red color). To add to ```.box```
* ``` .warning ``` : to show an alert message (orange color). To add to ```.box```
* ``` .success ``` : to show an success message (green color). To add to ```.box```
* ``` .inform ``` : to show an inform message (grey color). To add to ```.box```
* ``` .inform-blue ``` : to show an inform message (blue color). To add to ```.box```
* ``` .butt ``` : to make quickly a button. To add to submit, button, or just a to make a button.
* ``` .butt-bs ``` : Another version of ``` .butt ```
* ``` .butt-blue ``` : to make a button, but in blue. To add to ``` .butt ```
* ``` .butt-space ``` : a little space, margin and padding, it's can only be good.
* ``` .butt-space-margin``` : for margin space.
*```  .butt-space-padding``` : for padding space.


### 4. Utilities & CSS Prewrited classes
A list of available utilities and prewrited classes :
* ``` .fit ``` : fit element to full size available. (width: 100%)
* ``` .clear ``` : clear:both.
* ``` .clearfix ``` : trivial
* ``` .ma_space ``` : create a outer space of 18px
* ``` .ma_reset ``` : reset margin
* ``` .pa_space ``` : create a inner space of 18px
* ``` .pa_reset ``` : reset padding
* ``` .center ``` : center a block
* ``` .pointer ``` : cursor to pointer
* ``` .c_transparent ``` : Make color transparent
* ``` .bg_transparent ``` : Make background-color transparent
* ``` .bg_none ``` : Make background-color as none
* ``` .bo-c_transparent ``` : Make border-color as transparent
* ``` .p-improved ``` : Maximum width, to improve readibility (be care with this)

#### Text
* ``` .o-ellipsis ``` : text-overflow to ellipsis
* ``` .word-wrap-break ``` : word-wrap to break-work
* ``` .t-small ``` : a smaller text
* ``` .t-big ``` : a bigger text
* ``` .italic ``` : make text italic
* ``` .bold ``` : make text bold
* ``` .bolder ``` : make text bolder

##### Text-decoration & Text-transform
* ``` .underline ``` : underline text
* ``` .uppercase ``` : uppercase text
* ``` .lowercase ``` : lowercase text
* ``` .capitalize ``` : capitalize text

#### Visibility
* ``` .visibile ``` : visibility to visible
* ``` .hidden ``` : visibility to hidden

#### Border-radius
* ``` .round ``` : border-radius to 12px
* ``` .circle ``` : Make a circle

#### Float
* ``` .fl_l ``` : float left
* ``` .fl_r ``` : float right

#### Display
* ``` .d_block ``` : display to block
* ``` .d_inline-block ``` : display to inline-block
* ``` .d_none ``` : display to none
* ``` .d_inline ``` : display to inline
* ``` .d_flex ``` : display to flex
* ``` .d_inline-flex ``` : display to inline-flex

##### Text-align
* ``` .t_l ``` : align text to left
* ``` .t_center ``` : align text to center
* ``` .t_r ``` : align text to right
* ``` .t_justify ``` : justify your text

#### Vertical-align
* ``` .v_baseline ``` : set vertical-align to baseline
* ``` .v_top ``` : set vertical-align to top
* ``` .v_bottom ``` : set vertical-align to bottom
* ``` .v_middle ``` : set vertical-align to middle
* ``` .v_inherit ``` : set vertical-align to inherit

#### Overflow
* ``` .o_auto ``` : set overflow to auto
* ``` .o_hidden ``` : set overflow to hidden
* ``` .o_inherit ``` : set overflow to inherit
* ``` .o_scroll ``` : set overflow to scroll
* ``` .o_visible ``` : set overflow to visible

#### Position
* ``` .p_absolute ``` : set position to absolute
* ``` .p_fixed ``` : set position to fixed
* ``` .p_inherit ``` : set position to inherit
* ``` .p_relative ``` : set position to relative
* ``` .p_static ``` : set position to static
* ``` .p_sticky ``` : set position to sticky

#### Unordered list
* ``` .li-inline ``` : set this to your ```ul``` and ```li``` element(s) will be inline
* ``` .li-reset ``` : set this to your ```ul``` and style of ```li``` element(s) will be reseted
* ``` .li-space ``` : set this to your ```ul``` and ```li``` element(s) will breathe a little bit

#### Tag `<a>`
* ``` .a_reset ``` : reset your ```a``` default style
* ``` .a-underline_reset ``` : reset only underline
* ``` .a-c_reset ``` : reset only color (color will be in black)
* ``` .a-c_black ``` : color will be in black.
* ``` .a-c_white ``` : color will be in white.

#### Fonts
##### Serif
* ``` .serif ``` : set ``` font-family: serif```
* ``` .times ``` : set ``` font-family: times```
* ``` .times-new-roman ``` : set ``` font-family: "Times New Roman"```
* ``` .georgia ``` : set ``` font-family: georgia```

##### Sans
* ``` .sans ``` : set ``` font-family: sans```
* ``` .arial ``` : set ``` font-family: Arial```
* ``` .helvetica ``` : set ``` font-family: Helvetica```
* ``` .helveticaneue ``` : set ``` font-family: "Helvetica Neue"```


### 5. [ClaCss.js](https://github.com/idkn/ClaCss)

ClaCss.js is a tool to write css directly in your HTML, if you wanna know more, check the dedicated [website](https://github.com/idkn/ClaCss).

When you use ClaCss.js you can have a lighter Carver. I don't recommend to use ClaCss.js for big project.

### 6. Only if you don't use [ClaCss.js](https://github.com/idkn/ClaCss)

### Colors & Background-color
* ``` .c_blue ``` : set color to blue
* ``` .c_red ``` : set color to red
* ``` .c_green  ``` : set color to green
* ``` .bg_white ``` : set background-color to white
* ``` .bg_grey ``` : set background-color to grey
* ``` .bg_black ``` : set background-color to black

### Font weight
* ``` .f-weight_X ``` : set font-weight. X can be 100, 200, 300,   400, 500, 600, 700.

#### Prewrited margins
* ``` .ma_0 ``` : margin to 0.
* ``` .ma_X ``` : set margin. X Can be 5, 10, 15, 20, 25.
* ``` .ma-l_X ``` : set margin-left. X Can be 5, 10, 15, 20, 25.
* ``` .ma-r_X ``` : set margin-right. X Can be 5, 10, 15, 20, 25.
* ``` .ma-t_X ``` : set margin-top. X Can be 5, 10, 15, 20, 25.
* ``` .ma-b_X ``` : set margin-bottom. X Can be 5, 10, 15, 20, 25.
* ``` .ma-rl_X ``` : set margin-right and margin-left. X can be 5, 10, 15, 20, 25.
* ``` .ma-tb_X ``` : set margin-top and margin-bottom. X Can be 5, 10, 15, 20, 25.

#### Prewrited paddings
* ``` .pa_0 ``` : set padding to 0.
* ``` .pa_X ``` : set padding. X Can be 5, 10, 15, 20, 25.
* ``` .pa-l_X ``` : set padding-left. X Can be 5, 10, 15, 20, 25.
* ``` .pa-r_X ``` : set padding-right. X Can be 5, 10, 15, 20, 25.
* ``` .pa-t_X ``` : set padding-top. X Can be 5, 10, 15, 20, 25.
* ``` .pa-b_X ``` : set padding-bottom. X Can be 5, 10, 15, 20, 25.
* ``` .pa-rl_X ``` : set padding-right and padding-left. X Can be 5, 10, 15, 20, 25.
* ``` .pa-tb_X ``` : set padding-top and padding-bottom. X Can be 5, 10, 15, 20, 25.

### 7. [Good Google Fonts](https://github.com/stabla/good-google-fonts) & [Beautiful Web Type](https://github.com/ubuwaits/beautiful-web-type)

## 8. [Basesign](http://github.com/stabla/Basesign)
## 9. [HackDesign](http://www.hackdesign.org)

## License
Under MIT license.

What about pushing some improvement ? If you have an idea, or suggestion(s), check our [Github](https://github.com/stabla/Carver)  
