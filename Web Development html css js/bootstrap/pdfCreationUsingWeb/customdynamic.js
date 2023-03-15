window.onload = function(){
    document.getElementById('btn-print').addEventListener("click",function(){
        const invoice = document.getElementById('reciept-main');
        console.log(invoice);
        window.html2pdf(invoice);
    })
}