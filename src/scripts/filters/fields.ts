export function FieldsFilter() {
    return function (input: any[], search: string, properties: any[] = []): any[] {
        search = search.toString().toLowerCase();
        if(search.length === 0 || input === undefined){
            return input;
        }
        var output: any[] =[];
        if(properties.length > 0){
            for(let i=0; i < input.length; i++){
                var found = false;
                var item = input[i];
                for(let j=0; j < properties.length; j++){
                    if(found === true){ 
                        break;
                    }
                    found = item[properties[j]].toString().toLowerCase().indexOf(search) !== -1;
                }
                if(found === true){
                    output.push(item);
                }
            }
        }else{
            output = input;
        }
        return output;
    }
}