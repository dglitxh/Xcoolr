const it = require("log_in")



module.exports const login  = async (email, password, done) => {
        await prisma.teacher.findUnique({
            where: {
              email: email,
            },
          }), function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      };
    }

  
  