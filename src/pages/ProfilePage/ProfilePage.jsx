import PageWrapper from "../../components/UiComponents/PageWrapper";
import Header from "../../components/UiComponents/Header";

// Components
import AccountInformation from "../../components/ProfileComponent/AccountInformation";
import PersonalInformation from "../../components/ProfileComponent/PersonalInformation";

function ProfilePage() {
  return (
    <PageWrapper>
      <Header>PROFILE</Header>

      <div>
        <PersonalInformation />
        <AccountInformation />
      </div>
    </PageWrapper>
  );
}

export default ProfilePage;
