import { NgModule } from "@angular/core";
import { TaskComponent } from "./component/tasks.component";
import { RouterModule } from "@angular/router";
import { taskRoutes } from "./tasks.routing";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { SharedModule } from "../../shared/shared.module";
import { TaskService } from "../../core/services/task.service";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(taskRoutes),
    SharedModule
],
  providers: [provideHttpClient(withFetch()), TaskService],
})
export class TaskModule {}