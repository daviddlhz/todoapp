// src/app/task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskEntity } from '../../domain/entities/task.entity';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:8000/api/tasks/'; // Asegúrate de que este sea el endpoint correcto
  private username = 'root';
  private password = '1234';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const auth = btoa(`${this.username}:${this.password}`);
    return new HttpHeaders({
      Authorization: `Basic ${auth}`,
    });
  }

  getTasks(): Observable<TaskEntity[]> {
    return this.http.get<TaskEntity[]>(this.apiUrl, {
      headers: this.getAuthHeaders(),
    });
  }

  getTask(id: number): Observable<TaskEntity> {
    return this.http.get<TaskEntity>(`${this.apiUrl}${id}/`, {
      headers: this.getAuthHeaders(),
    });
  }

  createTask(task: TaskEntity): Observable<TaskEntity> {
    return this.http.post<TaskEntity>(this.apiUrl, task, {
      headers: this.getAuthHeaders(),
    });
  }

  updateTask(task: TaskEntity): Observable<TaskEntity> {
    return this.http.put<TaskEntity>(`${this.apiUrl}${task.id}/`, task, {
      headers: this.getAuthHeaders(),
    });
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`, {
      headers: this.getAuthHeaders(),
    });
  }
}
