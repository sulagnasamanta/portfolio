<template>
    <header>
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/Skills">Skills</router-link>
                    </li>
                    <li>
                        <router-link to="/myProjects">Experience</router-link>
                    </li>

                </ul>
            </nav>

            <button class="secondary-button">
                Contact Me
            </button>
        </div>
    </header>
    
    

</template>

<script>
export default {
    name: 'HeaderApp'

}

</script>

<style scoped>
.container {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 40px 20px;
     max-width: 1200px;
     margin-inline: auto;


 }

 ul {
     display: flex;
     list-style: none;
     gap: 40px;
 }
 .secondary-button {
  padding: 16px 32px;
  background-color: var(--clr-neutral-100);
  border: none;
  border-radius: 24px;
  border: solid 2px var(--clr-accent-400);
  box-shadow:5px 5px 5px var(--clr-accent-400);
  color: black;
  font-weight: var(--fw-bold);
  font-family: var(--font-family);
  cursor: pointer;
  transition: box-shadow 0.4s;
}
.secondary-button:hover {
  box-shadow: 0 3px 10px hsla(0, 0%, 100%, 0.75);
}
a {
    text-decoration: none;
    color: rgb(71, 71, 71);
    font-weight: 600;
    transition: color 0.3s;
    padding: 5px 16px;
    border-radius: 8px;
}
a:hover {
    text-decoration: none;
    color:hsl(12, 88%, 59%);
    font-weight: 600;
}
a.router-link-active {
    color: rgb(255, 255, 255);
    background-color: hsl(12, 88%, 59%);
    
}
</style>