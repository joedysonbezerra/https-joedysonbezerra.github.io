    let list = document.querySelector('#app ul');
    let input = document.querySelector('input');
    let button = document.querySelector('#submit');

    // transform json - Array
    let to_do = JSON.parse(localStorage.getItem('list')) || [];

    //Create list 
    function render(){
        list.innerHTML = '';

        to_do.forEach(element => {
            //Create element tag li and element transform text 

            let li = document.createElement('li');
            li.classList.add("collection-item");
            let text_element = document.createTextNode(" " + element + "    ");

            let excluir = document.createElement('a');
            excluir.setAttribute('href','#');
            excluir.setAttribute('onclick', 'exclude('+to_do.indexOf(element)+')'); // Armazenando a posição
            let excluir_text = document.createTextNode('Excluir');


            excluir.appendChild(excluir_text);
            li.appendChild(text_element);

            li.appendChild(excluir);
            list.appendChild(li);
        });
    };
        
        render();

    //add element to do in the array
    function add(){
        let dotext = input.value;

        to_do.push(dotext);
        input.value = '';
        render();
        saveStorage();
    };

    button.addEventListener ('click', add);

    function exclude(pos) {
        to_do.splice(pos, 1); // Delete element by position in the array
        render();
        saveStorage();
    };

    function saveStorage(){
        localStorage.setItem('list',JSON.stringify(to_do));// transform Array - Json
    }