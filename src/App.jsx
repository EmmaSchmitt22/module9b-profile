import UserProfile from './UserProfile';

function App() {
const pageWrapperStyle ={
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#A8F576',
minHeight: '100vh'

};
  return (
    <div style={pageWrapperStyle}>
      <UserProfile />
    </div>
  );
}

export default App;
