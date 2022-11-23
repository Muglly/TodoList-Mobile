import React, { createContext, useState } from 'react';

export const TaskContext = createContext({
  isNewTask: '',
  setIsNewTask: (id) => null,
});

export const TaskContextState = ({ children }) => {
  const [isNewTask, setIsNewTask] = useState('');
  return (
    <TaskContext.Provider value={{ isNewTask, setIsNewTask }}>{children}</TaskContext.Provider>
  );
};
