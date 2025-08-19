import Card, { CardBody } from "../UiComponents/Card";
import Button from "../UiComponents/Button";
import { FaGlobe, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { AvatarWithStatus } from "../UiComponents/Avatar";

function HeaderProfile() {
  return (
    <Card>
      <CardBody className="flex items-center justify-between w-full">
        {/* Foto + Nama & Jabatan */}
        <div className="flex items-center gap-4">
          <AvatarWithStatus
            src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
            alt="Profil"
            size="w-20"
            status="online" // bisa ganti offline, busy, away
            shape="rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg text-primary">
              Choiyoungdok.
            </h3>
            <p className="text-sm text-gray-400">
              Junior FullStack Developer | Bandung, Indonesia
            </p>
          </div>
        </div>

        {/* Ikon sosial media */}
        <div className="flex gap-2">
          <Button
            variant="primary"
            size="sm"
            shape="circle"
            as="a"
            href="https://rhisma-syahrul-putra.vercel.app"
            target="_blank"
          >
            <FaGlobe className="w-4 h-4" />
          </Button>
          <Button
            variant="primary"
            size="sm"
            shape="circle"
            as="a"
            href="https://www.linkedin.com/in/rhisma-syahrul-putra"
            target="_blank"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </Button>
          <Button
            variant="primary"
            size="sm"
            shape="circle"
            as="a"
            href="https://github.com/RhismaSyahrulPutra"
            target="_blank"
          >
            <FaGithub className="w-4 h-4" />
          </Button>
          <Button
            variant="primary"
            size="sm"
            shape="circle"
            as="a"
            href="https://www.instagram.com/choiyoungdok"
            target="_blank"
          >
            <FaInstagram className="w-4 h-4" />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default HeaderProfile;
