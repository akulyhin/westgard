import './sass/styles.scss';
import debounce from 'lodash.debounce';


const search = document.getElementById('search');
const content = document.querySelector('.content');
const contentBox = document.querySelectorAll('.content .content-item');
const allContent = document.querySelectorAll('.content .content-item');

let contentArr = [];


search.addEventListener('input', debounce((e) => {

    if (e.target.value.length > 2) {
        searchQuery(e.target.value.toLowerCase());
    }

    else if (e.target.value === '') {
        content.innerHTML = '';

        allContent.forEach(item => {
            content.appendChild(item);
        })  
    }
}, 300))


function searchQuery(query) {

    contentArr = [];

    contentBox.forEach(item => {
        if (item.children[0].children[0].innerText.toLowerCase().indexOf(query) !== -1) {
            contentArr.push(item);
        }
    })

    if (contentArr[0]) {
        let resBlock = contentArr;
    
        content.innerHTML = '';
        content.append(...resBlock);
    }

    else {
        content.innerHTML = 'Нифига не найдено! Попробуйте сменить запрос!';
    }
}


