var props = [
        { title: "Impressa", text: "Receba a sua revista no conforto da sua casa, sem se preocupar em sair para comprar os exemplares um a um." },
        { title: "Multiplataforma", text: "Acesse o conteúdo da sua revista como, quando e onde quiser! Receba em casa e leia no tablete e smartphone." },
        { title: "Digital", text: "Acesse as edições digitais da sua revista no tablet e smartphone." },
        { title: "Aplicativo", text: "Acesse as notícias e matérias, diversas vezes por dia, na tela do seu smartphone." }
    ];

var products = [{
    title: "Veja",
    subtitle: "Assinatura multiplataforma",
    type: "multi",
    img: "img/impressa_digital.png",
    vigencia: "2",
    promo: "28%",
    destaque: false,
    brinde: false,
    color: "color2",
    desc: "52 revistas anuais|1 ano de acesso digital|1 ano de aplicativo",
    desc: [
        { title: "Multiplataforma", text: "Acesse o conteúdo da sua revista como, quando e onde quiser! Receba em casa e leia no tablete e smartphone." }
    ],
    entrega: true
}, {
    title: "Veja",
    subtitle: "Assinatura impressa",
    type: "impresso",
    img: "img/impressa.png",
    vigencia: "1",
    promo: "6meses",
    destaque: true,
    brinde: true,
    color: "color1",
    desc: [
        { title: "Impressa", text: "Receba a sua revista no conforto da sua casa, sem se preocupar em sair para comprar os exemplares um a um." }
    ],
    entrega: true
}, {
    title: "Veja",
    subtitle: "Assinatura digital",
    type: "digital",
    img: "img/digital.png",
    vigencia: "1",
    promo: "",
    destaque: false,
    brinde: false,
    color: "color3",
    desc: [
        { title: "Digital", text: "Acesse as edições digitais da sua revista no tablet e smartphone." }
    ],
    entrega: false
}, {
    title: "Veja",
    subtitle: "Assinatura impresso 1",
    type: "impresso",
    img: "img/impressa.png",
    vigencia: "1",
    promo: "6meses",
    destaque: false,
    brinde: true,
    color: "color1",
    desc: [
        { title: "Impressa", text: "Receba a sua revista no conforto da sua casa, sem se preocupar em sair para comprar os exemplares um a um." }
    ],
    entrega: true
}, {
    title: "Veja",
    subtitle: "Assinatura digital 1",
    type: "digital",
    img: "img/digital.png",
    vigencia: "2",
    promo: "",
    destaque: false,
    brinde: false,
    color: "color3",
    desc: [
        { title: "Digital", text: "Acesse as edições digitais da sua revista no tablet e smartphone." }
    ],
    entrega: false
}, {
    title: "Veja",
    subtitle: "Assinatura multi 1",
    type: "multi",
    img: "img/impressa_digital.png",
    vigencia: "2",
    promo: "",
    destaque: false,
    brinde: true,
    color: "color2",
    desc: [
        { title: "Multiplataforma", text: "Acesse o conteúdo da sua revista como, quando e onde quiser! Receba em casa e leia no tablete e smartphone." }
    ],
    entrega: true
}, {
    title: "Veja",
    subtitle: "Assinatura impresso 2",
    type: "impresso",
    img: "img/impressa.png",
    vigencia: "2",
    promo: "28%",
    destaque: false,
    brinde: false,
    color: "color1",
    desc: [
        { title: "Impressa", text: "Receba a sua revista no conforto da sua casa, sem se preocupar em sair para comprar os exemplares um a um." }
    ],
    entrega: true
}, {
    title: "Veja",
    subtitle: "Assinatura digital 2",
    type: "digital",
    img: "img/digital.png",
    vigencia: "1",
    promo: "",
    destaque: false,
    brinde: true,
    color: "color3",
    desc: [
        { title: "Digital", text: "Acesse as edições digitais da sua revista no tablet e smartphone." }
    ],
    entrega: false
}, {
    title: "Veja",
    subtitle: "Assinatura multi 2",
    type: "multi",
    img: "img/impressa_digital.png",
    vigencia: "1",
    promo: "28%",
    destaque: false,
    brinde: false,
    color: "color2",
    desc: [
        { title: "Multiplataforma", text: "Acesse o conteúdo da sua revista como, quando e onde quiser! Receba em casa e leia no tablete e smartphone." }
    ],
    entrega: true
}];


var carouselInner = $(".carousel-inner");
var activeProducts = [];

activeProducts = products;

function filter(value) {
    if (value == "destaque") {
        activeProducts = products;
    } else {
        activeProducts = products.filter(function(ítem) {
            return ítem.type === value;
        });
    }
    initCarousel();
}



$("#destaque").click(function(event) {
    event.preventDefault();
    $(".nav-tabs li").removeClass('active');
    $(this).addClass('active');
    filter("destaque");
});

$("#impresso").click(function(event) {
    event.preventDefault();
    $(".nav-tabs li").removeClass('active');
    $(this).addClass('active');
    filter("impresso");
});

$("#multi").click(function(event) {
    event.preventDefault();
    $(".nav-tabs li").removeClass('active');
    $(this).addClass('active');
    filter("multi");
});

$("#digital").click(function(event) {
    event.preventDefault();
    $(".nav-tabs li").removeClass('active');
    $(this).addClass('active');
    filter("digital");
});



function configCarousel() {

    $('.multi-item-carousel').carousel({
        interval: false
    });

    $('.multi-item-carousel .item').each(function() {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });

    $('#test1').click(function() {
        console.log("test1");
        $('#theCarousel').carousel(4);
    });
}
