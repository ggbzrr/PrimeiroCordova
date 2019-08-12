(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Manipular eventos de pausa e retomada do Cordova
        //document.addEventListener('pause', onPause.bind(this), false);
        //document.addEventListener('resume', onResume.bind(this), false);

        document.getElementById("btn_calcular").addEventListener("click", function () {
            var peso = document.getElementById("txt_peso").value;
            var altura = document.getElementById("txt_altura").value;

            if (peso == "" || altura == "") {
                navigator.notification.alert("Preencha o peso e a altura", function () { }, "Aviso", "OK");
                return;
            }

            peso = parseFloat(peso);
            altura = parseFloat(altura);

            var imc = peso / Math.pow(altura / 100, 2);
            imc = imc.toFixed(2);
            var resultado = "";

            if (imc < 17)
                resultado = "Muito abaixo do peso";
            else if (imc > 17 && imc < 18.5)
                resultado = "Abaixo do peso";
            else if (imc > 18.5 && imc < 25)
                resultado = "Peso normal";
            else if (imc > 25 && imc < 30)
                resultado = "Acima do peso";
            else if (imc > 30 && imc < 35)
                resultado = "Obesidade";
            else if (imc > 35 && imc < 40)
                resultado = "Obesidade II (severa)";
            else if (imc > 40)
                resultado = "Obesidade III (mórbida)";

            document.getElementById("lbl_imc").innerText = imc.toString().replace(".", ",");
            document.getElementById("lbl_resultado").innerText = resultado;
            document.getElementsByClassName("box-resultado")[0].style.display = "block";
        });
        
        document.getElementById("btn_limpar").addEventListener("click", function () {
            document.getElementById("txt_peso").value = "";
            document.getElementById("txt_altura").value = "";
            document.getElementsByClassName("box-resultado")[0].style.display = "none";
        });

        document.getElementById("txt_peso").addEventListener("keyup", function () {
            this.value = this.value.replace(",", "").replace(/(\d+)(\d{1})/, "$1,$2");
        });

        /*
        // TODO: o Cordova foi carregado. Execute qualquer inicialização que exija o Cordova aqui.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        */
    };

    function onPause() {
        // TODO: este aplicativo foi suspenso. Salve o estado do aplicativo aqui.
    };

    function onResume() {
        // TODO: este aplicativo foi reativado. Restaure o estado do aplicativo aqui.
    };
})();



