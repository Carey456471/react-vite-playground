import React, { useContext, useState } from 'react';
import { ProtectedRoute } from '../components';

import { useDispatch } from 'react-redux';

function HomePage() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  // const addTodoHandler = (e) => {
  //   e.preventDefault();

  //   dispatch(addTodo(input));
  //   setInput('');
  // };

  const handleLogout = async () => {
    console.log('logout start');

    // await logoutApi();

    console.log('logout end');
  };

  const handleTest = () => {
    window.location.href = '#/home123';
  };
  const test = () => {
    console.log(123);
  };

  return (
    <ProtectedRoute>
      <div className="" onClick={handleLogout}>
        Home
      </div>
      <div className="bg-purple-500 w-[40px] h-[40px] flex items-end" onClick={handleTest}>
        test
      </div>
      {/* <div>
        <form onSubmit={(e) => addTodoHandler(e)}>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          <button type="submit">submit</button>
        </form>
      </div> */}
    </ProtectedRoute>
  );
}

export default HomePage;
