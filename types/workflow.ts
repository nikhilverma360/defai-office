import { AppNode } from "@/types/appNode";
import { TaskParam, TaskType } from "@/types/task";
import { LucideProps } from "lucide-react";

export enum WorkflowStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}
export type WorkflowTask = {
  label: string;
  icon: React.FC<LucideProps>;
  type: TaskType;
  isEntryPoint?: boolean;
  isAgent?: boolean;
  inputs: TaskParam[];
  outputs: TaskParam[];
  plugins?: string[];
  credits: number;
};

export type WorkflowExecutionPlanPhase = {
  phase: number;
  nodes: AppNode[];
};

export type WorkflowExecutionPlan = WorkflowExecutionPlanPhase[];

export enum WorkflowExecutionStatus {
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

export enum WorkflowExecutionTrigger {
  MANUAL = "MANUAL",
  CRON = "CRON",
  WEBHOOK = "WEBHOOK",
}

export enum ExecutionPhaseStatus {
  CREATED = "CREATED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}
