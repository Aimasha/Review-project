const review = [
    {   
        link: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        name: 'Susan Smith',
        job: 'Web Developer',
        info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        link: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        name: 'Anna Johnson', 
        job: 'Web Designer', 
        info: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
    },
    {  
        link:'//res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        name: 'Peter Jones', 
        job: 'Intern',
        info: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
    },
    {   
        link: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        name: 'Bill Anderson',
        job: 'The Boss',
        info: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.'
    }, 
];

const rev = document.getElementById("rev");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const bottomBtn = document.getElementById("bottomBtn");

let index = 0;

function render(){
    rev.innerHTML = `
        <div id="backImg">
            <img src="${review[index].link}" id="person-img" alt="person-img">
        </div>
        <div id="info">
            <h4 id="FLname">${review[index].name}</h4>
            <h4 id="job">${review[index].job}</h4>
            <p id="info">${review[index].info}</p>
        </div>
    `
}
render()

function clickNext(){
    (index == review.length-1) ? index = 0 : index++
    render()
}

function clickPrev(){
    (index == 0) ? index = review.length-1 : index--
    render()
}

function surpriseMe(){    
    index = Math.floor(Math.random()*(review.length))
    render()    
}

