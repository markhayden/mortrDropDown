//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:: Custom Font Menu
//:: Author: Mark Hayden
//:: Author Site: http://markhayden.me
//:: License: Free General Public License (GPL)
//:: Version: 1.0.0
//:: Date: 05.24.2013
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::

var mortrHide = function(){
	$('#mortrFontList').hide(); // HIDE THE DROP DOWN OPTIONS
}

$(document).ready(function(){
	$("#mortrFontWrap").click(function(){ $("#mortrFontList").show();}); 					// SHOW THE FONT OPTIONS ON CLICK
	$('#mortrFontWrap').click(function(m){ m.stopPropagation(); }); 							// STOP HIDE FUNCTION IF CLICK IS WITHIN THE MENU
	$('#mortrOptions li').click(function(m){ 																			// ACTIONS TRIGGERED WHEN ONE OF THE FONTS HAS BEEN SELECTED
		$('#mortrDropTitle h2').html($(this).text()); 															// SET THE FIELD LABEL TO THE CURRENT SELECTION (TEXT)
		$('#mortrDropTitle h2').css('font-family', $(this).css('font-family')); 		// SET THE FIELD LABEL TO THE CURRENT SELECTION (FONT STYLE)
		alert($(this).attr("valPass"));																							// ALERT FOR FONT SELECTION. THIS CAN BE CHANGED TO POPULATE HIDDEN FIELD, ETC.
		$('#mortrFontList').css({'top': ($('#mortrDropTitle').height())+'px'}); 		// ADJUST POSTION TO FIELD HEIGHT (ACCOUNTS FOR VARRYING FONT SIZES)
		m.stopPropagation(); 																												// STOP THE PROPOGATION SO THE DROP DOWN CAN CLOSE AFTER SELECTION
		mortrHide(); 																																// CLOSE THE MENU ONCE ALL OTHER PROCESSES HAVE COMPLETED
	})
	$(document).click(function(){ mortrHide(); }); 																// IF CLICK IS OUTSIDE MENU THEN CLOSE THE MENU
});