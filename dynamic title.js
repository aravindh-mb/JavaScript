 <script>
        let showingAlert = false;
        const interval = setInterval(() =>{
          document.title =showingAlert ? 'chat App': '(1) new notification';
          let a = showingAlert=!showingAlert;
          console.log(a);
        },1000); 

  </script>  
