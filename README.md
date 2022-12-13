# Flatacuties

## Getting started

Welcome to the Flatacuties project, which is a demonstration of what I have learnt so far, using iteration of Arrays(looping), DOM manipulation, Communication with a server using the fetch API and json-server package.

## Project setup

To run this application:

- Clone the repository from [mkufuu/phase-1-flatacuties](https://github.com/mkufuu/phase-1-flatacuties-code-challenge.git). If you see a 404, in the page when trying to clone, kindly ask me to add you to the repository as a contributor.
- Run `npm install` to install all necessary packages for the applction to work.
- Ensure that you have the json data as below:

```json
{
  "characters": [
    {
      "id": 1,
      "name": "Mr. Cute",
      "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
      "votes": 0
    },
    {
      "id": 2,
      "name": "Mx. Monkey",
      "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
      "votes": 0
    },
    {
      "id": 3,
      "name": "Ms. Zebra",
      "image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
      "votes": 0
    },
    {
      "id": 4,
      "name": "Dr. Lion",
      "image": "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
      "votes": 0
    },
    {
      "id": 5,
      "name": "Mme. Panda",
      "image": "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
      "votes": 0
    }
  ]
}
```

- After everything is installed, run the command `json-server -w db.json` while in the project directory / folder.
- Open the `index.html` file in the browser, and start interacting with the application

## How to use the application

1. When you open the `index.html` file in the browser, you should see a list of animals. None is slected at first.

2. Click on any animal name you want and you'll notice that that specific animals has been highlighted / shown below.

3. At this point you can award points to the animal, and save the point you have awarded.

> The lowest point that can be awarded is `zero` and there is not upper limit i.e an animal can have as many points as they can amass.

4. You are also able to reset a specific animal's points to zero, using a reset button that can be found at the bottom of each animal.

## Author

[Howard Mnengwa](https://github.com/mnengwa) also find my profesional works on [Twitter](), [Instagram](), and [Linkedin]()

## Licence

MIT
