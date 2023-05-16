import {resolve as _resolve} from "path"

export function resolve(p){
    return _resolve(__dirname,"../",p)
}