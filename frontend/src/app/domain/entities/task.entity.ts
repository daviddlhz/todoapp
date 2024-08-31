import { TaskStatus } from "../enums/task.enum";

export interface TaskEntity {
  id?: number;
  title: string;
  description: string;
  status: TaskStatus;
  created_at?: Date;
}
