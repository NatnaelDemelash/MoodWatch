export async function POST(request: Request) {
  const { mood, description } = await request.json();
  console.log(mood, description);

  return Response.json({ message: "working" });
}
