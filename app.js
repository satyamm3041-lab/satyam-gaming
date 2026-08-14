const SUPABASE_URL = "https://vopthnmvjzqzgutafk.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_sK6R9EbqU2csOQY2GHhQuw_ydsfZ7w0";

const db = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    message.textContent = "Creating account...";

    const { error } = await db.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          username: username
        }
      }
    });

    if (error) {
      message.textContent = error.message;
      return;
    }

    message.textContent =
      "Account created! Check your email for verification.";
  });
}