const buttons = document.querySelectorAll('.button');
	
	const list = document.getElementById('list');
	list.classList.add('catalog');
	
	// Mapeamento dos IDs dos botões para funções
    const buttonFunctions = {
      button1: fetchConteudos,
      button2: fetchMetaversos,
      button3: fetchFerramentas,
      button4: fetchLaboratorios
    };
	
	buttons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonId = button.id;
        
        // Chama a função correspondente com base no ID do botão
        if (buttonFunctions.hasOwnProperty(buttonId)) {
          const fetchDataFunction = buttonFunctions[buttonId];
          fetchDataFunction();
        }
      });
    });
	
	
	function fetchConteudos(){
		// Limpa a lista atual
		list.innerHTML = '';
	
		let url = 'https://snowy-feather-log.glitch.me/conteudos';

		fetch(url)
		.then((response) => response.json())
		.then(json => {
			const data = json;
			const catalogo = data;
			
			console.log(catalogo);
			console.log(catalogo[0]);

			catalogo.forEach(item => {		
				var catalogElement = document.createElement('div');
				catalogElement.classList.add('catalogElement');

					var imageElement = document.createElement('div');
					imageElement.classList.add('image');
					imageElement.innerHTML = `<a href="${item.linkDoConteúdo}" target="_blank"><img src="${item.linkDaImagem}"></img></a>`;
					catalogElement.appendChild(imageElement);	

					
					var textContent = document.createElement('div');
					textContent.classList.add('textContent');
						var titleElement = document.createElement('div');
						titleElement.innerHTML = `<a href="${item.linkDoConteúdo}" target="_blank"><h3>${item.conteúdo}</h3></a>`;
						textContent.appendChild(titleElement);

						var descriptionElement = document.createElement('p');
						descriptionElement.innerHTML = `<a href="${item.linkDoConteúdo}" target="_blank"><p>${item.descrição}</p></a>`;
						textContent.appendChild(descriptionElement);

						var tagsElement = document.createElement('p');
						tagsElement.classList.add('tags');
						
						item.categoria != "" ? 						tagsElement.innerHTML += item.categoria : null;
						item.versões != "" ? 						tagsElement.innerHTML += " | " + item.versões : null;
						item.plataformas != "" ? 					tagsElement.innerHTML += " | " + item.plataformas : null;
						item.precificação != "" ? 					tagsElement.innerHTML += " | " + item.precificação : null;
						item.necessárioRegistroParaAcesso != "" ? 	tagsElement.innerHTML += " | " + "Necessário registro para acesso: " + item.necessárioRegistroParaAcesso : null; 
						item.tamanhoEmDisco != null  ? 				tagsElement.innerHTML += " | " +  item.tamanhoEmDisco : null;
						
						textContent.appendChild(tagsElement);
					catalogElement.appendChild(textContent);

				list.appendChild(catalogElement);

				list.innerHTML += "<hr>";
			});
		});
	}
	
	function fetchMetaversos(){
		list.innerHTML = '';
	
		let ResourcesArray = [];
	
		let urlRecursos = 'https://api.sheety.co/80691042e0dcd7a3696f8c6b01442842/catálogoDeMetaversos,CaracterizaçãoDosAmbientesImersivos,DeRaERv/recursos';
		
		fetch(urlRecursos)
		.then((response) => response.json())
		.then(json => {
			console.log(json.recursos);
			const recursos = json.recursos;
			
			//console.log(recursos);
		
			recursos.forEach(item => {
				let nome, videochamada, compartilhamentoDeTela, batePapoPrivado, batePapoTextual, batePapoEmAudio, ediçãoDoAmbiente, criaçãoDeAmbiente, inserçãoDeImagens, inserçãoDeVideo, inserçãoDeDocumentos, versãoEmPortuguês, adicionarObjetosTridimensionais, adicionarObjetosInterativos, adicionarLinksEmbutidos, compatívelComVr, multiplataforma;				
				
				item.nome == true ? nome = item.nome : null;
				item.videochamada == true ? videochamada = "video chamada" : null;
				item.compartilhamentoDeTela == true ? compartilhamentoDeTela = "compartilhamento de tela" : null;
				item.batePapoPrivado == true ? batePapoPrivado = "bate papo privado" : null;
				item.batePapoTextual == true ? batePapoTextual = "bate Papo Textual" : null;
				item.batePapoEmAudio == true ? batePapoEmAudio = "bate Papo Em Audio" : null;
				item.ediçãoDoAmbiente == true ? ediçãoDoAmbiente = "ediçãoDoAmbiente" : null;
				item.criaçãoDeAmbiente == true ? criaçãoDeAmbiente = "criaçãoDeAmbiente" : null;
				item.inserçãoDeImagens == true ? inserçãoDeImagens = "inserçãoDeImagens" : null;
				item.inserçãoDeVideo == true ? inserçãoDeVideo = "inserçãoDeVideo" : null;
				item.inserçãoDeDocumentos == true ? inserçãoDeDocumentos = "inserçãoDeDocumentos" : null;
				item.versãoEmPortuguês == true ? versãoEmPortuguês = "versãoEmPortuguês" : null;
				item.adicionarObjetosTridimensionais == true ? adicionarObjetosTridimensionais = "adicionarObjetosTridimensionais" : null;
				item.adicionarObjetosInterativos == true ? adicionarObjetosInterativos = "adicionarObjetosInterativos" : null;
				item.adicionarLinksEmbutidos == true ? adicionarLinksEmbutidos = "adicionarLinksEmbutidos" : null;
				item.compatívelComVr == true ? compatívelComVr = "compatívelComVr" : null;
				item.multiplataforma == true ? multiplataforma = "multiplataforma" : null;
				
				//ResourcesArray.push(compartilhamentoDeTela);
				ResourcesArray.push([videochamada, compartilhamentoDeTela, batePapoPrivado, batePapoEmAudio, ediçãoDoAmbiente, criaçãoDeAmbiente, criaçãoDeAmbiente, 
									inserçãoDeImagens, versãoEmPortuguês, adicionarObjetosTridimensionais, adicionarObjetosInterativos, adicionarLinksEmbutidos, compatívelComVr, multiplataforma]);
				//console.log(ResourcesArray);
			});
		});
		
		//console.log(ResourcesArray);
		
		let url = 'https://api.sheety.co/80691042e0dcd7a3696f8c6b01442842/cat%C3%A1logoDeMetaversos,Caracteriza%C3%A7%C3%A3oDosAmbientesImersivos,DeRaERv/metaversos';
		
		fetch(url)
		.then((response) => response.json())
		.then(json => {
			const data = json;
			const catalogo = data.metaversos;

			catalogo.forEach((item, index) => {		
				var catalogElement = document.createElement('div');
				catalogElement.classList.add('catalogElement');
				
					function exibirImagem (linkDaImagem){	
						var imageElement = document.createElement('div');
						imageElement.classList.add('image');
						imageElement.innerHTML = `<a href="${item.linkDoConteúdo}" target="_blank"><img src="${linkDaImagem}"></img></a>`;
						catalogElement.appendChild(imageElement);	
					}
					exibirImagem(item.linkDaImagem);
					
					item.plataformas != "" ? 					plataformas = item.plataformas : null;
					item.precificação != "" ? 					precificação =  item.precificação : null;
					item.necessárioRegistroParaAcesso != "" ? 	necessárioRegistroParaAcesso = "Necessário registro para acesso: " + item.necessárioRegistroParaAcesso : null; 
					item.máximoDeUsuáriosGratuito != "" ? 		máximoDeUsuáriosGratuito = "máximo de usuários gratuito: " + item.máximoDeUsuáriosGratuito : null; 
					item.máximoDeUsuáriosPago != "" ? 			máximoDeUsuáriosPago =  "máximo de usuários pago: " + item.máximoDeUsuáriosPago : null; 
					item.permiteOutrosServidores != "" ? 		permiteOutrosServidores = "permite outros servidores: " + item.permiteOutrosServidores : null; 
					item.compatívelComVr != "" ? 				compatívelComVr = "compatível com VR: " + item.compatívelComVr : null; 
					item.tamanhoEmDisco != null  ? 				tamanhoEmDisco =  item.tamanhoEmDisco : null;
				
					const tagsArray = [ item.plataformas, necessárioRegistroParaAcesso, máximoDeUsuáriosGratuito, máximoDeUsuáriosPago, permiteOutrosServidores, compatívelComVr, item.tamanhoEmDisco ];
					
					//console.log(tagsArray);
					
					function tagsText (tagsArray) {
						var tagsElement = document.createElement('p');
						tagsElement.classList.add('tags');
						tagsArray.forEach((tag, index) => {
							if(tag != null){
								if (index === tagsArray.length - 1) {
									tagsElement.innerHTML += tag;
								} else {
									tagsElement.innerHTML += tag + " | ";
								}
							}
						});
						textContent.appendChild(tagsElement);
					}
					
					var textContent = document.createElement('div');
					textContent.classList.add('textContent');
						var titleElement = document.createElement('div');
						titleElement.innerHTML = `<a href="${item.linkDoConteúdo}" target="_blank"><h3>${item.ambiente}</h3></a>`;
						textContent.appendChild(titleElement);

						var descriptionElement = document.createElement('p');
						descriptionElement.innerHTML = `<a href="${item.linkDoConteúdo}" target="_blank"><p>${item.descrição}</p></a>`;
						textContent.appendChild(descriptionElement);

						var tagsElement = document.createElement('p');
						tagsElement.classList.add('tags');
						
						textContent.appendChild(tagsElement);
						
						tagsText(tagsArray);
						tagsText(ResourcesArray[index]);

					catalogElement.appendChild(textContent);

				list.appendChild(catalogElement);

				list.innerHTML += "<hr>";
				
				//console.log(ResourcesArray);
			});
		});
	}
	
	function fetchFerramentas(){
		list.innerHTML = '';
		
		let url = 'https://api.sheety.co/80691042e0dcd7a3696f8c6b01442842/catálogoDeFerramentas/geral';
	
		fetch(url)
		.then((response) => response.json())
		.then(json => {
			const data = json;
			const catalogo = data.geral;

			catalogo.forEach(item => {		
				var catalogElement = document.createElement('div');
				catalogElement.classList.add('catalogElement');

					var imageElement = document.createElement('div');
					imageElement.classList.add('image');
					imageElement.innerHTML = `<a href="${item.linkDoConteúdo}" target="_blank"><img src="${item.linkDaImagem}"></img></a>`;
					catalogElement.appendChild(imageElement);	

					
					var textContent = document.createElement('div');
					textContent.classList.add('textContent');
					
						var lineContainer = document.createElement('div');
						lineContainer.classList.add('lineContainer');
							var titleElement = document.createElement('div');
							titleElement.innerHTML = `<a href="${item.linkDoConteúdo}" target="_blank"><h3>${item.ferramenta}</h3></a>`;
							lineContainer.appendChild(titleElement);
							
							if (item.linkDoTutorial != ""){
								var tutorialButton = document.createElement('div');
								tutorialButton.innerHTML = `<a href="${item.linkDoTutorial}" target="_blank"><div class="tutorialButton">Tutorial</div></a>`;
								lineContainer.appendChild(tutorialButton);
							}
						textContent.appendChild(lineContainer);

						var descriptionElement = document.createElement('p');
						descriptionElement.innerHTML = `<a href="${item.linkDoConteúdo}" target="_blank"><p>${item.descrição}</p></a>`;
						textContent.appendChild(descriptionElement);

						var tagsElement = document.createElement('p');
						tagsElement.classList.add('tags');
						
						item.categoria != "" ? 						tagsElement.innerHTML += item.categoria : null;
						item.versões != "" ? 						tagsElement.innerHTML += " | " + item.versões : null;
						item.plataformas != "" ? 					tagsElement.innerHTML += " | " + item.plataformas : null;
						item.precificação != "" ? 					tagsElement.innerHTML += " | " + item.precificação : null;
						item.necessárioRegistroParaAcesso != "" ? 	tagsElement.innerHTML += " | " + "Necessário registro para acesso: " + item.necessárioRegistroParaAcesso : null; 
						item.compatívelComVr != "" ? 				tagsElement.innerHTML += " | " + "compatível com VR: " + item.compatívelComVr : null; 
						item.tamanhoEmDisco != null  ? 				tagsElement.innerHTML += " | " +  item.tamanhoEmDisco : null;
						
						textContent.appendChild(tagsElement);
					catalogElement.appendChild(textContent);

				list.appendChild(catalogElement);

				list.innerHTML += "<hr>";
			});
		});
	}
	
	function fetchLaboratorios(){
		list.innerHTML = '';
	
		let url = 'https://api.sheety.co/80691042e0dcd7a3696f8c6b01442842/laboratóriosVirtuais/geral';
	
		fetch(url)
		.then((response) => response.json())
		.then(json => {
			const data = json;
			const catalogo = data.geral;

			catalogo.forEach(item => {		
				var catalogElement = document.createElement('div');
				catalogElement.classList.add('catalogElement');

					var imageElement = document.createElement('div');
					imageElement.classList.add('image');
					imageElement.innerHTML = `<a href="${item.linkDoConteúdo}" target="_blank"><img src="${item.linkDaImagem}"></img></a>`;
					catalogElement.appendChild(imageElement);	

					
					var textContent = document.createElement('div');
					textContent.classList.add('textContent');
						var titleElement = document.createElement('div');
						titleElement.innerHTML = `<a href="${item.linkDoConteúdo}" target="_blank"><h3>${item.laboratório}</h3></a>`;
						textContent.appendChild(titleElement);

						var descriptionElement = document.createElement('p');
						descriptionElement.innerHTML = `<a href="${item.linkDoConteúdo}" target="_blank"><p>${item.descrição}</p></a>`;
						textContent.appendChild(descriptionElement);

						var tagsElement = document.createElement('p');
						tagsElement.classList.add('tags');
						
						item.tema != "" ? 						tagsElement.innerHTML += item.tema : null;
						item.versões != "" ? 						tagsElement.innerHTML += " | " + item.versões : null;
						
						textContent.appendChild(tagsElement);
					catalogElement.appendChild(textContent);

				list.appendChild(catalogElement);

				list.innerHTML += "<hr>";
			});
		});
	}
	
	// Simula o clique no botão 1 ao abrir a página
    fetchConteudos();