function subscribeUs() {
    var btn = document.getElementById('subBtn');
    btn.classList.add('done');

    let timer = setTimeout(() => {
        btn.innerHTML="Thank you for Subscribing!";
        clearInterval(timer);    
    }, 600);
}