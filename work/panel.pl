

$x = 0;
$y = 0;

print "<TABLE>\n";


while($x < 64){

print "	<TR>\n";

	$y = 0;
	while($y < 32){

	#	print "<INPUT TYPE='button' class='Tile' NAME='B" . $x . "_" . $y . "' VALUE='' onClick='return push(" . $x . "," . $y . ");'>\n";
		print "		<TD><INPUT TYPE='button' class='Tile' NAME='B" . $x . "_" . $y . "' VALUE='' onClick='return push(" . $x . "," . $y . ");'></TD>\n";

		$y++;
	}

print "	</TR>\n";


#	print "<br>\n";
	$x++;
}


print "</TABLE>\n";


#"<INPUT TYPE='button' class='Tile' NAME='B" . $X . $Y " . "' VALUE='' onClick='return push(" . $X . "," . $Y " . ");'>";