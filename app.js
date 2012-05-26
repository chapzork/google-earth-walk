// button 2: o
// button 3: x
// button 9: select
// button 10: start

var ge;
google.load("earth", "1");
  
function init() {
  google.earth.createInstance('map3d', initCB, failureCB);
}
  
function initCB(instance) {
  ge = instance;
  ge.getWindow().setVisibility(true);
  ge.getOptions().setFlyToSpeed(ge.SPEED_TELEPORT);
  ge.getLayerRoot().enableLayerById(ge.LAYER_BUILDINGS, true);
  ge.getLayerRoot().enableLayerById(ge.LAYER_BUILDINGS_LOW_RESOLUTION, true);
  ge.getLayerRoot().enableLayerById(ge.LAYER_TERRAIN, true);
  ge.getLayerRoot().enableLayerById(ge.LAYER_TREES, true);
  ge.getSun().setVisibility(true);
  ge.getOptions().setAtmosphereVisibility(true);
   
  // Get the current view.
  var lookAt = ge.getView().copyAsLookAt(ge.ALTITUDE_RELATIVE_TO_GROUND);
  //var camera = ge.getView().copyAsCamera(ge.ALTITUDE_RELATIVE_TO_GROUND);
 
  // Set new latitude and longitude values.
  lookAt.setLatitude(32.703586);
  lookAt.setLongitude(-117.105677);
  lookAt.setTilt(lookAt.getTilt() + 88.0);
  lookAt.setRange(lookAt.getRange() * 0.00001);
  var st = lookAt.getViewerOptions();
  st.setOption(ge.OPTION_STREET_VIEW, ge.OPTION_STATE_ENABLED);
  lookAt.setViewerOptions(st);
  //camera.setAltitude(camera.getAltitude() -90);
    
  // Update the view in Google Earth.
  ge.getView().setAbstractView(lookAt);
<<<<<<< HEAD
  var view;
  view = false;
  var earthView;
  earthView = true;
=======
  
  
>>>>>>> 052b015f7db4b94a5e9fa30795acf642387603a2
  //ge.getView().setAbstractView(camera);
    
}

function failureCB(errorCode) {

}



google.setOnLoadCallback(init);
  
$(document).keydown(function(event) {
  
  if (event.which == 88) {
    if (view == true)
    {
		view = false;
	}
	else if (view == false)
	{
		view = true;
	}
  }
  
  if (event.which == 84) {
    if (earthView == true)
    {
		earthView = false;
	}
	else if (earthView == false)
	{
		earthView = true;
	}
  }
  var lookAt = ge.getView().copyAsLookAt(ge.ALTITUDE_RELATIVE_TO_GROUND);
  var camera = ge.getView().copyAsCamera(ge.ALTITUDE_RELATIVE_TO_GROUND);
  if (event.which == uparrow) {
	if (view == true && earthView == false)
	{
		lookAt.setTilt(lookAt.getTilt() + 2);
	}
	if (view == false && earthView == false)
	{
		//does normal stuff
	}
	if (view == true && earthView == true)
	{
		camera.setAltitude(camera.getAltitude() - 1000);
		ge.getView().setAbstractView(camera);
	}
	if (view == false && earthView == true)
	{
		//does normal stuff
	}
  }
  if (event.which == downarrow) {
  	if (view == true && earthView == false)
  	{
		lookAt.setTilt(lookAt.getTilt() - 2);
	}
	if (view == false && earthView == false)
	{
		//does normal stuff
	}
	if (view == true && earthView == true)
	{
		camera.setAltitude(camera.getAltitude() + 1000);
		get.getView().setAbstractView(camera);
	}
	if (view == false && earthView == true)
	{
		//does normal stuff
	}
  }
  if (event.which == leftarrow) {
	//does normal stuff
  }
  
  if (event.which == rightarrow) {
	  //does normal stuff
  }
  
  
  
});
  
function toggleView() {
  if(ge) { 
    var lookAt = ge.getView().copyAsLookAt(ge.ALTITUDE_RELATIVE_TO_GROUND); 
    lookAt.setTilt(0); //top-down 
    lookAt.setHeading(0); //north-up 
    ge.getView().setAbstractView(lookAt); //update view 
  } 
} 
  
function moveUp() {
  if (ge) {
    var lookAt = ge.getView().copyAsLookAt(ge.ALTITUDE_RELATIVE_TO_GROUND); 
    lookAt.setLatitude(lookAt.getLatitude() + 0.00001);
    ge.getView().setAbstractView(lookAt); //update view 
  }
}
