import { Command, flags } from "@oclif/command";
import chalk from "chalk";
import { cli } from "cli-ux";
import inquirer from "inquirer";
import { performance } from "perf_hooks";
import templateOptions, {TemplateOption} from './templates';
/* tslint:disable */
const degit = require('degit');
/* tslint:enable */

class CreateSvelteApp extends Command {
  public static readonly description =
    "Create a Svelte or Sapper app in a single command.";

  public static readonly flags = {
    help: flags.help({ char: "h" }),
    version: flags.version({ char: "v" }),
  };

  public static readonly args: any[] = [{ name: "file" }];

  public async run(): Promise<any> {
    const { args } = this.parse(CreateSvelteApp);
    if (!args.file) {
      this.error(
        `Please provide a project name. ${chalk.cyan(
          "ex. create-svelte-site my-new-app"
        )}`
      );
    }

    const response: any = await inquirer.prompt([
      {
        choices: templateOptions.filter(({ name }) => ({ name })),
        message: "Please select a template.",
        name: "projectType",
        type: "list"
      }
    ]);
    const { projectType } = response;

    cli.action.start(`Great choice! Generating your ${projectType} app`);
    const startTime = performance.now();

    const { template } = templateOptions.find(
      (o: TemplateOption) => o.name === projectType
    ) as TemplateOption;

    const emitter = degit(template, {
      cache: true,
      force: true,
      verbose: true
    })

    emitter.clone(args.file).then(() => {
      const endTime = performance.now();
      const timeLapsed = Math.floor(endTime - startTime);
      cli.action.stop(chalk.green(`\n\n ✔ Done in ${timeLapsed}ms\n`));
      this.log(chalk.green(`🚀  Your app is ready to go!\n`));
      this.log("Next Steps:\n");
      this.log(chalk.cyan(`cd ${args.file}\n`));
      this.log(chalk.cyan(`npm install\n`));
      if (projectType !== "Svelte (component)") {
        this.log(chalk.cyan(`npm run dev\n`));
        this.log(
          `Visit ${chalk.cyan("http://localhost:5000")} in your browser.\n`
        );
      }
    });
  }
}

export = CreateSvelteApp;
