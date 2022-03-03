import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://5fa97367c9b4e90016e6a7ec.mockapi.io/api',
});

export const getToDos = () => {
  return instance.get('/todos');
};

export const postToDos = (toDo) => {
    return instance.post('/todos' , toDo);
};

export const putToDos = (toDo) => {
    return instance.put('/todos/'+toDo.id , toDo);
};

export const deleteToDos = (id) => {
    return instance.delete('/todos/'+id);
};
  