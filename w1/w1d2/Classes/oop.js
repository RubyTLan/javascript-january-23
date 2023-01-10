class Developer {
    constructor(name, health = 50, lang, iq = 55){
        this.name = name
        this.health = health
        this.languages = lang
        this.iq = iq
    }

    sleep(){
        console.log('Zzzzzzzzz')
        this.iq += 5
        this.health += 10
        return this
    }

    completedProjects(title){
        console.log(`${this.name} completed a project named ${title} ${this.languages}`)
        this.iq -= 2;
        this.health -= 4;
        return this
    }
}

const dev1 = new Developer("Ruben", 99, "Python", 900)
const dev2 = new Developer("Kevin", 50, "Python", 65)

// console.log(dev1)
// dev1.sleep().sleep().sleep()
// dev1.completedProjects()
// console.log(dev1)


// console.log(dev2);
// dev2.sleep();
dev2.completedProjects("Javascript but it can be anything you want to add!")
// console.log(dev2);

