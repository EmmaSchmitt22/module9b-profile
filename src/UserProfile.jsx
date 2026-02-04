function UserProfile() {
  const name = "Emma Schmitt";
  const bio = "Student at SMC";
  const profileImage = "https://media.licdn.com/dms/image/v2/D4E03AQEdqoEOQ2lGPQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730329339772?e=2147483647&v=beta&t=3G7BqA9deostv7OyhlDyFXP05L2V3UCL8HQ6IW-8E9s";

const styles = {
     container: {
	maxWidth: '300px',
	backgroundColor: 'pink',
	fontFamily: 'Helvetica, sans-serif',
	textAlign: 'center'
	},
     image: {
	width: '150px',
	height: '120px',
	borderRadius: '80%',
	objectFit: 'cover',
	},
     title: {
	fontSize: '30px',
	color: '#C6892E'
	},
     bio: {
	fontSize: '20px',
	color: '#725519'
	}
};

  return (
    <div style={styles.container}>

      <img src={profileImage} alt={`${name}'s profile`} style={styles.image} />
      <h1 style={styles.title}>{name}</h1>
      <p style={styles.bio}>{bio}</p>
    </div>
  );
}

export default UserProfile;