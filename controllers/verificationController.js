const verifyToken = async (req, res) => {
    const { token } = req.params;
  
    try {
      const user = await User.findOneAndUpdate(
        { verificationToken: token, verified: false },
        { $set: { verified: true, verificationToken: null } }, // Nullify the token after verification
        { new: true }
      );
  
      if (user) {
        res.status(200).json({ message: 'Email verified successfully.' });
      } else {
        res.status(404).json({ error: 'Invalid or expired token.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {verifyToken}