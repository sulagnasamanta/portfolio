<template>
  <div class="project-container">
    <a :href="project.url" class="project-card" v-for="project in projects" :key="project.name" target="_blank">
      <img :src="require('../assets/'+project.id+'Logo.png')" alt="">
      <p>{{project.desc}}</p>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'MyProjects',
    data: () => {
      return {
        projects: [
          {
            id: "TCS",
            desc: `Conducted day-to-day project coordination, planning, and implementation across multiple teams.
            Exceptional knowledge of struts and core JAVA. `,
            src: '@/assets/TCSLogo.svg',
            url:'https://www.tcs.com',
          },
          {
            id: "Apisero",
            desc: 'Loading.....',
            src: '@/assets/project-1.jpg',
            url:'https://www.apisero.com',
          }
        ],
      }
    },
  }
</script>

<style scoped>
.project-container {
  margin-top: 80px;
  max-width: 1200px;
  margin-inline: auto;
  padding: 0 20px;
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
}
.project-card:hover {
  transform: scale(1.2);
  background-color: rgb(255, 174, 134);
  color: rgb(0, 0, 0);
}
a {
  text-decoration: none;
  color: rgb(89, 89, 89);
}
.project-card {
  width: 500px;
  transition: transform .5s;
  background-color: var(--clr-accent-100);
  padding: 100px  0px;
  border-radius: 10px;
}

.project-card img {
  border-radius: 10px;
  width: 300px;
}
.project-card p {
  font-weight: 600;
  margin-top: 40px;
  margin-inline: 10px;
}

</style>