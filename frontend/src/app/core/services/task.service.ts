import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskEntity } from '../../domain/entities/task.entity';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:8000/api/tasks/';
  private username = 'root';
  private password = '1234';

  constructor(private http: HttpClient) {}

  /**
   * Generates the authorization headers for HTTP requests.
   * @returns {HttpHeaders} The HTTP headers with Basic Auth.
   */
  private getAuthHeaders(): HttpHeaders {
    const auth = btoa(`${this.username}:${this.password}`);
    return new HttpHeaders({
      Authorization: `Basic ${auth}`,
    });
  }

  /**
   * Fetches all tasks from the API.
   * @returns {Observable<TaskEntity[]>} An observable of an array of TaskEntity.
   */
  getTasks(): Observable<TaskEntity[]> {
    return this.http.get<TaskEntity[]>(this.apiUrl, {
      headers: this.getAuthHeaders(),
    });
  }

  /**
   * Fetches a single task by its ID.
   * @param {number} id - The ID of the task to fetch.
   * @returns {Observable<TaskEntity>} An observable of the TaskEntity.
   */
  getTask(id: number): Observable<TaskEntity> {
    return this.http.get<TaskEntity>(`${this.apiUrl}${id}/`, {
      headers: this.getAuthHeaders(),
    });
  }

  /**
   * Creates a new task.
   * @param {TaskEntity} task - The task entity to create.
   * @returns {Observable<TaskEntity>} An observable of the created TaskEntity.
   */
  createTask(task: TaskEntity): Observable<TaskEntity> {
    return this.http.post<TaskEntity>(this.apiUrl, task, {
      headers: this.getAuthHeaders(),
    });
  }

  /**
   * Updates an existing task.
   * @param {TaskEntity} task - The task entity to update.
   * @returns {Observable<TaskEntity>} An observable of the updated TaskEntity.
   */
  updateTask(task: TaskEntity): Observable<TaskEntity> {
    return this.http.put<TaskEntity>(`${this.apiUrl}${task.id}/`, task, {
      headers: this.getAuthHeaders(),
    });
  }

  /**
   * Deletes a task by its ID.
   * @param {number} id - The ID of the task to delete.
   * @returns {Observable<void>} An observable of the deletion operation.
   */
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`, {
      headers: this.getAuthHeaders(),
    });
  }
}
