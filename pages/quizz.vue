<template>
    <div>
      <div v-if="!quizCompleted">
        <div v-for="(question, index) in questions" :key="index">
          <h2>{{ question.question }}</h2>
          <ul>
            <li v-for="(option, optionIndex) in question.options" :key="optionIndex">
              <input type="radio" :id="`${index}-${optionIndex}`" :value="option" v-model="userAnswers[index]" />
              <label :for="`${index}-${optionIndex}`">{{ option }}</label>
            </li>
          </ul>
        </div>
        <button @click="submitQuiz">Soumettre</button>
      </div>
      <div v-else>
        <h2>Résultat du quiz</h2>
        <p>{{ getResultMessage() }}</p>
        <!-- Ajoutez ici l'action que vous souhaitez pour l'utilisateur après avoir terminé le quiz -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        questions: [],
        userAnswers: [],
        quizCompleted: false
      };
    },
    mounted() {
      // Charger les questions depuis le fichier JSON lors du montage de la page
      this.questions = require('../private/quizz.json');
    },
    methods: {
      submitQuiz() {
        this.quizCompleted = true;
      },
      getResultMessage() {
        const correctAnswers = this.questions.map((q) => q.correctAnswer);
        const userCorrect = this.userAnswers.every((answer, index) => answer === correctAnswers[index]);
  
        return userCorrect ? 'Bravo ! Vous avez répondu correctement à toutes les questions.' : 'Dommage ! Veuillez réessayer.';
      }
    }
  };
  </script>