import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";
import TeamDetailsMain from "@/components/layout/main/TeamDetailsMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
import getTeamMembers from "@/libs/getTeamMembers";
import { notFound } from "next/navigation";
export const metadata = {
  title: "Client Details",
  description: "Client Details | Tech Connect APAC",
};
const team = getTeamMembers();
export default function TeamDetails({ params }) {
  const { id } = params;
  const isExistTeamSingle = team?.find(({ id: id1 }) => id1 === parseInt(id));
  if (!isExistTeamSingle) {
    notFound();
  }
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <TeamDetailsMain />
    </PageWrapper>
  );
}
export async function generateStaticParams() {
  return team?.map(({ id }) => ({ id: id.toString() }));
}
