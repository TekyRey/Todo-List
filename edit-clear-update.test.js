/**
 * @jest-environment jsdom
 */

import TodoList from './src/modules/addTodo.js';

document.body.innerHtml = `<main>

describe('Clear All Completed Tasks', () => {
  const titleOne = 'Task two';
  const titleTwo = 'Task three';
  const titleFour = 'Task Four';
  test('Clear All Completed Tasks', () => {
    const todolist = new TodoList();
    todolist.addTask(titleOne);
    todolist.addTask(titleTwo);
    todolist.addTask(titleFour);

    const { length } = todolist.listArray;

    expect(length).toBe(4);
  });

  test(
    'Mark Some Tasks as completed and remove them',
    () => {
      const todolist = new TodoList();
      todolist.addTask(titleOne);
      todolist.addTask(titleTwo);
      todolist.addTask(titleFour);

      const { length } = todolist.listArray;

      expect(length).toBe(7);
    },
    () => {
      const todolist = new TodoList();
      // Mark task as Completed
      todolist.listArray[0].completed = true;
      todolist.listArray[1].completed = true;
      // Remove completed tasks
      todolist.clearCompleted();
      const { length } = todolist.listArray;
      expect(length).toBe(4);
    },
  );
});

// test editing a task description in localStorage using describe
describe('Editing', () => {
  const todolist2 = new TodoList();
  const title = {
    description: 'test',
    completed: false,
  };
  todolist2.addTask(title);
  const index = 1;
  const textInsterted = 'Task';

  // Edit Task
  test('Edit a task', () => {
    todolist2.editTask(index, textInsterted);
    expect(todolist2.listArray[index - 1].description).toBe(textInsterted);
  });
});
