function OnOffAmpoule(img)
{
	if (img.src.search("pic_bulbon") !== -1)
	{
		img.src = "images/pic_bulboff.gif";
	}
	else
	{
		img.src = "images/pic_bulbon.gif";
	}
}
