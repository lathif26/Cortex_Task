import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createUser, getUsers, updateUser, getUser, deleteUser } from './api';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUserAction: (state, action) => {
      const { id, data } = action.payload;
      const userIndex = state.findIndex((user) => user._id === id);
      if (userIndex !== -1) {
        state[userIndex] = { ...state[userIndex], ...data };
      }
    },
    removeUser: (state, action) => {
      const userId = action.payload;
      return state.filter((user) => user._id !== userId);
    },
  },
});

export const { setUsers, addUser, updateUserAction, removeUser } = usersSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  try {
    const users = await getUsers();
    dispatch(setUsers(users));
  } catch (error) {
    console.log('Error fetching users:', error);
    throw error;
  }
};

export const createUserAsync = (userData) => async (dispatch) => {
  try {
    const newUser = await createUser(userData);
    dispatch(addUser(newUser));
    return newUser;
  } catch (error) {
    console.log('Error creating user:', error);
    throw error;
  }
};

// export const updateUserAsync = ({ userId, userData }) => async (dispatch) => {
//   try {
//     const updatedUser = await updateUser(userId, userData);
//     dispatch(updateUserAction({ id: userId, data: updatedUser }));
//     return updatedUser;
//   } catch (error) {
//     console.log('Error updating user:', error);
//     throw error;
//   }
// };

export const updateUserAsync = ({ userId, userData }) => async (dispatch) => {
  try {
    const updatedUser = await updateUser(userId, userData);
    if (updatedUser) {
      dispatch(updateUserAction({ id: userId, data: updatedUser }));
      return updatedUser;
    } else {
      throw new Error('Failed to update user. Please try again.');
    }
  } catch (error) {
    console.log('Error updating user:', error);
    throw error;
  }
};



export const deleteUserAsync = (userId) => async (dispatch) => {
  try {
    await deleteUser(userId);
    dispatch(removeUser(userId));
    return userId;
  } catch (error) {
    console.log('Error deleting user:', error);
    throw error;
  }
};

export const fetchUser = (userId) => async (dispatch) => {
  try {
    const user = await getUser(userId);
    return user;
  } catch (error) {
    console.log('Error fetching user:', error);
    throw error;
  }
};

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});

export default store;

