import { NgModule } from '@angular/core';
import { TaskCardComponent } from './task-card/task-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskModalComponent } from './task-modal/task-modal.component';

@NgModule({
  declarations: [TaskCardComponent, TaskModalComponent],
  imports: [CommonModule, FormsModule],
  exports: [TaskCardComponent, TaskModalComponent],
})
export class ComponentsModule {}
