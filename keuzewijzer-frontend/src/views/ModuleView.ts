import { View } from './View';
import modules from "../mock/mock_module";

export class ModuleView implements View {
    public template = `
    {{#each modules}}
        <h1>Year to select: {{year}}</h1>       
        <p>Module name: {{name}}</p>    
    {{/each}}
    `;    
    public data = modules;
}
console.log(modules);