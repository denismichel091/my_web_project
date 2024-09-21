class MainPersonal {

    constructor() {

    }


    test() {

        let rElement = document.getElementById('r');
        rElement.style.backgroundColor = 'red';
        rElement.style.zIndex = 0;

    }

    takeSnapShot() {
        // script.js
        const video = document.getElementById("webCamera");
        const baseImgInput = document.getElementById("base_img");
        const imagemConvertida = document.getElementById("imagemConvertida");
        const caminhoImagem = document.getElementById("caminhoImagem").querySelector("a");

        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                video.srcObject = stream;
                video.play();
            })
            .catch((error) => {
                console.error("Erro ao acessar a câmera:", error);
            });

        function takeSnapShot() {
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

            const base64Image = canvas.toDataURL("image/jpeg"); // Convertendo para base64
            baseImgInput.value = base64Image; // Exibindo o base64 no campo de texto

            // Salvar a imagem em um arquivo (opcional)
            const blob = dataURItoBlob(base64Image);
            const url = URL.createObjectURL(blob);
            caminhoImagem.href = url;
            caminhoImagem.textContent = "Baixar imagem";
        }

        function dataURItoBlob(dataURI) {
            const byteString = atob(dataURI.split(",")[1]);
            const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ab], { type: mimeString });
        }

    }

    listenAboutMe() {
        
    }

}

