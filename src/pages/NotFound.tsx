import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiArrowLeft } from "react-icons/fi";
import RoutePaths from "../routes/RoutePaths";
import { Container } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Container className="flex min-h-[70dvh] flex-col items-center justify-center py-32 text-center">
      <p className="font-mono text-6xl font-semibold text-accent sm:text-7xl">404</p>
      <h1 className="mt-6 text-3xl font-semibold">{t("notFound.title")}</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{t("notFound.desc")}</p>
      <Button as={Link} to={RoutePaths.Home} className="mt-8" size="lg">
        <FiArrowLeft size={16} />
        {t("common.backHome")}
      </Button>
    </Container>
  );
}
