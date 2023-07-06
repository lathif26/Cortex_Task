const baseUrl = 'http://3.109.214.83:4000';

// Create user
export const createUser = async (userData) => {
  try {
    const response = await fetch(`${baseUrl}/employee/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error creating user:', error);
    throw error;
  }
};

// Get all users
export const getUsers = async () => {
  try {
    const response = await fetch(`${baseUrl}/employeeList`);
    const data = await response.json();
    // console.log(data)
    return data.data;
  } catch (error) {
    console.log('Error getting users:', error);
    throw error;
  }
};

// Update user
// export const updateUser = async (userId, userData) => {
//   try {
//     const response = await fetch(`${baseUrl}/employee/edit`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ _id: userId, ...userData }),
     
//     });
//     const data = await response.json();
    
//     return data.data;
//   } catch (error) {
//     console.log('Error updating user:', error);
//     throw error;
//   }
// };

export const updateUser = async (userId, userData) => {
  try {
    const response = await fetch(`${baseUrl}/employee/edit`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json, text/html',
      },
      body: JSON.stringify({ _id: userId, ...userData }),
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      return data.data;
    } else {
      throw new Error('Failed to update user. Please try again.');
    }
  } catch (error) {
    console.log('Error updating user:', error);
    throw error;
  }
};

// Get user by ID
export const getUser = async (userId) => {
  try {
    const response = await fetch(`${baseUrl}/employee/info/${userId}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log('Error getting user:', error);
    throw error;
  }
};

// Delete user
export const deleteUser = async (userId) => {
  try {
    await fetch(`${baseUrl}/employee/del/${userId}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.log('Error deleting user:', error);
    throw error;
  }
};
