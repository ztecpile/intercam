import { SimplePredicate } from "../../../Model";

export class PickListVO {
    public entity : string;
    public predicates : SimplePredicate[];
    public fetchLimit : number;
    public relations : string[];
}