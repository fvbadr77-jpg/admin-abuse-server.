export default {
  async fetch(request) {
    return Response.json({
      status: "online",
      server: "Admin Abuse"
    });
  }
};