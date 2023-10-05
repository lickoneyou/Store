// Toast function
function toast({title = "",message = "",type = "info",duration = 3000}) {
    const main = document.getElementById("toast")
    
    if(main){
      const toast = document.createElement("div")
      // Auto remove toast
      const autoRemoveToast = setTimeout(function(){
        main.removeChild(toast)
      },duration + 1000)

      console.log(main);
      // Remove toast when clicked
      toast.onclick = function(e){
        if(e.target.closest(".toast__close")){
          main.removeChild(toast)
          clearTimeout(autoRemoveToast)
        }
      }

      const icons = {
        success: "fa-solid fa-circle-check",            
        info: "fa-solid fa-circle-info",
        warning: "fa-solid fa-triangle-exclamation",
        error: "fa-solid fa-xmark"
      }
      const icon = icons[type]
      
      const durationInSecond = (duration/1000).toFixed(2)

      toast.classList.add('toast', `toast--${type}`)
      toast.style.animation = `slideInLeft ease 0.3s, fadeOut ease .5s ${durationInSecond}s forwards`;
     
      toast.innerHTML = `
        <div class="toast__icon">
          <i class="${icon}"></i>
        </div>
  
        <div class="toast__body">
          <h3 class="toast__title">${title}</h3>
          <p class="toast__msg">${message}</p>
        </div>
  
        <div class="toast__close">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="progress-track"></div>
        <div class="progress-running progress--${type}"></div>
      `
      
        const progressRunning = toast.querySelector(".progress-running")
        progressRunning.style.animation = `progress linear ${durationInSecond}s forwards`;

        main.appendChild(toast)
    }
  }

  export function showSuccessToast (product) {
    toast({
      title: `${product}`,
      message: `${product} added to cart`,
      type: "success",
      duration: 3000
    })
  }

  export function showInfoToast (product) {
    toast({
      title: `${product}`,
      message: `${product} removed from cart`,
      type: "info",
      duration: 3000
    })
  }