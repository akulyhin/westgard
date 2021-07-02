import './sass/styles.scss';
import debounce from 'lodash.debounce';


const search = document.getElementById('search');
const content = document.querySelector('.content');
const contentBox = document.querySelectorAll('.content-item');
const newContent = document.querySelector('.new-content');

let contentArr = [];

search.addEventListener('input', debounce((e) => {

    if (e.target.value.length >= 3) {
        searchQuery(e.target.value.toLowerCase());
    }

    else if (e.target.value === '') {
        content.style.display = 'flex';
        newContent.style.display = 'none';
    }
}, 300))


function searchQuery(query) {

    contentBox.forEach(item => {


        if (item.children[0].children[0].innerText.toLowerCase().indexOf(query) !== -1) {
            contentArr.push(item);
        }
    })


    if (contentArr[0]) {
        const resBlock = contentArr[0];
        content.style.display = 'none';
        newContent.style.display = 'flex';
    
        newContent.innerHTML = '';

        const appendBlock = resBlock.cloneNode(true);
        
        newContent.append(appendBlock);
    }

    else {
        content.style.display = 'none';
        newContent.style.display = 'flex';

        newContent.innerHTML = 'Нихера не найдено!';
    }
}


