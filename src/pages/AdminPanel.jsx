import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAuthorAdmin, changeAuthorRole } from '../store/actions/adminActions.js';
import Swal from 'sweetalert2';
import ToggleSwitch from "../components/Switch.jsx"

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { activeAuthors, inactiveAuthors } = useSelector((state) => state.admin);
  const [activeTab, setActiveTab] = useState('authors'); // Estado para controlar la pestaña activa

  const handleSwitchChange = (user_id, entity) => {
    console.log(`${entity} ID:`, user_id);
    if (entity === 'author') {
      dispatch(changeAuthorRole(user_id))
        .then(() => {
          dispatch(loadAuthorAdmin());
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'User role changed!',
            showConfirmButton: true,
            
          });
        })
        .catch((error) => {
          console.log('Error cambiando el rol del autor:', error);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Failed to change user role',
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };

  useEffect(() => {
    dispatch(loadAuthorAdmin());
  }, [dispatch]);

  return (
    <div className='flex w-full h-[250vh] flex-col justify-center items-center'>
      <div className="flex w-full h-[60vh] flex-col justify-center items-center bg-[url('/admin.png')] bg-no-repeat bg-cover">
        <h1 className='flex font-semibold text-[80px] text-white'>Panel</h1>
      </div>
      <h2 className='flex font-bold text-[40px] text-orange-500 my-[5rem]'>Entities</h2>

      <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
          <button
            className={`p-[20px_150px] ${
              activeTab === 'authors' ? 'bg-orange-500 rounded-full text-white' : 'rounded-full bg-gray-100'
            }`}
          >
            Authors
          </button>
        </div>

        {activeTab === 'authors' && (
          <div>
            <h3 className='text-center text-[20px] text-black mt-6'>Inactives</h3>
            <table className='text-center text-black rounded-md min-w-[40rem] min-h-[20rem] mt-6 bg-gray-100'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>City</th>
                  <th>Estate</th>
                </tr>
              </thead>
              <tbody>
                {inactiveAuthors.map((author) => (
                  <tr key={author?.user_id}>
                    <td>{author?.name} {author?.last_name}</td>
                    <td>--/--/----{author?.date}</td>
                    <td>{author?.city}</td>
                    <td>

                       <ToggleSwitch initialState={author?.active} onclick={() => handleSwitchChange(author.user_id, 'author')}/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className='text-center text-[20px] text-black mt-6 '>Actives</h3>
            <table className='text-center text-black rounded-md min-w-[40rem] min-h-[20rem] mb-5 mt-6 bg-gray-100'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>City</th>
                  <th>Estate</th>
                </tr>
              </thead>
              <tbody>
                {activeAuthors.map((author) => (
                  <tr key={author?.user_id}>
                    <td>{author?.name} {author?.last_name}</td>
                    <td>--/--/----{author?.date}</td>
                    <td>{author?.city}</td>
                    <td>

                      <ToggleSwitch initialState={author?.active} onclick={() => handleSwitchChange(author.user_id, 'author')}/>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;