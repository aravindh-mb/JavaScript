 function send_notification()
    {
              //check if browser supports notification API
        if("Notification" in window)
        {
          //if the site already allow to show notification 
            if(Notification.permission == "granted")
            {
                var notification = new Notification("Notification Title", {"body":"hello 🖐", "icon":"your image.jpeg"});
            }
            else
            {
              // it is default way to request show notification from user 
                Notification.requestPermission(function (permission) {
                    if (permission === "granted")
                    {
                        var notification = new Notification(" from Notification API", {"body":"hi🖐", "icon":"your image.jpeg"});
                    }
                });
            }
        }     
        else
        {
            alert("Your browser doesn't support notfication API");
        }      
    }
    send_notification();
