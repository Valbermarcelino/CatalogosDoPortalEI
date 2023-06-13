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
						
						tagsElement.innerHTML += item.tags;
                        
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
		
		let url = 'https://snowy-feather-log.glitch.me/metaversos';
		
		fetch(url)
		.then((response) => response.json())
		.then(json => {
			const data = json;
			const catalogo = data;

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
						
						tagsElement.innerHTML += item.tags;

						textContent.appendChild(tagsElement);
					catalogElement.appendChild(textContent);

				list.appendChild(catalogElement);

				list.innerHTML += "<hr>";
			});
		});
	}
	
	function fetchFerramentas(){
		list.innerHTML = '';
		
		let url = 'https://snowy-feather-log.glitch.me/ferramentas';
	
		fetch(url)
		.then((response) => response.json())
		.then(json => {
			const data = json;
			const catalogo = data;

            console.log(catalogo);

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
						
						tagsElement.innerHTML += item.tags;

						textContent.appendChild(tagsElement);
					catalogElement.appendChild(textContent);

				list.appendChild(catalogElement);

				list.innerHTML += "<hr>";
			});
		});
	}
	
	function fetchLaboratorios(){
		list.innerHTML = '';
	
		let url = 'https://snowy-feather-log.glitch.me/laboratorios';
	
		fetch(url)
		.then((response) => response.json())
		.then(json => {
			const data = json;
			const catalogo = data;

            console.log(catalogo);

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
						
						tagsElement.innerHTML += item.tags;

						textContent.appendChild(tagsElement);
					catalogElement.appendChild(textContent);

				list.appendChild(catalogElement);

				list.innerHTML += "<hr>";
			});
		});
	}
	
	// Simula o clique no botão 1 ao abrir a página 
    fetchConteudos();