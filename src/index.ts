import { Command, flags } from "@oclif/command";
import chalk from "chalk";
import { cli } from "cli-ux";
import inquirer from "inquirer";
import { performance } from "perf_hooks";
import templateOptions, {TemplateOption} from './templates';
var Git = require("nodegit");

class CreateSvelteSite extends Command {
  public static readonly description =
    "Create a Svelte or Sapper site in a single command.";

  public static readonly flags = {
    help: flags.help({ char: "h" }),
    version: flags.version({ char: "v" }),
  };

  public static readonly args: any[] = [{ name: "file" }];

  public async run(): Promise<any> {
    const { args } = this.parse(CreateSvelteSite);
    const {file : projectName} = args;
    if (!projectName) {
      this.error(
        `Please provide a project name. ${chalk.cyan(
          "ex. create-svelte-site my-site"
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


  Git.Clone(`https://github.com/${template}`, projectName, 
  
  {
    fetchOpts: {
      callbacks: {
        certificateCheck: function() {
          // github will fail cert check on some OSX machines
          // this overrides that check
          return 0;
        }
      }
    }
  }).then(function() {
    const endTime = performance.now();
    const timeLapsed = Math.floor(endTime - startTime);
    cli.action.stop(chalk.green(`\n\n ✔ Done in ${timeLapsed}ms\n`));
    console.log(chalk.green(`🚀  Your new site is ready to go!\n`));
    console.log("Next Steps:\n");
    console.log(chalk.cyan(`cd ${projectName}\n`));
    console.log(chalk.cyan(`npm install\n`));
    if (projectType !== "Svelte (component)") {
      console.log(chalk.cyan(`npm run dev\n`));
      console.log(
        `Visit ${chalk.cyan("http://localhost:5000")} in your browser.\n`
      );
    }
  }).catch(() => {
    console.error("Oops...something went wrong. Please try again.")
  })

  }
}

export = CreateSvelteSite;
