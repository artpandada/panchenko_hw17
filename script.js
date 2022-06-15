'use strict';
const arr = [1, 2, [1.1, 1.2, 1.3], 3]

function generateList(array) {
    const fragment = new DocumentFragment();
    const ul = document.createElement('ul');

    array.forEach(item => {

        const li = document.createElement('li');
        if (Array.isArray(item)) {
            li.setAttribute('class', 'list_nested');
            li.appendChild(generateList(item));
        } else {
            li.textContent = item;
            li.setAttribute('class', 'list');
        }
        fragment.append(li);


    });
    ul.append(fragment);
    return ul;

}


const list = generateList(arr);
list.setAttribute('class', 'wrapper_list');
document.body.prepend(list);


function createTable() {
    const table = document.createElement('table');
    const fragments = new DocumentFragment();


    for (let i = 0; i < 10; i++) {
        let tr = document.createElement('tr');
        fragments.appendChild(tr);


        for (let t = 1; t <= 10; t++) {
            let td = document.createElement('td');
            td.textContent = i * 10 + t;
            tr.append(td);


        }

    }


    table.append(fragments);
    return table;

}

const table = createTable();
table.setAttribute('class', 'table');
list.after(table);


