export default async function ({ params }: { params: any }) {
  return (
    <div>
      {params?.id}
    </div>
  )
}