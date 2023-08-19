exports.getAllUsers = (req, res) => {
    res.json({ message: "Return all users" });
  };
  
  exports.getUserById = (req, res) => {
    res.json({ message: `Get user with ID: ${req.params.id}` });
  };
  
  exports.createUser = (req, res) => {
    res.json({ message: "User created" });
  };
  
  exports.updateUser = (req, res) => {
    res.json({ message: `Update user with ID: ${req.params.id}` });
  };
  
  exports.deleteUser = (req, res) => {
    res.json({ message: `Delete user with ID: ${req.params.id}` });
  };
  