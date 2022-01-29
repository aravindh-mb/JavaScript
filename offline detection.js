    <script>
       window.addEventListener('online',deviceStatus);
       window.addEventListener('offline',deviceStatus);
       function deviceStatus(event){
           if(navigator.onLine){
               alert("device is online ");
           }else{
               alert("device is offline");
           }
        }
        //function calling
        deviceStatus();
    </script>

