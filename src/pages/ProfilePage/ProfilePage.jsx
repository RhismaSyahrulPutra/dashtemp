import PageWrapper from "../../components/UiComponents/PageWrapper";
import Header from "../../components/UiComponents/Header";

// Components
import HeaderProfile from "../../components/ProfileComponent/HeaderProfile";
import PersonalInformation from "../../components/ProfileComponent/PersonalInformation";
import AddressInformation from "../../components/ProfileComponent/AddressInformation";

function ProfilePage() {
  return (
    <PageWrapper>
      <Header>PROFILE</Header>

      <div>
        <HeaderProfile />
        <PersonalInformation />
        <AddressInformation />
      </div>
    </PageWrapper>
  );
}

export default ProfilePage;
