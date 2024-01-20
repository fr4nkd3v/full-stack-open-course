# Full Stack Open Course

In this repository you can find the solved exercises of the Full Stack Open course as part of my learning in web technologies.

![fullstackopen banner](https://fullstackopen.com/static/EYE_green_wide-0a72f74a959f54d0f3e4bb8c67f6f158.jpg)

## 🚀 Repository Structure

```text
/
├── part0/
│   └── exercise-0.4.md
│   └── exercise-0.5.md
│   └── exercise-0.6.md
│   └── README.md
├── part1/
│   └── course-info/
│   └── README.md
├── .gitignore
└── README.md
```

## 📁 List of Course Parts

1. [Part 0](./part0/)
2. [Part 1](./part1/)
3. [Part 2](./part2/)
4. [Part 3](./part3/)

## 🧾 Documentation

### Phonebook backend

The Phonebook Backend project is part of the proposal exercises in Part 3 of the course (Exercises 3.10., 3.11.).

This exercise consists of deploying the backend of the agenda to the Internet, in this case I used Render to host the project in the cloud, so I created another [repository](https://github.com/fr4nkd3v/phonebook-backend-fullstackopen) exclusively for this exercise, since Render needs the project to be in the root of the repository to deploy it correctly.

Below is a list of the App frontend and available endpoints:

- App Frontend url: <https://phonebook-backend-c66y.onrender.com>
- Endpoints:
  - Data detail: GET <https://phonebook-backend-c66y.onrender.com/info>
  - Get all persons: GET <https://phonebook-backend-c66y.onrender.com/api/persons>
  - Get on person by id: GET [https://phonebook-backend-c66y.onrender.com/api/persons/:id](https://phonebook-backend-c66y.onrender.com/api/persons/1)
  - Add person: POST <https://phonebook-backend-c66y.onrender.com/api/persons>
  - Delete person by id: DELETE <https://phonebook-backend-c66y.onrender.com/api/persons/:id>
