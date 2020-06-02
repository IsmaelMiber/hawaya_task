import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import * as profileActions from '../../redux/actions/profile';

// SVG Icons
import SettingIconSVG from '../../../assets/images/icons/iconPreferences-New.svg';
import MoreIconSVG from '../../../assets/images/icons/iconMore.svg';
import VerifiedBadgeSVG from '../../../assets/images/icons/IdVerified.svg';
import BirthdayIconSVG from '../../../assets/images/icons/iconBirthday.svg';
import JobIconSVG from '../../../assets/images/icons/iconJob.svg';
import LocationIconSVG from '../../../assets/images/icons/iconLocation.svg';
import HomeTownIconSVG from '../../../assets/images/icons/iconHometown.svg';
import HeartIconSVG from '../../../assets/images/icons/iconHeart.svg';
import ReligionIconSVG from '../../../assets/images/icons/iconReligion.svg';
import PraysIconSVG from '../../../assets/images/icons/Prays.svg';
import HieghtIconSVG from '../../../assets/images/icons/iconHieght.svg';
import SmokingIconSVG from '../../../assets/images/icons/iconSmoking.svg';
import HaveKidsIconSVG from '../../../assets/images/icons/iconHaveKids.svg';
import HeartSolidIconSVG from '../../../assets/images/icons/iconHeartSolid.svg';

// Images
const profilePlaceHolder = require('../../../assets/images/profilePlaceHolder.jpg');

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: this.props.likes || [],
    };

    this.info = {
      profilePic:
        'https://image.cnbcfm.com/api/v1/image/105409335-1534906307925gettyimages-917897974.jpeg?v=1590688824&w=1400&h=950',
      username: 'Suzanne',
      birthday: '26',
      jobTitle: 'Visual Artist',
      locationLiveIn: 'Garden City, Cairo',
      bornIn: 'Paris, France',
      verifid: true,
      bio:
        'I love reading, my fav tv show is friends and I like jazz music,English teacher, traveling around the world.',
      about: {
        socialStatus: 'Never Married',
        religion: 'Muslim Sunni',
        prays: 'Prays occasionally',
        height: 176,
        smoke: "Doesn't Smoke",
        kids: "Doesn't have kids",
      },
    };

    var {birthday, jobTitle, locationLiveIn, bornIn} = this.info;

    this.infoRows = [];
    if (birthday) {
      this.infoRows.push({
        text: birthday + ' years old',
        icon: BirthdayIconSVG,
      });
    }
    if (jobTitle) {
      this.infoRows.push({
        text: jobTitle,
        icon: JobIconSVG,
      });
    }
    if (locationLiveIn) {
      this.infoRows.push({
        text: 'Lives in ' + locationLiveIn,
        icon: LocationIconSVG,
      });
    }
    if (bornIn) {
      this.infoRows.push({
        text: 'From ' + bornIn,
        icon: HomeTownIconSVG,
      });
    }

    this.aboutTags = [];
    var {about = {}} = this.info;
    var {socialStatus, religion, prays, height, smoke, kids} = about;
    if (socialStatus) {
      this.aboutTags.push({
        text: socialStatus,
        icon: HeartIconSVG,
      });
    }
    if (religion) {
      this.aboutTags.push({
        text: religion,
        icon: ReligionIconSVG,
      });
    }
    if (prays) {
      this.aboutTags.push({
        text: prays,
        icon: PraysIconSVG,
      });
    }
    if (height) {
      this.aboutTags.push({
        text: height + ' cm',
        icon: HieghtIconSVG,
      });
    }
    if (smoke) {
      this.aboutTags.push({
        text: smoke,
        icon: SmokingIconSVG,
      });
    }
    if (kids) {
      this.aboutTags.push({
        text: kids,
        icon: HaveKidsIconSVG,
      });
    }
  }

  onTagPress = () => {};

  renderTag = (text, Icon) => {
    return (
      <TouchableOpacity onPress={() => this.onTagPress()}>
        <View style={styles.tagContainer}>
          <Icon />
          <Text style={styles.tagText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderLikeBtn = ({fly, type, onPress} = {}) => {
    var style = fly ? styles.fly : styles.likeBtn;
    return (
      <TouchableOpacity style={style} onPress={onPress}>
        <View style={styles.likeBtnContainer}>
          {this.state.likes.includes(type) ? (
            <HeartSolidIconSVG {...styles.svgIcon} />
          ) : (
            <HeartIconSVG {...styles.svgIcon} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  addLike = like => {
    var {likes} = this.state;
    var isExists = likes.includes(like);
    if (isExists) {
      likes = likes.filter(target => target != like);
    } else {
      likes = [...likes, like];
    }
    this.setState({likes: likes});
    this.props.addLikes(likes);
  };

  goToSettingScreen = () => {
    this.props.navigation.navigate('SettingScreen');
  };

  goToMoreScreen = () => {
    this.props.navigation.navigate('MoreScreen');
  };

  render() {
    var {verifid, bio, profilePic} = this.info;
    return (
      <ScrollView contentContainerStyle={styles.contentContainerScrollView}>
        <View style={styles.container}>
          {/* Start 0f Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={this.goToSettingScreen}>
              <SettingIconSVG {...styles.svgIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goToMoreScreen}>
              <MoreIconSVG {...styles.svgIcon} />
            </TouchableOpacity>
          </View>
          {/* End 0f Header */}
          {/* Start 0f User Info */}
          <View style={styles.profilePicContainer}>
            {profilePic ? (
              <Image
                style={styles.img}
                resizeMode="cover"
                source={{
                  uri: profilePic,
                }}
              />
            ) : (
              <Image
                style={styles.img}
                resizeMode="cover"
                source={profilePlaceHolder}
              />
            )}
            {this.renderLikeBtn({
              fly: true,
              type: 'profilePic',
              onPress: () => this.addLike('profilePic'),
            })}
          </View>

          <View style={styles.userInfo}>
            <View style={styles.usernameContainer}>
              <Text style={styles.username}>Suzanne</Text>
              {verifid ? <VerifiedBadgeSVG {...styles.svgIcon} /> : null}
            </View>
            {this.infoRows.length > 0 ? (
              <View style={styles.infoContainer}>
                {this.infoRows.map(({text, icon: Icon}) => {
                  return (
                    <View key={text} style={styles.infoRow}>
                      <Icon {...styles.svgIcon} />
                      <Text style={styles.infoText}>{text}</Text>
                    </View>
                  );
                })}
              </View>
            ) : null}
            {/* End 0f User Info */}

            {/* Start 0f Bio Card */}
            {bio ? (
              <View style={styles.card}>
                <Text style={styles.bioText}>{bio}</Text>
                {this.renderLikeBtn({
                  type: 'bio',
                  onPress: () => this.addLike('bio'),
                })}
              </View>
            ) : null}
            {/* End 0f Bio Card */}

            {/* Start 0f Tags Card */}
            {this.aboutTags.length > 0 ? (
              <View style={styles.card}>
                <Text style={styles.cardTitle}>About Me</Text>
                <View style={styles.tagContainers}>
                  {this.aboutTags.map(({text, icon: Icon}) => {
                    return <View key={text}>{this.renderTag(text, Icon)}</View>;
                  })}
                </View>
                {this.renderLikeBtn({
                  fly: true,
                  type: 'tags',
                  onPress: () => this.addLike('tags'),
                })}
              </View>
            ) : null}
            {/* End 0f Tags Card Container */}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  var {profile} = state;
  return {
    likes: profile.profileLikes,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    addLikes: likes => dispatch(profileActions.saveProfileLikes(likes)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
