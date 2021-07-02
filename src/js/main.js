const search = document.getElementById('search');
const content = document.querySelector('.content');
const allContent = document.querySelectorAll('.content-item');
const contentBox = document.querySelectorAll('.content-box');


search.addEventListener('input', (e) => {

    console.log(e.target.value)

    if (e.target.value.length >= 3) {
        searchQuery(e.target.value.toLowerCase());
    }

    else if (e.target.value === '') {
        content.innerHTML = '';

        console.log(allContent);

        allContent.forEach(item => {
            console.log(item);
            content.appendChild(item);
        })
    }
})


function searchQuery(query) {

    contentBox.forEach(item => {
        if (item.children[0].textContent.toLowerCase().indexOf(query) !== -1) {
            contentArr.push(item)
        }
    })


    if (contentArr[0]) {
        const resBlock = contentArr[0];
    
        content.innerHTML = '';
        
        content.appendChild(resBlock);
    }

    else {

        content.innerHTML = 'Нихера не найдено!';
        console.log('Нихера не найдено!')
    }



}


