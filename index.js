var map;

AmCharts.ready(function() {
    map = new AmCharts.AmMap();
    map.pathToImages = "/EZApp/ammap/images/";
    //map.panEventsEnabled = true; // this line enables pinch-zooming and dragging on touch devices
    map.balloon.color = "#000000";
    map.panEventsEnabled = true;
    var worldDataProvider = {
        mapVar: AmCharts.maps.worldLow,
        getAreasFromMap: true
    };

    map.dataProvider = worldDataProvider;

    map.areasSettings = {
        autoZoom: true,
        selectedColor: "#CC0000"
    };

    map.smallMap = new AmCharts.SmallMap();
    
    map.addListener("clickMapObject", function (event) {

        search( );
    });

    map.write("mapdiv");

});

function loadNewMap (url, mapName) {
    if (AmCharts.maps[mapName] != undefined) {
        // the map was already loaded
        setNewMap(mapName);
    }
    else {
        // let's load the map
        jQuery.getScript(url, function () {
            setNewMap(mapName);
        });
    }
}

function setNewMap (mapName) {
    var dataProvider = {
        mapVar: AmCharts.maps[mapName],
        getAreasFromMap: true
    };
    map.dataProvider = dataProvider;
    map.validateData();
}
