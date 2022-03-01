// Write your JavaScript code here.
// Remember to pay attention to page loading!
let topTracker = 0;
let leftTracker = 0;


window.addEventListener('load', function(){
    console.log('Its loaded');

    //when takeoff button clicked: window confirm, slight status change, background color, shuttle height increase


    this.document.getElementById('up').addEventListener('click',function(){
        if(topTracker - 10 < 0 ){return;}
        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) + 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;

        let rocket = document.getElementById('rocket');
        topTracker = topTracker - 10;
        
        rocket.setAttribute("style", "top: " + topTracker + "px; left: " + leftTracker + "px; " + "position: relative");
    });

    this.document.getElementById('down').addEventListener('click',function(){
        let container = document.getElementById('shuttleBackground');
        let rocket = document.getElementById('rocket');
        if(topTracker + 10 > container.offsetHeight - rocket.height){return};

        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) - 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;

        
        topTracker = topTracker + 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left: " + leftTracker + "px; " + "position: relative");
    });

    this.document.getElementById('left').addEventListener('click',function(){
        let container = document.getElementById('shuttleBackground');
        let rocket = document.getElementById('rocket');
        if(leftTracker - 10 < -1 * container.offsetLeft / 2) return;
        leftTracker = leftTracker - 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left: " + leftTracker + "px; " + "position: relative");
    });

    this.document.getElementById('right').addEventListener('click',function(){
        let container = document.getElementById('shuttleBackground');
        if(leftTracker + 10 > ( container.offsetLeft) / 2) return;

        let rocket = document.getElementById('rocket');
        leftTracker = leftTracker + 10;
        rocket.setAttribute("style", "top: " + topTracker + "px; left: " + leftTracker + "px; " + "position: relative");
    });



    this.document.getElementById('missionAbort').addEventListener('click',function(){
        let response = window.confirm("Confirm that you want to abort the mission");
        if(response){
            document.getElementById('flightStatus').innerText = 'Mission aborted.';
            document.getElementById('shuttleBackground').setAttribute('style', 'background-color: green');
            document.getElementById('spaceShuttleHeight').innerText = '0';
            rocket.setAttribute("style", "top:0px; left: 0px; position: relative;"); 
            topTracker = 0;
            leftTracker = 0;
            
        }
    });

    this.document.getElementById('landing').addEventListener('click',function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById('flightStatus').innerText = 'The shuttle has landed.';
        document.getElementById('shuttleBackground').setAttribute('style', 'background-color: green');
        document.getElementById('spaceShuttleHeight').innerText = '0';
        rocket.setAttribute("style", "top:0px; left: 0px; position: relative;");
        topTracker = 0;
        leftTracker = 0;
    });


    let takeOffButton = this.document.getElementById('takeoff');
    takeOffButton.addEventListener('click', function(){
       let response = window.confirm("Confirm that the shuttle is ready for takeoff");
       if(response){
           //add parts b-d
           document.getElementById('flightStatus').innerText = "Shuttle in flight";
           document.getElementById('shuttleBackground').setAttribute('style', 'background-color: blue');
           document.getElementById("spaceShuttleHeight").innerText = "10,000";
       }
    });
});