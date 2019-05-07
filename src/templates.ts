export interface TemplateOption {
  readonly name: string;
  readonly template: string;
}

const TemplateOptions: readonly TemplateOption[] = [
  {
    name: "Svelte (rollup)",
    template: "sveltejs/template"
  },
  {
    name: "Svelte (webpack)",
    template: "sveltejs/template-webpack"
  },
  {
    name: "Svelte (component)",
    template: "sveltejs/component-template"
  },
  {
    name: "Sapper (rollup)",
    template: "sveltejs/sapper-template#rollup"
  },
  {
    name: "Sapper (webpack)",
    template: "sveltejs/sapper-template#webpack"
  }
];

export default TemplateOptions;