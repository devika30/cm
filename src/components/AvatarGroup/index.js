import "./avatargroup.css";

const AvatarGroup = ({ avatars }) => {
  return (
    <div className="avatar-group">
      {avatars.map((avatar) => (
        <div key={avatar.id} className="avatar">
          <img src={avatar.url} alt={avatar.alt} className="avatar-img" />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;