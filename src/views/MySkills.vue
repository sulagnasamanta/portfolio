<template>
    <div class="skill-container">
        <section class="skills" id="skills">
            <div class="max-width">
                <h2 class="title">My skills</h2>
                <div class="skills-content">
                    <div class="column left">
                        <div class="text">My Skills and Self Learnings</div>
                        <p>I have acquired knowledge of Web Development through constantly updating myself with new and
                            improved ways of doing things.
                            <br>
                            I have a knowledge of mySQL and I have experience in Database Handling through MongoDB.
                        </p>
                        <button class="primary-button"><a
                                href="https://www.linkedin.com/in/rahul-pramanik-96a7b614b/">Go to my
                                LinkedIn</a></button>

                    </div>
                    <div class="column right">
                        <div class="bars">
                            <div class="info">
                                <span>HTML</span>
                                <span>80%</span>
                            </div>
                            <div class="line html">

                            </div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>CSS</span>
                                <span>60%</span>
                            </div>
                            <div class="line css"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>JavaScript</span>
                                <span>70%</span>
                            </div>
                            <div class="line js"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>Node.JS</span>
                                <span>65%</span>
                            </div>
                            <div class="line nodejs"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>MySQL</span>
                                <span>70%</span>
                            </div>
                            <div class="line mysql"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
    
<style scoped>

.skills{
    padding-top: 100px;
}
.skill-container {
    max-width: 1200px;
    margin-inline: auto;
    padding: 0 20px;
}

.skills .skills-content .right .bars {
    margin-bottom: 15px;
}

.title {
    text-align: center;
    margin-bottom: 30px;
}

.skills-content {
    display: flex;
    gap: 30px;
}

.skills-content>* {
    flex: 1;
}

.skills .skills-content .right .info {
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    justify-content: space-between;
}

.skills .skills-content .right .line {
    height: 5px;
    width: 100%;
    background: lightgrey;
    position: relative;
}

.skills .skills-content .right .line::before {
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: rgb(255, 137, 58);
}

.skills-content .right .html::before {
    width: 80%;
}

a {
    text-decoration: none;
    color: var(--clr-neutral-100);
}
button{
    margin-top: 50px;
}
.text{
    font-weight: 800;
    margin-bottom: 20px;
}
</style>