# Comandos Angular

### Descargral Repositorios
> npm install

### iniciar servidor desarrollo
> nx run ismart-pos:serve

### compilar proyecto qa
> nx run ismart-pos:build --configuration=qa --base-href=/ismart-pos/

### compilar proyecto
> nx run ismart-pos:build

### Generar App
> nx generate @nrwl/angular:app pos

### Generar Libreria
> nx generate @nrwl/angular:library contrato

### Generar Modulo
> npx nx g m clientes/altaCliente --project=operacion

### Generar componente
> npx nx g c components/contratos/funcionarios/funcionarioAbc --project=contrato

### Generar Libreria
> nx generate @nrwl/angular:library tesoreria

### Sniped Input
>  "Input_Form": {
        "prefix": "input_a_form",
        "body": [
            "\t<div id=\"div$1\" class=\"col-sm-4\">",
            "\t\t<input type=\"text\" class=\"formulario__input\" [control]=\"getCtr('$1')\" formControlName=\"$1\" idbInput>",
            "\t\t<label class=\"formulario__label\">{{'$2' | transloco}}</label>",
            "\t</div>",
        ]
    }

###Links

[Angular](https://angular.io/)
[Angular Material](https://material.angular.io/)