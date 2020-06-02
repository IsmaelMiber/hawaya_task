import {StyleSheet} from 'react-native';
import Fonts from '../../utils/Fonts';
import Responsive from '../../utils/Responsive';

const styles = StyleSheet.create({
  contentContainerScrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: Responsive.calcWidth(24),
    backgroundColor: '#f7f7f7',
  },
  svgIcon: {
    width: Responsive.calcWidth(24),
    height: Responsive.calcWidth(24),
  },
  img: {
    height: '100%',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Responsive.calcHeight(24 - 16),
    paddingVertical: Responsive.calcHeight(16),
  },
  profilePicContainer: {
    borderRadius: Responsive.calcWidth(15),
    height: Responsive.calcHeight(350),
    width: '100%',
    overflow: 'hidden',
    marginBottom: Responsive.calcHeight(24),
  },
  userInfo: {
    marginLeft: Responsive.calcWidth(10),
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Responsive.calcHeight(15),
  },
  username: {
    fontSize: Responsive.calcFont(34),
    fontFamily: Fonts.skolarExtraBold,
    textAlign: 'left',
    marginRight: Responsive.calcWidth(10),
  },
  infoContainer: {
    marginBottom: Responsive.calcHeight(14),
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Responsive.calcHeight(10),
  },
  infoText: {
    fontSize: Responsive.calcFont(16),
    fontFamily: Fonts.skolarRegular,
    textAlign: 'left',
    marginLeft: Responsive.calcWidth(5),
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: Responsive.calcWidth(16),
    padding: Responsive.calcWidth(18),
    marginBottom: Responsive.calcHeight(24),
  },
  bioText: {
    fontSize: Responsive.calcFont(16),
    fontFamily: Fonts.skolarRegular,
    textAlign: 'center',
    lineHeight: Responsive.calcHeight(16 * 1.8),
  },
  cardTitle: {
    fontSize: Responsive.calcFont(16),
    fontFamily: Fonts.skolarExtraBold,
    textAlign: 'center',
  },
  tagContainer: {
    borderRadius: Responsive.calcWidth(25),
    borderWidth: Responsive.calcWidth(2),
    borderColor: '#e9e9e9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Responsive.calcWidth(14),
    paddingVertical: Responsive.calcHeight(3),
    marginBottom: Responsive.calcHeight(10),
  },
  tagText: {
    fontSize: Responsive.calcFont(14),
    fontFamily: Fonts.skolarRegular,
    textAlign: 'right',
    marginLeft: Responsive.calcWidth(5),
  },
  tagContainers: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginTop: Responsive.calcHeight(15),
    paddingBottom: Responsive.calcHeight(24),
  },
  likeBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Responsive.calcWidth(50),
    height: Responsive.calcWidth(50),
    backgroundColor: '#fff',
    borderRadius: Responsive.calcWidth(50) / 2,

    // Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  likeBtn: {
    alignSelf: 'flex-end',
  },
  fly: {
    position: 'absolute',
    right: Responsive.calcWidth(15),
    bottom: Responsive.calcWidth(15),
    zIndex: 10000,
  },
});

export default styles;
