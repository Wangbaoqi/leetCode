import { redirect } from 'next/navigation';

export async function GET(request: Request, context: any) {
  // const team = params.team // '1'
  console.log(context);
  return Response.json({ name: 'John Doe' });
}
