import AboutMain from "@/components/layout/main/AboutMain";
import Home2Main from "@/components/layout/main/Home2Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";
export const metadata = {
  title: "About Us",
  description: "About Us | Tech Connect APAC",
};
export default function About() {
  return (
    <PageWrapper
      headerStyle={3}
      footerStyle={3}
      headerBg={"black"}
      footerBg={"black"}
    >
      <ThemeController />
      <AboutMain />
    </PageWrapper>
  );
}
