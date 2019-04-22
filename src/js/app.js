
    const gallery = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(gallery , {});
    
    const modalbox = document.querySelectorAll('.modal');
    M.Modal.init(modalbox , {});
     
    const toltip = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(toltip, {});


    document.getElementById('btnSend').addEventListener('click', ()=>{
        document.getElementById('mensaje-exitoso').style.display='block';
        document.getElementById('gform').style.display='none';
   
              
        })

    


   

  