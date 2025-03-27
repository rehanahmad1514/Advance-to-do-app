// Mock authentication service
const users = [
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' },
  ];
  
  export const mockLogin = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(
          (u) => u.username === username && u.password === password
        );
        if (user) {
          resolve({ ...user, token: 'mock-token' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };