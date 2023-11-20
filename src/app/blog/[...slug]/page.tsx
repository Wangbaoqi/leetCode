export default function Page({ params }: { params: { slug: string } }) {
  console.log(params, 'params');

  return <div>My Post: {params.slug}</div>;
}
