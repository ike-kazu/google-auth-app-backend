import passport from "passport";
import { Strategy as GoogleStrategy, Profile } from "passport-google-oauth20";
import dotenv from "dotenv";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      callbackURL: "/auth/google/callback",
    },
    (accessToken: string, refreshToken: string, profile: Profile, done) => {
      /**
       * `profile` には以下の情報が含まれる:
       * - profile.id: Googleの一意のユーザーID
       * - profile.displayName: フルネーム
       * - profile.emails: メールアドレスのリスト
       * - profile.photos: プロフィール画像のリスト
       */
      console.log("Google Profile:", profile);
      done(null, profile); // 認証後にユーザー情報をセッションに保存
    }
  )
);

// セッションにユーザーをシリアライズ
passport.serializeUser((user, done) => {
  done(null, user);
});

// セッションからユーザーをデシリアライズ
passport.deserializeUser((user, done) => {
  done(null, user as Express.User);
});
