export interface TemplateOption {
  readonly name: string;
  readonly template: string;
  readonly port: string;
}

const TemplateOptions: readonly TemplateOption[] = [
  {
    name: "Svelte (rollup)",
    template: "sveltejs/template",
    port: "5000"
  },
  {
    name: "Svelte (webpack)",
    template: "sveltejs/template-webpack",
    port: "8080"
  },
  {
    name: "Svelte (component)",
    template: "sveltejs/component-template",
    port: "5000"
  },
  {
    name: "Svelte (custom element)",
    template: "gojutin/svelte-custom-element",
    port: "5000"
  },
  {
    name: "Sapper (rollup)",
    template: "sveltejs/sapper-template#rollup",
    port: "3000"
  },
  {
    name: "Sapper (webpack)",
    template: "sveltejs/sapper-template#webpack",
    port: "3000"
  }
];

export default TemplateOptions;