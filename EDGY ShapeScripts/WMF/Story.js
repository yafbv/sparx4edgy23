// EDGY
// Version   : EDGY23
// Author    : Rudi Claes (rudi.claes@inno.com)
// Element   : Story

shape main
{
	// Top
	if (HasTag("EDGY::TextAlign", "Top"))
	{
		defsize(80,80);
		addsubshape("txt_top", 100, 100);
			
		shape txt_top
		{
			h_align = "center";
			v_align = "top";
			editablefield = "name";
			printwrapped("#name#");
			image("Shape-Story.wmf", 0, 0, 100, 100);
		}
	}
	
	// Center
	if (HasTag("EDGY::TextAlign", "Center"))
	{
		defsize(80,80);
		addsubshape("txt_center", 100, 100);
			
		shape txt_center
		{
			h_align = "center";
			v_align = "center";
			editablefield = "name";
			printwrapped("#name#");
			image("Shape-Story.wmf", 0, 0, 100, 100);
		}
	}
	
	// Bottom
	if (HasTag("EDGY::TextAlign", "Bottom"))
	{
		defsize(80,80);
		addsubshape("txt_bottom", 100, 100);
			
		shape txt_bottom
		{
			h_align = "center";
			v_align = "bottom";
			editablefield = "name";
			printwrapped("#name#");
			image("Shape-Story.wmf", 0, 0, 100, 100);
		}
	}
}

decoration Story
{
	orientation="nw";	
	image("Small-Shape-Story.wmf", 0, 0, 100, 100);
}

decoration composite
{
	orientation="sw";
	
	if(hasproperty("iscomposite","true"))
	{
		ellipse(0,40,40,60);
		ellipse(60,40,100,60);
		moveto(30,50);
		lineto(70,50);
	}
}