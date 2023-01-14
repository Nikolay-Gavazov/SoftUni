function projectsCreation(input) {
    let name = (input[0]);
    let numberOfProjects = Number(input[1]);
    let timeForProject = 3 * numberOfProjects;
    console.log(`The architect ${name} will need ${timeForProject} hours to complete ${numberOfProjects} project/s.`);
    //The architect ${name} will need ${timeForProject} hours to complete ${numberOfProjects} project/s.

}
projectsCreation(["George ",

"4 "]);