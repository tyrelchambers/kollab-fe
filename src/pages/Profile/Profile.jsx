import React from "react";
import "./Profile.css";
import DisplayWrapper from "../../layouts/DisplayWrapper/DisplayWrapper";
import { H1 } from "../../components/Headings/Headings";
import ProfileForm from "../../components/Forms/ProfileForm";

const Profile = () => {
  return (
    <DisplayWrapper classNames="p-8">
      <H1>Manage your account</H1>
      <div className="container">
        <ProfileForm />
      </div>
    </DisplayWrapper>
  );
};

export default Profile;
