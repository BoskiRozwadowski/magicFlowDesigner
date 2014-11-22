/* W */

function ExternalLinks() {
  if (!document.getElementsByTagName) return;
  var anchors = document.getElementsByTagName("a");
  for (var i=0;i<anchors.length;i++) {
    var anchor = anchors[i];
    if (anchor.getAttribute("href")&&anchor.getAttribute("rel") == "external") anchor.target = "_blank";
  }
}



function mailTo(u,d,s) {eval("window.location = 'mailto:" + u + "@" + d + "?subject=" + s + "';");}

/*
    MailTo with Subject 
    <a href="mailto:astark1@unl.edu?subject=Comments from MailTo Syntax Page">
		
		MailTo with multiline message in Body 
    <a href="mailto:astark1@unl.edu?body=The message's first paragraph.%0A%0aSecond paragraph.%0A%0AThird Paragraph.">
    NOTE: Use "%0A" for a new line, use "%0A%0A" for a new line preceded by a blank line.
*/