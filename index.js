
const option= document.querySelectorAll('.option');

const greenItem = document.querySelector('.list-group-item-success');

const submit = document.querySelector('#button')

submit.onclick = ()=>
{
    option.forEach(element=>
    {
        element.classList.toggle('invisible')
    })

    submit.value == 'Hide Destination'? 
    submit.value ='Show Destination':
    submit.value ='Hide Destination';
                   
}

option.forEach(element=>
    {
    element.onclick=(event)=>
        {  
            greenItem.classList.remove('invisible');
    
            greenItem.innerText = `You selected ${event.target.innerText}`
                      
            if(!element.classList.contains('active') )
                {
                        option.forEach(element=>
                    {
                        element.classList.remove('active'); 
                    })      
                    event.target.classList.toggle('active')
                }
            else
                { 
                    option.forEach(element=>
                    {
                        element.classList.remove('active'); 
                    })  
                }
        }   
})