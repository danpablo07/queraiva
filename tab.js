document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll(".square, .square3, .square4, .square6, .square7");
    const overlay = document.getElementById("overlay");
    const overlayTitle = document.getElementById("overlay-title");
    const overlayInfo = document.getElementById("overlay-info");
    const overlayImage = document.getElementById("overlay-image");
    const overlayIframe = document.createElement("iframe");
    overlayIframe.id = "overlay-iframe";
    document.querySelector(".image-container").appendChild(overlayIframe);
    const closeBtn = document.getElementById("close-btn");

    const info = {
        square1: {
            title: "Ábaco",
            text: ["Os computadores, antes de mais nada, são um sistema de contagem, sua história começa muito antes da eletricidade, começa com o abaco, instrumento usado na região do mediterrâneo para facilitar cálculos matemáticos.",
        ],
            image: "imagens/abaco.jpg"
        },
        square2: {
            title: "Lógica Binária",
            text: ["O matemático indiano Pingala foi o primeiro a criar um sistema de numeração binário que futuramente seria usado por Gottfried Leibniz, em que uns e zeros também representam conceitos como verdadeiro e falso, ligado e desligado, válido e inválido. Sistema utilizado atualmente no processamento de todos computadores modernos",
        ],
            image: "imagens/Pingala.webp"
        },
        square3: {
            title: "Tábua de Napier",
            text: ["A necessidade de calcular veio com Isaac Newton e sua Teoria Gravitacional, que despertou grandes desafios matemáticos, entre eles o Problema dos Três Corpos - o Sol, a Terra e a Lua, cuja solução era incrivelmente difícil e enfadonha. Com o tempo, um grande número de cientistas começou a pensar em fazer estes cálculos através de alguma máquina. John Napier (1550-1617) inventou a 'Tábua de Napier', que era similar a uma tabela de multiplicações. A tábua reduzia multiplicações e divisões a adições e subtrações. Usando esse princípio, em 1620 foram criadas as réguas de cálculo. Aprimorando, assim, a velocidade dos cálculos até então.", 
        ],
            image: "imagens/napier.jpg"
        },
        square4: {
            title: "1°-Calculadora",
            text: ["A primeira máquina de verdade foi construída por Wilhelm Schickard (1592-1635), sendo capaz de somar, subtrair, multiplicar e dividir. Essa máquina foi perdida durante a guerra dos trinta anos, sendo que recentemente foi encontrada alguma documentação sobre ela.",
        ],
            image: "imagens/Wilhelm Schickard.webp"
        },
        square5: {
            title: "Máquina de Pascal",
            text: ["Ainda com a necessidade de resolver problemas mais complexos, Blaise Pascal (1623-1662), filósofo e matemático francês, inventou uma calculadora que fazia somas e subtrações. A calculadora usava engrenagens que funcionavam de maneira similar a um odômetro. A máquina não fez muito sucesso, pois era cara e requeria prática de uso.",
        ],
            image: "imagens/pascalina.jpg"
        },
        square6: {
            title: "'Uma simples alavanca'",
            text: ["Com a necessidade de solucionar esse problema o filósofo e matemático alemão Gottfried Wilhelm Leibniz (1646-1716) aprimorou um bocado o projeto de Pascal e sonhava que um dia todo o raciocínio pudesse ser substituído pelo girar de uma alavanca. Baseado neste sonho, desenvolveu a máquina de Leibniz, que fazia multiplicações e divisões, no entanto, sua operação apresentava muita dificuldade e era sujeita a erros.",
        ],
            image: "imagens/leibniz.png"
        },
        square7: {
            title: "Tear de Jacquard",
            text: ["Com a revolução industrial, começaram a ser inventadas as primeiras máquinas a vapor. Com isso, em 1801, na França, Joseph Marie Jacquard (1752-1834) inventou um tear mecânico controlado por grandes cartões perfurados. Sua máquina era capaz de produzir tecidos com desenhos bonitos e intrincados. Essa invenção serviu de inspiração para muitos que viriam posteriormente",
        ],
            image: "imagens/tear.jpg"
        },
        square8: {
            title: "Máquina Analítica",
            text: ["Até então, todas essas máquinas, porém, estavam longe de serem consideradas um computador, pois não eram programáveis. Isto quer dizer que a entrada era feita apenas de números, mas não de instruções a respeito do que fazer com os números.",
                "Foi com Charles Babbage que o computador moderno começou a ganhar forma, através de seu trabalho no engenho analítico. E apesar de nunca ter sido construído com sucesso, possuía todas as funcionalidades do computador moderno.",
                "Junto a Babbage, a matemática Ada Lovelace, popularmente considerada como a primeira programadora, contribuiu com a invenção de uma sequência de instruções que pode ser usada várias vezes, loop, uma instrução que permite a repetição de uma sequência de cartões, descrevendo, assim, pela primeira vez um algoritimo aplicado a 'Máquina Analítica'."
        ],
            video: "https://www.youtube.com/embed/JtYAbLwnKfA?si=WhCq5whKKVTcbBBJ"
        },
        square9: {
            title: "Máquina Tabuladora",
            text: ["O próximo avanço dos computadores foi feito pelo americano Herman Hollerith (1860-1929), que inventou uma máquina capaz de processar dados baseada na separação de cartões perfurados (pelos seus furos). A máquina de Hollerith foi utilizada para auxiliar no censo de 1890, reduzindo o tempo de processamento de dados de sete anos, do censo anterior, para apenas dois anos e meio. Ela foi também pioneira ao utilizar a eletricidade na separação, contagem e tabulação dos cartões.",
        ],
            image: "imagens/tabuladora.jpeg"
        },
        square10: {
            title: "Máquina universal",
            text: ["A Máquina de Turing é um dispositivo teórico conhecido como máquina universal, que foi concebido pelo matemático britânico Alan Turing (1912-1954), muitos anos antes de existirem os modernos computadores digitais (o artigo de referência foi publicado em 1936). Num sentido preciso, é um modelo abstrato de um computador, que se restringe apenas aos aspectos lógicos do seu funcionamento (memória, estados e transições), e não a sua implementação física. Numa máquina de Turing pode-se modelar qualquer computador digital.",
        ],
            image: "imagens/turing.webp"
        },
        square11: {
            title: "nada",
            text: ["Simultaneamente, e em segredo, o Exército dos Estados Unidos desenvolvia um projeto semelhante. O engenheiro John Presper Eckert (1919-1995) e o físico John Mauchly (1907-1980) projetaram o ENIAC: Eletronic Numeric Integrator And Calculato [2]. Com 18 000 válvulas, o ENIAC conseguia fazer 500 multiplicações por segundo, porém só ficou pronto em 1946, vários meses após o final da guerra. Tendo sido projetado para calcular trajetórias balísticas, o ENIAC foi mantido em segredo pelo governo americano até o final da guerra.",
        ],
            redirect: "TesteTuring.html"
        },
        square12: {
            title: "Z-1",
            text: ["O primeiro computador eletromecânico programável foi construído por Konrad Zuse (1910-1995). Em 1936, esse engenheiro alemão construiu, a partir de relés que executavam os cálculos e dados lidos em fitas perfuradas, o Z1. Zuse tentou vender o computador ao governo alemão, que desprezou a oferta, já que não poderia auxiliar no esforço de guerra.",
        ],
            image: "imagens/Z1.jpg"
        },
        square13: {
            title: "ENIAC",
            text: ["Simultaneamente, e em segredo, o Exército dos Estados Unidos desenvolvia um projeto semelhante. O engenheiro John Presper Eckert (1919-1995) e o físico John Mauchly (1907-1980) projetaram o ENIAC: Eletronic Numeric Integrator And Calculato [2]. Com 18 000 válvulas, o ENIAC conseguia fazer 500 multiplicações por segundo, porém só ficou pronto em 1946, vários meses após o final da guerra. Tendo sido projetado para calcular trajetórias balísticas, o ENIAC foi mantido em segredo pelo governo americano até o final da guerra.",
        ],
            image: "imagens/ENIAC.jpg"
        },
        square14: {
            title: "John von Neumann",
            text: ["No ENIAC, o programa era feito rearranjando a fiação em um painel. Nesse ponto John von Neumann propôs a ideia que transformou os calculadores eletrônicos em 'cérebros eletrônicos': modelar a arquitetura do computador segundo o sistema nervoso central.",
        ],
            video: "https://www.youtube.com/embed/DhodsmIm3LE?si=4b9OwPJ9mFyuvqRM"
        },
        square15: {
            title: "Título 15",
            text: ["Esta é uma descrição para o quadrado 15.",
        ],
            redirect: "Filmes.html"
        }
    };

    squares.forEach(square => {
        square.addEventListener("click", function() {
            const id = this.id;
            if (info[id].redirect) {
                window.location.href = info[id].redirect;
            } else {
                overlayTitle.textContent = info[id].title;
                overlayInfo.innerHTML = info[id].text.map(paragraph => `<p>${paragraph}</p>`).join('');

                if (info[id].video) {
                    overlayImage.style.display = "none";
                    overlayIframe.style.display = "block";
                    overlayIframe.src = info[id].video;
                    overlayImage.parentNode.insertBefore(overlayIframe, overlayImage);
                } else {
                    overlayIframe.style.display = "none";
                    overlayImage.style.display = "block";
                    overlayImage.src = info[id].image;
                }

                overlay.style.display = "flex";
            }
        });
    });
    closeBtn.addEventListener("click", function() {
        overlay.style.display = "none";
        overlayIframe.src = "";
    });

    overlay.addEventListener("click", function(e) {
        if (e.target === overlay) {
            overlay.style.display = "none";
            overlayIframe.src = ""; 
        }
    });
});
