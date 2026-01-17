// EDGY
// Version   : EDGY23
// Author    : Rudi Claes (rudi.claes@inno.com)
// Element   : Tag

shape main
{
	defsize(60,20);
	addsubshape("icon", 100, 75);
	addsubshape("text", 100, 25);
	
	shape icon
	{
		image("Tag-Black.wmf", 0, 0, 100, 100);
	}
	
	shape text
	{
		h_align = "center";
		v_align = "center";
		editablefield = "name";
		printwrapped("#name#");
	}	
}