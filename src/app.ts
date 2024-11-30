import express from "express";
import passport from "passport";
import session from "express-session";
import dotenv from "dotenv";
import "./auth"; // Google OAuth 設定をインポート

dotenv.config();

const app = express();

// セッション設定
app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret",
    resave: false,
    saveUninitialized: true,
  })
);

// Passport の初期化
app.use(passport.initialize());
app.use(passport.session());

// ルート: ホームページ
app.get("/", (req, res) => {
  res.send('<h1>Home</h1><a href="/auth/google">Login with Google</a>');
});

// Google認証を開始
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google認証のコールバック
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/profile");
  }
);

// プロフィールページ
app.get("/profile", (req, res) => {
  if (!req.user) {
    return res.redirect("/");
  }

  res.send(`
    <h1>Profile</h1>
    <p>Google ID: ${(req.user as any).id}</p>
    <p>Name: ${(req.user as any).displayName}</p>
    <p>Email: ${(req.user as any).emails?.[0].value}</p>
  `);
});

// ログアウト
app.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

export default app;
