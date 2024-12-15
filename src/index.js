const images = document.querySelectorAll('.gallery img');
const search = document.querySelector('#search');



console.log(images);



function handleSearch(){

   //Сохраняем ваш запрос
    let search_result = search.value.toLowerCase();//Приводим к нижнему регистру

    images.forEach( val=>{
        //Ищем описание изображения
        let info = val.dataset.info;

       //Проверка на совпадение с вашим запросом
         if(info.includes(search_result) == true){
            val.style.display = '';
         }else{
            val.style.display = 'none';
         } 
  


    })


}


search.addEventListener('input',handleSearch)

