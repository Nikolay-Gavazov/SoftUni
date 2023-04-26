function constructionCrew(obj) {

    if (obj.dizziness == true) {
        obj.levelOfHydrated += 0.1 * obj.experience * obj.weight;
        obj.dizziness = false
        return obj;
    } else {
        return obj;
    }

}
constructionCrew({ weight: 80,

    experience: 1,
    
    levelOfHydrated: 0,
    
    dizziness: true })