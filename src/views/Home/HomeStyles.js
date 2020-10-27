import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 20,
  },
  profileHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  avatarName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgProfile: {
    width: 30,
    height: 45,
    marginRight: 15,
  },
  ProfileName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  scroll: { paddingHorizontal: 13, height: '94%', paddingBottom: 500 },
  refresh: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 70,
    right: 15,
    borderWidth: 2,
  },
});

export default styles;
