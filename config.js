const topBarCenterText = `K5CTW - EM13`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/K5CTW", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  [
    "2196F3",
    "HamClock",
    "http://hamclock.local:8081/live.html",
    "1",
  ],
  [
    "2196F3",
    "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", 
    "1"
  ],

  ["2196F3", "HotSpot 1", "https://hotspot-1.local/", "1"],
  [
    "2196F3",
    "Forecast",
    "https://www.wpc.ncep.noaa.gov//noaa/noaa.gif",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=33.2468&lon=-96.8292&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-103.50,31.86,2678,3000/loc=-96.828247,33.246849",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  
  [
    "",
    "http://hamclock.local:8080/get_capture.bmp",
  ],
  [
    "APRS",
    "http://hamclock.local:8008/map.png",
  ],
  [
    "",
    "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"
  ],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KFWS_loop.gif",
  ],
  [
    "",
    "https://www.hamqsl.com/solar101vhf.php",
    "https://www.hamqsl.com/solarpich.php"
  ],
  [
    "",
    "https://www.timeanddate.com/scripts/sunmap.php?iso=now"
  ],
  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/GEOCOLOR/GOES16-CONUS-GEOCOLOR-625x375.gif",
  ],
  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/sp/GEOCOLOR/GOES16-SP-GEOCOLOR-600x600.gif",
  ],
  [
    "", 
    "https://www.hamqsl.com/solar100sc.php",
  ],
  [
    "SW BROADCAST",
    "https://www.short-wave.info/php/transmitter-site-map.php?mobile=false&lat=52.67|-21.96|-15.53|-9.42|-17.76|-17.53|46.34|50.73|42.81|39.75|50.89|29.60|6.23|39.40|-15.53|43.51|46.34|-21.96|34.38|44.15|39.36|46.34|39.91|39.91|46.34|27.46|24.88|27.46|36.28|39.36|42.04|36.28|36.21|12.69|18.22|24.17|42.04|29.60|-15.73|-7.90|36.21|12.69|36.21|29.15|30.65|-21.96|33.50|-38.83|36.28|36.21|27.46&lon=9.75|27.60|28.00|160.05|168.36|146.05|-67.83|4.39|23.19|116.81|-113.85|55.79|-10.70|32.86|28.00|-79.63|-67.83|27.64|108.61|86.90|75.72|-67.83|-76.58|-76.58|-67.83|-80.93|102.50|-80.93|-86.10|75.72|12.32|-86.10|-86.89|-8.02|-63.02|54.25|12.32|55.79|46.45|-14.38|-86.89|-8.02|-86.89|47.77|-87.09|27.64|-86.47|176.42|-86.10|-86.89|-80.93&freq=3975|4930|4965|5020|5040|5055|5130|5780|5900|5985|6030|6040|6050|6050|6065|6070|6160|6195|7285|7295|7415|7490|9265|9265|9330|9395|9440|9455|9475|9600|9705|9930|9980|11640|11775|11810|11870|11880|11965|12095|12160|13630|13845|15540|15555|15580|15610|15720|15810|15825|17790&az=ND|20|ND|ND|ND|ND|245|ND|126|257|ND|313|ND|310|315|ND|245|350|317|270|308|245|242|242|245|355|283|285|50|308|206|180|90|111|320|90|210|211|295|27|85|111|90|310|5|350|85|35|40|46|160",
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_tx.png",
  ],
  
];
