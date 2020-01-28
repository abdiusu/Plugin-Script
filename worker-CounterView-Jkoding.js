//<![CDATA[ 
/* 
Designer Script : Abdi Syahputra Harahap 
Web : https://jkoding.xyz */

var counterJkoding=function(){var e="",t=window.location.href;if((t=(t=(t=(t=(t=(t=t.replace("?m=1","")).replace("?m=0","")).replace("%3D","")).replace("%3D%3D","")).replace("&m=1","")).replace("&m=0","")).indexOf("#")>=0)var i=t.split("#")[0];else if(t.indexOf("?")>=0)i=t.split("?")[0];else i=t;return $.get({url:"https://cors-anywhere.herokuapp.com/http://006.free-counters.co.uk/count-123.pl?count="+i+"&type=cold&digits=7&prog=hit&statslink=yes&sitelink=yes&cntvisible=yes&mode=java",async:!1,success:function(t){var i=t.split("cold/")[1].split(".gif")[0],l=t.split("cold/")[2].split(".gif")[0],c=t.split("cold/")[3].split(".gif")[0],s=t.split("cold/")[4].split(".gif")[0],o=t.split("cold/")[5].split(".gif")[0],n=t.split("cold/")[6].split(".gif")[0],p=t.split("cold/")[7].split(".gif")[0];e=Number(i+l+c+s+o+n+p)}}),e};document.getElementById("counterJkoding")&&(document.getElementById("counterJkoding").innerHTML=counterJkoding()); 
//]]>
