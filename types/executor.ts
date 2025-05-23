import { LogCollector } from "@/types/log";
import { WorkflowTask } from "@/types/workflow";
import { Browser, Page } from "puppeteer";

export type Environment = {
  browser?: Browser;
  page?: Page;

  // Phases with nodeId/taskId as key
  phases: Record<
    string, // key: nodeId/taskId
    {
      inputs: Record<string, string>;
      outputs: Record<string, string>;
    }
  >;
};

export type ExecutionEnvironment<T extends WorkflowTask> = {
  executionId: string;
  getInput(name: T["inputs"][number]["name"]): string;
  setOutput(name: T["outputs"][number]["name"], value: string): void;
  getPlugin(): string[];

  getBrowser(): Browser | undefined;
  setBrowser(browser: Browser): void;

  getPage(): Page | undefined;
  setPage(page: Page): void;

  log: LogCollector;
};
