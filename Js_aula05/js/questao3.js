document.getElementById("btn-img").addEventListener('click', gerarImage);
let select = document.getElementById('products').value;



function display_image(src, width, height, alt) {
    let image = document.createElement("img");
    image.src = src;
    image.width = width;
    image.height = height;
    image.alt = alt;
    let elemento_pai = document.getElementById("products_img");
    elemento_pai.innerHTML="";
    elemento_pai.appendChild(image);
}
    function gerarImage(){
        
        const value = document.getElementById('products').value;
        // console.log(value);

    switch (value){
        case "product1":
            display_image('https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_SL1500_.jpg', 
            250, 
            200, 
            'mouse');
        break;
        case "product2":
            display_image('https://a-static.mlcdn.com.br/1500x1500/teclado-basico-notebook-pc-computador-barato-e-resistente-nf-multilaser/acmeeletronicos/tc213/5beb051b4eab9879e21f8e2fb327198c.jpg', 
            250, 
            200, 
            'teclado');
        break;
        case "product3":
            display_image('https://http2.mlstatic.com/fone-ouvido-headphone-s-fio-entrada-carto-sd-mp3-fm-n65-D_NQ_NP_674016-MLB30523299288_052019-F.jpg', 
            250, 
            200, 
            'fone');
        break;
        case "product4":
            display_image('https://img.kalunga.com.br/fotosdeprodutos/144778z.jpg', 
            250, 
            200, 
            'webcam');
        break;
        case "product5":
            display_image('https://static.doocacommerce.com.br/fgtec/product/monitor-philips-led-lcd-21-5-full-hd-hdmi-va-221v8-1598441278512_1000x1000+fill_ffffff.jpg', 
            250, 
            200, 
            'monitor');
        break;

    }
}


