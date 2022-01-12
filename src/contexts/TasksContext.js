import React, {createContext, useState, useEffect} from 'react';

const TasksContext = createContext();

const TasksContextProvider = props => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const fetchTasks = async () => {
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/Fragkou-Dimitra/demo/db',
      );
      const json = await response.json();
      setData(json.tasks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <TasksContext.Provider value={[data, setData]}>
      {props.children}
    </TasksContext.Provider>
  );
};

export {TasksContext, TasksContextProvider};
