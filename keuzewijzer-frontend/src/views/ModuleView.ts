import { View } from './View';
import modules from "../mock/mock_module";

export class ModuleView implements View {
    public data = modules;
    public template = `
    <h1>TITLE</h1>
    {{#each modules}}
        <h1>{{this.year}}</h1>       
    
    {{#each items}}
    <p>{{this.name}}</p>
    
    {{/each}}
    
    {{/each}}
    `;    
}
console.log(modules);