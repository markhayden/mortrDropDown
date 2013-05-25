mortrDropDown | Custom Font Dropdown
================================

Author: Mark Hayden<br />
Author Email: mark@dbcdesigns.com<br />
Version: 1.0.0<br />
License: Free General Public License (GPL)<br />
Demo: (http://markhayden.me/shakercheese/mortrDropDown)<br />

<h2>Dafuq is it?</h2>
A simple little custom drop down for displaying a selection of fonts. This can also be used with images, divs, etc. Just about anything that a standard drop down cannot achieve. jQuery driven and built to be lean.

Tried to make things as easy to implement as possible:

<h2>Usage</h2>

The HTML side of things is meant to be light. Essentially all that needs to be done is to include the mortrFontDrop.js 9 lines of CSS along with your custom fonts. Detailed instructions for usage below:

<h4>SCRIPTS</h4>
```html
<script src="js/mortrFontDrop.js"></script>
```

<h4>CSS</h4>
```html
/* BASIC FIELD STYLES */
#mortrFontWrap{width:350px; position:relative; margin:auto;}
#mortrDropTitle{background:#FFF; width:100%; cursor:pointer; position:relative; border:0px solid #A6A6A6; padding:5px; color:#000;}
#mortrDropTitle h2{padding:3px 2px 2px 7px; margin:0; font-size:18px; font-weight:normal;}
#mortrFontList{position:absolute; left:0; display:none; width:100%;}
#mortrOptions{width:350px; list-style:none; color:#000; padding:5px; background:#CCC; margin:0;}
	#mortrOptions li{display:block; padding:5px; font-size:14px; font-weight:normal;}
	#mortrOptions li:hover{background:#92c62e; color:#FFF; cursor:pointer;}
	#mortrOptions li a{display:block; text-decoration:none;}
	.mortrArrows{width:20px; height:20px; background:url(arrow.svg) no-repeat; background-size: 100%; position:absolute; z-index:99; right:5px; top:8px;}
```

<h4>HTML</h4>
```html
<!-- BEGIN THE DROP DOWN CREATION -->
	<div id="mortrFontWrap">
	    <div id="mortrDropTitle">
	        <h2>Choose Font</h2>
	        <div class="mortrArrows"></div>
	    </div><!-- end mortrDropTitle -->
	    
	    <!-- EACH LIST ITEM WILL REPRESENT A DROP DOWN ROW (valPass VARIABLE IS WHAT GETS PASSED TO HIDDEN FIELD) -->
	    <div id="mortrFontList">
	        <ul id="mortrOptions">
	            <li id="ptsans" valPass="psans">PT Sans Caption</li>
	            <li id="times" valPass="times">Times New Roman</li>
	            <li id="libre" valPass="libre">Libre Baskerville</li>
	        </ul>​<!-- end mortrOptions -->
	    </div><!-- end mortrFontList -->
	</div><!-- end mortrFontWrap -->
```

<h4>CUSTOMIZATION</h4>
* In the html you will need to alter the "valPass" attribute. This is the information passed when a font is selected. For example, this is what would populate a hidden field with your custom font selection.
* Line 22 of the JS file. By default it simply triggers an alert. This line should be modified to take the proper action for your project.
* I've also included an SVG and AI file for the arrows within the drop down. This can be changed to .gif or whatever in the CSS. Feel free to edit to your liking.