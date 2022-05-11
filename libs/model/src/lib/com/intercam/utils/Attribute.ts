export class Attribute {
	public name : string;
	public displayName : string;
	public type : string;

	constructor(name : string, displayName : string, type : string){
		this.name = name;
		this.displayName = displayName;
		this.type = type;
	}
}