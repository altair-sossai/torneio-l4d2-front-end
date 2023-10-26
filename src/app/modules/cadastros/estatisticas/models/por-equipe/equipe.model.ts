import { Time } from "../../../times/models/time";
import { ConfrontoModel } from "./confronto.model";

export interface EquipeModel {
    time: Time;
    confrontos: ConfrontoModel[];
}