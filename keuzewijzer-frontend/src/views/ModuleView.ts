import { View } from './View';
import modules from "../mock/mock_module";

export class ModuleView implements View {
    public template = `
    <script id="template" type="text/x-handlebars-template">
    <h1> {{name}} </h1>

    <ol> {{module.name}}</ol>
    </script>

    <script type="text/javascript">
    var modules = document.getElemenyById("template").innerHTML;
    var result = Handlebars.comppile(modules)

    {{#each modules}}
        <h1>Year to select: {{year}}</h1>       
        <ol>
        <li>Module name: {{name}}</li>    
        </ol>
    {{/each}}
    </script>
    `;    
    public data = modules;
}
console.log(modules);