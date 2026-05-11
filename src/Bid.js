const Interests = {
	Interested: Symbol("Interested"),
	Maybe: Symbol("Maybe"),
	NotInterested: Symbol("NotInterested"),
	Conflict: Symbol("Conflict")
};

class Bid{
    constructor(paper, reviewer, interest){
        this._paper = paper;
        this._reviewer = reviewer;
        this._interest = interest;

    }
    paper(){
        console.log("Es una prueba");
		console.log("Es un conflicto");
        return this._paper;
    }
    reviewer(){
		console.log("Es una prueba");
        return this._reviewer;
    }
    interest(){
        return this._interest;
    }
    setInterest(interest){
        this._interest = interest;
    }
}
module.exports = {Bid, Interests};
