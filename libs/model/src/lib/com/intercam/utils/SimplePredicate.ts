export class SimplePredicate {
	public name : string;
	public displayName : string;
	public type : string;
    public operator : string;
	public value : Object;
	constructor(name : string, displayName : string, type : string, operator : string, value : Object){
		this.name = name;
		this.displayName = displayName;
		this.type = type;
		this.operator = operator;
		this.value = value;
	}
}