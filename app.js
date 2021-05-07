const data = [
    {
        name: 'Hari',
        age: 23,
        gender: 'male',
        lookingfor: 'female',
        location: 'Birgunj',
        image: 'https://randomuser.me/api/portraits/med/men/82.jpg'
    },

    {
        name: 'john',
        age: 46,
        gender: 'male',
        lookingfor: 'female',
        location: 'pokhara',
        image: 'https://randomuser.me/api/portraits/med/men/83.jpg'
    },

    {
        name: 'Roshan',
        age: 23,
        gender: 'femal',
        lookingfor: 'male',
        location: 'ktm',
        image: 'https://randomuser.me/api/portraits/med/women/84.jpg'
    },

    {
        name: 'sarika',
        age: 22,
        gender: 'femal',
        lookingfor: 'male',
        location: 'bangular',
        image: 'https://randomuser.me/api/portraits/med/women/85.jpg'
    }
];

const profiles = profileIterator(data);

//Call first profile
nextprofile();

// Next Event
document.getElementById('next').addEventListener('click',nextprofile);

// Next profile Display
function nextprofile() {
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>  
                <li class="list-group-item">Prefrence: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li> 
            </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `<img src = "${currentProfile.image}">`;
    }else {
        // No more Profile
        window.location.reload();

    }
}
// Profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ?
            {value:profiles[nextIndex++], done: false}:
            { done: true}
        }
    };
}