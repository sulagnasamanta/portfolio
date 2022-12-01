<template>
  <div class="home-container">
    <p class="text1">My name <br>is <b>Rahul</b></p>
    <p class="text2">I am a professional programmer with <br>more than 3 years of experience.</p>
    <div class="hire-me-button">
      <button class="primary-button">Hire Me</button>
    </div>
    <div class="programming-language-container">
      <div class="programming-language-container1">
        <div class="java">
          core java
        </div>
        <div class="html">
          html
        </div>
      </div>
      <div class="programming-language-container2">
        <div class="struts">
          struts
        </div>
        <div class="boot">
          spring boot
        </div>
      </div>
    </div>

  </div>
  <div class="picture">
    <div>
      <img src="../assets/RahulImg.png" alt="">
    </div>
    <div>
      <p class="experience"><span class="year-experience">{{ getExp() }}+</span><br> <span class="experience-text">OF
          EXPERIENCE</span> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioHome',
  data: () => {
    return {
      join: new Date('07-01-2019')
    }
  },
  methods: {
    getExp() {
      return Math.floor((new Date() - new Date(this.join)) / (365 * 3600 * 24 * 1000));
    }

  }
}
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin-inline: auto;
  padding: 0 20px;
}

.picture {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: -1;
}

.picture img {
  width: 40vw;
}

.experience {
  padding: 10px 30px;
  border-radius: 15px;
  color: aliceblue;
  background-color: black;
  width: 130px;
  position: absolute;
  top: 60%;
  right: 90%;
  box-shadow: 5px 5px 5px rgb(92, 90, 90);
  transition: transform 0.5s;
  z-index: 2;
}
.experience:hover{
  transform: scale(1.2);
}

.year-experience {
  font-size: 60px;
}

.experience-text {
  font-size: 15px;
  color: rgb(173, 178, 182);
}

.text1 {
  font-weight: 300;
  font-size: 50px;
}

.text2 {
  margin-top: 20px;
}

.hire-me-button {
  margin-top: 30px;
}

.programming-language-container{
  margin-top: 60px;
}
.programming-language-container1{
  display: flex;
  gap: 20px;
}
.programming-language-container2{
  display: flex;
  gap: 30px;
  margin-top: 10px;
}
.java{
  padding: 10px 20px;
  background-color: rgb(255, 150, 102);
  border-radius: 10px;
  font-weight: 600;
  transition: transform 0.5s;
}
.java:hover{
  transform: scale(1.2);
}
.html{
  padding: 10px 20px;
  background-color: var(--clr-accent-400);
  border-radius: 10px;
  color: aliceblue;
  font-weight: 600;
  transition: transform 0.5s;
}
.html:hover{
  transform: scale(1.2);
}
.boot{
  padding: 10px 20px;
  background-color: rgb(189, 189, 189);
  border-radius: 10px;
  color: rgb(0, 0, 0);
  font-weight: 600;
  transition: transform 0.5s;
}
.boot:hover{
  transform: scale(1.2);
}
.struts{
  padding: 10px 20px;
  background-color: rgb(0, 0, 0);
  border-radius: 10px;
  color: aliceblue;
  font-weight: 600;
  transition: transform 0.5s;
}
.struts:hover{
  transform: scale(1.2);
}
</style>