const menu = () => {
    let content = document.querySelector('div.content');

    let rolls = ['Roly Poly', 'Roly Poly #2', 'Oishi',
                 'Alaskan Roll', 'Rainbow Roll', 'Dragon Roll',
                 'Baked Lobster Roll', 'Baked Scallop Roll', 'Baked Salmon Roll'                
    ];

    let menu_grid = document.createElement('div');
    content.appendChild(menu_grid);
    menu_grid.classList.add('menu');

    rolls.forEach((roll, index) => {
        let menu_item = document.createElement('div');
        menu_grid.appendChild(menu_item);
        menu_item.classList.add('menu-item');

        let roll_image = document.createElement('div');
        menu_item.appendChild(roll_image);
        roll_image.classList.add('roll-image');

        let roll_name = document.createElement('div');
        menu_item.appendChild(roll_name);
        roll_name.classList.add('roll-name');
        roll_name.textContent = `${index+1}. ${roll}`;
    });
}

export { menu };