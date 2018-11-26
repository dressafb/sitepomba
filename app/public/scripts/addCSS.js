$.injectCSS({
    "#test": {
        height: 123
    }
});



$(document).ready(function() {
		
		$("<style type='text/css'> .redbold{ color:#f00; font-weight:bold;} </style>").appendTo("head");
		$("<div/>").addClass("redbold").text("SOME NEW TEXT").appendTo("body");
		
		
});