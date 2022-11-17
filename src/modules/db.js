export async function insertOrder(payload) {
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zdGtkbGZiZHNwZ21od2x4d3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTc5MTMsImV4cCI6MTk4MjE3MzkxM30.HhYAGCNeYDl5cn13TnHttn1rlNA3tXXW9iMelQB7zLM";
  const url = "https://nstkdlfbdspgmhwlxwtt.supabase.co";
  const ress = await fetch(url + "/rest/v1/simpleshop", {
    method: "POST",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zdGtkbGZiZHNwZ21od2x4d3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTc5MTMsImV4cCI6MTk4MjE3MzkxM30.HhYAGCNeYDl5cn13TnHttn1rlNA3tXXW9iMelQB7zLM",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zdGtkbGZiZHNwZ21od2x4d3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTc5MTMsImV4cCI6MTk4MjE3MzkxM30.HhYAGCNeYDl5cn13TnHttn1rlNA3tXXW9iMelQB7zLM",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await ress.json();
}
