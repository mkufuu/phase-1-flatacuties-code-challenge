async function getAnimalsFromServer() {
    try {
        const resp = await window.fetch('http://localhost:3000/characters', { method: "GET" });
        const data = await resp.json();

        return data;
    } catch (error) {
        console.log(error);

        return [];
    }
}

async function getAnimalById(id) {
    try {
        const resp = await window.fetch(`http://localhost:3000/characters/${id}`, { method: "GET" })
        const data = await resp.json();

        return data;
    } catch (error) {
        console.log(error)

        return {};
    }
}

async function changeAnimalVotes(animal, operation) {
    let votes;
    if (operation === 'plus') votes = parseInt(animal.votes) + 1;
    if (operation === 'minus') votes = parseInt(animal.votes) - 1;

    const payload = { ...animal, votes }

    try {
        const resp = await window.fetch(`http://localhost:3000/characters/${animal.id}`, {
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
        });

        const data = await resp.json();

        if (data.id !== undefined) renderAnimalDetails(data);
    } catch (error) {
        console.log(error)
    }
}

function renderAnimalDetails(animalData) {
    const animalNameElement = window.document.getElementById('animal-detail-name');
    animalNameElement.textContent = animalData.name;

    const animalImageElement = window.document.getElementById('animal-detail-image');
    animalImageElement.src = animalData.image;

    const animalVoteCountDisplayElement = window.document.getElementById('animal-vote-count');
    animalVoteCountDisplayElement.textContent = animalData.votes;

    const incrementButton = window.document.getElementById('animal-vote-increment');
    incrementButton.addEventListener("click", (event) => {
        // prevents the page from refreshing
        event.preventDefault();

        changeAnimalVotes(animalData, "plus");
    })


    const decrementButton = window.document.getElementById('animal-vote-decrement');
    decrementButton.addEventListener("click", (event) => {
        // prevents the page from refreshing
        event.preventDefault();

        changeAnimalVotes(animalData, "minus");
    })
}

window.addEventListener("DOMContentLoaded", async () => {
    const animals = await getAnimalsFromServer();

    // get the animal names view here & populate it
    const mainElement = window.document.getElementById('animal-names');

    animals.forEach((animal) => {
        const buttonElement = document.createElement('button');
        buttonElement.className = 'animal-button';
        buttonElement.id = `animal#${animal.id}`;
        buttonElement.textContent = animal.name;

        buttonElement.addEventListener("click", async (event) => {
            const animalData = await getAnimalById(animal.id);

            renderAnimalDetails(animalData);
        })

        mainElement.appendChild(buttonElement);
    });
});