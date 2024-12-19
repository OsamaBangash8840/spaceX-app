import { getDataById } from "@/api";
import { Button, Typography } from "@/app/components/common";
import BackButton from "@/app/components/common/BackButton";
import { DetailsCard } from "@/app/components/common/DetailsCard";
import { Crew } from "@/app/types/crew";

const CrewDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;  

  const crewData: Crew = await getDataById("crew", id);

  if (!crewData) {
    return <Typography variant="h3" className="p-8 text-red-500">Crew member not found</Typography>;
  }

  return (
    <div className="p-8">
      <DetailsCard
        data={crewData}
        images={crewData.image ? [crewData.image] : []}
        renderDetails={(data) => (
          <>
            <Typography variant="h1" className="text-white">{data.name}</Typography>
            <Typography variant="h4" className="text-white mt-4 mb-4">Currently Working at: {data.agency}</Typography>
            <Typography
              className={ data.status === "active" ? "text-green-600" : "text-red-600"}
              variant="h5"
            >
              Status: {data.status}
            </Typography>
            <div className="grid grid-cols-2 mt-4 gap-6">
              <Button href={data.wikipedia} className="mt-3">
                <Typography variant="h6">Readmore</Typography>
              </Button>
              <BackButton/>
            </div>
          </>
        )}
      />
    </div>
  );
};

export default CrewDetail;
